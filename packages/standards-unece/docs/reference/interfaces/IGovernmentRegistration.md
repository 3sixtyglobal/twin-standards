# Interface: IGovernmentRegistration

The recording of items or details for a governmental purpose.

## See

https://vocabulary.uncefact.org/GovernmentRegistration

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

> **type**: `"GovernmentRegistration"`

JSON-LD Type.

***

### categoryCode?

> `optional` **categoryCode**: `string`

A code specifying a category of this government registration.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### countryId?

> `optional` **countryId**: [`CountryId`](../type-aliases/CountryId.md)

The identifier of the country for this government registration.

#### See

https://vocabulary.uncefact.org/countryId

***

### countrySubDivisionId?

> `optional` **countrySubDivisionId**: `string`

The identifier of the country sub-division for this registration.

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this government registration.

#### See

https://vocabulary.uncefact.org/identifier

***

### lastRegisteredYearDateTime?

> `optional` **lastRegisteredYearDateTime**: `string`

The last registered year of this government registration.

#### See

https://vocabulary.uncefact.org/lastRegisteredYearDateTime

***

### licenceId?

> `optional` **licenceId**: `string`

The identifier of a licence for this government registration.

#### See

https://vocabulary.uncefact.org/licenceId

***

### recordedDate?

> `optional` **recordedDate**: `string`

The date that this government registration was recorded.

#### See

https://vocabulary.uncefact.org/recordedDate

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of government registration.

#### See

https://vocabulary.uncefact.org/typeCode

***

### validityPeriod?

> `optional` **validityPeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)

The period of time during which this government registration is valid.

#### See

https://vocabulary.uncefact.org/validityPeriod

***

### versionId?

> `optional` **versionId**: `string`

The identifier of the version of this government registration.

#### See

https://vocabulary.uncefact.org/versionId
