# Interface: IHeaderTradeDelivery

Shipping arrangements and movement of products and or services including despatch and delivery at a header level.

## See

https://vocabulary.uncefact.org/HeaderTradeDelivery

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

> **type**: `"HeaderTradeDelivery"`

JSON-LD Type.

***

### acceptanceEvent?

> `optional` **acceptanceEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

An acceptance delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/acceptanceEvent

***

### actualDeliveryEvent?

> `optional` **actualDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

An actual delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualDeliveryEvent

***

### actualDespatchEvent?

> `optional` **actualDespatchEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

An actual despatch event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualDespatchEvent

***

### actualLoadingEvent?

> `optional` **actualLoadingEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The actual loading event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualLoadingEvent

***

### actualPickUpEvent?

> `optional` **actualPickUpEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The actual pick-up event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualPickUpEvent

***

### actualReceiptEvent?

> `optional` **actualReceiptEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The actual receipt event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualReceiptEvent

***

### actualUnloadingEvent?

> `optional` **actualUnloadingEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The actual unloading event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualUnloadingEvent

***

### additionalDocument?

> `optional` **additionalDocument**: [`IDocument`](IDocument.md)[]

An additional document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/additionalDocument

***

### agreedQuantity?

> `optional` **agreedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at header level, agreed for this trade delivery.

#### See

https://vocabulary.uncefact.org/agreedQuantity

***

### buyerOrderDateTime?

> `optional` **buyerOrderDateTime**: `string`

The date, time, date time, or other date time value, at header level, for the buyer order for this trade delivery.

#### See

https://vocabulary.uncefact.org/buyerOrderDateTime

***

### classificationDocument?

> `optional` **classificationDocument**: [`IDocument`](IDocument.md)[]

The referenced classification document, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/classificationDocument

***

### confirmedDespatchEvent?

> `optional` **confirmedDespatchEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The despatch event, at header level, confirmed for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedDespatchEvent

***

### confirmedPickUpEvent?

> `optional` **confirmedPickUpEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The pick-up event, at header level, confirmed for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedPickUpEvent

***

### confirmedReleaseEvent?

> `optional` **confirmedReleaseEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The confirmed release event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedReleaseEvent

***

### consumptionReportDocument?

> `optional` **consumptionReportDocument**: [`IDocument`](IDocument.md)[]

The consumption report document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/consumptionReportDocument

***

### deliveryNoteDocument?

> `optional` **deliveryNoteDocument**: [`IDocument`](IDocument.md)[]

The delivery note document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/deliveryNoteDocument

***

### despatchAdviceDocument?

> `optional` **despatchAdviceDocument**: [`IDocument`](IDocument.md)[]

The despatch advice document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/despatchAdviceDocument

***

### despatchedQuantity?

> `optional` **despatchedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at header level, despatched in this trade delivery.

#### See

https://vocabulary.uncefact.org/despatchedQuantity

***

### disposalParty?

> `optional` **disposalParty**: [`ITradeParty`](ITradeParty.md)[]

A disposal party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/disposalParty

***

### dueInAvailableQuantity?

> `optional` **dueInAvailableQuantity**: [`IQuantityType`](IQuantityType.md)[]

The due in available quantity, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInAvailableQuantity

***

### dueInForecastedQuantity?

> `optional` **dueInForecastedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The due in forecasted quantity, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInForecastedQuantity

***

### dueInRequestedQuantity?

> `optional` **dueInRequestedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The due in requested quantity, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInRequestedQuantity

***

### estimatedDeliveryEvent?

> `optional` **estimatedDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

An estimated delivery event for this trade delivery header.

#### See

https://vocabulary.uncefact.org/estimatedDeliveryEvent

***

### finalDeliveryIndicator?

> `optional` **finalDeliveryIndicator**: `boolean`

The indication, at header level, of whether or not this trade delivery is the final delivery.

#### See

https://vocabulary.uncefact.org/finalDeliveryIndicator

***

### finalDestinationCountry?

> `optional` **finalDestinationCountry**: [`ICountry`](ICountry.md)

The country of final destination, at header level, for this header trade delivery.

#### See

https://vocabulary.uncefact.org/finalDestinationCountry

***

### freightForwarderParty?

> `optional` **freightForwarderParty**: [`ITradeParty`](ITradeParty.md)[]

A freight forwarder party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/freightForwarderParty

***

### fullyDeliveredIndicator?

> `optional` **fullyDeliveredIndicator**: `boolean`

The indication, at header level, of whether or not this trade delivery is fully delivered.

#### See

https://vocabulary.uncefact.org/fullyDeliveredIndicator

***

### globalId?

> `optional` **globalId**: `string`

A global identifier, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/globalId

***

### goodsOwnershipChangeDateTime?

> `optional` **goodsOwnershipChangeDateTime**: `string`

The date, time, date time, or other date time value, at header level, when the goods ownership of this trade delivery
changed.

#### See

https://vocabulary.uncefact.org/goodsOwnershipChangeDateTime

***

### goodsReceiptNoteDocument?

> `optional` **goodsReceiptNoteDocument**: [`IDocument`](IDocument.md)[]

A goods receipt note document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/goodsReceiptNoteDocument

***

### headerTradeDeliveryGoodsPhysicalStateDescription?

> `optional` **headerTradeDeliveryGoodsPhysicalStateDescription**: `string`

A textual description for the physical state of the goods, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/headerTradeDeliveryGoodsPhysicalStateDescription

***

### headerTradeDeliveryGoodsPhysicalStateDescriptionCode?

> `optional` **headerTradeDeliveryGoodsPhysicalStateDescriptionCode**: `string`

The code specifying a description for the physical state of the goods, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/headerTradeDeliveryGoodsPhysicalStateDescriptionCode

***

### headerTradeDeliveryGoodsPhysicalStateType?

> `optional` **headerTradeDeliveryGoodsPhysicalStateType**: `string`

A type, expressed as text, for the physical state of the goods, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/headerTradeDeliveryGoodsPhysicalStateType

***

### headerTradeDeliveryGoodsPhysicalStateTypeCode?

> `optional` **headerTradeDeliveryGoodsPhysicalStateTypeCode**: `string`

The code specifying the type of physical state of the goods, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/headerTradeDeliveryGoodsPhysicalStateTypeCode

***

### identifier?

> `optional` **identifier**: `string`

The identifier, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedPackaging?

> `optional` **includedPackaging**: [`ISupplyChainPackaging`](ISupplyChainPackaging.md)[]

Packaging, at header level, included in this trade delivery.

#### See

https://vocabulary.uncefact.org/includedPackaging

***

### informationNote?

> `optional` **informationNote**: [`INote`](INote.md)[]

A note with information, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/informationNote

***

### inventoryManagerParty?

> `optional` **inventoryManagerParty**: [`ITradeParty`](ITradeParty.md)[]

An inventory manager party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/inventoryManagerParty

***

### modificationForecastedQuantity?

> `optional` **modificationForecastedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The modification of a previously forecasted quantity, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/modificationForecastedQuantity

***

### overDeliveryAllowedIndicator?

> `optional` **overDeliveryAllowedIndicator**: `boolean`

The indication, at header level, of whether or not over delivery is allowed for this trade delivery.

#### See

https://vocabulary.uncefact.org/overDeliveryAllowedIndicator

***

### packingListDocument?

> `optional` **packingListDocument**: [`IDocument`](IDocument.md)[]

The packing list document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/packingListDocument

***

### partialDeliveryAllowedIndicator?

> `optional` **partialDeliveryAllowedIndicator**: `boolean`

The indication, at header level, of whether or not this trade delivery can be partially delivered.

#### See

https://vocabulary.uncefact.org/partialDeliveryAllowedIndicator

***

### pickUpAvailabilityDateTime?

> `optional` **pickUpAvailabilityDateTime**: `string`

The formatted date, time, date time, or other date time value, at header level, when this trade delivery is available
for pick-up.

#### See

https://vocabulary.uncefact.org/pickUpAvailabilityDateTime

***

### plannedConsignment?

> `optional` **plannedConsignment**: [`IConsignment`](IConsignment.md)[]

A consignment, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedConsignment

***

### plannedDeliveryEvent?

> `optional` **plannedDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A delivery event, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedDeliveryEvent

***

### plannedDespatchEvent?

> `optional` **plannedDespatchEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A despatch event, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedDespatchEvent

***

### plannedPickUpEvent?

> `optional` **plannedPickUpEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The pick-up event, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedPickUpEvent

***

### plannedReleaseEvent?

> `optional` **plannedReleaseEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The release event, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedReleaseEvent

***

### plannedShipFromDeliveryEvent?

> `optional` **plannedShipFromDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The event of the planned ship from delivery, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedShipFromDeliveryEvent

***

### plannedShipToDeliveryEvent?

> `optional` **plannedShipToDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The planned ship to delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedShipToDeliveryEvent

***

### previousDeliverySupplyChainEvent?

> `optional` **previousDeliverySupplyChainEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A previous delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/previousDeliverySupplyChainEvent

***

### quantityCalculationMethodCode?

> `optional` **quantityCalculationMethodCode**: `string`

The code specifying the quantity calculation method of this header trade delivery.

#### See

https://vocabulary.uncefact.org/quantityCalculationMethodCode

***

### receivingAdviceDocument?

> `optional` **receivingAdviceDocument**: [`IDocument`](IDocument.md)[]

A receiving advice document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/receivingAdviceDocument

***

### relatedConsignment?

> `optional` **relatedConsignment**: [`IConsignment`](IConsignment.md)[]

A consignment, at header level, related to this trade delivery.

#### See

https://vocabulary.uncefact.org/relatedConsignment

***

### relatedParty?

> `optional` **relatedParty**: [`ITradeParty`](ITradeParty.md)[]

A trade party, at header level, related to this trade delivery.

#### See

https://vocabulary.uncefact.org/relatedParty

***

### remainingRequestedQuantity?

> `optional` **remainingRequestedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The remaining quantity, at header level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/remainingRequestedQuantity

***

### requestedDeliveryEvent?

> `optional` **requestedDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A delivery event, at header level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedDeliveryEvent

***

### requestedDespatchEvent?

> `optional` **requestedDespatchEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A despatch event, at header level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedDespatchEvent

***

### requestedQuantity?

> `optional` **requestedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at header level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedQuantity

***

### shipFromParty?

> `optional` **shipFromParty**: [`ITradeParty`](ITradeParty.md)[]

The ship from party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipFromParty

***

### shipToParty?

> `optional` **shipToParty**: [`ITradeParty`](ITradeParty.md)[]

The ship to party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipToParty

***

### shipmentScheduleDocument?

> `optional` **shipmentScheduleDocument**: [`IDocument`](IDocument.md)[]

The shipment schedule document, referenced at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipmentScheduleDocument

***

### specifiedDeliveryInstructions?

> `optional` **specifiedDeliveryInstructions**: [`IDeliveryInstructions`](IDeliveryInstructions.md)[]

Delivery instructions, at header level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedDeliveryInstructions

***

### specifiedHandlingInstructions?

> `optional` **specifiedHandlingInstructions**: [`IHandlingInstructions`](IHandlingInstructions.md)[]

Handling instructions, at header level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedHandlingInstructions

***

### specifiedSchedule?

> `optional` **specifiedSchedule**: [`ISchedule`](ISchedule.md)[]

A supply chain schedule, at header level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedSchedule

***

### specifiedSupplyChainEvent?

> `optional` **specifiedSupplyChainEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A supply chain event, at header level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/statusCode

***

### subordinateId?

> `optional` **subordinateId**: `string`

A subordinate identifier, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/subordinateId

***

### ultimateShipToDeliveryDateTime?

> `optional` **ultimateShipToDeliveryDateTime**: `string`

The date, time, date time, or other date time value, at header level, when this trade delivery is delivered to the
ultimate ship to party.

#### See

https://vocabulary.uncefact.org/ultimateShipToDeliveryDateTime

***

### ultimateShipToDeliveryEvent?

> `optional` **ultimateShipToDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The ultimate ship to delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/ultimateShipToDeliveryEvent

***

### ultimateShipToParty?

> `optional` **ultimateShipToParty**: [`ITradeParty`](ITradeParty.md)[]

The ultimate ship to party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/ultimateShipToParty

***

### utilizedTransportEquipment?

> `optional` **utilizedTransportEquipment**: [`ILogisticsTransportEquipment`](ILogisticsTransportEquipment.md)[]

Logistics transport equipment utilized for this header trade delivery.

#### See

https://vocabulary.uncefact.org/utilizedTransportEquipment

***

### weightUnitTareWeightMeasure?

> `optional` **weightUnitTareWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

The measure of the tare weight for this header trade delivery.

#### See

https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
