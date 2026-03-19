# Interface: IUneceTradeTax

A trade related fiscal levy or duty.

## See

https://vocabulary.uncefact.org/TradeTax

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TradeTax"`

JSON-LD Type.

***

### allowanceChargeBasisAmount? {#allowancechargebasisamount}

> `optional` **allowanceChargeBasisAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value used as the allowance and charge basis on which this trade related tax, levy or duty is calculated.

#### See

https://vocabulary.uncefact.org/allowanceChargeBasisAmount

***

### applicablePercent? {#applicablepercent}

> `optional` **applicablePercent?**: `string`

The percent of trade tax applicable, such as to an object or an activity.

#### See

https://vocabulary.uncefact.org/applicablePercent

***

### applicableTradeLocation? {#applicabletradelocation}

> `optional` **applicableTradeLocation?**: [`IUneceTradeLocation`](IUneceTradeLocation.md)[]

A location where this trade tax is applicable.

#### See

https://vocabulary.uncefact.org/applicableTradeLocation

***

### basisAmount? {#basisamount}

> `optional` **basisAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value used as the basis on which this trade related tax, levy or duty is calculated.

#### See

https://vocabulary.uncefact.org/basisAmount

***

### basisQuantity? {#basisquantity}

> `optional` **basisQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity used as the basis for calculating the amount of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/basisQuantity

***

### buyerDeductibleTaxSpecifiedAccountingAccount? {#buyerdeductibletaxspecifiedaccountingaccount}

> `optional` **buyerDeductibleTaxSpecifiedAccountingAccount?**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)

The buyer deductible tax specified accounting account for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/buyerDeductibleTaxSpecifiedAccountingAccount

***

### buyerNonDeductibleTaxSpecifiedAccountingAccount? {#buyernondeductibletaxspecifiedaccountingaccount}

> `optional` **buyerNonDeductibleTaxSpecifiedAccountingAccount?**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)

The buyer non-deductible tax specified accounting account for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/buyerNonDeductibleTaxSpecifiedAccountingAccount

***

### buyerRepayableTaxSpecifiedAccountingAccount? {#buyerrepayabletaxspecifiedaccountingaccount}

> `optional` **buyerRepayableTaxSpecifiedAccountingAccount?**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)

The buyer repayable tax specified accounting account for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/buyerRepayableTaxSpecifiedAccountingAccount

***

### calculatedAmount? {#calculatedamount}

> `optional` **calculatedAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value resulting from the calculation of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/calculatedAmount

***

### calculatedRate? {#calculatedrate}

> `optional` **calculatedRate?**: `string`

The rate used to calculate the amount of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/calculatedRate

***

### calculationMethodCode? {#calculationmethodcode}

> `optional` **calculationMethodCode?**: `string`

The code specifying the method by which this trade related tax, levy or duty is calculated, such as codes for "tax
calculated after line total summation", "tax calculated before line total summation", "tax back calculated based on
grand total".

#### See

https://vocabulary.uncefact.org/calculationMethodCode

***

### calculationSequenceNumeric? {#calculationsequencenumeric}

> `optional` **calculationSequenceNumeric?**: `string`

A numeric expression of the sequence in which this trade related tax is to be or has been applied when multiple taxes
are applicable per calculation, such as first "Value Added Tax (VAT)", second "Transfer".

#### See

https://vocabulary.uncefact.org/calculationSequenceNumeric

***

### categoryName? {#categoryname}

> `optional` **categoryName?**: `string`

A category name, expressed as text, of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/categoryName

***

### customsDutyIndicator? {#customsdutyindicator}

> `optional` **customsDutyIndicator?**: `boolean`

The indication of whether or not this trade related tax, levy or duty is a customs duty.

#### See

https://vocabulary.uncefact.org/customsDutyIndicator

***

### customsDutyRegimeTypeCode? {#customsdutyregimetypecode}

> `optional` **customsDutyRegimeTypeCode?**: [`UneceCustomsDutyRegimeTypeCodeList`](../type-aliases/UneceCustomsDutyRegimeTypeCodeList.md)

The code specifying a type of regime applicable to the assessment or calculation of this trade related tax, levy or
duty, such as a preferential duty rate.

#### See

https://vocabulary.uncefact.org/customsDutyRegimeTypeCode

***

### customsProcedureGuaranteeCode? {#customsprocedureguaranteecode}

> `optional` **customsProcedureGuaranteeCode?**: `"unece:CustomsProcedureGuaranteeCodeList#ZZZ"`

The code specifying an undertaking given in cash, bond or as a written guarantee to ensure that an obligation will be
fulfilled for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/customsProcedureGuaranteeCode

***

### deductionAmount? {#deductionamount}

> `optional` **deductionAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the deduction from this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/deductionAmount

***

### deferredStatusPartyFinancialAccount? {#deferredstatuspartyfinancialaccount}

> `optional` **deferredStatusPartyFinancialAccount?**: [`IUneceDebtorFinancialAccount`](IUneceDebtorFinancialAccount.md)

The debtor financial account of the party with deferred status for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/deferredStatusPartyFinancialAccount

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/description

***

### exemptionAuthorizationId? {#exemptionauthorizationid}

> `optional` **exemptionAuthorizationId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the exemption authorization for this trade tax.

#### See

https://vocabulary.uncefact.org/exemptionAuthorizationId

***

### exemptionIndicator? {#exemptionindicator}

> `optional` **exemptionIndicator?**: `boolean`

The indication of whether or not there is an exemption from this trade tax.

#### See

https://vocabulary.uncefact.org/exemptionIndicator

***

### exemptionReason? {#exemptionreason}

> `optional` **exemptionReason?**: `string`

The reason, expressed as text, for exemption from this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/exemptionReason

***

### grandTotalAmount? {#grandtotalamount}

> `optional` **grandTotalAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the grand total of the basis plus tax for this trade tax.

#### See

https://vocabulary.uncefact.org/grandTotalAmount

***

### guarantee? {#guarantee}

> `optional` **guarantee?**: `string`

The undertaking, expressed as text, given in cash, bond or as a written guarantee to ensure that an obligation will be
fulfilled for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/guarantee

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier of this trade tax.

#### See

https://vocabulary.uncefact.org/identifier

***

### informationAmount? {#informationamount}

> `optional` **informationAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of an amount being reported for information for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/informationAmount

***

### jurisdiction? {#jurisdiction}

> `optional` **jurisdiction?**: `string`

A jurisdiction, expressed as text, to which this trade related tax, levy or duty applies.

#### See

https://vocabulary.uncefact.org/jurisdiction

***

### lineTotalBasisAmount? {#linetotalbasisamount}

> `optional` **lineTotalBasisAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value used as the line total basis on which this trade related tax, levy or duty is calculated.

#### See

https://vocabulary.uncefact.org/lineTotalBasisAmount

***

### localTaxSystemId? {#localtaxsystemid}

> `optional` **localTaxSystemId?**: `string` \| `IJsonLdValueObject`

The identifier of the local tax system for this trade tax.

#### See

https://vocabulary.uncefact.org/localTaxSystemId

***

### paymentId? {#paymentid}

> `optional` **paymentId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the payment of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/paymentId

***

### placeApplicableLocation? {#placeapplicablelocation}

> `optional` **placeApplicableLocation?**: [`IUneceTradeLocation`](IUneceTradeLocation.md)[]

A location where this trade tax is applicable.

#### See

https://vocabulary.uncefact.org/placeApplicableLocation

***

### rate? {#rate}

> `optional` **rate?**: `string`

The rate, expressed as text, of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/rate

***

### rateApplicablePercent? {#rateapplicablepercent}

> `optional` **rateApplicablePercent?**: `string`

The applicable rate, expressed as a percentage, for this trade tax, levy or duty.

#### See

https://vocabulary.uncefact.org/rateApplicablePercent

***

### rateCode? {#ratecode}

> `optional` **rateCode?**: `string`

The code specifying the rate for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/rateCode

***

### refundAmount? {#refundamount}

> `optional` **refundAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the refund of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/refundAmount

***

### regimeType? {#regimetype}

> `optional` **regimeType?**: `string`

The type of regime, expressed as text, applicable to the assessment or calculation of this trade related tax, levy or
duty, such as a preferential duty rate.

#### See

https://vocabulary.uncefact.org/regimeType

***

### selfAssessedBasisAmount? {#selfassessedbasisamount}

> `optional` **selfAssessedBasisAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the amount on which this trade related tax, levy or duty has been calculated on a self-assessment
basis.

#### See

https://vocabulary.uncefact.org/selfAssessedBasisAmount

***

### selfAssessedBasisQuantity? {#selfassessedbasisquantity}

> `optional` **selfAssessedBasisQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity on which this trade related tax, levy or duty has been calculated on a self-assessment basis.

#### See

https://vocabulary.uncefact.org/selfAssessedBasisQuantity

***

### selfAssessedCalculatedAmount? {#selfassessedcalculatedamount}

> `optional` **selfAssessedCalculatedAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the self-assessed calculated amount of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/selfAssessedCalculatedAmount

***

### sellerPayableTaxSpecifiedAccountingAccount? {#sellerpayabletaxspecifiedaccountingaccount}

> `optional` **sellerPayableTaxSpecifiedAccountingAccount?**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)

The seller payable tax specified accounting account for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/sellerPayableTaxSpecifiedAccountingAccount

***

### sellerRefundableTaxSpecifiedAccountingAccount? {#sellerrefundabletaxspecifiedaccountingaccount}

> `optional` **sellerRefundableTaxSpecifiedAccountingAccount?**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)

The seller refundable tax specified accounting account for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/sellerRefundableTaxSpecifiedAccountingAccount

***

### serviceSupplyCountry? {#servicesupplycountry}

> `optional` **serviceSupplyCountry?**: [`IUneceCountry`](IUneceCountry.md)

The country or country sub-division where a service was supplied for this trade tax.

#### See

https://vocabulary.uncefact.org/serviceSupplyCountry

***

### specifiedAccountingAccount? {#specifiedaccountingaccount}

> `optional` **specifiedAccountingAccount?**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)[]

A specified accounting account for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/specifiedAccountingAccount

***

### tariffDeductionQuantity? {#tariffdeductionquantity}

> `optional` **tariffDeductionQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A quantity to be deducted from the tariff quantity for the calculation of this trade related tax, duty or levy.

#### See

https://vocabulary.uncefact.org/tariffDeductionQuantity

***

### taxBasisAllowanceRate? {#taxbasisallowancerate}

> `optional` **taxBasisAllowanceRate?**: `string`

The rate of the tax basis allowance (deduction or discount) used to calculate the trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/taxBasisAllowanceRate

***

### taxCategoryCode? {#taxcategorycode}

> `optional` **taxCategoryCode?**: [`UneceTaxCategoryCodeList`](../type-aliases/UneceTaxCategoryCodeList.md)

The code specifying the category to which this trade related tax, levy or duty applies, such as codes for "Exempt from
Tax", "Standard Rate", "Free Export Item - Tax Not Charged" [Reference United Nations Code List (UNCL) 5305].

#### See

https://vocabulary.uncefact.org/taxCategoryCode

***

### taxExemptionAuthorityId? {#taxexemptionauthorityid}

> `optional` **taxExemptionAuthorityId?**: `string` \| `IJsonLdValueObject`

The unique tax exemption authority identifier for this trade tax.

#### See

https://vocabulary.uncefact.org/taxExemptionAuthorityId

***

### taxExemptionReasonExemptionReasonCode? {#taxexemptionreasonexemptionreasoncode}

> `optional` **taxExemptionReasonExemptionReasonCode?**: [`UneceTaxExemptionReasonCodeList`](../type-aliases/UneceTaxExemptionReasonCodeList.md)[]

A code specifying a reason for exemption from this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/taxExemptionReasonExemptionReasonCode

***

### taxPointDate? {#taxpointdate}

> `optional` **taxPointDate?**: `string`

The date of the tax point when this trade related tax, levy or duty becomes applicable.

#### See

https://vocabulary.uncefact.org/taxPointDate

***

### taxType? {#taxtype}

> `optional` **taxType?**: `string`

The type, expressed as text, of this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/taxType

***

### taxTypeCode? {#taxtypecode}

> `optional` **taxTypeCode?**: [`UneceTaxTypeCodeList`](../type-aliases/UneceTaxTypeCodeList.md)

The code specifying the type of trade related tax, levy or duty, such as a code for a Value Added Tax (VAT) [Reference
United Nations Code List (UNCL) 5153].

#### See

https://vocabulary.uncefact.org/taxTypeCode

***

### timeReferenceDueDateTypeCode? {#timereferenceduedatetypecode}

> `optional` **timeReferenceDueDateTypeCode?**: [`UneceTimeReferenceCodeList`](../type-aliases/UneceTimeReferenceCodeList.md)

The code specifying a type of due date for this trade tax.

#### See

https://vocabulary.uncefact.org/timeReferenceDueDateTypeCode

***

### tradeTaxCurrencyCode? {#tradetaxcurrencycode}

> `optional` **tradeTaxCurrencyCode?**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)

The code specifying the currency for this trade related tax, levy or duty [UNCL 6345].

#### See

https://vocabulary.uncefact.org/tradeTaxCurrencyCode

***

### tradeTaxFunctionCode? {#tradetaxfunctioncode}

> `optional` **tradeTaxFunctionCode?**: `string`

A code specifying the function of this trade tax.

#### See

https://vocabulary.uncefact.org/tradeTaxFunctionCode

***

### tradeTaxPaymentMethodCode? {#tradetaxpaymentmethodcode}

> `optional` **tradeTaxPaymentMethodCode?**: [`UnecePaymentMethodCodeList`](../type-aliases/UnecePaymentMethodCodeList.md)

The code specifying the payment method for this trade related tax, levy or duty.

#### See

https://vocabulary.uncefact.org/tradeTaxPaymentMethodCode

***

### unitBasisAmount? {#unitbasisamount}

> `optional` **unitBasisAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that constitutes the per unit basis on which this trade related tax, levy or duty is calculated.

#### See

https://vocabulary.uncefact.org/unitBasisAmount
