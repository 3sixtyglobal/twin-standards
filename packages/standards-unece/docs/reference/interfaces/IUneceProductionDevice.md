# Interface: IUneceProductionDevice

An object, especially a piece of mechanical or electronic equipment, made or adapted in order to perform a production
activity.

## See

https://vocabulary.uncefact.org/ProductionDevice

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

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

> `optional` **applicableParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/applicableParameter

***

### combinedMachine?

> `optional` **combinedMachine**: [`IUneceMachine`](IUneceMachine.md)[]

A production machine combined with this specified production device.

#### See

https://vocabulary.uncefact.org/combinedMachine

***

### combinedProductionDevice?

> `optional` **combinedProductionDevice**: `IUneceProductionDevice`[]

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

> `optional` **inputApplicableBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

An input batch applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/inputApplicableBatch

***

### inputApplicableMaterial?

> `optional` **inputApplicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Input material applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/inputApplicableMaterial

***

### inputApplicableProduct?

> `optional` **inputApplicableProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

An input product applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/inputApplicableProduct

***

### inputCapacityMeasure?

> `optional` **inputCapacityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the input capacity of this specified production device, such as maximum reach or average per month.

#### See

https://vocabulary.uncefact.org/inputCapacityMeasure

***

### outputApplicableBatch?

> `optional` **outputApplicableBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

An output batch applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/outputApplicableBatch

***

### outputApplicableMaterial?

> `optional` **outputApplicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Output material applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/outputApplicableMaterial

***

### outputApplicableProduct?

> `optional` **outputApplicableProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

An output product applicable to this specified production device.

#### See

https://vocabulary.uncefact.org/outputApplicableProduct

***

### outputCapacityMeasure?

> `optional` **outputCapacityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

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

> `optional` **reportingIOTDeviceSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An IOT (Internet of Things) or other scanning device reporting event for this specified production device.

#### See

https://vocabulary.uncefact.org/reportingIOTDeviceSupplyChainEvent

***

### requestedOperationalApplicableParameter?

> `optional` **requestedOperationalApplicableParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

An operational parameter requested for this specified production device.

#### See

https://vocabulary.uncefact.org/requestedOperationalApplicableParameter

***

### specifiedLocation?

> `optional` **specifiedLocation**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location specified for this production device.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### specifiedProductionUnit?

> `optional` **specifiedProductionUnit**: [`IUneceProductionUnit`](IUneceProductionUnit.md)[]

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
