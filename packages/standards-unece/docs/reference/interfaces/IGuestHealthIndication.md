# Interface: IGuestHealthIndication

A guest's physical or mental condition.

## See

https://vocabulary.uncefact.org/GuestHealthIndication

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

> **type**: `"GuestHealthIndication"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this guest health indication.

#### See

https://vocabulary.uncefact.org/description

***

### restriction?

> `optional` **restriction**: `string`

A restriction, expressed as text, for this guest health indication.

#### See

https://vocabulary.uncefact.org/restriction

***

### status?

> `optional` **status**: `string`

A status, expressed as text, for this guest health indication.

#### See

https://vocabulary.uncefact.org/status

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of guest heath indication.

#### See

https://vocabulary.uncefact.org/typeCode
