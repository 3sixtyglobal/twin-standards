# Interface: IUneceConsignmentItem

A reference to an item within a supply chain consignment of goods separately identified for transport and customs
purposes.
An item within a supply chain consignment of goods separately identified for transport and customs purposes.

## See

https://vocabulary.uncefact.org/ConsignmentItem

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ConsignmentItem"`

JSON-LD Type.

***

### applicableCustomsValuation? {#applicablecustomsvaluation}

> `optional` **applicableCustomsValuation?**: [`IUneceCustomsValuation`](IUneceCustomsValuation.md)[]

A customs valuation applicable to this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/applicableCustomsValuation

***

### applicableDangerousGoods? {#applicabledangerousgoods}

> `optional` **applicableDangerousGoods?**: [`IUneceDangerousGoods`](IUneceDangerousGoods.md)[]

Dangerous goods transport details applicable to this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/applicableDangerousGoods

***

### applicableNote? {#applicablenote}

> `optional` **applicableNote?**: [`IUneceNote`](IUneceNote.md)[]

A note providing information applicable to this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/applicableNote

***

### applicableRegulatoryProcedure? {#applicableregulatoryprocedure}

> `optional` **applicableRegulatoryProcedure?**: [`IUneceRegulatoryProcedure`](IUneceRegulatoryProcedure.md)[]

A cross-border regulatory procedure applicable to this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/applicableRegulatoryProcedure

***

### applicableServiceCharge? {#applicableservicecharge}

> `optional` **applicableServiceCharge?**: [`IUneceServiceCharge`](IUneceServiceCharge.md)[]

A logistics service charge applicable to this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/applicableServiceCharge

***

### applicableTransportMeans? {#applicabletransportmeans}

> `optional` **applicableTransportMeans?**: [`IUneceLogisticsTransportMeans`](IUneceLogisticsTransportMeans.md)

The means of transport applicable to this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/applicableTransportMeans

***

### associatedDocument? {#associateddocument}

> `optional` **associatedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document associated with this referenced supply chain consignment item.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### associatedTransportEquipment? {#associatedtransportequipment}

> `optional` **associatedTransportEquipment?**: [`IUneceLogisticsTransportEquipment`](IUneceLogisticsTransportEquipment.md)[]

A referenced piece of transport equipment associated with this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/associatedTransportEquipment

***

### borderClearanceInstructions? {#borderclearanceinstructions}

> `optional` **borderClearanceInstructions?**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)[]

Border clearance instructions for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/borderClearanceInstructions

***

### cargoToleranceInformation? {#cargotoleranceinformation}

> `optional` **cargoToleranceInformation?**: `string`

Cargo tolerance information, expressed as text, for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/cargoToleranceInformation

***

### classificationDocument? {#classificationdocument}

> `optional` **classificationDocument?**: [`IUneceDocument`](IUneceDocument.md)

The referenced classification document for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/classificationDocument

***

### damageRemarks? {#damageremarks}

> `optional` **damageRemarks?**: `string`

Damage remarks, expressed as text, for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/damageRemarks

***

### declaredForCustomsLocation? {#declaredforcustomslocation}

> `optional` **declaredForCustomsLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location of this supply chain consignment item as declared for customs.

#### See

https://vocabulary.uncefact.org/declaredForCustomsLocation

***

### declaredValueForCarriageAmount? {#declaredvalueforcarriageamount}

> `optional` **declaredValueForCarriageAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of this supply chain consignment item as declared by the shipper or his agent for the purpose of
varying the carrier's level of liability from that provided in the contract of carriage, in case of loss or damage to
goods or delayed delivery.

#### See

https://vocabulary.uncefact.org/declaredValueForCarriageAmount

***

### declaredValueForCustomsAmount? {#declaredvalueforcustomsamount}

> `optional` **declaredValueForCustomsAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of this supply chain consignment item as declared for customs purposes.

#### See

https://vocabulary.uncefact.org/declaredValueForCustomsAmount

***

### declaredValueForStatisticsAmount? {#declaredvalueforstatisticsamount}

> `optional` **declaredValueForStatisticsAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of this supply chain consignment item as declared for statistical purposes.

#### See

https://vocabulary.uncefact.org/declaredValueForStatisticsAmount

***

### deliveryInstructionsText? {#deliveryinstructionstext}

> `optional` **deliveryInstructionsText?**: `string`

Delivery instructions, expressed as text, for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/deliveryInstructionsText

***

### deliveryParty? {#deliveryparty}

> `optional` **deliveryParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party to whom this supply chain consignment item will be or has been delivered.

#### See

https://vocabulary.uncefact.org/deliveryParty

***

### deliveryTransportEvent? {#deliverytransportevent}

> `optional` **deliveryTransportEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

The delivery event for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/deliveryTransportEvent

***

### despatchParty? {#despatchparty}

> `optional` **despatchParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party from whom this supply chain consignment item will be or has been despatched.

#### See

https://vocabulary.uncefact.org/despatchParty

***

### destinationCountry? {#destinationcountry}

> `optional` **destinationCountry?**: [`IUneceCountry`](IUneceCountry.md)

The destination country for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/destinationCountry

***

### examinationEvent? {#examinationevent}

> `optional` **examinationEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

An examination event for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/examinationEvent

***

### exportCountry? {#exportcountry}

> `optional` **exportCountry?**: [`IUneceCountry`](IUneceCountry.md)

The export country for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/exportCountry

***

### exportGeopoliticalRegion? {#exportgeopoliticalregion}

> `optional` **exportGeopoliticalRegion?**: [`IUneceGeopoliticalRegion`](IUneceGeopoliticalRegion.md)

The geopolitical region of export for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/exportGeopoliticalRegion

***

### exportTypeCode? {#exporttypecode}

> `optional` **exportTypeCode?**: `string`

The code specifying the export type of supply chain consignment item.

#### See

https://vocabulary.uncefact.org/exportTypeCode

***

### fOBAmount? {#fobamount}

> `optional` **fOBAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value for this supply chain consignment item as calculated under FOB (Free On Board) delivery terms.

#### See

https://vocabulary.uncefact.org/fOBAmount

***

### firstTypeExtensionCode? {#firsttypeextensioncode}

> `optional` **firstTypeExtensionCode?**: `string`

The code used as a first extension to the type code for further specifying the type of supply chain consignment item.

#### See

https://vocabulary.uncefact.org/firstTypeExtensionCode

***

### globalId? {#globalid}

> `optional` **globalId?**: `string` \| `IJsonLdValueObject`

A global identifier for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/globalId

***

### goodsTypeCode? {#goodstypecode}

> `optional` **goodsTypeCode?**: `string`

The code specifying the type of referenced supply chain consignment item.

#### See

https://vocabulary.uncefact.org/goodsTypeCode

***

### goodsTypeExtensionTypeExtensionCode? {#goodstypeextensiontypeextensioncode}

> `optional` **goodsTypeExtensionTypeExtensionCode?**: `string`

The code used as an extension to the type code for further specifying the type of referenced supply chain consignment
item.

#### See

https://vocabulary.uncefact.org/goodsTypeExtensionTypeExtensionCode

***

### goodsUnitQuantity? {#goodsunitquantity}

> `optional` **goodsUnitQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A quantity of goods, such as gaseous fuel systems or automotive parts, in this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/goodsUnitQuantity

***

### handlingInstructions? {#handlinginstructions}

> `optional` **handlingInstructions?**: [`IUneceHandlingInstructions`](IUneceHandlingInstructions.md)[]

Handling instructions for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/handlingInstructions

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

A unique identifier for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/identifier

***

### importTypeCode? {#importtypecode}

> `optional` **importTypeCode?**: `string`

The code specifying the import type of supply chain consignment item.

#### See

https://vocabulary.uncefact.org/importTypeCode

***

### importationCountry? {#importationcountry}

> `optional` **importationCountry?**: [`IUneceCountry`](IUneceCountry.md)

The importation country for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/importationCountry

***

### includedSupplyChainTradeLineItem? {#includedsupplychaintradelineitem}

> `optional` **includedSupplyChainTradeLineItem?**: [`IUneceSupplyChainTradeLineItem`](IUneceSupplyChainTradeLineItem.md)[]

A trade line item included in this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/includedSupplyChainTradeLineItem

***

### information? {#information}

> `optional` **information?**: `string`

Information, expressed as text, for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/information

***

### insuranceValueAmount? {#insurancevalueamount}

> `optional` **insuranceValueAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of this supply chain consignment item as covered by an insurance policy.

#### See

https://vocabulary.uncefact.org/insuranceValueAmount

***

### invoiceAmount? {#invoiceamount}

> `optional` **invoiceAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value for an invoice for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/invoiceAmount

***

### linearDimension? {#lineardimension}

> `optional` **linearDimension?**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)

The linear spatial dimensions of this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/linearDimension

***

### linearUnitLoadingLengthMeasure? {#linearunitloadinglengthmeasure}

> `optional` **linearUnitLoadingLengthMeasure?**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the loading length of this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/linearUnitLoadingLengthMeasure

***

### manufacturerParty? {#manufacturerparty}

> `optional` **manufacturerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party which manufactured this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### nationalTypeExtensionCode? {#nationaltypeextensioncode}

> `optional` **nationalTypeExtensionCode?**: `string`

The code used as a national extension to the type code for further specifying the type of supply chain consignment item.

#### See

https://vocabulary.uncefact.org/nationalTypeExtensionCode

***

### natureIdentificationCargo? {#natureidentificationcargo}

> `optional` **natureIdentificationCargo?**: [`IUneceCargo`](IUneceCargo.md)[]

Transport cargo details of this supply chain consignment item sufficient to identify its nature for customs, statistical
or transport purposes.

#### See

https://vocabulary.uncefact.org/natureIdentificationCargo

***

### originCountry? {#origincountry}

> `optional` **originCountry?**: [`IUneceCountry`](IUneceCountry.md)

The country of origin where this supply chain consignment item has been produced.

#### See

https://vocabulary.uncefact.org/originCountry

***

### originGeopoliticalRegion? {#origingeopoliticalregion}

> `optional` **originGeopoliticalRegion?**: [`IUneceGeopoliticalRegion`](IUneceGeopoliticalRegion.md)

The geopolitical region of origin for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/originGeopoliticalRegion

***

### packageQuantity? {#packagequantity}

> `optional` **packageQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The package quantity for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/packageQuantity

***

### packageType? {#packagetype}

> `optional` **packageType?**: `string`

A package type, expressed as text, for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/packageType

***

### physicalShippingMarks? {#physicalshippingmarks}

> `optional` **physicalShippingMarks?**: [`IUneceShippingMarks`](IUneceShippingMarks.md)[]

Physical logistics shipping marks and barcode information for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/physicalShippingMarks

***

### pickUpEvent? {#pickupevent}

> `optional` **pickUpEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A pick-up transport event for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/pickUpEvent

***

### previousAdministrativeDocument? {#previousadministrativedocument}

> `optional` **previousAdministrativeDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A previous administrative referenced document for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/previousAdministrativeDocument

***

### quarantineInstructions? {#quarantineinstructions}

> `optional` **quarantineInstructions?**: [`IUneceQuarantineInstructions`](IUneceQuarantineInstructions.md)[]

Quarantine instructions for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/quarantineInstructions

***

### reportedLogisticsStatus? {#reportedlogisticsstatus}

> `optional` **reportedLogisticsStatus?**: [`IUneceLogisticsStatus`](IUneceLogisticsStatus.md)[]

A logistics status reported for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/reportedLogisticsStatus

***

### secondTypeExtensionCode? {#secondtypeextensioncode}

> `optional` **secondTypeExtensionCode?**: `string`

The code used as a second extension to the type code for further specifying the type of supply chain consignment item.

#### See

https://vocabulary.uncefact.org/secondTypeExtensionCode

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric?**: `string`

The sequence number for this referenced supply chain consignment item.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specialInstructions? {#specialinstructions}

> `optional` **specialInstructions?**: `string`

Special instructions, expressed as text, for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/specialInstructions

***

### specifiedInspectionEvent? {#specifiedinspectionevent}

> `optional` **specifiedInspectionEvent?**: [`IUneceInspectionEvent`](IUneceInspectionEvent.md)[]

An inspection event specified for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/specifiedInspectionEvent

***

### specifiedRiskAnalysisResult? {#specifiedriskanalysisresult}

> `optional` **specifiedRiskAnalysisResult?**: [`IUneceRiskAnalysisResult`](IUneceRiskAnalysisResult.md)[]

Results of a logistics risk analysis specified for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/specifiedRiskAnalysisResult

***

### tariffQuantity? {#tariffquantity}

> `optional` **tariffQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The tariff quantity in this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/tariffQuantity

***

### totalChargeAmount? {#totalchargeamount}

> `optional` **totalChargeAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of all freight and other service charges for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/totalChargeAmount

***

### totalExportExitToImportEntryChargeAmount? {#totalexportexittoimportentrychargeamount}

> `optional` **totalExportExitToImportEntryChargeAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the total charge or charges of freight, insurance and other services for this supply chain
consignment item calculated from the export exit location to the import entry location.

#### See

https://vocabulary.uncefact.org/totalExportExitToImportEntryChargeAmount

***

### tradeLineItemQuantity? {#tradelineitemquantity}

> `optional` **tradeLineItemQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of trade line items in this referenced supply chain consignment item.

#### See

https://vocabulary.uncefact.org/tradeLineItemQuantity

***

### transitCountry? {#transitcountry}

> `optional` **transitCountry?**: [`IUneceCountry`](IUneceCountry.md)[]

A transit country for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/transitCountry

***

### transportContractDocument? {#transportcontractdocument}

> `optional` **transportContractDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A transport contract document for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/transportContractDocument

***

### transportPackage? {#transportpackage}

> `optional` **transportPackage?**: [`IUnecePackage`](IUnecePackage.md)[]

A transport package for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/transportPackage

***

### transportTemperature? {#transporttemperature}

> `optional` **transportTemperature?**: [`IUneceTransportSettingTemperature`](IUneceTransportSettingTemperature.md)

The transport temperature setting for this supply chain consignment item.

#### See

https://vocabulary.uncefact.org/transportTemperature

***

### vanningEvent? {#vanningevent}

> `optional` **vanningEvent?**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

The vanning event for this supply chain consignment item, i.e. the loading of this consignment item at the place of
original despatch.

#### See

https://vocabulary.uncefact.org/vanningEvent

***

### volumeUnitGrossVolumeMeasure? {#volumeunitgrossvolumemeasure}

> `optional` **volumeUnitGrossVolumeMeasure?**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)[]

A measure of the gross volume, normally calculated by multiplying the maximum length, width and height of this supply
chain consignment item.

#### See

https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure

***

### weightUnitChargeableWeightMeasure? {#weightunitchargeableweightmeasure}

> `optional` **weightUnitChargeableWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the supply chain consignment item weight on which charges are to be based.

#### See

https://vocabulary.uncefact.org/weightUnitChargeableWeightMeasure

***

### weightUnitGrossWeightMeasure? {#weightunitgrossweightmeasure}

> `optional` **weightUnitGrossWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the gross weight (mass) of this supply chain consignment item which includes packaging but excludes any
transport equipment.

#### See

https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure

***

### weightUnitNetWeightMeasure? {#weightunitnetweightmeasure}

> `optional` **weightUnitNetWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the net weight (mass) of this supply chain consignment item which excludes all packaging.

#### See

https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
