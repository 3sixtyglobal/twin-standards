# Interface: ILineTradeDelivery

Shipping arrangements and movement of products and or services including despatch and delivery at a line level.

## See

https://vocabulary.uncefact.org/LineTradeDelivery

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

> **type**: `"LineTradeDelivery"`

JSON-LD Type.

***

### acceptanceEvent?

> `optional` **acceptanceEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

An acceptance delivery event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/acceptanceEvent

***

### actualDeliveryEvent?

> `optional` **actualDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

An actual delivery event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualDeliveryEvent

***

### actualDespatchEvent?

> `optional` **actualDespatchEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

An actual despatch event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualDespatchEvent

***

### actualLoadingEvent?

> `optional` **actualLoadingEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The actual loading event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualLoadingEvent

***

### actualPickUpEvent?

> `optional` **actualPickUpEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The actual pick-up event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualPickUpEvent

***

### actualReceiptEvent?

> `optional` **actualReceiptEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The actual receipt event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualReceiptEvent

***

### actualUnloadingEvent?

> `optional` **actualUnloadingEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The actual unloading event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualUnloadingEvent

***

### additionalDocument?

> `optional` **additionalDocument**: [`IDocument`](IDocument.md)[]

An additional document, at line level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/additionalDocument

***

### agreedQuantity?

> `optional` **agreedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at line level, agreed for this trade delivery.

#### See

https://vocabulary.uncefact.org/agreedQuantity

***

### applicableDangerousGoods?

> `optional` **applicableDangerousGoods**: [`IDangerousGoods`](IDangerousGoods.md)[]

The transport dangerous goods details, at line level, applicable to this trade delivery.

#### See

https://vocabulary.uncefact.org/applicableDangerousGoods

***

### availableInventory?

> `optional` **availableInventory**: [`ISupplyChainInventory`](ISupplyChainInventory.md)[]

Inventory available, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/availableInventory

***

### availableQuantity?

> `optional` **availableQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at line level, available for this trade delivery.

#### See

https://vocabulary.uncefact.org/availableQuantity

***

### billedQuantity?

> `optional` **billedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at line level, billed for in this trade delivery.

#### See

https://vocabulary.uncefact.org/billedQuantity

***

### buyerOrderDateTime?

> `optional` **buyerOrderDateTime**: `string`

The date, time, date time, or other date time value, at line level, of the buyer order for this trade delivery.

#### See

https://vocabulary.uncefact.org/buyerOrderDateTime

***

### cancelledQuantity?

> `optional` **cancelledQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at line level, cancelled for this trade delivery.

#### See

https://vocabulary.uncefact.org/cancelledQuantity

***

### chargeFreeQuantity?

> `optional` **chargeFreeQuantity**: [`IQuantityType`](IQuantityType.md)

The quantity, at line level, free of charge, in this trade delivery.

#### See

https://vocabulary.uncefact.org/chargeFreeQuantity

***

### classificationDocument?

> `optional` **classificationDocument**: [`IDocument`](IDocument.md)[]

The referenced classification document, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/classificationDocument

***

### confirmedDeliveryEvent?

> `optional` **confirmedDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The confirmed delivery event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedDeliveryEvent

***

### confirmedDespatchEvent?

> `optional` **confirmedDespatchEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The despatch event, at line level, confirmed for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedDespatchEvent

***

### confirmedPickUpEvent?

> `optional` **confirmedPickUpEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The pick-up event, at line level, confirmed for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedPickUpEvent

***

### confirmedReleaseEvent?

> `optional` **confirmedReleaseEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The release event, at line level, confirmed for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedReleaseEvent

***

### consignmentInventory?

> `optional` **consignmentInventory**: [`ISupplyChainInventory`](ISupplyChainInventory.md)[]

Supply chain consignment inventory, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/consignmentInventory

***

### consumptionReportDocument?

> `optional` **consumptionReportDocument**: [`IDocument`](IDocument.md)[]

The consumption report document, at line level, referenced from this trade delivery.

#### See

https://vocabulary.uncefact.org/consumptionReportDocument

***

### consumptionSchedule?

> `optional` **consumptionSchedule**: [`ISchedule`](ISchedule.md)[]

A supply chain consumption schedule, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/consumptionSchedule

***

### customerInventory?

> `optional` **customerInventory**: [`ISupplyChainInventory`](ISupplyChainInventory.md)[]

Supply chain customer inventory, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/customerInventory

***

### deliveryNoteDocument?

> `optional` **deliveryNoteDocument**: [`IDocument`](IDocument.md)[]

The delivery note document, at line level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/deliveryNoteDocument

***

### deliverySchedule?

> `optional` **deliverySchedule**: [`ISchedule`](ISchedule.md)[]

A supply chain delivery schedule, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/deliverySchedule

***

### despatchAdviceDocument?

> `optional` **despatchAdviceDocument**: [`IDocument`](IDocument.md)[]

The despatch advice document, at line level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/despatchAdviceDocument

***

### despatchSchedule?

> `optional` **despatchSchedule**: [`ISchedule`](ISchedule.md)[]

A supply chain despatch schedule, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/despatchSchedule

***

### despatchedQuantity?

> `optional` **despatchedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at line level, despatched for this trade delivery.

#### See

https://vocabulary.uncefact.org/despatchedQuantity

***

### destroyedQuantity?

> `optional` **destroyedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at line level, destroyed for this trade delivery.

#### See

https://vocabulary.uncefact.org/destroyedQuantity

***

### disposalParty?

> `optional` **disposalParty**: [`ITradeParty`](ITradeParty.md)[]

A disposal party, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/disposalParty

***

### dueInAvailableQuantity?

> `optional` **dueInAvailableQuantity**: [`IQuantityType`](IQuantityType.md)[]

The due in available quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInAvailableQuantity

***

### dueInForecastedQuantity?

> `optional` **dueInForecastedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The due in forecasted quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInForecastedQuantity

***

### dueInRequestedQuantity?

> `optional` **dueInRequestedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The due in requested quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInRequestedQuantity

***

### dueInReturnedQuantity?

> `optional` **dueInReturnedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The due in returned quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInReturnedQuantity

***

### economicOrderQuantity?

> `optional` **economicOrderQuantity**: [`IQuantityType`](IQuantityType.md)[]

The economic order quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/economicOrderQuantity

***

### finalDeliveryIndicator?

> `optional` **finalDeliveryIndicator**: `boolean`

The indication, at line level, of whether or not this trade delivery is the final delivery.

#### See

https://vocabulary.uncefact.org/finalDeliveryIndicator

***

### finalDestinationCountry?

> `optional` **finalDestinationCountry**: [`ICountry`](ICountry.md)

The country of final destination, at line level, for line trade delivery.

#### See

https://vocabulary.uncefact.org/finalDestinationCountry

***

### fullyDeliveredIndicator?

> `optional` **fullyDeliveredIndicator**: `boolean`

The indication, at line level, of whether or not this trade delivery is fully delivered.

#### See

https://vocabulary.uncefact.org/fullyDeliveredIndicator

***

### gFMTransferRejectedQuantity?

> `optional` **gFMTransferRejectedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The Government Furnished Material (GFM) transfer rejected quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/gFMTransferRejectedQuantity

***

### goodsOwnershipChangeDateTime?

> `optional` **goodsOwnershipChangeDateTime**: `string`

The date, time, date time, or other date time value for the goods ownership change, at line level, for this trade
delivery.

#### See

https://vocabulary.uncefact.org/goodsOwnershipChangeDateTime

***

### goodsReceiptNoteDocument?

> `optional` **goodsReceiptNoteDocument**: [`IDocument`](IDocument.md)[]

The goods receipt note document, at line level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/goodsReceiptNoteDocument

***

### identifier?

> `optional` **identifier**: `string`

An identifier, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedPackaging?

> `optional` **includedPackaging**: [`ISupplyChainPackaging`](ISupplyChainPackaging.md)[]

Packaging included, at line level, in this trade delivery.

#### See

https://vocabulary.uncefact.org/includedPackaging

***

### individualPackageQuantity?

> `optional` **individualPackageQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity within the individual package, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/individualPackageQuantity

***

### informationNote?

> `optional` **informationNote**: [`INote`](INote.md)[]

A note with information, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/informationNote

***

### inventoryManagerParty?

> `optional` **inventoryManagerParty**: [`ITradeParty`](ITradeParty.md)[]

An inventory manager party, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/inventoryManagerParty

***

### latestDespatchedQuantity?

> `optional` **latestDespatchedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The latest quantity, at line level, despatched in this trade delivery.

#### See

https://vocabulary.uncefact.org/latestDespatchedQuantity

***

### lineTradeDeliveryQuantityDiscrepancyNatureCode?

> `optional` **lineTradeDeliveryQuantityDiscrepancyNatureCode**: `string`

The code specifying the nature of the discrepancy of the quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/lineTradeDeliveryQuantityDiscrepancyNatureCode

***

### lineTradeDeliveryQuantityVariationTypeCode?

> `optional` **lineTradeDeliveryQuantityVariationTypeCode**: `string`

The code specifying the type of quantity variation, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/lineTradeDeliveryQuantityVariationTypeCode

***

### logisticsPackage?

> `optional` **logisticsPackage**: [`IPackage`](IPackage.md)[]

A referenced logistics package, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/logisticsPackage

***

### logisticsServiceProviderParty?

> `optional` **logisticsServiceProviderParty**: [`ITradeParty`](ITradeParty.md)[]

A logistics service provider party, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/logisticsServiceProviderParty

***

### modificationForecastedQuantity?

> `optional` **modificationForecastedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The modification of a forecasted quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/modificationForecastedQuantity

***

### orderQuantity?

> `optional` **orderQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at line level, ordered for this trade delivery.

#### See

https://vocabulary.uncefact.org/orderQuantity

***

### orderSchedule?

> `optional` **orderSchedule**: [`ISchedule`](ISchedule.md)[]

A supply chain order schedule, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/orderSchedule

***

### overDeliveryAllowedIndicator?

> `optional` **overDeliveryAllowedIndicator**: `boolean`

The indication, at line level, of whether or not over delivery is allowed for this trade delivery.

#### See

https://vocabulary.uncefact.org/overDeliveryAllowedIndicator

***

### packageQuantity?

> `optional` **packageQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of packages, at line level, in this trade delivery.

#### See

https://vocabulary.uncefact.org/packageQuantity

***

### packingListDocument?

> `optional` **packingListDocument**: [`IDocument`](IDocument.md)[]

The packing list document, at line level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/packingListDocument

***

### partialDeliveryAllowedIndicator?

> `optional` **partialDeliveryAllowedIndicator**: `boolean`

The indication, at line level, of whether or not this trade delivery can be partially delivered.

#### See

https://vocabulary.uncefact.org/partialDeliveryAllowedIndicator

***

### perPackageUnitQuantity?

> `optional` **perPackageUnitQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of units per package, at line level, in this trade delivery.

#### See

https://vocabulary.uncefact.org/perPackageUnitQuantity

***

### pickUpAvailabilityDateTime?

> `optional` **pickUpAvailabilityDateTime**: `string`

The formatted date, time, date time, or other date time value, at line level, when this delivery is available for
pick-up.

#### See

https://vocabulary.uncefact.org/pickUpAvailabilityDateTime

***

### plannedConsignment?

> `optional` **plannedConsignment**: [`IConsignment`](IConsignment.md)[]

A consignment, at line level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedConsignment

***

### plannedDeliveryEvent?

> `optional` **plannedDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A delivery event, at line level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedDeliveryEvent

***

### plannedDespatchEvent?

> `optional` **plannedDespatchEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A despatch event, at line level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedDespatchEvent

***

### plannedPickUpEvent?

> `optional` **plannedPickUpEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The pick-up event, at line level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedPickUpEvent

***

### plannedShipToDeliveryEvent?

> `optional` **plannedShipToDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

The planned ship to delivery event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedShipToDeliveryEvent

***

### productUnitQuantity?

> `optional` **productUnitQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of product units, at line level, in this trade delivery.

#### See

https://vocabulary.uncefact.org/productUnitQuantity

***

### projectedSupplyPlan?

> `optional` **projectedSupplyPlan**: [`ISupplyPlan`](ISupplyPlan.md)[]

A supply plan, at line level, projected for this trade delivery.

#### See

https://vocabulary.uncefact.org/projectedSupplyPlan

***

### quantityCalculationMethodCode?

> `optional` **quantityCalculationMethodCode**: `string`

The code specifying the quantity calculation method of this line trade delivery.

#### See

https://vocabulary.uncefact.org/quantityCalculationMethodCode

***

### quantityVariationReason?

> `optional` **quantityVariationReason**: `string`

A reason, expressed as text, for a quantity variation, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/quantityVariationReason

***

### quantityVariationReasonCode?

> `optional` **quantityVariationReasonCode**: `string`

The code specifying the reason for the quantity variation, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/quantityVariationReasonCode

***

### receiptSchedule?

> `optional` **receiptSchedule**: [`ISchedule`](ISchedule.md)[]

A supply chain receipt schedule, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/receiptSchedule

***

### receivedQuantity?

> `optional` **receivedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at line level, received for this trade delivery.

#### See

https://vocabulary.uncefact.org/receivedQuantity

***

### receivingAdviceDocument?

> `optional` **receivingAdviceDocument**: [`IDocument`](IDocument.md)[]

A receiving advice document, at line level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/receivingAdviceDocument

***

### rejectedQuantity?

> `optional` **rejectedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at line level, rejected for this trade delivery.

#### See

https://vocabulary.uncefact.org/rejectedQuantity

***

### relatedConsignment?

> `optional` **relatedConsignment**: [`IConsignment`](IConsignment.md)[]

A consignment, at line level, related to this line trade delivery.

#### See

https://vocabulary.uncefact.org/relatedConsignment

***

### remainingRequestedQuantity?

> `optional` **remainingRequestedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The remaining quantity, at line level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/remainingRequestedQuantity

***

### requestedDeliveryEvent?

> `optional` **requestedDeliveryEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A delivery event, at line level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedDeliveryEvent

***

### requestedDespatchEvent?

> `optional` **requestedDespatchEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A despatch event, at line level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedDespatchEvent

***

### requestedQuantity?

> `optional` **requestedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at line level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedQuantity

***

### returnedQuantity?

> `optional` **returnedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at line level, returned for this trade delivery.

#### See

https://vocabulary.uncefact.org/returnedQuantity

***

### reverseBilledQuantity?

> `optional` **reverseBilledQuantity**: [`IQuantityType`](IQuantityType.md)[]

The reverse billed quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/reverseBilledQuantity

***

### shipFromParty?

> `optional` **shipFromParty**: [`ITradeParty`](ITradeParty.md)[]

The ship from party, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipFromParty

***

### shipToParty?

> `optional` **shipToParty**: [`ITradeParty`](ITradeParty.md)[]

The ship to party, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipToParty

***

### shipmentScheduleDocument?

> `optional` **shipmentScheduleDocument**: [`IDocument`](IDocument.md)[]

The shipment schedule document referenced, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipmentScheduleDocument

***

### specifiedDeliveryAdjustment?

> `optional` **specifiedDeliveryAdjustment**: [`IDeliveryAdjustment`](IDeliveryAdjustment.md)[]

A delivery adjustment, at line level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedDeliveryAdjustment

***

### specifiedDeliveryInstructions?

> `optional` **specifiedDeliveryInstructions**: [`IDeliveryInstructions`](IDeliveryInstructions.md)[]

Delivery instructions, at line level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedDeliveryInstructions

***

### specifiedHandlingInstructions?

> `optional` **specifiedHandlingInstructions**: [`IHandlingInstructions`](IHandlingInstructions.md)[]

Handling instructions, at line level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedHandlingInstructions

***

### specifiedPackage?

> `optional` **specifiedPackage**: [`IPackage`](IPackage.md)[]

A logistics package, at line level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedPackage

***

### specifiedSchedule?

> `optional` **specifiedSchedule**: [`ISchedule`](ISchedule.md)[]

A supply chain schedule, specified at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedSchedule

***

### splitQuantity?

> `optional` **splitQuantity**: [`IQuantityType`](IQuantityType.md)[]

A split quantity for this line trade delivery.

#### See

https://vocabulary.uncefact.org/splitQuantity

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/statusCode

***

### subordinateId?

> `optional` **subordinateId**: `string`

A subordinate identifier, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/subordinateId

***

### supplySpecifiedSchedule?

> `optional` **supplySpecifiedSchedule**: [`ISchedule`](ISchedule.md)[]

A supply (replenishment) schedule, specified at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/supplySpecifiedSchedule

***

### turnInReceivedQuantity?

> `optional` **turnInReceivedQuantity**: [`IQuantityType`](IQuantityType.md)[]

The turn in quantity, at line level, received for this trade delivery.

#### See

https://vocabulary.uncefact.org/turnInReceivedQuantity

***

### ultimateShipToDeliveryDateTime?

> `optional` **ultimateShipToDeliveryDateTime**: `string`

The formatted date, time, date time, or other date time value, at line level, when this trade delivery is delivered to
the ultimate ship to party.

#### See

https://vocabulary.uncefact.org/ultimateShipToDeliveryDateTime

***

### ultimateShipToParty?

> `optional` **ultimateShipToParty**: [`ITradeParty`](ITradeParty.md)[]

The ultimate ship to party, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/ultimateShipToParty

***

### unavailableQuantity?

> `optional` **unavailableQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity, at line level, unavailable for this trade delivery.

#### See

https://vocabulary.uncefact.org/unavailableQuantity

***

### usedLabel?

> `optional` **usedLabel**: [`ILogisticsLabel`](ILogisticsLabel.md)[]

A logistics label, at line level, used for this trade delivery.

#### See

https://vocabulary.uncefact.org/usedLabel

***

### utilizedTransportEquipment?

> `optional` **utilizedTransportEquipment**: [`ILogisticsTransportEquipment`](ILogisticsTransportEquipment.md)[]

A piece of logistics transport equipment, at line level, utilized for this trade delivery.

#### See

https://vocabulary.uncefact.org/utilizedTransportEquipment

***

### volumeUnitGrossVolumeMeasure?

> `optional` **volumeUnitGrossVolumeMeasure**: [`IVolumeUnitMeasureType`](IVolumeUnitMeasureType.md)[]

The measure, at line level, of the gross volume of this trade delivery.

#### See

https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure

***

### volumeUnitNetVolumeMeasure?

> `optional` **volumeUnitNetVolumeMeasure**: [`IVolumeUnitMeasureType`](IVolumeUnitMeasureType.md)[]

The measure, at line level, of the net volume of this line trade delivery.

#### See

https://vocabulary.uncefact.org/volumeUnitNetVolumeMeasure

***

### weightUnitChargeableWeightMeasure?

> `optional` **weightUnitChargeableWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)

The measure of the chargeable weight, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/weightUnitChargeableWeightMeasure

***

### weightUnitGrossWeightMeasure?

> `optional` **weightUnitGrossWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

The measure, at line level, of the gross weight (mass) of this line trade delivery.

#### See

https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure

***

### weightUnitNetWeightMeasure?

> `optional` **weightUnitNetWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

The measure, at line level, of the net weight (mass) of this trade delivery.

#### See

https://vocabulary.uncefact.org/weightUnitNetWeightMeasure

***

### weightUnitTheoreticalWeightMeasure?

> `optional` **weightUnitTheoreticalWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)

The measure, at line level, of the theoretical weight of this trade delivery.

#### See

https://vocabulary.uncefact.org/weightUnitTheoreticalWeightMeasure
