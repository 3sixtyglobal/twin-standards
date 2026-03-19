# Interface: IUnecePaymentFinancialAccount

A specific business arrangement whereby monetary values pertaining to payment, collected or paid, are recorded.

## See

https://vocabulary.uncefact.org/PaymentFinancialAccount

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"PaymentFinancialAccount"`

JSON-LD Type.

***

### accountName? {#accountname}

> `optional` **accountName?**: `string`

An account name, expressed as text, of this payment financial account.

#### See

https://vocabulary.uncefact.org/accountName

***

### iBANId? {#ibanid}

> `optional` **iBANId?**: `string` \| `IJsonLdValueObject`

The unique International Bank Account Number (IBAN) identifier for this payment financial account.

#### See

https://vocabulary.uncefact.org/iBANId

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier for this payment financial account.

#### See

https://vocabulary.uncefact.org/identifier

***

### paymentFinancialAccountCurrencyCode? {#paymentfinancialaccountcurrencycode}

> `optional` **paymentFinancialAccountCurrencyCode?**: [`UneceCurrencyCodeList`](../type-aliases/UneceCurrencyCodeList.md)

The code specifying the currency of this payment financial account.

#### See

https://vocabulary.uncefact.org/paymentFinancialAccountCurrencyCode

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of payment financial account.

#### See

https://vocabulary.uncefact.org/typeCode
