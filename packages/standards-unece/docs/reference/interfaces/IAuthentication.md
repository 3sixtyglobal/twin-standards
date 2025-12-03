# Interface: IAuthentication

A proof that a document is genuine.

## See

https://vocabulary.uncefact.org/Authentication

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

> **type**: `"Authentication"`

JSON-LD Type.

***

### actualDateTime?

> `optional` **actualDateTime**: `string`

The actual date, time, date time, or other date time value of this document authentication.

#### See

https://vocabulary.uncefact.org/actualDateTime

***

### categoryCode?

> `optional` **categoryCode**: `string`

A code specifying a category for this document authentication.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### governmentActionTypeCode?

> `optional` **governmentActionTypeCode**: [`GovernmentActionCodeList`](../type-aliases/GovernmentActionCodeList.md)

The code specifying the type of document authentication.

#### See

https://vocabulary.uncefact.org/governmentActionTypeCode

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this document authentication.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedClause?

> `optional` **includedClause**: [`IClause`](IClause.md)[]

A document clause included in this document authentication.

#### See

https://vocabulary.uncefact.org/includedClause

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this document authentication.

#### See

https://vocabulary.uncefact.org/information

***

### issueLocation?

> `optional` **issueLocation**: [`ILocation`](ILocation.md)[]

The referenced location of issue of this document authentication.

#### See

https://vocabulary.uncefact.org/issueLocation

***

### issueLogisticsLocation?

> `optional` **issueLogisticsLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

The issue location for this document authentication.

#### See

https://vocabulary.uncefact.org/issueLogisticsLocation

***

### locationProviderParty?

> `optional` **locationProviderParty**: [`ITradeParty`](ITradeParty.md)[]

The trade party providing the location for this document authentication.

#### See

https://vocabulary.uncefact.org/locationProviderParty

***

### providerParty?

> `optional` **providerParty**: [`ITradeParty`](ITradeParty.md)[]

The trade party providing this document authentication.

#### See

https://vocabulary.uncefact.org/providerParty

***

### representationTypeCode?

> `optional` **representationTypeCode**: `string`

The code specifying the type of representation of this document authentication, such as direct or indirect.

#### See

https://vocabulary.uncefact.org/representationTypeCode

***

### signatory?

> `optional` **signatory**: `string`

The signatory, expressed as text, for this document authentication.

#### See

https://vocabulary.uncefact.org/signatory

***

### signatoryImageBinaryObject?

> `optional` **signatoryImageBinaryObject**: `string`

The signatory image, expressed as a binary object, for this document authentication.

#### See

https://vocabulary.uncefact.org/signatoryImageBinaryObject

***

### statement?

> `optional` **statement**: `string`

The statement, expressed as text, for this document authentication.

#### See

https://vocabulary.uncefact.org/statement

***

### statementCode?

> `optional` **statementCode**: `string`

The code specifying the statement for this document authentication.

#### See

https://vocabulary.uncefact.org/statementCode

***

### transportMeansId?

> `optional` **transportMeansId**: `string`

The unique identifier of a transport means for this document authentication.

#### See

https://vocabulary.uncefact.org/transportMeansId
