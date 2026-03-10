# Interface: IUneceAuthentication

A proof that a document is genuine.

## See

https://vocabulary.uncefact.org/Authentication

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

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

> `optional` **governmentActionTypeCode**: [`UneceGovernmentActionCodeList`](../type-aliases/UneceGovernmentActionCodeList.md)

The code specifying the type of document authentication.

#### See

https://vocabulary.uncefact.org/governmentActionTypeCode

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

A unique identifier for this document authentication.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedClause?

> `optional` **includedClause**: [`IUneceClause`](IUneceClause.md)[]

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

> `optional` **issueLocation**: [`IUneceLocation`](IUneceLocation.md)

The referenced location of issue of this document authentication.

#### See

https://vocabulary.uncefact.org/issueLocation

***

### issueLogisticsLocation?

> `optional` **issueLogisticsLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The issue location for this document authentication.

#### See

https://vocabulary.uncefact.org/issueLogisticsLocation

***

### locationProviderParty?

> `optional` **locationProviderParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The trade party providing the location for this document authentication.

#### See

https://vocabulary.uncefact.org/locationProviderParty

***

### providerParty?

> `optional` **providerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

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

> `optional` **transportMeansId**: `string` \| `IJsonLdValueObject`

The unique identifier of a transport means for this document authentication.

#### See

https://vocabulary.uncefact.org/transportMeansId
