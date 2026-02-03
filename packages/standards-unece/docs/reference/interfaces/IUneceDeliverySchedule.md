# Interface: IUneceDeliverySchedule

Specification of the forecasted delivery quantities and date/time values for a delivery schedule.

## See

https://vocabulary.uncefact.org/DeliverySchedule

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

> **type**: `"DeliverySchedule"`

JSON-LD Type.

***

### scopeCode?

> `optional` **scopeCode**: `string`

The code indicating the scope of a forecast delivery schedule.

#### See

https://vocabulary.uncefact.org/scopeCode

***

### shipToParty?

> `optional` **shipToParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

A ship to party for this forecast delivery schedule.

#### See

https://vocabulary.uncefact.org/shipToParty

***

### specifiedTradeLineItem?

> `optional` **specifiedTradeLineItem**: [`IUneceSupplyChainTradeLineItem`](IUneceSupplyChainTradeLineItem.md)

A trade line item specified for this forecast delivery schedule.

#### See

https://vocabulary.uncefact.org/specifiedTradeLineItem
