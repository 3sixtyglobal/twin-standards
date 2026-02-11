# Interface: IUneceLogisticsStatus

The information relevant to a condition or a position related to logistics.

## See

https://vocabulary.uncefact.org/LogisticsStatus

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

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

> `optional` **arrivalReportedEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A transport arrival event reported for this logistics status.

#### See

https://vocabulary.uncefact.org/arrivalReportedEvent

***

### contactParty?

> `optional` **contactParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A contact party for this logistics status.

#### See

https://vocabulary.uncefact.org/contactParty

***

### departureReportedEvent?

> `optional` **departureReportedEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

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

> `optional` **loadingReportedEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A transport loading event reported for this logistics status.

#### See

https://vocabulary.uncefact.org/loadingReportedEvent

***

### logisticsStatusConditionCode?

> `optional` **logisticsStatusConditionCode**: [`UneceLogisticsStatusCodeList`](../type-aliases/UneceLogisticsStatusCodeList.md)

The code specifying this logistics status condition [UNECE Recommendation 24].

#### See

https://vocabulary.uncefact.org/logisticsStatusConditionCode

***

### logisticsStatusReasonCode?

> `optional` **logisticsStatusReasonCode**: [`UneceLogisticsStatusCodeList`](../type-aliases/UneceLogisticsStatusCodeList.md)[]

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

> `optional` **reportedSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

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

> `optional` **specifiedLogisticsLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A location specified for this logistics status.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLocation

***

### unloadingReportedEvent?

> `optional` **unloadingReportedEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A transport unloading event reported for this logistics status.

#### See

https://vocabulary.uncefact.org/unloadingReportedEvent

***

### validityPeriod?

> `optional` **validityPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A specific validity period for this logistics status.

#### See

https://vocabulary.uncefact.org/validityPeriod
