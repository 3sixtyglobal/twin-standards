# Interface: IUneceDeliverySchedule

Specification of the forecasted delivery quantities and date/time values for a delivery schedule.

## See

https://vocabulary.uncefact.org/DeliverySchedule

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

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

> `optional` **shipToParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A ship to party for this forecast delivery schedule.

#### See

https://vocabulary.uncefact.org/shipToParty

***

### specifiedTradeLineItem?

> `optional` **specifiedTradeLineItem**: [`IUneceSupplyChainTradeLineItem`](IUneceSupplyChainTradeLineItem.md)[]

A trade line item specified for this forecast delivery schedule.

#### See

https://vocabulary.uncefact.org/specifiedTradeLineItem
