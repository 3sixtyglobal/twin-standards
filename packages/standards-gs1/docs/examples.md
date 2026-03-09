# Standards GS1 Examples

These snippets cover identifier checks, helper extraction methods, validation utilities, and schema registration.

## Gs1IdentifiersValidation

```typescript
import type { IValidationFailure } from '@twin.org/core';
import { Gs1IdentifiersValidation } from '@twin.org/standards-gs1';

const failures: IValidationFailure[] = [];
const epc = 'urn:epc:id:sgtin:0614141.112345.400';

const valid = Gs1IdentifiersValidation.epcId('item.id', epc, failures);
const gtin = Gs1IdentifiersValidation.extractEpcIdGtin(epc);
const gln = Gs1IdentifiersValidation.extractEpcIdGln('urn:epc:id:sgln:0614141.12345.0');

console.log(valid); // true
console.log(gtin); // 0614141.112345.400
console.log(gln); // 0614141.12345.0
```

## Gs1Validation

```typescript
import type { IValidationFailure } from '@twin.org/core';
import { Gs1Location, Gs1Validation } from '@twin.org/standards-gs1';

const failures: IValidationFailure[] = [];
const location = new Gs1Location();
location.id = 'urn:epc:id:sgln:0614141.12345.0';
location.city = 'Rotterdam';
location.countryCode = 'NL';
location.latitude = 51.9244;
location.longitude = 4.4777;

const valid = Gs1Validation.locationMasterData('location', location, failures);

console.log(valid); // true
console.log(failures.length); // 0
```

## Gs1Is And Data Type Registration

```typescript
import { EpcisDataTypes, Gs1DataTypes, Gs1Identifiers, Gs1Is } from '@twin.org/standards-gs1';

EpcisDataTypes.registerRedirects();
EpcisDataTypes.registerTypes();
Gs1DataTypes.registerTypes();
Gs1Identifiers.registerIdentifiers();

const isHex = Gs1Is.isEpcHex('3034257BF7194E4000001A85');
const isGeo = Gs1Is.isGeoUri('geo:51.9244,4.4777');

console.log(isHex); // true
console.log(isGeo); // true
```
