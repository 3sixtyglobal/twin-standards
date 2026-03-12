# Interface: IUneceExchangedDeclaration

A collection of data for a piece of written, printed or electronic matter that is exchanged between two parties as a
formal declaration.

## See

https://vocabulary.uncefact.org/ExchangedDeclaration

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ExchangedDeclaration"`

JSON-LD Type.

***

### additionalStatementNote? {#additionalstatementnote}

> `optional` **additionalStatementNote**: [`IUneceNote`](IUneceNote.md)[]

An additional statement note for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/additionalStatementNote

***

### applicableCustomsValuation? {#applicablecustomsvaluation}

> `optional` **applicableCustomsValuation**: [`IUneceCustomsValuation`](IUneceCustomsValuation.md)

Customs valuation information applicable to this exchanged declaration.

#### See

https://vocabulary.uncefact.org/applicableCustomsValuation

***

### associatedDocument? {#associateddocument}

> `optional` **associatedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document associated with this exchanged declaration.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### currencyExchangeRate? {#currencyexchangerate}

> `optional` **currencyExchangeRate**: `string`

The rate of currency exchange in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/currencyExchangeRate

***

### customsValueSpecifiedAmount? {#customsvaluespecifiedamount}

> `optional` **customsValueSpecifiedAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value specified for customs purposes in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/customsValueSpecifiedAmount

***

### declarantAgentParty? {#declarantagentparty}

> `optional` **declarantAgentParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The trade party acting as an agent for the declarant for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/declarantAgentParty

***

### declarantParty? {#declarantparty}

> `optional` **declarantParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The trade party acting as the declarant for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/declarantParty

***

### documentTypeCode? {#documenttypecode}

> `optional` **documentTypeCode**: [`UneceDocumentCodeList`](../type-aliases/UneceDocumentCodeList.md)

The code specifying the type of this exchanged declaration.

#### See

https://vocabulary.uncefact.org/documentTypeCode

***

### grossWeightSpecifiedMeasure? {#grossweightspecifiedmeasure}

> `optional` **grossWeightSpecifiedMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The gross weight measure specified in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/grossWeightSpecifiedMeasure

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime**: `string`

The date, time, date time or other date time value for the issuance of this exchanged declaration.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### jurisdictionEntryDateTime? {#jurisdictionentrydatetime}

> `optional` **jurisdictionEntryDateTime**: `string`

The date, time, date time or other date time value when the items which are a subject of this exchanged declaration
enter a jurisdiction, such as the actual date of arrival of a means of transport.

#### See

https://vocabulary.uncefact.org/jurisdictionEntryDateTime

***

### previousDocument? {#previousdocument}

> `optional` **previousDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A previous document referenced for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/previousDocument

***

### principalAssociatedParty? {#principalassociatedparty}

> `optional` **principalAssociatedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A principal trade party associated with this exchanged declaration.

#### See

https://vocabulary.uncefact.org/principalAssociatedParty

***

### procedureCode? {#procedurecode}

> `optional` **procedureCode**: `string`

A code specifying a procedure for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/procedureCode

***

### specificCircumstanceCode? {#specificcircumstancecode}

> `optional` **specificCircumstanceCode**: `string`

The code specifying a specific circumstance in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/specificCircumstanceCode

***

### statisticalValueSpecifiedAmount? {#statisticalvaluespecifiedamount}

> `optional` **statisticalValueSpecifiedAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value specified for statistical purposes in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/statisticalValueSpecifiedAmount

***

### submissionLocation? {#submissionlocation}

> `optional` **submissionLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The submission location for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/submissionLocation

***

### totalInvoiceSpecifiedAmount? {#totalinvoicespecifiedamount}

> `optional` **totalInvoiceSpecifiedAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The total invoice monetary value specified in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/totalInvoiceSpecifiedAmount

***

### totalPackageSpecifiedQuantity? {#totalpackagespecifiedquantity}

> `optional` **totalPackageSpecifiedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total package quantity specified in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/totalPackageSpecifiedQuantity

***

### versionId? {#versionid}

> `optional` **versionId**: `string` \| `IJsonLdValueObject`

The identifier for the version of this exchanged declaration.

#### See

https://vocabulary.uncefact.org/versionId
