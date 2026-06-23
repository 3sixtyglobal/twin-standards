# Interface: IUneceFinancialCard

A card used to represent a financial account for a trade settlement.

## See

https://vocabulary.uncefact.org/FinancialCard

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"FinancialCard"`

JSON-LD Type.

***

### applicableIndicator? {#applicableindicator}

> `optional` **applicableIndicator?**: `boolean`

The indication of whether or not this trade settlement financial card is applicable.

#### See

https://vocabulary.uncefact.org/applicableIndicator

***

### cardholderName? {#cardholdername}

> `optional` **cardholderName?**: `string`

The cardholder name as it appears on this trade settlement financial card. This may include both an individual
authorized to use the card as well as the organization that owns the card.

#### See

https://vocabulary.uncefact.org/cardholderName

***

### creditAvailableAmount? {#creditavailableamount}

> `optional` **creditAvailableAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the credit available for this trade settlement financial card.

#### See

https://vocabulary.uncefact.org/creditAvailableAmount

***

### creditLimitAmount? {#creditlimitamount}

> `optional` **creditLimitAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the credit limit for this trade settlement financial card.

#### See

https://vocabulary.uncefact.org/creditLimitAmount

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this trade settlement financial card.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDate? {#expirydate}

> `optional` **expiryDate?**: `string`

The date of expiry up to which this trade settlement financial card is valid.

#### See

https://vocabulary.uncefact.org/expiryDate

***

### expiryDateTime? {#expirydatetime}

> `optional` **expiryDateTime?**: `string`

The date of expiry up to which this trade settlement financial card is valid.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier, commonly known as the card number, of this trade settlement financial card.

#### See

https://vocabulary.uncefact.org/identifier

***

### interestRatePercent? {#interestratepercent}

> `optional` **interestRatePercent?**: `string`

The interest rate expressed as a percentage for this trade settlement financial card.

#### See

https://vocabulary.uncefact.org/interestRatePercent

***

### issuingCompanyName? {#issuingcompanyname}

> `optional` **issuingCompanyName?**: `string`

An issuing company name, expressed as text, for this trade settlement financial card.

#### See

https://vocabulary.uncefact.org/issuingCompanyName

***

### microchipIndicator? {#microchipindicator}

> `optional` **microchipIndicator?**: `boolean`

The indication of whether or not this trade settlement financial card has a microchip.

#### See

https://vocabulary.uncefact.org/microchipIndicator

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of this trade settlement financial card, such as debit or credit.

#### See

https://vocabulary.uncefact.org/typeCode

***

### validFromDateTime? {#validfromdatetime}

> `optional` **validFromDateTime?**: `string`

The date from which this trade settlement financial card is valid.

#### See

https://vocabulary.uncefact.org/validFromDateTime

***

### verificationNumeric? {#verificationnumeric}

> `optional` **verificationNumeric?**: `string`

The unique card verification number for security purposes to help verify the card user is in actual possession of this
trade settlement financial card.

#### See

https://vocabulary.uncefact.org/verificationNumeric
