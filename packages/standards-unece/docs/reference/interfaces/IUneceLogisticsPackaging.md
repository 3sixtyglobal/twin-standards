# Interface: IUneceLogisticsPackaging

Any wrapping or containment, such as a box or a barrel, whether or not any goods are contained within.

## See

https://vocabulary.uncefact.org/LogisticsPackaging

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"LogisticsPackaging"`

JSON-LD Type.

***

### applicablePackagingInstructions?

> `optional` **applicablePackagingInstructions**: [`IUnecePackagingInstructions`](IUnecePackagingInstructions.md)[]

Instructions applicable to this logistics packaging.

#### See

https://vocabulary.uncefact.org/applicablePackagingInstructions

***

### capacityMeasure?

> `optional` **capacityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a capacity of this logistics packaging.

#### See

https://vocabulary.uncefact.org/capacityMeasure

***

### certificationIndicator?

> `optional` **certificationIndicator**: `boolean`

The indication whether or not this logistics packaging has a certification.

#### See

https://vocabulary.uncefact.org/certificationIndicator

***

### conditionCode?

> `optional` **conditionCode**: `string`

A code specifying a condition of this logistics packaging.

#### See

https://vocabulary.uncefact.org/conditionCode

***

### containedPackage?

> `optional` **containedPackage**: [`IUnecePackage`](IUnecePackage.md)[]

A package contained in this logistics packaging.

#### See

https://vocabulary.uncefact.org/containedPackage

***

### contentLayerQuantity?

> `optional` **contentLayerQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A number of content layers in this logistics packaging.

#### See

https://vocabulary.uncefact.org/contentLayerQuantity

***

### description?

> `optional` **description**: `string`

A textual description of this logistics packaging.

#### See

https://vocabulary.uncefact.org/description

***

### disposalMethodCode?

> `optional` **disposalMethodCode**: `string`

A code specifying a disposal method for this logistics packaging.

#### See

https://vocabulary.uncefact.org/disposalMethodCode

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier for this logistics packaging.

#### See

https://vocabulary.uncefact.org/identifier

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this logistics packaging.

#### See

https://vocabulary.uncefact.org/information

***

### instructionCode?

> `optional` **instructionCode**: `string`

A code specifying an instruction for this logistics packaging.

#### See

https://vocabulary.uncefact.org/instructionCode

***

### instructionIndicator?

> `optional` **instructionIndicator**: `boolean`

The indication of whether or not this logistics packaging has an instruction.

#### See

https://vocabulary.uncefact.org/instructionIndicator

***

### linearDimension?

> `optional` **linearDimension**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)[]

A linear dimension or a set of linear dimensions of this logistics packaging.

#### See

https://vocabulary.uncefact.org/linearDimension

***

### logisticsPackagingLevelCode?

> `optional` **logisticsPackagingLevelCode**: `string`

The code specifying the level of this logistics packaging.

#### See

https://vocabulary.uncefact.org/logisticsPackagingLevelCode

***

### maximumStackabilityQuantity?

> `optional` **maximumStackabilityQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units of this type of logistics packaging which can be stacked on top of each other.

#### See

https://vocabulary.uncefact.org/maximumStackabilityQuantity

***

### methodDescription?

> `optional` **methodDescription**: `string`

The textual description of the method of logistics packaging, such as hermetically sealed.

#### See

https://vocabulary.uncefact.org/methodDescription

***

### packagingType?

> `optional` **packagingType**: `string`

The type, expressed as text, of this logistics packaging.

#### See

https://vocabulary.uncefact.org/packagingType

***

### returnableIndicator?

> `optional` **returnableIndicator**: `boolean`

The indication of whether or not this logistics packaging is returnable.

#### See

https://vocabulary.uncefact.org/returnableIndicator

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

The sequence number for this logistics packaging.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedMarking?

> `optional` **specifiedMarking**: [`IUneceMarking`](IUneceMarking.md)[]

A marking specified for this logistics packaging.

#### See

https://vocabulary.uncefact.org/specifiedMarking

***

### totalUnitQuantity?

> `optional` **totalUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A total number of units contained in this logistics packaging.

#### See

https://vocabulary.uncefact.org/totalUnitQuantity

***

### transportMaximumStackabilityQuantity?

> `optional` **transportMaximumStackabilityQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units of this type of logistics packaging which can be stacked vertically for transport operations.

#### See

https://vocabulary.uncefact.org/transportMaximumStackabilityQuantity

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of logistics packaging.

#### See

https://vocabulary.uncefact.org/typeCode

***

### weightMeasure?

> `optional` **weightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a weight (mass) of this logistics packaging.

#### See

https://vocabulary.uncefact.org/weightMeasure

***

### weightUnitLoadBearingCapabilityMeasure?

> `optional` **weightUnitLoadBearingCapabilityMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The measure of load bearing capability of this logistics packaging.

#### See

https://vocabulary.uncefact.org/weightUnitLoadBearingCapabilityMeasure
