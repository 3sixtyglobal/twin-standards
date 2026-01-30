# Interface: IUneceGoodsCharacteristic

A distinctive feature of a material contained within physical goods.

## See

https://vocabulary.uncefact.org/GoodsCharacteristic

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

> **type**: `"GoodsCharacteristic"`

JSON-LD Type.

***

### absolutePresenceVolumeMeasure?

> `optional` **absolutePresenceVolumeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The volume measure of the absolute presence of this material goods characteristic.

#### See

https://vocabulary.uncefact.org/absolutePresenceVolumeMeasure

***

### absolutePresenceWeightMeasure?

> `optional` **absolutePresenceWeightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The weight measure of the absolute presence of this material goods characteristic.

#### See

https://vocabulary.uncefact.org/absolutePresenceWeightMeasure

***

### description?

> `optional` **description**: `string`

A textual description of this material goods characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### proportionalConstituentPercent?

> `optional` **proportionalConstituentPercent**: `string`

The percentage presence of the material within the goods for this material goods characteristic.

#### See

https://vocabulary.uncefact.org/proportionalConstituentPercent

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of material goods characteristic.

#### See

https://vocabulary.uncefact.org/typeCode
