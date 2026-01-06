# Interface: IUneceGeographicalMultiSurface

A collection of surfaces on the Earth (reference ISO 19136).

## See

https://vocabulary.uncefact.org/GeographicalMultiSurface

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

> **type**: `"GeographicalMultiSurface"`

JSON-LD Type.

***

### associatedGeographicalObjectCharacteristic?

> `optional` **associatedGeographicalObjectCharacteristic**: [`IUneceGeographicalObjectCharacteristic`](IUneceGeographicalObjectCharacteristic.md)[]

The geographical object characteristic associated with this geographical multi-surface.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### includedPolygon?

> `optional` **includedPolygon**: [`IUnecePolygon`](IUnecePolygon.md)

A polygon included in this geographical multi-surface.

#### See

https://vocabulary.uncefact.org/includedPolygon
