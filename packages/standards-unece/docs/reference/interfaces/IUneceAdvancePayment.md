# Interface: IUneceAdvancePayment

A prepaid discharge of obligations in respect of funds or securities transferred between two or more parties.

## See

https://vocabulary.uncefact.org/AdvancePayment

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

> **type**: `"AdvancePayment"`

JSON-LD Type.

***

### identifiedPaymentTerms?

> `optional` **identifiedPaymentTerms**: [`IUnecePaymentTerms`](IUnecePaymentTerms.md)

The payment terms identified for this advance payment.

#### See

https://vocabulary.uncefact.org/identifiedPaymentTerms

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this advance payment.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedTax?

> `optional` **includedTax**: [`IUneceTradeTax`](IUneceTradeTax.md)[]

A tax included in this advance payment.

#### See

https://vocabulary.uncefact.org/includedTax

***

### invoiceSpecifiedDocument?

> `optional` **invoiceSpecifiedDocument**: [`IUneceDocument`](IUneceDocument.md)

An invoice document referenced by this advance payment.

#### See

https://vocabulary.uncefact.org/invoiceSpecifiedDocument

***

### paidAmount?

> `optional` **paidAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value of the funds or securities paid in this advance payment.

#### See

https://vocabulary.uncefact.org/paidAmount

***

### receivedDateTime?

> `optional` **receivedDateTime**: `string`

The formatted date or date time value when an advance payment has been received.

#### See

https://vocabulary.uncefact.org/receivedDateTime
