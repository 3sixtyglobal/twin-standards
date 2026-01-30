# Interface: IUneceQuarantineInstructions

Instructions for a period of imposed isolation or detention.

## See

https://vocabulary.uncefact.org/QuarantineInstructions

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

> **type**: `"QuarantineInstructions"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

The textual description of these quarantine instructions.

#### See

https://vocabulary.uncefact.org/description

***

### quarantineInstructionsDescriptionCode?

> `optional` **quarantineInstructionsDescriptionCode**: `string`

The code specifying the description of these quarantine instructions.

#### See

https://vocabulary.uncefact.org/quarantineInstructionsDescriptionCode
