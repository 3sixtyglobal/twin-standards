# Interface: IUneceForecastTerms

A set of terms and conditions by which a supply chain forecast has been or will be made.

## See

https://vocabulary.uncefact.org/ForecastTerms

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ForecastTerms"`

JSON-LD Type.

***

### dateTypeCode? {#datetypecode}

> `optional` **dateTypeCode**: `string`

A code specifying a type of date in these supply chain forecast terms.

#### See

https://vocabulary.uncefact.org/dateTypeCode

***

### forecastTypeCode? {#forecasttypecode}

> `optional` **forecastTypeCode**: `string`

The code specifying the forecast type in these supply chain forecast terms.

#### See

https://vocabulary.uncefact.org/forecastTypeCode

***

### supplyChainForecastTermsCommitmentLevelCode? {#supplychainforecasttermscommitmentlevelcode}

> `optional` **supplyChainForecastTermsCommitmentLevelCode**: [`UneceCommitmentLevelCodeList`](../type-aliases/UneceCommitmentLevelCodeList.md)[]

A code specifying a commitment level in these supply chain forecast terms.

#### See

https://vocabulary.uncefact.org/supplyChainForecastTermsCommitmentLevelCode

***

### supplyChainForecastTermsFrequencyCode? {#supplychainforecasttermsfrequencycode}

> `optional` **supplyChainForecastTermsFrequencyCode**: `string`

A code specifying a frequency in these supply chain forecast terms.

#### See

https://vocabulary.uncefact.org/supplyChainForecastTermsFrequencyCode
