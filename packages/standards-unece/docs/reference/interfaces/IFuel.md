# Interface: IFuel

Any specified material that is burnt or altered in order to obtain energy.

## See

https://vocabulary.uncefact.org/Fuel

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

> **type**: `"Fuel"`

JSON-LD Type.

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of specified fuel.

#### See

https://vocabulary.uncefact.org/typeCode

***

### volumeUnitVolumeMeasure?

> `optional` **volumeUnitVolumeMeasure**: [`IVolumeUnitMeasureType`](IVolumeUnitMeasureType.md)[]

A measure of a weight (mass) for this specified fuel.

#### See

https://vocabulary.uncefact.org/volumeUnitVolumeMeasure

***

### weightUnitWeightMeasure?

> `optional` **weightUnitWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

A measure of a volume for this specified fuel.

#### See

https://vocabulary.uncefact.org/weightUnitWeightMeasure

***

### workingPressureMeasure?

> `optional` **workingPressureMeasure**: [`IUnitMeasureType`](IUnitMeasureType.md)[]

A working pressure measure for this specified fuel.

#### See

https://vocabulary.uncefact.org/workingPressureMeasure
