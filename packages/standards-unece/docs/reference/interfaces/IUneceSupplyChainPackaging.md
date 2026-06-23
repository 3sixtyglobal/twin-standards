# Interface: IUneceSupplyChainPackaging

Any material with which supply chain goods are packaged, such as a box or bubble wrap.

## See

https://vocabulary.uncefact.org/SupplyChainPackaging

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SupplyChainPackaging"`

JSON-LD Type.

***

### additionalInstructionCode? {#additionalinstructioncode}

> `optional` **additionalInstructionCode?**: `string`

A code specifying an additional instruction for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/additionalInstructionCode

***

### additionalInstructionIndicator? {#additionalinstructionindicator}

> `optional` **additionalInstructionIndicator?**: `boolean`

The indication of whether or not there is an additional instruction for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/additionalInstructionIndicator

***

### applicableDisposalInstructions? {#applicabledisposalinstructions}

> `optional` **applicableDisposalInstructions?**: [`IUneceDisposalInstructions`](IUneceDisposalInstructions.md)[]

Disposal instructions for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/applicableDisposalInstructions

***

### applicableGoodsCharacteristic? {#applicablegoodscharacteristic}

> `optional` **applicableGoodsCharacteristic?**: [`IUneceGoodsCharacteristic`](IUneceGoodsCharacteristic.md)[]

Material goods characteristic applicable to this supply chain packaging.

#### See

https://vocabulary.uncefact.org/applicableGoodsCharacteristic

***

### applicablePackagingInstructions? {#applicablepackaginginstructions}

> `optional` **applicablePackagingInstructions?**: [`IUnecePackagingInstructions`](IUnecePackagingInstructions.md)[]

Packaging instructions applicable to this supply chain packaging.

#### See

https://vocabulary.uncefact.org/applicablePackagingInstructions

***

### applicableReturnableAssetInstructions? {#applicablereturnableassetinstructions}

> `optional` **applicableReturnableAssetInstructions?**: [`IUneceReturnableAssetInstructions`](IUneceReturnableAssetInstructions.md)[]

Returnable asset instructions for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/applicableReturnableAssetInstructions

***

### capacityMeasure? {#capacitymeasure}

> `optional` **capacityMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the capacity of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/capacityMeasure

***

### conditionCode? {#conditioncode}

> `optional` **conditionCode?**: `string`

A code specifying the condition of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/conditionCode

***

### contentLayerQuantity? {#contentlayerquantity}

> `optional` **contentLayerQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of content layers that are or may be packaged with this supply chain packaging, such as the number of layers
of product on a pallet.

#### See

https://vocabulary.uncefact.org/contentLayerQuantity

***

### customerFacingTotalUnitQuantity? {#customerfacingtotalunitquantity}

> `optional` **customerFacingTotalUnitQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total number of units of this supply chain packaging facing the customer, such as would be seen when this packaging
is placed on a retail shelf.

#### See

https://vocabulary.uncefact.org/customerFacingTotalUnitQuantity

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/description

***

### disposalMethodCode? {#disposalmethodcode}

> `optional` **disposalMethodCode?**: `string`

A code specifying the disposal method of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/disposalMethodCode

***

### instructionCode? {#instructioncode}

> `optional` **instructionCode?**: `string`

A code specifying an instruction for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/instructionCode

***

### layerTotalUnitQuantity? {#layertotalunitquantity}

> `optional` **layerTotalUnitQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total number of units in a layer of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/layerTotalUnitQuantity

***

### linearDimension? {#lineardimension}

> `optional` **linearDimension?**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)

The linear spatial dimensions of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/linearDimension

***

### maximumLinearDimension? {#maximumlineardimension}

> `optional` **maximumLinearDimension?**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)

The maximum linear spatial dimensions of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/maximumLinearDimension

***

### maximumStackabilityQuantity? {#maximumstackabilityquantity}

> `optional` **maximumStackabilityQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units of this type of supply chain packaging which can be stacked on top of each other.

#### See

https://vocabulary.uncefact.org/maximumStackabilityQuantity

***

### maximumStackabilityWeightMeasure? {#maximumstackabilityweightmeasure}

> `optional` **maximumStackabilityWeightMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the maximum stackability weight of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/maximumStackabilityWeightMeasure

***

### minimumLinearDimension? {#minimumlineardimension}

> `optional` **minimumLinearDimension?**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)

The minimum linear spatial dimensions of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/minimumLinearDimension

***

### packageTypeCode? {#packagetypecode}

> `optional` **packageTypeCode?**: [`UnecePackageTypeCodeList`](../type-aliases/UnecePackageTypeCodeList.md)

The code specifying the type of supply chain packaging.

#### See

https://vocabulary.uncefact.org/packageTypeCode

***

### packagingType? {#packagingtype}

> `optional` **packagingType?**: `string`

The type, expressed as text, of supply chain packaging.

#### See

https://vocabulary.uncefact.org/packagingType

***

### recyclableIndicator? {#recyclableindicator}

> `optional` **recyclableIndicator?**: `boolean`

The indication of whether or not this supply chain packaging is recyclable.

#### See

https://vocabulary.uncefact.org/recyclableIndicator

***

### recycledMaterialIndicator? {#recycledmaterialindicator}

> `optional` **recycledMaterialIndicator?**: `boolean`

The indication of whether or not this supply chain packaging is made of recycled material.

#### See

https://vocabulary.uncefact.org/recycledMaterialIndicator

***

### recycledMaterialPercent? {#recycledmaterialpercent}

> `optional` **recycledMaterialPercent?**: `string`

The percentage of recycled material in this supply chain packaging.

#### See

https://vocabulary.uncefact.org/recycledMaterialPercent

***

### returnableIndicator? {#returnableindicator}

> `optional` **returnableIndicator?**: `boolean`

The indication of whether or not this supply chain packaging is returnable.

#### See

https://vocabulary.uncefact.org/returnableIndicator

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric?**: `string`

The number of a sequence of the supply chain packaging.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedMarking? {#specifiedmarking}

> `optional` **specifiedMarking?**: [`IUneceMarking`](IUneceMarking.md)[]

A marking specified for this supply chain packaging, such as an inscription, stamp or label to indicate date, ownership,
quality, manufacture or origin.

#### See

https://vocabulary.uncefact.org/specifiedMarking

***

### supplyChainPackagingLevelCode? {#supplychainpackaginglevelcode}

> `optional` **supplyChainPackagingLevelCode?**: `string`

The code specifying a level for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/supplyChainPackagingLevelCode

***

### totalUnitQuantity? {#totalunitquantity}

> `optional` **totalUnitQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A total number of units contained in this supply chain packaging.

#### See

https://vocabulary.uncefact.org/totalUnitQuantity

***

### transportMaximumStackabilityQuantity? {#transportmaximumstackabilityquantity}

> `optional` **transportMaximumStackabilityQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units of this type of supply chain packaging which can be stacked vertically for transport operations.

#### See

https://vocabulary.uncefact.org/transportMaximumStackabilityQuantity

***

### weightMeasure? {#weightmeasure}

> `optional` **weightMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the weight of this supply chain packaging.

#### See

https://vocabulary.uncefact.org/weightMeasure

***

### weightUnitLoadBearingCapabilityMeasure? {#weightunitloadbearingcapabilitymeasure}

> `optional` **weightUnitLoadBearingCapabilityMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The load bearing capability measure for this supply chain packaging.

#### See

https://vocabulary.uncefact.org/weightUnitLoadBearingCapabilityMeasure
