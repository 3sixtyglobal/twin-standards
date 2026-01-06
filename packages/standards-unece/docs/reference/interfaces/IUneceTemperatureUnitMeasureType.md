# Interface: IUneceTemperatureUnitMeasureType

The numeric value determined by temperature measuring.

## See

https://vocabulary.uncefact.org/TemperatureUnitMeasureType

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

> **type**: `"TemperatureUnitMeasureType"`

JSON-LD Type.

***

### TemperatureUnitMeasureTypeValue?

> `optional` **TemperatureUnitMeasureTypeValue**: `string`

The numeric value.

#### See

https://vocabulary.uncefact.org/TemperatureUnitMeasureTypeValue

***

### TemperatureUnitMeasureTypeCode?

> `optional` **TemperatureUnitMeasureTypeCode**: [`UneceTemperatureUnitMeasureCode`](../type-aliases/UneceTemperatureUnitMeasureCode.md)

The unit code.

#### See

https://vocabulary.uncefact.org/TemperatureUnitMeasureTypeCode
