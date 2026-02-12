# Interface: IUneceDurationUnitMeasureType

A numeric value determined by measuring a duration of time.

## See

https://vocabulary.uncefact.org/DurationUnitMeasureType

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

> **type**: `"DurationUnitMeasureType"`

JSON-LD Type.

***

### DurationUnitMeasureTypeValue?

> `optional` **DurationUnitMeasureTypeValue**: `number`

The numeric value.

#### See

https://vocabulary.uncefact.org/DurationUnitMeasureTypeValue

***

### DurationUnitMeasureTypeCode?

> `optional` **DurationUnitMeasureTypeCode**: [`UneceDurationUnitMeasureCode`](../type-aliases/UneceDurationUnitMeasureCode.md)

The unit code.

#### See

https://vocabulary.uncefact.org/DurationUnitMeasureTypeCode
