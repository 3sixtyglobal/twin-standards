# Interface: IUneceGeographicalObjectCharacteristic

An attribute of a geographical object.

## See

https://vocabulary.uncefact.org/GeographicalObjectCharacteristic

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

> **type**: `"GeographicalObjectCharacteristic"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

The textual description for this geographical object characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### descriptionReference?

> `optional` **descriptionReference**: `string`

The description reference, expressed as text, for this geographical object characteristic.

#### See

https://vocabulary.uncefact.org/descriptionReference

***

### geometryCollectionIndicator?

> `optional` **geometryCollectionIndicator**: `boolean`

The indication of whether or not this geographical object can be characterized as a geometry collection.

#### See

https://vocabulary.uncefact.org/geometryCollectionIndicator

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this geographical object characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this geographical object characteristic.

#### See

https://vocabulary.uncefact.org/name

***

### physicalIndicator?

> `optional` **physicalIndicator**: `boolean`

The indication of whether or not this geographical object can be characterized as physical.

#### See

https://vocabulary.uncefact.org/physicalIndicator

***

### relevantGeometryType?

> `optional` **relevantGeometryType**: `string`

The type of geometry, expressed as text, relevant for this geographical object characteristic.

#### See

https://vocabulary.uncefact.org/relevantGeometryType

***

### shapeType?

> `optional` **shapeType**: `string`

The type of shape, expressed as text, such as a semi-circle, for this geographical object characteristic.

#### See

https://vocabulary.uncefact.org/shapeType
