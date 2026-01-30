# Interface: IUneceHeaderTradeDelivery

Shipping arrangements and movement of products and or services including despatch and delivery at a header level.

## See

https://vocabulary.uncefact.org/HeaderTradeDelivery

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

> **type**: `"HeaderTradeDelivery"`

JSON-LD Type.

***

### acceptanceEvent?

> `optional` **acceptanceEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An acceptance delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/acceptanceEvent

***

### actualDeliveryEvent?

> `optional` **actualDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An actual delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualDeliveryEvent

***

### actualDespatchEvent?

> `optional` **actualDespatchEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An actual despatch event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualDespatchEvent

***

### actualLoadingEvent?

> `optional` **actualLoadingEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

The actual loading event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualLoadingEvent

***

### actualPickUpEvent?

> `optional` **actualPickUpEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

The actual pick-up event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualPickUpEvent

***

### actualReceiptEvent?

> `optional` **actualReceiptEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

The actual receipt event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualReceiptEvent

***

### actualUnloadingEvent?

> `optional` **actualUnloadingEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

The actual unloading event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualUnloadingEvent

***

### additionalDocument?

> `optional` **additionalDocument**: [`IUneceDocument`](IUneceDocument.md)[]

An additional document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/additionalDocument

***

### agreedQuantity?

> `optional` **agreedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

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

> `optional` **classificationDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The referenced classification document, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/classificationDocument

***

### confirmedDespatchEvent?

> `optional` **confirmedDespatchEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

The despatch event, at header level, confirmed for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedDespatchEvent

***

### confirmedPickUpEvent?

> `optional` **confirmedPickUpEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

The pick-up event, at header level, confirmed for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedPickUpEvent

***

### confirmedReleaseEvent?

> `optional` **confirmedReleaseEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

The confirmed release event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedReleaseEvent

***

### consumptionReportDocument?

> `optional` **consumptionReportDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The consumption report document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/consumptionReportDocument

***

### deliveryNoteDocument?

> `optional` **deliveryNoteDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The delivery note document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/deliveryNoteDocument

***

### despatchAdviceDocument?

> `optional` **despatchAdviceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The despatch advice document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/despatchAdviceDocument

***

### despatchedQuantity?

> `optional` **despatchedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The quantity, at header level, despatched in this trade delivery.

#### See

https://vocabulary.uncefact.org/despatchedQuantity

***

### disposalParty?

> `optional` **disposalParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A disposal party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/disposalParty

***

### dueInAvailableQuantity?

> `optional` **dueInAvailableQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The due in available quantity, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInAvailableQuantity

***

### dueInForecastedQuantity?

> `optional` **dueInForecastedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The due in forecasted quantity, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInForecastedQuantity

***

### dueInRequestedQuantity?

> `optional` **dueInRequestedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The due in requested quantity, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInRequestedQuantity

***

### estimatedDeliveryEvent?

> `optional` **estimatedDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

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

> `optional` **finalDestinationCountry**: [`IUneceCountry`](IUneceCountry.md)

The country of final destination, at header level, for this header trade delivery.

#### See

https://vocabulary.uncefact.org/finalDestinationCountry

***

### freightForwarderParty?

> `optional` **freightForwarderParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

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

> `optional` **goodsReceiptNoteDocument**: [`IUneceDocument`](IUneceDocument.md)[]

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

> `optional` **includedPackaging**: [`IUneceSupplyChainPackaging`](IUneceSupplyChainPackaging.md)[]

Packaging, at header level, included in this trade delivery.

#### See

https://vocabulary.uncefact.org/includedPackaging

***

### informationNote?

> `optional` **informationNote**: [`IUneceNote`](IUneceNote.md)[]

A note with information, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/informationNote

***

### inventoryManagerParty?

> `optional` **inventoryManagerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

An inventory manager party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/inventoryManagerParty

***

### modificationForecastedQuantity?

> `optional` **modificationForecastedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

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

> `optional` **packingListDocument**: [`IUneceDocument`](IUneceDocument.md)[]

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

> `optional` **plannedConsignment**: [`IUneceConsignment`](IUneceConsignment.md)[]

A consignment, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedConsignment

***

### plannedDeliveryEvent?

> `optional` **plannedDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A delivery event, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedDeliveryEvent

***

### plannedDespatchEvent?

> `optional` **plannedDespatchEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A despatch event, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedDespatchEvent

***

### plannedPickUpEvent?

> `optional` **plannedPickUpEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

The pick-up event, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedPickUpEvent

***

### plannedReleaseEvent?

> `optional` **plannedReleaseEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

The release event, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedReleaseEvent

***

### plannedShipFromDeliveryEvent?

> `optional` **plannedShipFromDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

The event of the planned ship from delivery, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedShipFromDeliveryEvent

***

### plannedShipToDeliveryEvent?

> `optional` **plannedShipToDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

The planned ship to delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedShipToDeliveryEvent

***

### previousDeliverySupplyChainEvent?

> `optional` **previousDeliverySupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

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

> `optional` **receivingAdviceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A receiving advice document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/receivingAdviceDocument

***

### relatedConsignment?

> `optional` **relatedConsignment**: [`IUneceConsignment`](IUneceConsignment.md)[]

A consignment, at header level, related to this trade delivery.

#### See

https://vocabulary.uncefact.org/relatedConsignment

***

### relatedParty?

> `optional` **relatedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party, at header level, related to this trade delivery.

#### See

https://vocabulary.uncefact.org/relatedParty

***

### remainingRequestedQuantity?

> `optional` **remainingRequestedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The remaining quantity, at header level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/remainingRequestedQuantity

***

### requestedDeliveryEvent?

> `optional` **requestedDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A delivery event, at header level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedDeliveryEvent

***

### requestedDespatchEvent?

> `optional` **requestedDespatchEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A despatch event, at header level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedDespatchEvent

***

### requestedQuantity?

> `optional` **requestedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The quantity, at header level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedQuantity

***

### shipFromParty?

> `optional` **shipFromParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The ship from party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipFromParty

***

### shipToParty?

> `optional` **shipToParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The ship to party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipToParty

***

### shipmentScheduleDocument?

> `optional` **shipmentScheduleDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The shipment schedule document, referenced at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipmentScheduleDocument

***

### specifiedDeliveryInstructions?

> `optional` **specifiedDeliveryInstructions**: [`IUneceDeliveryInstructions`](IUneceDeliveryInstructions.md)[]

Delivery instructions, at header level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedDeliveryInstructions

***

### specifiedHandlingInstructions?

> `optional` **specifiedHandlingInstructions**: [`IUneceHandlingInstructions`](IUneceHandlingInstructions.md)[]

Handling instructions, at header level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedHandlingInstructions

***

### specifiedSchedule?

> `optional` **specifiedSchedule**: [`IUneceSchedule`](IUneceSchedule.md)[]

A supply chain schedule, at header level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedSchedule

***

### specifiedSupplyChainEvent?

> `optional` **specifiedSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

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

> `optional` **ultimateShipToDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

The ultimate ship to delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/ultimateShipToDeliveryEvent

***

### ultimateShipToParty?

> `optional` **ultimateShipToParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The ultimate ship to party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/ultimateShipToParty

***

### utilizedTransportEquipment?

> `optional` **utilizedTransportEquipment**: [`IUneceLogisticsTransportEquipment`](IUneceLogisticsTransportEquipment.md)[]

Logistics transport equipment utilized for this header trade delivery.

#### See

https://vocabulary.uncefact.org/utilizedTransportEquipment

***

### weightUnitTareWeightMeasure?

> `optional` **weightUnitTareWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

The measure of the tare weight for this header trade delivery.

#### See

https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
