# Interface: IEmission

A calculation of the pollution (including noise, heat, and radiation etc.) discharged into the environment by a
residential, commercial, or industrial facility or by a means of transport, such as a vessel, aircraft or truck.

## See

https://vocabulary.uncefact.org/Emission

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

> **type**: `"Emission"`

JSON-LD Type.

***

### affectedDistanceMeasure?

> `optional` **affectedDistanceMeasure**: [`ILinearUnitMeasureType`](ILinearUnitMeasureType.md)[]

The affected distance over which this calculated emission is measured.

#### See

https://vocabulary.uncefact.org/affectedDistanceMeasure

***

### pollutionMeasure?

> `optional` **pollutionMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the pollution calculated for this emission.

#### See

https://vocabulary.uncefact.org/pollutionMeasure

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of this calculated emission.

#### See

https://vocabulary.uncefact.org/typeCode

***

### weightUnitWeightMeasure?

> `optional` **weightUnitWeightMeasure**: [`IWeightUnitMeasureType`](IWeightUnitMeasureType.md)[]

A weight for which this calculated emission is measured.

#### See

https://vocabulary.uncefact.org/weightUnitWeightMeasure
