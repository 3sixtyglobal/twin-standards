# Interface: IUneceFileSizeUnitMeasureType

A numeric value determined by measuring a file size.

## See

https://vocabulary.uncefact.org/FileSizeUnitMeasureType

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

> **type**: `"FileSizeUnitMeasureType"`

JSON-LD Type.

***

### FileSizeUnitMeasureTypeValue?

> `optional` **FileSizeUnitMeasureTypeValue**: `string`

The numeric value.

#### See

https://vocabulary.uncefact.org/FileSizeUnitMeasureTypeValue

***

### FileSizeUnitMeasureTypeCode?

> `optional` **FileSizeUnitMeasureTypeCode**: [`UneceFileSizeUnitMeasureCode`](../type-aliases/UneceFileSizeUnitMeasureCode.md)

The unit code.

#### See

https://vocabulary.uncefact.org/FileSizeUnitMeasureTypeCode
