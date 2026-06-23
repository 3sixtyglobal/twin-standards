# Interface: IUneceDebtorFinancialAccount

A specific business arrangement whereby debits arising from transactions are recorded.

## See

https://vocabulary.uncefact.org/DebtorFinancialAccount

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"DebtorFinancialAccount"`

JSON-LD Type.

***

### accountName? {#accountname}

> `optional` **accountName?**: `string`

The account name, expressed as text, of this debtor financial account.

#### See

https://vocabulary.uncefact.org/accountName

***

### bBANId? {#bbanid}

> `optional` **bBANId?**: `string` \| `IJsonLdValueObject`

The unique Basic Bank Account Number (BBAN) identifier used as part of a National Account Numbering Scheme(s) for this
debtor financial account.

#### See

https://vocabulary.uncefact.org/bBANId

***

### currencyCode? {#currencycode}

> `optional` **currencyCode?**: `string`

The code specifying the currency of this debtor financial account (Reference ISO 4217 codes).

#### See

https://vocabulary.uncefact.org/currencyCode

***

### debtorFinancialAccountTypeCode? {#debtorfinancialaccounttypecode}

> `optional` **debtorFinancialAccountTypeCode?**: `string`

The code specifying the type of debtor financial account.

#### See

https://vocabulary.uncefact.org/debtorFinancialAccountTypeCode

***

### iBANId? {#ibanid}

> `optional` **iBANId?**: `string` \| `IJsonLdValueObject`

The unique International Bank Account Number (IBAN) identifier for this debtor financial account.

#### See

https://vocabulary.uncefact.org/iBANId

***

### proprietaryId? {#proprietaryid}

> `optional` **proprietaryId?**: `string` \| `IJsonLdValueObject`

The unique proprietary identifier for this debtor financial account.

#### See

https://vocabulary.uncefact.org/proprietaryId

***

### proprietaryType? {#proprietarytype}

> `optional` **proprietaryType?**: `string`

The proprietary type, expressed as text, of this debtor financial account, such as the nature or use of the debtor
account.

#### See

https://vocabulary.uncefact.org/proprietaryType

***

### uPICId? {#upicid}

> `optional` **uPICId?**: `string` \| `IJsonLdValueObject`

The unique Universal Payment Identification Code (UPIC) identifier used by the New York Clearing House for this debtor
financial account.

#### See

https://vocabulary.uncefact.org/uPICId
