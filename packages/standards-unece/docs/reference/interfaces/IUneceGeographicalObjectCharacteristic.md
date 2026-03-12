# Interface: IUneceGeographicalObjectCharacteristic

An attribute of a geographical object.

## See

https://vocabulary.uncefact.org/GeographicalObjectCharacteristic

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"GeographicalObjectCharacteristic"`

JSON-LD Type.

***

### description? {#description}

> `optional` **description**: `string`

The textual description for this geographical object characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### descriptionReference? {#descriptionreference}

> `optional` **descriptionReference**: `string`

The description reference, expressed as text, for this geographical object characteristic.

#### See

https://vocabulary.uncefact.org/descriptionReference

***

### geometryCollectionIndicator? {#geometrycollectionindicator}

> `optional` **geometryCollectionIndicator**: `boolean`

The indication of whether or not this geographical object can be characterized as a geometry collection.

#### See

https://vocabulary.uncefact.org/geometryCollectionIndicator

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this geographical object characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, for this geographical object characteristic.

#### See

https://vocabulary.uncefact.org/name

***

### physicalIndicator? {#physicalindicator}

> `optional` **physicalIndicator**: `boolean`

The indication of whether or not this geographical object can be characterized as physical.

#### See

https://vocabulary.uncefact.org/physicalIndicator

***

### relevantGeometryType? {#relevantgeometrytype}

> `optional` **relevantGeometryType**: `string`

The type of geometry, expressed as text, relevant for this geographical object characteristic.

#### See

https://vocabulary.uncefact.org/relevantGeometryType

***

### shapeType? {#shapetype}

> `optional` **shapeType**: `string`

The type of shape, expressed as text, such as a semi-circle, for this geographical object characteristic.

#### See

https://vocabulary.uncefact.org/shapeType
