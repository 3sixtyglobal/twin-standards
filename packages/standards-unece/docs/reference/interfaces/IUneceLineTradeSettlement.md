# Interface: IUneceLineTradeSettlement

The information, at a line level, that enables the reconciliation of a financial transaction with the item(s) that the
financial transaction is intended to settle, for example a commercial invoice.

## See

https://vocabulary.uncefact.org/LineTradeSettlement

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

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

> `optional` **additionalDocument**: [`IUneceDocument`](IUneceDocument.md)[]

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

> `optional` **applicableTax**: [`IUneceTradeTax`](IUneceTradeTax.md)[]

A tax applicable to this line trade settlement.

#### See

https://vocabulary.uncefact.org/applicableTax

***

### associatedDocument?

> `optional` **associatedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A document associated with this line trade settlement.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### associatedDocumentLineDocument?

> `optional` **associatedDocumentLineDocument**: [`IUneceDocumentLineDocument`](IUneceDocumentLineDocument.md)[]

A document line associated with this line trade settlement.

#### See

https://vocabulary.uncefact.org/associatedDocumentLineDocument

***

### billingPeriod?

> `optional` **billingPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

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

> `optional` **invoiceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

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

> `optional` **invoiceeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party to whom an invoice is issued for this line trade settlement.

#### See

https://vocabulary.uncefact.org/invoiceeParty

***

### payableSpecifiedAccountingAccount?

> `optional` **payableSpecifiedAccountingAccount**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)[]

A payable accounting account specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/payableSpecifiedAccountingAccount

***

### payerParty?

> `optional` **payerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

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

> `optional` **paymentAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

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

> `optional` **priceCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)

The code specifying the price currency for this line trade settlement.

#### See

https://vocabulary.uncefact.org/priceCurrencyCode

***

### purchaseSpecifiedAccountingAccount?

> `optional` **purchaseSpecifiedAccountingAccount**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)[]

A purchase accounting account specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/purchaseSpecifiedAccountingAccount

***

### receivableSpecifiedAccountingAccount?

> `optional` **receivableSpecifiedAccountingAccount**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)[]

A receivable accounting account specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/receivableSpecifiedAccountingAccount

***

### salesSpecifiedAccountingAccount?

> `optional` **salesSpecifiedAccountingAccount**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)[]

A sales accounting account specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/salesSpecifiedAccountingAccount

***

### specifiedAccountingAccount?

> `optional` **specifiedAccountingAccount**: [`IUneceAccountingAccount`](IUneceAccountingAccount.md)[]

An accounting account specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedAccountingAccount

***

### specifiedAllowanceCharge?

> `optional` **specifiedAllowanceCharge**: [`IUneceTradeAllowanceCharge`](IUneceTradeAllowanceCharge.md)[]

An allowance or charge specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedAllowanceCharge

***

### specifiedFinancialAdjustment?

> `optional` **specifiedFinancialAdjustment**: [`IUneceFinancialAdjustment`](IUneceFinancialAdjustment.md)[]

A financial adjustment specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedFinancialAdjustment

***

### specifiedFinancialCard?

> `optional` **specifiedFinancialCard**: [`IUneceFinancialCard`](IUneceFinancialCard.md)[]

A financial card specified in this line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedFinancialCard

***

### specifiedPaymentTerms?

> `optional` **specifiedPaymentTerms**: [`IUnecePaymentTerms`](IUnecePaymentTerms.md)[]

Payment terms specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedPaymentTerms

***

### specifiedServiceCharge?

> `optional` **specifiedServiceCharge**: [`IUneceServiceCharge`](IUneceServiceCharge.md)[]

A logistics service charge specified for this line trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedServiceCharge

***

### specifiedTradeSettlementLineMonetarySummation?

> `optional` **specifiedTradeSettlementLineMonetarySummation**: [`IUneceTradeSettlementLineMonetarySummation`](IUneceTradeSettlementLineMonetarySummation.md)

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

> `optional` **subtotalCalculatedTax**: [`IUneceTradeTax`](IUneceTradeTax.md)[]

A tax subtotal calculated for this line trade settlement.

#### See

https://vocabulary.uncefact.org/subtotalCalculatedTax

***

### totalAdjustmentAmount?

> `optional` **totalAdjustmentAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the total adjustment for this line trade settlement.

#### See

https://vocabulary.uncefact.org/totalAdjustmentAmount

***

### tradeTransaction?

> `optional` **tradeTransaction**: [`IUneceLineTradeTransaction`](IUneceLineTradeTransaction.md)[]

A trade transaction referenced in this line trade settlement.

#### See

https://vocabulary.uncefact.org/tradeTransaction
