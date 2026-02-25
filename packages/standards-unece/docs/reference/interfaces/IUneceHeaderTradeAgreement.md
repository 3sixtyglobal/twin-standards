# Interface: IUneceHeaderTradeAgreement

The contractual terms of a header trade agreement.

## See

https://vocabulary.uncefact.org/HeaderTradeAgreement

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"HeaderTradeAgreement"`

JSON-LD Type.

***

### additionalDocument?

> `optional` **additionalDocument**: [`IUneceDocument`](IUneceDocument.md)[]

An additional document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/additionalDocument

***

### applicableDeliveryTerms?

> `optional` **applicableDeliveryTerms**: [`IUneceDeliveryTerms`](IUneceDeliveryTerms.md)

The terms of delivery applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableDeliveryTerms

***

### applicableForecastTerms?

> `optional` **applicableForecastTerms**: [`IUneceForecastTerms`](IUneceForecastTerms.md)

The supply chain forecast terms applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableForecastTerms

***

### applicableLogisticsLocation?

> `optional` **applicableLogisticsLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location or place applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableLogisticsLocation

***

### applicableLocation?

> `optional` **applicableLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location or place applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableLocation

***

### applicablePaymentTerms?

> `optional` **applicablePaymentTerms**: [`IUnecePaymentTerms`](IUnecePaymentTerms.md)

The payment terms applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicablePaymentTerms

***

### applicableRegulatoryProcedure?

> `optional` **applicableRegulatoryProcedure**: [`IUneceRegulatoryProcedure`](IUneceRegulatoryProcedure.md)[]

A cross-border regulatory procedure applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableRegulatoryProcedure

***

### blanketOrderDocument?

> `optional` **blanketOrderDocument**: [`IUneceDocument`](IUneceDocument.md)

The blanket order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/blanketOrderDocument

***

### buyerAgentParty?

> `optional` **buyerAgentParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The buyer agent party for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerAgentParty

***

### buyerApprovedDateTime?

> `optional` **buyerApprovedDateTime**: `string`

The date, time, date time, or other date time value of approval by the buyer for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerApprovedDateTime

***

### buyerAssignedAccountantParty?

> `optional` **buyerAssignedAccountantParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party assigned as an accountant by the buyer for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerAssignedAccountantParty

***

### buyerOrderDocument?

> `optional` **buyerOrderDocument**: [`IUneceDocument`](IUneceDocument.md)

The buyer generated order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerOrderDocument

***

### buyerParty?

> `optional` **buyerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The buyer party for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerParty

***

### buyerReference?

> `optional` **buyerReference**: `string`

A buyer reference, expressed as text, for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerReference

***

### buyerRequisitionerParty?

> `optional` **buyerRequisitionerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party who is a buyer requisitioner in this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerRequisitionerParty

***

### buyerTaxRepresentativeParty?

> `optional` **buyerTaxRepresentativeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party acting as a tax representative for the buyer for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerTaxRepresentativeParty

***

### carrierParty?

> `optional` **carrierParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The carrier party, at header level, for this trade agreement.

#### See

https://vocabulary.uncefact.org/carrierParty

***

### catalogueDocument?

> `optional` **catalogueDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A catalogue document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueDocument

***

### catalogueInformationProviderParty?

> `optional` **catalogueInformationProviderParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party that provides catalogue information for this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueInformationProviderParty

***

### catalogueInformationReceiverParty?

> `optional` **catalogueInformationReceiverParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party that receives catalogue information for this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueInformationReceiverParty

***

### catalogueRequestDocument?

> `optional` **catalogueRequestDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A catalogue request document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueRequestDocument

***

### catalogueSubscriptionDocument?

> `optional` **catalogueSubscriptionDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A catalogue subscription document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueSubscriptionDocument

***

### contractDocument?

> `optional` **contractDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A contract document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/contractDocument

***

### demandForecastDocument?

> `optional` **demandForecastDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A demand forecast document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/demandForecastDocument

***

### engineeringChangeDocument?

> `optional` **engineeringChangeDocument**: [`IUneceDocument`](IUneceDocument.md)

The engineering change document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/engineeringChangeDocument

***

### exportLicenceDocument?

> `optional` **exportLicenceDocument**: [`IUneceDocument`](IUneceDocument.md)

The export licence document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/exportLicenceDocument

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this header trade agreement.

#### See

https://vocabulary.uncefact.org/identifier

***

### impactCode?

> `optional` **impactCode**: `string`

The code specifying the impact for this header trade agreement.

#### See

https://vocabulary.uncefact.org/impactCode

***

### importLicenceDocument?

> `optional` **importLicenceDocument**: [`IUneceDocument`](IUneceDocument.md)

The import licence document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/importLicenceDocument

***

### letterOfCreditDocument?

> `optional` **letterOfCreditDocument**: [`IUneceDocument`](IUneceDocument.md)

The letter of credit document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/letterOfCreditDocument

***

### marketplaceOrderDocument?

> `optional` **marketplaceOrderDocument**: [`IUneceDocument`](IUneceDocument.md)

The marketplace generated order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/marketplaceOrderDocument

***

### orderResponseDocument?

> `optional` **orderResponseDocument**: [`IUneceDocument`](IUneceDocument.md)

The order response document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/orderResponseDocument

***

### originalOrderDocument?

> `optional` **originalOrderDocument**: [`IUneceDocument`](IUneceDocument.md)

The original order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/originalOrderDocument

***

### previousOrderChangeDocument?

> `optional` **previousOrderChangeDocument**: [`IUneceDocument`](IUneceDocument.md)

The previous order change document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/previousOrderChangeDocument

***

### previousOrderDocument?

> `optional` **previousOrderDocument**: [`IUneceDocument`](IUneceDocument.md)

The previous order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/previousOrderDocument

***

### previousOrderResponseDocument?

> `optional` **previousOrderResponseDocument**: [`IUneceDocument`](IUneceDocument.md)

The previous order response document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/previousOrderResponseDocument

***

### priceListDocument?

> `optional` **priceListDocument**: [`IUneceDocument`](IUneceDocument.md)

The price list document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/priceListDocument

***

### pricingBaseApplicableLocation?

> `optional` **pricingBaseApplicableLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The logistics location applicable to the pricing base for this header trade agreement.

#### See

https://vocabulary.uncefact.org/pricingBaseApplicableLocation

***

### primeContractSellerParty?

> `optional` **primeContractSellerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The seller party acting as the prime contractor for this header trade agreement.

#### See

https://vocabulary.uncefact.org/primeContractSellerParty

***

### priorityCode?

> `optional` **priorityCode**: `string`

The code specifying the priority for this header trade agreement.

#### See

https://vocabulary.uncefact.org/priorityCode

***

### priorityDescriptionCode?

> `optional` **priorityDescriptionCode**: [`UnecePriorityDescriptionCodeList`](../type-aliases/UnecePriorityDescriptionCodeList.md)

The code specifying the delivery priority for this header trade agreement.

#### See

https://vocabulary.uncefact.org/priorityDescriptionCode

***

### procurementParty?

> `optional` **procurementParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The procurement party for this header trade agreement.

#### See

https://vocabulary.uncefact.org/procurementParty

***

### productEndUserParty?

> `optional` **productEndUserParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party acting as the end user for the products in this header trade agreement.

#### See

https://vocabulary.uncefact.org/productEndUserParty

***

### promotionalDealDocument?

> `optional` **promotionalDealDocument**: [`IUneceDocument`](IUneceDocument.md)

The promotional deal document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/promotionalDealDocument

***

### purchaseConditionsDocument?

> `optional` **purchaseConditionsDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A purchase conditions document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/purchaseConditionsDocument

***

### quotationDocument?

> `optional` **quotationDocument**: [`IUneceDocument`](IUneceDocument.md)

The quotation document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationDocument

***

### quotationProposalDocument?

> `optional` **quotationProposalDocument**: [`IUneceDocument`](IUneceDocument.md)

The quotation proposal document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationProposalDocument

***

### quotationProposalResponseDocument?

> `optional` **quotationProposalResponseDocument**: [`IUneceDocument`](IUneceDocument.md)

The quotation proposal response document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationProposalResponseDocument

***

### quotationRequestDocument?

> `optional` **quotationRequestDocument**: [`IUneceDocument`](IUneceDocument.md)

The quotation request document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationRequestDocument

***

### quotationRequestResponseDocument?

> `optional` **quotationRequestResponseDocument**: [`IUneceDocument`](IUneceDocument.md)

The quotation request response document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationRequestResponseDocument

***

### quoteReferencedWorkflowObject?

> `optional` **quoteReferencedWorkflowObject**: [`IUneceWorkflowObject`](IUneceWorkflowObject.md)

The quote trade workflow object referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quoteReferencedWorkflowObject

***

### reference?

> `optional` **reference**: `string`

A reference, expressed as text, for this header trade agreement.

#### See

https://vocabulary.uncefact.org/reference

***

### relevantParty?

> `optional` **relevantParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A relevant party for this header trade agreement.

#### See

https://vocabulary.uncefact.org/relevantParty

***

### requisitionDocument?

> `optional` **requisitionDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A requisition document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/requisitionDocument

***

### requisitionerDocument?

> `optional` **requisitionerDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A requisitioner document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/requisitionerDocument

***

### revisionId?

> `optional` **revisionId**: `string`

An identifier for the revision of this header trade agreement.

#### See

https://vocabulary.uncefact.org/revisionId

***

### salesAgentParty?

> `optional` **salesAgentParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The agent party representing the seller for this header trade agreement.

#### See

https://vocabulary.uncefact.org/salesAgentParty

***

### salesConditionsDocument?

> `optional` **salesConditionsDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A sales conditions document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/salesConditionsDocument

***

### salesReportDocument?

> `optional` **salesReportDocument**: [`IUneceDocument`](IUneceDocument.md)

The sales report document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/salesReportDocument

***

### sellerAssignedAccountantParty?

> `optional` **sellerAssignedAccountantParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party assigned as an accountant by the seller for this header trade agreement.

#### See

https://vocabulary.uncefact.org/sellerAssignedAccountantParty

***

### sellerOrderDocument?

> `optional` **sellerOrderDocument**: [`IUneceDocument`](IUneceDocument.md)

The seller generated order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/sellerOrderDocument

***

### sellerParty?

> `optional` **sellerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The seller party for this header trade agreement.

#### See

https://vocabulary.uncefact.org/sellerParty

***

### sellerReference?

> `optional` **sellerReference**: `string`

A seller reference, expressed as text, for this header trade agreement.

#### See

https://vocabulary.uncefact.org/sellerReference

***

### sellerTaxRepresentativeParty?

> `optional` **sellerTaxRepresentativeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party acting as a tax representative for the seller for this header trade agreement.

#### See

https://vocabulary.uncefact.org/sellerTaxRepresentativeParty

***

### shippingPeriod?

> `optional` **shippingPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The shipping period specified in this header trade agreement.

#### See

https://vocabulary.uncefact.org/shippingPeriod

***

### specifiedProject?

> `optional` **specifiedProject**: [`IUneceProject`](IUneceProject.md)

The procuring project specified for this header trade agreement.

#### See

https://vocabulary.uncefact.org/specifiedProject

***

### supplyInstructionDocument?

> `optional` **supplyInstructionDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A supply instruction document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/supplyInstructionDocument

***

### targetMarketCountry?

> `optional` **targetMarketCountry**: [`IUneceCountry`](IUneceCountry.md)[]

A target market country for this header trade agreement.

#### See

https://vocabulary.uncefact.org/targetMarketCountry

***

### ultimateCustomerOrderDocument?

> `optional` **ultimateCustomerOrderDocument**: [`IUneceDocument`](IUneceDocument.md)[]

An ultimate customer order document referenced for this header trade agreement.

#### See

https://vocabulary.uncefact.org/ultimateCustomerOrderDocument
