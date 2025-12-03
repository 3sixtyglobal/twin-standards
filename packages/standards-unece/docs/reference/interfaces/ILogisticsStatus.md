# Interface: ILogisticsStatus

The information relevant to a condition or a position related to logistics.

## See

https://vocabulary.uncefact.org/LogisticsStatus

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

> **type**: `"LogisticsStatus"`

JSON-LD Type.

***

### arrivalReportedEvent?

> `optional` **arrivalReportedEvent**: [`ITransportEvent`](ITransportEvent.md)[]

A transport arrival event reported for this logistics status.

#### See

https://vocabulary.uncefact.org/arrivalReportedEvent

***

### contactParty?

> `optional` **contactParty**: [`ITradeParty`](ITradeParty.md)[]

A contact party for this logistics status.

#### See

https://vocabulary.uncefact.org/contactParty

***

### departureReportedEvent?

> `optional` **departureReportedEvent**: [`ITransportEvent`](ITransportEvent.md)[]

A transport departure event reported for this logistics status.

#### See

https://vocabulary.uncefact.org/departureReportedEvent

***

### description?

> `optional` **description**: `string`

The textual description of this logistics status.

#### See

https://vocabulary.uncefact.org/description

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this logistics status.

#### See

https://vocabulary.uncefact.org/information

***

### loadingReportedEvent?

> `optional` **loadingReportedEvent**: [`ITransportEvent`](ITransportEvent.md)[]

A transport loading event reported for this logistics status.

#### See

https://vocabulary.uncefact.org/loadingReportedEvent

***

### logisticsStatusConditionCode?

> `optional` **logisticsStatusConditionCode**: [`LogisticsStatusCodeList`](../type-aliases/LogisticsStatusCodeList.md)[]

The code specifying this logistics status condition [UNECE Recommendation 24].

#### See

https://vocabulary.uncefact.org/logisticsStatusConditionCode

***

### logisticsStatusReasonCode?

> `optional` **logisticsStatusReasonCode**: [`LogisticsStatusCodeList`](../type-aliases/LogisticsStatusCodeList.md)[]

A code specifying a reason for this logistics status [UNECE Recommendation 24].

#### See

https://vocabulary.uncefact.org/logisticsStatusReasonCode

***

### reason?

> `optional` **reason**: `string`

A reason, expressed as text, for this logistics status.

#### See

https://vocabulary.uncefact.org/reason

***

### referenceDateTime?

> `optional` **referenceDateTime**: `string`

The reference date, time, date time or other date time value for this logistics status.

#### See

https://vocabulary.uncefact.org/referenceDateTime

***

### reportedSupplyChainEvent?

> `optional` **reportedSupplyChainEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A supply chain event reported for this logistics status.

#### See

https://vocabulary.uncefact.org/reportedSupplyChainEvent

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

The sequence number of this logistics status, such as within a status report.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedLogisticsLocation?

> `optional` **specifiedLogisticsLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A location specified for this logistics status.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLocation

***

### unloadingReportedEvent?

> `optional` **unloadingReportedEvent**: [`ITransportEvent`](ITransportEvent.md)[]

A transport unloading event reported for this logistics status.

#### See

https://vocabulary.uncefact.org/unloadingReportedEvent

***

### validityPeriod?

> `optional` **validityPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)

A specific validity period for this logistics status.

#### See

https://vocabulary.uncefact.org/validityPeriod
