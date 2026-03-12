# Interface: IUneceTradeAllowanceCharge

A component of pricing, such as an allowance or charge for trade purposes.

## See

https://vocabulary.uncefact.org/TradeAllowanceCharge

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TradeAllowanceCharge"`

JSON-LD Type.

***

### actualAmount? {#actualamount}

> `optional` **actualAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

An actual monetary value of the trade allowance charge.

#### See

https://vocabulary.uncefact.org/actualAmount

***

### actualCurrencyExchange? {#actualcurrencyexchange}

> `optional` **actualCurrencyExchange**: [`IUneceCurrencyExchange`](IUneceCurrencyExchange.md)

The actual trade currency exchange for this trade allowance charge.

#### See

https://vocabulary.uncefact.org/actualCurrencyExchange

***

### allowanceChargeIdTypeCode? {#allowancechargeidtypecode}

> `optional` **allowanceChargeIdTypeCode**: [`UneceAllowanceChargeIdCodeList`](../type-aliases/UneceAllowanceChargeIdCodeList.md)

The code specifying the type of this trade allowance charge.

#### See

https://vocabulary.uncefact.org/allowanceChargeIdTypeCode

***

### allowanceChargeReasonCode? {#allowancechargereasoncode}

> `optional` **allowanceChargeReasonCode**: [`UneceAllowanceChargeReasonCodeList`](../type-aliases/UneceAllowanceChargeReasonCodeList.md)

The code specifying the reason for this trade allowance charge.

#### See

https://vocabulary.uncefact.org/allowanceChargeReasonCode

***

### appliedDateTime? {#applieddatetime}

> `optional` **appliedDateTime**: `string`

A date, time, date time, or other date time value applied to the trade allowance charge.

#### See

https://vocabulary.uncefact.org/appliedDateTime

***

### basisAmount? {#basisamount}

> `optional` **basisAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that is the basis on which this trade allowance charge is calculated.

#### See

https://vocabulary.uncefact.org/basisAmount

***

### basisQuantity? {#basisquantity}

> `optional` **basisQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity on which this trade allowance charge is based.

#### See

https://vocabulary.uncefact.org/basisQuantity

***

### calculationPercent? {#calculationpercent}

> `optional` **calculationPercent**: `string`

The percentage applied to calculate this trade allowance charge.

#### See

https://vocabulary.uncefact.org/calculationPercent

***

### categoryTradeTax? {#categorytradetax}

> `optional` **categoryTradeTax**: [`IUneceTradeTax`](IUneceTradeTax.md)[]

A tax category of this trade allowance charge.

#### See

https://vocabulary.uncefact.org/categoryTradeTax

***

### chargeIndicator? {#chargeindicator}

> `optional` **chargeIndicator**: `boolean`

The indication of whether or not the trade allowance charge is a charge.

#### See

https://vocabulary.uncefact.org/chargeIndicator

***

### deductionAmount? {#deductionamount}

> `optional` **deductionAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value to be deducted from this trade allowance charge.

#### See

https://vocabulary.uncefact.org/deductionAmount

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this trade allowance charge.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier for this trade allowance charge.

#### See

https://vocabulary.uncefact.org/identifier

***

### prepaidIndicator? {#prepaidindicator}

> `optional` **prepaidIndicator**: `boolean`

The indication of whether or not this trade allowance charge is prepaid.

#### See

https://vocabulary.uncefact.org/prepaidIndicator

***

### reason? {#reason}

> `optional` **reason**: `string`

The reason, expressed as text, for this trade allowance charge.

#### See

https://vocabulary.uncefact.org/reason

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric**: `string`

The sequence number for applying this trade allowance charge.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedAccountingAccount? {#specifiedaccountingaccount}

> `optional` **specifiedAccountingAccount**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)[]

An accounting account specified for this trade allowance charge.

#### See

https://vocabulary.uncefact.org/specifiedAccountingAccount

***

### unitBasisAmount? {#unitbasisamount}

> `optional` **unitBasisAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the unit basis on which the allowance or charge is calculated.

#### See

https://vocabulary.uncefact.org/unitBasisAmount

***

### validityPeriod? {#validityperiod}

> `optional` **validityPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period for which this trade allowance charge is valid.

#### See

https://vocabulary.uncefact.org/validityPeriod
