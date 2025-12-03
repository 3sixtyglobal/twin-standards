# Interface: IMeasureType

Missing description.

## See

https://vocabulary.uncefact.org/MeasureType

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

> **type**: `"MeasureType"`

JSON-LD Type.

***

### MeasureTypeValue?

> `optional` **MeasureTypeValue**: `string`

The numeric value.

#### See

https://vocabulary.uncefact.org/MeasureTypeValue

***

### MeasureTypeCode?

> `optional` **MeasureTypeCode**: [`IMeasureCode`](IMeasureCode.md)

The unit code.

#### See

https://vocabulary.uncefact.org/MeasureTypeCode
