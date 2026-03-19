# Interface: IUneceSubordinateLineTradeAgreement

The contractual terms of a subordinate line trade agreement.

## See

https://vocabulary.uncefact.org/SubordinateLineTradeAgreement

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SubordinateLineTradeAgreement"`

JSON-LD Type.

***

### additionalDocument? {#additionaldocument}

> `optional` **additionalDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

An additional document referenced in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/additionalDocument

***

### buyerOrderDocument? {#buyerorderdocument}

> `optional` **buyerOrderDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A buyer generated order document referenced in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/buyerOrderDocument

***

### grossPriceProductPrice? {#grosspriceproductprice}

> `optional` **grossPriceProductPrice?**: [`IUneceTradePrice`](IUneceTradePrice.md)[]

A gross product price in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/grossPriceProductPrice

***

### netPriceProductPrice? {#netpriceproductprice}

> `optional` **netPriceProductPrice?**: [`IUneceTradePrice`](IUneceTradePrice.md)[]

A net product price in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/netPriceProductPrice

***

### sellerOrderDocument? {#sellerorderdocument}

> `optional` **sellerOrderDocument?**: [`IUneceDocument`](IUneceDocument.md)

The seller generated order document referenced in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/sellerOrderDocument
