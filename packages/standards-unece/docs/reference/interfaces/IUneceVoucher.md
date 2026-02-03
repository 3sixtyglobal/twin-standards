# Interface: IUneceVoucher

A printed piece of paper or an electronic document that can be used instead of money to pay for an experience, such as a
tour, a trip or a meal in a restaurant.

## See

https://vocabulary.uncefact.org/Voucher

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

> **type**: `"Voucher"`

JSON-LD Type.

***

### applicableIndicator?

> `optional` **applicableIndicator**: `boolean`

The indication of whether or not this experience item voucher is applicable.

#### See

https://vocabulary.uncefact.org/applicableIndicator

***

### description?

> `optional` **description**: `string`

A textual description of this experience item voucher.

#### See

https://vocabulary.uncefact.org/description

***

### faceAmount?

> `optional` **faceAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value shown on the face of this experience item voucher.

#### See

https://vocabulary.uncefact.org/faceAmount

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this experience item voucher.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The date or date time of the issuance of this experience item voucher.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issuingCompanyName?

> `optional` **issuingCompanyName**: `string`

A name, expressed as text, of the company issuing this experience item voucher.

#### See

https://vocabulary.uncefact.org/issuingCompanyName

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of experience item voucher.

#### See

https://vocabulary.uncefact.org/typeCode
