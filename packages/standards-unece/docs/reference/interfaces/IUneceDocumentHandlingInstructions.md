# Interface: IUneceDocumentHandlingInstructions

Instructions for handling the document, such as stamping the agent signature.

## See

https://vocabulary.uncefact.org/DocumentHandlingInstructions

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

> **type**: `"DocumentHandlingInstructions"`

JSON-LD Type.

***

### procedure?

> `optional` **procedure**: `string`

A procedure, expressed as text, for these document handling instructions.

#### See

https://vocabulary.uncefact.org/procedure

***

### requirementIndicator?

> `optional` **requirementIndicator**: `boolean`

The indication of whether or not a requirement exists for these document handling instructions.

#### See

https://vocabulary.uncefact.org/requirementIndicator
