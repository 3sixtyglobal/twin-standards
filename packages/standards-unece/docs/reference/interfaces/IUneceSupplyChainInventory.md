# Interface: IUneceSupplyChainInventory

Supply chain goods and materials held in stock.

## See

https://vocabulary.uncefact.org/SupplyChainInventory

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

> **type**: `"SupplyChainInventory"`

JSON-LD Type.

***

### assetTransferStatusCode?

> `optional` **assetTransferStatusCode**: `string`

The code specifying an asset transfer status for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/assetTransferStatusCode

***

### availabilityIndicator?

> `optional` **availabilityIndicator**: `boolean`

The indication of whether or not this supply chain inventory is available.

#### See

https://vocabulary.uncefact.org/availabilityIndicator

***

### averageDemandQuantity?

> `optional` **averageDemandQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The average demand quantity for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/averageDemandQuantity

***

### averageDurationDateTime?

> `optional` **averageDurationDateTime**: `string`

The date, time, date time, or other date time of the average duration for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/averageDurationDateTime

***

### calculationDateTime?

> `optional` **calculationDateTime**: `string`

The date, time, date time, or other date time value of the calculation of this supply chain inventory.

#### See

https://vocabulary.uncefact.org/calculationDateTime

***

### dispositionDocument?

> `optional` **dispositionDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A disposition document referenced in this supply chain inventory.

#### See

https://vocabulary.uncefact.org/dispositionDocument

***

### includedBatch?

> `optional` **includedBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

A product batch included in this supply chain inventory.

#### See

https://vocabulary.uncefact.org/includedBatch

***

### includedMaterial?

> `optional` **includedMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Material included in this supply chain inventory.

#### See

https://vocabulary.uncefact.org/includedMaterial

***

### includedTradeProduct?

> `optional` **includedTradeProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

A product included in this supply chain inventory.

#### See

https://vocabulary.uncefact.org/includedTradeProduct

***

### maximumStockLevelMeasure?

> `optional` **maximumStockLevelMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the maximum stock level for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/maximumStockLevelMeasure

***

### maximumStockQuantity?

> `optional` **maximumStockQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The maximum stock quantity in this CI supply chain inventory.

#### See

https://vocabulary.uncefact.org/maximumStockQuantity

***

### minimumStockLevelMeasure?

> `optional` **minimumStockLevelMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the minimum stock level for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/minimumStockLevelMeasure

***

### minimumStockQuantity?

> `optional` **minimumStockQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The minimum stock quantity in this CI supply chain inventory.

#### See

https://vocabulary.uncefact.org/minimumStockQuantity

***

### plannedStockCalculationDateTime?

> `optional` **plannedStockCalculationDateTime**: `string`

The date, time, date time, or other date time value of the planned stock calculation of this supply chain inventory.

#### See

https://vocabulary.uncefact.org/plannedStockCalculationDateTime

***

### plannedStockQuantity?

> `optional` **plannedStockQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The planned stock quantity for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/plannedStockQuantity

***

### remarkNote?

> `optional` **remarkNote**: [`IUneceNote`](IUneceNote.md)[]

A note containing a remark for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/remarkNote

***

### specifiedLogisticsLocation?

> `optional` **specifiedLogisticsLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

The location specified for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLocation

***

### specifiedSupplyChainEvent?

> `optional` **specifiedSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain event specified for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### specifiedTradeParty?

> `optional` **specifiedTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party specified for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/specifiedTradeParty

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying a status for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/statusCode

***

### stockQuantity?

> `optional` **stockQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The quantity of stock in this supply chain inventory.

#### See

https://vocabulary.uncefact.org/stockQuantity
