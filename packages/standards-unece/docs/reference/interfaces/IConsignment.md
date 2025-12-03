# Interface: IConsignment

A separately identifiable collection of goods items to be transported or available to be transported from one consignor
to one consignee in a supply chain via one or more modes of transport where each consignment is the subject of one
single transport contract.
A referenced, separately identifiable collection of goods items to be transported or available to be transported from
one consignor to one consignee via one or more modes of transport where each consignment is the subject of one single
transport contract.

## See

https://vocabulary.uncefact.org/Consignment

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

> **type**: `"Consignment"`

JSON-LD Type.

***

### applicableAllowanceCharge?

> `optional` **applicableAllowanceCharge**: [`ITradeAllowanceCharge`](ITradeAllowanceCharge.md)[]

An allowance or charge applicable to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/applicableAllowanceCharge

***

### applicableCargoInsurance?

> `optional` **applicableCargoInsurance**: [`ICargoInsurance`](ICargoInsurance.md)[]

The cargo insurance applicable to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/applicableCargoInsurance

***

### applicableCurrencyExchange?

> `optional` **applicableCurrencyExchange**: [`ICurrencyExchange`](ICurrencyExchange.md)

A currency exchange applicable to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/applicableCurrencyExchange

***

### applicableCustomsValuation?

> `optional` **applicableCustomsValuation**: [`ICustomsValuation`](ICustomsValuation.md)

A cross-border customs valuation applicable to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/applicableCustomsValuation

***

### applicableDangerousGoods?

> `optional` **applicableDangerousGoods**: [`IDangerousGoods`](IDangerousGoods.md)[]

Dangerous goods applicable to the transport of this supply chain consignment.

#### See

https://vocabulary.uncefact.org/applicableDangerousGoods

***

### applicableRegulatoryProcedure?

> `optional` **applicableRegulatoryProcedure**: [`IRegulatoryProcedure`](IRegulatoryProcedure.md)[]

A cross-border regulatory procedure applicable to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/applicableRegulatoryProcedure

***

### applicableServiceCharge?

> `optional` **applicableServiceCharge**: [`IServiceCharge`](IServiceCharge.md)[]

A logistics service charge applicable to this supply chain consignment, such as freight or insurance charges.

#### See

https://vocabulary.uncefact.org/applicableServiceCharge

***

### associatedDocument?

> `optional` **associatedDocument**: [`IDocument`](IDocument.md)[]

A referenced document associated with this supply chain consignment, such as the certificate of origin or dangerous
goods note.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### associatedInvoiceAmount?

> `optional` **associatedInvoiceAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of an invoice associated with this supply chain consignment.

#### See

https://vocabulary.uncefact.org/associatedInvoiceAmount

***

### associatedInvoiceDiscountAmount?

> `optional` **associatedInvoiceDiscountAmount**: [`IAmountType`](IAmountType.md)

A monetary value of the discount on an invoice associated with this supply chain consignment.

#### See

https://vocabulary.uncefact.org/associatedInvoiceDiscountAmount

***

### associatedInvoiceDiscountPercent?

> `optional` **associatedInvoiceDiscountPercent**: `string`

A percent that is a discount on an invoice amount associated with this supply chain consignment.

#### See

https://vocabulary.uncefact.org/associatedInvoiceDiscountPercent

***

### associatedParty?

> `optional` **associatedParty**: [`ITradeParty`](ITradeParty.md)[]

A trade party associated with this supply chain consignment.

#### See

https://vocabulary.uncefact.org/associatedParty

***

### atArrivalTransportMovement?

> `optional` **atArrivalTransportMovement**: [`ITransportMovement`](ITransportMovement.md)[]

The logistics transport movement for this supply chain consignment at the point when the means of transport arrives in a
country or at a regional border.

#### See

https://vocabulary.uncefact.org/atArrivalTransportMovement

***

### atDepartureTransportMovement?

> `optional` **atDepartureTransportMovement**: [`ITransportMovement`](ITransportMovement.md)

The logistics transport movement for this supply chain consignment at the point when the means of transport departs a
country or regional border.

#### See

https://vocabulary.uncefact.org/atDepartureTransportMovement

***

### availabilityDueDateTime?

> `optional` **availabilityDueDateTime**: `string`

The date, time, date time or other date time value when this supply chain consignment is due to be available.

#### See

https://vocabulary.uncefact.org/availabilityDueDateTime

***

### bondedWarehouseStorageEvent?

> `optional` **bondedWarehouseStorageEvent**: [`ITransportEvent`](ITransportEvent.md)[]

A bonded warehouse storage event for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/bondedWarehouseStorageEvent

***

### borderCrossingTransportMovement?

> `optional` **borderCrossingTransportMovement**: [`ITransportMovement`](ITransportMovement.md)[]

A border crossing logistics transport movement for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/borderCrossingTransportMovement

***

### cODAmount?

> `optional` **cODAmount**: [`IAmountType`](IAmountType.md)

The monetary value of the COD (Cash On Delivery) amount to be collected by the carrier upon delivery of this supply
chain consignment.

#### See

https://vocabulary.uncefact.org/cODAmount

***

### cargoInsuranceInstructionsInformation?

> `optional` **cargoInsuranceInstructionsInformation**: `string`

Cargo insurance instructions, expressed as text, for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/cargoInsuranceInstructionsInformation

***

### cargoToleranceInformation?

> `optional` **cargoToleranceInformation**: `string`

Cargo tolerance information, expressed as text, for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/cargoToleranceInformation

***

### carrierAcceptanceDateTime?

> `optional` **carrierAcceptanceDateTime**: `string`

The date, time, date time or other date time value when this supply chain consignment will be, or has been, accepted by
the carrier.

#### See

https://vocabulary.uncefact.org/carrierAcceptanceDateTime

***

### carrierAcceptanceLocation?

> `optional` **carrierAcceptanceLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)

The location where this supply chain consignment will be, or has been, accepted by the carrier.

#### See

https://vocabulary.uncefact.org/carrierAcceptanceLocation

***

### carrierAgentParty?

> `optional` **carrierAgentParty**: [`ITradeParty`](ITradeParty.md)[]

The party acting as the agent of the carrier for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/carrierAgentParty

***

### carrierAssignedId?

> `optional` **carrierAssignedId**: `string`

The unique identifier assigned by the carrier to this referenced supply chain consignment, such as a booking reference
number when cargo space is reserved prior to loading.

#### See

https://vocabulary.uncefact.org/carrierAssignedId

***

### carrierParty?

> `optional` **carrierParty**: [`ITradeParty`](ITradeParty.md)[]

The carrier party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/carrierParty

***

### carrierProvidedInformation?

> `optional` **carrierProvidedInformation**: `string`

Information, expressed as text, provided by the carrier for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/carrierProvidedInformation

***

### chargeableTransportationStageQuantity?

> `optional` **chargeableTransportationStageQuantity**: [`IQuantityType`](IQuantityType.md)

The number of separately chargeable transportation stages to be covered by this supply chain consignment.

#### See

https://vocabulary.uncefact.org/chargeableTransportationStageQuantity

***

### classificationDocument?

> `optional` **classificationDocument**: [`IDocument`](IDocument.md)[]

The referenced classification document for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/classificationDocument

***

### connectingCarrierParty?

> `optional` **connectingCarrierParty**: [`ITradeParty`](ITradeParty.md)[]

A connecting carrier party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/connectingCarrierParty

***

### consigneeAgentParty?

> `optional` **consigneeAgentParty**: [`ITradeParty`](ITradeParty.md)[]

The party authorized to act for or on behalf of the consignee for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/consigneeAgentParty

***

### consigneeAssignedId?

> `optional` **consigneeAssignedId**: `string`

The unique identifier assigned by the consignee to this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/consigneeAssignedId

***

### consigneeParty?

> `optional` **consigneeParty**: [`ITradeParty`](ITradeParty.md)

The consignee party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/consigneeParty

***

### consigneeReceiptLocation?

> `optional` **consigneeReceiptLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)

The location at which this supply chain consignment will be or has been received by the consignee.

#### See

https://vocabulary.uncefact.org/consigneeReceiptLocation

***

### consignmentItemQuantity?

> `optional` **consignmentItemQuantity**: [`IQuantityType`](IQuantityType.md)

The number of consignment items separately defined for transport or customs purposes within this supply chain
consignment.

#### See

https://vocabulary.uncefact.org/consignmentItemQuantity

***

### consignorAgentParty?

> `optional` **consignorAgentParty**: [`ITradeParty`](ITradeParty.md)

The party authorized to act for or on behalf of the consignor for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/consignorAgentParty

***

### consignorAssignedId?

> `optional` **consignorAssignedId**: `string`

The unique identifier assigned by the consignor to this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/consignorAssignedId

***

### consignorParty?

> `optional` **consignorParty**: [`ITradeParty`](ITradeParty.md)

The consignor party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/consignorParty

***

### consignorProvidedBorderClearanceInstructions?

> `optional` **consignorProvidedBorderClearanceInstructions**: [`ITransportInstructions`](ITransportInstructions.md)[]

Border clearance instructions provided by the consignor for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/consignorProvidedBorderClearanceInstructions

***

### consignorProvidedInformation?

> `optional` **consignorProvidedInformation**: `string`

Information, expressed as text, provided by the consignor for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/consignorProvidedInformation

***

### consolidatorParty?

> `optional` **consolidatorParty**: [`ITradeParty`](ITradeParty.md)

The party responsible for the consolidation of this supply chain consignment.

#### See

https://vocabulary.uncefact.org/consolidatorParty

***

### containerizationIndicator?

> `optional` **containerizationIndicator**: `boolean`

The indication of whether or not this supply chain consignment is to be transported in a container or containers.

#### See

https://vocabulary.uncefact.org/containerizationIndicator

***

### contractId?

> `optional` **contractId**: `string`

A contract identifier for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/contractId

***

### contractTermsInformation?

> `optional` **contractTermsInformation**: `string`

Information related to contract terms and conditions, expressed as text, for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/contractTermsInformation

***

### currencyServiceChargeCurrencyCode?

> `optional` **currencyServiceChargeCurrencyCode**: [`CurrencyCodeList`](../type-aliases/CurrencyCodeList.md)[]

A code specifying a service charge currency for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/currencyServiceChargeCurrencyCode

***

### currencyServiceTariffCurrencyCode?

> `optional` **currencyServiceTariffCurrencyCode**: [`CurrencyCodeList`](../type-aliases/CurrencyCodeList.md)[]

A code specifying a service tariff currency for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/currencyServiceTariffCurrencyCode

***

### customsExportAgentParty?

> `optional` **customsExportAgentParty**: [`ITradeParty`](ITradeParty.md)

The party acting as an agent for, or on behalf of, the consignor with respect to the customs export procedures for this
supply chain consignment.

#### See

https://vocabulary.uncefact.org/customsExportAgentParty

***

### customsId?

> `optional` **customsId**: `string`

A unique identifier, for customs purposes, for this consignment.

#### See

https://vocabulary.uncefact.org/customsId

***

### customsImportAgentParty?

> `optional` **customsImportAgentParty**: [`ITradeParty`](ITradeParty.md)

The party acting as an agent for, or on behalf of, the consignee with respect to the customs import procedures for this
supply chain consignment.

#### See

https://vocabulary.uncefact.org/customsImportAgentParty

***

### customsRequiredInvoiceDocument?

> `optional` **customsRequiredInvoiceDocument**: [`IDocument`](IDocument.md)[]

A referenced invoice document required by customs for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/customsRequiredInvoiceDocument

***

### customsTransitAgentParty?

> `optional` **customsTransitAgentParty**: [`ITradeParty`](ITradeParty.md)

The party acting as an agent for, or on behalf of, the consignor with respect to customs transit procedures for this
supply chain consignment.

#### See

https://vocabulary.uncefact.org/customsTransitAgentParty

***

### dangerousGoodsNotifierParty?

> `optional` **dangerousGoodsNotifierParty**: [`ITradeParty`](ITradeParty.md)

The party responsible for providing the dangerous goods notification in accordance with the dangerous goods regulations
relevant for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/dangerousGoodsNotifierParty

***

### declaredForCustomsLocation?

> `optional` **declaredForCustomsLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)

The location of this supply chain consignment as declared for customs.

#### See

https://vocabulary.uncefact.org/declaredForCustomsLocation

***

### declaredValueForCarriageAmount?

> `optional` **declaredValueForCarriageAmount**: [`IAmountType`](IAmountType.md)

The monetary value of this supply chain consignment as declared by the shipper or his agent for the purpose of varying
the carrier's level of liability from that provided in the contract of carriage, in case of loss or damage to goods or
delayed delivery.

#### See

https://vocabulary.uncefact.org/declaredValueForCarriageAmount

***

### declaredValueForCustomsAmount?

> `optional` **declaredValueForCustomsAmount**: [`IAmountType`](IAmountType.md)[]

The monetary value declared for customs purposes for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/declaredValueForCustomsAmount

***

### deconsolidatorParty?

> `optional` **deconsolidatorParty**: [`ITradeParty`](ITradeParty.md)

The party responsible for the deconsolidation of this supply chain consignment.

#### See

https://vocabulary.uncefact.org/deconsolidatorParty

***

### deliveryInformation?

> `optional` **deliveryInformation**: `string`

The delivery information, expressed as text, for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/deliveryInformation

***

### deliveryInstructions?

> `optional` **deliveryInstructions**: [`IDeliveryInstructions`](IDeliveryInstructions.md)[]

Delivery instructions for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/deliveryInstructions

***

### deliveryParty?

> `optional` **deliveryParty**: [`ITradeParty`](ITradeParty.md)[]

The party to whom this supply chain consignment will be, or has been, delivered.

#### See

https://vocabulary.uncefact.org/deliveryParty

***

### deliveryTransportEvent?

> `optional` **deliveryTransportEvent**: [`ITransportEvent`](ITransportEvent.md)[]

The delivery event for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/deliveryTransportEvent

***

### demurrageInformation?

> `optional` **demurrageInformation**: `string`

Demurrage information, expressed as text, for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/demurrageInformation

***

### despatchParty?

> `optional` **despatchParty**: [`ITradeParty`](ITradeParty.md)[]

The party from whom this supply chain consignment will be or has been despatched.

#### See

https://vocabulary.uncefact.org/despatchParty

***

### destinationCountry?

> `optional` **destinationCountry**: [`ICountry`](ICountry.md)[]

The destination country for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/destinationCountry

***

### devanningEvent?

> `optional` **devanningEvent**: [`ITransportEvent`](ITransportEvent.md)[]

A transport devanning event for this referenced supply chain consignment, i.e. the unloading of this consignment at the
place of delivery.

#### See

https://vocabulary.uncefact.org/devanningEvent

***

### estimatedApplicableServiceCharge?

> `optional` **estimatedApplicableServiceCharge**: [`IServiceCharge`](IServiceCharge.md)[]

An estimated logistics service charge applicable to this supply chain consignment, such as freight or insurance charges.

#### See

https://vocabulary.uncefact.org/estimatedApplicableServiceCharge

***

### examinationEvent?

> `optional` **examinationEvent**: [`ITransportEvent`](ITransportEvent.md)[]

An examination event for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/examinationEvent

***

### exportCountry?

> `optional` **exportCountry**: [`ICountry`](ICountry.md)

The export country for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/exportCountry

***

### exportExitDateTime?

> `optional` **exportExitDateTime**: `string`

The date, time, date time or other date time value when this supply chain consignment will exit, or has exited from the
last port, airport, or border post of the country of export.

#### See

https://vocabulary.uncefact.org/exportExitDateTime

***

### exportGeopoliticalRegion?

> `optional` **exportGeopoliticalRegion**: [`IGeopoliticalRegion`](IGeopoliticalRegion.md)[]

The geopolitical region of export for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/exportGeopoliticalRegion

***

### exporterParty?

> `optional` **exporterParty**: [`ITradeParty`](ITradeParty.md)

The party who exports this supply chain consignment.

#### See

https://vocabulary.uncefact.org/exporterParty

***

### fOBAmount?

> `optional` **fOBAmount**: [`IAmountType`](IAmountType.md)

The monetary value that has to be, or has been, paid for this supply chain consignment as calculated under FOB (Free on
Board) delivery terms.

#### See

https://vocabulary.uncefact.org/fOBAmount

***

### finalDestinationCountry?

> `optional` **finalDestinationCountry**: [`ICountry`](ICountry.md)

The final destination country for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/finalDestinationCountry

***

### finalDestinationLocation?

> `optional` **finalDestinationLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)

The final destination location for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/finalDestinationLocation

***

### freightForwarderAssignedId?

> `optional` **freightForwarderAssignedId**: `string`

The unique identifier assigned by the freight forwarder to this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/freightForwarderAssignedId

***

### freightForwarderParty?

> `optional` **freightForwarderParty**: [`ITradeParty`](ITradeParty.md)[]

The freight forwarder party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/freightForwarderParty

***

### globalId?

> `optional` **globalId**: `string`

A global identifier of this supply chain consignment.

#### See

https://vocabulary.uncefact.org/globalId

***

### goodsReleaseRestriction?

> `optional` **goodsReleaseRestriction**: `string`

A goods release restriction, expressed as text, for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/goodsReleaseRestriction

***

### groupingCentreParty?

> `optional` **groupingCentreParty**: [`ITradeParty`](ITradeParty.md)[]

A grouping centre party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/groupingCentreParty

***

### handlingInstructions?

> `optional` **handlingInstructions**: [`IHandlingInstructions`](IHandlingInstructions.md)

Handling instructions for this supply chain consignment, such as where or how specified packages or containers are to be
loaded on a means of transport.

#### See

https://vocabulary.uncefact.org/handlingInstructions

***

### haulageInstructions?

> `optional` **haulageInstructions**: [`IHaulageInstructions`](IHaulageInstructions.md)[]

Haulage instructions for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/haulageInstructions

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/identifier

***

### importCountry?

> `optional` **importCountry**: [`ICountry`](ICountry.md)[]

The import country for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/importCountry

***

### importerParty?

> `optional` **importerParty**: [`ITradeParty`](ITradeParty.md)

The party who imports this supply chain consignment.

#### See

https://vocabulary.uncefact.org/importerParty

***

### includedConsignment?

> `optional` **includedConsignment**: `IConsignment`[]

A referenced consignment included in this supply chain consignment.

#### See

https://vocabulary.uncefact.org/includedConsignment

***

### includedConsignmentItem?

> `optional` **includedConsignmentItem**: [`IConsignmentItem`](IConsignmentItem.md)[]

A referenced consignment item included in this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/includedConsignmentItem

***

### includedTareGrossWeightMeasure?

> `optional` **includedTareGrossWeightMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure of the gross weight (mass) including the tare weight of this supply chain consignment.

#### See

https://vocabulary.uncefact.org/includedTareGrossWeightMeasure

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/information

***

### insuranceApplicableCurrencyExchange?

> `optional` **insuranceApplicableCurrencyExchange**: [`ICurrencyExchange`](ICurrencyExchange.md)

A currency exchange applicable to an insurance charge for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/insuranceApplicableCurrencyExchange

***

### insurancePremiumAmount?

> `optional` **insurancePremiumAmount**: [`IAmountType`](IAmountType.md)[]

The monetary value of the insurance premium for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/insurancePremiumAmount

***

### insuranceValueAmount?

> `optional` **insuranceValueAmount**: [`IAmountType`](IAmountType.md)[]

The monetary value of this supply chain consignment as covered by an insurance policy.

#### See

https://vocabulary.uncefact.org/insuranceValueAmount

***

### intermediateConsigneeParty?

> `optional` **intermediateConsigneeParty**: [`ITradeParty`](ITradeParty.md)[]

A party that is an intermediate consignee for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/intermediateConsigneeParty

***

### invoiceApplicableCurrencyExchange?

> `optional` **invoiceApplicableCurrencyExchange**: [`ICurrencyExchange`](ICurrencyExchange.md)

A currency exchange applicable to the invoice for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/invoiceApplicableCurrencyExchange

***

### invoiceeAssociatedParty?

> `optional` **invoiceeAssociatedParty**: [`ITradeParty`](ITradeParty.md)[]

An invoicee trade party associated with this supply chain consignment.

#### See

https://vocabulary.uncefact.org/invoiceeAssociatedParty

***

### linearUnitLoadingLengthMeasure?

> `optional` **linearUnitLoadingLengthMeasure**: [`ILinearUnitMeasureType`](ILinearUnitMeasureType.md)

A measure of the loading length which is the length along a means of transport over which the complete width and height
is needed for loading all the goods items in this supply chain consignment.

#### See

https://vocabulary.uncefact.org/linearUnitLoadingLengthMeasure

***

### loadingBaseportLocation?

> `optional` **loadingBaseportLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)

The baseport location at which this supply chain consignment is to be loaded on a means of transport according to the
transport contract.

#### See

https://vocabulary.uncefact.org/loadingBaseportLocation

***

### loadingInformation?

> `optional` **loadingInformation**: `string`

Loading information, expressed as text, for this supply chain consignment, such as advice and instructions.

#### See

https://vocabulary.uncefact.org/loadingInformation

***

### loadingInstructions?

> `optional` **loadingInstructions**: [`ITransportInstructions`](ITransportInstructions.md)[]

Loading instructions for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/loadingInstructions

***

### loadingListQuantity?

> `optional` **loadingListQuantity**: [`IQuantityType`](IQuantityType.md)

The number of loading lists, manifests or similar documents for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/loadingListQuantity

***

### loadingLocation?

> `optional` **loadingLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

The logistics location where the supply chain consignment is loaded.

#### See

https://vocabulary.uncefact.org/loadingLocation

***

### loadingSequenceNumeric?

> `optional` **loadingSequenceNumeric**: `string`

The loading sequence number for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/loadingSequenceNumeric

***

### localConsigneeAgentParty?

> `optional` **localConsigneeAgentParty**: [`ITradeParty`](ITradeParty.md)[]

The local party authorized to act for or on behalf of the consignee for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/localConsigneeAgentParty

***

### mainCarriageTransportMovement?

> `optional` **mainCarriageTransportMovement**: [`ITransportMovement`](ITransportMovement.md)[]

A main carriage logistics transport movement for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/mainCarriageTransportMovement

***

### manifestAssociatedDocument?

> `optional` **manifestAssociatedDocument**: [`IDocument`](IDocument.md)

A referenced manifest document associated to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/manifestAssociatedDocument

***

### natureIdentificationCargo?

> `optional` **natureIdentificationCargo**: [`ICargo`](ICargo.md)[]

Transport cargo details of this supply chain consignment sufficient to identify its nature for customs, statistical or
transport purposes.

#### See

https://vocabulary.uncefact.org/natureIdentificationCargo

***

### nilCarriageValueIndicator?

> `optional` **nilCarriageValueIndicator**: `boolean`

The indication of whether or not this supply chain consignment has a nil value for carriage.

#### See

https://vocabulary.uncefact.org/nilCarriageValueIndicator

***

### nilCustomsValueIndicator?

> `optional` **nilCustomsValueIndicator**: `boolean`

The indication of whether or not this supply chain consignment has a nil value for customs.

#### See

https://vocabulary.uncefact.org/nilCustomsValueIndicator

***

### nilInsuranceValueIndicator?

> `optional` **nilInsuranceValueIndicator**: `boolean`

The indication of whether or not this supply chain consignment has a nil value for insurance.

#### See

https://vocabulary.uncefact.org/nilInsuranceValueIndicator

***

### notifiedParty?

> `optional` **notifiedParty**: [`ITradeParty`](ITradeParty.md)[]

A party who has been or will be notified about this supply chain consignment.

#### See

https://vocabulary.uncefact.org/notifiedParty

***

### onCarriageTransportMovement?

> `optional` **onCarriageTransportMovement**: [`ITransportMovement`](ITransportMovement.md)[]

An on-carriage logistics transport movement for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/onCarriageTransportMovement

***

### onwardRoutingLocation?

> `optional` **onwardRoutingLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

An onward routing location for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/onwardRoutingLocation

***

### originCountry?

> `optional` **originCountry**: [`ICountry`](ICountry.md)[]

A country of origin for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/originCountry

***

### originGeopoliticalRegion?

> `optional` **originGeopoliticalRegion**: [`IGeopoliticalRegion`](IGeopoliticalRegion.md)[]

The geopolitical region of origin for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/originGeopoliticalRegion

***

### originalDespatchLocation?

> `optional` **originalDespatchLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)

The location from which this supply chain consignment was originally despatched.

#### See

https://vocabulary.uncefact.org/originalDespatchLocation

***

### packageQuantity?

> `optional` **packageQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of packages within this supply chain consignment.

#### See

https://vocabulary.uncefact.org/packageQuantity

***

### packageType?

> `optional` **packageType**: `string`

A type of package, expressed as text, for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/packageType

***

### physicalShippingMarks?

> `optional` **physicalShippingMarks**: [`IShippingMarks`](IShippingMarks.md)

Physical logistics shipping marks and barcoding information related to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/physicalShippingMarks

***

### pickUpEvent?

> `optional` **pickUpEvent**: [`ITransportEvent`](ITransportEvent.md)[]

The pick-up event for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/pickUpEvent

***

### pickUpParty?

> `optional` **pickUpParty**: [`ITradeParty`](ITradeParty.md)[]

The pick-up trade party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/pickUpParty

***

### preCarriageTransportMovement?

> `optional` **preCarriageTransportMovement**: [`ITransportMovement`](ITransportMovement.md)[]

A pre-carriage logistics transport movement for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/preCarriageTransportMovement

***

### previousAdministrativeDocument?

> `optional` **previousAdministrativeDocument**: [`IDocument`](IDocument.md)[]

A previous administrative referenced document for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/previousAdministrativeDocument

***

### reExportCountry?

> `optional` **reExportCountry**: [`ICountry`](ICountry.md)[]

A re-export country for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/reExportCountry

***

### relatedBookingType?

> `optional` **relatedBookingType**: `string`

The type of booking, expressed as text, related to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/relatedBookingType

***

### relatedTradeTransaction?

> `optional` **relatedTradeTransaction**: [`ISupplyChainTradeTransaction`](ISupplyChainTradeTransaction.md)[]

A trade transaction related to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/relatedTradeTransaction

***

### reportedLogisticsStatus?

> `optional` **reportedLogisticsStatus**: [`ILogisticsStatus`](ILogisticsStatus.md)[]

A logistics status reported for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/reportedLogisticsStatus

***

### riskFactorCode?

> `optional` **riskFactorCode**: `string`

The code specifying a risk factor for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/riskFactorCode

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

The sequence number for this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### serviceChargeApplicableCurrencyExchange?

> `optional` **serviceChargeApplicableCurrencyExchange**: [`ICurrencyExchange`](ICurrencyExchange.md)

A currency exchange applicable to a service charge for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/serviceChargeApplicableCurrencyExchange

***

### shipFromParty?

> `optional` **shipFromParty**: [`ITradeParty`](ITradeParty.md)[]

The ship from party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/shipFromParty

***

### shipStoresIndicator?

> `optional` **shipStoresIndicator**: `boolean`

The indication of whether or not this supply chain consignment is for ship stores, such as for consumption on the means
of transport.

#### See

https://vocabulary.uncefact.org/shipStoresIndicator

***

### shipToParty?

> `optional` **shipToParty**: [`ITradeParty`](ITradeParty.md)[]

The ship to party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/shipToParty

***

### shippedOnboardDateTime?

> `optional` **shippedOnboardDateTime**: `string`

A date, time, date time, or other date time value when this supply chain consignment is shipped onboard.

#### See

https://vocabulary.uncefact.org/shippedOnboardDateTime

***

### specifiedDeliveryTerms?

> `optional` **specifiedDeliveryTerms**: [`IDeliveryTerms`](IDeliveryTerms.md)

Delivery terms specified for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/specifiedDeliveryTerms

***

### specifiedInspectionEvent?

> `optional` **specifiedInspectionEvent**: [`IInspectionEvent`](IInspectionEvent.md)[]

An inspection event specified for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/specifiedInspectionEvent

***

### specifiedLogisticsStatus?

> `optional` **specifiedLogisticsStatus**: [`ILogisticsStatus`](ILogisticsStatus.md)[]

Logistics status information specified for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsStatus

***

### specifiedRiskAnalysisResult?

> `optional` **specifiedRiskAnalysisResult**: [`IRiskAnalysisResult`](IRiskAnalysisResult.md)[]

A result of a logistics risk analysis calculation specified for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/specifiedRiskAnalysisResult

***

### specifiedSupplyChainReference?

> `optional` **specifiedSupplyChainReference**: [`ISupplyChainReference`](ISupplyChainReference.md)[]

A reference specified for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainReference

***

### specifiedTransportMovement?

> `optional` **specifiedTransportMovement**: [`ITransportMovement`](ITransportMovement.md)[]

A logistics transport movement specified for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/specifiedTransportMovement

***

### statementNote?

> `optional` **statementNote**: [`INote`](INote.md)[]

A statement note for this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/statementNote

***

### storageEvent?

> `optional` **storageEvent**: [`ITransportEvent`](ITransportEvent.md)[]

A storage event for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/storageEvent

***

### summaryDescription?

> `optional` **summaryDescription**: `string`

A textual summary description of this supply chain consignment.

#### See

https://vocabulary.uncefact.org/summaryDescription

***

### totalAllowanceChargeAmount?

> `optional` **totalAllowanceChargeAmount**: [`IAmountType`](IAmountType.md)[]

The total monetary value of all allowances and charges for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/totalAllowanceChargeAmount

***

### totalChargeAmount?

> `optional` **totalChargeAmount**: [`IAmountType`](IAmountType.md)[]

The total monetary value of all freight and other service charges for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/totalChargeAmount

***

### totalCollectChargeAmount?

> `optional` **totalCollectChargeAmount**: [`IAmountType`](IAmountType.md)[]

The total monetary value of all freight and other service charges which are to be collected from the consignee at or
after delivery for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/totalCollectChargeAmount

***

### totalDisbursementAmount?

> `optional` **totalDisbursementAmount**: [`IAmountType`](IAmountType.md)[]

The monetary value of total disbursement for this supply chain consignment, such as the amount to be collected by the
carrier according to the order given by the consignor.

#### See

https://vocabulary.uncefact.org/totalDisbursementAmount

***

### totalExportExitToImportEntryChargeAmount?

> `optional` **totalExportExitToImportEntryChargeAmount**: [`IAmountType`](IAmountType.md)[]

The monetary value of the total charge or charges of freight, insurance and other services for this supply chain
consignment calculated from the export exit location to the import entry location.

#### See

https://vocabulary.uncefact.org/totalExportExitToImportEntryChargeAmount

***

### totalPrepaidChargeAmount?

> `optional` **totalPrepaidChargeAmount**: [`IAmountType`](IAmountType.md)[]

The total monetary value of all freight and other service charges which have been paid in advance for this supply chain
consignment.

#### See

https://vocabulary.uncefact.org/totalPrepaidChargeAmount

***

### totalTareWeightMeasure?

> `optional` **totalTareWeightMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure of the total tare weight (mass) of this supply chain consignment.

#### See

https://vocabulary.uncefact.org/totalTareWeightMeasure

***

### tradedParcelId?

> `optional` **tradedParcelId**: `string`

A traded parcel identifier for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/tradedParcelId

***

### transitCountry?

> `optional` **transitCountry**: [`ICountry`](ICountry.md)[]

A transit country for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transitCountry

***

### transitLocation?

> `optional` **transitLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A location of transit for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transitLocation

***

### transportContractDocument?

> `optional` **transportContractDocument**: [`IDocument`](IDocument.md)

The referenced transport contract document for this supply chain consignment, such as an airwaybill or a seawaybill.

#### See

https://vocabulary.uncefact.org/transportContractDocument

***

### transportEquipmentQuantity?

> `optional` **transportEquipmentQuantity**: [`IQuantityType`](IQuantityType.md)

A number of pieces of transport equipment, such as containers or similar unit load devices, in this supply chain
consignment.

#### See

https://vocabulary.uncefact.org/transportEquipmentQuantity

***

### transportEquipmentSplitGoodsIndicator?

> `optional` **transportEquipmentSplitGoodsIndicator**: `boolean`

The indication of whether or not the goods in this supply chain consignment are split across more than one piece of
transport equipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentSplitGoodsIndicator

***

### transportEvent?

> `optional` **transportEvent**: [`ITransportEvent`](ITransportEvent.md)[]

An event occurring during the transport of this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transportEvent

***

### transportPackage?

> `optional` **transportPackage**: [`IPackage`](IPackage.md)[]

Transport packages for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transportPackage

***

### transportService?

> `optional` **transportService**: [`IService`](IService.md)[]

A transport service for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transportService

***

### transportServicePaymentArrangementCode?

> `optional` **transportServicePaymentArrangementCode**: [`TransportServicePaymentArrangementCodeList`](../type-aliases/TransportServicePaymentArrangementCodeList.md)

The code specifying the payment arrangements for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transportServicePaymentArrangementCode

***

### transportServicesBuyerParty?

> `optional` **transportServicesBuyerParty**: [`ITradeParty`](ITradeParty.md)[]

The party which is the buyer of the transport services for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transportServicesBuyerParty

***

### transportSplitDescription?

> `optional` **transportSplitDescription**: `string`

The textual description of the transport split of this referenced supply chain consignment across different transport
means or transport equipment.

#### See

https://vocabulary.uncefact.org/transportSplitDescription

***

### transshipmentLocation?

> `optional` **transshipmentLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A transshipment location for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transshipmentLocation

***

### transshipmentPermissionIndicator?

> `optional` **transshipmentPermissionIndicator**: `boolean`

The indication of whether or not transshipment is permitted for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transshipmentPermissionIndicator

***

### unloadingBaseportLocation?

> `optional` **unloadingBaseportLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)

The baseport location at which this supply chain consignment is to be unloaded from a means of transport according to
the transport contract.

#### See

https://vocabulary.uncefact.org/unloadingBaseportLocation

***

### unloadingLocation?

> `optional` **unloadingLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

The logistics location where the supply chain consignment is unloaded.

#### See

https://vocabulary.uncefact.org/unloadingLocation

***

### unloadingSequenceNumeric?

> `optional` **unloadingSequenceNumeric**: `string`

The unloading sequence number for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/unloadingSequenceNumeric

***

### utilizedTransportEquipment?

> `optional` **utilizedTransportEquipment**: [`ILogisticsTransportEquipment`](ILogisticsTransportEquipment.md)[]

Logistics transport equipment utilized for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/utilizedTransportEquipment

***

### vanningEvent?

> `optional` **vanningEvent**: [`ITransportEvent`](ITransportEvent.md)[]

The vanning event for this supply chain consignment, i.e. the loading of this consignment at the place of original
despatch.

#### See

https://vocabulary.uncefact.org/vanningEvent

***

### volumeUnitGrossVolumeMeasure?

> `optional` **volumeUnitGrossVolumeMeasure**: [`IVolumeUnitMeasureType`](IVolumeUnitMeasureType.md)[]

A measure of the gross volume, normally calculated by multiplying the maximum length, width and height of this supply
chain consignment.

#### See

https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure

***

### volumeUnitNetVolumeMeasure?

> `optional` **volumeUnitNetVolumeMeasure**: [`IVolumeUnitMeasureType`](IVolumeUnitMeasureType.md)[]

A measure of the net volume of this supply chain consignment item which excludes all packaging.

#### See

https://vocabulary.uncefact.org/volumeUnitNetVolumeMeasure

***

### warehouseArrivalDateTime?

> `optional` **warehouseArrivalDateTime**: `string`

The date, time, date time or other date time value of the arrival of this supply chain consignment at a warehouse.

#### See

https://vocabulary.uncefact.org/warehouseArrivalDateTime

***

### warehouseDepositorParty?

> `optional` **warehouseDepositorParty**: [`ITradeParty`](ITradeParty.md)[]

A party depositing goods in a warehouse for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/warehouseDepositorParty

***

### warehouseKeeperParty?

> `optional` **warehouseKeeperParty**: [`ITradeParty`](ITradeParty.md)[]

A party taking responsibility for goods stored in a warehouse for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/warehouseKeeperParty

***

### warehouseOperatorParty?

> `optional` **warehouseOperatorParty**: [`ITradeParty`](ITradeParty.md)[]

A party that operates a warehouse in which goods are stored for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/warehouseOperatorParty

***

### warehouseStorageEvent?

> `optional` **warehouseStorageEvent**: [`ITransportEvent`](ITransportEvent.md)[]

A warehouse storage event for this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/warehouseStorageEvent

***

### weightUnitChargeableWeightMeasure?

> `optional` **weightUnitChargeableWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)

A measure of a chargeable weight of this supply chain consignment.

#### See

https://vocabulary.uncefact.org/weightUnitChargeableWeightMeasure

***

### weightUnitGrossWeightMeasure?

> `optional` **weightUnitGrossWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

A measure of the gross weight (mass) of this supply chain consignment which includes the weight of packaging but which
excludes the weight of any transport equipment.

#### See

https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure

***

### weightUnitNetWeightMeasure?

> `optional` **weightUnitNetWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

A measure of the net weight (mass) of this consignment which excludes the weight of packaging of this supply chain
consignment and that of any transport equipment.

#### See

https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
