# Class: Gs1IdentifiersValidation

Validation for GS1 identifiers.

## Constructors

### Constructor

> **new Gs1IdentifiersValidation**(): `Gs1IdentifiersValidation`

#### Returns

`Gs1IdentifiersValidation`

## Methods

### epcId() {#epcid}

> `static` **epcId**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc.

#### Parameters

##### propertyName

`string`

The name of the property being validated.

##### value

`unknown`

The value to test.

##### failures

`IValidationFailure`[]

The list of failures to add to.

#### Returns

`value is string`

True if the value is valid epc.

***

### epcIdGtin() {#epcidgtin}

> `static` **epcIdGtin**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc id gtin.

#### Parameters

##### propertyName

`string`

The name of the property being validated.

##### value

`unknown`

The value to test.

##### failures

`IValidationFailure`[]

The list of failures to add to.

#### Returns

`value is string`

True if the value is valid epc.

***

### epcIdGln() {#epcidgln}

> `static` **epcIdGln**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc id gln.

#### Parameters

##### propertyName

`string`

The name of the property being validated.

##### value

`unknown`

The value to test.

##### failures

`IValidationFailure`[]

The list of failures to add to.

#### Returns

`value is string`

True if the value is valid epc.

***

### epcClass() {#epcclass}

> `static` **epcClass**(`propertyName`, `value`, `failures`): `value is string`

Validate if the property is a valid epc class.

#### Parameters

##### propertyName

`string`

The name of the property being validated.

##### value

`unknown`

The value to test.

##### failures

`IValidationFailure`[]

The list of failures to add to.

#### Returns

`value is string`

True if the value is valid epc.

***

### extractEpcIdGtin() {#extractepcidgtin}

> `static` **extractEpcIdGtin**(`epc`): `string` \| `undefined`

Extract the EPC gtin from the URI.

#### Parameters

##### epc

`string`

The uri to extract from.

#### Returns

`string` \| `undefined`

The extracted data or undefined.

***

### extractEpcIdGln() {#extractepcidgln}

> `static` **extractEpcIdGln**(`epc`): `string` \| `undefined`

Extract the EPC gln from the URI.

#### Parameters

##### epc

`string`

The uri to extract from.

#### Returns

`string` \| `undefined`

The extracted data or undefined.

***

### extractEpcClassUri() {#extractepcclassuri}

> `static` **extractEpcClassUri**(`epc`): [`IEPCClassUri`](../interfaces/IEPCClassUri.md) \| `undefined`

Extract The EPC Class from the URI.

#### Parameters

##### epc

`string`

The uri to extract from.

#### Returns

[`IEPCClassUri`](../interfaces/IEPCClassUri.md) \| `undefined`

The extracted data or undefined.
