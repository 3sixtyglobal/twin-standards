# Interface: IMachine

An apparatus specified to be used to perform an activity to produce something.

## See

https://vocabulary.uncefact.org/Machine

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

> **type**: `"Machine"`

JSON-LD Type.

***

### combinedMachine?

> `optional` **combinedMachine**: `IMachine`[]

A production machine combined with this production machine.

#### See

https://vocabulary.uncefact.org/combinedMachine

***

### combinedProductionDevice?

> `optional` **combinedProductionDevice**: [`IProductionDevice`](IProductionDevice.md)[]

A production device combined with this production machine.

#### See

https://vocabulary.uncefact.org/combinedProductionDevice

***

### functionDescription?

> `optional` **functionDescription**: `string`

A textual description of the function of this production machine.

#### See

https://vocabulary.uncefact.org/functionDescription

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this production machine.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputApplicableBatch?

> `optional` **inputApplicableBatch**: [`IProductBatch`](IProductBatch.md)[]

An input batch applicable to this production machine.

#### See

https://vocabulary.uncefact.org/inputApplicableBatch

***

### inputApplicableMaterial?

> `optional` **inputApplicableMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Input material applicable to this production machine.

#### See

https://vocabulary.uncefact.org/inputApplicableMaterial

***

### inputApplicableProduct?

> `optional` **inputApplicableProduct**: [`ITradeProduct`](ITradeProduct.md)[]

An input product applicable to this production machine.

#### See

https://vocabulary.uncefact.org/inputApplicableProduct

***

### inputCapacityMeasure?

> `optional` **inputCapacityMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the input capacity of this production machine.

#### See

https://vocabulary.uncefact.org/inputCapacityMeasure

***

### machineType?

> `optional` **machineType**: `string`

A type, expressed as text, for this production machine.

#### See

https://vocabulary.uncefact.org/machineType

***

### operationalApplicableParameter?

> `optional` **operationalApplicableParameter**: [`ISpecifiedParameter`](ISpecifiedParameter.md)[]

An operational parameter applicable to this production machine.

#### See

https://vocabulary.uncefact.org/operationalApplicableParameter

***

### outputApplicableBatch?

> `optional` **outputApplicableBatch**: [`IProductBatch`](IProductBatch.md)[]

An output product batch applicable to this production machine.

#### See

https://vocabulary.uncefact.org/outputApplicableBatch

***

### outputApplicableMaterial?

> `optional` **outputApplicableMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Output material applicable to this production machine.

#### See

https://vocabulary.uncefact.org/outputApplicableMaterial

***

### outputApplicableProduct?

> `optional` **outputApplicableProduct**: [`ITradeProduct`](ITradeProduct.md)[]

An output product applicable to this production machine.

#### See

https://vocabulary.uncefact.org/outputApplicableProduct

***

### outputCapacityMeasure?

> `optional` **outputCapacityMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the output capacity of this production machine.

#### See

https://vocabulary.uncefact.org/outputCapacityMeasure

***

### reportingIOTDeviceSupplyChainEvent?

> `optional` **reportingIOTDeviceSupplyChainEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

An IOT (Internet of Things) device or scanning device reporting event for this production machine.

#### See

https://vocabulary.uncefact.org/reportingIOTDeviceSupplyChainEvent

***

### requestedOperationalApplicableParameter?

> `optional` **requestedOperationalApplicableParameter**: [`ISpecifiedParameter`](ISpecifiedParameter.md)[]

A requested operational parameter applicable to this production machine.

#### See

https://vocabulary.uncefact.org/requestedOperationalApplicableParameter

***

### specifiedLocation?

> `optional` **specifiedLocation**: [`ILocation`](ILocation.md)[]

A referenced location specified for this production machine.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### specifiedProductionUnit?

> `optional` **specifiedProductionUnit**: [`IProductionUnit`](IProductionUnit.md)[]

A facility production unit specified for this production machine.

#### See

https://vocabulary.uncefact.org/specifiedProductionUnit

***

### subordinateTypeCode?

> `optional` **subordinateTypeCode**: `string`

The code specifying the subordinate type of this production machine.

#### See

https://vocabulary.uncefact.org/subordinateTypeCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of production machine.

#### See

https://vocabulary.uncefact.org/typeCode
