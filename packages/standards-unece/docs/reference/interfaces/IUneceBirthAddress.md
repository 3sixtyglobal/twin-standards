# Interface: IUneceBirthAddress

The place of birth.

## See

https://vocabulary.uncefact.org/BirthAddress

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

> **type**: `"BirthAddress"`

JSON-LD Type.

***

### birthAddressCountryId?

> `optional` **birthAddressCountryId**: [`UneceCountryId`](../type-aliases/UneceCountryId.md)

The identifier of a country for this birth address.

#### See

https://vocabulary.uncefact.org/birthAddressCountryId

***

### cityName?

> `optional` **cityName**: `string`

The name, expressed as text, of the city, town or village of this birth address.

#### See

https://vocabulary.uncefact.org/cityName

***

### countrySubDivisionName?

> `optional` **countrySubDivisionName**: `string`

The name, expressed as text, of the sub-division of a country for this birth address.

#### See

https://vocabulary.uncefact.org/countrySubDivisionName
