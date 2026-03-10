# Interface: IUneceConsignment

A separately identifiable collection of goods items to be transported or available to be transported from one consignor
to one consignee in a supply chain via one or more modes of transport where each consignment is the subject of one
single transport contract.
A referenced, separately identifiable collection of goods items to be transported or available to be transported from
one consignor to one consignee via one or more modes of transport where each consignment is the subject of one single
transport contract.

## See

https://vocabulary.uncefact.org/Consignment

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Consignment"`

JSON-LD Type.

***

### applicableAllowanceCharge?

> `optional` **applicableAllowanceCharge**: [`IUneceTradeAllowanceCharge`](IUneceTradeAllowanceCharge.md)[]

An allowance or charge applicable to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/applicableAllowanceCharge

***

### applicableCargoInsurance?

> `optional` **applicableCargoInsurance**: [`IUneceCargoInsurance`](IUneceCargoInsurance.md)

The cargo insurance applicable to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/applicableCargoInsurance

***

### applicableCurrencyExchange?

> `optional` **applicableCurrencyExchange**: [`IUneceCurrencyExchange`](IUneceCurrencyExchange.md)[]

A currency exchange applicable to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/applicableCurrencyExchange

***

### applicableCustomsValuation?

> `optional` **applicableCustomsValuation**: [`IUneceCustomsValuation`](IUneceCustomsValuation.md)[]

A cross-border customs valuation applicable to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/applicableCustomsValuation

***

### applicableDangerousGoods?

> `optional` **applicableDangerousGoods**: [`IUneceDangerousGoods`](IUneceDangerousGoods.md)

Dangerous goods applicable to the transport of this supply chain consignment.

#### See

https://vocabulary.uncefact.org/applicableDangerousGoods

***

### applicableRegulatoryProcedure?

> `optional` **applicableRegulatoryProcedure**: [`IUneceRegulatoryProcedure`](IUneceRegulatoryProcedure.md)[]

A cross-border regulatory procedure applicable to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/applicableRegulatoryProcedure

***

### applicableServiceCharge?

> `optional` **applicableServiceCharge**: [`IUneceServiceCharge`](IUneceServiceCharge.md)[]

A logistics service charge applicable to this supply chain consignment, such as freight or insurance charges.

#### See

https://vocabulary.uncefact.org/applicableServiceCharge

***

### associatedDocument?

> `optional` **associatedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document associated with this supply chain consignment, such as the certificate of origin or dangerous
goods note.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### associatedInvoiceAmount?

> `optional` **associatedInvoiceAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of an invoice associated with this supply chain consignment.

#### See

https://vocabulary.uncefact.org/associatedInvoiceAmount

***

### associatedInvoiceDiscountAmount?

> `optional` **associatedInvoiceDiscountAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

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

> `optional` **associatedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party associated with this supply chain consignment.

#### See

https://vocabulary.uncefact.org/associatedParty

***

### atArrivalTransportMovement?

> `optional` **atArrivalTransportMovement**: [`IUneceTransportMovement`](IUneceTransportMovement.md)

The logistics transport movement for this supply chain consignment at the point when the means of transport arrives in a
country or at a regional border.

#### See

https://vocabulary.uncefact.org/atArrivalTransportMovement

***

### atDepartureTransportMovement?

> `optional` **atDepartureTransportMovement**: [`IUneceTransportMovement`](IUneceTransportMovement.md)

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

> `optional` **bondedWarehouseStorageEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A bonded warehouse storage event for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/bondedWarehouseStorageEvent

***

### borderCrossingTransportMovement?

> `optional` **borderCrossingTransportMovement**: [`IUneceTransportMovement`](IUneceTransportMovement.md)[]

A border crossing logistics transport movement for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/borderCrossingTransportMovement

***

### cODAmount?

> `optional` **cODAmount**: [`IUneceAmountType`](IUneceAmountType.md)

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

> `optional` **carrierAcceptanceLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location where this supply chain consignment will be, or has been, accepted by the carrier.

#### See

https://vocabulary.uncefact.org/carrierAcceptanceLocation

***

### carrierAgentParty?

> `optional` **carrierAgentParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party acting as the agent of the carrier for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/carrierAgentParty

***

### carrierAssignedId?

> `optional` **carrierAssignedId**: `string` \| `IJsonLdValueObject`

The unique identifier assigned by the carrier to this referenced supply chain consignment, such as a booking reference
number when cargo space is reserved prior to loading.

#### See

https://vocabulary.uncefact.org/carrierAssignedId

***

### carrierParty?

> `optional` **carrierParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

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

> `optional` **chargeableTransportationStageQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of separately chargeable transportation stages to be covered by this supply chain consignment.

#### See

https://vocabulary.uncefact.org/chargeableTransportationStageQuantity

***

### classificationDocument?

> `optional` **classificationDocument**: [`IUneceDocument`](IUneceDocument.md)

The referenced classification document for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/classificationDocument

***

### connectingCarrierParty?

> `optional` **connectingCarrierParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A connecting carrier party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/connectingCarrierParty

***

### consigneeAgentParty?

> `optional` **consigneeAgentParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party authorized to act for or on behalf of the consignee for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/consigneeAgentParty

***

### consigneeAssignedId?

> `optional` **consigneeAssignedId**: `string` \| `IJsonLdValueObject`

The unique identifier assigned by the consignee to this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/consigneeAssignedId

***

### consigneeParty?

> `optional` **consigneeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The consignee party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/consigneeParty

***

### consigneeReceiptLocation?

> `optional` **consigneeReceiptLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location at which this supply chain consignment will be or has been received by the consignee.

#### See

https://vocabulary.uncefact.org/consigneeReceiptLocation

***

### consignmentItemQuantity?

> `optional` **consignmentItemQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of consignment items separately defined for transport or customs purposes within this supply chain
consignment.

#### See

https://vocabulary.uncefact.org/consignmentItemQuantity

***

### consignorAgentParty?

> `optional` **consignorAgentParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party authorized to act for or on behalf of the consignor for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/consignorAgentParty

***

### consignorAssignedId?

> `optional` **consignorAssignedId**: `string` \| `IJsonLdValueObject`

The unique identifier assigned by the consignor to this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/consignorAssignedId

***

### consignorParty?

> `optional` **consignorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The consignor party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/consignorParty

***

### consignorProvidedBorderClearanceInstructions?

> `optional` **consignorProvidedBorderClearanceInstructions**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)[]

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

> `optional` **consolidatorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

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

> `optional` **contractId**: `string` \| `IJsonLdValueObject`

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

> `optional` **currencyServiceChargeCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)[]

A code specifying a service charge currency for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/currencyServiceChargeCurrencyCode

***

### currencyServiceTariffCurrencyCode?

> `optional` **currencyServiceTariffCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)[]

A code specifying a service tariff currency for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/currencyServiceTariffCurrencyCode

***

### customsExportAgentParty?

> `optional` **customsExportAgentParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party acting as an agent for, or on behalf of, the consignor with respect to the customs export procedures for this
supply chain consignment.

#### See

https://vocabulary.uncefact.org/customsExportAgentParty

***

### customsId?

> `optional` **customsId**: `string` \| `IJsonLdValueObject`

A unique identifier, for customs purposes, for this consignment.

#### See

https://vocabulary.uncefact.org/customsId

***

### customsImportAgentParty?

> `optional` **customsImportAgentParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party acting as an agent for, or on behalf of, the consignee with respect to the customs import procedures for this
supply chain consignment.

#### See

https://vocabulary.uncefact.org/customsImportAgentParty

***

### customsRequiredInvoiceDocument?

> `optional` **customsRequiredInvoiceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced invoice document required by customs for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/customsRequiredInvoiceDocument

***

### customsTransitAgentParty?

> `optional` **customsTransitAgentParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party acting as an agent for, or on behalf of, the consignor with respect to customs transit procedures for this
supply chain consignment.

#### See

https://vocabulary.uncefact.org/customsTransitAgentParty

***

### dangerousGoodsNotifierParty?

> `optional` **dangerousGoodsNotifierParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party responsible for providing the dangerous goods notification in accordance with the dangerous goods regulations
relevant for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/dangerousGoodsNotifierParty

***

### declaredForCustomsLocation?

> `optional` **declaredForCustomsLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location of this supply chain consignment as declared for customs.

#### See

https://vocabulary.uncefact.org/declaredForCustomsLocation

***

### declaredValueForCarriageAmount?

> `optional` **declaredValueForCarriageAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of this supply chain consignment as declared by the shipper or his agent for the purpose of varying
the carrier's level of liability from that provided in the contract of carriage, in case of loss or damage to goods or
delayed delivery.

#### See

https://vocabulary.uncefact.org/declaredValueForCarriageAmount

***

### declaredValueForCustomsAmount?

> `optional` **declaredValueForCustomsAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value declared for customs purposes for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/declaredValueForCustomsAmount

***

### deconsolidatorParty?

> `optional` **deconsolidatorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

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

> `optional` **deliveryInstructions**: [`IUneceDeliveryInstructions`](IUneceDeliveryInstructions.md)[]

Delivery instructions for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/deliveryInstructions

***

### deliveryParty?

> `optional` **deliveryParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party to whom this supply chain consignment will be, or has been, delivered.

#### See

https://vocabulary.uncefact.org/deliveryParty

***

### deliveryTransportEvent?

> `optional` **deliveryTransportEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

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

> `optional` **despatchParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party from whom this supply chain consignment will be or has been despatched.

#### See

https://vocabulary.uncefact.org/despatchParty

***

### destinationCountry?

> `optional` **destinationCountry**: [`IUneceCountry`](IUneceCountry.md)

The destination country for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/destinationCountry

***

### devanningEvent?

> `optional` **devanningEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A transport devanning event for this referenced supply chain consignment, i.e. the unloading of this consignment at the
place of delivery.

#### See

https://vocabulary.uncefact.org/devanningEvent

***

### estimatedApplicableServiceCharge?

> `optional` **estimatedApplicableServiceCharge**: [`IUneceServiceCharge`](IUneceServiceCharge.md)[]

An estimated logistics service charge applicable to this supply chain consignment, such as freight or insurance charges.

#### See

https://vocabulary.uncefact.org/estimatedApplicableServiceCharge

***

### examinationEvent?

> `optional` **examinationEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

An examination event for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/examinationEvent

***

### exportCountry?

> `optional` **exportCountry**: [`IUneceCountry`](IUneceCountry.md)

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

> `optional` **exportGeopoliticalRegion**: [`IUneceGeopoliticalRegion`](IUneceGeopoliticalRegion.md)

The geopolitical region of export for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/exportGeopoliticalRegion

***

### exporterParty?

> `optional` **exporterParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party who exports this supply chain consignment.

#### See

https://vocabulary.uncefact.org/exporterParty

***

### fOBAmount?

> `optional` **fOBAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value that has to be, or has been, paid for this supply chain consignment as calculated under FOB (Free on
Board) delivery terms.

#### See

https://vocabulary.uncefact.org/fOBAmount

***

### finalDestinationCountry?

> `optional` **finalDestinationCountry**: [`IUneceCountry`](IUneceCountry.md)

The final destination country for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/finalDestinationCountry

***

### finalDestinationLocation?

> `optional` **finalDestinationLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The final destination location for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/finalDestinationLocation

***

### freightForwarderAssignedId?

> `optional` **freightForwarderAssignedId**: `string` \| `IJsonLdValueObject`

The unique identifier assigned by the freight forwarder to this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/freightForwarderAssignedId

***

### freightForwarderParty?

> `optional` **freightForwarderParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The freight forwarder party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/freightForwarderParty

***

### globalId?

> `optional` **globalId**: `string` \| `IJsonLdValueObject`

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

> `optional` **groupingCentreParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A grouping centre party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/groupingCentreParty

***

### handlingInstructions?

> `optional` **handlingInstructions**: [`IUneceHandlingInstructions`](IUneceHandlingInstructions.md)[]

Handling instructions for this supply chain consignment, such as where or how specified packages or containers are to be
loaded on a means of transport.

#### See

https://vocabulary.uncefact.org/handlingInstructions

***

### haulageInstructions?

> `optional` **haulageInstructions**: [`IUneceHaulageInstructions`](IUneceHaulageInstructions.md)[]

Haulage instructions for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/haulageInstructions

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

A unique identifier for this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/identifier

***

### importCountry?

> `optional` **importCountry**: [`IUneceCountry`](IUneceCountry.md)

The import country for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/importCountry

***

### importerParty?

> `optional` **importerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party who imports this supply chain consignment.

#### See

https://vocabulary.uncefact.org/importerParty

***

### includedConsignment?

> `optional` **includedConsignment**: `IUneceConsignment`[]

A referenced consignment included in this supply chain consignment.

#### See

https://vocabulary.uncefact.org/includedConsignment

***

### includedConsignmentItem?

> `optional` **includedConsignmentItem**: [`IUneceConsignmentItem`](IUneceConsignmentItem.md)[]

A referenced consignment item included in this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/includedConsignmentItem

***

### includedTareGrossWeightMeasure?

> `optional` **includedTareGrossWeightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

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

> `optional` **insuranceApplicableCurrencyExchange**: [`IUneceCurrencyExchange`](IUneceCurrencyExchange.md)[]

A currency exchange applicable to an insurance charge for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/insuranceApplicableCurrencyExchange

***

### insurancePremiumAmount?

> `optional` **insurancePremiumAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the insurance premium for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/insurancePremiumAmount

***

### insuranceValueAmount?

> `optional` **insuranceValueAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of this supply chain consignment as covered by an insurance policy.

#### See

https://vocabulary.uncefact.org/insuranceValueAmount

***

### intermediateConsigneeParty?

> `optional` **intermediateConsigneeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party that is an intermediate consignee for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/intermediateConsigneeParty

***

### invoiceApplicableCurrencyExchange?

> `optional` **invoiceApplicableCurrencyExchange**: [`IUneceCurrencyExchange`](IUneceCurrencyExchange.md)[]

A currency exchange applicable to the invoice for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/invoiceApplicableCurrencyExchange

***

### invoiceeAssociatedParty?

> `optional` **invoiceeAssociatedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

An invoicee trade party associated with this supply chain consignment.

#### See

https://vocabulary.uncefact.org/invoiceeAssociatedParty

***

### linearUnitLoadingLengthMeasure?

> `optional` **linearUnitLoadingLengthMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)[]

A measure of the loading length which is the length along a means of transport over which the complete width and height
is needed for loading all the goods items in this supply chain consignment.

#### See

https://vocabulary.uncefact.org/linearUnitLoadingLengthMeasure

***

### loadingBaseportLocation?

> `optional` **loadingBaseportLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

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

> `optional` **loadingInstructions**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)[]

Loading instructions for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/loadingInstructions

***

### loadingListQuantity?

> `optional` **loadingListQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of loading lists, manifests or similar documents for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/loadingListQuantity

***

### loadingLocation?

> `optional` **loadingLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

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

> `optional` **localConsigneeAgentParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The local party authorized to act for or on behalf of the consignee for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/localConsigneeAgentParty

***

### mainCarriageTransportMovement?

> `optional` **mainCarriageTransportMovement**: [`IUneceTransportMovement`](IUneceTransportMovement.md)[]

A main carriage logistics transport movement for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/mainCarriageTransportMovement

***

### manifestAssociatedDocument?

> `optional` **manifestAssociatedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced manifest document associated to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/manifestAssociatedDocument

***

### natureIdentificationCargo?

> `optional` **natureIdentificationCargo**: [`IUneceCargo`](IUneceCargo.md)

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

> `optional` **notifiedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party who has been or will be notified about this supply chain consignment.

#### See

https://vocabulary.uncefact.org/notifiedParty

***

### onCarriageTransportMovement?

> `optional` **onCarriageTransportMovement**: [`IUneceTransportMovement`](IUneceTransportMovement.md)[]

An on-carriage logistics transport movement for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/onCarriageTransportMovement

***

### onwardRoutingLocation?

> `optional` **onwardRoutingLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

An onward routing location for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/onwardRoutingLocation

***

### originCountry?

> `optional` **originCountry**: [`IUneceCountry`](IUneceCountry.md)[]

A country of origin for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/originCountry

***

### originGeopoliticalRegion?

> `optional` **originGeopoliticalRegion**: [`IUneceGeopoliticalRegion`](IUneceGeopoliticalRegion.md)

The geopolitical region of origin for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/originGeopoliticalRegion

***

### originalDespatchLocation?

> `optional` **originalDespatchLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location from which this supply chain consignment was originally despatched.

#### See

https://vocabulary.uncefact.org/originalDespatchLocation

***

### packageQuantity?

> `optional` **packageQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

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

> `optional` **physicalShippingMarks**: [`IUneceShippingMarks`](IUneceShippingMarks.md)[]

Physical logistics shipping marks and barcoding information related to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/physicalShippingMarks

***

### pickUpEvent?

> `optional` **pickUpEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

The pick-up event for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/pickUpEvent

***

### pickUpParty?

> `optional` **pickUpParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The pick-up trade party for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/pickUpParty

***

### preCarriageTransportMovement?

> `optional` **preCarriageTransportMovement**: [`IUneceTransportMovement`](IUneceTransportMovement.md)[]

A pre-carriage logistics transport movement for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/preCarriageTransportMovement

***

### previousAdministrativeDocument?

> `optional` **previousAdministrativeDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A previous administrative referenced document for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/previousAdministrativeDocument

***

### reExportCountry?

> `optional` **reExportCountry**: [`IUneceCountry`](IUneceCountry.md)[]

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

> `optional` **relatedTradeTransaction**: [`IUneceSupplyChainTradeTransaction`](IUneceSupplyChainTradeTransaction.md)[]

A trade transaction related to this supply chain consignment.

#### See

https://vocabulary.uncefact.org/relatedTradeTransaction

***

### reportedLogisticsStatus?

> `optional` **reportedLogisticsStatus**: [`IUneceLogisticsStatus`](IUneceLogisticsStatus.md)[]

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

> `optional` **serviceChargeApplicableCurrencyExchange**: [`IUneceCurrencyExchange`](IUneceCurrencyExchange.md)[]

A currency exchange applicable to a service charge for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/serviceChargeApplicableCurrencyExchange

***

### shipFromParty?

> `optional` **shipFromParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

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

> `optional` **shipToParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

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

> `optional` **specifiedDeliveryTerms**: [`IUneceDeliveryTerms`](IUneceDeliveryTerms.md)[]

Delivery terms specified for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/specifiedDeliveryTerms

***

### specifiedInspectionEvent?

> `optional` **specifiedInspectionEvent**: [`IUneceInspectionEvent`](IUneceInspectionEvent.md)[]

An inspection event specified for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/specifiedInspectionEvent

***

### specifiedLogisticsStatus?

> `optional` **specifiedLogisticsStatus**: [`IUneceLogisticsStatus`](IUneceLogisticsStatus.md)[]

Logistics status information specified for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsStatus

***

### specifiedRiskAnalysisResult?

> `optional` **specifiedRiskAnalysisResult**: [`IUneceRiskAnalysisResult`](IUneceRiskAnalysisResult.md)[]

A result of a logistics risk analysis calculation specified for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/specifiedRiskAnalysisResult

***

### specifiedSupplyChainReference?

> `optional` **specifiedSupplyChainReference**: [`IUneceSupplyChainReference`](IUneceSupplyChainReference.md)[]

A reference specified for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainReference

***

### specifiedTransportMovement?

> `optional` **specifiedTransportMovement**: [`IUneceTransportMovement`](IUneceTransportMovement.md)[]

A logistics transport movement specified for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/specifiedTransportMovement

***

### statementNote?

> `optional` **statementNote**: [`IUneceNote`](IUneceNote.md)[]

A statement note for this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/statementNote

***

### storageEvent?

> `optional` **storageEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

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

> `optional` **totalAllowanceChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The total monetary value of all allowances and charges for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/totalAllowanceChargeAmount

***

### totalChargeAmount?

> `optional` **totalChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The total monetary value of all freight and other service charges for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/totalChargeAmount

***

### totalCollectChargeAmount?

> `optional` **totalCollectChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The total monetary value of all freight and other service charges which are to be collected from the consignee at or
after delivery for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/totalCollectChargeAmount

***

### totalDisbursementAmount?

> `optional` **totalDisbursementAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of total disbursement for this supply chain consignment, such as the amount to be collected by the
carrier according to the order given by the consignor.

#### See

https://vocabulary.uncefact.org/totalDisbursementAmount

***

### totalExportExitToImportEntryChargeAmount?

> `optional` **totalExportExitToImportEntryChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the total charge or charges of freight, insurance and other services for this supply chain
consignment calculated from the export exit location to the import entry location.

#### See

https://vocabulary.uncefact.org/totalExportExitToImportEntryChargeAmount

***

### totalPrepaidChargeAmount?

> `optional` **totalPrepaidChargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The total monetary value of all freight and other service charges which have been paid in advance for this supply chain
consignment.

#### See

https://vocabulary.uncefact.org/totalPrepaidChargeAmount

***

### totalTareWeightMeasure?

> `optional` **totalTareWeightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the total tare weight (mass) of this supply chain consignment.

#### See

https://vocabulary.uncefact.org/totalTareWeightMeasure

***

### tradedParcelId?

> `optional` **tradedParcelId**: `string` \| `IJsonLdValueObject`

A traded parcel identifier for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/tradedParcelId

***

### transitCountry?

> `optional` **transitCountry**: [`IUneceCountry`](IUneceCountry.md)[]

A transit country for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transitCountry

***

### transitLocation?

> `optional` **transitLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A location of transit for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transitLocation

***

### transportContractDocument?

> `optional` **transportContractDocument**: [`IUneceDocument`](IUneceDocument.md)

The referenced transport contract document for this supply chain consignment, such as an airwaybill or a seawaybill.

#### See

https://vocabulary.uncefact.org/transportContractDocument

***

### transportEquipmentQuantity?

> `optional` **transportEquipmentQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

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

> `optional` **transportEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

An event occurring during the transport of this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transportEvent

***

### transportPackage?

> `optional` **transportPackage**: [`IUnecePackage`](IUnecePackage.md)[]

Transport packages for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transportPackage

***

### transportService?

> `optional` **transportService**: [`IUneceService`](IUneceService.md)[]

A transport service for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transportService

***

### transportServicePaymentArrangementCode?

> `optional` **transportServicePaymentArrangementCode**: [`UneceTransportServicePaymentArrangementCodeList`](../type-aliases/UneceTransportServicePaymentArrangementCodeList.md)

The code specifying the payment arrangements for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/transportServicePaymentArrangementCode

***

### transportServicesBuyerParty?

> `optional` **transportServicesBuyerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

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

> `optional` **transshipmentLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

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

> `optional` **unloadingBaseportLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The baseport location at which this supply chain consignment is to be unloaded from a means of transport according to
the transport contract.

#### See

https://vocabulary.uncefact.org/unloadingBaseportLocation

***

### unloadingLocation?

> `optional` **unloadingLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

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

> `optional` **utilizedTransportEquipment**: [`IUneceLogisticsTransportEquipment`](IUneceLogisticsTransportEquipment.md)[]

Logistics transport equipment utilized for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/utilizedTransportEquipment

***

### vanningEvent?

> `optional` **vanningEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

The vanning event for this supply chain consignment, i.e. the loading of this consignment at the place of original
despatch.

#### See

https://vocabulary.uncefact.org/vanningEvent

***

### volumeUnitGrossVolumeMeasure?

> `optional` **volumeUnitGrossVolumeMeasure**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)[]

A measure of the gross volume, normally calculated by multiplying the maximum length, width and height of this supply
chain consignment.

#### See

https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure

***

### volumeUnitNetVolumeMeasure?

> `optional` **volumeUnitNetVolumeMeasure**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)[]

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

> `optional` **warehouseDepositorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party depositing goods in a warehouse for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/warehouseDepositorParty

***

### warehouseKeeperParty?

> `optional` **warehouseKeeperParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party taking responsibility for goods stored in a warehouse for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/warehouseKeeperParty

***

### warehouseOperatorParty?

> `optional` **warehouseOperatorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party that operates a warehouse in which goods are stored for this supply chain consignment.

#### See

https://vocabulary.uncefact.org/warehouseOperatorParty

***

### warehouseStorageEvent?

> `optional` **warehouseStorageEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A warehouse storage event for this referenced supply chain consignment.

#### See

https://vocabulary.uncefact.org/warehouseStorageEvent

***

### weightUnitChargeableWeightMeasure?

> `optional` **weightUnitChargeableWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of a chargeable weight of this supply chain consignment.

#### See

https://vocabulary.uncefact.org/weightUnitChargeableWeightMeasure

***

### weightUnitGrossWeightMeasure?

> `optional` **weightUnitGrossWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the gross weight (mass) of this supply chain consignment which includes the weight of packaging but which
excludes the weight of any transport equipment.

#### See

https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure

***

### weightUnitNetWeightMeasure?

> `optional` **weightUnitNetWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the net weight (mass) of this consignment which excludes the weight of packaging of this supply chain
consignment and that of any transport equipment.

#### See

https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
