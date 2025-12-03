# Interface: IGeographicalSurface

A figure on the Earth having only two dimensions (reference ISO 19136).

## See

https://vocabulary.uncefact.org/GeographicalSurface

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

> **type**: `"GeographicalSurface"`

JSON-LD Type.

***

### associatedGeographicalObjectCharacteristic?

> `optional` **associatedGeographicalObjectCharacteristic**: [`IGeographicalObjectCharacteristic`](IGeographicalObjectCharacteristic.md)[]

The geographical object characteristic associated with this geographical surface.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### includedPolygon?

> `optional` **includedPolygon**: [`IPolygon`](IPolygon.md)

The polygon included in this geographical surface.

#### See

https://vocabulary.uncefact.org/includedPolygon
