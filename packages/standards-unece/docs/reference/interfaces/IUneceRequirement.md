# Interface: IUneceRequirement

Common conditions contained in a contract or agreement applicable between trading partners.

## See

https://vocabulary.uncefact.org/Requirement

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

> **type**: `"Requirement"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this specified requirement.

#### See

https://vocabulary.uncefact.org/description

***

### rule?

> `optional` **rule**: `string`

A rule, expressed as text, for this specified requirement.

#### See

https://vocabulary.uncefact.org/rule

***

### specifiedPaymentTradeSettlement?

> `optional` **specifiedPaymentTradeSettlement**: [`IUnecePaymentTradeSettlement`](IUnecePaymentTradeSettlement.md)[]

The payment trade settlement for this specified requirement.

#### See

https://vocabulary.uncefact.org/specifiedPaymentTradeSettlement

***

### specifyingParty?

> `optional` **specifyingParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The party specifying this specified requirement.

#### See

https://vocabulary.uncefact.org/specifyingParty

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of specified requirement.

#### See

https://vocabulary.uncefact.org/typeCode
