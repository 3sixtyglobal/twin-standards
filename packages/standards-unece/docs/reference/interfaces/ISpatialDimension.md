# Interface: ISpatialDimension

A measure of spatial extent of an object, such as the length, breadth or height of a shipping container.

## See

https://vocabulary.uncefact.org/SpatialDimension

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

> **type**: `"SpatialDimension"`

JSON-LD Type.

***

### componentSpatialDimension?

> `optional` **componentSpatialDimension**: `ISpatialDimension`[]

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

### dimensionTypeCode?

> `optional` **dimensionTypeCode**: [`DimensionTypeCodeList`](../type-aliases/DimensionTypeCodeList.md)[]

The code specifying the type of spatial dimension, such as thickness, area, or volume.

#### See

https://vocabulary.uncefact.org/dimensionTypeCode

***

### heightMeasure?

> `optional` **heightMeasure**: [`IMeasureType`](IMeasureType.md)[]

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

> `optional` **lengthMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure of the length component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/lengthMeasure

***

### linearUnitDiameterMeasure?

> `optional` **linearUnitDiameterMeasure**: [`ILinearUnitMeasureType`](ILinearUnitMeasureType.md)[]

The measure of the diameter component for this spatial dimension.

#### See

https://vocabulary.uncefact.org/linearUnitDiameterMeasure

***

### linearUnitHeightMeasure?

> `optional` **linearUnitHeightMeasure**: [`ILinearUnitMeasureType`](ILinearUnitMeasureType.md)[]

The measure of the height component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/linearUnitHeightMeasure

***

### linearUnitLengthMeasure?

> `optional` **linearUnitLengthMeasure**: [`ILinearUnitMeasureType`](ILinearUnitMeasureType.md)[]

The measure of the length component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/linearUnitLengthMeasure

***

### linearUnitWidthMeasure?

> `optional` **linearUnitWidthMeasure**: [`ILinearUnitMeasureType`](ILinearUnitMeasureType.md)[]

The measure of the width component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/linearUnitWidthMeasure

***

### unitQuantity?

> `optional` **unitQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of units with these spatial dimensions.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### unitValueMeasure?

> `optional` **unitValueMeasure**: [`IUnitMeasureType`](IUnitMeasureType.md)[]

The measure of the value of this spatial dimension.

#### See

https://vocabulary.uncefact.org/unitValueMeasure

***

### widthMeasure?

> `optional` **widthMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure of the width component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/widthMeasure
