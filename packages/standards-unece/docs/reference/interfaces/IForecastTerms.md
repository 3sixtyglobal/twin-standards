# Interface: IForecastTerms

A set of terms and conditions by which a supply chain forecast has been or will be made.

## See

https://vocabulary.uncefact.org/ForecastTerms

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

> **type**: `"ForecastTerms"`

JSON-LD Type.

***

### dateTypeCode?

> `optional` **dateTypeCode**: `string`

A code specifying a type of date in these supply chain forecast terms.

#### See

https://vocabulary.uncefact.org/dateTypeCode

***

### forecastTypeCode?

> `optional` **forecastTypeCode**: `string`

The code specifying the forecast type in these supply chain forecast terms.

#### See

https://vocabulary.uncefact.org/forecastTypeCode

***

### supplyChainForecastTermsCommitmentLevelCode?

> `optional` **supplyChainForecastTermsCommitmentLevelCode**: [`CommitmentLevelCodeList`](../type-aliases/CommitmentLevelCodeList.md)[]

A code specifying a commitment level in these supply chain forecast terms.

#### See

https://vocabulary.uncefact.org/supplyChainForecastTermsCommitmentLevelCode

***

### supplyChainForecastTermsFrequencyCode?

> `optional` **supplyChainForecastTermsFrequencyCode**: `string`

A code specifying a frequency in these supply chain forecast terms.

#### See

https://vocabulary.uncefact.org/supplyChainForecastTermsFrequencyCode
