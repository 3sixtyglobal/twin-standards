# Interface: IUneceLogisticsPackaging

Any wrapping or containment, such as a box or a barrel, whether or not any goods are contained within.

## See

https://vocabulary.uncefact.org/LogisticsPackaging

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"LogisticsPackaging"`

JSON-LD Type.

***

### applicablePackagingInstructions? {#applicablepackaginginstructions}

> `optional` **applicablePackagingInstructions**: [`IUnecePackagingInstructions`](IUnecePackagingInstructions.md)[]

Instructions applicable to this logistics packaging.

#### See

https://vocabulary.uncefact.org/applicablePackagingInstructions

***

### capacityMeasure? {#capacitymeasure}

> `optional` **capacityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a capacity of this logistics packaging.

#### See

https://vocabulary.uncefact.org/capacityMeasure

***

### certificationIndicator? {#certificationindicator}

> `optional` **certificationIndicator**: `boolean`

The indication whether or not this logistics packaging has a certification.

#### See

https://vocabulary.uncefact.org/certificationIndicator

***

### conditionCode? {#conditioncode}

> `optional` **conditionCode**: `string`

A code specifying a condition of this logistics packaging.

#### See

https://vocabulary.uncefact.org/conditionCode

***

### containedPackage? {#containedpackage}

> `optional` **containedPackage**: [`IUnecePackage`](IUnecePackage.md)[]

A package contained in this logistics packaging.

#### See

https://vocabulary.uncefact.org/containedPackage

***

### contentLayerQuantity? {#contentlayerquantity}

> `optional` **contentLayerQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A number of content layers in this logistics packaging.

#### See

https://vocabulary.uncefact.org/contentLayerQuantity

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this logistics packaging.

#### See

https://vocabulary.uncefact.org/description

***

### disposalMethodCode? {#disposalmethodcode}

> `optional` **disposalMethodCode**: `string`

A code specifying a disposal method for this logistics packaging.

#### See

https://vocabulary.uncefact.org/disposalMethodCode

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier for this logistics packaging.

#### See

https://vocabulary.uncefact.org/identifier

***

### information? {#information}

> `optional` **information**: `string`

Information, expressed as text, for this logistics packaging.

#### See

https://vocabulary.uncefact.org/information

***

### instructionCode? {#instructioncode}

> `optional` **instructionCode**: `string`

A code specifying an instruction for this logistics packaging.

#### See

https://vocabulary.uncefact.org/instructionCode

***

### instructionIndicator? {#instructionindicator}

> `optional` **instructionIndicator**: `boolean`

The indication of whether or not this logistics packaging has an instruction.

#### See

https://vocabulary.uncefact.org/instructionIndicator

***

### linearDimension? {#lineardimension}

> `optional` **linearDimension**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)[]

A linear dimension or a set of linear dimensions of this logistics packaging.

#### See

https://vocabulary.uncefact.org/linearDimension

***

### logisticsPackagingLevelCode? {#logisticspackaginglevelcode}

> `optional` **logisticsPackagingLevelCode**: `string`

The code specifying the level of this logistics packaging.

#### See

https://vocabulary.uncefact.org/logisticsPackagingLevelCode

***

### maximumStackabilityQuantity? {#maximumstackabilityquantity}

> `optional` **maximumStackabilityQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units of this type of logistics packaging which can be stacked on top of each other.

#### See

https://vocabulary.uncefact.org/maximumStackabilityQuantity

***

### methodDescription? {#methoddescription}

> `optional` **methodDescription**: `string`

The textual description of the method of logistics packaging, such as hermetically sealed.

#### See

https://vocabulary.uncefact.org/methodDescription

***

### packagingType? {#packagingtype}

> `optional` **packagingType**: `string`

The type, expressed as text, of this logistics packaging.

#### See

https://vocabulary.uncefact.org/packagingType

***

### returnableIndicator? {#returnableindicator}

> `optional` **returnableIndicator**: `boolean`

The indication of whether or not this logistics packaging is returnable.

#### See

https://vocabulary.uncefact.org/returnableIndicator

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric**: `string`

The sequence number for this logistics packaging.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedMarking? {#specifiedmarking}

> `optional` **specifiedMarking**: [`IUneceMarking`](IUneceMarking.md)[]

A marking specified for this logistics packaging.

#### See

https://vocabulary.uncefact.org/specifiedMarking

***

### totalUnitQuantity? {#totalunitquantity}

> `optional` **totalUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A total number of units contained in this logistics packaging.

#### See

https://vocabulary.uncefact.org/totalUnitQuantity

***

### transportMaximumStackabilityQuantity? {#transportmaximumstackabilityquantity}

> `optional` **transportMaximumStackabilityQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units of this type of logistics packaging which can be stacked vertically for transport operations.

#### See

https://vocabulary.uncefact.org/transportMaximumStackabilityQuantity

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

A code specifying a type of logistics packaging.

#### See

https://vocabulary.uncefact.org/typeCode

***

### weightMeasure? {#weightmeasure}

> `optional` **weightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a weight (mass) of this logistics packaging.

#### See

https://vocabulary.uncefact.org/weightMeasure

***

### weightUnitLoadBearingCapabilityMeasure? {#weightunitloadbearingcapabilitymeasure}

> `optional` **weightUnitLoadBearingCapabilityMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The measure of load bearing capability of this logistics packaging.

#### See

https://vocabulary.uncefact.org/weightUnitLoadBearingCapabilityMeasure
