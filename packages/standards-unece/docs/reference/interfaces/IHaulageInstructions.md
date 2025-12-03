# Interface: IHaulageInstructions

Instructions related to the action or process of conveyance.

## See

https://vocabulary.uncefact.org/HaulageInstructions

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

> **type**: `"HaulageInstructions"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

The textual description of these haulage instructions.

#### See

https://vocabulary.uncefact.org/description

***

### haulageInstructionsDescriptionCode?

> `optional` **haulageInstructionsDescriptionCode**: `string`

The code specifying the description of these haulage instructions.

#### See

https://vocabulary.uncefact.org/haulageInstructionsDescriptionCode
