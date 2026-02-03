# Interface: IUneceRepresentativePerson

An individual human being acting as a representative.

## See

https://vocabulary.uncefact.org/RepresentativePerson

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

> **type**: `"RepresentativePerson"`

JSON-LD Type.

***

### birthDateTime?

> `optional` **birthDateTime**: `string`

The date, time, date time or other date time value which specifies the birth date for this representative person.

#### See

https://vocabulary.uncefact.org/birthDateTime

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this representative person.

#### See

https://vocabulary.uncefact.org/identifier

***

### nationalityCountry?

> `optional` **nationalityCountry**: [`IUneceCountry`](IUneceCountry.md)

A country that constitutes a nationality by origin, birth, or naturalization for this representative person.

#### See

https://vocabulary.uncefact.org/nationalityCountry

***

### representativePersonName?

> `optional` **representativePersonName**: `string`

The name or set of names, expressed as text, by which this representative person is known.

#### See

https://vocabulary.uncefact.org/representativePersonName

***

### role?

> `optional` **role**: `string`

A role, expressed as text, of this representative person.

#### See

https://vocabulary.uncefact.org/role
