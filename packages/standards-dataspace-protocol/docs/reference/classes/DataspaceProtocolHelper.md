# Abstract Class: DataspaceProtocolHelper

Dataspace protocol helper.

## Constructors

### Constructor

> **new DataspaceProtocolHelper**(): `DataspaceProtocolHelper`

#### Returns

`DataspaceProtocolHelper`

## Methods

### validate()

> `static` **validate**(`object`): `Promise`\<`IValidationFailure`[]\>

Checks whether the object passed as parameter is conformant to the DS Protocol definitions.

#### Parameters

##### object

`IJsonLdNodeObject`

The object to check

#### Returns

`Promise`\<`IValidationFailure`[]\>

An array of validation failures, empty if the object is conformant

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
