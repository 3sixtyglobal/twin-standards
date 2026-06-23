# Interface: IUneceHeaderTradeAgreement

The contractual terms of a header trade agreement.

## See

https://vocabulary.uncefact.org/HeaderTradeAgreement

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"HeaderTradeAgreement"`

JSON-LD Type.

***

### additionalDocument? {#additionaldocument}

> `optional` **additionalDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

An additional document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/additionalDocument

***

### applicableDeliveryTerms? {#applicabledeliveryterms}

> `optional` **applicableDeliveryTerms?**: [`IUneceDeliveryTerms`](IUneceDeliveryTerms.md)

The terms of delivery applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableDeliveryTerms

***

### applicableForecastTerms? {#applicableforecastterms}

> `optional` **applicableForecastTerms?**: [`IUneceForecastTerms`](IUneceForecastTerms.md)

The supply chain forecast terms applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableForecastTerms

***

### applicableLogisticsLocation? {#applicablelogisticslocation}

> `optional` **applicableLogisticsLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location or place applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableLogisticsLocation

***

### applicableLocation? {#applicablelocation}

> `optional` **applicableLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location or place applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableLocation

***

### applicablePaymentTerms? {#applicablepaymentterms}

> `optional` **applicablePaymentTerms?**: [`IUnecePaymentTerms`](IUnecePaymentTerms.md)

The payment terms applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicablePaymentTerms

***

### applicableRegulatoryProcedure? {#applicableregulatoryprocedure}

> `optional` **applicableRegulatoryProcedure?**: [`IUneceRegulatoryProcedure`](IUneceRegulatoryProcedure.md)[]

A cross-border regulatory procedure applicable to this header trade agreement.

#### See

https://vocabulary.uncefact.org/applicableRegulatoryProcedure

***

### blanketOrderDocument? {#blanketorderdocument}

> `optional` **blanketOrderDocument?**: [`IUneceDocument`](IUneceDocument.md)

The blanket order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/blanketOrderDocument

***

### buyerAgentParty? {#buyeragentparty}

> `optional` **buyerAgentParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The buyer agent party for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerAgentParty

***

### buyerApprovedDateTime? {#buyerapproveddatetime}

> `optional` **buyerApprovedDateTime?**: `string`

The date, time, date time, or other date time value of approval by the buyer for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerApprovedDateTime

***

### buyerAssignedAccountantParty? {#buyerassignedaccountantparty}

> `optional` **buyerAssignedAccountantParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party assigned as an accountant by the buyer for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerAssignedAccountantParty

***

### buyerOrderDocument? {#buyerorderdocument}

> `optional` **buyerOrderDocument?**: [`IUneceDocument`](IUneceDocument.md)

The buyer generated order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerOrderDocument

***

### buyerParty? {#buyerparty}

> `optional` **buyerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The buyer party for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerParty

***

### buyerReference? {#buyerreference}

> `optional` **buyerReference?**: `string`

A buyer reference, expressed as text, for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerReference

***

### buyerRequisitionerParty? {#buyerrequisitionerparty}

> `optional` **buyerRequisitionerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party who is a buyer requisitioner in this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerRequisitionerParty

***

### buyerTaxRepresentativeParty? {#buyertaxrepresentativeparty}

> `optional` **buyerTaxRepresentativeParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party acting as a tax representative for the buyer for this header trade agreement.

#### See

https://vocabulary.uncefact.org/buyerTaxRepresentativeParty

***

### carrierParty? {#carrierparty}

> `optional` **carrierParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The carrier party, at header level, for this trade agreement.

#### See

https://vocabulary.uncefact.org/carrierParty

***

### catalogueDocument? {#cataloguedocument}

> `optional` **catalogueDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A catalogue document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueDocument

***

### catalogueInformationProviderParty? {#catalogueinformationproviderparty}

> `optional` **catalogueInformationProviderParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party that provides catalogue information for this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueInformationProviderParty

***

### catalogueInformationReceiverParty? {#catalogueinformationreceiverparty}

> `optional` **catalogueInformationReceiverParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party that receives catalogue information for this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueInformationReceiverParty

***

### catalogueRequestDocument? {#cataloguerequestdocument}

> `optional` **catalogueRequestDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A catalogue request document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueRequestDocument

***

### catalogueSubscriptionDocument? {#cataloguesubscriptiondocument}

> `optional` **catalogueSubscriptionDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A catalogue subscription document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueSubscriptionDocument

***

### contractDocument? {#contractdocument}

> `optional` **contractDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A contract document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/contractDocument

***

### demandForecastDocument? {#demandforecastdocument}

> `optional` **demandForecastDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A demand forecast document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/demandForecastDocument

***

### engineeringChangeDocument? {#engineeringchangedocument}

> `optional` **engineeringChangeDocument?**: [`IUneceDocument`](IUneceDocument.md)

The engineering change document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/engineeringChangeDocument

***

### exportLicenceDocument? {#exportlicencedocument}

> `optional` **exportLicenceDocument?**: [`IUneceDocument`](IUneceDocument.md)

The export licence document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/exportLicenceDocument

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier for this header trade agreement.

#### See

https://vocabulary.uncefact.org/identifier

***

### impactCode? {#impactcode}

> `optional` **impactCode?**: `string`

The code specifying the impact for this header trade agreement.

#### See

https://vocabulary.uncefact.org/impactCode

***

### importLicenceDocument? {#importlicencedocument}

> `optional` **importLicenceDocument?**: [`IUneceDocument`](IUneceDocument.md)

The import licence document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/importLicenceDocument

***

### letterOfCreditDocument? {#letterofcreditdocument}

> `optional` **letterOfCreditDocument?**: [`IUneceDocument`](IUneceDocument.md)

The letter of credit document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/letterOfCreditDocument

***

### marketplaceOrderDocument? {#marketplaceorderdocument}

> `optional` **marketplaceOrderDocument?**: [`IUneceDocument`](IUneceDocument.md)

The marketplace generated order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/marketplaceOrderDocument

***

### orderResponseDocument? {#orderresponsedocument}

> `optional` **orderResponseDocument?**: [`IUneceDocument`](IUneceDocument.md)

The order response document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/orderResponseDocument

***

### originalOrderDocument? {#originalorderdocument}

> `optional` **originalOrderDocument?**: [`IUneceDocument`](IUneceDocument.md)

The original order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/originalOrderDocument

***

### previousOrderChangeDocument? {#previousorderchangedocument}

> `optional` **previousOrderChangeDocument?**: [`IUneceDocument`](IUneceDocument.md)

The previous order change document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/previousOrderChangeDocument

***

### previousOrderDocument? {#previousorderdocument}

> `optional` **previousOrderDocument?**: [`IUneceDocument`](IUneceDocument.md)

The previous order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/previousOrderDocument

***

### previousOrderResponseDocument? {#previousorderresponsedocument}

> `optional` **previousOrderResponseDocument?**: [`IUneceDocument`](IUneceDocument.md)

The previous order response document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/previousOrderResponseDocument

***

### priceListDocument? {#pricelistdocument}

> `optional` **priceListDocument?**: [`IUneceDocument`](IUneceDocument.md)

The price list document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/priceListDocument

***

### pricingBaseApplicableLocation? {#pricingbaseapplicablelocation}

> `optional` **pricingBaseApplicableLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The logistics location applicable to the pricing base for this header trade agreement.

#### See

https://vocabulary.uncefact.org/pricingBaseApplicableLocation

***

### primeContractSellerParty? {#primecontractsellerparty}

> `optional` **primeContractSellerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The seller party acting as the prime contractor for this header trade agreement.

#### See

https://vocabulary.uncefact.org/primeContractSellerParty

***

### priorityCode? {#prioritycode}

> `optional` **priorityCode?**: `string`

The code specifying the priority for this header trade agreement.

#### See

https://vocabulary.uncefact.org/priorityCode

***

### priorityDescriptionCode? {#prioritydescriptioncode}

> `optional` **priorityDescriptionCode?**: [`UnecePriorityDescriptionCodeList`](../type-aliases/UnecePriorityDescriptionCodeList.md)

The code specifying the delivery priority for this header trade agreement.

#### See

https://vocabulary.uncefact.org/priorityDescriptionCode

***

### procurementParty? {#procurementparty}

> `optional` **procurementParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The procurement party for this header trade agreement.

#### See

https://vocabulary.uncefact.org/procurementParty

***

### productEndUserParty? {#productenduserparty}

> `optional` **productEndUserParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party acting as the end user for the products in this header trade agreement.

#### See

https://vocabulary.uncefact.org/productEndUserParty

***

### promotionalDealDocument? {#promotionaldealdocument}

> `optional` **promotionalDealDocument?**: [`IUneceDocument`](IUneceDocument.md)

The promotional deal document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/promotionalDealDocument

***

### purchaseConditionsDocument? {#purchaseconditionsdocument}

> `optional` **purchaseConditionsDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A purchase conditions document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/purchaseConditionsDocument

***

### quotationDocument? {#quotationdocument}

> `optional` **quotationDocument?**: [`IUneceDocument`](IUneceDocument.md)

The quotation document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationDocument

***

### quotationProposalDocument? {#quotationproposaldocument}

> `optional` **quotationProposalDocument?**: [`IUneceDocument`](IUneceDocument.md)

The quotation proposal document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationProposalDocument

***

### quotationProposalResponseDocument? {#quotationproposalresponsedocument}

> `optional` **quotationProposalResponseDocument?**: [`IUneceDocument`](IUneceDocument.md)

The quotation proposal response document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationProposalResponseDocument

***

### quotationRequestDocument? {#quotationrequestdocument}

> `optional` **quotationRequestDocument?**: [`IUneceDocument`](IUneceDocument.md)

The quotation request document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationRequestDocument

***

### quotationRequestResponseDocument? {#quotationrequestresponsedocument}

> `optional` **quotationRequestResponseDocument?**: [`IUneceDocument`](IUneceDocument.md)

The quotation request response document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quotationRequestResponseDocument

***

### quoteReferencedWorkflowObject? {#quotereferencedworkflowobject}

> `optional` **quoteReferencedWorkflowObject?**: [`IUneceWorkflowObject`](IUneceWorkflowObject.md)

The quote trade workflow object referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/quoteReferencedWorkflowObject

***

### reference? {#reference}

> `optional` **reference?**: `string`

A reference, expressed as text, for this header trade agreement.

#### See

https://vocabulary.uncefact.org/reference

***

### relevantParty? {#relevantparty}

> `optional` **relevantParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A relevant party for this header trade agreement.

#### See

https://vocabulary.uncefact.org/relevantParty

***

### requisitionDocument? {#requisitiondocument}

> `optional` **requisitionDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A requisition document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/requisitionDocument

***

### requisitionerDocument? {#requisitionerdocument}

> `optional` **requisitionerDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A requisitioner document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/requisitionerDocument

***

### revisionId? {#revisionid}

> `optional` **revisionId?**: `string` \| `IJsonLdValueObject`

An identifier for the revision of this header trade agreement.

#### See

https://vocabulary.uncefact.org/revisionId

***

### salesAgentParty? {#salesagentparty}

> `optional` **salesAgentParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The agent party representing the seller for this header trade agreement.

#### See

https://vocabulary.uncefact.org/salesAgentParty

***

### salesConditionsDocument? {#salesconditionsdocument}

> `optional` **salesConditionsDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A sales conditions document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/salesConditionsDocument

***

### salesReportDocument? {#salesreportdocument}

> `optional` **salesReportDocument?**: [`IUneceDocument`](IUneceDocument.md)

The sales report document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/salesReportDocument

***

### sellerAssignedAccountantParty? {#sellerassignedaccountantparty}

> `optional` **sellerAssignedAccountantParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party assigned as an accountant by the seller for this header trade agreement.

#### See

https://vocabulary.uncefact.org/sellerAssignedAccountantParty

***

### sellerOrderDocument? {#sellerorderdocument}

> `optional` **sellerOrderDocument?**: [`IUneceDocument`](IUneceDocument.md)

The seller generated order document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/sellerOrderDocument

***

### sellerParty? {#sellerparty}

> `optional` **sellerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The seller party for this header trade agreement.

#### See

https://vocabulary.uncefact.org/sellerParty

***

### sellerReference? {#sellerreference}

> `optional` **sellerReference?**: `string`

A seller reference, expressed as text, for this header trade agreement.

#### See

https://vocabulary.uncefact.org/sellerReference

***

### sellerTaxRepresentativeParty? {#sellertaxrepresentativeparty}

> `optional` **sellerTaxRepresentativeParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party acting as a tax representative for the seller for this header trade agreement.

#### See

https://vocabulary.uncefact.org/sellerTaxRepresentativeParty

***

### shippingPeriod? {#shippingperiod}

> `optional` **shippingPeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The shipping period specified in this header trade agreement.

#### See

https://vocabulary.uncefact.org/shippingPeriod

***

### specifiedProject? {#specifiedproject}

> `optional` **specifiedProject?**: [`IUneceProject`](IUneceProject.md)

The procuring project specified for this header trade agreement.

#### See

https://vocabulary.uncefact.org/specifiedProject

***

### supplyInstructionDocument? {#supplyinstructiondocument}

> `optional` **supplyInstructionDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A supply instruction document referenced in this header trade agreement.

#### See

https://vocabulary.uncefact.org/supplyInstructionDocument

***

### targetMarketCountry? {#targetmarketcountry}

> `optional` **targetMarketCountry?**: [`IUneceCountry`](IUneceCountry.md)[]

A target market country for this header trade agreement.

#### See

https://vocabulary.uncefact.org/targetMarketCountry

***

### ultimateCustomerOrderDocument? {#ultimatecustomerorderdocument}

> `optional` **ultimateCustomerOrderDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

An ultimate customer order document referenced for this header trade agreement.

#### See

https://vocabulary.uncefact.org/ultimateCustomerOrderDocument
