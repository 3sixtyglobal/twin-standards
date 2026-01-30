# Interface: IUnecePersonalEffects

Specified privately owned articles for personal use by an individual.

## See

https://vocabulary.uncefact.org/PersonalEffects

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

> **type**: `"PersonalEffects"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of these specified personal effects.

#### See

https://vocabulary.uncefact.org/description

***

### onboardQuantity?

> `optional` **onboardQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

An onboard number of these specified personal effects.

#### See

https://vocabulary.uncefact.org/onboardQuantity

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

A sequence number for these specified personal effects.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of specified personal effects.

#### See

https://vocabulary.uncefact.org/typeCode
