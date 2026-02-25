# Interface: IUneceFinancingRequestDocument

The set of characteristics shared by all individual transactions grouped for this financing request document.

## See

https://vocabulary.uncefact.org/FinancingRequestDocument

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"FinancingRequestDocument"`

JSON-LD Type.

***

### additionalInformationIncludedNote?

> `optional` **additionalInformationIncludedNote**: [`IUneceNote`](IUneceNote.md)[]

An additional information note included for this financing request document.

#### See

https://vocabulary.uncefact.org/additionalInformationIncludedNote

***

### agreementInformation?

> `optional` **agreementInformation**: `string`

Agreement information, expressed as text, in this financing request document, such as a collection mandate.

#### See

https://vocabulary.uncefact.org/agreementInformation

***

### authorization?

> `optional` **authorization**: `string`

An authorization, expressed as text, for this financing request document.

#### See

https://vocabulary.uncefact.org/authorization

***

### cancellationReason?

> `optional` **cancellationReason**: `string`

A cancellation reason, expressed as text, in this financing request document.

#### See

https://vocabulary.uncefact.org/cancellationReason

***

### contractualClause?

> `optional` **contractualClause**: [`IUneceClause`](IUneceClause.md)[]

A contractual document clause specified for this financing request document.

#### See

https://vocabulary.uncefact.org/contractualClause

***

### copyIndicator?

> `optional` **copyIndicator**: `boolean`

The indication of whether or not this financing request document is a copy rather than an original.

#### See

https://vocabulary.uncefact.org/copyIndicator

***

### creationDateTime?

> `optional` **creationDateTime**: `string`

The date, time, date time or other date time value for the creation of this financing request document.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### financingRequestDocumentCurrencyCode?

> `optional` **financingRequestDocumentCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)

The code specifying the currency in this financing request document.

#### See

https://vocabulary.uncefact.org/financingRequestDocumentCurrencyCode

***

### firstAgentSpecifiedFinancialInstitution?

> `optional` **firstAgentSpecifiedFinancialInstitution**: [`IUneceCreditorFinancialInstitution`](IUneceCreditorFinancialInstitution.md)

The creditor financial institution specified as the first agent in this financing request document.

#### See

https://vocabulary.uncefact.org/firstAgentSpecifiedFinancialInstitution

***

### groupId?

> `optional` **groupId**: `string`

The group identifier in this financing request document.

#### See

https://vocabulary.uncefact.org/groupId

***

### groupedTransactionSpecifiedQuantity?

> `optional` **groupedTransactionSpecifiedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of grouped transactions specified in this financing request document.

#### See

https://vocabulary.uncefact.org/groupedTransactionSpecifiedQuantity

***

### groupedTransactionTotalAmount?

> `optional` **groupedTransactionTotalAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A total monetary value of grouped transactions in this financing request document.

#### See

https://vocabulary.uncefact.org/groupedTransactionTotalAmount

***

### intermediarySpecifiedFinancialInstitution?

> `optional` **intermediarySpecifiedFinancialInstitution**: [`IUneceCreditorFinancialInstitution`](IUneceCreditorFinancialInstitution.md)

The creditor financial institution specified as the intermediary in this financing request document.

#### See

https://vocabulary.uncefact.org/intermediarySpecifiedFinancialInstitution

***

### specifiedCancellationStatus?

> `optional` **specifiedCancellationStatus**: [`IUneceCancellationStatus`](IUneceCancellationStatus.md)[]

A status of a cancellation specified for this financing request document, such as accepted.

#### See

https://vocabulary.uncefact.org/specifiedCancellationStatus

***

### specifiedRequestingParty?

> `optional` **specifiedRequestingParty**: [`IUneceRequestingParty`](IUneceRequestingParty.md)

The requesting party specified in this financing request document.

#### See

https://vocabulary.uncefact.org/specifiedRequestingParty

***

### specifiedValidationStatus?

> `optional` **specifiedValidationStatus**: [`IUneceValidationStatus`](IUneceValidationStatus.md)

The status of the validation specified for this financing request document, such as error.

#### See

https://vocabulary.uncefact.org/specifiedValidationStatus
