# Interface: IUneceAssociatedTransportEquipment

A piece of transport equipment that is associated with another piece of transport equipment, such as a maritime
container placed on a rail wagon for transportation.

## See

https://vocabulary.uncefact.org/AssociatedTransportEquipment

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"AssociatedTransportEquipment"`

JSON-LD Type.

***

### affixedSeal?

> `optional` **affixedSeal**: [`IUneceSeal`](IUneceSeal.md)[]

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

> `optional` **containedConsignment**: [`IUneceConsignment`](IUneceConsignment.md)[]

A supply chain consignment contained in this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/containedConsignment

***

### goodsItemUnitQuantity?

> `optional` **goodsItemUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A quantity of goods items in this associated transport equipment.

#### See

https://vocabulary.uncefact.org/goodsItemUnitQuantity

***

### grossGoodsVolumeMeasure?

> `optional` **grossGoodsVolumeMeasure**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)[]

A measure of the gross goods volume of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/grossGoodsVolumeMeasure

***

### grossGoodsWeightMeasure?

> `optional` **grossGoodsWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the gross goods weight of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/grossGoodsWeightMeasure

***

### grossVolumeMeasure?

> `optional` **grossVolumeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the gross volume of this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/grossVolumeMeasure

***

### grossWeightMeasure?

> `optional` **grossWeightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the gross weight (mass) of this piece of associated transport equipment which is the weight (mass)
including loaded goods, packing and transport equipment.

#### See

https://vocabulary.uncefact.org/grossWeightMeasure

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

A unique number, mark or name which identifies this associated piece of transport equipment.

#### See

https://vocabulary.uncefact.org/identifier

***

### loadedDangerousGoods?

> `optional` **loadedDangerousGoods**: [`IUneceDangerousGoods`](IUneceDangerousGoods.md)[]

Dangerous goods loaded into or onto this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/loadedDangerousGoods

***

### loadedPackageQuantity?

> `optional` **loadedPackageQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of packages loaded into or onto this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/loadedPackageQuantity

***

### netGoodsVolumeMeasure?

> `optional` **netGoodsVolumeMeasure**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)[]

A measure of the net goods volume of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/netGoodsVolumeMeasure

***

### netGoodsWeightMeasure?

> `optional` **netGoodsWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the net goods weight of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/netGoodsWeightMeasure

***

### registrationCountry?

> `optional` **registrationCountry**: [`IUneceCountry`](IUneceCountry.md)[]

A registration country for this associated transport equipment.

#### See

https://vocabulary.uncefact.org/registrationCountry

***

### reportableQuantity?

> `optional` **reportableQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A reportable quantity for this associated transport equipment.

#### See

https://vocabulary.uncefact.org/reportableQuantity

***

### sealQuantity?

> `optional` **sealQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

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

> `optional` **settingTemperature**: [`IUneceTransportSettingTemperature`](IUneceTransportSettingTemperature.md)[]

A temperature setting for this piece of associated transport equipment, such as storage temperature or operational
temperature.

#### See

https://vocabulary.uncefact.org/settingTemperature

***

### stowagePositionId?

> `optional` **stowagePositionId**: `string` \| `IJsonLdValueObject`

The stowage position identifier for this associated transport equipment.

#### See

https://vocabulary.uncefact.org/stowagePositionId

***

### tareWeightMeasure?

> `optional` **tareWeightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the tare weight (mass) of this piece of associated transport equipment which is the weight (mass)
including permanent equipment but excluding goods and loose accessories.

#### See

https://vocabulary.uncefact.org/tareWeightMeasure

***

### transportEquipmentCategoryCode?

> `optional` **transportEquipmentCategoryCode**: [`UneceTransportEquipmentCategoryCodeList`](../type-aliases/UneceTransportEquipmentCategoryCodeList.md)[]

A code specifying a category of this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentCategoryCode

***

### transportEquipmentSizeTypeCharacteristicCode?

> `optional` **transportEquipmentSizeTypeCharacteristicCode**: [`UneceTransportEquipmentSizeTypeCodeList`](../type-aliases/UneceTransportEquipmentSizeTypeCodeList.md)

The code specifying the characteristics, i.e. size and type, of this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentSizeTypeCharacteristicCode

***

### unitQuantity?

> `optional` **unitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

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

> `optional` **verifiedGrossWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the verified gross weight (mass) of this piece of associated transport equipment which is the weight (mass)
including loaded goods, packing and transport equipment.

#### See

https://vocabulary.uncefact.org/verifiedGrossWeightMeasure

***

### weightUnitNetWeightMeasure?

> `optional` **weightUnitNetWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the net weight of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
