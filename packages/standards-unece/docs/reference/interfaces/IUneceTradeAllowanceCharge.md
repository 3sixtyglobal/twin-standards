# Interface: IUneceTradeAllowanceCharge

A component of pricing, such as an allowance or charge for trade purposes.

## See

https://vocabulary.uncefact.org/TradeAllowanceCharge

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

> **type**: `"TradeAllowanceCharge"`

JSON-LD Type.

***

### actualAmount?

> `optional` **actualAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

An actual monetary value of the trade allowance charge.

#### See

https://vocabulary.uncefact.org/actualAmount

***

### actualCurrencyExchange?

> `optional` **actualCurrencyExchange**: [`IUneceCurrencyExchange`](IUneceCurrencyExchange.md)[]

The actual trade currency exchange for this trade allowance charge.

#### See

https://vocabulary.uncefact.org/actualCurrencyExchange

***

### allowanceChargeIdTypeCode?

> `optional` **allowanceChargeIdTypeCode**: [`UneceAllowanceChargeIdCodeList`](../type-aliases/UneceAllowanceChargeIdCodeList.md)[]

The code specifying the type of this trade allowance charge.

#### See

https://vocabulary.uncefact.org/allowanceChargeIdTypeCode

***

### allowanceChargeReasonCode?

> `optional` **allowanceChargeReasonCode**: [`UneceAllowanceChargeReasonCodeList`](../type-aliases/UneceAllowanceChargeReasonCodeList.md)[]

The code specifying the reason for this trade allowance charge.

#### See

https://vocabulary.uncefact.org/allowanceChargeReasonCode

***

### appliedDateTime?

> `optional` **appliedDateTime**: `string`

A date, time, date time, or other date time value applied to the trade allowance charge.

#### See

https://vocabulary.uncefact.org/appliedDateTime

***

### basisAmount?

> `optional` **basisAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that is the basis on which this trade allowance charge is calculated.

#### See

https://vocabulary.uncefact.org/basisAmount

***

### basisQuantity?

> `optional` **basisQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The quantity on which this trade allowance charge is based.

#### See

https://vocabulary.uncefact.org/basisQuantity

***

### calculationPercent?

> `optional` **calculationPercent**: `string`

The percentage applied to calculate this trade allowance charge.

#### See

https://vocabulary.uncefact.org/calculationPercent

***

### categoryTradeTax?

> `optional` **categoryTradeTax**: [`IUneceTradeTax`](IUneceTradeTax.md)[]

A tax category of this trade allowance charge.

#### See

https://vocabulary.uncefact.org/categoryTradeTax

***

### chargeIndicator?

> `optional` **chargeIndicator**: `boolean`

The indication of whether or not the trade allowance charge is a charge.

#### See

https://vocabulary.uncefact.org/chargeIndicator

***

### deductionAmount?

> `optional` **deductionAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value to be deducted from this trade allowance charge.

#### See

https://vocabulary.uncefact.org/deductionAmount

***

### description?

> `optional` **description**: `string`

A textual description of this trade allowance charge.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this trade allowance charge.

#### See

https://vocabulary.uncefact.org/identifier

***

### prepaidIndicator?

> `optional` **prepaidIndicator**: `boolean`

The indication of whether or not this trade allowance charge is prepaid.

#### See

https://vocabulary.uncefact.org/prepaidIndicator

***

### reason?

> `optional` **reason**: `string`

The reason, expressed as text, for this trade allowance charge.

#### See

https://vocabulary.uncefact.org/reason

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

The sequence number for applying this trade allowance charge.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedAccountingAccount?

> `optional` **specifiedAccountingAccount**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)[]

An accounting account specified for this trade allowance charge.

#### See

https://vocabulary.uncefact.org/specifiedAccountingAccount

***

### unitBasisAmount?

> `optional` **unitBasisAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

The monetary value of the unit basis on which the allowance or charge is calculated.

#### See

https://vocabulary.uncefact.org/unitBasisAmount

***

### validityPeriod?

> `optional` **validityPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period for which this trade allowance charge is valid.

#### See

https://vocabulary.uncefact.org/validityPeriod
