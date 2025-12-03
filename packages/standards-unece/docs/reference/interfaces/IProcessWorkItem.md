# Interface: IProcessWorkItem

A distinct operation or task that is part of a process.

## See

https://vocabulary.uncefact.org/ProcessWorkItem

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

> **type**: `"ProcessWorkItem"`

JSON-LD Type.

***

### alternativeClassificationCode?

> `optional` **alternativeClassificationCode**: `string`

The code specifying an alternative classification for this process work item.

#### See

https://vocabulary.uncefact.org/alternativeClassificationCode

***

### description?

> `optional` **description**: `string`

A textual description for this process work item.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this process work item.

#### See

https://vocabulary.uncefact.org/identifier

***

### primaryClassificationCode?

> `optional` **primaryClassificationCode**: `string`

The code specifying the primary classification for this process work item.

#### See

https://vocabulary.uncefact.org/primaryClassificationCode

***

### totalQuantity?

> `optional` **totalQuantity**: [`IQuantityType`](IQuantityType.md)

The total quantity for this process work item.

#### See

https://vocabulary.uncefact.org/totalQuantity

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of process work item.

#### See

https://vocabulary.uncefact.org/typeCode
