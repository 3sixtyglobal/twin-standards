# Interface: IUneceUnitMeasureType

A numeric value determined by measuring an object along with the specified unit of measure.

## See

https://vocabulary.uncefact.org/UnitMeasureType

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

> **type**: `"UnitMeasureType"`

JSON-LD Type.

***

### UnitMeasureTypeValue?

> `optional` **UnitMeasureTypeValue**: `number`

The numeric value.

#### See

https://vocabulary.uncefact.org/UnitMeasureTypeValue

***

### UnitMeasureTypeCode?

> `optional` **UnitMeasureTypeCode**: [`UneceUnitMeasureCode`](../type-aliases/UneceUnitMeasureCode.md)

The unit code.

#### See

https://vocabulary.uncefact.org/UnitMeasureTypeCode
