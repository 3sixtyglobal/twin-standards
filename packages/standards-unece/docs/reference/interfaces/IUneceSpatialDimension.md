# Interface: IUneceSpatialDimension

A measure of spatial extent of an object, such as the length, breadth or height of a shipping container.

## See

https://vocabulary.uncefact.org/SpatialDimension

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

> **type**: `"SpatialDimension"`

JSON-LD Type.

***

### componentSpatialDimension?

> `optional` **componentSpatialDimension**: `IUneceSpatialDimension`[]

A dimension that is a component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/componentSpatialDimension

***

### description?

> `optional` **description**: `string`

A textual description of this spatial dimension.

#### See

https://vocabulary.uncefact.org/description

***

### dimensionTypeCode

> **dimensionTypeCode**: [`UneceDimensionTypeCodeList`](../type-aliases/UneceDimensionTypeCodeList.md)

The code specifying the type of spatial dimension, such as thickness, area, or volume.

#### See

https://vocabulary.uncefact.org/dimensionTypeCode

***

### heightMeasure?

> `optional` **heightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the height component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/heightMeasure

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier of this spatial dimension.

#### See

https://vocabulary.uncefact.org/identifier

***

### lengthMeasure?

> `optional` **lengthMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the length component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/lengthMeasure

***

### linearUnitDiameterMeasure?

> `optional` **linearUnitDiameterMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the diameter component for this spatial dimension.

#### See

https://vocabulary.uncefact.org/linearUnitDiameterMeasure

***

### linearUnitHeightMeasure?

> `optional` **linearUnitHeightMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the height component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/linearUnitHeightMeasure

***

### linearUnitLengthMeasure?

> `optional` **linearUnitLengthMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the length component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/linearUnitLengthMeasure

***

### linearUnitWidthMeasure?

> `optional` **linearUnitWidthMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)[]

The measure of the width component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/linearUnitWidthMeasure

***

### unitQuantity?

> `optional` **unitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units with these spatial dimensions.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### unitValueMeasure?

> `optional` **unitValueMeasure**: [`IUneceUnitMeasureType`](IUneceUnitMeasureType.md)

The measure of the value of this spatial dimension.

#### See

https://vocabulary.uncefact.org/unitValueMeasure

***

### widthMeasure?

> `optional` **widthMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the width component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/widthMeasure
