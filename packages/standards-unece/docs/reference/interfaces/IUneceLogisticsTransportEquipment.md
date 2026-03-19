# Interface: IUneceLogisticsTransportEquipment

A piece of equipment used to hold, protect or secure cargo for logistics purposes.
A referenced piece of equipment used to hold, protect or secure cargo for logistics purposes.

## See

https://vocabulary.uncefact.org/LogisticsTransportEquipment

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"LogisticsTransportEquipment"`

JSON-LD Type.

***

### accompaniedIndicator? {#accompaniedindicator}

> `optional` **accompaniedIndicator?**: `boolean`

The indication of whether or not this piece of logistics transport equipment is accompanied, such as by a transport
means.

#### See

https://vocabulary.uncefact.org/accompaniedIndicator

***

### actualRoute? {#actualroute}

> `optional` **actualRoute?**: [`IUneceTransportRoute`](IUneceTransportRoute.md)[]

An actual route for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/actualRoute

***

### additionalInstructions? {#additionalinstructions}

> `optional` **additionalInstructions?**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)[]

Additional instructions for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/additionalInstructions

***

### affixedSeal? {#affixedseal}

> `optional` **affixedSeal?**: [`IUneceSeal`](IUneceSeal.md)[]

A seal affixed to this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/affixedSeal

***

### airFlowUnitAirFlowMeasure? {#airflowunitairflowmeasure}

> `optional` **airFlowUnitAirFlowMeasure?**: [`IUneceAirFlowUnitMeasureType`](IUneceAirFlowUnitMeasureType.md)

The measure of the air flow for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/airFlowUnitAirFlowMeasure

***

### applicableNote? {#applicablenote}

> `optional` **applicableNote?**: [`IUneceNote`](IUneceNote.md)[]

A note providing information applicable to this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/applicableNote

***

### applicableServiceCharge? {#applicableservicecharge}

> `optional` **applicableServiceCharge?**: [`IUneceServiceCharge`](IUneceServiceCharge.md)[]

A service charge applicable to this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/applicableServiceCharge

***

### associatedDocument? {#associateddocument}

> `optional` **associatedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document associated with this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### attachedAttachedTransportEquipment? {#attachedattachedtransportequipment}

> `optional` **attachedAttachedTransportEquipment?**: [`IUneceAttachedTransportEquipment`](IUneceAttachedTransportEquipment.md)[]

Transport equipment attached to this piece of logistics transport equipment, such as ropes or refrigeration units.

#### See

https://vocabulary.uncefact.org/attachedAttachedTransportEquipment

***

### attachedIOTDevice? {#attachediotdevice}

> `optional` **attachedIOTDevice?**: [`IUneceIOTDevice`](IUneceIOTDevice.md)[]

An IOT device attached to this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/attachedIOTDevice

***

### axleQuantity? {#axlequantity}

> `optional` **axleQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of axles for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/axleQuantity

***

### bondedWarehouseStorageEvent? {#bondedwarehousestorageevent}

> `optional` **bondedWarehouseStorageEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A bonded warehouse storage event specifying when and where this piece of logistics transport equipment will be, or has
been, stored.

#### See

https://vocabulary.uncefact.org/bondedWarehouseStorageEvent

***

### cargoResidueStatusCode? {#cargoresiduestatuscode}

> `optional` **cargoResidueStatusCode?**: `string`

A code specifying the cargo residue status for this piece of logistics transport equipment, such as required by
dangerous goods regulations.

#### See

https://vocabulary.uncefact.org/cargoResidueStatusCode

***

### carriedTransportEquipment? {#carriedtransportequipment}

> `optional` **carriedTransportEquipment?**: [`IUneceAssociatedTransportEquipment`](IUneceAssociatedTransportEquipment.md)[]

A piece of transport equipment carried on this piece of logistics transport equipment, such as a container placed on a
rail wagon.

#### See

https://vocabulary.uncefact.org/carriedTransportEquipment

***

### carrierAssignedBookingId? {#carrierassignedbookingid}

> `optional` **carrierAssignedBookingId?**: `string` \| `IJsonLdValueObject`

A carrier assigned booking identifier for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/carrierAssignedBookingId

***

### carrierParty? {#carrierparty}

> `optional` **carrierParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A carrier party for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/carrierParty

***

### characteristic? {#characteristic}

> `optional` **characteristic?**: `string`

The characteristic or characteristics, expressed as text, of a piece of logistics transport equipment, such as its size
and type.

#### See

https://vocabulary.uncefact.org/characteristic

***

### consigneeAssignedConsignmentId? {#consigneeassignedconsignmentid}

> `optional` **consigneeAssignedConsignmentId?**: `string` \| `IJsonLdValueObject`

The consignee assigned consignment identifier for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/consigneeAssignedConsignmentId

***

### consolidationEvent? {#consolidationevent}

> `optional` **consolidationEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A consolidation event specifying when and where this piece of logistics transport equipment will be, or has been,
stuffed.

#### See

https://vocabulary.uncefact.org/consolidationEvent

***

### containedConsignment? {#containedconsignment}

> `optional` **containedConsignment?**: [`IUneceConsignment`](IUneceConsignment.md)[]

A consignment contained in this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/containedConsignment

***

### containedConsignmentQuantity? {#containedconsignmentquantity}

> `optional` **containedConsignmentQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of consignments contained in this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/containedConsignmentQuantity

***

### containedTransportEquipment? {#containedtransportequipment}

> `optional` **containedTransportEquipment?**: [`IUneceAssociatedTransportEquipment`](IUneceAssociatedTransportEquipment.md)[]

A piece of transport equipment contained within this piece of logistics transport equipment, such as a pallet.

#### See

https://vocabulary.uncefact.org/containedTransportEquipment

***

### damageRemark? {#damageremark}

> `optional` **damageRemark?**: `string`

A damage remark, expressed as text, for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/damageRemark

***

### deconsolidationEvent? {#deconsolidationevent}

> `optional` **deconsolidationEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A deconsolidation event for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/deconsolidationEvent

***

### deliveryInstructions? {#deliveryinstructions}

> `optional` **deliveryInstructions?**: [`IUneceDeliveryInstructions`](IUneceDeliveryInstructions.md)[]

Delivery instructions for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/deliveryInstructions

***

### deliveryTransportEvent? {#deliverytransportevent}

> `optional` **deliveryTransportEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A delivery event for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/deliveryTransportEvent

***

### goodsItemUnitQuantity? {#goodsitemunitquantity}

> `optional` **goodsItemUnitQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A quantity of goods items in this logistics transport equipment.

#### See

https://vocabulary.uncefact.org/goodsItemUnitQuantity

***

### grossGoodsVolumeMeasure? {#grossgoodsvolumemeasure}

> `optional` **grossGoodsVolumeMeasure?**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)[]

A measure of the gross goods volume of this logistics transport equipment.

#### See

https://vocabulary.uncefact.org/grossGoodsVolumeMeasure

***

### grossGoodsWeightMeasure? {#grossgoodsweightmeasure}

> `optional` **grossGoodsWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the gross goods weight of this logistics transport equipment.

#### See

https://vocabulary.uncefact.org/grossGoodsWeightMeasure

***

### handlingInstructions? {#handlinginstructions}

> `optional` **handlingInstructions?**: [`IUneceHandlingInstructions`](IUneceHandlingInstructions.md)[]

Handling instructions for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/handlingInstructions

***

### humidityPercent? {#humiditypercent}

> `optional` **humidityPercent?**: `string`

The percent of the humidity (moisture content) within this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/humidityPercent

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier of this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/identifier

***

### information? {#information}

> `optional` **information?**: `string`

Information, expressed as text, for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/information

***

### invoiceeParty? {#invoiceeparty}

> `optional` **invoiceeParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The invoicee party for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/invoiceeParty

***

### linearDimension? {#lineardimension}

> `optional` **linearDimension?**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)

The linear spatial dimensions of this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/linearDimension

***

### linearUnitLoadingLengthMeasure? {#linearunitloadinglengthmeasure}

> `optional` **linearUnitLoadingLengthMeasure?**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the loading length of this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/linearUnitLoadingLengthMeasure

***

### linearUnitRequiredLaneLengthMeasure? {#linearunitrequiredlanelengthmeasure}

> `optional` **linearUnitRequiredLaneLengthMeasure?**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the length required in a lane for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/linearUnitRequiredLaneLengthMeasure

***

### loadedConsignmentItem? {#loadedconsignmentitem}

> `optional` **loadedConsignmentItem?**: [`IUneceConsignmentItem`](IUneceConsignmentItem.md)[]

A consignment item loaded onto, or into, this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/loadedConsignmentItem

***

### loadedDangerousGoods? {#loadeddangerousgoods}

> `optional` **loadedDangerousGoods?**: [`IUneceDangerousGoods`](IUneceDangerousGoods.md)[]

Dangerous goods loaded into this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/loadedDangerousGoods

***

### loadedPackageQuantity? {#loadedpackagequantity}

> `optional` **loadedPackageQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of packages loaded into or onto this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/loadedPackageQuantity

***

### loadingEvent? {#loadingevent}

> `optional` **loadingEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

The loading event for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/loadingEvent

***

### loadingInstructions? {#loadinginstructions}

> `optional` **loadingInstructions?**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)[]

Loading instructions for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/loadingInstructions

***

### loadingParty? {#loadingparty}

> `optional` **loadingParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party that loads this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/loadingParty

***

### loadingRemark? {#loadingremark}

> `optional` **loadingRemark?**: `string`

A loading remark, expressed as text, for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/loadingRemark

***

### loadingSequenceNumeric? {#loadingsequencenumeric}

> `optional` **loadingSequenceNumeric?**: `string`

The sequence number differentiating this piece of logistics transport equipment from others during loading.

#### See

https://vocabulary.uncefact.org/loadingSequenceNumeric

***

### logisticsTransportEquipmentCharacteristicCode? {#logisticstransportequipmentcharacteristiccode}

> `optional` **logisticsTransportEquipmentCharacteristicCode?**: `string`

The code specifying the characteristic or characteristics of this piece of logistics transport equipment, such as the
ISO 6346 transport equipment size and type code.

#### See

https://vocabulary.uncefact.org/logisticsTransportEquipmentCharacteristicCode

***

### mainCarriageTransportMovement? {#maincarriagetransportmovement}

> `optional` **mainCarriageTransportMovement?**: [`IUneceTransportMovement`](IUneceTransportMovement.md)[]

A main carriage transport movement for this piece of logistic transport equipment.

#### See

https://vocabulary.uncefact.org/mainCarriageTransportMovement

***

### manufacturerParty? {#manufacturerparty}

> `optional` **manufacturerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The manufacturer party specified for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### manufacturingDateTime? {#manufacturingdatetime}

> `optional` **manufacturingDateTime?**: `string`

The manufacturing date, time, date time, or other date time value for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/manufacturingDateTime

***

### netGoodsVolumeMeasure? {#netgoodsvolumemeasure}

> `optional` **netGoodsVolumeMeasure?**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)[]

A measure of the net goods volume of this logistics transport equipment.

#### See

https://vocabulary.uncefact.org/netGoodsVolumeMeasure

***

### netGoodsWeightMeasure? {#netgoodsweightmeasure}

> `optional` **netGoodsWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the net goods weight of this logistics transport equipment.

#### See

https://vocabulary.uncefact.org/netGoodsWeightMeasure

***

### notifiedParty? {#notifiedparty}

> `optional` **notifiedParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party who has been or will be notified about this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/notifiedParty

***

### onCarriageTransportMovement? {#oncarriagetransportmovement}

> `optional` **onCarriageTransportMovement?**: [`IUneceTransportMovement`](IUneceTransportMovement.md)[]

An on-carriage transport movement for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/onCarriageTransportMovement

***

### operatingParty? {#operatingparty}

> `optional` **operatingParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party that operates this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/operatingParty

***

### ownerParty? {#ownerparty}

> `optional` **ownerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party who owns this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/ownerParty

***

### pickUpEvent? {#pickupevent}

> `optional` **pickUpEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A pick-up event specifying when and where this piece of logistics transport equipment will be, or has been, collected,
i.e. picked-up by the carrier.

#### See

https://vocabulary.uncefact.org/pickUpEvent

***

### positioningEvent? {#positioningevent}

> `optional` **positioningEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A positioning event specifying when and where this piece of logistics transport equipment will be, or has been,
positioned, i.e. delivered and available for pick-up.

#### See

https://vocabulary.uncefact.org/positioningEvent

***

### powerSupplyConnectorQuantity? {#powersupplyconnectorquantity}

> `optional` **powerSupplyConnectorQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of power supply connectors for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/powerSupplyConnectorQuantity

***

### powerSupplyType? {#powersupplytype}

> `optional` **powerSupplyType?**: `string`

The type of power supply, expressed as text, for this piece of logistics transport equipment, such as diesel fuel or
electricity.

#### See

https://vocabulary.uncefact.org/powerSupplyType

***

### powerSupplyTypeCode? {#powersupplytypecode}

> `optional` **powerSupplyTypeCode?**: `string`

The code specifying the type of power supply for this piece of logistics transport equipment, such as diesel fuel or
electricity.

#### See

https://vocabulary.uncefact.org/powerSupplyTypeCode

***

### preCarriageTransportMovement? {#precarriagetransportmovement}

> `optional` **preCarriageTransportMovement?**: [`IUneceTransportMovement`](IUneceTransportMovement.md)[]

A pre-carriage transport movement for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/preCarriageTransportMovement

***

### quarantineInstructions? {#quarantineinstructions}

> `optional` **quarantineInstructions?**: [`IUneceQuarantineInstructions`](IUneceQuarantineInstructions.md)[]

Quarantine instructions for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/quarantineInstructions

***

### registrationCountry? {#registrationcountry}

> `optional` **registrationCountry?**: [`IUneceCountry`](IUneceCountry.md)

The registration country for this logistics transport equipment.

#### See

https://vocabulary.uncefact.org/registrationCountry

***

### relatedEvent? {#relatedevent}

> `optional` **relatedEvent?**: [`IUneceCommunicationEvent`](IUneceCommunicationEvent.md)[]

A communication event related to this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/relatedEvent

***

### releaseId? {#releaseid}

> `optional` **releaseId?**: `string` \| `IJsonLdValueObject`

The release identifier for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/releaseId

***

### releaseRestriction? {#releaserestriction}

> `optional` **releaseRestriction?**: `string`

The release restriction, expressed as text, for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/releaseRestriction

***

### reportableQuantity? {#reportablequantity}

> `optional` **reportableQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A reportable quantity for this logistics transport equipment.

#### See

https://vocabulary.uncefact.org/reportableQuantity

***

### reportedLogisticsStatus? {#reportedlogisticsstatus}

> `optional` **reportedLogisticsStatus?**: [`IUneceLogisticsStatus`](IUneceLogisticsStatus.md)[]

A status reported for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/reportedLogisticsStatus

***

### reportingIOTDevicePairing? {#reportingiotdevicepairing}

> `optional` **reportingIOTDevicePairing?**: [`IUnecePairing`](IUnecePairing.md)[]

An IOT device reported communication pairing for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/reportingIOTDevicePairing

***

### reportingIOTDeviceTransportEvent? {#reportingiotdevicetransportevent}

> `optional` **reportingIOTDeviceTransportEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

An IOT device reported transport event for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/reportingIOTDeviceTransportEvent

***

### requestedRoute? {#requestedroute}

> `optional` **requestedRoute?**: [`IUneceTransportRoute`](IUneceTransportRoute.md)[]

A requested route for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/requestedRoute

***

### returnableIndicator? {#returnableindicator}

> `optional` **returnableIndicator?**: `boolean`

The indication of whether or not this piece of logistics transport equipment is returnable.

#### See

https://vocabulary.uncefact.org/returnableIndicator

***

### scheduledRoute? {#scheduledroute}

> `optional` **scheduledRoute?**: [`IUneceTransportRoute`](IUneceTransportRoute.md)[]

A scheduled or planned route for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/scheduledRoute

***

### sealQuantity? {#sealquantity}

> `optional` **sealQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity of seals for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/sealQuantity

***

### sealedIndicator? {#sealedindicator}

> `optional` **sealedIndicator?**: `boolean`

The indication of whether or not this piece of logistics transport equipment is sealed.

#### See

https://vocabulary.uncefact.org/sealedIndicator

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric?**: `string`

The sequence number differentiating this piece of logistics transport equipment from others in a set of transport
equipment.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### settingTemperature? {#settingtemperature}

> `optional` **settingTemperature?**: [`IUneceTransportSettingTemperature`](IUneceTransportSettingTemperature.md)[]

A temperature setting for this piece of logistics transport equipment, such as storage temperature or operational
temperature.

#### See

https://vocabulary.uncefact.org/settingTemperature

***

### shipperReferenceInformation? {#shipperreferenceinformation}

> `optional` **shipperReferenceInformation?**: `string`

Shipper reference information, expressed as text, for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/shipperReferenceInformation

***

### specifiedRiskAnalysisResult? {#specifiedriskanalysisresult}

> `optional` **specifiedRiskAnalysisResult?**: [`IUneceRiskAnalysisResult`](IUneceRiskAnalysisResult.md)[]

A result of a logistics risk analysis calculation specified for this transport equipment.

#### See

https://vocabulary.uncefact.org/specifiedRiskAnalysisResult

***

### specifiedTransportMeans? {#specifiedtransportmeans}

> `optional` **specifiedTransportMeans?**: [`IUneceLogisticsTransportMeans`](IUneceLogisticsTransportMeans.md)[]

A transport means specified for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/specifiedTransportMeans

***

### storageEvent? {#storageevent}

> `optional` **storageEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A storage event specifying when and where this piece of logistics transport equipment will be, or has been, stored.

#### See

https://vocabulary.uncefact.org/storageEvent

***

### stowagePositionId? {#stowagepositionid}

> `optional` **stowagePositionId?**: `string` \| `IJsonLdValueObject`

The stowage position identifier for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/stowagePositionId

***

### transportEquipmentCategoryCode? {#transportequipmentcategorycode}

> `optional` **transportEquipmentCategoryCode?**: [`UneceTransportEquipmentCategoryCodeList`](../type-aliases/UneceTransportEquipmentCategoryCodeList.md)

The code specifying the category for this piece of logistics transport equipment, such as container or trailer.

#### See

https://vocabulary.uncefact.org/transportEquipmentCategoryCode

***

### transportEquipmentFullnessUsedCapacityCode? {#transportequipmentfullnessusedcapacitycode}

> `optional` **transportEquipmentFullnessUsedCapacityCode?**: [`UneceTransportEquipmentFullnessCodeList`](../type-aliases/UneceTransportEquipmentFullnessCodeList.md)

The code specifying the used capacity of this piece of logistics transport equipment, such as full or empty.

#### See

https://vocabulary.uncefact.org/transportEquipmentFullnessUsedCapacityCode

***

### transportEquipmentHaulageArrangementsCode? {#transportequipmenthaulagearrangementscode}

> `optional` **transportEquipmentHaulageArrangementsCode?**: [`UneceTransportEquipmentHaulageArrangementsCodeList`](../type-aliases/UneceTransportEquipmentHaulageArrangementsCodeList.md)

The code specifying the arrangement for the haulage of this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentHaulageArrangementsCode

***

### transportEquipmentLegalStatusLegalStatusCode? {#transportequipmentlegalstatuslegalstatuscode}

> `optional` **transportEquipmentLegalStatusLegalStatusCode?**: [`UneceTransportEquipmentLegalStatusCodeList`](../type-aliases/UneceTransportEquipmentLegalStatusCodeList.md)

The code specifying the legal status of this piece of logistics transport equipment with respect to a specific law such
as the "Container Convention Code".

#### See

https://vocabulary.uncefact.org/transportEquipmentLegalStatusLegalStatusCode

***

### transportEquipmentMovementStatusTransportMovementStatusCode? {#transportequipmentmovementstatustransportmovementstatuscode}

> `optional` **transportEquipmentMovementStatusTransportMovementStatusCode?**: [`UneceTransportEquipmentMovementStatusCodeList`](../type-aliases/UneceTransportEquipmentMovementStatusCodeList.md)

The code specifying the transport movement status for this piece of logistics transport equipment, such as for export,
for import, or for transhipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentMovementStatusTransportMovementStatusCode

***

### transportEquipmentOperationalStatusCode? {#transportequipmentoperationalstatuscode}

> `optional` **transportEquipmentOperationalStatusCode?**: [`UneceTransportEquipmentOperationalStatusCodeList`](../type-aliases/UneceTransportEquipmentOperationalStatusCodeList.md)

The code specifying the operational status for this piece of logistics transport equipment, such as to be repaired or to
be shifted.

#### See

https://vocabulary.uncefact.org/transportEquipmentOperationalStatusCode

***

### transportEquipmentSizeTypeCharacteristicCode? {#transportequipmentsizetypecharacteristiccode}

> `optional` **transportEquipmentSizeTypeCharacteristicCode?**: [`UneceTransportEquipmentSizeTypeCodeList`](../type-aliases/UneceTransportEquipmentSizeTypeCodeList.md)

The code specifying the characteristics, such as size and type, of this referenced piece of logistics transport
equipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentSizeTypeCharacteristicCode

***

### transportEquipmentSupplierPartyRoleCode? {#transportequipmentsupplierpartyrolecode}

> `optional` **transportEquipmentSupplierPartyRoleCode?**: [`UneceTransportEquipmentSupplierPartyRoleCodeList`](../type-aliases/UneceTransportEquipmentSupplierPartyRoleCodeList.md)

The code specifying the role of the party responsible for supplying this piece of logistics transport equipment, such as
the carrier or the buyer.

#### See

https://vocabulary.uncefact.org/transportEquipmentSupplierPartyRoleCode

***

### transportService? {#transportservice}

> `optional` **transportService?**: [`IUneceService`](IUneceService.md)[]

A transport service for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/transportService

***

### transportServicesBuyerParty? {#transportservicesbuyerparty}

> `optional` **transportServicesBuyerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The transport services buyer party for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/transportServicesBuyerParty

***

### unitQuantity? {#unitquantity}

> `optional` **unitQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units of this type of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### unloadingEvent? {#unloadingevent}

> `optional` **unloadingEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

The unloading event for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/unloadingEvent

***

### unloadingInstructions? {#unloadinginstructions}

> `optional` **unloadingInstructions?**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)[]

Unloading instructions for this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/unloadingInstructions

***

### unloadingSequenceNumeric? {#unloadingsequencenumeric}

> `optional` **unloadingSequenceNumeric?**: `string`

The sequence number differentiating this piece of logistics transport equipment from others during unloading.

#### See

https://vocabulary.uncefact.org/unloadingSequenceNumeric

***

### verifiedGrossWeightMeasure? {#verifiedgrossweightmeasure}

> `optional` **verifiedGrossWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the verified gross weight (mass) of this piece of logistics transport equipment which is the weight (mass)
including loaded goods, packing and transport equipment.

#### See

https://vocabulary.uncefact.org/verifiedGrossWeightMeasure

***

### volumeUnitGrossVolumeMeasure? {#volumeunitgrossvolumemeasure}

> `optional` **volumeUnitGrossVolumeMeasure?**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)

The measure of the gross volume of this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure

***

### weightUnitGrossWeightMeasure? {#weightunitgrossweightmeasure}

> `optional` **weightUnitGrossWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The measure of the gross weight (mass) of this piece of logistics transport equipment which is the weight (mass)
including loaded goods, packing and transport equipment.

#### See

https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure

***

### weightUnitNetWeightMeasure? {#weightunitnetweightmeasure}

> `optional` **weightUnitNetWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the net weight (mass) of this piece of logistics transport equipment.

#### See

https://vocabulary.uncefact.org/weightUnitNetWeightMeasure

***

### weightUnitTareWeightMeasure? {#weightunittareweightmeasure}

> `optional` **weightUnitTareWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The measure of the tare weight (mass) of this piece of logistics transport equipment which is the weight (mass)
including permanent equipment but excluding goods and loose accessories.

#### See

https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
