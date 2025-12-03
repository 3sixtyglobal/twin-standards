# Interface: IExchangedDeclaration

A collection of data for a piece of written, printed or electronic matter that is exchanged between two parties as a
formal declaration.

## See

https://vocabulary.uncefact.org/ExchangedDeclaration

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

> **type**: `"ExchangedDeclaration"`

JSON-LD Type.

***

### additionalStatementNote?

> `optional` **additionalStatementNote**: [`INote`](INote.md)[]

An additional statement note for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/additionalStatementNote

***

### applicableCustomsValuation?

> `optional` **applicableCustomsValuation**: [`ICustomsValuation`](ICustomsValuation.md)

Customs valuation information applicable to this exchanged declaration.

#### See

https://vocabulary.uncefact.org/applicableCustomsValuation

***

### associatedDocument?

> `optional` **associatedDocument**: [`IDocument`](IDocument.md)[]

A referenced document associated with this exchanged declaration.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### currencyExchangeRate?

> `optional` **currencyExchangeRate**: `string`

The rate of currency exchange in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/currencyExchangeRate

***

### customsValueSpecifiedAmount?

> `optional` **customsValueSpecifiedAmount**: [`IAmountType`](IAmountType.md)[]

The monetary value specified for customs purposes in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/customsValueSpecifiedAmount

***

### declarantAgentParty?

> `optional` **declarantAgentParty**: [`ITradeParty`](ITradeParty.md)[]

The trade party acting as an agent for the declarant for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/declarantAgentParty

***

### declarantParty?

> `optional` **declarantParty**: [`ITradeParty`](ITradeParty.md)

The trade party acting as the declarant for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/declarantParty

***

### documentTypeCode?

> `optional` **documentTypeCode**: [`DocumentCodeList`](../type-aliases/DocumentCodeList.md)[]

The code specifying the type of this exchanged declaration.

#### See

https://vocabulary.uncefact.org/documentTypeCode

***

### grossWeightSpecifiedMeasure?

> `optional` **grossWeightSpecifiedMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

The gross weight measure specified in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/grossWeightSpecifiedMeasure

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The date, time, date time or other date time value for the issuance of this exchanged declaration.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### jurisdictionEntryDateTime?

> `optional` **jurisdictionEntryDateTime**: `string`

The date, time, date time or other date time value when the items which are a subject of this exchanged declaration
enter a jurisdiction, such as the actual date of arrival of a means of transport.

#### See

https://vocabulary.uncefact.org/jurisdictionEntryDateTime

***

### previousDocument?

> `optional` **previousDocument**: [`IDocument`](IDocument.md)[]

A previous document referenced for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/previousDocument

***

### principalAssociatedParty?

> `optional` **principalAssociatedParty**: [`ITradeParty`](ITradeParty.md)[]

A principal trade party associated with this exchanged declaration.

#### See

https://vocabulary.uncefact.org/principalAssociatedParty

***

### procedureCode?

> `optional` **procedureCode**: `string`

A code specifying a procedure for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/procedureCode

***

### specificCircumstanceCode?

> `optional` **specificCircumstanceCode**: `string`

The code specifying a specific circumstance in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/specificCircumstanceCode

***

### statisticalValueSpecifiedAmount?

> `optional` **statisticalValueSpecifiedAmount**: [`IAmountType`](IAmountType.md)[]

The monetary value specified for statistical purposes in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/statisticalValueSpecifiedAmount

***

### submissionLocation?

> `optional` **submissionLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

The submission location for this exchanged declaration.

#### See

https://vocabulary.uncefact.org/submissionLocation

***

### totalInvoiceSpecifiedAmount?

> `optional` **totalInvoiceSpecifiedAmount**: [`IAmountType`](IAmountType.md)[]

The total invoice monetary value specified in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/totalInvoiceSpecifiedAmount

***

### totalPackageSpecifiedQuantity?

> `optional` **totalPackageSpecifiedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The total package quantity specified in this exchanged declaration.

#### See

https://vocabulary.uncefact.org/totalPackageSpecifiedQuantity

***

### versionId?

> `optional` **versionId**: `string`

The identifier for the version of this exchanged declaration.

#### See

https://vocabulary.uncefact.org/versionId
