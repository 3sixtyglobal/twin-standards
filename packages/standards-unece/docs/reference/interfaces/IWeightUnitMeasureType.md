# Interface: IWeightUnitMeasureType

The numeric value determined by weight measuring.

## See

https://vocabulary.uncefact.org/WeightUnitMeasureType

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

> **type**: `"WeightUnitMeasureType"`

JSON-LD Type.

***

### WeightUnitMeasureTypeValue?

> `optional` **WeightUnitMeasureTypeValue**: `string`

The numeric value.

#### See

https://vocabulary.uncefact.org/WeightUnitMeasureTypeValue

***

### WeightUnitMeasureTypeCode?

> `optional` **WeightUnitMeasureTypeCode**: [`WeightUnitMeasureCode`](../type-aliases/WeightUnitMeasureCode.md)

The unit code.

#### See

https://vocabulary.uncefact.org/WeightUnitMeasureTypeCode
