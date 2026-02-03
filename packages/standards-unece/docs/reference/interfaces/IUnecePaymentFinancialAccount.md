# Interface: IUnecePaymentFinancialAccount

A specific business arrangement whereby monetary values pertaining to payment, collected or paid, are recorded.

## See

https://vocabulary.uncefact.org/PaymentFinancialAccount

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

> **type**: `"PaymentFinancialAccount"`

JSON-LD Type.

***

### accountName?

> `optional` **accountName**: `string`

An account name, expressed as text, of this payment financial account.

#### See

https://vocabulary.uncefact.org/accountName

***

### iBANId?

> `optional` **iBANId**: `string`

The unique International Bank Account Number (IBAN) identifier for this payment financial account.

#### See

https://vocabulary.uncefact.org/iBANId

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this payment financial account.

#### See

https://vocabulary.uncefact.org/identifier

***

### paymentFinancialAccountCurrencyCode?

> `optional` **paymentFinancialAccountCurrencyCode**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)

The code specifying the currency of this payment financial account.

#### See

https://vocabulary.uncefact.org/paymentFinancialAccountCurrencyCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of payment financial account.

#### See

https://vocabulary.uncefact.org/typeCode
