# Interface: IUneceAdvancePayment

A prepaid discharge of obligations in respect of funds or securities transferred between two or more parties.

## See

https://vocabulary.uncefact.org/AdvancePayment

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AdvancePayment"`

JSON-LD Type.

***

### identifiedPaymentTerms? {#identifiedpaymentterms}

> `optional` **identifiedPaymentTerms?**: [`IUnecePaymentTerms`](IUnecePaymentTerms.md)

The payment terms identified for this advance payment.

#### See

https://vocabulary.uncefact.org/identifiedPaymentTerms

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier for this advance payment.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedTax? {#includedtax}

> `optional` **includedTax?**: [`IUneceTradeTax`](IUneceTradeTax.md)[]

A tax included in this advance payment.

#### See

https://vocabulary.uncefact.org/includedTax

***

### invoiceSpecifiedDocument? {#invoicespecifieddocument}

> `optional` **invoiceSpecifiedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

An invoice document referenced by this advance payment.

#### See

https://vocabulary.uncefact.org/invoiceSpecifiedDocument

***

### paidAmount {#paidamount}

> **paidAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the funds or securities paid in this advance payment.

#### See

https://vocabulary.uncefact.org/paidAmount

***

### receivedDateTime? {#receiveddatetime}

> `optional` **receivedDateTime?**: `string`

The formatted date or date time value when an advance payment has been received.

#### See

https://vocabulary.uncefact.org/receivedDateTime
