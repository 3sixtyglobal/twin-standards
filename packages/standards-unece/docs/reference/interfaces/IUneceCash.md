# Interface: IUneceCash

Coins, banknotes paid by the recipient of goods or services to the provider.

## See

https://vocabulary.uncefact.org/Cash

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Cash"`

JSON-LD Type.

***

### applicableIndicator? {#applicableindicator}

> `optional` **applicableIndicator?**: `boolean`

The indication of whether or not this cash used for payment. is applicable.

#### See

https://vocabulary.uncefact.org/applicableIndicator

***

### currencyCode? {#currencycode}

> `optional` **currencyCode?**: `string`

The code specifying a currency of this cash used for payment.

#### See

https://vocabulary.uncefact.org/currencyCode

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of cash used for this payment.

#### See

https://vocabulary.uncefact.org/description

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of cash used for payment.

#### See

https://vocabulary.uncefact.org/typeCode
