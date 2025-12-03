# Interface: IDirectPosition

A specified physical location described within a coordinate reference system.

## See

https://vocabulary.uncefact.org/DirectPosition

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

> **type**: `"DirectPosition"`

JSON-LD Type.

***

### axisLabelList?

> `optional` **axisLabelList**: `string`

An ordered list of axis labels, expressed as text, for this specified direct position.

#### See

https://vocabulary.uncefact.org/axisLabelList

***

### coordinateReferenceDimension?

> `optional` **coordinateReferenceDimension**: `string`

A coordinate reference dimension, expressed as text, for this specified direct position.

#### See

https://vocabulary.uncefact.org/coordinateReferenceDimension

***

### countNumeric?

> `optional` **countNumeric**: `string`

A count for this specified direct position.

#### See

https://vocabulary.uncefact.org/countNumeric

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of the reference for this specified direct position.

#### See

https://vocabulary.uncefact.org/name

***

### uOMLabelList?

> `optional` **uOMLabelList**: `string`

An ordered list of Unit Of Measure (UOM) labels, expressed as text, for this specified direct position.

#### See

https://vocabulary.uncefact.org/uOMLabelList
