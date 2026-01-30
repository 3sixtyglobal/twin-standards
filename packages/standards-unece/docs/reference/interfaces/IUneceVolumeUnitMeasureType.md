# Interface: IUneceVolumeUnitMeasureType

The numeric value determined by volume measuring.

## See

https://vocabulary.uncefact.org/VolumeUnitMeasureType

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

> **type**: `"VolumeUnitMeasureType"`

JSON-LD Type.

***

### VolumeUnitMeasureTypeValue?

> `optional` **VolumeUnitMeasureTypeValue**: `string`

The numeric value.

#### See

https://vocabulary.uncefact.org/VolumeUnitMeasureTypeValue

***

### VolumeUnitMeasureTypeCode?

> `optional` **VolumeUnitMeasureTypeCode**: [`UneceVolumeUnitMeasureCode`](../type-aliases/UneceVolumeUnitMeasureCode.md)

The unit code.

#### See

https://vocabulary.uncefact.org/VolumeUnitMeasureTypeCode
