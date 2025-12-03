# Interface: IProductCharacteristicCondition

A state that applies to a product characteristic.

## See

https://vocabulary.uncefact.org/ProductCharacteristicCondition

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

> **type**: `"ProductCharacteristicCondition"`

JSON-LD Type.

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this product characteristic condition.

#### See

https://vocabulary.uncefact.org/name

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of product characteristic condition.

#### See

https://vocabulary.uncefact.org/typeCode

***

### valueMeasure?

> `optional` **valueMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure of the value for this product characteristic condition.

#### See

https://vocabulary.uncefact.org/valueMeasure
