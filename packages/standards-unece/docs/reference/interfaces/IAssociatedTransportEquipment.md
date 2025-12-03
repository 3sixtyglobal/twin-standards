# Interface: IAssociatedTransportEquipment

A piece of transport equipment that is associated with another piece of transport equipment, such as a maritime
container placed on a rail wagon for transportation.

## See

https://vocabulary.uncefact.org/AssociatedTransportEquipment

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

> **type**: `"AssociatedTransportEquipment"`

JSON-LD Type.

***

### affixedSeal?

> `optional` **affixedSeal**: [`ISeal`](ISeal.md)[]

A logistics seal affixed to this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/affixedSeal

***

### associatedTransportEquipmentUsedCapacityCode?

> `optional` **associatedTransportEquipmentUsedCapacityCode**: `string`

The code specifying the used capacity, such as full or empty, of this associated piece of transport equipment.

#### See

https://vocabulary.uncefact.org/associatedTransportEquipmentUsedCapacityCode

***

### cargoResidueStatusCode?

> `optional` **cargoResidueStatusCode**: `string`

A code specifying the cargo residue status for this piece of associated transport equipment, such as required by
dangerous goods regulations.

#### See

https://vocabulary.uncefact.org/cargoResidueStatusCode

***

### characteristic?

> `optional` **characteristic**: `string`

The textual description of the characteristics, i.e. size and type, of this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/characteristic

***

### containedConsignment?

> `optional` **containedConsignment**: [`IConsignment`](IConsignment.md)[]

A supply chain consignment contained in this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/containedConsignment

***

### goodsItemUnitQuantity?

> `optional` **goodsItemUnitQuantity**: [`IQuantityType`](IQuantityType.md)[]

A quantity of goods items in this associated transport equipment.

#### See

https://vocabulary.uncefact.org/goodsItemUnitQuantity

***

### grossGoodsVolumeMeasure?

> `optional` **grossGoodsVolumeMeasure**: [`IVolumeUnitMeasureType`](IVolumeUnitMeasureType.md)[]

A measure of the gross goods volume of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/grossGoodsVolumeMeasure

***

### grossGoodsWeightMeasure?

> `optional` **grossGoodsWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

A measure of the gross goods weight of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/grossGoodsWeightMeasure

***

### grossVolumeMeasure?

> `optional` **grossVolumeMeasure**: [`IMeasureType`](IMeasureType.md)

The measure of the gross volume of this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/grossVolumeMeasure

***

### grossWeightMeasure?

> `optional` **grossWeightMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure of the gross weight (mass) of this piece of associated transport equipment which is the weight (mass)
including loaded goods, packing and transport equipment.

#### See

https://vocabulary.uncefact.org/grossWeightMeasure

***

### identifier?

> `optional` **identifier**: `string`

A unique number, mark or name which identifies this associated piece of transport equipment.

#### See

https://vocabulary.uncefact.org/identifier

***

### loadedDangerousGoods?

> `optional` **loadedDangerousGoods**: [`IDangerousGoods`](IDangerousGoods.md)[]

Dangerous goods loaded into or onto this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/loadedDangerousGoods

***

### loadedPackageQuantity?

> `optional` **loadedPackageQuantity**: [`IQuantityType`](IQuantityType.md)

The number of packages loaded into or onto this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/loadedPackageQuantity

***

### netGoodsVolumeMeasure?

> `optional` **netGoodsVolumeMeasure**: [`IVolumeUnitMeasureType`](IVolumeUnitMeasureType.md)[]

A measure of the net goods volume of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/netGoodsVolumeMeasure

***

### netGoodsWeightMeasure?

> `optional` **netGoodsWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

A measure of the net goods weight of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/netGoodsWeightMeasure

***

### registrationCountry?

> `optional` **registrationCountry**: [`ICountry`](ICountry.md)[]

A registration country for this associated transport equipment.

#### See

https://vocabulary.uncefact.org/registrationCountry

***

### reportableQuantity?

> `optional` **reportableQuantity**: [`IQuantityType`](IQuantityType.md)[]

A reportable quantity for this associated transport equipment.

#### See

https://vocabulary.uncefact.org/reportableQuantity

***

### sealQuantity?

> `optional` **sealQuantity**: [`IQuantityType`](IQuantityType.md)[]

A quantity of seals for this associated piece of transport equipment.

#### See

https://vocabulary.uncefact.org/sealQuantity

***

### sealedIndicator?

> `optional` **sealedIndicator**: `boolean`

The indication of whether or not this associated piece of transport equipment is sealed.

#### See

https://vocabulary.uncefact.org/sealedIndicator

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

The sequence number differentiating this piece of transport equipment from others in a set of associated transport
equipment.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### settingTemperature?

> `optional` **settingTemperature**: [`ITransportSettingTemperature`](ITransportSettingTemperature.md)[]

A temperature setting for this piece of associated transport equipment, such as storage temperature or operational
temperature.

#### See

https://vocabulary.uncefact.org/settingTemperature

***

### stowagePositionId?

> `optional` **stowagePositionId**: `string`

The stowage position identifier for this associated transport equipment.

#### See

https://vocabulary.uncefact.org/stowagePositionId

***

### tareWeightMeasure?

> `optional` **tareWeightMeasure**: [`IMeasureType`](IMeasureType.md)

The measure of the tare weight (mass) of this piece of associated transport equipment which is the weight (mass)
including permanent equipment but excluding goods and loose accessories.

#### See

https://vocabulary.uncefact.org/tareWeightMeasure

***

### transportEquipmentCategoryCode?

> `optional` **transportEquipmentCategoryCode**: [`TransportEquipmentCategoryCodeList`](../type-aliases/TransportEquipmentCategoryCodeList.md)[]

A code specifying a category of this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentCategoryCode

***

### transportEquipmentSizeTypeCharacteristicCode?

> `optional` **transportEquipmentSizeTypeCharacteristicCode**: [`TransportEquipmentSizeTypeCodeList`](../type-aliases/TransportEquipmentSizeTypeCodeList.md)

The code specifying the characteristics, i.e. size and type, of this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentSizeTypeCharacteristicCode

***

### unitQuantity?

> `optional` **unitQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of units of this type of associated transport equipment.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### usedCapacityCode?

> `optional` **usedCapacityCode**: `string`

The code specifying the used capacity, such as full or empty, of this associated piece of transport equipment.

#### See

https://vocabulary.uncefact.org/usedCapacityCode

***

### verifiedGrossWeightMeasure?

> `optional` **verifiedGrossWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

A measure of the verified gross weight (mass) of this piece of associated transport equipment which is the weight (mass)
including loaded goods, packing and transport equipment.

#### See

https://vocabulary.uncefact.org/verifiedGrossWeightMeasure

***

### weightUnitNetWeightMeasure?

> `optional` **weightUnitNetWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

A measure of the net weight of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
