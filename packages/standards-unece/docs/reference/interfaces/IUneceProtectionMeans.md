# Interface: IUneceProtectionMeans

A way to protect something, such as human beings, animals or environment, from getting infected or becoming ill.

## See

https://vocabulary.uncefact.org/ProtectionMeans

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

> **type**: `"ProtectionMeans"`

JSON-LD Type.

***

### acceptedIndicator?

> `optional` **acceptedIndicator**: `boolean`

The indication of whether or not this disease protection means is accepted.

#### See

https://vocabulary.uncefact.org/acceptedIndicator

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category of disease protection means.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### description?

> `optional` **description**: `string`

A textual description of this disease protection means.

#### See

https://vocabulary.uncefact.org/description

***

### item?

> `optional` **item**: `string`

An item, expressed as text, for this disease protection means.

#### See

https://vocabulary.uncefact.org/item

***

### restriction?

> `optional` **restriction**: `string`

A restriction, expressed as text, for this disease protection means.

#### See

https://vocabulary.uncefact.org/restriction
