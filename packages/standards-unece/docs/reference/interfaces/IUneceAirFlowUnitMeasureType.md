# Interface: IUneceAirFlowUnitMeasureType

The numeric value determined by a measurement of air flow.

## See

https://vocabulary.uncefact.org/AirFlowUnitMeasureType

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

> **type**: `"AirFlowUnitMeasureType"`

JSON-LD Type.

***

### AirFlowUnitMeasureTypeValue?

> `optional` **AirFlowUnitMeasureTypeValue**: `number`

The numeric value.

#### See

https://vocabulary.uncefact.org/AirFlowUnitMeasureTypeValue

***

### AirFlowUnitMeasureTypeCode?

> `optional` **AirFlowUnitMeasureTypeCode**: [`UneceAirFlowUnitMeasureCode`](../type-aliases/UneceAirFlowUnitMeasureCode.md)

The unit code.

#### See

https://vocabulary.uncefact.org/AirFlowUnitMeasureTypeCode
