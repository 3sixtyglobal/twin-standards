import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvFiles = [
  '2024-2 UNLOCODE CodeListPart1.csv',
  '2024-2 UNLOCODE CodeListPart2.csv',
  '2024-2 UNLOCODE CodeListPart3.csv',
];
const subdivisionFile = '2024-2 SubdivisionCodes.csv';

const countriesDir = path.join(__dirname, 'countries', 'csv');
const subdivisionsDir = path.join(__dirname, 'subdivisions', 'csv');

// Ensure the countries directory exists and is clean
if (fs.existsSync(countriesDir)) {
  // Clean up existing files
  fs.readdirSync(countriesDir).forEach((file) => {
    fs.unlinkSync(path.join(countriesDir, file));
  });
} else {
  fs.mkdirSync(countriesDir, { recursive: true });
}

// Ensure the subdivisions directory exists and is clean
if (fs.existsSync(subdivisionsDir)) {
  // Clean up existing files
  fs.readdirSync(subdivisionsDir).forEach((file) => {
    fs.unlinkSync(path.join(subdivisionsDir, file));
  });
} else {
  fs.mkdirSync(subdivisionsDir, { recursive: true });
}

// Map to store file writers for each country
const countryWriters = new Map();
const subdivisionWriters = new Map();

// Function to get or create a writer for a country
function getCountryWriter(countryCode) {
  if (!countryWriters.has(countryCode)) {
    const filePath = path.join(countriesDir, `${countryCode}.csv`);
    const writer = fs.createWriteStream(filePath, { 
      flags: 'a',
      encoding: 'utf8'
    });
    countryWriters.set(countryCode, writer);
  }
  return countryWriters.get(countryCode);
}

// Function to get or create a writer for a country subdivision file
function getSubdivisionWriter(countryCode) {
  if (!subdivisionWriters.has(countryCode)) {
    const filePath = path.join(subdivisionsDir, `${countryCode}.csv`);
    const writer = fs.createWriteStream(filePath, {
      flags: 'a',
      encoding: 'utf8'
    });
    subdivisionWriters.set(countryCode, writer);
  }
  return subdivisionWriters.get(countryCode);
}

function parseCsvField(record, index) {
  let fieldIndex = 0;
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < record.length; i++) {
    const char = record[i];
    if (char === '"') {
      if (inQuotes && record[i + 1] === '"') {
        if (fieldIndex === index) {
          field += '"';
        }
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (!inQuotes && char === ',') {
      if (fieldIndex === index) {
        return field;
      }
      fieldIndex++;
      field = '';
      continue;
    }

    if (fieldIndex === index) {
      field += char;
    }
  }

  return fieldIndex === index ? field : '';
}

async function parseCsvRecords(filePath, onRecord) {
  return new Promise((resolve, reject) => {
    const fileStream = createReadStream(filePath, { encoding: 'latin1' });
    const rl = createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    let record = '';
    let inQuotes = false;

    rl.on('line', line => {
      record = record ? `${record}\n${line}` : line;

      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          if (inQuotes && line[i + 1] === '"') {
            i++;
          } else {
            inQuotes = !inQuotes;
          }
        }
      }

      if (!inQuotes) {
        const trimmed = record.trim();
        if (trimmed) {
          onRecord(trimmed);
        }
        record = '';
      }
    });

    rl.on('close', () => {
      const trimmed = record.trim();
      if (trimmed) {
        onRecord(trimmed);
      }
      resolve();
    });

    rl.on('error', reject);
    fileStream.on('error', reject);
  });
}

// Function to process a single CSV file
async function processFile(filePath) {
  return parseCsvRecords(filePath, record => {
    const countryCode = parseCsvField(record, 1).trim();

    if (countryCode) {
      const writer = getCountryWriter(countryCode);
      writer.write(record + '\n');
    }
  });
}

// Function to process the subdivisions CSV file
async function processSubdivisionFile(filePath) {
  return parseCsvRecords(filePath, record => {
    const countryCode = parseCsvField(record, 0).trim();

    if (countryCode) {
      const writer = getSubdivisionWriter(countryCode);
      writer.write(record + '\n');
    }
  });
}

// Main function
async function main() {
  try {
    console.log('Starting to split UNLOCODE CSV files by country...');
    
    for (const file of csvFiles) {
      const filePath = path.join(__dirname, file);
      if (fs.existsSync(filePath)) {
        console.log(`Processing ${file}...`);
        await processFile(filePath);
      } else {
        console.warn(`File not found: ${filePath}`);
      }
    }

    const subdivisionPath = path.join(__dirname, subdivisionFile);
    if (fs.existsSync(subdivisionPath)) {
      console.log(`Processing ${subdivisionFile}...`);
      await processSubdivisionFile(subdivisionPath);
    } else {
      console.warn(`File not found: ${subdivisionPath}`);
    }

    // Close all writers
    for (const writer of countryWriters.values()) {
      await new Promise((resolve) => {
        writer.end(resolve);
      });
    }

    for (const writer of subdivisionWriters.values()) {
      await new Promise((resolve) => {
        writer.end(resolve);
      });
    }

    console.log(`✓ Successfully split files into ${countryWriters.size} country files in the countries/ directory`);
    console.log(`✓ Successfully split subdivision files into ${subdivisionWriters.size} country files in the subdivisions/ directory`);
  } catch (error) {
    console.error('Error processing files:', error);
    process.exit(1);
  }
}

main();
