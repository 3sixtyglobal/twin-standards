# Standards VDA Examples

These snippets validate JAIF identifiers, extract parsed segments, and register identifier handlers.

## VdaIdentifiersValidation

```typescript
import type { IValidationFailure } from '@twin.org/core';
import { VdaIdentifiersValidation } from '@twin.org/standards-vda';

const failures: IValidationFailure[] = [];
const urn = 'urn:jaif:id:obj:A1A020123456789AB12+SERIAL1';

const valid = VdaIdentifiersValidation.jaifId('asset.id', urn, failures);
const parsed = VdaIdentifiersValidation.extractIdentifier(urn);

console.log(valid); // true
console.log(parsed?.issuingAgencyCode); // 02
```

## VdaIdentifiers

```typescript
import { VdaIdentifiers } from '@twin.org/standards-vda';

VdaIdentifiers.registerIdentifiers();

console.log(typeof VdaIdentifiers.registerIdentifiers === 'function'); // true
```
