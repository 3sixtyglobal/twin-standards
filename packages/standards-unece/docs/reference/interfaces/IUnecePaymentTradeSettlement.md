# Interface: IUnecePaymentTradeSettlement

The information that enables the reconciliation of a payment with the item(s) that the payment is intended to settle,
for example a commercial invoice.

## See

https://vocabulary.uncefact.org/PaymentTradeSettlement

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"PaymentTradeSettlement"`

JSON-LD Type.

***

### acceptedAmount? {#acceptedamount}

> `optional` **acceptedAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value accepted for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/acceptedAmount

***

### additionalDescription? {#additionaldescription}

> `optional` **additionalDescription**: `string`

A description, expressed as text, of additional information supplied to enable the matching of an entry with the items
that the payment is intended to settle.

#### See

https://vocabulary.uncefact.org/additionalDescription

***

### applicableTax? {#applicabletax}

> `optional` **applicableTax**: [`IUneceTradeTax`](IUneceTradeTax.md)

The tax applicable to this payment trade settlement.

#### See

https://vocabulary.uncefact.org/applicableTax

***

### creationDateTime? {#creationdatetime}

> `optional` **creationDateTime**: `string`

The creation date, time, date time, or other date time value for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### creditNoteAmount? {#creditnoteamount}

> `optional` **creditNoteAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the credit note for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/creditNoteAmount

***

### creditorReferenceId? {#creditorreferenceid}

> `optional` **creditorReferenceId**: `string` \| `IJsonLdValueObject`

The unique identifier of the creditor reference for this payment trade settlement, such as a specific identifier
assigned by the creditor to reference the financial transaction.

#### See

https://vocabulary.uncefact.org/creditorReferenceId

***

### creditorReferenceIssuerId? {#creditorreferenceissuerid}

> `optional` **creditorReferenceIssuerId**: `string` \| `IJsonLdValueObject`

The unique identifier of the issuer of the creditor reference for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/creditorReferenceIssuerId

***

### creditorReferenceTypeCode? {#creditorreferencetypecode}

> `optional` **creditorReferenceTypeCode**: `string`

The code specifying the type of creditor reference for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/creditorReferenceTypeCode

***

### discountAmount? {#discountamount}

> `optional` **discountAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the payment that is the discount for this trade settlement, such as from the application of an
agreed discount to the amount due.

#### See

https://vocabulary.uncefact.org/discountAmount

***

### dueDateTime? {#duedatetime}

> `optional` **dueDateTime**: `string`

The due date, time, date time, or other date time value for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/dueDateTime

***

### duePayableAmount? {#duepayableamount}

> `optional` **duePayableAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the payment that is the exact amount due and payable for this trade settlement, such as the amount
due to the creditor.

#### See

https://vocabulary.uncefact.org/duePayableAmount

***

### identifiedGuarantee? {#identifiedguarantee}

> `optional` **identifiedGuarantee**: [`IUneceGuarantee`](IUneceGuarantee.md)

The financial guarantee identified for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/identifiedGuarantee

***

### instruction? {#instruction}

> `optional` **instruction**: `string`

An instruction, expressed as text, for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/instruction

***

### invoicePayerAssignedReferenceId? {#invoicepayerassignedreferenceid}

> `optional` **invoicePayerAssignedReferenceId**: `string` \| `IJsonLdValueObject`

The identifier of the invoice payer assigned reference of this payment trade settlement.

#### See

https://vocabulary.uncefact.org/invoicePayerAssignedReferenceId

***

### payeeParty? {#payeeparty}

> `optional` **payeeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The payee party for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/payeeParty

***

### payerParty? {#payerparty}

> `optional` **payerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The payer party for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/payerParty

***

### paymentAmount? {#paymentamount}

> `optional` **paymentAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the payment for this trade settlement payment.

#### See

https://vocabulary.uncefact.org/paymentAmount

***

### paymentApplicableCurrencyExchange? {#paymentapplicablecurrencyexchange}

> `optional` **paymentApplicableCurrencyExchange**: [`IUneceCurrencyExchange`](IUneceCurrencyExchange.md)

The currency exchange applicable to this payment trade settlement.

#### See

https://vocabulary.uncefact.org/paymentApplicableCurrencyExchange

***

### paymentCurrencyCode? {#paymentcurrencycode}

> `optional` **paymentCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)

The code specifying the currency for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/paymentCurrencyCode

***

### penaltyPercent? {#penaltypercent}

> `optional` **penaltyPercent**: `string`

The penalty percentage related to this payment trade settlement.

#### See

https://vocabulary.uncefact.org/penaltyPercent

***

### priorityCode? {#prioritycode}

> `optional` **priorityCode**: `string`

The code specifying the priority for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/priorityCode

***

### proprietaryCreditorReferenceType? {#proprietarycreditorreferencetype}

> `optional` **proprietaryCreditorReferenceType**: `string`

The type of proprietary creditor reference, expressed as text, for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/proprietaryCreditorReferenceType

***

### receiptDateTime? {#receiptdatetime}

> `optional` **receiptDateTime**: `string`

The receipt date, time, date time, or other date time value for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/receiptDateTime

***

### recordedExperienceItem? {#recordedexperienceitem}

> `optional` **recordedExperienceItem**: [`IUneceExperienceItem`](IUneceExperienceItem.md)[]

A specified experience item recorded for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/recordedExperienceItem

***

### refundAmount? {#refundamount}

> `optional` **refundAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the refund related to this payment trade settlement.

#### See

https://vocabulary.uncefact.org/refundAmount

***

### requestedAmount? {#requestedamount}

> `optional` **requestedAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value requested for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/requestedAmount

***

### specifiedPaymentMeans? {#specifiedpaymentmeans}

> `optional` **specifiedPaymentMeans**: [`IUnecePaymentMeans`](IUnecePaymentMeans.md)

The payment means specified for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedPaymentMeans

***

### specifiedTradeSettlementPaymentMonetarySummation {#specifiedtradesettlementpaymentmonetarysummation}

> **specifiedTradeSettlementPaymentMonetarySummation**: [`IUneceTradeSettlementPaymentMonetarySummation`](IUneceTradeSettlementPaymentMonetarySummation.md)

The monetary summation totals specified for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/specifiedTradeSettlementPaymentMonetarySummation

***

### statusCode? {#statuscode}

> `optional` **statusCode**: `string`

The code specifying the status of this payment trade settlement.

#### See

https://vocabulary.uncefact.org/statusCode

***

### taxAmount? {#taxamount}

> `optional` **taxAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of the tax related to this payment trade settlement.

#### See

https://vocabulary.uncefact.org/taxAmount

***

### totalTaxAmount? {#totaltaxamount}

> `optional` **totalTaxAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the total tax for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/totalTaxAmount

***

### transferFeeInclusiveIndicator? {#transferfeeinclusiveindicator}

> `optional` **transferFeeInclusiveIndicator**: `boolean`

The indication of whether or not this payment trade settlement includes a transfer fee.

#### See

https://vocabulary.uncefact.org/transferFeeInclusiveIndicator

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of this payment trade settlement.

#### See

https://vocabulary.uncefact.org/typeCode

***

### unstructuredDescription? {#unstructureddescription}

> `optional` **unstructuredDescription**: `string`

An unstructured description, expressed as text, for this payment trade settlement.

#### See

https://vocabulary.uncefact.org/unstructuredDescription
