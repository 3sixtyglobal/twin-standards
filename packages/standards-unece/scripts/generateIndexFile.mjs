// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Update `src/index.ts` to export generated codes, codeTypes, dataTypes, and all model files
 */
export async function generateIndexFile() {
	const indexPath = path.join(__dirname, '..', 'src', 'index.ts');

	const srcDir = path.join(__dirname, '..', 'src');

	const collected = [];
	async function walk(dir) {
		const entries = await readdir(dir, { withFileTypes: true });

		for (const ent of entries) {
			const full = path.join(dir, ent.name);
			if (ent.isDirectory()) {
				await walk(full);
			} else if (ent.isFile()) {
				if (ent.name.endsWith('.ts') && ent.name !== 'index.ts') {
					collected.push(full);
				}
			}
		}
	}

	await walk(srcDir);

	// Compute relative module paths and deduplicate
	const modules = collected
		.map(f => `./${path.relative(srcDir, f).replace(/\\/g, '/').replace(/\.ts$/, '')}`)
		.filter((v, i, a) => a.indexOf(v) === i)
		.sort();

	const lines = ['// Copyright 2025 IOTA Stiftung.', '// SPDX-License-Identifier: Apache-2.0.'];

	for (const mod of modules) {
		lines.push(`export * from "${mod}.js";`);
	}

	lines.push('');

	await writeFile(indexPath, lines.join('\n'));
}
