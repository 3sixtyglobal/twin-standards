# Interface: IUneceFinancialCard

A card used to represent a financial account for a trade settlement.

## See

https://vocabulary.uncefact.org/FinancialCard

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

> **type**: `"FinancialCard"`

JSON-LD Type.

***

### applicableIndicator?

> `optional` **applicableIndicator**: `boolean`

The indication of whether or not this trade settlement financial card is applicable.

#### See

https://vocabulary.uncefact.org/applicableIndicator

***

### cardholderName?

> `optional` **cardholderName**: `string`

The cardholder name as it appears on this trade settlement financial card. This may include both an individual
authorized to use the card as well as the organization that owns the card.

#### See

https://vocabulary.uncefact.org/cardholderName

***

### creditAvailableAmount?

> `optional` **creditAvailableAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the credit available for this trade settlement financial card.

#### See

https://vocabulary.uncefact.org/creditAvailableAmount

***

### creditLimitAmount?

> `optional` **creditLimitAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the credit limit for this trade settlement financial card.

#### See

https://vocabulary.uncefact.org/creditLimitAmount

***

### description?

> `optional` **description**: `string`

A textual description of this trade settlement financial card.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDate?

> `optional` **expiryDate**: `string`

The date of expiry up to which this trade settlement financial card is valid.

#### See

https://vocabulary.uncefact.org/expiryDate

***

### expiryDateTime?

> `optional` **expiryDateTime**: `string`

The date of expiry up to which this trade settlement financial card is valid.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier, commonly known as the card number, of this trade settlement financial card.

#### See

https://vocabulary.uncefact.org/identifier

***

### interestRatePercent?

> `optional` **interestRatePercent**: `string`

The interest rate expressed as a percentage for this trade settlement financial card.

#### See

https://vocabulary.uncefact.org/interestRatePercent

***

### issuingCompanyName?

> `optional` **issuingCompanyName**: `string`

An issuing company name, expressed as text, for this trade settlement financial card.

#### See

https://vocabulary.uncefact.org/issuingCompanyName

***

### microchipIndicator?

> `optional` **microchipIndicator**: `boolean`

The indication of whether or not this trade settlement financial card has a microchip.

#### See

https://vocabulary.uncefact.org/microchipIndicator

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of this trade settlement financial card, such as debit or credit.

#### See

https://vocabulary.uncefact.org/typeCode

***

### validFromDateTime?

> `optional` **validFromDateTime**: `string`

The date from which this trade settlement financial card is valid.

#### See

https://vocabulary.uncefact.org/validFromDateTime

***

### verificationNumeric?

> `optional` **verificationNumeric**: `string`

The unique card verification number for security purposes to help verify the card user is in actual possession of this
trade settlement financial card.

#### See

https://vocabulary.uncefact.org/verificationNumeric
