# Interface: ITradeSettlementPayment

The specific discharge obligations in respect of funds or securities transferred between two or more parties as part of
a trade settlement.

## See

https://vocabulary.uncefact.org/TradeSettlementPayment

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

> **type**: `"TradeSettlementPayment"`

JSON-LD Type.

***

### closingBookDueDateTime?

> `optional` **closingBookDueDateTime**: `string`

A date, time, date time or other date time value of a closing book due date for this trade settlement payment.

#### See

https://vocabulary.uncefact.org/closingBookDueDateTime

***

### endToEndId?

> `optional` **endToEndId**: `string`

The unique identifier for the end-to-end processing of this trade settlement payment, such as an identifier assigned by
an initiating party to unambiguously identify the transaction.

#### See

https://vocabulary.uncefact.org/endToEndId

***

### instructionId?

> `optional` **instructionId**: `string`

The unique identifier of the instruction for this trade settlement payment.

#### See

https://vocabulary.uncefact.org/instructionId

***

### requestedExecutionDateTime?

> `optional` **requestedExecutionDateTime**: `string`

The date, time, date time or other date time value of the requested execution of this trade settlement payment.

#### See

https://vocabulary.uncefact.org/requestedExecutionDateTime

***

### specifiedPaymentTradeSettlement?

> `optional` **specifiedPaymentTradeSettlement**: [`IPaymentTradeSettlement`](IPaymentTradeSettlement.md)[]

A trade settlement payment specified for this trade settlement payment.

#### See

https://vocabulary.uncefact.org/specifiedPaymentTradeSettlement
