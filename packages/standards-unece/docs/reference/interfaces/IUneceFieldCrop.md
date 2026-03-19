# Interface: IUneceFieldCrop

A field with one or more cultivated plants or produce from one or more botanical species or varieties.

## See

https://vocabulary.uncefact.org/FieldCrop

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"FieldCrop"`

JSON-LD Type.

***

### applicableAgriculturalProcess? {#applicableagriculturalprocess}

> `optional` **applicableAgriculturalProcess?**: [`IUneceAgriculturalProcess`](IUneceAgriculturalProcess.md)[]

An agricultural process crop production applicable for this field crop.

#### See

https://vocabulary.uncefact.org/applicableAgriculturalProcess

***

### appliedAgriculturalApplication? {#appliedagriculturalapplication}

> `optional` **appliedAgriculturalApplication?**: [`IUneceAgriculturalApplication`](IUneceAgriculturalApplication.md)[]

An agricultural application applied to this field crop.

#### See

https://vocabulary.uncefact.org/appliedAgriculturalApplication

***

### className? {#classname}

> `optional` **className?**: `string`

The class name, expressed as a text, for this field crop.

#### See

https://vocabulary.uncefact.org/className

***

### classificationCode? {#classificationcode}

> `optional` **classificationCode?**: `string`

A code specifying a classification for this field crop.

#### See

https://vocabulary.uncefact.org/classificationCode

***

### cultivationContainerCode? {#cultivationcontainercode}

> `optional` **cultivationContainerCode?**: `string`

The code specifying the type of cultivation container, such as a pot or an iron cabinet, for this field crop.

#### See

https://vocabulary.uncefact.org/cultivationContainerCode

***

### cultivationCoverageCode? {#cultivationcoveragecode}

> `optional` **cultivationCoverageCode?**: `string`

A code specifying a type of cultivation coverage, such as glass, for this field crop.

#### See

https://vocabulary.uncefact.org/cultivationCoverageCode

***

### cultivationMediumCode? {#cultivationmediumcode}

> `optional` **cultivationMediumCode?**: `string`

The code specifying the type of cultivation medium, such as substrate, for this field crop.

#### See

https://vocabulary.uncefact.org/cultivationMediumCode

***

### cultivationTypeCode? {#cultivationtypecode}

> `optional` **cultivationTypeCode?**: `string`

The code specifying the type of cultivation for this field crop.

#### See

https://vocabulary.uncefact.org/cultivationTypeCode

***

### description? {#description}

> `optional` **description?**: `string`

The textual description for this field crop.

#### See

https://vocabulary.uncefact.org/description

***

### grownPlot {#grownplot}

> **grownPlot**: [`IUnecePlot`](IUnecePlot.md)

The plot where this field crop is grown.

#### See

https://vocabulary.uncefact.org/grownPlot

***

### grownPreviousCrop? {#grownpreviouscrop}

> `optional` **grownPreviousCrop?**: `IUneceFieldCrop`[]

A field crop grown previous to this field crop.

#### See

https://vocabulary.uncefact.org/grownPreviousCrop

***

### harvestDateTime? {#harvestdatetime}

> `optional` **harvestDateTime?**: `string`

The date, time, date time, or other date time value for the harvest of this field crop.

#### See

https://vocabulary.uncefact.org/harvestDateTime

***

### harvestedProduce? {#harvestedproduce}

> `optional` **harvestedProduce?**: [`IUneceProduce`](IUneceProduce.md)[]

Produce harvested from this field crop.

#### See

https://vocabulary.uncefact.org/harvestedProduce

***

### plantingReasonCode? {#plantingreasoncode}

> `optional` **plantingReasonCode?**: `string`

A code specifying a reason for planting this field crop.

#### See

https://vocabulary.uncefact.org/plantingReasonCode

***

### productionEnvironmentCode? {#productionenvironmentcode}

> `optional` **productionEnvironmentCode?**: `string`

The code specifying the production environment for this field crop.

#### See

https://vocabulary.uncefact.org/productionEnvironmentCode

***

### productionPeriodCode? {#productionperiodcode}

> `optional` **productionPeriodCode?**: `string`

The code specifying the production period for this field crop.

#### See

https://vocabulary.uncefact.org/productionPeriodCode

***

### propagationMaterialIndicator? {#propagationmaterialindicator}

> `optional` **propagationMaterialIndicator?**: `boolean`

The indication of whether or not a field crop is to be used as propagation material.

#### See

https://vocabulary.uncefact.org/propagationMaterialIndicator

***

### purposeCode? {#purposecode}

> `optional` **purposeCode?**: `string`

A code specifying a purpose for this field crop.

#### See

https://vocabulary.uncefact.org/purposeCode

***

### sowingPeriodCode? {#sowingperiodcode}

> `optional` **sowingPeriodCode?**: `string`

The code specifying the sowing period for this field crop, such as spring or winter.

#### See

https://vocabulary.uncefact.org/sowingPeriodCode

***

### specifiedAgriculturalCharacteristic? {#specifiedagriculturalcharacteristic}

> `optional` **specifiedAgriculturalCharacteristic?**: [`IUneceAgriculturalCharacteristic`](IUneceAgriculturalCharacteristic.md)[]

An agricultural characteristic specified for this field crop.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic

***

### specifiedCropMixtureConstituent {#specifiedcropmixtureconstituent}

> **specifiedCropMixtureConstituent**: [`IUneceCropMixtureConstituent`](IUneceCropMixtureConstituent.md)[]

A field crop mixture constituent specified for this field crop.

#### See

https://vocabulary.uncefact.org/specifiedCropMixtureConstituent
