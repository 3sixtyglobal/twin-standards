# Interface: IUneceSpatialDimension

A measure of spatial extent of an object, such as the length, breadth or height of a shipping container.

## See

https://vocabulary.uncefact.org/SpatialDimension

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SpatialDimension"`

JSON-LD Type.

***

### componentSpatialDimension? {#componentspatialdimension}

> `optional` **componentSpatialDimension**: `IUneceSpatialDimension`[]

A dimension that is a component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/componentSpatialDimension

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this spatial dimension.

#### See

https://vocabulary.uncefact.org/description

***

### dimensionTypeCode? {#dimensiontypecode}

> `optional` **dimensionTypeCode**: [`UneceDimensionTypeCodeList`](../type-aliases/UneceDimensionTypeCodeList.md)

The code specifying the type of spatial dimension, such as thickness, area, or volume.

#### See

https://vocabulary.uncefact.org/dimensionTypeCode

***

### heightMeasure? {#heightmeasure}

> `optional` **heightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the height component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/heightMeasure

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier of this spatial dimension.

#### See

https://vocabulary.uncefact.org/identifier

***

### lengthMeasure? {#lengthmeasure}

> `optional` **lengthMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the length component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/lengthMeasure

***

### linearUnitDiameterMeasure? {#linearunitdiametermeasure}

> `optional` **linearUnitDiameterMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the diameter component for this spatial dimension.

#### See

https://vocabulary.uncefact.org/linearUnitDiameterMeasure

***

### linearUnitHeightMeasure? {#linearunitheightmeasure}

> `optional` **linearUnitHeightMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the height component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/linearUnitHeightMeasure

***

### linearUnitLengthMeasure? {#linearunitlengthmeasure}

> `optional` **linearUnitLengthMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the length component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/linearUnitLengthMeasure

***

### linearUnitWidthMeasure? {#linearunitwidthmeasure}

> `optional` **linearUnitWidthMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the width component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/linearUnitWidthMeasure

***

### unitQuantity? {#unitquantity}

> `optional` **unitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units with these spatial dimensions.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### unitValueMeasure? {#unitvaluemeasure}

> `optional` **unitValueMeasure**: [`IUneceUnitMeasureType`](IUneceUnitMeasureType.md)

The measure of the value of this spatial dimension.

#### See

https://vocabulary.uncefact.org/unitValueMeasure

***

### widthMeasure? {#widthmeasure}

> `optional` **widthMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the width component of this spatial dimension.

#### See

https://vocabulary.uncefact.org/widthMeasure
