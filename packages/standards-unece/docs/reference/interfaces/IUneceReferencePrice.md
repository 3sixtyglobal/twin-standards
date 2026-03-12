# Interface: IUneceReferencePrice

A reference to a sum of money for which something is or may be bought or sold.

## See

https://vocabulary.uncefact.org/ReferencePrice

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ReferencePrice"`

JSON-LD Type.

***

### basisQuantity? {#basisquantity}

> `optional` **basisQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A quantity on which the reference price is based.

#### See

https://vocabulary.uncefact.org/basisQuantity

***

### chargeAmount? {#chargeamount}

> `optional` **chargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of a charged reference price.

#### See

https://vocabulary.uncefact.org/chargeAmount

***

### comparisonMethodCode? {#comparisonmethodcode}

> `optional` **comparisonMethodCode**: `string`

The code specifying the comparison method for this reference price.

#### See

https://vocabulary.uncefact.org/comparisonMethodCode

***

### netPriceIndicator? {#netpriceindicator}

> `optional` **netPriceIndicator**: `boolean`

An indication of whether or not the reference price is a net price.

#### See

https://vocabulary.uncefact.org/netPriceIndicator
