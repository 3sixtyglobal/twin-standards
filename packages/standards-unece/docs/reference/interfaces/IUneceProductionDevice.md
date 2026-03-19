# Interface: IUneceProductionDevice

An object, especially a piece of mechanical or electronic equipment, made or adapted in order to perform a production
activity.

## See

https://vocabulary.uncefact.org/ProductionDevice

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductionDevice"`

JSON-LD Type.

***

### applicableParameter? {#applicableparameter}

> `optional` **applicableParameter?**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/applicableParameter

***

### combinedMachine? {#combinedmachine}

> `optional` **combinedMachine?**: [`IUneceMachine`](IUneceMachine.md)[]

A production machine combined with this specified production device.

#### See

https://vocabulary.uncefact.org/combinedMachine

***

### combinedProductionDevice? {#combinedproductiondevice}

> `optional` **combinedProductionDevice?**: `IUneceProductionDevice`[]

A production device combined with this specified production device.

#### See

https://vocabulary.uncefact.org/combinedProductionDevice

***

### functionDescription? {#functiondescription}

> `optional` **functionDescription?**: `string`

A textual description of a function of this specified production device.

#### See

https://vocabulary.uncefact.org/functionDescription

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier of this specified production device.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputApplicableBatch? {#inputapplicablebatch}

> `optional` **inputApplicableBatch?**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

An input batch applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/inputApplicableBatch

***

### inputApplicableMaterial? {#inputapplicablematerial}

> `optional` **inputApplicableMaterial?**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Input material applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/inputApplicableMaterial

***

### inputApplicableProduct? {#inputapplicableproduct}

> `optional` **inputApplicableProduct?**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

An input product applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/inputApplicableProduct

***

### inputCapacityMeasure? {#inputcapacitymeasure}

> `optional` **inputCapacityMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the input capacity of this specified production device, such as maximum reach or average per month.

#### See

https://vocabulary.uncefact.org/inputCapacityMeasure

***

### outputApplicableBatch? {#outputapplicablebatch}

> `optional` **outputApplicableBatch?**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

An output batch applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/outputApplicableBatch

***

### outputApplicableMaterial? {#outputapplicablematerial}

> `optional` **outputApplicableMaterial?**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Output material applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/outputApplicableMaterial

***

### outputApplicableProduct? {#outputapplicableproduct}

> `optional` **outputApplicableProduct?**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

An output product applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/outputApplicableProduct

***

### outputCapacityMeasure? {#outputcapacitymeasure}

> `optional` **outputCapacityMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the output capacity of this specified production device, such as maximum reach or average per month.

#### See

https://vocabulary.uncefact.org/outputCapacityMeasure

***

### productionDeviceType? {#productiondevicetype}

> `optional` **productionDeviceType?**: `string`

A type, expressed as text, for this specified production device.

#### See

https://vocabulary.uncefact.org/productionDeviceType

***

### reportingIOTDeviceSupplyChainEvent? {#reportingiotdevicesupplychainevent}

> `optional` **reportingIOTDeviceSupplyChainEvent?**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An IOT (Internet of Things) or other scanning device reporting event for this specified production device.

#### See

https://vocabulary.uncefact.org/reportingIOTDeviceSupplyChainEvent

***

### requestedOperationalApplicableParameter? {#requestedoperationalapplicableparameter}

> `optional` **requestedOperationalApplicableParameter?**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

An operational parameter requested for this specified production device.

#### See

https://vocabulary.uncefact.org/requestedOperationalApplicableParameter

***

### specifiedLocation? {#specifiedlocation}

> `optional` **specifiedLocation?**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location specified for this production device.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### specifiedProductionUnit? {#specifiedproductionunit}

> `optional` **specifiedProductionUnit?**: [`IUneceProductionUnit`](IUneceProductionUnit.md)[]

A facility production unit for this specified production device.

#### See

https://vocabulary.uncefact.org/specifiedProductionUnit

***

### subordinateTypeCode? {#subordinatetypecode}

> `optional` **subordinateTypeCode?**: `string`

The code specifying the subordinate type for this production device.

#### See

https://vocabulary.uncefact.org/subordinateTypeCode

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of production device.

#### See

https://vocabulary.uncefact.org/typeCode
