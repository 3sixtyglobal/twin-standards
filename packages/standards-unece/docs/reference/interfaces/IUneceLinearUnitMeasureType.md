# Interface: IUneceLinearUnitMeasureType

The numeric value determined by linear measuring.

## See

https://vocabulary.uncefact.org/LinearUnitMeasureType

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

> **type**: `"LinearUnitMeasureType"`

JSON-LD Type.

***

### LinearUnitMeasureTypeValue?

> `optional` **LinearUnitMeasureTypeValue**: `string`

The numeric value.

#### See

https://vocabulary.uncefact.org/LinearUnitMeasureTypeValue

***

### LinearUnitMeasureTypeCode?

> `optional` **LinearUnitMeasureTypeCode**: [`UneceLinearUnitMeasureCode`](../type-aliases/UneceLinearUnitMeasureCode.md)

The unit code.

#### See

https://vocabulary.uncefact.org/LinearUnitMeasureTypeCode
