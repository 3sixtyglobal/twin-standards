# Standards Schema.org Examples

These snippets register data types and validate coordinate payloads against schema.org constraints.

## SchemaOrgValidation

```typescript
import type { IValidationFailure } from '@3sixty/core';
import { SchemaOrgDataTypes, SchemaOrgValidation } from '@3sixty/standards-schema-org';

SchemaOrgDataTypes.registerRedirects();
SchemaOrgDataTypes.registerTypes();

const failures: IValidationFailure[] = [];
const valid = SchemaOrgValidation.geoCoordinates(
  'site.geo',
  {
    latitude: 53.3498,
    longitude: -6.2603
  },
  failures
);

console.log(valid); // true
console.log(failures.length); // 0
```
