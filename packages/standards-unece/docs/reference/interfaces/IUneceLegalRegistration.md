# Interface: IUneceLegalRegistration

The recording of items or details for a specific legal purpose.

## See

https://vocabulary.uncefact.org/LegalRegistration

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

> **type**: `"LegalRegistration"`

JSON-LD Type.

***

### categoryCode?

> `optional` **categoryCode**: `string`

A code specifying the category of this legal registration.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### countryId?

> `optional` **countryId**: [`UneceCountryId`](../type-aliases/UneceCountryId.md)[]

An identifier of the country in which this legal registration is valid.

#### See

https://vocabulary.uncefact.org/countryId

***

### countrySubDivisionId?

> `optional` **countrySubDivisionId**: `string`

A unique identifier of the country sub-division for this legal registration.

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this legal registration.

#### See

https://vocabulary.uncefact.org/identifier

***

### lastRegisteredYearDateTime?

> `optional` **lastRegisteredYearDateTime**: `string`

The last year in which this legal registration was registered.

#### See

https://vocabulary.uncefact.org/lastRegisteredYearDateTime

***

### licenceId?

> `optional` **licenceId**: `string`

The unique identifier of a licence for this legal registration.

#### See

https://vocabulary.uncefact.org/licenceId

***

### recordedDate?

> `optional` **recordedDate**: `string`

A date when this legal registration was recorded.

#### See

https://vocabulary.uncefact.org/recordedDate

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying the type of this legal registration.

#### See

https://vocabulary.uncefact.org/typeCode
