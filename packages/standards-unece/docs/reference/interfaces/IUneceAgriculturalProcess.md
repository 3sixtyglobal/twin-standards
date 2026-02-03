# Interface: IUneceAgriculturalProcess

A practice of cultivating land, raising crops, or treatment of the agricultural produce.

## See

https://vocabulary.uncefact.org/AgriculturalProcess

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

> **type**: `"AgriculturalProcess"`

JSON-LD Type.

***

### actualEndDateTime?

> `optional` **actualEndDateTime**: `string`

The date, time, date time or other date time value of the actual end for the crop production in this agricultural
process.

#### See

https://vocabulary.uncefact.org/actualEndDateTime

***

### actualStartDateTime?

> `optional` **actualStartDateTime**: `string`

The date, time, date time or other date time value for the actual start of the crop production in this agricultural
process.

#### See

https://vocabulary.uncefact.org/actualStartDateTime

***

### appliedAgriculturalApplication?

> `optional` **appliedAgriculturalApplication**: [`IUneceAgriculturalApplication`](IUneceAgriculturalApplication.md)

An agricultural application applied to a crop production agricultural process.

#### See

https://vocabulary.uncefact.org/appliedAgriculturalApplication

***

### description?

> `optional` **description**: `string`

The textual description of the agricultural process for this crop production.

#### See

https://vocabulary.uncefact.org/description

***

### earliestStartDateTime?

> `optional` **earliestStartDateTime**: `string`

The date, time, date time or other date time value for the earliest start of the crop production in this agricultural
process.

#### See

https://vocabulary.uncefact.org/earliestStartDateTime

***

### harvestedBatch?

> `optional` **harvestedBatch**: [`IUneceCropProduceBatch`](IUneceCropProduceBatch.md)

A crop produce batch harvested in the crop production for this agricultural process.

#### See

https://vocabulary.uncefact.org/harvestedBatch

***

### latestEndDateTime?

> `optional` **latestEndDateTime**: `string`

The date, time, date time or other date time value of the latest end for the crop production in this agricultural
process.

#### See

https://vocabulary.uncefact.org/latestEndDateTime

***

### productionWasteInstructions?

> `optional` **productionWasteInstructions**: [`IUneceDisposalInstructions`](IUneceDisposalInstructions.md)

Disposal instructions related to production waste for this agricultural crop production process.

#### See

https://vocabulary.uncefact.org/productionWasteInstructions

***

### reportedProductionWasteMaterial?

> `optional` **reportedProductionWasteMaterial**: [`IUneceProductionWasteMaterial`](IUneceProductionWasteMaterial.md)

Production waste material reported for this agricultural crop production process.

#### See

https://vocabulary.uncefact.org/reportedProductionWasteMaterial

***

### specifiedFieldCrop?

> `optional` **specifiedFieldCrop**: [`IUneceFieldCrop`](IUneceFieldCrop.md)

A field crop specified for this crop production agricultural process.

#### See

https://vocabulary.uncefact.org/specifiedFieldCrop

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of the agricultural process for this crop production.

#### See

https://vocabulary.uncefact.org/statusCode

***

### subordinateTypeCode?

> `optional` **subordinateTypeCode**: `string`

The code specifying the subordinate type of the agricultural process for this crop production.

#### See

https://vocabulary.uncefact.org/subordinateTypeCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of agricultural process for this crop production.

#### See

https://vocabulary.uncefact.org/typeCode
