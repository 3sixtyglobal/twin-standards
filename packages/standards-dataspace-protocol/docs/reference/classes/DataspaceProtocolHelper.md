# Abstract Class: DataspaceProtocolHelper

Dataspace protocol helper.

## Constructors

### Constructor

> **new DataspaceProtocolHelper**(): `DataspaceProtocolHelper`

#### Returns

`DataspaceProtocolHelper`

## Methods

### checkConformance()

> `static` **checkConformance**(`object`, `validationFailures`): `Promise`\<`boolean`\>

Checks whether the object passed as parameter is conformant to the DS Protocol definitions.

#### Parameters

##### object

`IJsonLdNodeObject`

The object to check

##### validationFailures

`IValidationFailure`[]

the Validation failures obtained during the conformance checking.

#### Returns

`Promise`\<`boolean`\>

true or false depending whether the object is conformant or not

***

### normalize()

> `static` **normalize**(`object`): `Promise`\<`IJsonLdNodeObject`\>

Normalizes the input object making it compliant with the DS Protocol specifications.

#### Parameters

##### object

`IJsonLdNodeObject`

The input object.

#### Returns

`Promise`\<`IJsonLdNodeObject`\>

The input object normalized.
