# Interface: IProductionDevice

An object, especially a piece of mechanical or electronic equipment, made or adapted in order to perform a production
activity.

## See

https://vocabulary.uncefact.org/ProductionDevice

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

> **type**: `"ProductionDevice"`

JSON-LD Type.

***

### applicableParameter?

> `optional` **applicableParameter**: [`ISpecifiedParameter`](ISpecifiedParameter.md)[]

A parameter applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/applicableParameter

***

### combinedMachine?

> `optional` **combinedMachine**: [`IMachine`](IMachine.md)[]

A production machine combined with this specified production device.

#### See

https://vocabulary.uncefact.org/combinedMachine

***

### combinedProductionDevice?

> `optional` **combinedProductionDevice**: `IProductionDevice`[]

A production device combined with this specified production device.

#### See

https://vocabulary.uncefact.org/combinedProductionDevice

***

### functionDescription?

> `optional` **functionDescription**: `string`

A textual description of a function of this specified production device.

#### See

https://vocabulary.uncefact.org/functionDescription

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this specified production device.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputApplicableBatch?

> `optional` **inputApplicableBatch**: [`IProductBatch`](IProductBatch.md)[]

An input batch applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/inputApplicableBatch

***

### inputApplicableMaterial?

> `optional` **inputApplicableMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Input material applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/inputApplicableMaterial

***

### inputApplicableProduct?

> `optional` **inputApplicableProduct**: [`ITradeProduct`](ITradeProduct.md)[]

An input product applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/inputApplicableProduct

***

### inputCapacityMeasure?

> `optional` **inputCapacityMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the input capacity of this specified production device, such as maximum reach or average per month.

#### See

https://vocabulary.uncefact.org/inputCapacityMeasure

***

### outputApplicableBatch?

> `optional` **outputApplicableBatch**: [`IProductBatch`](IProductBatch.md)[]

An output batch applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/outputApplicableBatch

***

### outputApplicableMaterial?

> `optional` **outputApplicableMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Output material applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/outputApplicableMaterial

***

### outputApplicableProduct?

> `optional` **outputApplicableProduct**: [`ITradeProduct`](ITradeProduct.md)[]

An output product applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/outputApplicableProduct

***

### outputCapacityMeasure?

> `optional` **outputCapacityMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the output capacity of this specified production device, such as maximum reach or average per month.

#### See

https://vocabulary.uncefact.org/outputCapacityMeasure

***

### productionDeviceType?

> `optional` **productionDeviceType**: `string`

A type, expressed as text, for this specified production device.

#### See

https://vocabulary.uncefact.org/productionDeviceType

***

### reportingIOTDeviceSupplyChainEvent?

> `optional` **reportingIOTDeviceSupplyChainEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

An IOT (Internet of Things) or other scanning device reporting event for this specified production device.

#### See

https://vocabulary.uncefact.org/reportingIOTDeviceSupplyChainEvent

***

### requestedOperationalApplicableParameter?

> `optional` **requestedOperationalApplicableParameter**: [`ISpecifiedParameter`](ISpecifiedParameter.md)[]

An operational parameter requested for this specified production device.

#### See

https://vocabulary.uncefact.org/requestedOperationalApplicableParameter

***

### specifiedLocation?

> `optional` **specifiedLocation**: [`ILocation`](ILocation.md)[]

A referenced location specified for this production device.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### specifiedProductionUnit?

> `optional` **specifiedProductionUnit**: [`IProductionUnit`](IProductionUnit.md)[]

A facility production unit for this specified production device.

#### See

https://vocabulary.uncefact.org/specifiedProductionUnit

***

### subordinateTypeCode?

> `optional` **subordinateTypeCode**: `string`

The code specifying the subordinate type for this production device.

#### See

https://vocabulary.uncefact.org/subordinateTypeCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of production device.

#### See

https://vocabulary.uncefact.org/typeCode
