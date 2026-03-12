# Interface: IUneceAuthentication

A proof that a document is genuine.

## See

https://vocabulary.uncefact.org/Authentication

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Authentication"`

JSON-LD Type.

***

### actualDateTime? {#actualdatetime}

> `optional` **actualDateTime**: `string`

The actual date, time, date time, or other date time value of this document authentication.

#### See

https://vocabulary.uncefact.org/actualDateTime

***

### categoryCode? {#categorycode}

> `optional` **categoryCode**: `string`

A code specifying a category for this document authentication.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### governmentActionTypeCode? {#governmentactiontypecode}

> `optional` **governmentActionTypeCode**: [`UneceGovernmentActionCodeList`](../type-aliases/UneceGovernmentActionCodeList.md)

The code specifying the type of document authentication.

#### See

https://vocabulary.uncefact.org/governmentActionTypeCode

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

A unique identifier for this document authentication.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedClause? {#includedclause}

> `optional` **includedClause**: [`IUneceClause`](IUneceClause.md)[]

A document clause included in this document authentication.

#### See

https://vocabulary.uncefact.org/includedClause

***

### information? {#information}

> `optional` **information**: `string`

Information, expressed as text, for this document authentication.

#### See

https://vocabulary.uncefact.org/information

***

### issueLocation? {#issuelocation}

> `optional` **issueLocation**: [`IUneceLocation`](IUneceLocation.md)

The referenced location of issue of this document authentication.

#### See

https://vocabulary.uncefact.org/issueLocation

***

### issueLogisticsLocation? {#issuelogisticslocation}

> `optional` **issueLogisticsLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The issue location for this document authentication.

#### See

https://vocabulary.uncefact.org/issueLogisticsLocation

***

### locationProviderParty? {#locationproviderparty}

> `optional` **locationProviderParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The trade party providing the location for this document authentication.

#### See

https://vocabulary.uncefact.org/locationProviderParty

***

### providerParty? {#providerparty}

> `optional` **providerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The trade party providing this document authentication.

#### See

https://vocabulary.uncefact.org/providerParty

***

### representationTypeCode? {#representationtypecode}

> `optional` **representationTypeCode**: `string`

The code specifying the type of representation of this document authentication, such as direct or indirect.

#### See

https://vocabulary.uncefact.org/representationTypeCode

***

### signatory? {#signatory}

> `optional` **signatory**: `string`

The signatory, expressed as text, for this document authentication.

#### See

https://vocabulary.uncefact.org/signatory

***

### signatoryImageBinaryObject? {#signatoryimagebinaryobject}

> `optional` **signatoryImageBinaryObject**: `string`

The signatory image, expressed as a binary object, for this document authentication.

#### See

https://vocabulary.uncefact.org/signatoryImageBinaryObject

***

### statement? {#statement}

> `optional` **statement**: `string`

The statement, expressed as text, for this document authentication.

#### See

https://vocabulary.uncefact.org/statement

***

### statementCode? {#statementcode}

> `optional` **statementCode**: `string`

The code specifying the statement for this document authentication.

#### See

https://vocabulary.uncefact.org/statementCode

***

### transportMeansId? {#transportmeansid}

> `optional` **transportMeansId**: `string` \| `IJsonLdValueObject`

The unique identifier of a transport means for this document authentication.

#### See

https://vocabulary.uncefact.org/transportMeansId
