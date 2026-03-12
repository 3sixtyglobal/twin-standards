# Interface: IUneceHeaderTradeDelivery

Shipping arrangements and movement of products and or services including despatch and delivery at a header level.

## See

https://vocabulary.uncefact.org/HeaderTradeDelivery

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"HeaderTradeDelivery"`

JSON-LD Type.

***

### acceptanceEvent? {#acceptanceevent}

> `optional` **acceptanceEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An acceptance delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/acceptanceEvent

***

### actualDeliveryEvent? {#actualdeliveryevent}

> `optional` **actualDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An actual delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualDeliveryEvent

***

### actualDespatchEvent? {#actualdespatchevent}

> `optional` **actualDespatchEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An actual despatch event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualDespatchEvent

***

### actualLoadingEvent? {#actualloadingevent}

> `optional` **actualLoadingEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The actual loading event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualLoadingEvent

***

### actualPickUpEvent? {#actualpickupevent}

> `optional` **actualPickUpEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The actual pick-up event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualPickUpEvent

***

### actualReceiptEvent? {#actualreceiptevent}

> `optional` **actualReceiptEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The actual receipt event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualReceiptEvent

***

### actualUnloadingEvent? {#actualunloadingevent}

> `optional` **actualUnloadingEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The actual unloading event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/actualUnloadingEvent

***

### additionalDocument? {#additionaldocument}

> `optional` **additionalDocument**: [`IUneceDocument`](IUneceDocument.md)[]

An additional document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/additionalDocument

***

### agreedQuantity? {#agreedquantity}

> `optional` **agreedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at header level, agreed for this trade delivery.

#### See

https://vocabulary.uncefact.org/agreedQuantity

***

### buyerOrderDateTime? {#buyerorderdatetime}

> `optional` **buyerOrderDateTime**: `string`

The date, time, date time, or other date time value, at header level, for the buyer order for this trade delivery.

#### See

https://vocabulary.uncefact.org/buyerOrderDateTime

***

### classificationDocument? {#classificationdocument}

> `optional` **classificationDocument**: [`IUneceDocument`](IUneceDocument.md)

The referenced classification document, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/classificationDocument

***

### confirmedDespatchEvent? {#confirmeddespatchevent}

> `optional` **confirmedDespatchEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The despatch event, at header level, confirmed for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedDespatchEvent

***

### confirmedPickUpEvent? {#confirmedpickupevent}

> `optional` **confirmedPickUpEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The pick-up event, at header level, confirmed for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedPickUpEvent

***

### confirmedReleaseEvent? {#confirmedreleaseevent}

> `optional` **confirmedReleaseEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The confirmed release event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/confirmedReleaseEvent

***

### consumptionReportDocument? {#consumptionreportdocument}

> `optional` **consumptionReportDocument**: [`IUneceDocument`](IUneceDocument.md)

The consumption report document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/consumptionReportDocument

***

### deliveryNoteDocument? {#deliverynotedocument}

> `optional` **deliveryNoteDocument**: [`IUneceDocument`](IUneceDocument.md)

The delivery note document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/deliveryNoteDocument

***

### despatchAdviceDocument? {#despatchadvicedocument}

> `optional` **despatchAdviceDocument**: [`IUneceDocument`](IUneceDocument.md)

The despatch advice document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/despatchAdviceDocument

***

### despatchedQuantity? {#despatchedquantity}

> `optional` **despatchedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at header level, despatched in this trade delivery.

#### See

https://vocabulary.uncefact.org/despatchedQuantity

***

### disposalParty? {#disposalparty}

> `optional` **disposalParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A disposal party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/disposalParty

***

### dueInAvailableQuantity? {#dueinavailablequantity}

> `optional` **dueInAvailableQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The due in available quantity, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInAvailableQuantity

***

### dueInForecastedQuantity? {#dueinforecastedquantity}

> `optional` **dueInForecastedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The due in forecasted quantity, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInForecastedQuantity

***

### dueInRequestedQuantity? {#dueinrequestedquantity}

> `optional` **dueInRequestedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The due in requested quantity, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/dueInRequestedQuantity

***

### estimatedDeliveryEvent? {#estimateddeliveryevent}

> `optional` **estimatedDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An estimated delivery event for this trade delivery header.

#### See

https://vocabulary.uncefact.org/estimatedDeliveryEvent

***

### finalDeliveryIndicator? {#finaldeliveryindicator}

> `optional` **finalDeliveryIndicator**: `boolean`

The indication, at header level, of whether or not this trade delivery is the final delivery.

#### See

https://vocabulary.uncefact.org/finalDeliveryIndicator

***

### finalDestinationCountry? {#finaldestinationcountry}

> `optional` **finalDestinationCountry**: [`IUneceCountry`](IUneceCountry.md)

The country of final destination, at header level, for this header trade delivery.

#### See

https://vocabulary.uncefact.org/finalDestinationCountry

***

### freightForwarderParty? {#freightforwarderparty}

> `optional` **freightForwarderParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A freight forwarder party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/freightForwarderParty

***

### fullyDeliveredIndicator? {#fullydeliveredindicator}

> `optional` **fullyDeliveredIndicator**: `boolean`

The indication, at header level, of whether or not this trade delivery is fully delivered.

#### See

https://vocabulary.uncefact.org/fullyDeliveredIndicator

***

### globalId? {#globalid}

> `optional` **globalId**: `string` \| `IJsonLdValueObject`

A global identifier, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/globalId

***

### goodsOwnershipChangeDateTime? {#goodsownershipchangedatetime}

> `optional` **goodsOwnershipChangeDateTime**: `string`

The date, time, date time, or other date time value, at header level, when the goods ownership of this trade delivery
changed.

#### See

https://vocabulary.uncefact.org/goodsOwnershipChangeDateTime

***

### goodsReceiptNoteDocument? {#goodsreceiptnotedocument}

> `optional` **goodsReceiptNoteDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A goods receipt note document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/goodsReceiptNoteDocument

***

### headerTradeDeliveryGoodsPhysicalStateDescription? {#headertradedeliverygoodsphysicalstatedescription}

> `optional` **headerTradeDeliveryGoodsPhysicalStateDescription**: `string`

A textual description for the physical state of the goods, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/headerTradeDeliveryGoodsPhysicalStateDescription

***

### headerTradeDeliveryGoodsPhysicalStateDescriptionCode? {#headertradedeliverygoodsphysicalstatedescriptioncode}

> `optional` **headerTradeDeliveryGoodsPhysicalStateDescriptionCode**: `string`

The code specifying a description for the physical state of the goods, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/headerTradeDeliveryGoodsPhysicalStateDescriptionCode

***

### headerTradeDeliveryGoodsPhysicalStateType? {#headertradedeliverygoodsphysicalstatetype}

> `optional` **headerTradeDeliveryGoodsPhysicalStateType**: `string`

A type, expressed as text, for the physical state of the goods, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/headerTradeDeliveryGoodsPhysicalStateType

***

### headerTradeDeliveryGoodsPhysicalStateTypeCode? {#headertradedeliverygoodsphysicalstatetypecode}

> `optional` **headerTradeDeliveryGoodsPhysicalStateTypeCode**: `string`

The code specifying the type of physical state of the goods, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/headerTradeDeliveryGoodsPhysicalStateTypeCode

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedPackaging? {#includedpackaging}

> `optional` **includedPackaging**: [`IUneceSupplyChainPackaging`](IUneceSupplyChainPackaging.md)[]

Packaging, at header level, included in this trade delivery.

#### See

https://vocabulary.uncefact.org/includedPackaging

***

### informationNote? {#informationnote}

> `optional` **informationNote**: [`IUneceNote`](IUneceNote.md)[]

A note with information, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/informationNote

***

### inventoryManagerParty? {#inventorymanagerparty}

> `optional` **inventoryManagerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

An inventory manager party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/inventoryManagerParty

***

### modificationForecastedQuantity? {#modificationforecastedquantity}

> `optional` **modificationForecastedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The modification of a previously forecasted quantity, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/modificationForecastedQuantity

***

### overDeliveryAllowedIndicator? {#overdeliveryallowedindicator}

> `optional` **overDeliveryAllowedIndicator**: `boolean`

The indication, at header level, of whether or not over delivery is allowed for this trade delivery.

#### See

https://vocabulary.uncefact.org/overDeliveryAllowedIndicator

***

### packingListDocument? {#packinglistdocument}

> `optional` **packingListDocument**: [`IUneceDocument`](IUneceDocument.md)

The packing list document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/packingListDocument

***

### partialDeliveryAllowedIndicator? {#partialdeliveryallowedindicator}

> `optional` **partialDeliveryAllowedIndicator**: `boolean`

The indication, at header level, of whether or not this trade delivery can be partially delivered.

#### See

https://vocabulary.uncefact.org/partialDeliveryAllowedIndicator

***

### pickUpAvailabilityDateTime? {#pickupavailabilitydatetime}

> `optional` **pickUpAvailabilityDateTime**: `string`

The formatted date, time, date time, or other date time value, at header level, when this trade delivery is available
for pick-up.

#### See

https://vocabulary.uncefact.org/pickUpAvailabilityDateTime

***

### plannedConsignment? {#plannedconsignment}

> `optional` **plannedConsignment**: [`IUneceConsignment`](IUneceConsignment.md)[]

A consignment, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedConsignment

***

### plannedDeliveryEvent? {#planneddeliveryevent}

> `optional` **plannedDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A delivery event, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedDeliveryEvent

***

### plannedDespatchEvent? {#planneddespatchevent}

> `optional` **plannedDespatchEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A despatch event, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedDespatchEvent

***

### plannedPickUpEvent? {#plannedpickupevent}

> `optional` **plannedPickUpEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The pick-up event, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedPickUpEvent

***

### plannedReleaseEvent? {#plannedreleaseevent}

> `optional` **plannedReleaseEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The release event, at header level, planned for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedReleaseEvent

***

### plannedShipFromDeliveryEvent? {#plannedshipfromdeliveryevent}

> `optional` **plannedShipFromDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The event of the planned ship from delivery, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedShipFromDeliveryEvent

***

### plannedShipToDeliveryEvent? {#plannedshiptodeliveryevent}

> `optional` **plannedShipToDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The planned ship to delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/plannedShipToDeliveryEvent

***

### previousDeliverySupplyChainEvent? {#previousdeliverysupplychainevent}

> `optional` **previousDeliverySupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A previous delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/previousDeliverySupplyChainEvent

***

### quantityCalculationMethodCode? {#quantitycalculationmethodcode}

> `optional` **quantityCalculationMethodCode**: `string`

The code specifying the quantity calculation method of this header trade delivery.

#### See

https://vocabulary.uncefact.org/quantityCalculationMethodCode

***

### receivingAdviceDocument? {#receivingadvicedocument}

> `optional` **receivingAdviceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A receiving advice document, at header level, referenced for this trade delivery.

#### See

https://vocabulary.uncefact.org/receivingAdviceDocument

***

### relatedConsignment? {#relatedconsignment}

> `optional` **relatedConsignment**: [`IUneceConsignment`](IUneceConsignment.md)[]

A consignment, at header level, related to this trade delivery.

#### See

https://vocabulary.uncefact.org/relatedConsignment

***

### relatedParty? {#relatedparty}

> `optional` **relatedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party, at header level, related to this trade delivery.

#### See

https://vocabulary.uncefact.org/relatedParty

***

### remainingRequestedQuantity? {#remainingrequestedquantity}

> `optional` **remainingRequestedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The remaining quantity, at header level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/remainingRequestedQuantity

***

### requestedDeliveryEvent? {#requesteddeliveryevent}

> `optional` **requestedDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A delivery event, at header level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedDeliveryEvent

***

### requestedDespatchEvent? {#requesteddespatchevent}

> `optional` **requestedDespatchEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A despatch event, at header level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedDespatchEvent

***

### requestedQuantity? {#requestedquantity}

> `optional` **requestedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity, at header level, requested for this trade delivery.

#### See

https://vocabulary.uncefact.org/requestedQuantity

***

### shipFromParty? {#shipfromparty}

> `optional` **shipFromParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The ship from party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipFromParty

***

### shipToParty? {#shiptoparty}

> `optional` **shipToParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The ship to party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipToParty

***

### shipmentScheduleDocument? {#shipmentscheduledocument}

> `optional` **shipmentScheduleDocument**: [`IUneceDocument`](IUneceDocument.md)

The shipment schedule document, referenced at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/shipmentScheduleDocument

***

### specifiedDeliveryInstructions? {#specifieddeliveryinstructions}

> `optional` **specifiedDeliveryInstructions**: [`IUneceDeliveryInstructions`](IUneceDeliveryInstructions.md)[]

Delivery instructions, at header level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedDeliveryInstructions

***

### specifiedHandlingInstructions? {#specifiedhandlinginstructions}

> `optional` **specifiedHandlingInstructions**: [`IUneceHandlingInstructions`](IUneceHandlingInstructions.md)[]

Handling instructions, at header level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedHandlingInstructions

***

### specifiedSchedule? {#specifiedschedule}

> `optional` **specifiedSchedule**: [`IUneceSchedule`](IUneceSchedule.md)[]

A supply chain schedule, at header level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedSchedule

***

### specifiedSupplyChainEvent? {#specifiedsupplychainevent}

> `optional` **specifiedSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain event, at header level, specified for this trade delivery.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### statusCode? {#statuscode}

> `optional` **statusCode**: `string`

The code specifying the status, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/statusCode

***

### subordinateId? {#subordinateid}

> `optional` **subordinateId**: `string` \| `IJsonLdValueObject`

A subordinate identifier, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/subordinateId

***

### ultimateShipToDeliveryDateTime? {#ultimateshiptodeliverydatetime}

> `optional` **ultimateShipToDeliveryDateTime**: `string`

The date, time, date time, or other date time value, at header level, when this trade delivery is delivered to the
ultimate ship to party.

#### See

https://vocabulary.uncefact.org/ultimateShipToDeliveryDateTime

***

### ultimateShipToDeliveryEvent? {#ultimateshiptodeliveryevent}

> `optional` **ultimateShipToDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

The ultimate ship to delivery event, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/ultimateShipToDeliveryEvent

***

### ultimateShipToParty? {#ultimateshiptoparty}

> `optional` **ultimateShipToParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The ultimate ship to party, at header level, for this trade delivery.

#### See

https://vocabulary.uncefact.org/ultimateShipToParty

***

### utilizedTransportEquipment? {#utilizedtransportequipment}

> `optional` **utilizedTransportEquipment**: [`IUneceLogisticsTransportEquipment`](IUneceLogisticsTransportEquipment.md)[]

Logistics transport equipment utilized for this header trade delivery.

#### See

https://vocabulary.uncefact.org/utilizedTransportEquipment

***

### weightUnitTareWeightMeasure? {#weightunittareweightmeasure}

> `optional` **weightUnitTareWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The measure of the tare weight for this header trade delivery.

#### See

https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
