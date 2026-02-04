# Interface: IUneceFieldCrop

A field with one or more cultivated plants or produce from one or more botanical species or varieties.

## See

https://vocabulary.uncefact.org/FieldCrop

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

> **type**: `"FieldCrop"`

JSON-LD Type.

***

### applicableAgriculturalProcess?

> `optional` **applicableAgriculturalProcess**: [`IUneceAgriculturalProcess`](IUneceAgriculturalProcess.md)[]

An agricultural process crop production applicable for this field crop.

#### See

https://vocabulary.uncefact.org/applicableAgriculturalProcess

***

### appliedAgriculturalApplication?

> `optional` **appliedAgriculturalApplication**: [`IUneceAgriculturalApplication`](IUneceAgriculturalApplication.md)[]

An agricultural application applied to this field crop.

#### See

https://vocabulary.uncefact.org/appliedAgriculturalApplication

***

### className?

> `optional` **className**: `string`

The class name, expressed as a text, for this field crop.

#### See

https://vocabulary.uncefact.org/className

***

### classificationCode?

> `optional` **classificationCode**: `string`

A code specifying a classification for this field crop.

#### See

https://vocabulary.uncefact.org/classificationCode

***

### cultivationContainerCode?

> `optional` **cultivationContainerCode**: `string`

The code specifying the type of cultivation container, such as a pot or an iron cabinet, for this field crop.

#### See

https://vocabulary.uncefact.org/cultivationContainerCode

***

### cultivationCoverageCode?

> `optional` **cultivationCoverageCode**: `string`

A code specifying a type of cultivation coverage, such as glass, for this field crop.

#### See

https://vocabulary.uncefact.org/cultivationCoverageCode

***

### cultivationMediumCode?

> `optional` **cultivationMediumCode**: `string`

The code specifying the type of cultivation medium, such as substrate, for this field crop.

#### See

https://vocabulary.uncefact.org/cultivationMediumCode

***

### cultivationTypeCode?

> `optional` **cultivationTypeCode**: `string`

The code specifying the type of cultivation for this field crop.

#### See

https://vocabulary.uncefact.org/cultivationTypeCode

***

### description?

> `optional` **description**: `string`

The textual description for this field crop.

#### See

https://vocabulary.uncefact.org/description

***

### grownPlot

> **grownPlot**: [`IUnecePlot`](IUnecePlot.md)

The plot where this field crop is grown.

#### See

https://vocabulary.uncefact.org/grownPlot

***

### grownPreviousCrop?

> `optional` **grownPreviousCrop**: `IUneceFieldCrop`[]

A field crop grown previous to this field crop.

#### See

https://vocabulary.uncefact.org/grownPreviousCrop

***

### harvestDateTime?

> `optional` **harvestDateTime**: `string`

The date, time, date time, or other date time value for the harvest of this field crop.

#### See

https://vocabulary.uncefact.org/harvestDateTime

***

### harvestedProduce?

> `optional` **harvestedProduce**: [`IUneceProduce`](IUneceProduce.md)[]

Produce harvested from this field crop.

#### See

https://vocabulary.uncefact.org/harvestedProduce

***

### plantingReasonCode?

> `optional` **plantingReasonCode**: `string`

A code specifying a reason for planting this field crop.

#### See

https://vocabulary.uncefact.org/plantingReasonCode

***

### productionEnvironmentCode?

> `optional` **productionEnvironmentCode**: `string`

The code specifying the production environment for this field crop.

#### See

https://vocabulary.uncefact.org/productionEnvironmentCode

***

### productionPeriodCode?

> `optional` **productionPeriodCode**: `string`

The code specifying the production period for this field crop.

#### See

https://vocabulary.uncefact.org/productionPeriodCode

***

### propagationMaterialIndicator?

> `optional` **propagationMaterialIndicator**: `boolean`

The indication of whether or not a field crop is to be used as propagation material.

#### See

https://vocabulary.uncefact.org/propagationMaterialIndicator

***

### purposeCode?

> `optional` **purposeCode**: `string`

A code specifying a purpose for this field crop.

#### See

https://vocabulary.uncefact.org/purposeCode

***

### sowingPeriodCode?

> `optional` **sowingPeriodCode**: `string`

The code specifying the sowing period for this field crop, such as spring or winter.

#### See

https://vocabulary.uncefact.org/sowingPeriodCode

***

### specifiedAgriculturalCharacteristic?

> `optional` **specifiedAgriculturalCharacteristic**: [`IUneceAgriculturalCharacteristic`](IUneceAgriculturalCharacteristic.md)[]

An agricultural characteristic specified for this field crop.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic

***

### specifiedCropMixtureConstituent

> **specifiedCropMixtureConstituent**: [`IUneceCropMixtureConstituent`](IUneceCropMixtureConstituent.md)[]

A field crop mixture constituent specified for this field crop.

#### See

https://vocabulary.uncefact.org/specifiedCropMixtureConstituent
