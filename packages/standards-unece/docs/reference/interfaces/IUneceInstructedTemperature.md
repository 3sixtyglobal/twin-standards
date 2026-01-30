# Interface: IUneceInstructedTemperature

Temperature settings instructed for storage or movement of goods.

## See

https://vocabulary.uncefact.org/InstructedTemperature

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

> **type**: `"InstructedTemperature"`

JSON-LD Type.

***

### controlCode?

> `optional` **controlCode**: `string`

The code specifying the control of this instructed temperature, such as normal or chilled.

#### See

https://vocabulary.uncefact.org/controlCode

***

### maximumValueMeasure?

> `optional` **maximumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the maximum value of this instructed temperature.

#### See

https://vocabulary.uncefact.org/maximumValueMeasure

***

### minimumValueMeasure?

> `optional` **minimumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the minimum value of this instructed temperature.

#### See

https://vocabulary.uncefact.org/minimumValueMeasure
