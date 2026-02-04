# Interface: IUneceSupplyChainPackaging

Any material with which supply chain goods are packaged, such as a box or bubble wrap.

## See

https://vocabulary.uncefact.org/SupplyChainPackaging

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

> **type**: `"SupplyChainPackaging"`

JSON-LD Type.

***

### additionalInstructionCode?

> `optional` **additionalInstructionCode**: `string`

A code specifying an additional instruction for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/additionalInstructionCode

***

### additionalInstructionIndicator?

> `optional` **additionalInstructionIndicator**: `boolean`

The indication of whether or not there is an additional instruction for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/additionalInstructionIndicator

***

### applicableDisposalInstructions?

> `optional` **applicableDisposalInstructions**: [`IUneceDisposalInstructions`](IUneceDisposalInstructions.md)[]

Disposal instructions for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/applicableDisposalInstructions

***

### applicableGoodsCharacteristic?

> `optional` **applicableGoodsCharacteristic**: [`IUneceGoodsCharacteristic`](IUneceGoodsCharacteristic.md)[]

Material goods characteristic applicable to this supply chain packaging.

#### See

https://vocabulary.uncefact.org/applicableGoodsCharacteristic

***

### applicablePackagingInstructions?

> `optional` **applicablePackagingInstructions**: [`IUnecePackagingInstructions`](IUnecePackagingInstructions.md)[]

Packaging instructions applicable to this supply chain packaging.

#### See

https://vocabulary.uncefact.org/applicablePackagingInstructions

***

### applicableReturnableAssetInstructions?

> `optional` **applicableReturnableAssetInstructions**: [`IUneceReturnableAssetInstructions`](IUneceReturnableAssetInstructions.md)[]

Returnable asset instructions for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/applicableReturnableAssetInstructions

***

### capacityMeasure?

> `optional` **capacityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the capacity of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/capacityMeasure

***

### conditionCode?

> `optional` **conditionCode**: `string`

A code specifying the condition of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/conditionCode

***

### contentLayerQuantity?

> `optional` **contentLayerQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of content layers that are or may be packaged with this supply chain packaging, such as the number of layers
of product on a pallet.

#### See

https://vocabulary.uncefact.org/contentLayerQuantity

***

### customerFacingTotalUnitQuantity?

> `optional` **customerFacingTotalUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total number of units of this supply chain packaging facing the customer, such as would be seen when this packaging
is placed on a retail shelf.

#### See

https://vocabulary.uncefact.org/customerFacingTotalUnitQuantity

***

### description?

> `optional` **description**: `string`

A textual description of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/description

***

### disposalMethodCode?

> `optional` **disposalMethodCode**: `string`

A code specifying the disposal method of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/disposalMethodCode

***

### instructionCode?

> `optional` **instructionCode**: `string`

A code specifying an instruction for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/instructionCode

***

### layerTotalUnitQuantity?

> `optional` **layerTotalUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total number of units in a layer of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/layerTotalUnitQuantity

***

### linearDimension?

> `optional` **linearDimension**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)

The linear spatial dimensions of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/linearDimension

***

### maximumLinearDimension?

> `optional` **maximumLinearDimension**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)[]

The maximum linear spatial dimensions of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/maximumLinearDimension

***

### maximumStackabilityQuantity?

> `optional` **maximumStackabilityQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units of this type of supply chain packaging which can be stacked on top of each other.

#### See

https://vocabulary.uncefact.org/maximumStackabilityQuantity

***

### maximumStackabilityWeightMeasure?

> `optional` **maximumStackabilityWeightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the maximum stackability weight of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/maximumStackabilityWeightMeasure

***

### minimumLinearDimension?

> `optional` **minimumLinearDimension**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)[]

The minimum linear spatial dimensions of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/minimumLinearDimension

***

### packageTypeCode?

> `optional` **packageTypeCode**: [`UnecePackageTypeCodeList`](../type-aliases/UnecePackageTypeCodeList.md)

The code specifying the type of supply chain packaging.

#### See

https://vocabulary.uncefact.org/packageTypeCode

***

### packagingType?

> `optional` **packagingType**: `string`

The type, expressed as text, of supply chain packaging.

#### See

https://vocabulary.uncefact.org/packagingType

***

### recyclableIndicator?

> `optional` **recyclableIndicator**: `boolean`

The indication of whether or not this supply chain packaging is recyclable.

#### See

https://vocabulary.uncefact.org/recyclableIndicator

***

### recycledMaterialIndicator?

> `optional` **recycledMaterialIndicator**: `boolean`

The indication of whether or not this supply chain packaging is made of recycled material.

#### See

https://vocabulary.uncefact.org/recycledMaterialIndicator

***

### recycledMaterialPercent?

> `optional` **recycledMaterialPercent**: `string`

The percentage of recycled material in this supply chain packaging.

#### See

https://vocabulary.uncefact.org/recycledMaterialPercent

***

### returnableIndicator?

> `optional` **returnableIndicator**: `boolean`

The indication of whether or not this supply chain packaging is returnable.

#### See

https://vocabulary.uncefact.org/returnableIndicator

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

The number of a sequence of the supply chain packaging.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedMarking?

> `optional` **specifiedMarking**: [`IUneceMarking`](IUneceMarking.md)[]

A marking specified for this supply chain packaging, such as an inscription, stamp or label to indicate date, ownership,
quality, manufacture or origin.

#### See

https://vocabulary.uncefact.org/specifiedMarking

***

### supplyChainPackagingLevelCode?

> `optional` **supplyChainPackagingLevelCode**: `string`

The code specifying a level for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/supplyChainPackagingLevelCode

***

### totalUnitQuantity?

> `optional` **totalUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

A total number of units contained in this supply chain packaging.

#### See

https://vocabulary.uncefact.org/totalUnitQuantity

***

### transportMaximumStackabilityQuantity?

> `optional` **transportMaximumStackabilityQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units of this type of supply chain packaging which can be stacked vertically for transport operations.

#### See

https://vocabulary.uncefact.org/transportMaximumStackabilityQuantity

***

### weightMeasure?

> `optional` **weightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

A measure of the weight of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/weightMeasure

***

### weightUnitLoadBearingCapabilityMeasure?

> `optional` **weightUnitLoadBearingCapabilityMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The load bearing capability measure for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/weightUnitLoadBearingCapabilityMeasure
