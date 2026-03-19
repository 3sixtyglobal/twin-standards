# Interface: IUnecePackage

A self-contained wrapping or container within which goods can be contained for logistics purposes, such as a box or a
barrel which can be filled, partially filled or empty.
A referenced self-contained wrapping or container within which goods can be contained for logistics purposes.

## See

https://vocabulary.uncefact.org/Package

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Package"`

JSON-LD Type.

***

### additionalLevelCode? {#additionallevelcode}

> `optional` **additionalLevelCode?**: `string`

The code specifying the additional level of this logistics package.

#### See

https://vocabulary.uncefact.org/additionalLevelCode

***

### associatedDocument? {#associateddocument}

> `optional` **associatedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document associated with this logistics package.

#### See

https://vocabulary.uncefact.org/associatedDocument

***

### colourCode? {#colourcode}

> `optional` **colourCode?**: `string`

The code specifying the colour of this referenced logistics package.

#### See

https://vocabulary.uncefact.org/colourCode

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this logistics package.

#### See

https://vocabulary.uncefact.org/description

***

### despatchNoteAssociatedDocument? {#despatchnoteassociateddocument}

> `optional` **despatchNoteAssociatedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A despatch note associated with this logistics package.

#### See

https://vocabulary.uncefact.org/despatchNoteAssociatedDocument

***

### globalId? {#globalid}

> `optional` **globalId?**: `string` \| `IJsonLdValueObject`

The unique global identifier for this logistics package.

#### See

https://vocabulary.uncefact.org/globalId

***

### grossVolumeMeasure? {#grossvolumemeasure}

> `optional` **grossVolumeMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the gross volume of this logistics package.

#### See

https://vocabulary.uncefact.org/grossVolumeMeasure

***

### grossWeightMeasure? {#grossweightmeasure}

> `optional` **grossWeightMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the gross weight (mass) of this logistics package and its contents.

#### See

https://vocabulary.uncefact.org/grossWeightMeasure

***

### hierarchicalLevelId? {#hierarchicallevelid}

> `optional` **hierarchicalLevelId?**: `string` \| `IJsonLdValueObject`

The level identifier for this logistics package.

#### See

https://vocabulary.uncefact.org/hierarchicalLevelId

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this logistics package.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedSupplyChainTradeLineItem? {#includedsupplychaintradelineitem}

> `optional` **includedSupplyChainTradeLineItem?**: [`IUneceSupplyChainTradeLineItem`](IUneceSupplyChainTradeLineItem.md)[]

A supply chain trade line item included in this logistics package.

#### See

https://vocabulary.uncefact.org/includedSupplyChainTradeLineItem

***

### information? {#information}

> `optional` **information?**: `string`

Information, expressed as text, for this logistics package.

#### See

https://vocabulary.uncefact.org/information

***

### itemQuantity? {#itemquantity}

> `optional` **itemQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of logistics packages at this level.

#### See

https://vocabulary.uncefact.org/itemQuantity

***

### linearDimension? {#lineardimension}

> `optional` **linearDimension?**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)

The linear spatial dimensions of this logistics package.

#### See

https://vocabulary.uncefact.org/linearDimension

***

### logisticsPackageAdditionalLevelCode? {#logisticspackageadditionallevelcode}

> `optional` **logisticsPackageAdditionalLevelCode?**: `string`

The code specifying the additional level of this logistics package.

#### See

https://vocabulary.uncefact.org/logisticsPackageAdditionalLevelCode

***

### netVolumeMeasure? {#netvolumemeasure}

> `optional` **netVolumeMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a net volume of this logistics package.

#### See

https://vocabulary.uncefact.org/netVolumeMeasure

***

### netWeightMeasure? {#netweightmeasure}

> `optional` **netWeightMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the net weight of this logistics package, i.e. the weight (mass) of the contents.

#### See

https://vocabulary.uncefact.org/netWeightMeasure

***

### nominalGrossVolumeMeasure? {#nominalgrossvolumemeasure}

> `optional` **nominalGrossVolumeMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the nominal gross volume of this logistics package.

#### See

https://vocabulary.uncefact.org/nominalGrossVolumeMeasure

***

### nominalGrossWeightMeasure? {#nominalgrossweightmeasure}

> `optional` **nominalGrossWeightMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the nominal gross weight (mass) of this logistics package and its contents.

#### See

https://vocabulary.uncefact.org/nominalGrossWeightMeasure

***

### packageType? {#packagetype}

> `optional` **packageType?**: `string`

A type, expressed as text, of this logistics package.

#### See

https://vocabulary.uncefact.org/packageType

***

### packageTypeCode? {#packagetypecode}

> `optional` **packageTypeCode?**: [`UnecePackageTypeCodeList`](../type-aliases/UnecePackageTypeCodeList.md)[]

A code specifying the type of logistics package.

#### See

https://vocabulary.uncefact.org/packageTypeCode

***

### packagingLevelCode? {#packaginglevelcode}

> `optional` **packagingLevelCode?**: [`UnecePackagingLevelCodeList`](../type-aliases/UnecePackagingLevelCodeList.md)

The code specifying the level of this logistics package.

#### See

https://vocabulary.uncefact.org/packagingLevelCode

***

### parentId? {#parentid}

> `optional` **parentId?**: `string` \| `IJsonLdValueObject`

The unique parent identifier for this logistics package.

#### See

https://vocabulary.uncefact.org/parentId

***

### perPackageUnitQuantity? {#perpackageunitquantity}

> `optional` **perPackageUnitQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A number of units per package in this logistics package.

#### See

https://vocabulary.uncefact.org/perPackageUnitQuantity

***

### physicalShippingMarks? {#physicalshippingmarks}

> `optional` **physicalShippingMarks?**: [`IUneceShippingMarks`](IUneceShippingMarks.md)[]

Physical shipping marks and barcode information for this logistics package.

#### See

https://vocabulary.uncefact.org/physicalShippingMarks

***

### returnableIndicator? {#returnableindicator}

> `optional` **returnableIndicator?**: `boolean`

The indication of whether or not this logistics package is returnable.

#### See

https://vocabulary.uncefact.org/returnableIndicator

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric?**: `string`

The sequence number of this logistics package.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### seriesEndId? {#seriesendid}

> `optional` **seriesEndId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the end of a series of packages within this logistics package.

#### See

https://vocabulary.uncefact.org/seriesEndId

***

### seriesStartId? {#seriesstartid}

> `optional` **seriesStartId?**: `string` \| `IJsonLdValueObject`

The unique start identifier of a series of packages within this logistics package.

#### See

https://vocabulary.uncefact.org/seriesStartId

***

### specifiedLineTradeDelivery? {#specifiedlinetradedelivery}

> `optional` **specifiedLineTradeDelivery?**: [`IUneceLineTradeDelivery`](IUneceLineTradeDelivery.md)

The line trade delivery specified for this logistics package.

#### See

https://vocabulary.uncefact.org/specifiedLineTradeDelivery

***

### statedCondition? {#statedcondition}

> `optional` **statedCondition?**: [`IUneceSpecifiedCondition`](IUneceSpecifiedCondition.md)[]

A stated condition of this logistics package.

#### See

https://vocabulary.uncefact.org/statedCondition

***

### usedPackaging? {#usedpackaging}

> `optional` **usedPackaging?**: [`IUneceSupplyChainPackaging`](IUneceSupplyChainPackaging.md)[]

Supply chain packaging used for this logistics package.

#### See

https://vocabulary.uncefact.org/usedPackaging

***

### volumeUnitGrossVolumeMeasure? {#volumeunitgrossvolumemeasure}

> `optional` **volumeUnitGrossVolumeMeasure?**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)

The measure of the gross volume of this referenced logistics package.

#### See

https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure

***

### weightUnitGrossWeightMeasure? {#weightunitgrossweightmeasure}

> `optional` **weightUnitGrossWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The measure of the gross weight (mass) of this referenced logistics package and its contents.

#### See

https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure

***

### weightUnitNetWeightMeasure? {#weightunitnetweightmeasure}

> `optional` **weightUnitNetWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The measure of the net weight (mass) of the contents of this referenced logistics package.

#### See

https://vocabulary.uncefact.org/weightUnitNetWeightMeasure

***

### weightUnitTareWeightMeasure? {#weightunittareweightmeasure}

> `optional` **weightUnitTareWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)

The measure of the tare weight of this logistics package.

#### See

https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
