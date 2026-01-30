# Interface: IUneceLegalOrganization

An organization set up on a legal basis as a business, government body, department, charity, or financial institution.

## See

https://vocabulary.uncefact.org/LegalOrganization

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

> **type**: `"LegalOrganization"`

JSON-LD Type.

***

### authorizedRegistration?

> `optional` **authorizedRegistration**: [`IUneceLegalRegistration`](IUneceLegalRegistration.md)[]

A legal registration authorized for this legally set up organization.

#### See

https://vocabulary.uncefact.org/authorizedRegistration

***

### businessTypeCode?

> `optional` **businessTypeCode**: `string`

A code specifying the type of business of this legally set up organization.

#### See

https://vocabulary.uncefact.org/businessTypeCode

***

### districtId?

> `optional` **districtId**: `string`

A unique identifier of the district area regarded as a geographic or administrative unit within which this legally set
up organization operates.

#### See

https://vocabulary.uncefact.org/districtId

***

### establishedDateTime?

> `optional` **establishedDateTime**: `string`

The date, time, date time, or other date time value when this legally set up organization was established.

#### See

https://vocabulary.uncefact.org/establishedDateTime

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this legally set up organization.

#### See

https://vocabulary.uncefact.org/identifier

***

### legalClassificationCode?

> `optional` **legalClassificationCode**: `string`

The code specifying the legal classification of this organization, such as Incorporated (Inc), Limited Liability
Corporation (LLC) or non-profit.

#### See

https://vocabulary.uncefact.org/legalClassificationCode

***

### name?

> `optional` **name**: `string`

A name, expressed as text, of this legally set up organization.

#### See

https://vocabulary.uncefact.org/name

***

### postalAddress?

> `optional` **postalAddress**: [`IUneceTradeAddress`](IUneceTradeAddress.md)[]

A postal address for this legally set up organization.

#### See

https://vocabulary.uncefact.org/postalAddress

***

### tradingBusinessName?

> `optional` **tradingBusinessName**: `string`

The trading business name, expressed as text, of this legally set up organization.

#### See

https://vocabulary.uncefact.org/tradingBusinessName

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of legally set up organization.

#### See

https://vocabulary.uncefact.org/typeCode
