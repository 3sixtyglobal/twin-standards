# Interface: ILineTradeSettlement

The information, at a line level, that enables the reconciliation of a financial transaction with the item(s) that the
financial transaction is intended to settle, for example a commercial invoice.

## See

https://vocabulary.uncefact.org/LineTradeSettlement

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

> **type**: `"LineTradeSettlement"`

JSON-LD Type.

***

### additionalDocument?

> `optional` **additionalDocument**: [`IDocument`](IDocument.md)[]

An additional document referenced in this line trade settlement.

#### See

https://vocabulary.uncefact.org/additionalDocument

***

### amountDirectionCode?

> `optional` **amountDirectionCode**: `string`

The code, specifying the direction, either an addition or subtraction, for the amount of this line trade settlement.

#### See

https://vocabulary.uncefact.org/amountDirectionCode

***

### applicableTax?

> `optional` **applicableTax**: [`ITradeTax`](ITradeTax.md)[]

A tax applicable to this line trade settlement.

#### See

https://vocabulary.uncefact.org/applicableTax

***

### associatedDocument?

> `optional` **associatedDocument**: [`IDocument`](IDocument.md)[]

A document associated with this line trade settlement.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### associatedDocumentLineDocument?

> `optional` **associatedDocumentLineDocument**: [`IDocumentLineDocument`](IDocumentLineDocument.md)[]

A document line associated with this line trade settlement.

#### See

https://vocabulary.uncefact.org/associatedDocumentLineDocument

***

### billingPeriod?

> `optional` **billingPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

A billing period specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/billingPeriod

***

### creditorReferenceTypeCode?

> `optional` **creditorReferenceTypeCode**: `string`

A code specifying a type of creditor reference for this line trade settlement.

#### See

https://vocabulary.uncefact.org/creditorReferenceTypeCode

***

### discountIndicator?

> `optional` **discountIndicator**: `boolean`

The indication of whether or not a discount applies to the item in this line trade settlement.

#### See

https://vocabulary.uncefact.org/discountIndicator

***

### invoiceDateTime?

> `optional` **invoiceDateTime**: `string`

The date, time, date time or other date time value of the invoice in this line trade settlement.

#### See

https://vocabulary.uncefact.org/invoiceDateTime

***

### invoiceDocument?

> `optional` **invoiceDocument**: [`IDocument`](IDocument.md)[]

An invoice document referenced in this line trade settlement.

#### See

https://vocabulary.uncefact.org/invoiceDocument

***

### invoiceIssuerReference?

> `optional` **invoiceIssuerReference**: `string`

The invoice issuer reference, expressed as text, for this line settlement.

#### See

https://vocabulary.uncefact.org/invoiceIssuerReference

***

### invoiceeParty?

> `optional` **invoiceeParty**: [`ITradeParty`](ITradeParty.md)

The party to whom an invoice is issued for this line trade settlement.

#### See

https://vocabulary.uncefact.org/invoiceeParty

***

### payableSpecifiedAccountingAccount?

> `optional` **payableSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

A payable accounting account specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/payableSpecifiedAccountingAccount

***

### payerParty?

> `optional` **payerParty**: [`ITradeParty`](ITradeParty.md)[]

The payer party for this line trade settlement.

#### See

https://vocabulary.uncefact.org/payerParty

***

### payerReference?

> `optional` **payerReference**: `string`

The payer reference, expressed as text, for this line trade settlement.

#### See

https://vocabulary.uncefact.org/payerReference

***

### paymentAmount?

> `optional` **paymentAmount**: [`IAmountType`](IAmountType.md)[]

A monetary value of a payment for this line trade settlement.

#### See

https://vocabulary.uncefact.org/paymentAmount

***

### paymentReference?

> `optional` **paymentReference**: `string`

A payment reference, expressed as text, for this line trade settlement.

#### See

https://vocabulary.uncefact.org/paymentReference

***

### priceCurrencyCode?

> `optional` **priceCurrencyCode**: [`CurrencyCodeList`](../type-aliases/CurrencyCodeList.md)[]

The code specifying the price currency for this line trade settlement.

#### See

https://vocabulary.uncefact.org/priceCurrencyCode

***

### purchaseSpecifiedAccountingAccount?

> `optional` **purchaseSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

A purchase accounting account specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/purchaseSpecifiedAccountingAccount

***

### receivableSpecifiedAccountingAccount?

> `optional` **receivableSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

A receivable accounting account specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/receivableSpecifiedAccountingAccount

***

### salesSpecifiedAccountingAccount?

> `optional` **salesSpecifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

A sales accounting account specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/salesSpecifiedAccountingAccount

***

### specifiedAccountingAccount?

> `optional` **specifiedAccountingAccount**: [`IAccountingAccount`](IAccountingAccount.md)[]

An accounting account specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedAccountingAccount

***

### specifiedAllowanceCharge?

> `optional` **specifiedAllowanceCharge**: [`ITradeAllowanceCharge`](ITradeAllowanceCharge.md)[]

An allowance or charge specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedAllowanceCharge

***

### specifiedFinancialAdjustment?

> `optional` **specifiedFinancialAdjustment**: [`IFinancialAdjustment`](IFinancialAdjustment.md)[]

A financial adjustment specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedFinancialAdjustment

***

### specifiedFinancialCard?

> `optional` **specifiedFinancialCard**: [`IFinancialCard`](IFinancialCard.md)[]

A financial card specified in this line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedFinancialCard

***

### specifiedPaymentTerms?

> `optional` **specifiedPaymentTerms**: [`IPaymentTerms`](IPaymentTerms.md)[]

Payment terms specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedPaymentTerms

***

### specifiedServiceCharge?

> `optional` **specifiedServiceCharge**: [`IServiceCharge`](IServiceCharge.md)[]

A logistics service charge specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedServiceCharge

***

### specifiedTradeSettlementLineMonetarySummation?

> `optional` **specifiedTradeSettlementLineMonetarySummation**: [`ITradeSettlementLineMonetarySummation`](ITradeSettlementLineMonetarySummation.md)[]

The monetary summation totals specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedTradeSettlementLineMonetarySummation

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this line trade settlement.

#### See

https://vocabulary.uncefact.org/statusCode

***

### subtotalCalculatedTax?

> `optional` **subtotalCalculatedTax**: [`ITradeTax`](ITradeTax.md)[]

A tax subtotal calculated for this line trade settlement.

#### See

https://vocabulary.uncefact.org/subtotalCalculatedTax

***

### totalAdjustmentAmount?

> `optional` **totalAdjustmentAmount**: [`IAmountType`](IAmountType.md)[]

The monetary value of the total adjustment for this line trade settlement.

#### See

https://vocabulary.uncefact.org/totalAdjustmentAmount

***

### tradeTransaction?

> `optional` **tradeTransaction**: [`ILineTradeTransaction`](ILineTradeTransaction.md)[]

A trade transaction referenced in this line trade settlement.

#### See

https://vocabulary.uncefact.org/tradeTransaction
