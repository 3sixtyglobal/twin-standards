# Standards UNECE Examples

These snippets use location and code list helpers, then register UNECE data type mappings.

## UnLocodes

```typescript
import { UnLocodes } from '@twin.org/standards-unece';

const countries = await UnLocodes.getCountries();
const functions = await UnLocodes.getFunctions();
const location = await UnLocodes.getLocationByCode('NLRTM');
const subdivision = await UnLocodes.getSubdivisionByCode('NLZH');

console.log(countries.length > 0); // true
console.log(functions.length > 0); // true
console.log(location?.locode); // NLRTM
console.log(subdivision?.code); // ZH
```

## UnCodeLists

```typescript
import { UnCodeLists } from '@twin.org/standards-unece';

const descriptions = await UnCodeLists.getDescriptions('unece:transportModeCodeList', 'en');
const roadDescription = await UnCodeLists.getDescription('unece:transportModeCodeList', '3', 'en');
const roadLabel = await UnCodeLists.getLabel('unece:transportModeCodeList', '3', 'en');

console.log(Object.keys(descriptions).length > 0); // true
console.log(typeof roadDescription === 'string'); // true
console.log(typeof roadLabel === 'string'); // true
```

## UneceDataTypes

```typescript
import { UneceDataTypes } from '@twin.org/standards-unece';

UneceDataTypes.registerRedirects();
UneceDataTypes.registerTypes();

console.log(typeof UneceDataTypes.registerTypes === 'function'); // true
```
