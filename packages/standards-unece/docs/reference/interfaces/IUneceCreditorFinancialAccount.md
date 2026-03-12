# Interface: IUneceCreditorFinancialAccount

A specific business arrangement whereby credits arising from transactions are recorded.

## See

https://vocabulary.uncefact.org/CreditorFinancialAccount

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"CreditorFinancialAccount"`

JSON-LD Type.

***

### accountName? {#accountname}

> `optional` **accountName**: `string`

The account name, expressed as text, of this creditor financial account.

#### See

https://vocabulary.uncefact.org/accountName

***

### bBANId? {#bbanid}

> `optional` **bBANId**: `string` \| `IJsonLdValueObject`

The unique Basic Bank Account Number (BBAN) identifier used as part of a National Account Numbering Scheme(s) for this
creditor financial account.

#### See

https://vocabulary.uncefact.org/bBANId

***

### creditorFinancialAccountTypeCode? {#creditorfinancialaccounttypecode}

> `optional` **creditorFinancialAccountTypeCode**: `string`

The code specifying the type of creditor financial account.

#### See

https://vocabulary.uncefact.org/creditorFinancialAccountTypeCode

***

### currencyCode? {#currencycode}

> `optional` **currencyCode**: `string`

The code specifying the currency of this creditor financial account (Reference ISO 4217 codes).

#### See

https://vocabulary.uncefact.org/currencyCode

***

### iBANId? {#ibanid}

> `optional` **iBANId**: `string` \| `IJsonLdValueObject`

The unique International Bank Account Number (IBAN) identifier for this creditor financial account.

#### See

https://vocabulary.uncefact.org/iBANId

***

### proprietaryId? {#proprietaryid}

> `optional` **proprietaryId**: `string` \| `IJsonLdValueObject`

The unique proprietary identifier for this creditor financial account.

#### See

https://vocabulary.uncefact.org/proprietaryId

***

### proprietaryType? {#proprietarytype}

> `optional` **proprietaryType**: `string`

The proprietary type, expressed as text, of this creditor financial account, such as the nature or use of the creditor
account.

#### See

https://vocabulary.uncefact.org/proprietaryType

***

### uPICId? {#upicid}

> `optional` **uPICId**: `string` \| `IJsonLdValueObject`

The unique Universal Payment Identification Code (UPIC) identifier used by the New York Clearing House for this creditor
financial account.

#### See

https://vocabulary.uncefact.org/uPICId
