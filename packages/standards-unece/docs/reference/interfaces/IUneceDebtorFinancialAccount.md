# Interface: IUneceDebtorFinancialAccount

A specific business arrangement whereby debits arising from transactions are recorded.

## See

https://vocabulary.uncefact.org/DebtorFinancialAccount

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

> **type**: `"DebtorFinancialAccount"`

JSON-LD Type.

***

### accountName?

> `optional` **accountName**: `string`

The account name, expressed as text, of this debtor financial account.

#### See

https://vocabulary.uncefact.org/accountName

***

### bBANId?

> `optional` **bBANId**: `string`

The unique Basic Bank Account Number (BBAN) identifier used as part of a National Account Numbering Scheme(s) for this
debtor financial account.

#### See

https://vocabulary.uncefact.org/bBANId

***

### currencyCode?

> `optional` **currencyCode**: `string`

The code specifying the currency of this debtor financial account (Reference ISO 4217 codes).

#### See

https://vocabulary.uncefact.org/currencyCode

***

### debtorFinancialAccountTypeCode?

> `optional` **debtorFinancialAccountTypeCode**: `string`

The code specifying the type of debtor financial account.

#### See

https://vocabulary.uncefact.org/debtorFinancialAccountTypeCode

***

### iBANId?

> `optional` **iBANId**: `string`

The unique International Bank Account Number (IBAN) identifier for this debtor financial account.

#### See

https://vocabulary.uncefact.org/iBANId

***

### proprietaryId?

> `optional` **proprietaryId**: `string`

The unique proprietary identifier for this debtor financial account.

#### See

https://vocabulary.uncefact.org/proprietaryId

***

### proprietaryType?

> `optional` **proprietaryType**: `string`

The proprietary type, expressed as text, of this debtor financial account, such as the nature or use of the debtor
account.

#### See

https://vocabulary.uncefact.org/proprietaryType

***

### uPICId?

> `optional` **uPICId**: `string`

The unique Universal Payment Identification Code (UPIC) identifier used by the New York Clearing House for this debtor
financial account.

#### See

https://vocabulary.uncefact.org/uPICId
