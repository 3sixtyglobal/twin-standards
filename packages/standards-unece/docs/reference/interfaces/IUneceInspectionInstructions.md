# Interface: IUneceInspectionInstructions

Information of an instructive nature that describes how to conduct an inspection.

## See

https://vocabulary.uncefact.org/InspectionInstructions

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

> **type**: `"InspectionInstructions"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this set of inspection instructions.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this set of inspection instructions.

#### See

https://vocabulary.uncefact.org/identifier

***

### inspectionInstructionsDescriptionCode?

> `optional` **inspectionInstructionsDescriptionCode**: `string`

The code specifying a description of a set of inspection instructions.

#### See

https://vocabulary.uncefact.org/inspectionInstructionsDescriptionCode

***

### instructionsType?

> `optional` **instructionsType**: `string`

A type, expressed as text, of this set of inspection instructions.

#### See

https://vocabulary.uncefact.org/instructionsType

***

### interpretationCode?

> `optional` **interpretationCode**: `string`

The code specifying the interpretation for this set of inspection instructions.

#### See

https://vocabulary.uncefact.org/interpretationCode

***

### latestUpdateDateTime?

> `optional` **latestUpdateDateTime**: `string`

The date, time, date time, or other date time value of the latest update of this set of inspection instructions.

#### See

https://vocabulary.uncefact.org/latestUpdateDateTime

***

### procedure?

> `optional` **procedure**: `string`

A procedure, expressed as text, for a set of inspection instructions.

#### See

https://vocabulary.uncefact.org/procedure

***

### propertyReferenceCode?

> `optional` **propertyReferenceCode**: `string`

The code specifying the property reference of this set of inspection instructions.

#### See

https://vocabulary.uncefact.org/propertyReferenceCode

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

The sequence number of this set of inspection instructions.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this set of inspection instructions.

#### See

https://vocabulary.uncefact.org/statusCode
