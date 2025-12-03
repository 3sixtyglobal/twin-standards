# Interface: ICreditorFinancialAccount

A specific business arrangement whereby credits arising from transactions are recorded.

## See

https://vocabulary.uncefact.org/CreditorFinancialAccount

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"CreditorFinancialAccount"`

JSON-LD Type.

***

### accountName?

> `optional` **accountName**: `string`

The account name, expressed as text, of this creditor financial account.

#### See

https://vocabulary.uncefact.org/accountName

***

### bBANId?

> `optional` **bBANId**: `string`

The unique Basic Bank Account Number (BBAN) identifier used as part of a National Account Numbering Scheme(s) for this
creditor financial account.

#### See

https://vocabulary.uncefact.org/bBANId

***

### creditorFinancialAccountTypeCode?

> `optional` **creditorFinancialAccountTypeCode**: `string`

The code specifying the type of creditor financial account.

#### See

https://vocabulary.uncefact.org/creditorFinancialAccountTypeCode

***

### currencyCode?

> `optional` **currencyCode**: `string`

The code specifying the currency of this creditor financial account (Reference ISO 4217 codes).

#### See

https://vocabulary.uncefact.org/currencyCode

***

### iBANId?

> `optional` **iBANId**: `string`

The unique International Bank Account Number (IBAN) identifier for this creditor financial account.

#### See

https://vocabulary.uncefact.org/iBANId

***

### proprietaryId?

> `optional` **proprietaryId**: `string`

The unique proprietary identifier for this creditor financial account.

#### See

https://vocabulary.uncefact.org/proprietaryId

***

### proprietaryType?

> `optional` **proprietaryType**: `string`

The proprietary type, expressed as text, of this creditor financial account, such as the nature or use of the creditor
account.

#### See

https://vocabulary.uncefact.org/proprietaryType

***

### uPICId?

> `optional` **uPICId**: `string`

The unique Universal Payment Identification Code (UPIC) identifier used by the New York Clearing House for this creditor
financial account.

#### See

https://vocabulary.uncefact.org/uPICId
