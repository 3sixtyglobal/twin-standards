# Interface: IUnecePaymentTradeSettlement

The information that enables the reconciliation of a payment with the item(s) that the payment is intended to settle,
for example a commercial invoice.

## See

https://vocabulary.uncefact.org/PaymentTradeSettlement

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

> **type**: `"PaymentTradeSettlement"`

JSON-LD Type.

***

### acceptedAmount?

> `optional` **acceptedAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value accepted for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/acceptedAmount

***

### additionalDescription?

> `optional` **additionalDescription**: `string`

A description, expressed as text, of additional information supplied to enable the matching of an entry with the items
that the payment is intended to settle.

#### See

https://vocabulary.uncefact.org/additionalDescription

***

### applicableTax?

> `optional` **applicableTax**: [`IUneceTradeTax`](IUneceTradeTax.md)[]

The tax applicable to this payment trade settlement.

#### See

https://vocabulary.uncefact.org/applicableTax

***

### creationDateTime?

> `optional` **creationDateTime**: `string`

The creation date, time, date time, or other date time value for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### creditNoteAmount?

> `optional` **creditNoteAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

The monetary value of the credit note for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/creditNoteAmount

***

### creditorReferenceId?

> `optional` **creditorReferenceId**: `string`

The unique identifier of the creditor reference for this payment trade settlement, such as a specific identifier
assigned by the creditor to reference the financial transaction.

#### See

https://vocabulary.uncefact.org/creditorReferenceId

***

### creditorReferenceIssuerId?

> `optional` **creditorReferenceIssuerId**: `string`

The unique identifier of the issuer of the creditor reference for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/creditorReferenceIssuerId

***

### creditorReferenceTypeCode?

> `optional` **creditorReferenceTypeCode**: `string`

The code specifying the type of creditor reference for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/creditorReferenceTypeCode

***

### discountAmount?

> `optional` **discountAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

The monetary value of the payment that is the discount for this trade settlement, such as from the application of an
agreed discount to the amount due.

#### See

https://vocabulary.uncefact.org/discountAmount

***

### dueDateTime?

> `optional` **dueDateTime**: `string`

The due date, time, date time, or other date time value for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/dueDateTime

***

### duePayableAmount?

> `optional` **duePayableAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

The monetary value of the payment that is the exact amount due and payable for this trade settlement, such as the amount
due to the creditor.

#### See

https://vocabulary.uncefact.org/duePayableAmount

***

### identifiedGuarantee?

> `optional` **identifiedGuarantee**: [`IUneceGuarantee`](IUneceGuarantee.md)[]

The financial guarantee identified for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/identifiedGuarantee

***

### instruction?

> `optional` **instruction**: `string`

An instruction, expressed as text, for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/instruction

***

### invoicePayerAssignedReferenceId?

> `optional` **invoicePayerAssignedReferenceId**: `string`

The identifier of the invoice payer assigned reference of this payment trade settlement.

#### See

https://vocabulary.uncefact.org/invoicePayerAssignedReferenceId

***

### payeeParty?

> `optional` **payeeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The payee party for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/payeeParty

***

### payerParty?

> `optional` **payerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The payer party for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/payerParty

***

### paymentAmount?

> `optional` **paymentAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the payment for this trade settlement payment.

#### See

https://vocabulary.uncefact.org/paymentAmount

***

### paymentApplicableCurrencyExchange?

> `optional` **paymentApplicableCurrencyExchange**: [`IUneceCurrencyExchange`](IUneceCurrencyExchange.md)[]

The currency exchange applicable to this payment trade settlement.

#### See

https://vocabulary.uncefact.org/paymentApplicableCurrencyExchange

***

### paymentCurrencyCode?

> `optional` **paymentCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)[]

The code specifying the currency for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/paymentCurrencyCode

***

### penaltyPercent?

> `optional` **penaltyPercent**: `string`

The penalty percentage related to this payment trade settlement.

#### See

https://vocabulary.uncefact.org/penaltyPercent

***

### priorityCode?

> `optional` **priorityCode**: `string`

The code specifying the priority for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/priorityCode

***

### proprietaryCreditorReferenceType?

> `optional` **proprietaryCreditorReferenceType**: `string`

The type of proprietary creditor reference, expressed as text, for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/proprietaryCreditorReferenceType

***

### receiptDateTime?

> `optional` **receiptDateTime**: `string`

The receipt date, time, date time, or other date time value for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/receiptDateTime

***

### recordedExperienceItem?

> `optional` **recordedExperienceItem**: [`IUneceExperienceItem`](IUneceExperienceItem.md)[]

A specified experience item recorded for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/recordedExperienceItem

***

### refundAmount?

> `optional` **refundAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value of the refund related to this payment trade settlement.

#### See

https://vocabulary.uncefact.org/refundAmount

***

### requestedAmount?

> `optional` **requestedAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value requested for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/requestedAmount

***

### specifiedPaymentMeans?

> `optional` **specifiedPaymentMeans**: [`IUnecePaymentMeans`](IUnecePaymentMeans.md)[]

The payment means specified for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedPaymentMeans

***

### specifiedTradeSettlementPaymentMonetarySummation?

> `optional` **specifiedTradeSettlementPaymentMonetarySummation**: [`IUneceTradeSettlementPaymentMonetarySummation`](IUneceTradeSettlementPaymentMonetarySummation.md)[]

The monetary summation totals specified for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedTradeSettlementPaymentMonetarySummation

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this payment trade settlement.

#### See

https://vocabulary.uncefact.org/statusCode

***

### taxAmount?

> `optional` **taxAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the tax related to this payment trade settlement.

#### See

https://vocabulary.uncefact.org/taxAmount

***

### totalTaxAmount?

> `optional` **totalTaxAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

The monetary value of the total tax for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/totalTaxAmount

***

### transferFeeInclusiveIndicator?

> `optional` **transferFeeInclusiveIndicator**: `boolean`

The indication of whether or not this payment trade settlement includes a transfer fee.

#### See

https://vocabulary.uncefact.org/transferFeeInclusiveIndicator

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of this payment trade settlement.

#### See

https://vocabulary.uncefact.org/typeCode

***

### unstructuredDescription?

> `optional` **unstructuredDescription**: `string`

An unstructured description, expressed as text, for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/unstructuredDescription
