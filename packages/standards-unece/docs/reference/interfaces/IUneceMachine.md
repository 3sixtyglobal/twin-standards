# Interface: IUneceMachine

An apparatus specified to be used to perform an activity to produce something.

## See

https://vocabulary.uncefact.org/Machine

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Machine"`

JSON-LD Type.

***

### combinedMachine? {#combinedmachine}

> `optional` **combinedMachine**: `IUneceMachine`[]

A production machine combined with this production machine.

#### See

https://vocabulary.uncefact.org/combinedMachine

***

### combinedProductionDevice? {#combinedproductiondevice}

> `optional` **combinedProductionDevice**: [`IUneceProductionDevice`](IUneceProductionDevice.md)[]

A production device combined with this production machine.

#### See

https://vocabulary.uncefact.org/combinedProductionDevice

***

### functionDescription? {#functiondescription}

> `optional` **functionDescription**: `string`

A textual description of the function of this production machine.

#### See

https://vocabulary.uncefact.org/functionDescription

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this production machine.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputApplicableBatch? {#inputapplicablebatch}

> `optional` **inputApplicableBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

An input batch applicable to this production machine.

#### See

https://vocabulary.uncefact.org/inputApplicableBatch

***

### inputApplicableMaterial? {#inputapplicablematerial}

> `optional` **inputApplicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Input material applicable to this production machine.

#### See

https://vocabulary.uncefact.org/inputApplicableMaterial

***

### inputApplicableProduct? {#inputapplicableproduct}

> `optional` **inputApplicableProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

An input product applicable to this production machine.

#### See

https://vocabulary.uncefact.org/inputApplicableProduct

***

### inputCapacityMeasure? {#inputcapacitymeasure}

> `optional` **inputCapacityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the input capacity of this production machine.

#### See

https://vocabulary.uncefact.org/inputCapacityMeasure

***

### machineType? {#machinetype}

> `optional` **machineType**: `string`

A type, expressed as text, for this production machine.

#### See

https://vocabulary.uncefact.org/machineType

***

### operationalApplicableParameter? {#operationalapplicableparameter}

> `optional` **operationalApplicableParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

An operational parameter applicable to this production machine.

#### See

https://vocabulary.uncefact.org/operationalApplicableParameter

***

### outputApplicableBatch? {#outputapplicablebatch}

> `optional` **outputApplicableBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

An output product batch applicable to this production machine.

#### See

https://vocabulary.uncefact.org/outputApplicableBatch

***

### outputApplicableMaterial? {#outputapplicablematerial}

> `optional` **outputApplicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Output material applicable to this production machine.

#### See

https://vocabulary.uncefact.org/outputApplicableMaterial

***

### outputApplicableProduct? {#outputapplicableproduct}

> `optional` **outputApplicableProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

An output product applicable to this production machine.

#### See

https://vocabulary.uncefact.org/outputApplicableProduct

***

### outputCapacityMeasure? {#outputcapacitymeasure}

> `optional` **outputCapacityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the output capacity of this production machine.

#### See

https://vocabulary.uncefact.org/outputCapacityMeasure

***

### reportingIOTDeviceSupplyChainEvent? {#reportingiotdevicesupplychainevent}

> `optional` **reportingIOTDeviceSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An IOT (Internet of Things) device or scanning device reporting event for this production machine.

#### See

https://vocabulary.uncefact.org/reportingIOTDeviceSupplyChainEvent

***

### requestedOperationalApplicableParameter? {#requestedoperationalapplicableparameter}

> `optional` **requestedOperationalApplicableParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A requested operational parameter applicable to this production machine.

#### See

https://vocabulary.uncefact.org/requestedOperationalApplicableParameter

***

### specifiedLocation? {#specifiedlocation}

> `optional` **specifiedLocation**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location specified for this production machine.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### specifiedProductionUnit? {#specifiedproductionunit}

> `optional` **specifiedProductionUnit**: [`IUneceProductionUnit`](IUneceProductionUnit.md)[]

A facility production unit specified for this production machine.

#### See

https://vocabulary.uncefact.org/specifiedProductionUnit

***

### subordinateTypeCode? {#subordinatetypecode}

> `optional` **subordinateTypeCode**: `string`

The code specifying the subordinate type of this production machine.

#### See

https://vocabulary.uncefact.org/subordinateTypeCode

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of production machine.

#### See

https://vocabulary.uncefact.org/typeCode
