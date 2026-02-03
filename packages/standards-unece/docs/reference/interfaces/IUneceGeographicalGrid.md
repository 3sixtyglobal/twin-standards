# Interface: IUneceGeographicalGrid

The combination of the latitude and longitude forming a graticule, used for specifying the position of any location on
the surface of the Earth, without consideration of altitude or depth (reference ISO 19136).

## See

https://vocabulary.uncefact.org/GeographicalGrid

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

> **type**: `"GeographicalGrid"`

JSON-LD Type.

***

### associatedGeographicalObjectCharacteristic?

> `optional` **associatedGeographicalObjectCharacteristic**: [`IUneceGeographicalObjectCharacteristic`](IUneceGeographicalObjectCharacteristic.md)

The geographical object characteristic associated with this geographical grid.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### associatedLocation?

> `optional` **associatedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

A logistics location associated with this specified geographical grid.

#### See

https://vocabulary.uncefact.org/associatedLocation

***

### axisName?

> `optional` **axisName**: `string`

An axis name, expressed as text, for this geographical grid.

#### See

https://vocabulary.uncefact.org/axisName

***

### cell?

> `optional` **cell**: `string`

The cell value, expressed as text, for this geographical grid.

#### See

https://vocabulary.uncefact.org/cell

***

### dimensionNumeric?

> `optional` **dimensionNumeric**: `string`

The dimension, expressed as a number, of this geographical grid.

#### See

https://vocabulary.uncefact.org/dimensionNumeric

***

### highLimit?

> `optional` **highLimit**: `string`

The tuple of elements, expressed as text, indicating the high limit of this geographical grid specifying the diagonally
opposing corner of each axis.

#### See

https://vocabulary.uncefact.org/highLimit

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this geographical grid.

#### See

https://vocabulary.uncefact.org/identifier

***

### lowLimit?

> `optional` **lowLimit**: `string`

The tuple of elements, expressed as text, indicating the low limit of this geographical grid specifying the offset of
each axis.

#### See

https://vocabulary.uncefact.org/lowLimit

***

### offsetVectorNumeric?

> `optional` **offsetVectorNumeric**: `string`

The offset vector, expressed as a number, which indicates the offset of cells along each axis for this geographical
grid.

#### See

https://vocabulary.uncefact.org/offsetVectorNumeric

***

### originAssociatedDirectPositionList?

> `optional` **originAssociatedDirectPositionList**: `string`

The direct position list associated with the origin of this geographical grid.

#### See

https://vocabulary.uncefact.org/originAssociatedDirectPositionList

***

### specifiedPlot?

> `optional` **specifiedPlot**: [`IUnecePlot`](IUnecePlot.md)

A crop plot specified for this geographical grid.

#### See

https://vocabulary.uncefact.org/specifiedPlot
