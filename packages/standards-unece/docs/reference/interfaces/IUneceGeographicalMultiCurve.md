# Interface: IUneceGeographicalMultiCurve

A collection of curves on the surface of the Earth (reference ISO 19136).

## See

https://vocabulary.uncefact.org/GeographicalMultiCurve

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

> **type**: `"GeographicalMultiCurve"`

JSON-LD Type.

***

### associatedDirectPositionList?

> `optional` **associatedDirectPositionList**: `string`

The direct position list associated with this geographical multi-curve.

#### See

https://vocabulary.uncefact.org/associatedDirectPositionList

***

### associatedGeographicalObjectCharacteristic?

> `optional` **associatedGeographicalObjectCharacteristic**: [`IUneceGeographicalObjectCharacteristic`](IUneceGeographicalObjectCharacteristic.md)

The geographical object characteristic associated with this geographical multi-curve.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### memberGeographicalLine?

> `optional` **memberGeographicalLine**: [`IUneceGeographicalLine`](IUneceGeographicalLine.md)

A geographical line member of this geographical multi-curve.

#### See

https://vocabulary.uncefact.org/memberGeographicalLine
