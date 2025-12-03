# Interface: IDigitalMethod

The use of online and digital technologies to collect monetary payment amounts.

## See

https://vocabulary.uncefact.org/DigitalMethod

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

> **type**: `"DigitalMethod"`

JSON-LD Type.

***

### accountHolderName?

> `optional` **accountHolderName**: `string`

An account holder's name, expressed as text, for this digital method used for payment.

#### See

https://vocabulary.uncefact.org/accountHolderName

***

### applicableIndicator?

> `optional` **applicableIndicator**: `boolean`

The indication of whether or not this digital method used for payment is applicable.

#### See

https://vocabulary.uncefact.org/applicableIndicator

***

### cardholderName?

> `optional` **cardholderName**: `string`

A cardholder's name, expressed as text, for this digital method used for payment.

#### See

https://vocabulary.uncefact.org/cardholderName

***

### description?

> `optional` **description**: `string`

A textual description of this digital method used for payment.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDateTime?

> `optional` **expiryDateTime**: `string`

The expiry date or date time of this digital method used for payment.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier?

> `optional` **identifier**: `string`

The identifier of the digital method used for payment.

#### See

https://vocabulary.uncefact.org/identifier

***

### issuingCompanyName?

> `optional` **issuingCompanyName**: `string`

An issuing company name, expressed as text, for this digital method used for payment.

#### See

https://vocabulary.uncefact.org/issuingCompanyName

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of digital method used for payment.

#### See

https://vocabulary.uncefact.org/typeCode

***

### validFromDateTime?

> `optional` **validFromDateTime**: `string`

The date or date time from when this digital method used for payment is valid.

#### See

https://vocabulary.uncefact.org/validFromDateTime

***

### verificationNumeric?

> `optional` **verificationNumeric**: `string`

The verification number for this digital method used for payment.

#### See

https://vocabulary.uncefact.org/verificationNumeric
