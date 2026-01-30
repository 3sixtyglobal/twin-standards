# Interface: IUnecePetAnimal

A domestic or tamed animal that is kept for companionship or pleasure.

## See

https://vocabulary.uncefact.org/PetAnimal

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

> **type**: `"PetAnimal"`

JSON-LD Type.

***

### allowedIndicator?

> `optional` **allowedIndicator**: `boolean`

The indication of whether or not this pet animal is allowed.

#### See

https://vocabulary.uncefact.org/allowedIndicator

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category for this pet animal.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### description?

> `optional` **description**: `string`

A textual description of this pet animal.

#### See

https://vocabulary.uncefact.org/description

***

### restriction?

> `optional` **restriction**: `string`

A restriction, expressed as text, for this pet animal.

#### See

https://vocabulary.uncefact.org/restriction
