# Interface: IUneceCountry

The area of land that belongs to a nation together with its properties, such as population, political organization,
etc., used or referenced for trade purposes.

## See

https://vocabulary.uncefact.org/Country

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

> **type**: `"Country"`

JSON-LD Type.

***

### countryId?

> `optional` **countryId**: [`UneceCountryId`](../type-aliases/UneceCountryId.md)[]

A unique identifier for this trade country.

#### See

https://vocabulary.uncefact.org/countryId

***

### name?

> `optional` **name**: `string`

A name, expressed as text, of this trade country.

#### See

https://vocabulary.uncefact.org/name

***

### specifiedQuantity?

> `optional` **specifiedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A quantity specified for this trade country.

#### See

https://vocabulary.uncefact.org/specifiedQuantity

***

### subordinateCountrySubDivision?

> `optional` **subordinateCountrySubDivision**: [`IUneceCountrySubDivision`](IUneceCountrySubDivision.md)[]

A trade country sub-division that is subordinate to this trade country, such as a state, a county, a canton, a province.

#### See

https://vocabulary.uncefact.org/subordinateCountrySubDivision
