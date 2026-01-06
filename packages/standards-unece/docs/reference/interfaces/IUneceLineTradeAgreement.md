# Interface: IUneceLineTradeAgreement

The contractual terms of a line trade agreement.

## See

https://vocabulary.uncefact.org/LineTradeAgreement

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

> **type**: `"LineTradeAgreement"`

JSON-LD Type.

***

### additionalDocument?

> `optional` **additionalDocument**: [`IUneceDocument`](IUneceDocument.md)[]

An additional document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/additionalDocument

***

### agreedPriceProductPrice?

> `optional` **agreedPriceProductPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)[]

An agreed product price for this line trade agreement.

#### See

https://vocabulary.uncefact.org/agreedPriceProductPrice

***

### applicableDeliveryTerms?

> `optional` **applicableDeliveryTerms**: [`IUneceDeliveryTerms`](IUneceDeliveryTerms.md)[]

The terms of delivery applicable to this line trade agreement.

#### See

https://vocabulary.uncefact.org/applicableDeliveryTerms

***

### applicableForecastTerms?

> `optional` **applicableForecastTerms**: [`IUneceForecastTerms`](IUneceForecastTerms.md)[]

The supply chain forecast terms applicable to this line trade agreement.

#### See

https://vocabulary.uncefact.org/applicableForecastTerms

***

### blanketOrderDocument?

> `optional` **blanketOrderDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The blanket order document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/blanketOrderDocument

***

### buyerApprovedDateTime?

> `optional` **buyerApprovedDateTime**: `string`

The date, time, date time, or other date time value of approval by the buyer for this line trade agreement.

#### See

https://vocabulary.uncefact.org/buyerApprovedDateTime

***

### buyerOrderDocument?

> `optional` **buyerOrderDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A buyer generated order document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/buyerOrderDocument

***

### buyerParty?

> `optional` **buyerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The buyer party for this line trade agreement.

#### See

https://vocabulary.uncefact.org/buyerParty

***

### buyerReference?

> `optional` **buyerReference**: `string`

A buyer reference, expressed as text, for this line trade agreement.

#### See

https://vocabulary.uncefact.org/buyerReference

***

### buyerRequisitionerParty?

> `optional` **buyerRequisitionerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party who is a buyer requisitioner in this line trade agreement.

#### See

https://vocabulary.uncefact.org/buyerRequisitionerParty

***

### carrierParty?

> `optional` **carrierParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A carrier party for this line trade agreement.

#### See

https://vocabulary.uncefact.org/carrierParty

***

### catalogueDocument?

> `optional` **catalogueDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A catalogue document referenced by this line trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueDocument

***

### catalogueInformationProviderParty?

> `optional` **catalogueInformationProviderParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The party that provides catalogue information for this line trade agreement.

#### See

https://vocabulary.uncefact.org/catalogueInformationProviderParty

***

### contractDocument?

> `optional` **contractDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A contract document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/contractDocument

***

### deliveryOrderFulfilmentLeadTimeMeasure?

> `optional` **deliveryOrderFulfilmentLeadTimeMeasure**: [`IUneceDurationUnitMeasureType`](IUneceDurationUnitMeasureType.md)[]

The measure of the expected time interval between the receipt of an order and its delivery fulfilment according to this
line trade agreement.

#### See

https://vocabulary.uncefact.org/deliveryOrderFulfilmentLeadTimeMeasure

***

### demandForecastDocument?

> `optional` **demandForecastDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A demand forecast document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/demandForecastDocument

***

### economicOrderQuantity?

> `optional` **economicOrderQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The economic order quantity for this line trade agreement.

#### See

https://vocabulary.uncefact.org/economicOrderQuantity

***

### engineeringChangeDocument?

> `optional` **engineeringChangeDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The engineering change document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/engineeringChangeDocument

***

### exclusivityPeriod?

> `optional` **exclusivityPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

The exclusivity period specified in this line trade agreement.

#### See

https://vocabulary.uncefact.org/exclusivityPeriod

***

### exportLicenceDocument?

> `optional` **exportLicenceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The export licence document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/exportLicenceDocument

***

### grossPriceProductPrice?

> `optional` **grossPriceProductPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)[]

A gross product price in this line trade agreement.

#### See

https://vocabulary.uncefact.org/grossPriceProductPrice

***

### guaranteedProductLifeSpanPeriod?

> `optional` **guaranteedProductLifeSpanPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The guaranteed product life span specified in this line trade agreement.

#### See

https://vocabulary.uncefact.org/guaranteedProductLifeSpanPeriod

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this line trade agreement.

#### See

https://vocabulary.uncefact.org/identifier

***

### immediatePreviousPriceListDocument?

> `optional` **immediatePreviousPriceListDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The immediate previous price list document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/immediatePreviousPriceListDocument

***

### impactCode?

> `optional` **impactCode**: `string`

The code specifying the impact for this line trade agreement.

#### See

https://vocabulary.uncefact.org/impactCode

***

### importLicenceDocument?

> `optional` **importLicenceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The import licence document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/importLicenceDocument

***

### includedMarketplace?

> `optional` **includedMarketplace**: [`IUneceMarketplace`](IUneceMarketplace.md)[]

A marketplace included in this line trade agreement.

#### See

https://vocabulary.uncefact.org/includedMarketplace

***

### incrementalProductOrderableQuantity?

> `optional` **incrementalProductOrderableQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The incremental product orderable quantity for this line trade agreement.

#### See

https://vocabulary.uncefact.org/incrementalProductOrderableQuantity

***

### informationUseRestrictionIndicator?

> `optional` **informationUseRestrictionIndicator**: `boolean`

The indication of whether or not the use of the information provided in this line trade agreement is restricted.

#### See

https://vocabulary.uncefact.org/informationUseRestrictionIndicator

***

### itemBuyerParty?

> `optional` **itemBuyerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The item buyer party for this line trade agreement.

#### See

https://vocabulary.uncefact.org/itemBuyerParty

***

### itemSellerParty?

> `optional` **itemSellerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The item seller party for this line trade agreement.

#### See

https://vocabulary.uncefact.org/itemSellerParty

***

### letterOfCreditDocument?

> `optional` **letterOfCreditDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The letter of credit document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/letterOfCreditDocument

***

### manufacturerParty?

> `optional` **manufacturerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A manufacturer party, at line level, for this trade agreement.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### marketplaceOrderDocument?

> `optional` **marketplaceOrderDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The marketplace generated order document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/marketplaceOrderDocument

***

### maximumOrderQuantityOrderingPeriod?

> `optional` **maximumOrderQuantityOrderingPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

The maximum order quantity ordering period specified in this line trade agreement.

#### See

https://vocabulary.uncefact.org/maximumOrderQuantityOrderingPeriod

***

### maximumProductOrderableQuantity?

> `optional` **maximumProductOrderableQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The maximum product orderable quantity for this line trade agreement.

#### See

https://vocabulary.uncefact.org/maximumProductOrderableQuantity

***

### minimumOrderQuantityOrderingPeriod?

> `optional` **minimumOrderQuantityOrderingPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

The minimum order quantity ordering period specified in this line trade agreement.

#### See

https://vocabulary.uncefact.org/minimumOrderQuantityOrderingPeriod

***

### minimumProductOrderableQuantity?

> `optional` **minimumProductOrderableQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The minimum product orderable quantity for this line trade agreement.

#### See

https://vocabulary.uncefact.org/minimumProductOrderableQuantity

***

### netPriceProductPrice?

> `optional` **netPriceProductPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)[]

A net product price in this line trade agreement.

#### See

https://vocabulary.uncefact.org/netPriceProductPrice

***

### orderPriceProductPrice?

> `optional` **orderPriceProductPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)[]

An order price for a product in this line trade agreement.

#### See

https://vocabulary.uncefact.org/orderPriceProductPrice

***

### orderProductUnitMeasureCode?

> `optional` **orderProductUnitMeasureCode**: `string`

The code specifying the order product unit of measure, such as kilogram or litre, for this line trade agreement.

#### See

https://vocabulary.uncefact.org/orderProductUnitMeasureCode

***

### orderingSpecifiedPeriod?

> `optional` **orderingSpecifiedPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

The ordering period specified in this line trade agreement.

#### See

https://vocabulary.uncefact.org/orderingSpecifiedPeriod

***

### originalOrderDocument?

> `optional` **originalOrderDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The original order document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/originalOrderDocument

***

### pickUpOrderFulfilmentLeadTimeMeasure?

> `optional` **pickUpOrderFulfilmentLeadTimeMeasure**: [`IUneceDurationUnitMeasureType`](IUneceDurationUnitMeasureType.md)[]

The measure of the expected time interval between the receipt of an order and its pick-up fulfilment according to this
line trade agreement.

#### See

https://vocabulary.uncefact.org/pickUpOrderFulfilmentLeadTimeMeasure

***

### previousOrderDocument?

> `optional` **previousOrderDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The previous order document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/previousOrderDocument

***

### priceListDocument?

> `optional` **priceListDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The price list document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/priceListDocument

***

### primeContractSellerParty?

> `optional` **primeContractSellerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The seller party acting as the prime contractor for this line trade agreement.

#### See

https://vocabulary.uncefact.org/primeContractSellerParty

***

### priorityCode?

> `optional` **priorityCode**: `string`

The code specifying the priority for this line trade agreement.

#### See

https://vocabulary.uncefact.org/priorityCode

***

### priorityDescriptionCode?

> `optional` **priorityDescriptionCode**: [`UnecePriorityDescriptionCodeList`](../type-aliases/UnecePriorityDescriptionCodeList.md)[]

The code specifying the delivery priority for this line trade agreement.

#### See

https://vocabulary.uncefact.org/priorityDescriptionCode

***

### procurementParty?

> `optional` **procurementParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The procurement party for this line trade agreement.

#### See

https://vocabulary.uncefact.org/procurementParty

***

### productAvailabilityCode?

> `optional` **productAvailabilityCode**: `string`

The code specifying the product availability according to this line trade agreement.

#### See

https://vocabulary.uncefact.org/productAvailabilityCode

***

### productEndUserParty?

> `optional` **productEndUserParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The party acting as the end user for the products in this line trade agreement.

#### See

https://vocabulary.uncefact.org/productEndUserParty

***

### productMadeToOrderIndicator?

> `optional` **productMadeToOrderIndicator**: `boolean`

The indication of whether or not, according to this line trade agreement, the product is manufactured, built or
customized only after receipt of order.

#### See

https://vocabulary.uncefact.org/productMadeToOrderIndicator

***

### productOrderableIndicator?

> `optional` **productOrderableIndicator**: `boolean`

The indication of whether or not the product can be ordered according to this line trade agreement.

#### See

https://vocabulary.uncefact.org/productOrderableIndicator

***

### productReorderableIndicator?

> `optional` **productReorderableIndicator**: `boolean`

The indication of whether or not the product can be reordered according to this line trade agreement.

#### See

https://vocabulary.uncefact.org/productReorderableIndicator

***

### promotionalDealDocument?

> `optional` **promotionalDealDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The promotional deal document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/promotionalDealDocument

***

### quotationDocument?

> `optional` **quotationDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The quotation document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/quotationDocument

***

### quotationProposalDocument?

> `optional` **quotationProposalDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The quotation proposal document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/quotationProposalDocument

***

### quotationProposalResponseDocument?

> `optional` **quotationProposalResponseDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The quotation proposal response document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/quotationProposalResponseDocument

***

### quotationRequestDocument?

> `optional` **quotationRequestDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The quotation request document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/quotationRequestDocument

***

### quotationRequestResponseDocument?

> `optional` **quotationRequestResponseDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The quotation request response document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/quotationRequestResponseDocument

***

### reference?

> `optional` **reference**: `string`

A reference, expressed as text, for this line trade agreement.

#### See

https://vocabulary.uncefact.org/reference

***

### relevantParty?

> `optional` **relevantParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party relevant for this line trade agreement.

#### See

https://vocabulary.uncefact.org/relevantParty

***

### requisitionDocument?

> `optional` **requisitionDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A requisition document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/requisitionDocument

***

### requisitionerDocument?

> `optional` **requisitionerDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A requisitioner document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/requisitionerDocument

***

### resalePeriod?

> `optional` **resalePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The resale period specified in this line trade agreement.

#### See

https://vocabulary.uncefact.org/resalePeriod

***

### resaleProductUnitMeasureCode?

> `optional` **resaleProductUnitMeasureCode**: `string`

The code specifying the resale product unit of measure, such as kilogram or litre, for this trade line agreement.

#### See

https://vocabulary.uncefact.org/resaleProductUnitMeasureCode

***

### revisionId?

> `optional` **revisionId**: `string`

An identifier for the revision of this line trade agreement.

#### See

https://vocabulary.uncefact.org/revisionId

***

### salesConditionsDocument?

> `optional` **salesConditionsDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A sales conditions document referenced by this line trade agreement.

#### See

https://vocabulary.uncefact.org/salesConditionsDocument

***

### salesReportDocument?

> `optional` **salesReportDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The sales report document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/salesReportDocument

***

### sellerOrderDocument?

> `optional` **sellerOrderDocument**: [`IUneceDocument`](IUneceDocument.md)[]

The seller generated order document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/sellerOrderDocument

***

### sellerParty?

> `optional` **sellerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The seller party for this line trade agreement.

#### See

https://vocabulary.uncefact.org/sellerParty

***

### sellerReference?

> `optional` **sellerReference**: `string`

A seller reference, expressed as text, for this line trade agreement.

#### See

https://vocabulary.uncefact.org/sellerReference

***

### supplyInstructionDocument?

> `optional` **supplyInstructionDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A supply instruction document referenced in this line trade agreement.

#### See

https://vocabulary.uncefact.org/supplyInstructionDocument

***

### supportCentreParty?

> `optional` **supportCentreParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The support centre party for this line trade agreement.

#### See

https://vocabulary.uncefact.org/supportCentreParty

***

### targetMarketCountry?

> `optional` **targetMarketCountry**: [`IUneceCountry`](IUneceCountry.md)[]

A target market country for this line trade agreement.

#### See

https://vocabulary.uncefact.org/targetMarketCountry

***

### ultimateCustomerOrderDocument?

> `optional` **ultimateCustomerOrderDocument**: [`IUneceDocument`](IUneceDocument.md)[]

An ultimate customer order document referenced for this line trade agreement.

#### See

https://vocabulary.uncefact.org/ultimateCustomerOrderDocument
