# Interface: IUneceHandlingInstructions

Handling information of an instructive nature.

## See

https://vocabulary.uncefact.org/HandlingInstructions

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

> **type**: `"HandlingInstructions"`

JSON-LD Type.

***

### applicableTransportSettingTemperature?

> `optional` **applicableTransportSettingTemperature**: [`IUneceTransportSettingTemperature`](IUneceTransportSettingTemperature.md)[]

A transport related temperature setting applicable to these handling instructions.

#### See

https://vocabulary.uncefact.org/applicableTransportSettingTemperature

***

### deliveryApplicableTemperature?

> `optional` **deliveryApplicableTemperature**: [`IUneceInstructedTemperature`](IUneceInstructedTemperature.md)[]

The instructed temperature for delivery applicable to these handling instructions.

#### See

https://vocabulary.uncefact.org/deliveryApplicableTemperature

***

### description?

> `optional` **description**: `string`

A textual description of these handling instructions.

#### See

https://vocabulary.uncefact.org/description

***

### exclusiveUsageIndicator?

> `optional` **exclusiveUsageIndicator**: `boolean`

The indication of whether or not an exclusive usage exists in these handling instructions.

#### See

https://vocabulary.uncefact.org/exclusiveUsageIndicator

***

### handling?

> `optional` **handling**: `string`

A textual expression of these handling instructions.

#### See

https://vocabulary.uncefact.org/handling

***

### handlingCode?

> `optional` **handlingCode**: `string`

A code specifying these handling instructions.

#### See

https://vocabulary.uncefact.org/handlingCode

***

### handlingInstructionsDescriptionCode?

> `optional` **handlingInstructionsDescriptionCode**: `string`

A code specifying a description of these handling instructions.

#### See

https://vocabulary.uncefact.org/handlingInstructionsDescriptionCode

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this handling instructions.

#### See

https://vocabulary.uncefact.org/identifier

***

### instructionsType?

> `optional` **instructionsType**: `string`

A type, expressed as text, for these handling instructions.

#### See

https://vocabulary.uncefact.org/instructionsType

***

### itemName?

> `optional` **itemName**: `string`

A name, expressed as text, of an item included in these handling instructions.

#### See

https://vocabulary.uncefact.org/itemName

***

### marketDeliveryApplicableTemperature?

> `optional` **marketDeliveryApplicableTemperature**: [`IUneceInstructedTemperature`](IUneceInstructedTemperature.md)[]

The instructed temperature for market delivery applicable to these handling instructions.

#### See

https://vocabulary.uncefact.org/marketDeliveryApplicableTemperature

***

### maximumStackabilityApplicableQuantity?

> `optional` **maximumStackabilityApplicableQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The maximum number of units which can be stacked on top of each other according to these handling instructions.

#### See

https://vocabulary.uncefact.org/maximumStackabilityApplicableQuantity

***

### maximumStackabilityWeightApplicableMeasure?

> `optional` **maximumStackabilityWeightApplicableMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

The maximum stackability weight applicable to these handling instructions.

#### See

https://vocabulary.uncefact.org/maximumStackabilityWeightApplicableMeasure

***

### maximumStorageHumidityApplicableMeasure?

> `optional` **maximumStorageHumidityApplicableMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the maximum storage humidity applicable to these handling instructions.

#### See

https://vocabulary.uncefact.org/maximumStorageHumidityApplicableMeasure

***

### minimumStorageHumidityApplicableMeasure?

> `optional` **minimumStorageHumidityApplicableMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the minimum storage humidity applicable to these handling instructions.

#### See

https://vocabulary.uncefact.org/minimumStorageHumidityApplicableMeasure

***

### procedure?

> `optional` **procedure**: `string`

A procedure, expressed as text, for these handling instructions.

#### See

https://vocabulary.uncefact.org/procedure

***

### requirementIndicator?

> `optional` **requirementIndicator**: `boolean`

An indication of whether or not a requirement exists for these handling instructions.

#### See

https://vocabulary.uncefact.org/requirementIndicator

***

### storageApplicableTemperature?

> `optional` **storageApplicableTemperature**: [`IUneceInstructedTemperature`](IUneceInstructedTemperature.md)[]

The instructed temperature for storage applicable to these handling instructions.

#### See

https://vocabulary.uncefact.org/storageApplicableTemperature
