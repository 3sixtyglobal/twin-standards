# Interface: IUneceTradeLocation

A physical location or place used or referenced for trade purposes.

## See

https://vocabulary.uncefact.org/TradeLocation

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

> **type**: `"TradeLocation"`

JSON-LD Type.

***

### countryName?

> `optional` **countryName**: `string`

The name, expressed as text, of a country location used or referenced in trade.

#### See

https://vocabulary.uncefact.org/countryName

***

### countrySubDivisionId?

> `optional` **countrySubDivisionId**: `string`

The unique identifier of the country sub-division for this trade location.

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### countrySubDivisionName?

> `optional` **countrySubDivisionName**: `string`

The name, expressed as text, of a sub-division of a country location used or referenced in trade.

#### See

https://vocabulary.uncefact.org/countrySubDivisionName

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this location used or referenced in trade.

#### See

https://vocabulary.uncefact.org/identifier

***

### locationFunctionTypeCode?

> `optional` **locationFunctionTypeCode**: [`UneceLocationFunctionCodeList`](../type-aliases/UneceLocationFunctionCodeList.md)[]

A code specifying the type of trade location.

#### See

https://vocabulary.uncefact.org/locationFunctionTypeCode

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this location used or referenced in trade.

#### See

https://vocabulary.uncefact.org/name

***

### tradeLocationCountryId?

> `optional` **tradeLocationCountryId**: [`UneceCountryId`](../type-aliases/UneceCountryId.md)[]

The unique identifier of a country location used or referenced in trade.

#### See

https://vocabulary.uncefact.org/tradeLocationCountryId
