# Interface: IUneceAssociatedTransportEquipment

A piece of transport equipment that is associated with another piece of transport equipment, such as a maritime
container placed on a rail wagon for transportation.

## See

https://vocabulary.uncefact.org/AssociatedTransportEquipment

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AssociatedTransportEquipment"`

JSON-LD Type.

***

### affixedSeal? {#affixedseal}

> `optional` **affixedSeal?**: [`IUneceSeal`](IUneceSeal.md)[]

A logistics seal affixed to this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/affixedSeal

***

### associatedTransportEquipmentUsedCapacityCode? {#associatedtransportequipmentusedcapacitycode}

> `optional` **associatedTransportEquipmentUsedCapacityCode?**: `string`

The code specifying the used capacity, such as full or empty, of this associated piece of transport equipment.

#### See

https://vocabulary.uncefact.org/associatedTransportEquipmentUsedCapacityCode

***

### cargoResidueStatusCode? {#cargoresiduestatuscode}

> `optional` **cargoResidueStatusCode?**: `string`

A code specifying the cargo residue status for this piece of associated transport equipment, such as required by
dangerous goods regulations.

#### See

https://vocabulary.uncefact.org/cargoResidueStatusCode

***

### characteristic? {#characteristic}

> `optional` **characteristic?**: `string`

The textual description of the characteristics, i.e. size and type, of this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/characteristic

***

### containedConsignment? {#containedconsignment}

> `optional` **containedConsignment?**: [`IUneceConsignment`](IUneceConsignment.md)[]

A supply chain consignment contained in this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/containedConsignment

***

### goodsItemUnitQuantity? {#goodsitemunitquantity}

> `optional` **goodsItemUnitQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A quantity of goods items in this associated transport equipment.

#### See

https://vocabulary.uncefact.org/goodsItemUnitQuantity

***

### grossGoodsVolumeMeasure? {#grossgoodsvolumemeasure}

> `optional` **grossGoodsVolumeMeasure?**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)[]

A measure of the gross goods volume of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/grossGoodsVolumeMeasure

***

### grossGoodsWeightMeasure? {#grossgoodsweightmeasure}

> `optional` **grossGoodsWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the gross goods weight of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/grossGoodsWeightMeasure

***

### grossVolumeMeasure? {#grossvolumemeasure}

> `optional` **grossVolumeMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the gross volume of this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/grossVolumeMeasure

***

### grossWeightMeasure? {#grossweightmeasure}

> `optional` **grossWeightMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the gross weight (mass) of this piece of associated transport equipment which is the weight (mass)
including loaded goods, packing and transport equipment.

#### See

https://vocabulary.uncefact.org/grossWeightMeasure

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

A unique number, mark or name which identifies this associated piece of transport equipment.

#### See

https://vocabulary.uncefact.org/identifier

***

### loadedDangerousGoods? {#loadeddangerousgoods}

> `optional` **loadedDangerousGoods?**: [`IUneceDangerousGoods`](IUneceDangerousGoods.md)[]

Dangerous goods loaded into or onto this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/loadedDangerousGoods

***

### loadedPackageQuantity? {#loadedpackagequantity}

> `optional` **loadedPackageQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of packages loaded into or onto this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/loadedPackageQuantity

***

### netGoodsVolumeMeasure? {#netgoodsvolumemeasure}

> `optional` **netGoodsVolumeMeasure?**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)[]

A measure of the net goods volume of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/netGoodsVolumeMeasure

***

### netGoodsWeightMeasure? {#netgoodsweightmeasure}

> `optional` **netGoodsWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the net goods weight of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/netGoodsWeightMeasure

***

### registrationCountry? {#registrationcountry}

> `optional` **registrationCountry?**: [`IUneceCountry`](IUneceCountry.md)[]

A registration country for this associated transport equipment.

#### See

https://vocabulary.uncefact.org/registrationCountry

***

### reportableQuantity? {#reportablequantity}

> `optional` **reportableQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A reportable quantity for this associated transport equipment.

#### See

https://vocabulary.uncefact.org/reportableQuantity

***

### sealQuantity? {#sealquantity}

> `optional` **sealQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A quantity of seals for this associated piece of transport equipment.

#### See

https://vocabulary.uncefact.org/sealQuantity

***

### sealedIndicator? {#sealedindicator}

> `optional` **sealedIndicator?**: `boolean`

The indication of whether or not this associated piece of transport equipment is sealed.

#### See

https://vocabulary.uncefact.org/sealedIndicator

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric?**: `string`

The sequence number differentiating this piece of transport equipment from others in a set of associated transport
equipment.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### settingTemperature? {#settingtemperature}

> `optional` **settingTemperature?**: [`IUneceTransportSettingTemperature`](IUneceTransportSettingTemperature.md)[]

A temperature setting for this piece of associated transport equipment, such as storage temperature or operational
temperature.

#### See

https://vocabulary.uncefact.org/settingTemperature

***

### stowagePositionId? {#stowagepositionid}

> `optional` **stowagePositionId?**: `string` \| `IJsonLdValueObject`

The stowage position identifier for this associated transport equipment.

#### See

https://vocabulary.uncefact.org/stowagePositionId

***

### tareWeightMeasure? {#tareweightmeasure}

> `optional` **tareWeightMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the tare weight (mass) of this piece of associated transport equipment which is the weight (mass)
including permanent equipment but excluding goods and loose accessories.

#### See

https://vocabulary.uncefact.org/tareWeightMeasure

***

### transportEquipmentCategoryCode? {#transportequipmentcategorycode}

> `optional` **transportEquipmentCategoryCode?**: [`UneceTransportEquipmentCategoryCodeList`](../type-aliases/UneceTransportEquipmentCategoryCodeList.md)[]

A code specifying a category of this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentCategoryCode

***

### transportEquipmentSizeTypeCharacteristicCode? {#transportequipmentsizetypecharacteristiccode}

> `optional` **transportEquipmentSizeTypeCharacteristicCode?**: [`UneceTransportEquipmentSizeTypeCodeList`](../type-aliases/UneceTransportEquipmentSizeTypeCodeList.md)

The code specifying the characteristics, i.e. size and type, of this piece of associated transport equipment.

#### See

https://vocabulary.uncefact.org/transportEquipmentSizeTypeCharacteristicCode

***

### unitQuantity? {#unitquantity}

> `optional` **unitQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units of this type of associated transport equipment.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### usedCapacityCode? {#usedcapacitycode}

> `optional` **usedCapacityCode?**: `string`

The code specifying the used capacity, such as full or empty, of this associated piece of transport equipment.

#### See

https://vocabulary.uncefact.org/usedCapacityCode

***

### verifiedGrossWeightMeasure? {#verifiedgrossweightmeasure}

> `optional` **verifiedGrossWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the verified gross weight (mass) of this piece of associated transport equipment which is the weight (mass)
including loaded goods, packing and transport equipment.

#### See

https://vocabulary.uncefact.org/verifiedGrossWeightMeasure

***

### weightUnitNetWeightMeasure? {#weightunitnetweightmeasure}

> `optional` **weightUnitNetWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of the net weight of this associated transport equipment.

#### See

https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
