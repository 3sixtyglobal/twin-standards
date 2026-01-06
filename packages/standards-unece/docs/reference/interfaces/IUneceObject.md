# Interface: IUneceObject

Anything that is visible or tangible, such as a product, process, or organization.

## See

https://vocabulary.uncefact.org/Object

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

> **type**: `"Object"`

JSON-LD Type.

***

### category?

> `optional` **category**: `string`

A category, expressed as text, for this specified object.

#### See

https://vocabulary.uncefact.org/category

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category for this specified object.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this specified object.

#### See

https://vocabulary.uncefact.org/identifier

***

### objectType?

> `optional` **objectType**: `string`

A type, expressed as text, for this specified object.

#### See

https://vocabulary.uncefact.org/objectType

***

### remark?

> `optional` **remark**: `string`

A remark, expressed as text, for this specified object.

#### See

https://vocabulary.uncefact.org/remark

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of specified object.

#### See

https://vocabulary.uncefact.org/typeCode
