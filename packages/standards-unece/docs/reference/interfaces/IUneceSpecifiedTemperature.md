# Interface: IUneceSpecifiedTemperature

A specified temperature value or range of values.

## See

https://vocabulary.uncefact.org/SpecifiedTemperature

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

> **type**: `"SpecifiedTemperature"`

JSON-LD Type.

***

### maximumValueMeasure?

> `optional` **maximumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the highest value of a range for this specified temperature, such as a maximum temperature value of
fourteen degrees Celsius.

#### See

https://vocabulary.uncefact.org/maximumValueMeasure

***

### minimumValueMeasure?

> `optional` **minimumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the lowest value of a range for this specified temperature, such as a minimum temperature value of four
degrees Celsius.

#### See

https://vocabulary.uncefact.org/minimumValueMeasure

***

### temperatureUnitValueMeasure?

> `optional` **temperatureUnitValueMeasure**: [`IUneceTemperatureUnitMeasureType`](IUneceTemperatureUnitMeasureType.md)[]

The measure of the value of this specified temperature, such as a temperature value of ten degrees Celsius.

#### See

https://vocabulary.uncefact.org/temperatureUnitValueMeasure
