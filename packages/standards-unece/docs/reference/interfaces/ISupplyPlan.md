# Interface: ISupplyPlan

Specification of the delivery quantities and date/time values in a supply schedule.

## See

https://vocabulary.uncefact.org/SupplyPlan

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

> **type**: `"SupplyPlan"`

JSON-LD Type.

***

### actualQuantity?

> `optional` **actualQuantity**: [`IQuantityType`](IQuantityType.md)

The actual quantity in this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/actualQuantity

***

### applicablePeriod?

> `optional` **applicablePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

The period applicable for this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/applicablePeriod

***

### availableQuantity?

> `optional` **availableQuantity**: [`IQuantityType`](IQuantityType.md)[]

A quantity available for this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/availableQuantity

***

### confirmedDeliveryEvent?

> `optional` **confirmedDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A confirmed delivery event in this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/confirmedDeliveryEvent

***

### contractDocument?

> `optional` **contractDocument**: [`IDocument`](IDocument.md)[]

A referenced contract document for this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/contractDocument

***

### deliveryNoteDocument?

> `optional` **deliveryNoteDocument**: [`IDocument`](IDocument.md)[]

A delivery note document referenced by this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/deliveryNoteDocument

***

### deliverySupplyChainEvent?

> `optional` **deliverySupplyChainEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A delivery event for this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/deliverySupplyChainEvent

***

### latestSynchronizationDateTime?

> `optional` **latestSynchronizationDateTime**: `string`

A date, time, date time, or other date time value of the latest synchronization of the supply chain supply plan.

#### See

https://vocabulary.uncefact.org/latestSynchronizationDateTime

***

### minusToleranceQuantity?

> `optional` **minusToleranceQuantity**: [`IQuantityType`](IQuantityType.md)[]

The minus tolerance quantity from the planned or requested quantity in this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/minusToleranceQuantity

***

### plannedQuantity?

> `optional` **plannedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The planned quantity in this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/plannedQuantity

***

### plusToleranceQuantity?

> `optional` **plusToleranceQuantity**: [`IQuantityType`](IQuantityType.md)[]

The plus tolerance quantity from the planned or requested quantity in this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/plusToleranceQuantity

***

### projectedSpecifiedPeriod?

> `optional` **projectedSpecifiedPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

A specified period projected for this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/projectedSpecifiedPeriod

***

### requiredQuantity?

> `optional` **requiredQuantity**: [`IQuantityType`](IQuantityType.md)[]

A quantity required for this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/requiredQuantity

***

### scheduledDeliveryEvent?

> `optional` **scheduledDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A scheduled delivery event in this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/scheduledDeliveryEvent

***

### shipToParty?

> `optional` **shipToParty**: [`ITradeParty`](ITradeParty.md)[]

The ship to trade party for this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/shipToParty

***

### specifiedLogisticsLocation?

> `optional` **specifiedLogisticsLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A location specified for this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLocation

***

### specifiedSpecifiedPeriod?

> `optional` **specifiedSpecifiedPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

The period specified for this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/specifiedSpecifiedPeriod

***

### specifiedSupplyChainEvent?

> `optional` **specifiedSupplyChainEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

An event specified for this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### supplyChainSupplyPlanCommitmentLevelCode?

> `optional` **supplyChainSupplyPlanCommitmentLevelCode**: [`CommitmentLevelCodeList`](../type-aliases/CommitmentLevelCodeList.md)[]

The code specifying the commitment level for this supply chain supply plan, such as fabrication or raw material.

#### See

https://vocabulary.uncefact.org/supplyChainSupplyPlanCommitmentLevelCode

***

### supplyChainSupplyPlanReleaseFrequencyCode?

> `optional` **supplyChainSupplyPlanReleaseFrequencyCode**: `string`

A code specifying the release frequency of this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/supplyChainSupplyPlanReleaseFrequencyCode

***

### supplyChainSupplyPlanReviewFrequencyCode?

> `optional` **supplyChainSupplyPlanReviewFrequencyCode**: `string`

A code specifying the review frequency of this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/supplyChainSupplyPlanReviewFrequencyCode

***

### synchronizationDateTime?

> `optional` **synchronizationDateTime**: `string`

A date, time, date time, or other date time value of a synchronization of the supply chain supply plan.

#### See

https://vocabulary.uncefact.org/synchronizationDateTime

***

### synchronizationQuantity?

> `optional` **synchronizationQuantity**: [`IQuantityType`](IQuantityType.md)[]

The value specifying the quantity for a synchronization of this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/synchronizationQuantity

***

### toleranceQuantity?

> `optional` **toleranceQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity of tolerance from the planned quantity in this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/toleranceQuantity

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type for this supply chain supply plan.

#### See

https://vocabulary.uncefact.org/typeCode
