# Interface: IUneceMachine

An apparatus specified to be used to perform an activity to produce something.

## See

https://vocabulary.uncefact.org/Machine

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

> **type**: `"Machine"`

JSON-LD Type.

***

### combinedMachine?

> `optional` **combinedMachine**: `IUneceMachine`

A production machine combined with this production machine.

#### See

https://vocabulary.uncefact.org/combinedMachine

***

### combinedProductionDevice?

> `optional` **combinedProductionDevice**: [`IUneceProductionDevice`](IUneceProductionDevice.md)

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

> `optional` **inputApplicableBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)

An input batch applicable to this production machine.

#### See

https://vocabulary.uncefact.org/inputApplicableBatch

***

### inputApplicableMaterial?

> `optional` **inputApplicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)

Input material applicable to this production machine.

#### See

https://vocabulary.uncefact.org/inputApplicableMaterial

***

### inputApplicableProduct?

> `optional` **inputApplicableProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)

An input product applicable to this production machine.

#### See

https://vocabulary.uncefact.org/inputApplicableProduct

***

### inputCapacityMeasure?

> `optional` **inputCapacityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

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

> `optional` **operationalApplicableParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)

An operational parameter applicable to this production machine.

#### See

https://vocabulary.uncefact.org/operationalApplicableParameter

***

### outputApplicableBatch?

> `optional` **outputApplicableBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)

An output product batch applicable to this production machine.

#### See

https://vocabulary.uncefact.org/outputApplicableBatch

***

### outputApplicableMaterial?

> `optional` **outputApplicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)

Output material applicable to this production machine.

#### See

https://vocabulary.uncefact.org/outputApplicableMaterial

***

### outputApplicableProduct?

> `optional` **outputApplicableProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)

An output product applicable to this production machine.

#### See

https://vocabulary.uncefact.org/outputApplicableProduct

***

### outputCapacityMeasure?

> `optional` **outputCapacityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

A measure of the output capacity of this production machine.

#### See

https://vocabulary.uncefact.org/outputCapacityMeasure

***

### reportingIOTDeviceSupplyChainEvent?

> `optional` **reportingIOTDeviceSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)

An IOT (Internet of Things) device or scanning device reporting event for this production machine.

#### See

https://vocabulary.uncefact.org/reportingIOTDeviceSupplyChainEvent

***

### requestedOperationalApplicableParameter?

> `optional` **requestedOperationalApplicableParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)

A requested operational parameter applicable to this production machine.

#### See

https://vocabulary.uncefact.org/requestedOperationalApplicableParameter

***

### specifiedLocation?

> `optional` **specifiedLocation**: [`IUneceLocation`](IUneceLocation.md)

A referenced location specified for this production machine.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### specifiedProductionUnit?

> `optional` **specifiedProductionUnit**: [`IUneceProductionUnit`](IUneceProductionUnit.md)

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
