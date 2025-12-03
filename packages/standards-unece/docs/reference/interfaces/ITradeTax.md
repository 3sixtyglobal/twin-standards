# Interface: ITradeTax

A trade related fiscal levy or duty.

## See

https://vocabulary.uncefact.org/TradeTax

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

> **type**: `"TradeTax"`

JSON-LD Type.

***

### allowanceChargeBasisAmount?

> `optional` **allowanceChargeBasisAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value used as the allowance and charge basis on which this trade related tax, levy or duty is calculated.

#### See

https://vocabulary.uncefact.org/allowanceChargeBasisAmount

***

### applicablePercent?

> `optional` **applicablePercent**: `string`

The percent of trade tax applicable, such as to an object or an activity.

#### See

https://vocabulary.uncefact.org/applicablePercent

***

### applicableTradeLocation?

> `optional` **applicableTradeLocation**: [`ITradeLocation`](ITradeLocation.md)[]

A location where this trade tax is applicable.

#### See

https://vocabulary.uncefact.org/applicableTradeLocation

***

### basisAmount?

> `optional` **basisAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value used as the basis on which this trade related tax, levy or duty is calculated.

#### See

https://vocabulary.uncefact.org/basisAmount

***

### basisQuantity?

> `optional` **basisQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity used as the basis for calculating the amount of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/basisQuantity

***

### buyerDeductibleTaxSpecifiedAccountingAccount?

> `optional` **buyerDeductibleTaxSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

The buyer deductible tax specified accounting account for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/buyerDeductibleTaxSpecifiedAccountingAccount

***

### buyerNonDeductibleTaxSpecifiedAccountingAccount?

> `optional` **buyerNonDeductibleTaxSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

The buyer non-deductible tax specified accounting account for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/buyerNonDeductibleTaxSpecifiedAccountingAccount

***

### buyerRepayableTaxSpecifiedAccountingAccount?

> `optional` **buyerRepayableTaxSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

The buyer repayable tax specified accounting account for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/buyerRepayableTaxSpecifiedAccountingAccount

***

### calculatedAmount?

> `optional` **calculatedAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value resulting from the calculation of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/calculatedAmount

***

### calculatedRate?

> `optional` **calculatedRate**: `string`

The rate used to calculate the amount of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/calculatedRate

***

### calculationMethodCode?

> `optional` **calculationMethodCode**: `string`

The code specifying the method by which this trade related tax, levy or duty is calculated, such as codes for "tax
calculated after line total summation", "tax calculated before line total summation", "tax back calculated based on
grand total".

#### See

https://vocabulary.uncefact.org/calculationMethodCode

***

### calculationSequenceNumeric?

> `optional` **calculationSequenceNumeric**: `string`

A numeric expression of the sequence in which this trade related tax is to be or has been applied when multiple taxes
are applicable per calculation, such as first "Value Added Tax (VAT)", second "Transfer".

#### See

https://vocabulary.uncefact.org/calculationSequenceNumeric

***

### categoryName?

> `optional` **categoryName**: `string`

A category name, expressed as text, of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/categoryName

***

### customsDutyIndicator?

> `optional` **customsDutyIndicator**: `boolean`

The indication of whether or not this trade related tax, levy or duty is a customs duty.

#### See

https://vocabulary.uncefact.org/customsDutyIndicator

***

### customsDutyRegimeTypeCode?

> `optional` **customsDutyRegimeTypeCode**: [`CustomsDutyRegimeTypeCodeList`](../type-aliases/CustomsDutyRegimeTypeCodeList.md)[]

The code specifying a type of regime applicable to the assessment or calculation of this trade related tax, levy or
duty, such as a preferential duty rate.

#### See

https://vocabulary.uncefact.org/customsDutyRegimeTypeCode

***

### customsProcedureGuaranteeCode?

> `optional` **customsProcedureGuaranteeCode**: `"unece:CustomsProcedureGuaranteeCodeList#ZZZ"`

The code specifying an undertaking given in cash, bond or as a written guarantee to ensure that an obligation will be
fulfilled for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/customsProcedureGuaranteeCode

***

### deductionAmount?

> `optional` **deductionAmount**: [`IAmountType`](IAmountType.md)

A monetary value of the deduction from this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/deductionAmount

***

### deferredStatusPartyFinancialAccount?

> `optional` **deferredStatusPartyFinancialAccount**: [`IDebtorFinancialAccount`](IDebtorFinancialAccount.md)

The debtor financial account of the party with deferred status for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/deferredStatusPartyFinancialAccount

***

### description?

> `optional` **description**: `string`

A textual description of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/description

***

### exemptionAuthorizationId?

> `optional` **exemptionAuthorizationId**: `string`

The unique identifier of the exemption authorization for this trade tax.

#### See

https://vocabulary.uncefact.org/exemptionAuthorizationId

***

### exemptionIndicator?

> `optional` **exemptionIndicator**: `boolean`

The indication of whether or not there is an exemption from this trade tax.

#### See

https://vocabulary.uncefact.org/exemptionIndicator

***

### exemptionReason?

> `optional` **exemptionReason**: `string`

The reason, expressed as text, for exemption from this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/exemptionReason

***

### grandTotalAmount?

> `optional` **grandTotalAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the grand total of the basis plus tax for this trade tax.

#### See

https://vocabulary.uncefact.org/grandTotalAmount

***

### guarantee?

> `optional` **guarantee**: `string`

The undertaking, expressed as text, given in cash, bond or as a written guarantee to ensure that an obligation will be
fulfilled for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/guarantee

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this trade tax.

#### See

https://vocabulary.uncefact.org/identifier

***

### informationAmount?

> `optional` **informationAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of an amount being reported for information for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/informationAmount

***

### jurisdiction?

> `optional` **jurisdiction**: `string`

A jurisdiction, expressed as text, to which this trade related tax, levy or duty applies.

#### See

https://vocabulary.uncefact.org/jurisdiction

***

### lineTotalBasisAmount?

> `optional` **lineTotalBasisAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value used as the line total basis on which this trade related tax, levy or duty is calculated.

#### See

https://vocabulary.uncefact.org/lineTotalBasisAmount

***

### localTaxSystemId?

> `optional` **localTaxSystemId**: `string`

The identifier of the local tax system for this trade tax.

#### See

https://vocabulary.uncefact.org/localTaxSystemId

***

### paymentId?

> `optional` **paymentId**: `string`

The unique identifier of the payment of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/paymentId

***

### placeApplicableLocation?

> `optional` **placeApplicableLocation**: [`ITradeLocation`](ITradeLocation.md)[]

A location where this trade tax is applicable.

#### See

https://vocabulary.uncefact.org/placeApplicableLocation

***

### rate?

> `optional` **rate**: `string`

The rate, expressed as text, of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/rate

***

### rateApplicablePercent?

> `optional` **rateApplicablePercent**: `string`

The applicable rate, expressed as a percentage, for this trade tax, levy or duty.

#### See

https://vocabulary.uncefact.org/rateApplicablePercent

***

### rateCode?

> `optional` **rateCode**: `string`

The code specifying the rate for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/rateCode

***

### refundAmount?

> `optional` **refundAmount**: [`IAmountType`](IAmountType.md)

A monetary value of the refund of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/refundAmount

***

### regimeType?

> `optional` **regimeType**: `string`

The type of regime, expressed as text, applicable to the assessment or calculation of this trade related tax, levy or
duty, such as a preferential duty rate.

#### See

https://vocabulary.uncefact.org/regimeType

***

### selfAssessedBasisAmount?

> `optional` **selfAssessedBasisAmount**: [`IAmountType`](IAmountType.md)

A monetary value of the amount on which this trade related tax, levy or duty has been calculated on a self-assessment
basis.

#### See

https://vocabulary.uncefact.org/selfAssessedBasisAmount

***

### selfAssessedBasisQuantity?

> `optional` **selfAssessedBasisQuantity**: [`IQuantityType`](IQuantityType.md)[]

The quantity on which this trade related tax, levy or duty has been calculated on a self-assessment basis.

#### See

https://vocabulary.uncefact.org/selfAssessedBasisQuantity

***

### selfAssessedCalculatedAmount?

> `optional` **selfAssessedCalculatedAmount**: [`IAmountType`](IAmountType.md)

A monetary value of the self-assessed calculated amount of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/selfAssessedCalculatedAmount

***

### sellerPayableTaxSpecifiedAccountingAccount?

> `optional` **sellerPayableTaxSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

The seller payable tax specified accounting account for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/sellerPayableTaxSpecifiedAccountingAccount

***

### sellerRefundableTaxSpecifiedAccountingAccount?

> `optional` **sellerRefundableTaxSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

The seller refundable tax specified accounting account for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/sellerRefundableTaxSpecifiedAccountingAccount

***

### serviceSupplyCountry?

> `optional` **serviceSupplyCountry**: [`ICountry`](ICountry.md)[]

The country or country sub-division where a service was supplied for this trade tax.

#### See

https://vocabulary.uncefact.org/serviceSupplyCountry

***

### specifiedAccountingAccount?

> `optional` **specifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

A specified accounting account for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/specifiedAccountingAccount

***

### tariffDeductionQuantity?

> `optional` **tariffDeductionQuantity**: [`IQuantityType`](IQuantityType.md)

A quantity to be deducted from the tariff quantity for the calculation of this trade related tax, duty or levy.

#### See

https://vocabulary.uncefact.org/tariffDeductionQuantity

***

### taxBasisAllowanceRate?

> `optional` **taxBasisAllowanceRate**: `string`

The rate of the tax basis allowance (deduction or discount) used to calculate the trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/taxBasisAllowanceRate

***

### taxCategoryCode?

> `optional` **taxCategoryCode**: [`TaxCategoryCodeList`](../type-aliases/TaxCategoryCodeList.md)

The code specifying the category to which this trade related tax, levy or duty applies, such as codes for "Exempt from
Tax", "Standard Rate", "Free Export Item - Tax Not Charged" [Reference United Nations Code List (UNCL) 5305].

#### See

https://vocabulary.uncefact.org/taxCategoryCode

***

### taxExemptionAuthorityId?

> `optional` **taxExemptionAuthorityId**: `string`

The unique tax exemption authority identifier for this trade tax.

#### See

https://vocabulary.uncefact.org/taxExemptionAuthorityId

***

### taxExemptionReasonExemptionReasonCode?

> `optional` **taxExemptionReasonExemptionReasonCode**: [`TaxExemptionReasonCodeList`](../type-aliases/TaxExemptionReasonCodeList.md)

A code specifying a reason for exemption from this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/taxExemptionReasonExemptionReasonCode

***

### taxPointDate?

> `optional` **taxPointDate**: `string`

The date of the tax point when this trade related tax, levy or duty becomes applicable.

#### See

https://vocabulary.uncefact.org/taxPointDate

***

### taxType?

> `optional` **taxType**: `string`

The type, expressed as text, of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/taxType

***

### taxTypeCode?

> `optional` **taxTypeCode**: [`TaxTypeCodeList`](../type-aliases/TaxTypeCodeList.md)[]

The code specifying the type of trade related tax, levy or duty, such as a code for a Value Added Tax (VAT) [Reference
United Nations Code List (UNCL) 5153].

#### See

https://vocabulary.uncefact.org/taxTypeCode

***

### timeReferenceDueDateTypeCode?

> `optional` **timeReferenceDueDateTypeCode**: [`TimeReferenceCodeList`](../type-aliases/TimeReferenceCodeList.md)

The code specifying a type of due date for this trade tax.

#### See

https://vocabulary.uncefact.org/timeReferenceDueDateTypeCode

***

### tradeTaxCurrencyCode?

> `optional` **tradeTaxCurrencyCode**: [`CurrencyCodeList`](../type-aliases/CurrencyCodeList.md)

The code specifying the currency for this trade related tax, levy or duty [UNCL 6345].

#### See

https://vocabulary.uncefact.org/tradeTaxCurrencyCode

***

### tradeTaxFunctionCode?

> `optional` **tradeTaxFunctionCode**: `string`

A code specifying the function of this trade tax.

#### See

https://vocabulary.uncefact.org/tradeTaxFunctionCode

***

### tradeTaxPaymentMethodCode?

> `optional` **tradeTaxPaymentMethodCode**: [`PaymentMethodCodeList`](../type-aliases/PaymentMethodCodeList.md)[]

The code specifying the payment method for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/tradeTaxPaymentMethodCode

***

### unitBasisAmount?

> `optional` **unitBasisAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value that constitutes the per unit basis on which this trade related tax, levy or duty is calculated.

#### See

https://vocabulary.uncefact.org/unitBasisAmount
