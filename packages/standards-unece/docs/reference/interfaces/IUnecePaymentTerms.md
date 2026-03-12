# Interface: IUnecePaymentTerms

Terms and conditions by which payment has been or will be made for trade purposes.

## See

https://vocabulary.uncefact.org/PaymentTerms

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"PaymentTerms"`

JSON-LD Type.

***

### applicablePaymentDiscountTerms? {#applicablepaymentdiscountterms}

> `optional` **applicablePaymentDiscountTerms**: [`IUnecePaymentDiscountTerms`](IUnecePaymentDiscountTerms.md)[]

Trade payment discount terms applicable to these trade payment terms.

#### See

https://vocabulary.uncefact.org/applicablePaymentDiscountTerms

***

### applicablePaymentPenaltyTerms? {#applicablepaymentpenaltyterms}

> `optional` **applicablePaymentPenaltyTerms**: [`IUnecePaymentPenaltyTerms`](IUnecePaymentPenaltyTerms.md)[]

Trade payment penalty terms applicable to these trade payment terms.

#### See

https://vocabulary.uncefact.org/applicablePaymentPenaltyTerms

***

### billStartDateTime? {#billstartdatetime}

> `optional` **billStartDateTime**: `string`

The date, time, date time, or other date time value of the bill start specified by these trade payment terms.

#### See

https://vocabulary.uncefact.org/billStartDateTime

***

### description? {#description}

> `optional` **description**: `string`

A textual description of these trade payment terms.

#### See

https://vocabulary.uncefact.org/description

***

### dueDateTime? {#duedatetime}

> `optional` **dueDateTime**: `string`

The date, time, date time, or other date time value of the due date specified by these trade payment terms.

#### See

https://vocabulary.uncefact.org/dueDateTime

***

### durationUnitDurationMeasure? {#durationunitdurationmeasure}

> `optional` **durationUnitDurationMeasure**: [`IUneceDurationUnitMeasureType`](IUneceDurationUnitMeasureType.md)

The measure of a length of time duration specified for these trade payment terms, such as 12 hours, 15 days, 2 weeks, 3
months, 5 years.

#### See

https://vocabulary.uncefact.org/durationUnitDurationMeasure

***

### equivalentAmount? {#equivalentamount}

> `optional` **equivalentAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

An equivalent monetary value to be transferred between debtor and creditor before deduction of charges for these trade
payment terms, expressed in the currency of the debtor's account which is different from the currency in which it is to
be transferred.

#### See

https://vocabulary.uncefact.org/equivalentAmount

***

### information? {#information}

> `optional` **information**: `string`

Information, expressed as text, for these trade payment terms.

#### See

https://vocabulary.uncefact.org/information

***

### instructedAmount? {#instructedamount}

> `optional` **instructedAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value that has been instructed to be transferred between debtor and creditor for these trade payment terms
before deduction of charges.

#### See

https://vocabulary.uncefact.org/instructedAmount

***

### instructionCode? {#instructioncode}

> `optional` **instructionCode**: `string`

A code specifying an instruction for these trade payment terms.

#### See

https://vocabulary.uncefact.org/instructionCode

***

### partialPaymentAmount? {#partialpaymentamount}

> `optional` **partialPaymentAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a partial payment in these trade payment terms.

#### See

https://vocabulary.uncefact.org/partialPaymentAmount

***

### partialPaymentPercent? {#partialpaymentpercent}

> `optional` **partialPaymentPercent**: `string`

A partial payment, expressed as a percent, in these trade payment terms.

#### See

https://vocabulary.uncefact.org/partialPaymentPercent

***

### payeeParty? {#payeeparty}

> `optional` **payeeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A payee party in these trade payment terms.

#### See

https://vocabulary.uncefact.org/payeeParty

***

### paymentTermsEventTimeReferenceFromEventCode? {#paymenttermseventtimereferencefromeventcode}

> `optional` **paymentTermsEventTimeReferenceFromEventCode**: `string`

The code specifying the event from which these trade payment terms are offered for a length of time.

#### See

https://vocabulary.uncefact.org/paymentTermsEventTimeReferenceFromEventCode

***

### paymentTermsId? {#paymenttermsid}

> `optional` **paymentTermsId**: `string` \| `IJsonLdValueObject`

The unique identifier of these trade payment terms.

#### See

https://vocabulary.uncefact.org/paymentTermsId

***

### paymentTermsTypeCode? {#paymenttermstypecode}

> `optional` **paymentTermsTypeCode**: [`UnecePaymentTermsTypeCodeList`](../type-aliases/UnecePaymentTermsTypeCodeList.md)[]

A code specifying the type of trade payment terms.

#### See

https://vocabulary.uncefact.org/paymentTermsTypeCode

***

### settlementPeriodMeasure? {#settlementperiodmeasure}

> `optional` **settlementPeriodMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the number of settlement periods from this trade payment term time reference to the latest payment date,
such as 30 days, 3 months.

#### See

https://vocabulary.uncefact.org/settlementPeriodMeasure

***

### tradePaymentTermsDirectDebitMandateId? {#tradepaymenttermsdirectdebitmandateid}

> `optional` **tradePaymentTermsDirectDebitMandateId**: `string` \| `IJsonLdValueObject`

An identifier of a direct debit mandate in these trade payment terms.

#### See

https://vocabulary.uncefact.org/tradePaymentTermsDirectDebitMandateId

***

### tradePaymentTermsInstructionTypeCode? {#tradepaymenttermsinstructiontypecode}

> `optional` **tradePaymentTermsInstructionTypeCode**: `string`

A code specifying a type of instruction for these trade payment terms.

#### See

https://vocabulary.uncefact.org/tradePaymentTermsInstructionTypeCode

***

### tradePaymentTermsPaymentMeansId? {#tradepaymenttermspaymentmeansid}

> `optional` **tradePaymentTermsPaymentMeansId**: `string` \| `IJsonLdValueObject`

An identifier of a payment means in these trade payment terms.

#### See

https://vocabulary.uncefact.org/tradePaymentTermsPaymentMeansId
