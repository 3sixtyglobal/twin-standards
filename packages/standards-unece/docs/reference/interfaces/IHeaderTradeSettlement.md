# Interface: IHeaderTradeSettlement

The information, at a header level, that enables the reconciliation of a financial transaction, with the item(s) that
the financial transaction is intended to settle, such as a commercial invoice.

## See

https://vocabulary.uncefact.org/HeaderTradeSettlement

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

> **type**: `"HeaderTradeSettlement"`

JSON-LD Type.

***

### applicableTax?

> `optional` **applicableTax**: [`ITradeTax`](ITradeTax.md)[]

A tax applicable to this header trade settlement.

#### See

https://vocabulary.uncefact.org/applicableTax

***

### billingPeriod?

> `optional` **billingPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

A billing period specified for this header trade settlement.

#### See

https://vocabulary.uncefact.org/billingPeriod

***

### closingBookDueDateTime?

> `optional` **closingBookDueDateTime**: `string`

The date, time, date time or other date time value when the book closing is due for this header trade settlement.

#### See

https://vocabulary.uncefact.org/closingBookDueDateTime

***

### creditNoteAmount?

> `optional` **creditNoteAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the credit note for this header trade settlement.

#### See

https://vocabulary.uncefact.org/creditNoteAmount

***

### creditReason?

> `optional` **creditReason**: `string`

A textual description of the reason for a credit being given in this header trade settlement.

#### See

https://vocabulary.uncefact.org/creditReason

***

### creditReasonCode?

> `optional` **creditReasonCode**: `string`

The code specifying the reason for a credit being given in this header trade settlement.

#### See

https://vocabulary.uncefact.org/creditReasonCode

***

### creditorReferenceId?

> `optional` **creditorReferenceId**: `string`

The identifier of the creditor reference for this header trade settlement, such as a specific identifier assigned by the
creditor to reference the financial transaction.

#### See

https://vocabulary.uncefact.org/creditorReferenceId

***

### creditorReferenceIssuerId?

> `optional` **creditorReferenceIssuerId**: `string`

An identifier of the creditor reference issuer for this header trade settlement.

#### See

https://vocabulary.uncefact.org/creditorReferenceIssuerId

***

### creditorReferenceType?

> `optional` **creditorReferenceType**: `string`

A creditor reference type, expressed as text, for this header trade settlement.

#### See

https://vocabulary.uncefact.org/creditorReferenceType

***

### creditorReferenceTypeCode?

> `optional` **creditorReferenceTypeCode**: `string`

A code specifying the creditor reference type for this header trade settlement.

#### See

https://vocabulary.uncefact.org/creditorReferenceTypeCode

***

### debitNoteAmount?

> `optional` **debitNoteAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the debit note for this header trade settlement.

#### See

https://vocabulary.uncefact.org/debitNoteAmount

***

### description?

> `optional` **description**: `string`

A textual description of this header trade settlement.

#### See

https://vocabulary.uncefact.org/description

***

### discountIndicator?

> `optional` **discountIndicator**: `boolean`

The indication of whether or not this header trade settlement includes a discount amount.

#### See

https://vocabulary.uncefact.org/discountIndicator

***

### duePayableAmount?

> `optional` **duePayableAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value that is an exact amount due and payable for this header trade settlement, such as the amount due to the
creditor.

#### See

https://vocabulary.uncefact.org/duePayableAmount

***

### factoringAgreementDocument?

> `optional` **factoringAgreementDocument**: [`IDocument`](IDocument.md)[]

A factoring agreement document referenced in this header trade settlement.

#### See

https://vocabulary.uncefact.org/factoringAgreementDocument

***

### factoringListDocument?

> `optional` **factoringListDocument**: [`IDocument`](IDocument.md)[]

A factoring list document referenced in this header trade settlement.

#### See

https://vocabulary.uncefact.org/factoringListDocument

***

### invoiceApplicableCurrencyExchange?

> `optional` **invoiceApplicableCurrencyExchange**: [`ICurrencyExchange`](ICurrencyExchange.md)

The currency exchange applicable to the invoice in this header trade settlement.

#### See

https://vocabulary.uncefact.org/invoiceApplicableCurrencyExchange

***

### invoiceCurrencyCode?

> `optional` **invoiceCurrencyCode**: [`CurrencyCodeList`](../type-aliases/CurrencyCodeList.md)[]

The code specifying the invoice currency for this header trade settlement.

#### See

https://vocabulary.uncefact.org/invoiceCurrencyCode

***

### invoiceDateTime?

> `optional` **invoiceDateTime**: `string`

The date, time, date time or other date time value of the invoice in this header trade settlement.

#### See

https://vocabulary.uncefact.org/invoiceDateTime

***

### invoiceDocument?

> `optional` **invoiceDocument**: [`IDocument`](IDocument.md)[]

An invoice document referenced by this header trade settlement.

#### See

https://vocabulary.uncefact.org/invoiceDocument

***

### invoiceIssuerReference?

> `optional` **invoiceIssuerReference**: `string`

The invoice issuer reference, expressed as text, for this header trade settlement.

#### See

https://vocabulary.uncefact.org/invoiceIssuerReference

***

### invoiceeParty?

> `optional` **invoiceeParty**: [`ITradeParty`](ITradeParty.md)

The party to whom an invoice is issued for this header trade settlement.

#### See

https://vocabulary.uncefact.org/invoiceeParty

***

### invoicerParty?

> `optional` **invoicerParty**: [`ITradeParty`](ITradeParty.md)

The party issuing the invoice for this header trade settlement.

#### See

https://vocabulary.uncefact.org/invoicerParty

***

### letterOfCreditDocument?

> `optional` **letterOfCreditDocument**: [`IDocument`](IDocument.md)[]

The letter of credit document referenced in this header trade settlement.

#### See

https://vocabulary.uncefact.org/letterOfCreditDocument

***

### nextInvoiceDateTime?

> `optional` **nextInvoiceDateTime**: `string`

A date, time, date time or other date time value of a next invoice or invoices in this header trade settlement.

#### See

https://vocabulary.uncefact.org/nextInvoiceDateTime

***

### orderApplicableCurrencyExchange?

> `optional` **orderApplicableCurrencyExchange**: [`ICurrencyExchange`](ICurrencyExchange.md)[]

The currency exchange applicable to the order currency in this header trade settlement.

#### See

https://vocabulary.uncefact.org/orderApplicableCurrencyExchange

***

### orderCurrencyCode?

> `optional` **orderCurrencyCode**: [`CurrencyCodeList`](../type-aliases/CurrencyCodeList.md)[]

The code specifying the currency of the order for this header trade settlement.

#### See

https://vocabulary.uncefact.org/orderCurrencyCode

***

### outstandingSpecifiedMonetarySummation?

> `optional` **outstandingSpecifiedMonetarySummation**: [`ITradeSettlementHeaderMonetarySummation`](ITradeSettlementHeaderMonetarySummation.md)[]

The monetary summation totals outstanding for this header trade settlement.

#### See

https://vocabulary.uncefact.org/outstandingSpecifiedMonetarySummation

***

### payableSpecifiedAccountingAccount?

> `optional` **payableSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

A payable accounting account specified for this header trade settlement.

#### See

https://vocabulary.uncefact.org/payableSpecifiedAccountingAccount

***

### payeeParty?

> `optional` **payeeParty**: [`ITradeParty`](ITradeParty.md)[]

A payee party for this header trade settlement.

#### See

https://vocabulary.uncefact.org/payeeParty

***

### payerParty?

> `optional` **payerParty**: [`ITradeParty`](ITradeParty.md)[]

The payer party for this header trade settlement.

#### See

https://vocabulary.uncefact.org/payerParty

***

### payerReference?

> `optional` **payerReference**: `string`

The payer reference, expressed as text, for this header trade settlement.

#### See

https://vocabulary.uncefact.org/payerReference

***

### paymentAmount?

> `optional` **paymentAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a payment for this header trade settlement.

#### See

https://vocabulary.uncefact.org/paymentAmount

***

### paymentApplicableCurrencyExchange?

> `optional` **paymentApplicableCurrencyExchange**: [`ICurrencyExchange`](ICurrencyExchange.md)[]

The currency exchange applicable to the payment in this header trade settlement.

#### See

https://vocabulary.uncefact.org/paymentApplicableCurrencyExchange

***

### paymentCurrencyCode?

> `optional` **paymentCurrencyCode**: [`CurrencyCodeList`](../type-aliases/CurrencyCodeList.md)[]

The code specifying the payment currency for this header trade settlement.

#### See

https://vocabulary.uncefact.org/paymentCurrencyCode

***

### paymentReference?

> `optional` **paymentReference**: `string`

A payment reference, expressed as text, for this header trade settlement.

#### See

https://vocabulary.uncefact.org/paymentReference

***

### priceApplicableCurrencyExchange?

> `optional` **priceApplicableCurrencyExchange**: [`ICurrencyExchange`](ICurrencyExchange.md)[]

The currency exchange applicable to the price in this header trade settlement.

#### See

https://vocabulary.uncefact.org/priceApplicableCurrencyExchange

***

### priceCurrencyCode?

> `optional` **priceCurrencyCode**: [`CurrencyCodeList`](../type-aliases/CurrencyCodeList.md)[]

The code specifying the price currency for this header trade settlement.

#### See

https://vocabulary.uncefact.org/priceCurrencyCode

***

### proFormaInvoiceDocument?

> `optional` **proFormaInvoiceDocument**: [`IDocument`](IDocument.md)[]

The pro-forma invoice document referenced by this header trade settlement.

#### See

https://vocabulary.uncefact.org/proFormaInvoiceDocument

***

### purchaseSpecifiedAccountingAccount?

> `optional` **purchaseSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

A purchase accounting account specified for this header trade settlement.

#### See

https://vocabulary.uncefact.org/purchaseSpecifiedAccountingAccount

***

### quotationApplicableCurrencyExchange?

> `optional` **quotationApplicableCurrencyExchange**: [`ICurrencyExchange`](ICurrencyExchange.md)[]

The currency exchange applicable to the quotation currency in this header trade settlement.

#### See

https://vocabulary.uncefact.org/quotationApplicableCurrencyExchange

***

### quotationCurrencyCode?

> `optional` **quotationCurrencyCode**: [`CurrencyCodeList`](../type-aliases/CurrencyCodeList.md)[]

The code specifying the quotation currency for this header trade settlement.

#### See

https://vocabulary.uncefact.org/quotationCurrencyCode

***

### receivableSpecifiedAccountingAccount?

> `optional` **receivableSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

A receivable accounting account specified for this header trade settlement.

#### See

https://vocabulary.uncefact.org/receivableSpecifiedAccountingAccount

***

### relevantParty?

> `optional` **relevantParty**: [`ITradeParty`](ITradeParty.md)[]

A relevant party for this header trade settlement.

#### See

https://vocabulary.uncefact.org/relevantParty

***

### requestedFinancingAmount?

> `optional` **requestedFinancingAmount**: [`IAmountType`](IAmountType.md)[]

A financing monetary value requested for this header trade settlement.

#### See

https://vocabulary.uncefact.org/requestedFinancingAmount

***

### requestedFinancingRatePercent?

> `optional` **requestedFinancingRatePercent**: `string`

The financing rate, expressed as a percentage, requested for this header trade settlement.

#### See

https://vocabulary.uncefact.org/requestedFinancingRatePercent

***

### salesSpecifiedAccountingAccount?

> `optional` **salesSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

A sales accounting account specified for this header trade settlement.

#### See

https://vocabulary.uncefact.org/salesSpecifiedAccountingAccount

***

### scheduledPaymentDateTime?

> `optional` **scheduledPaymentDateTime**: `string`

The date, time, date time or other date time value of the scheduled payment of this header trade settlement.

#### See

https://vocabulary.uncefact.org/scheduledPaymentDateTime

***

### specifiedAdvancePayment?

> `optional` **specifiedAdvancePayment**: [`IAdvancePayment`](IAdvancePayment.md)[]

An advance payment specified in this header trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedAdvancePayment

***

### specifiedAllowanceCharge?

> `optional` **specifiedAllowanceCharge**: [`ITradeAllowanceCharge`](ITradeAllowanceCharge.md)[]

An allowance or charge specified for this header trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedAllowanceCharge

***

### specifiedFinancialAdjustment?

> `optional` **specifiedFinancialAdjustment**: [`IFinancialAdjustment`](IFinancialAdjustment.md)[]

A financial adjustment specified for this header trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedFinancialAdjustment

***

### specifiedFinancialCard?

> `optional` **specifiedFinancialCard**: [`IFinancialCard`](IFinancialCard.md)[]

A financial card specified in this header trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedFinancialCard

***

### specifiedInstalmentPlan?

> `optional` **specifiedInstalmentPlan**: [`IInstalmentPlan`](IInstalmentPlan.md)[]

The payment instalment plan specified for this header trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedInstalmentPlan

***

### specifiedPaymentMeans?

> `optional` **specifiedPaymentMeans**: [`IPaymentMeans`](IPaymentMeans.md)[]

A payment means specified for this header trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedPaymentMeans

***

### specifiedPaymentTerms?

> `optional` **specifiedPaymentTerms**: [`IPaymentTerms`](IPaymentTerms.md)[]

Payment terms specified for this header trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedPaymentTerms

***

### specifiedServiceCharge?

> `optional` **specifiedServiceCharge**: [`IServiceCharge`](IServiceCharge.md)[]

A logistics service charge specified for this header trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedServiceCharge

***

### specifiedTradeSettlementHeaderMonetarySummation?

> `optional` **specifiedTradeSettlementHeaderMonetarySummation**: [`ITradeSettlementHeaderMonetarySummation`](ITradeSettlementHeaderMonetarySummation.md)[]

The monetary summation totals specified for this header trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedTradeSettlementHeaderMonetarySummation

***

### subtotalCalculatedTax?

> `optional` **subtotalCalculatedTax**: [`ITradeTax`](ITradeTax.md)[]

A tax subtotal calculated for this header trade settlement.

#### See

https://vocabulary.uncefact.org/subtotalCalculatedTax

***

### taxApplicableCurrencyExchange?

> `optional` **taxApplicableCurrencyExchange**: [`ICurrencyExchange`](ICurrencyExchange.md)[]

A currency exchange applicable to a tax in this header trade settlement.

#### See

https://vocabulary.uncefact.org/taxApplicableCurrencyExchange

***

### taxCurrencyCode?

> `optional` **taxCurrencyCode**: [`CurrencyCodeList`](../type-aliases/CurrencyCodeList.md)[]

The code specifying the tax currency for this header trade settlement.

#### See

https://vocabulary.uncefact.org/taxCurrencyCode

***

### totalAdjustmentAmount?

> `optional` **totalAdjustmentAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total adjustment for this header trade settlement.

#### See

https://vocabulary.uncefact.org/totalAdjustmentAmount

***

### totalInvoiceAmount?

> `optional` **totalInvoiceAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of the total invoice on which this header trade settlement is calculated.

#### See

https://vocabulary.uncefact.org/totalInvoiceAmount

***

### ultimatePayeeParty?

> `optional` **ultimatePayeeParty**: [`ITradeParty`](ITradeParty.md)[]

An ultimate payee party in this header trade settlement.

#### See

https://vocabulary.uncefact.org/ultimatePayeeParty
