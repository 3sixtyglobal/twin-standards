# Interface: IUneceFinancingFinancialAccount

A financial account used internally by a bank to manage the line of credit granted to financing requesting party.

## See

https://vocabulary.uncefact.org/FinancingFinancialAccount

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

> **type**: `"FinancingFinancialAccount"`

JSON-LD Type.

***

### accountName?

> `optional` **accountName**: `string`

The account name, expressed as text, of this financing financial account.

#### See

https://vocabulary.uncefact.org/accountName

***

### bBANId?

> `optional` **bBANId**: `string`

The unique Basic Bank Account Number (BBAN) identifier used as part of a National Account Numbering Scheme for this
financing financial account.

#### See

https://vocabulary.uncefact.org/bBANId

***

### cashAccountTypeCode?

> `optional` **cashAccountTypeCode**: `string`

The code specifying the type of financing financial account.

#### See

https://vocabulary.uncefact.org/cashAccountTypeCode

***

### financingFinancialAccountCurrencyCode?

> `optional` **financingFinancialAccountCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)

The code specifying the currency of this financing financial account.

#### See

https://vocabulary.uncefact.org/financingFinancialAccountCurrencyCode

***

### iBANId?

> `optional` **iBANId**: `string`

The unique International Bank Account Number (IBAN) identifier for this financing financial account.

#### See

https://vocabulary.uncefact.org/iBANId

***

### proprietaryId?

> `optional` **proprietaryId**: `string`

The proprietary identifier for this financing financial account.

#### See

https://vocabulary.uncefact.org/proprietaryId

***

### proprietaryType?

> `optional` **proprietaryType**: `string`

The proprietary type, expressed as text, of this financing financial account, such as the nature or use.

#### See

https://vocabulary.uncefact.org/proprietaryType

***

### uPICId?

> `optional` **uPICId**: `string`

The unique Universal Payment Identification Code (UPIC) identifier used by the New York Clearing House for this
financing financial account.

#### See

https://vocabulary.uncefact.org/uPICId
