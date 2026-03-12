# Interface: IUneceCurrencyExchange

The conversion of one currency to another for trade purposes.

## See

https://vocabulary.uncefact.org/CurrencyExchange

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"CurrencyExchange"`

JSON-LD Type.

***

### associatedDocument? {#associateddocument}

> `optional` **associatedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

An associated document referenced for this trade related currency exchange.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### conversionRate? {#conversionrate}

> `optional` **conversionRate**: `string`

The rate factor used for conversion from the source currency to the target currency for trade purposes.

#### See

https://vocabulary.uncefact.org/conversionRate

***

### conversionRateDateTime? {#conversionratedatetime}

> `optional` **conversionRateDateTime**: `string`

The date, time, date time or other date time value of the conversion rate for this trade related currency exchange.

#### See

https://vocabulary.uncefact.org/conversionRateDateTime

***

### currencySourceCurrencyCode? {#currencysourcecurrencycode}

> `optional` **currencySourceCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)

The code specifying the source currency of a trade related currency conversion.

#### See

https://vocabulary.uncefact.org/currencySourceCurrencyCode

***

### currencyTargetCurrencyCode? {#currencytargetcurrencycode}

> `optional` **currencyTargetCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)

The code specifying the target currency of a trade related currency conversion.

#### See

https://vocabulary.uncefact.org/currencyTargetCurrencyCode

***

### document? {#document}

> `optional` **document**: [`IUneceDocument`](IUneceDocument.md)[]

A document referenced for this trade related currency exchange.

#### See

https://vocabulary.uncefact.org/document

***

### sourceUnitBasisNumeric? {#sourceunitbasisnumeric}

> `optional` **sourceUnitBasisNumeric**: `string`

The numeric unit basis of the source currency used in this trade related currency exchange rate calculation.

#### See

https://vocabulary.uncefact.org/sourceUnitBasisNumeric

***

### targetUnitBaseNumeric? {#targetunitbasenumeric}

> `optional` **targetUnitBaseNumeric**: `string`

The numeric unit basis of the target currency used in this trade related currency exchange rate calculation.

#### See

https://vocabulary.uncefact.org/targetUnitBaseNumeric

***

### tradeCurrencyExchangeMarketId? {#tradecurrencyexchangemarketid}

> `optional` **tradeCurrencyExchangeMarketId**: `string` \| `IJsonLdValueObject`

The unique identifier of the currency exchange market from which the exchange rate is taken for trade purposes.

#### See

https://vocabulary.uncefact.org/tradeCurrencyExchangeMarketId
