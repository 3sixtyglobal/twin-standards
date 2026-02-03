# Interface: IUneceGuarantee

An official promise or assurance to fulfil a financial obligation.

## See

https://vocabulary.uncefact.org/Guarantee

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

> **type**: `"Guarantee"`

JSON-LD Type.

***

### condition?

> `optional` **condition**: `string`

A condition, expressed as text, for this financial guarantee.

#### See

https://vocabulary.uncefact.org/condition

***

### description?

> `optional` **description**: `string`

A textual description of this financial guarantee.

#### See

https://vocabulary.uncefact.org/description

***

### effectiveDelimitedPeriod?

> `optional` **effectiveDelimitedPeriod**: [`IUneceDelimitedPeriod`](IUneceDelimitedPeriod.md)

The period within which this financial guarantee is effective.

#### See

https://vocabulary.uncefact.org/effectiveDelimitedPeriod

***

### liabilityAmount?

> `optional` **liabilityAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value of a liability in this financial guarantee.

#### See

https://vocabulary.uncefact.org/liabilityAmount
