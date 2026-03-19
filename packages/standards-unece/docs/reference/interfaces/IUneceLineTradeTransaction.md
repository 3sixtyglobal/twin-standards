# Interface: IUneceLineTradeTransaction

A group of trade line items, trade line agreement, trade line delivery and trade line settlement details.

## See

https://vocabulary.uncefact.org/LineTradeTransaction

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"LineTradeTransaction"`

JSON-LD Type.

***

### applicableLineTradeAgreement? {#applicablelinetradeagreement}

> `optional` **applicableLineTradeAgreement?**: [`IUneceLineTradeAgreement`](IUneceLineTradeAgreement.md)[]

A trade agreement applicable to this line trade transaction, such as payment or delivery terms.

#### See

https://vocabulary.uncefact.org/applicableLineTradeAgreement

***

### applicableLineTradeDelivery? {#applicablelinetradedelivery}

> `optional` **applicableLineTradeDelivery?**: [`IUneceLineTradeDelivery`](IUneceLineTradeDelivery.md)[]

A trade delivery applicable to this line trade transaction.

#### See

https://vocabulary.uncefact.org/applicableLineTradeDelivery

***

### includedTradeProduct? {#includedtradeproduct}

> `optional` **includedTradeProduct?**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

A trade product included in this line trade transaction.

#### See

https://vocabulary.uncefact.org/includedTradeProduct
