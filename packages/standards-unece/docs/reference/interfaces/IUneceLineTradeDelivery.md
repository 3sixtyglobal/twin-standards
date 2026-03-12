# Interface: IUneceLineTradeDelivery

Shipping arrangements and movement of products and or services including despatch and delivery at a line level.

## See

https://vocabulary.uncefact.org/LineTradeDelivery

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"LineTradeDelivery"`

JSON-LD Type.

***

### acceptanceEvent? {#acceptanceevent}

> `optional` **acceptanceEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An acceptance delivery event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/acceptanceEvent

***

### actualDeliveryEvent? {#actualdeliveryevent}

> `optional` **actualDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An actual delivery event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualDeliveryEvent

***

### actualDespatchEvent? {#actualdespatchevent}

> `optional` **actualDespatchEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An actual despatch event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualDespatchEvent

***

### actualLoadingEvent? {#actualloadingevent}

> `optional` **actualLoadingEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The actual loading event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualLoadingEvent

***

### actualPickUpEvent? {#actualpickupevent}

> `optional` **actualPickUpEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The actual pick-up event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualPickUpEvent

***

### actualReceiptEvent? {#actualreceiptevent}

> `optional` **actualReceiptEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The actual receipt event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualReceiptEvent

***

### actualUnloadingEvent? {#actualunloadingevent}

> `optional` **actualUnloadingEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The actual unloading event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualUnloadingEvent

***

### additionalDocument? {#additionaldocument}

> `optional` **additionalDocument**: [`IUneceDocument`](IUneceDocument.md)[]

An additional document, at line level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/additionalDocument

***

### agreedQuantity? {#agreedquantity}

> `optional` **agreedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at line level, agreed for this trade delivery.

#### See

https://vocabulary.uncefact.org/agreedQuantity

***

### applicableDangerousGoods? {#applicabledangerousgoods}

> `optional` **applicableDangerousGoods**: [`IUneceDangerousGoods`](IUneceDangerousGoods.md)

The transport dangerous goods details, at line level, applicable to this trade delivery.

#### See

https://vocabulary.uncefact.org/applicableDangerousGoods

***

### availableInventory? {#availableinventory}

> `optional` **availableInventory**: [`IUneceSupplyChainInventory`](IUneceSupplyChainInventory.md)[]

Inventory available, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/availableInventory

***

### availableQuantity? {#availablequantity}

> `optional` **availableQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at line level, available for this trade delivery.

#### See

https://vocabulary.uncefact.org/availableQuantity

***

### billedQuantity? {#billedquantity}

> `optional` **billedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at line level, billed for in this trade delivery.

#### See

https://vocabulary.uncefact.org/billedQuantity

***

### buyerOrderDateTime? {#buyerorderdatetime}

> `optional` **buyerOrderDateTime**: `string`

The date, time, date time, or other date time value, at line level, of the buyer order for this trade delivery.

#### See

https://vocabulary.uncefact.org/buyerOrderDateTime

***

### cancelledQuantity? {#cancelledquantity}

> `optional` **cancelledQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at line level, cancelled for this trade delivery.

#### See

https://vocabulary.uncefact.org/cancelledQuantity

***

### chargeFreeQuantity? {#chargefreequantity}

> `optional` **chargeFreeQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at line level, free of charge, in this trade delivery.

#### See

https://vocabulary.uncefact.org/chargeFreeQuantity

***

### classificationDocument? {#classificationdocument}

> `optional` **classificationDocument**: [`IUneceDocument`](IUneceDocument.md)

The referenced classification document, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/classificationDocument

***

### confirmedDeliveryEvent? {#confirmeddeliveryevent}

> `optional` **confirmedDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The confirmed delivery event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedDeliveryEvent

***

### confirmedDespatchEvent? {#confirmeddespatchevent}

> `optional` **confirmedDespatchEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The despatch event, at line level, confirmed for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedDespatchEvent

***

### confirmedPickUpEvent? {#confirmedpickupevent}

> `optional` **confirmedPickUpEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The pick-up event, at line level, confirmed for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedPickUpEvent

***

### confirmedReleaseEvent? {#confirmedreleaseevent}

> `optional` **confirmedReleaseEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The release event, at line level, confirmed for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedReleaseEvent

***

### consignmentInventory? {#consignmentinventory}

> `optional` **consignmentInventory**: [`IUneceSupplyChainInventory`](IUneceSupplyChainInventory.md)[]

Supply chain consignment inventory, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/consignmentInventory

***

### consumptionReportDocument? {#consumptionreportdocument}

> `optional` **consumptionReportDocument**: [`IUneceDocument`](IUneceDocument.md)

The consumption report document, at line level, referenced from this trade delivery.

#### See

https://vocabulary.uncefact.org/consumptionReportDocument

***

### consumptionSchedule? {#consumptionschedule}

> `optional` **consumptionSchedule**: [`IUneceSchedule`](IUneceSchedule.md)[]

A supply chain consumption schedule, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/consumptionSchedule

***

### customerInventory? {#customerinventory}

> `optional` **customerInventory**: [`IUneceSupplyChainInventory`](IUneceSupplyChainInventory.md)[]

Supply chain customer inventory, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/customerInventory

***

### deliveryNoteDocument? {#deliverynotedocument}

> `optional` **deliveryNoteDocument**: [`IUneceDocument`](IUneceDocument.md)

The delivery note document, at line level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/deliveryNoteDocument

***

### deliverySchedule? {#deliveryschedule}

> `optional` **deliverySchedule**: [`IUneceSchedule`](IUneceSchedule.md)[]

A supply chain delivery schedule, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/deliverySchedule

***

### despatchAdviceDocument? {#despatchadvicedocument}

> `optional` **despatchAdviceDocument**: [`IUneceDocument`](IUneceDocument.md)

The despatch advice document, at line level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/despatchAdviceDocument

***

### despatchSchedule? {#despatchschedule}

> `optional` **despatchSchedule**: [`IUneceSchedule`](IUneceSchedule.md)[]

A supply chain despatch schedule, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/despatchSchedule

***

### despatchedQuantity? {#despatchedquantity}

> `optional` **despatchedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at line level, despatched for this trade delivery.

#### See

https://vocabulary.uncefact.org/despatchedQuantity

***

### destroyedQuantity? {#destroyedquantity}

> `optional` **destroyedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at line level, destroyed for this trade delivery.

#### See

https://vocabulary.uncefact.org/destroyedQuantity

***

### disposalParty? {#disposalparty}

> `optional` **disposalParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A disposal party, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/disposalParty

***

### dueInAvailableQuantity? {#dueinavailablequantity}

> `optional` **dueInAvailableQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The due in available quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInAvailableQuantity

***

### dueInForecastedQuantity? {#dueinforecastedquantity}

> `optional` **dueInForecastedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The due in forecasted quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInForecastedQuantity

***

### dueInRequestedQuantity? {#dueinrequestedquantity}

> `optional` **dueInRequestedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The due in requested quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInRequestedQuantity

***

### dueInReturnedQuantity? {#dueinreturnedquantity}

> `optional` **dueInReturnedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The due in returned quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInReturnedQuantity

***

### economicOrderQuantity? {#economicorderquantity}

> `optional` **economicOrderQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The economic order quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/economicOrderQuantity

***

### finalDeliveryIndicator? {#finaldeliveryindicator}

> `optional` **finalDeliveryIndicator**: `boolean`

The indication, at line level, of whether or not this trade delivery is the final delivery.

#### See

https://vocabulary.uncefact.org/finalDeliveryIndicator

***

### finalDestinationCountry? {#finaldestinationcountry}

> `optional` **finalDestinationCountry**: [`IUneceCountry`](IUneceCountry.md)

The country of final destination, at line level, for line trade delivery.

#### See

https://vocabulary.uncefact.org/finalDestinationCountry

***

### fullyDeliveredIndicator? {#fullydeliveredindicator}

> `optional` **fullyDeliveredIndicator**: `boolean`

The indication, at line level, of whether or not this trade delivery is fully delivered.

#### See

https://vocabulary.uncefact.org/fullyDeliveredIndicator

***

### gFMTransferRejectedQuantity? {#gfmtransferrejectedquantity}

> `optional` **gFMTransferRejectedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The Government Furnished Material (GFM) transfer rejected quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/gFMTransferRejectedQuantity

***

### goodsOwnershipChangeDateTime? {#goodsownershipchangedatetime}

> `optional` **goodsOwnershipChangeDateTime**: `string`

The date, time, date time, or other date time value for the goods ownership change, at line level, for this trade
delivery.

#### See

https://vocabulary.uncefact.org/goodsOwnershipChangeDateTime

***

### goodsReceiptNoteDocument? {#goodsreceiptnotedocument}

> `optional` **goodsReceiptNoteDocument**: [`IUneceDocument`](IUneceDocument.md)

The goods receipt note document, at line level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/goodsReceiptNoteDocument

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedPackaging? {#includedpackaging}

> `optional` **includedPackaging**: [`IUneceSupplyChainPackaging`](IUneceSupplyChainPackaging.md)[]

Packaging included, at line level, in this trade delivery.

#### See

https://vocabulary.uncefact.org/includedPackaging

***

### individualPackageQuantity? {#individualpackagequantity}

> `optional` **individualPackageQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity within the individual package, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/individualPackageQuantity

***

### informationNote? {#informationnote}

> `optional` **informationNote**: [`IUneceNote`](IUneceNote.md)[]

A note with information, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/informationNote

***

### inventoryManagerParty? {#inventorymanagerparty}

> `optional` **inventoryManagerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

An inventory manager party, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/inventoryManagerParty

***

### latestDespatchedQuantity? {#latestdespatchedquantity}

> `optional` **latestDespatchedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The latest quantity, at line level, despatched in this trade delivery.

#### See

https://vocabulary.uncefact.org/latestDespatchedQuantity

***

### lineTradeDeliveryQuantityDiscrepancyNatureCode? {#linetradedeliveryquantitydiscrepancynaturecode}

> `optional` **lineTradeDeliveryQuantityDiscrepancyNatureCode**: `string`

The code specifying the nature of the discrepancy of the quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/lineTradeDeliveryQuantityDiscrepancyNatureCode

***

### lineTradeDeliveryQuantityVariationTypeCode? {#linetradedeliveryquantityvariationtypecode}

> `optional` **lineTradeDeliveryQuantityVariationTypeCode**: `string`

The code specifying the type of quantity variation, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/lineTradeDeliveryQuantityVariationTypeCode

***

### logisticsPackage? {#logisticspackage}

> `optional` **logisticsPackage**: [`IUnecePackage`](IUnecePackage.md)[]

A referenced logistics package, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/logisticsPackage

***

### logisticsServiceProviderParty? {#logisticsserviceproviderparty}

> `optional` **logisticsServiceProviderParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A logistics service provider party, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/logisticsServiceProviderParty

***

### modificationForecastedQuantity? {#modificationforecastedquantity}

> `optional` **modificationForecastedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The modification of a forecasted quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/modificationForecastedQuantity

***

### orderQuantity? {#orderquantity}

> `optional` **orderQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at line level, ordered for this trade delivery.

#### See

https://vocabulary.uncefact.org/orderQuantity

***

### orderSchedule? {#orderschedule}

> `optional` **orderSchedule**: [`IUneceSchedule`](IUneceSchedule.md)[]

A supply chain order schedule, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/orderSchedule

***

### overDeliveryAllowedIndicator? {#overdeliveryallowedindicator}

> `optional` **overDeliveryAllowedIndicator**: `boolean`

The indication, at line level, of whether or not over delivery is allowed for this trade delivery.

#### See

https://vocabulary.uncefact.org/overDeliveryAllowedIndicator

***

### packageQuantity? {#packagequantity}

> `optional` **packageQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of packages, at line level, in this trade delivery.

#### See

https://vocabulary.uncefact.org/packageQuantity

***

### packingListDocument? {#packinglistdocument}

> `optional` **packingListDocument**: [`IUneceDocument`](IUneceDocument.md)

The packing list document, at line level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/packingListDocument

***

### partialDeliveryAllowedIndicator? {#partialdeliveryallowedindicator}

> `optional` **partialDeliveryAllowedIndicator**: `boolean`

The indication, at line level, of whether or not this trade delivery can be partially delivered.

#### See

https://vocabulary.uncefact.org/partialDeliveryAllowedIndicator

***

### perPackageUnitQuantity? {#perpackageunitquantity}

> `optional` **perPackageUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units per package, at line level, in this trade delivery.

#### See

https://vocabulary.uncefact.org/perPackageUnitQuantity

***

### pickUpAvailabilityDateTime? {#pickupavailabilitydatetime}

> `optional` **pickUpAvailabilityDateTime**: `string`

The formatted date, time, date time, or other date time value, at line level, when this delivery is available for
pick-up.

#### See

https://vocabulary.uncefact.org/pickUpAvailabilityDateTime

***

### plannedConsignment? {#plannedconsignment}

> `optional` **plannedConsignment**: [`IUneceConsignment`](IUneceConsignment.md)[]

A consignment, at line level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedConsignment

***

### plannedDeliveryEvent? {#planneddeliveryevent}

> `optional` **plannedDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A delivery event, at line level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedDeliveryEvent

***

### plannedDespatchEvent? {#planneddespatchevent}

> `optional` **plannedDespatchEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A despatch event, at line level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedDespatchEvent

***

### plannedPickUpEvent? {#plannedpickupevent}

> `optional` **plannedPickUpEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The pick-up event, at line level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedPickUpEvent

***

### plannedShipToDeliveryEvent? {#plannedshiptodeliveryevent}

> `optional` **plannedShipToDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The planned ship to delivery event, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedShipToDeliveryEvent

***

### productUnitQuantity? {#productunitquantity}

> `optional` **productUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of product units, at line level, in this trade delivery.

#### See

https://vocabulary.uncefact.org/productUnitQuantity

***

### projectedSupplyPlan? {#projectedsupplyplan}

> `optional` **projectedSupplyPlan**: [`IUneceSupplyPlan`](IUneceSupplyPlan.md)[]

A supply plan, at line level, projected for this trade delivery.

#### See

https://vocabulary.uncefact.org/projectedSupplyPlan

***

### quantityCalculationMethodCode? {#quantitycalculationmethodcode}

> `optional` **quantityCalculationMethodCode**: `string`

The code specifying the quantity calculation method of this line trade delivery.

#### See

https://vocabulary.uncefact.org/quantityCalculationMethodCode

***

### quantityVariationReason? {#quantityvariationreason}

> `optional` **quantityVariationReason**: `string`

A reason, expressed as text, for a quantity variation, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/quantityVariationReason

***

### quantityVariationReasonCode? {#quantityvariationreasoncode}

> `optional` **quantityVariationReasonCode**: `string`

The code specifying the reason for the quantity variation, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/quantityVariationReasonCode

***

### receiptSchedule? {#receiptschedule}

> `optional` **receiptSchedule**: [`IUneceSchedule`](IUneceSchedule.md)[]

A supply chain receipt schedule, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/receiptSchedule

***

### receivedQuantity? {#receivedquantity}

> `optional` **receivedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at line level, received for this trade delivery.

#### See

https://vocabulary.uncefact.org/receivedQuantity

***

### receivingAdviceDocument? {#receivingadvicedocument}

> `optional` **receivingAdviceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A receiving advice document, at line level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/receivingAdviceDocument

***

### rejectedQuantity? {#rejectedquantity}

> `optional` **rejectedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at line level, rejected for this trade delivery.

#### See

https://vocabulary.uncefact.org/rejectedQuantity

***

### relatedConsignment? {#relatedconsignment}

> `optional` **relatedConsignment**: [`IUneceConsignment`](IUneceConsignment.md)[]

A consignment, at line level, related to this line trade delivery.

#### See

https://vocabulary.uncefact.org/relatedConsignment

***

### remainingRequestedQuantity? {#remainingrequestedquantity}

> `optional` **remainingRequestedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The remaining quantity, at line level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/remainingRequestedQuantity

***

### requestedDeliveryEvent? {#requesteddeliveryevent}

> `optional` **requestedDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A delivery event, at line level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedDeliveryEvent

***

### requestedDespatchEvent? {#requesteddespatchevent}

> `optional` **requestedDespatchEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A despatch event, at line level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedDespatchEvent

***

### requestedQuantity? {#requestedquantity}

> `optional` **requestedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at line level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedQuantity

***

### returnedQuantity? {#returnedquantity}

> `optional` **returnedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at line level, returned for this trade delivery.

#### See

https://vocabulary.uncefact.org/returnedQuantity

***

### reverseBilledQuantity? {#reversebilledquantity}

> `optional` **reverseBilledQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The reverse billed quantity, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/reverseBilledQuantity

***

### shipFromParty? {#shipfromparty}

> `optional` **shipFromParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The ship from party, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipFromParty

***

### shipToParty? {#shiptoparty}

> `optional` **shipToParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The ship to party, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipToParty

***

### shipmentScheduleDocument? {#shipmentscheduledocument}

> `optional` **shipmentScheduleDocument**: [`IUneceDocument`](IUneceDocument.md)

The shipment schedule document referenced, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipmentScheduleDocument

***

### specifiedDeliveryAdjustment? {#specifieddeliveryadjustment}

> `optional` **specifiedDeliveryAdjustment**: [`IUneceDeliveryAdjustment`](IUneceDeliveryAdjustment.md)[]

A delivery adjustment, at line level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedDeliveryAdjustment

***

### specifiedDeliveryInstructions? {#specifieddeliveryinstructions}

> `optional` **specifiedDeliveryInstructions**: [`IUneceDeliveryInstructions`](IUneceDeliveryInstructions.md)[]

Delivery instructions, at line level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedDeliveryInstructions

***

### specifiedHandlingInstructions? {#specifiedhandlinginstructions}

> `optional` **specifiedHandlingInstructions**: [`IUneceHandlingInstructions`](IUneceHandlingInstructions.md)[]

Handling instructions, at line level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedHandlingInstructions

***

### specifiedPackage? {#specifiedpackage}

> `optional` **specifiedPackage**: [`IUnecePackage`](IUnecePackage.md)[]

A logistics package, at line level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedPackage

***

### specifiedSchedule? {#specifiedschedule}

> `optional` **specifiedSchedule**: [`IUneceSchedule`](IUneceSchedule.md)[]

A supply chain schedule, specified at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedSchedule

***

### splitQuantity? {#splitquantity}

> `optional` **splitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A split quantity for this line trade delivery.

#### See

https://vocabulary.uncefact.org/splitQuantity

***

### statusCode? {#statuscode}

> `optional` **statusCode**: `string`

The code specifying the status, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/statusCode

***

### subordinateId? {#subordinateid}

> `optional` **subordinateId**: `string` \| `IJsonLdValueObject`

A subordinate identifier, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/subordinateId

***

### supplySpecifiedSchedule? {#supplyspecifiedschedule}

> `optional` **supplySpecifiedSchedule**: [`IUneceSchedule`](IUneceSchedule.md)[]

A supply (replenishment) schedule, specified at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/supplySpecifiedSchedule

***

### turnInReceivedQuantity? {#turninreceivedquantity}

> `optional` **turnInReceivedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The turn in quantity, at line level, received for this trade delivery.

#### See

https://vocabulary.uncefact.org/turnInReceivedQuantity

***

### ultimateShipToDeliveryDateTime? {#ultimateshiptodeliverydatetime}

> `optional` **ultimateShipToDeliveryDateTime**: `string`

The formatted date, time, date time, or other date time value, at line level, when this trade delivery is delivered to
the ultimate ship to party.

#### See

https://vocabulary.uncefact.org/ultimateShipToDeliveryDateTime

***

### ultimateShipToParty? {#ultimateshiptoparty}

> `optional` **ultimateShipToParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The ultimate ship to party, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/ultimateShipToParty

***

### unavailableQuantity? {#unavailablequantity}

> `optional` **unavailableQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at line level, unavailable for this trade delivery.

#### See

https://vocabulary.uncefact.org/unavailableQuantity

***

### usedLabel? {#usedlabel}

> `optional` **usedLabel**: [`IUneceLogisticsLabel`](IUneceLogisticsLabel.md)[]

A logistics label, at line level, used for this trade delivery.

#### See

https://vocabulary.uncefact.org/usedLabel

***

### utilizedTransportEquipment? {#utilizedtransportequipment}

> `optional` **utilizedTransportEquipment**: [`IUneceLogisticsTransportEquipment`](IUneceLogisticsTransportEquipment.md)[]

A piece of logistics transport equipment, at line level, utilized for this trade delivery.

#### See

https://vocabulary.uncefact.org/utilizedTransportEquipment

***

### volumeUnitGrossVolumeMeasure? {#volumeunitgrossvolumemeasure}

> `optional` **volumeUnitGrossVolumeMeasure**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)

The measure, at line level, of the gross volume of this trade delivery.

#### See

https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure

***

### volumeUnitNetVolumeMeasure? {#volumeunitnetvolumemeasure}

> `optional` **volumeUnitNetVolumeMeasure**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)

The measure, at line level, of the net volume of this line trade delivery.

#### See

https://vocabulary.uncefact.org/volumeUnitNetVolumeMeasure

***

### weightUnitChargeableWeightMeasure? {#weightunitchargeableweightmeasure}

> `optional` **weightUnitChargeableWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The measure of the chargeable weight, at line level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/weightUnitChargeableWeightMeasure

***

### weightUnitGrossWeightMeasure? {#weightunitgrossweightmeasure}

> `optional` **weightUnitGrossWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The measure, at line level, of the gross weight (mass) of this line trade delivery.

#### See

https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure

***

### weightUnitNetWeightMeasure? {#weightunitnetweightmeasure}

> `optional` **weightUnitNetWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The measure, at line level, of the net weight (mass) of this trade delivery.

#### See

https://vocabulary.uncefact.org/weightUnitNetWeightMeasure

***

### weightUnitTheoreticalWeightMeasure? {#weightunittheoreticalweightmeasure}

> `optional` **weightUnitTheoreticalWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The measure, at line level, of the theoretical weight of this trade delivery.

#### See

https://vocabulary.uncefact.org/weightUnitTheoreticalWeightMeasure
