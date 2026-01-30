# Interface: IUneceSubordinateLocation

A physical location or place which is a subordinate location of a location.

## See

https://vocabulary.uncefact.org/SubordinateLocation

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

> **type**: `"SubordinateLocation"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this subordinate location, such as a United Nations Location Code (UNLOCODE) or GS1 Global
Location Number (GLN).

#### See

https://vocabulary.uncefact.org/identifier

***

### locationFunctionTypeCode?

> `optional` **locationFunctionTypeCode**: [`UneceLocationFunctionCodeList`](../type-aliases/UneceLocationFunctionCodeList.md)[]

The code specifying the type of subordinate location.

#### See

https://vocabulary.uncefact.org/locationFunctionTypeCode

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this subordinate location.

#### See

https://vocabulary.uncefact.org/name

***

### physicalGeographicalCoordinate?

> `optional` **physicalGeographicalCoordinate**: [`IUneceGeographicalCoordinate`](IUneceGeographicalCoordinate.md)[]

Physical geographical coordinate information for this subordinate location.

#### See

https://vocabulary.uncefact.org/physicalGeographicalCoordinate

***

### subordinateSubordinateSubordinateLocation?

> `optional` **subordinateSubordinateSubordinateLocation**: [`IUneceSubordinateSubordinateLocation`](IUneceSubordinateSubordinateLocation.md)[]

The location subordinate to this subordinate location.

#### See

https://vocabulary.uncefact.org/subordinateSubordinateSubordinateLocation
