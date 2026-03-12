# Interface: IUneceFinancingFinancialAccount

A financial account used internally by a bank to manage the line of credit granted to financing requesting party.

## See

https://vocabulary.uncefact.org/FinancingFinancialAccount

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"FinancingFinancialAccount"`

JSON-LD Type.

***

### accountName? {#accountname}

> `optional` **accountName**: `string`

The account name, expressed as text, of this financing financial account.

#### See

https://vocabulary.uncefact.org/accountName

***

### bBANId? {#bbanid}

> `optional` **bBANId**: `string` \| `IJsonLdValueObject`

The unique Basic Bank Account Number (BBAN) identifier used as part of a National Account Numbering Scheme for this
financing financial account.

#### See

https://vocabulary.uncefact.org/bBANId

***

### cashAccountTypeCode? {#cashaccounttypecode}

> `optional` **cashAccountTypeCode**: `string`

The code specifying the type of financing financial account.

#### See

https://vocabulary.uncefact.org/cashAccountTypeCode

***

### financingFinancialAccountCurrencyCode? {#financingfinancialaccountcurrencycode}

> `optional` **financingFinancialAccountCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)

The code specifying the currency of this financing financial account.

#### See

https://vocabulary.uncefact.org/financingFinancialAccountCurrencyCode

***

### iBANId? {#ibanid}

> `optional` **iBANId**: `string` \| `IJsonLdValueObject`

The unique International Bank Account Number (IBAN) identifier for this financing financial account.

#### See

https://vocabulary.uncefact.org/iBANId

***

### proprietaryId? {#proprietaryid}

> `optional` **proprietaryId**: `string` \| `IJsonLdValueObject`

The proprietary identifier for this financing financial account.

#### See

https://vocabulary.uncefact.org/proprietaryId

***

### proprietaryType? {#proprietarytype}

> `optional` **proprietaryType**: `string`

The proprietary type, expressed as text, of this financing financial account, such as the nature or use.

#### See

https://vocabulary.uncefact.org/proprietaryType

***

### uPICId? {#upicid}

> `optional` **uPICId**: `string` \| `IJsonLdValueObject`

The unique Universal Payment Identification Code (UPIC) identifier used by the New York Clearing House for this
financing financial account.

#### See

https://vocabulary.uncefact.org/uPICId
