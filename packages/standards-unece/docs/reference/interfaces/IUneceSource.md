# Interface: IUneceSource

A place from which water originates, such as a hot spring or lake that provides water to public drinking water supplies
and private wells.

## See

https://vocabulary.uncefact.org/Source

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

> **type**: `"Source"`

JSON-LD Type.

***

### bathingProhibitionCaution?

> `optional` **bathingProhibitionCaution**: `string`

A caution, expressed as text, of a bathing prohibition for this water source.

#### See

https://vocabulary.uncefact.org/bathingProhibitionCaution

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category for this water source.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### characteristic?

> `optional` **characteristic**: `string`

A characteristic, expressed as text, for this water source.

#### See

https://vocabulary.uncefact.org/characteristic

***

### characteristicCode?

> `optional` **characteristicCode**: `string`

The code specifying the characteristic of this water source.

#### See

https://vocabulary.uncefact.org/characteristicCode

***

### description?

> `optional` **description**: `string`

A textual description of this water source.

#### See

https://vocabulary.uncefact.org/description

***

### drinkingProhibitionCaution?

> `optional` **drinkingProhibitionCaution**: `string`

A caution, expressed as text, of a drinking prohibition for this water source.

#### See

https://vocabulary.uncefact.org/drinkingProhibitionCaution

***

### healthBenefit?

> `optional` **healthBenefit**: `string`

A health benefit, expressed as text, for this water source.

#### See

https://vocabulary.uncefact.org/healthBenefit

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this water source.

#### See

https://vocabulary.uncefact.org/identifier

***

### marketingPhrase?

> `optional` **marketingPhrase**: `string`

A marketing phrase, expressed as text, for this water source.

#### See

https://vocabulary.uncefact.org/marketingPhrase

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this water source.

#### See

https://vocabulary.uncefact.org/name
