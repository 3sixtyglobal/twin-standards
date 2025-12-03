# Interface: IHeaderTradeAgreement

The contractual terms of a header trade agreement.

## See

https://vocabulary.uncefact.org/HeaderTradeAgreement

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

> **type**: `"HeaderTradeAgreement"`

JSON-LD Type.

***

### additionalDocument?

> `optional` **additionalDocument**: [`IDocument`](IDocument.md)[]

An additional document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/additionalDocument

***

### applicableDeliveryTerms?

> `optional` **applicableDeliveryTerms**: [`IDeliveryTerms`](IDeliveryTerms.md)[]

The terms of delivery applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableDeliveryTerms

***

### applicableForecastTerms?

> `optional` **applicableForecastTerms**: [`IForecastTerms`](IForecastTerms.md)[]

The supply chain forecast terms applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableForecastTerms

***

### applicableLogisticsLocation?

> `optional` **applicableLogisticsLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A logistics location or place applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableLogisticsLocation

***

### applicableLocation?

> `optional` **applicableLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A logistics location or place applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableLocation

***

### applicablePaymentTerms?

> `optional` **applicablePaymentTerms**: [`IPaymentTerms`](IPaymentTerms.md)

The payment terms applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicablePaymentTerms

***

### applicableRegulatoryProcedure?

> `optional` **applicableRegulatoryProcedure**: [`IRegulatoryProcedure`](IRegulatoryProcedure.md)[]

A cross-border regulatory procedure applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableRegulatoryProcedure

***

### blanketOrderDocument?

> `optional` **blanketOrderDocument**: [`IDocument`](IDocument.md)[]

The blanket order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/blanketOrderDocument

***

### buyerAgentParty?

> `optional` **buyerAgentParty**: [`ITradeParty`](ITradeParty.md)[]

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

> `optional` **buyerAssignedAccountantParty**: [`ITradeParty`](ITradeParty.md)[]

The party assigned as an accountant by the buyer for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerAssignedAccountantParty

***

### buyerOrderDocument?

> `optional` **buyerOrderDocument**: [`IDocument`](IDocument.md)[]

The buyer generated order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerOrderDocument

***

### buyerParty?

> `optional` **buyerParty**: [`ITradeParty`](ITradeParty.md)[]

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

> `optional` **buyerRequisitionerParty**: [`ITradeParty`](ITradeParty.md)[]

A party who is a buyer requisitioner in this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerRequisitionerParty

***

### buyerTaxRepresentativeParty?

> `optional` **buyerTaxRepresentativeParty**: [`ITradeParty`](ITradeParty.md)[]

The party acting as a tax representative for the buyer for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerTaxRepresentativeParty

***

### carrierParty?

> `optional` **carrierParty**: [`ITradeParty`](ITradeParty.md)[]

The carrier party, at header level, for this trade agreement.

#### See

https://vocabulary.uncefact.org/carrierParty

***

### catalogueDocument?

> `optional` **catalogueDocument**: [`IDocument`](IDocument.md)[]

A catalogue document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueDocument

***

### catalogueInformationProviderParty?

> `optional` **catalogueInformationProviderParty**: [`ITradeParty`](ITradeParty.md)[]

The party that provides catalogue information for this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueInformationProviderParty

***

### catalogueInformationReceiverParty?

> `optional` **catalogueInformationReceiverParty**: [`ITradeParty`](ITradeParty.md)[]

The party that receives catalogue information for this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueInformationReceiverParty

***

### catalogueRequestDocument?

> `optional` **catalogueRequestDocument**: [`IDocument`](IDocument.md)[]

A catalogue request document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueRequestDocument

***

### catalogueSubscriptionDocument?

> `optional` **catalogueSubscriptionDocument**: [`IDocument`](IDocument.md)[]

A catalogue subscription document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueSubscriptionDocument

***

### contractDocument?

> `optional` **contractDocument**: [`IDocument`](IDocument.md)[]

A contract document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/contractDocument

***

### demandForecastDocument?

> `optional` **demandForecastDocument**: [`IDocument`](IDocument.md)[]

A demand forecast document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/demandForecastDocument

***

### engineeringChangeDocument?

> `optional` **engineeringChangeDocument**: [`IDocument`](IDocument.md)[]

The engineering change document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/engineeringChangeDocument

***

### exportLicenceDocument?

> `optional` **exportLicenceDocument**: [`IDocument`](IDocument.md)[]

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

> `optional` **importLicenceDocument**: [`IDocument`](IDocument.md)[]

The import licence document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/importLicenceDocument

***

### letterOfCreditDocument?

> `optional` **letterOfCreditDocument**: [`IDocument`](IDocument.md)[]

The letter of credit document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/letterOfCreditDocument

***

### marketplaceOrderDocument?

> `optional` **marketplaceOrderDocument**: [`IDocument`](IDocument.md)[]

The marketplace generated order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/marketplaceOrderDocument

***

### orderResponseDocument?

> `optional` **orderResponseDocument**: [`IDocument`](IDocument.md)[]

The order response document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/orderResponseDocument

***

### originalOrderDocument?

> `optional` **originalOrderDocument**: [`IDocument`](IDocument.md)[]

The original order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/originalOrderDocument

***

### previousOrderChangeDocument?

> `optional` **previousOrderChangeDocument**: [`IDocument`](IDocument.md)[]

The previous order change document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/previousOrderChangeDocument

***

### previousOrderDocument?

> `optional` **previousOrderDocument**: [`IDocument`](IDocument.md)[]

The previous order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/previousOrderDocument

***

### previousOrderResponseDocument?

> `optional` **previousOrderResponseDocument**: [`IDocument`](IDocument.md)[]

The previous order response document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/previousOrderResponseDocument

***

### priceListDocument?

> `optional` **priceListDocument**: [`IDocument`](IDocument.md)[]

The price list document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/priceListDocument

***

### pricingBaseApplicableLocation?

> `optional` **pricingBaseApplicableLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

The logistics location applicable to the pricing base for this header trade agreement.

#### See

https://vocabulary.uncefact.org/pricingBaseApplicableLocation

***

### primeContractSellerParty?

> `optional` **primeContractSellerParty**: [`ITradeParty`](ITradeParty.md)[]

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

> `optional` **priorityDescriptionCode**: [`PriorityDescriptionCodeList`](../type-aliases/PriorityDescriptionCodeList.md)[]

The code specifying the delivery priority for this header trade agreement.

#### See

https://vocabulary.uncefact.org/priorityDescriptionCode

***

### procurementParty?

> `optional` **procurementParty**: [`ITradeParty`](ITradeParty.md)

The procurement party for this header trade agreement.

#### See

https://vocabulary.uncefact.org/procurementParty

***

### productEndUserParty?

> `optional` **productEndUserParty**: [`ITradeParty`](ITradeParty.md)[]

The party acting as the end user for the products in this header trade agreement.

#### See

https://vocabulary.uncefact.org/productEndUserParty

***

### promotionalDealDocument?

> `optional` **promotionalDealDocument**: [`IDocument`](IDocument.md)[]

The promotional deal document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/promotionalDealDocument

***

### purchaseConditionsDocument?

> `optional` **purchaseConditionsDocument**: [`IDocument`](IDocument.md)[]

A purchase conditions document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/purchaseConditionsDocument

***

### quotationDocument?

> `optional` **quotationDocument**: [`IDocument`](IDocument.md)[]

The quotation document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationDocument

***

### quotationProposalDocument?

> `optional` **quotationProposalDocument**: [`IDocument`](IDocument.md)[]

The quotation proposal document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationProposalDocument

***

### quotationProposalResponseDocument?

> `optional` **quotationProposalResponseDocument**: [`IDocument`](IDocument.md)[]

The quotation proposal response document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationProposalResponseDocument

***

### quotationRequestDocument?

> `optional` **quotationRequestDocument**: [`IDocument`](IDocument.md)[]

The quotation request document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationRequestDocument

***

### quotationRequestResponseDocument?

> `optional` **quotationRequestResponseDocument**: [`IDocument`](IDocument.md)[]

The quotation request response document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationRequestResponseDocument

***

### quoteReferencedWorkflowObject?

> `optional` **quoteReferencedWorkflowObject**: [`IWorkflowObject`](IWorkflowObject.md)[]

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

> `optional` **relevantParty**: [`ITradeParty`](ITradeParty.md)[]

A relevant party for this header trade agreement.

#### See

https://vocabulary.uncefact.org/relevantParty

***

### requisitionDocument?

> `optional` **requisitionDocument**: [`IDocument`](IDocument.md)[]

A requisition document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/requisitionDocument

***

### requisitionerDocument?

> `optional` **requisitionerDocument**: [`IDocument`](IDocument.md)[]

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

> `optional` **salesAgentParty**: [`ITradeParty`](ITradeParty.md)

The agent party representing the seller for this header trade agreement.

#### See

https://vocabulary.uncefact.org/salesAgentParty

***

### salesConditionsDocument?

> `optional` **salesConditionsDocument**: [`IDocument`](IDocument.md)[]

A sales conditions document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/salesConditionsDocument

***

### salesReportDocument?

> `optional` **salesReportDocument**: [`IDocument`](IDocument.md)[]

The sales report document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/salesReportDocument

***

### sellerAssignedAccountantParty?

> `optional` **sellerAssignedAccountantParty**: [`ITradeParty`](ITradeParty.md)[]

The party assigned as an accountant by the seller for this header trade agreement.

#### See

https://vocabulary.uncefact.org/sellerAssignedAccountantParty

***

### sellerOrderDocument?

> `optional` **sellerOrderDocument**: [`IDocument`](IDocument.md)[]

The seller generated order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/sellerOrderDocument

***

### sellerParty?

> `optional` **sellerParty**: [`ITradeParty`](ITradeParty.md)[]

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

> `optional` **sellerTaxRepresentativeParty**: [`ITradeParty`](ITradeParty.md)[]

The party acting as a tax representative for the seller for this header trade agreement.

#### See

https://vocabulary.uncefact.org/sellerTaxRepresentativeParty

***

### shippingPeriod?

> `optional` **shippingPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)

The shipping period specified in this header trade agreement.

#### See

https://vocabulary.uncefact.org/shippingPeriod

***

### specifiedProject?

> `optional` **specifiedProject**: [`IProject`](IProject.md)[]

The procuring project specified for this header trade agreement.

#### See

https://vocabulary.uncefact.org/specifiedProject

***

### supplyInstructionDocument?

> `optional` **supplyInstructionDocument**: [`IDocument`](IDocument.md)[]

A supply instruction document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/supplyInstructionDocument

***

### targetMarketCountry?

> `optional` **targetMarketCountry**: [`ICountry`](ICountry.md)[]

A target market country for this header trade agreement.

#### See

https://vocabulary.uncefact.org/targetMarketCountry

***

### ultimateCustomerOrderDocument?

> `optional` **ultimateCustomerOrderDocument**: [`IDocument`](IDocument.md)[]

An ultimate customer order document referenced for this header trade agreement.

#### See

https://vocabulary.uncefact.org/ultimateCustomerOrderDocument
