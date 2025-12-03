# Interface: IUnitMeasureType

A numeric value determined by measuring an object along with the specified unit of measure.

## See

https://vocabulary.uncefact.org/UnitMeasureType

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

> **type**: `"UnitMeasureType"`

JSON-LD Type.

***

### UnitMeasureTypeValue?

> `optional` **UnitMeasureTypeValue**: `string`

The numeric value.

#### See

https://vocabulary.uncefact.org/UnitMeasureTypeValue

***

### UnitMeasureTypeCode?

> `optional` **UnitMeasureTypeCode**: [`UnitMeasureCode`](../type-aliases/UnitMeasureCode.md)

The unit code.

#### See

https://vocabulary.uncefact.org/UnitMeasureTypeCode
