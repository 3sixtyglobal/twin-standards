# Interface: IUneceLaboratoryObservationInstructions

Information of an instructive nature that describes how to conduct this laboratory observation.

## See

https://vocabulary.uncefact.org/LaboratoryObservationInstructions

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"LaboratoryObservationInstructions"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

The textual description of this set of laboratory observation instructions.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this set of laboratory observation instructions.

#### See

https://vocabulary.uncefact.org/identifier

***

### instructionsType?

> `optional` **instructionsType**: `string`

The type, expressed as text, of this set of laboratory observation instructions.

#### See

https://vocabulary.uncefact.org/instructionsType

***

### interpretationCode?

> `optional` **interpretationCode**: `string`

The code specifying the interpretation for this laboratory instruction.

#### See

https://vocabulary.uncefact.org/interpretationCode

***

### laboratoryObservationInstructionsDescriptionCode?

> `optional` **laboratoryObservationInstructionsDescriptionCode**: `string`

The code specifying a description of a laboratory observation instruction or a set of instructions.

#### See

https://vocabulary.uncefact.org/laboratoryObservationInstructionsDescriptionCode

***

### latestUpdateDateTime?

> `optional` **latestUpdateDateTime**: `string`

The date, time, date time, or other date time value of the latest update of this set of laboratory observation
instructions.

#### See

https://vocabulary.uncefact.org/latestUpdateDateTime

***

### procedure?

> `optional` **procedure**: `string`

The procedure, expressed as text, for a set of laboratory observation Instructions.

#### See

https://vocabulary.uncefact.org/procedure

***

### propertyReferenceCode?

> `optional` **propertyReferenceCode**: `string`

The code specifying the property reference of this laboratory observation instruction.

#### See

https://vocabulary.uncefact.org/propertyReferenceCode

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

The sequence number of this set of laboratory observation instructions.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this set of laboratory observation instructions.

#### See

https://vocabulary.uncefact.org/statusCode
