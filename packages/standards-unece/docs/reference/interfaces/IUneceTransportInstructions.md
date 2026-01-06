# Interface: IUneceTransportInstructions

Transport information of an instructive nature.

## See

https://vocabulary.uncefact.org/TransportInstructions

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"TransportInstructions"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of these transport instructions.

#### See

https://vocabulary.uncefact.org/description

***

### instructionsType?

> `optional` **instructionsType**: `string`

A type, expressed as text, for these transport instructions.

#### See

https://vocabulary.uncefact.org/instructionsType

***

### transportInstructionsDescriptionCode?

> `optional` **transportInstructionsDescriptionCode**: `string`

The code specifying a description of these transport instructions.

#### See

https://vocabulary.uncefact.org/transportInstructionsDescriptionCode
