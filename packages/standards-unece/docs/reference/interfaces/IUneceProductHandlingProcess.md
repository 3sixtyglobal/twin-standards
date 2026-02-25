# Interface: IUneceProductHandlingProcess

A naturally occurring or designed sequence of operations or events that create, transform, or touch a product, such as
manufacturing, treating, packaging, and storing.

## See

https://vocabulary.uncefact.org/ProductHandlingProcess

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"ProductHandlingProcess"`

JSON-LD Type.

***

### applicableProcessCharacteristic?

> `optional` **applicableProcessCharacteristic**: [`IUneceProcessCharacteristic`](IUneceProcessCharacteristic.md)[]

A process characteristic applicable to this product handling process.

#### See

https://vocabulary.uncefact.org/applicableProcessCharacteristic

***

### completionPeriod?

> `optional` **completionPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period of completion for this product handling process.

#### See

https://vocabulary.uncefact.org/completionPeriod

***

### operationCountry?

> `optional` **operationCountry**: [`IUneceCountry`](IUneceCountry.md)

The trade country where the operation of this product handling process occurs.

#### See

https://vocabulary.uncefact.org/operationCountry

***

### operatorParty?

> `optional` **operatorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party who is an operator of this product handling process.

#### See

https://vocabulary.uncefact.org/operatorParty

***

### processTypeCode?

> `optional` **processTypeCode**: [`UneceProcessTypeCodeList`](../type-aliases/UneceProcessTypeCodeList.md)

The code specifying the type of product handling process.

#### See

https://vocabulary.uncefact.org/processTypeCode
