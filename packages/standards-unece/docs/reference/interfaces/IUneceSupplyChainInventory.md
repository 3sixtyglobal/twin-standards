# Interface: IUneceSupplyChainInventory

Supply chain goods and materials held in stock.

## See

https://vocabulary.uncefact.org/SupplyChainInventory

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SupplyChainInventory"`

JSON-LD Type.

***

### assetTransferStatusCode? {#assettransferstatuscode}

> `optional` **assetTransferStatusCode?**: `string`

The code specifying an asset transfer status for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/assetTransferStatusCode

***

### availabilityIndicator? {#availabilityindicator}

> `optional` **availabilityIndicator?**: `boolean`

The indication of whether or not this supply chain inventory is available.

#### See

https://vocabulary.uncefact.org/availabilityIndicator

***

### averageDemandQuantity? {#averagedemandquantity}

> `optional` **averageDemandQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The average demand quantity for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/averageDemandQuantity

***

### averageDurationDateTime? {#averagedurationdatetime}

> `optional` **averageDurationDateTime?**: `string`

The date, time, date time, or other date time of the average duration for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/averageDurationDateTime

***

### calculationDateTime? {#calculationdatetime}

> `optional` **calculationDateTime?**: `string`

The date, time, date time, or other date time value of the calculation of this supply chain inventory.

#### See

https://vocabulary.uncefact.org/calculationDateTime

***

### dispositionDocument? {#dispositiondocument}

> `optional` **dispositionDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A disposition document referenced in this supply chain inventory.

#### See

https://vocabulary.uncefact.org/dispositionDocument

***

### includedBatch? {#includedbatch}

> `optional` **includedBatch?**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

A product batch included in this supply chain inventory.

#### See

https://vocabulary.uncefact.org/includedBatch

***

### includedMaterial? {#includedmaterial}

> `optional` **includedMaterial?**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Material included in this supply chain inventory.

#### See

https://vocabulary.uncefact.org/includedMaterial

***

### includedTradeProduct? {#includedtradeproduct}

> `optional` **includedTradeProduct?**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

A product included in this supply chain inventory.

#### See

https://vocabulary.uncefact.org/includedTradeProduct

***

### maximumStockLevelMeasure? {#maximumstocklevelmeasure}

> `optional` **maximumStockLevelMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the maximum stock level for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/maximumStockLevelMeasure

***

### maximumStockQuantity? {#maximumstockquantity}

> `optional` **maximumStockQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The maximum stock quantity in this CI supply chain inventory.

#### See

https://vocabulary.uncefact.org/maximumStockQuantity

***

### minimumStockLevelMeasure? {#minimumstocklevelmeasure}

> `optional` **minimumStockLevelMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the minimum stock level for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/minimumStockLevelMeasure

***

### minimumStockQuantity? {#minimumstockquantity}

> `optional` **minimumStockQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The minimum stock quantity in this CI supply chain inventory.

#### See

https://vocabulary.uncefact.org/minimumStockQuantity

***

### plannedStockCalculationDateTime? {#plannedstockcalculationdatetime}

> `optional` **plannedStockCalculationDateTime?**: `string`

The date, time, date time, or other date time value of the planned stock calculation of this supply chain inventory.

#### See

https://vocabulary.uncefact.org/plannedStockCalculationDateTime

***

### plannedStockQuantity? {#plannedstockquantity}

> `optional` **plannedStockQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The planned stock quantity for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/plannedStockQuantity

***

### remarkNote? {#remarknote}

> `optional` **remarkNote?**: [`IUneceNote`](IUneceNote.md)[]

A note containing a remark for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/remarkNote

***

### specifiedLogisticsLocation? {#specifiedlogisticslocation}

> `optional` **specifiedLogisticsLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location specified for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLocation

***

### specifiedSupplyChainEvent? {#specifiedsupplychainevent}

> `optional` **specifiedSupplyChainEvent?**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain event specified for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### specifiedTradeParty? {#specifiedtradeparty}

> `optional` **specifiedTradeParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party specified for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/specifiedTradeParty

***

### statusCode? {#statuscode}

> `optional` **statusCode?**: `string`

The code specifying a status for this supply chain inventory.

#### See

https://vocabulary.uncefact.org/statusCode

***

### stockQuantity? {#stockquantity}

> `optional` **stockQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity of stock in this supply chain inventory.

#### See

https://vocabulary.uncefact.org/stockQuantity
