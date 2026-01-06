# Interface: IUneceCorrectiveAction

Improvements taken to eliminate causes of non-conformities or other undesirable situations, such as to an organization's
processes or products.

## See

https://vocabulary.uncefact.org/CorrectiveAction

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

> **type**: `"CorrectiveAction"`

JSON-LD Type.

***

### actionType?

> `optional` **actionType**: `string`

A type, expressed as text, for this corrective action.

#### See

https://vocabulary.uncefact.org/actionType

***

### description?

> `optional` **description**: `string`

A textual description for this corrective action.

#### See

https://vocabulary.uncefact.org/description

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of corrective action.

#### See

https://vocabulary.uncefact.org/typeCode
