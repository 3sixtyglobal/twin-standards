# Interface: IUneceTransportServiceLocation

A location where a transport service takes place.

## See

https://vocabulary.uncefact.org/TransportServiceLocation

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

> **type**: `"TransportServiceLocation"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this transport service location, such as a United Nations Location Code (UNLOCODE) or GS1 Global
Location Number (GLN).

#### See

https://vocabulary.uncefact.org/identifier

***

### locationFunctionTypeCode?

> `optional` **locationFunctionTypeCode**: [`UneceLocationFunctionCodeList`](../type-aliases/UneceLocationFunctionCodeList.md)[]

A code specifying the type of transport service location.

#### See

https://vocabulary.uncefact.org/locationFunctionTypeCode

***

### name?

> `optional` **name**: `string`

A name, expressed as text, of this transport service location.

#### See

https://vocabulary.uncefact.org/name

***

### physicalGeographicalCoordinate?

> `optional` **physicalGeographicalCoordinate**: [`IUneceGeographicalCoordinate`](IUneceGeographicalCoordinate.md)[]

Geographical coordinate information for this physical transport service location.

#### See

https://vocabulary.uncefact.org/physicalGeographicalCoordinate
