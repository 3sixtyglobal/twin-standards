# Interface: IUnecePaymentTerms

Terms and conditions by which payment has been or will be made for trade purposes.

## See

https://vocabulary.uncefact.org/PaymentTerms

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

> **type**: `"PaymentTerms"`

JSON-LD Type.

***

### applicablePaymentDiscountTerms?

> `optional` **applicablePaymentDiscountTerms**: [`IUnecePaymentDiscountTerms`](IUnecePaymentDiscountTerms.md)[]

Trade payment discount terms applicable to these trade payment terms.

#### See

https://vocabulary.uncefact.org/applicablePaymentDiscountTerms

***

### applicablePaymentPenaltyTerms?

> `optional` **applicablePaymentPenaltyTerms**: [`IUnecePaymentPenaltyTerms`](IUnecePaymentPenaltyTerms.md)[]

Trade payment penalty terms applicable to these trade payment terms.

#### See

https://vocabulary.uncefact.org/applicablePaymentPenaltyTerms

***

### billStartDateTime?

> `optional` **billStartDateTime**: `string`

The date, time, date time, or other date time value of the bill start specified by these trade payment terms.

#### See

https://vocabulary.uncefact.org/billStartDateTime

***

### description?

> `optional` **description**: `string`

A textual description of these trade payment terms.

#### See

https://vocabulary.uncefact.org/description

***

### dueDateTime?

> `optional` **dueDateTime**: `string`

The date, time, date time, or other date time value of the due date specified by these trade payment terms.

#### See

https://vocabulary.uncefact.org/dueDateTime

***

### durationUnitDurationMeasure?

> `optional` **durationUnitDurationMeasure**: [`IUneceDurationUnitMeasureType`](IUneceDurationUnitMeasureType.md)

The measure of a length of time duration specified for these trade payment terms, such as 12 hours, 15 days, 2 weeks, 3
months, 5 years.

#### See

https://vocabulary.uncefact.org/durationUnitDurationMeasure

***

### equivalentAmount?

> `optional` **equivalentAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

An equivalent monetary value to be transferred between debtor and creditor before deduction of charges for these trade
payment terms, expressed in the currency of the debtor's account which is different from the currency in which it is to
be transferred.

#### See

https://vocabulary.uncefact.org/equivalentAmount

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for these trade payment terms.

#### See

https://vocabulary.uncefact.org/information

***

### instructedAmount?

> `optional` **instructedAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that has been instructed to be transferred between debtor and creditor for these trade payment terms
before deduction of charges.

#### See

https://vocabulary.uncefact.org/instructedAmount

***

### instructionCode?

> `optional` **instructionCode**: `string`

A code specifying an instruction for these trade payment terms.

#### See

https://vocabulary.uncefact.org/instructionCode

***

### partialPaymentAmount?

> `optional` **partialPaymentAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a partial payment in these trade payment terms.

#### See

https://vocabulary.uncefact.org/partialPaymentAmount

***

### partialPaymentPercent?

> `optional` **partialPaymentPercent**: `string`

A partial payment, expressed as a percent, in these trade payment terms.

#### See

https://vocabulary.uncefact.org/partialPaymentPercent

***

### payeeParty?

> `optional` **payeeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A payee party in these trade payment terms.

#### See

https://vocabulary.uncefact.org/payeeParty

***

### paymentTermsEventTimeReferenceFromEventCode?

> `optional` **paymentTermsEventTimeReferenceFromEventCode**: `string`

The code specifying the event from which these trade payment terms are offered for a length of time.

#### See

https://vocabulary.uncefact.org/paymentTermsEventTimeReferenceFromEventCode

***

### paymentTermsId?

> `optional` **paymentTermsId**: [`UnecePaymentTermsId`](../type-aliases/UnecePaymentTermsId.md)[]

The unique identifier of these trade payment terms.

#### See

https://vocabulary.uncefact.org/paymentTermsId

***

### paymentTermsTypeCode?

> `optional` **paymentTermsTypeCode**: [`UnecePaymentTermsTypeCodeList`](../type-aliases/UnecePaymentTermsTypeCodeList.md)

A code specifying the type of trade payment terms.

#### See

https://vocabulary.uncefact.org/paymentTermsTypeCode

***

### settlementPeriodMeasure?

> `optional` **settlementPeriodMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the number of settlement periods from this trade payment term time reference to the latest payment date,
such as 30 days, 3 months.

#### See

https://vocabulary.uncefact.org/settlementPeriodMeasure

***

### tradePaymentTermsDirectDebitMandateId?

> `optional` **tradePaymentTermsDirectDebitMandateId**: `string`

An identifier of a direct debit mandate in these trade payment terms.

#### See

https://vocabulary.uncefact.org/tradePaymentTermsDirectDebitMandateId

***

### tradePaymentTermsInstructionTypeCode?

> `optional` **tradePaymentTermsInstructionTypeCode**: `string`

A code specifying a type of instruction for these trade payment terms.

#### See

https://vocabulary.uncefact.org/tradePaymentTermsInstructionTypeCode

***

### tradePaymentTermsPaymentMeansId?

> `optional` **tradePaymentTermsPaymentMeansId**: `string`

An identifier of a payment means in these trade payment terms.

#### See

https://vocabulary.uncefact.org/tradePaymentTermsPaymentMeansId
