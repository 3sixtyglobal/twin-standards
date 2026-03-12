# Interface: IUneceLogisticsStatus

The information relevant to a condition or a position related to logistics.

## See

https://vocabulary.uncefact.org/LogisticsStatus

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"LogisticsStatus"`

JSON-LD Type.

***

### arrivalReportedEvent? {#arrivalreportedevent}

> `optional` **arrivalReportedEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A transport arrival event reported for this logistics status.

#### See

https://vocabulary.uncefact.org/arrivalReportedEvent

***

### contactParty? {#contactparty}

> `optional` **contactParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A contact party for this logistics status.

#### See

https://vocabulary.uncefact.org/contactParty

***

### departureReportedEvent? {#departurereportedevent}

> `optional` **departureReportedEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A transport departure event reported for this logistics status.

#### See

https://vocabulary.uncefact.org/departureReportedEvent

***

### description? {#description}

> `optional` **description**: `string`

The textual description of this logistics status.

#### See

https://vocabulary.uncefact.org/description

***

### information? {#information}

> `optional` **information**: `string`

Information, expressed as text, for this logistics status.

#### See

https://vocabulary.uncefact.org/information

***

### loadingReportedEvent? {#loadingreportedevent}

> `optional` **loadingReportedEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A transport loading event reported for this logistics status.

#### See

https://vocabulary.uncefact.org/loadingReportedEvent

***

### logisticsStatusConditionCode? {#logisticsstatusconditioncode}

> `optional` **logisticsStatusConditionCode**: [`UneceLogisticsStatusCodeList`](../type-aliases/UneceLogisticsStatusCodeList.md)

The code specifying this logistics status condition [UNECE Recommendation 24].

#### See

https://vocabulary.uncefact.org/logisticsStatusConditionCode

***

### logisticsStatusReasonCode? {#logisticsstatusreasoncode}

> `optional` **logisticsStatusReasonCode**: [`UneceLogisticsStatusCodeList`](../type-aliases/UneceLogisticsStatusCodeList.md)[]

A code specifying a reason for this logistics status [UNECE Recommendation 24].

#### See

https://vocabulary.uncefact.org/logisticsStatusReasonCode

***

### reason? {#reason}

> `optional` **reason**: `string`

A reason, expressed as text, for this logistics status.

#### See

https://vocabulary.uncefact.org/reason

***

### referenceDateTime? {#referencedatetime}

> `optional` **referenceDateTime**: `string`

The reference date, time, date time or other date time value for this logistics status.

#### See

https://vocabulary.uncefact.org/referenceDateTime

***

### reportedSupplyChainEvent? {#reportedsupplychainevent}

> `optional` **reportedSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain event reported for this logistics status.

#### See

https://vocabulary.uncefact.org/reportedSupplyChainEvent

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric**: `string`

The sequence number of this logistics status, such as within a status report.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedLogisticsLocation? {#specifiedlogisticslocation}

> `optional` **specifiedLogisticsLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A location specified for this logistics status.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLocation

***

### unloadingReportedEvent? {#unloadingreportedevent}

> `optional` **unloadingReportedEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A transport unloading event reported for this logistics status.

#### See

https://vocabulary.uncefact.org/unloadingReportedEvent

***

### validityPeriod? {#validityperiod}

> `optional` **validityPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A specific validity period for this logistics status.

#### See

https://vocabulary.uncefact.org/validityPeriod
