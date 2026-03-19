# Interface: IUneceDigitalMethod

The use of online and digital technologies to collect monetary payment amounts.

## See

https://vocabulary.uncefact.org/DigitalMethod

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"DigitalMethod"`

JSON-LD Type.

***

### accountHolderName? {#accountholdername}

> `optional` **accountHolderName?**: `string`

An account holder's name, expressed as text, for this digital method used for payment.

#### See

https://vocabulary.uncefact.org/accountHolderName

***

### applicableIndicator? {#applicableindicator}

> `optional` **applicableIndicator?**: `boolean`

The indication of whether or not this digital method used for payment is applicable.

#### See

https://vocabulary.uncefact.org/applicableIndicator

***

### cardholderName? {#cardholdername}

> `optional` **cardholderName?**: `string`

A cardholder's name, expressed as text, for this digital method used for payment.

#### See

https://vocabulary.uncefact.org/cardholderName

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this digital method used for payment.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDateTime? {#expirydatetime}

> `optional` **expiryDateTime?**: `string`

The expiry date or date time of this digital method used for payment.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier of the digital method used for payment.

#### See

https://vocabulary.uncefact.org/identifier

***

### issuingCompanyName? {#issuingcompanyname}

> `optional` **issuingCompanyName?**: `string`

An issuing company name, expressed as text, for this digital method used for payment.

#### See

https://vocabulary.uncefact.org/issuingCompanyName

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of digital method used for payment.

#### See

https://vocabulary.uncefact.org/typeCode

***

### validFromDateTime? {#validfromdatetime}

> `optional` **validFromDateTime?**: `string`

The date or date time from when this digital method used for payment is valid.

#### See

https://vocabulary.uncefact.org/validFromDateTime

***

### verificationNumeric? {#verificationnumeric}

> `optional` **verificationNumeric?**: `string`

The verification number for this digital method used for payment.

#### See

https://vocabulary.uncefact.org/verificationNumeric
