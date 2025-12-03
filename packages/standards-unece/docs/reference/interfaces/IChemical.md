# Interface: IChemical

Any clearly defined substance having a defined molecular composition.

## See

https://vocabulary.uncefact.org/Chemical

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

> **type**: `"Chemical"`

JSON-LD Type.

***

### applicableHazardousMaterial?

> `optional` **applicableHazardousMaterial**: [`IHazardousMaterial`](IHazardousMaterial.md)[]

An applicable toxicological hazardous material for this distinct chemical.

#### See

https://vocabulary.uncefact.org/applicableHazardousMaterial

***

### applicableProductCharacteristic?

> `optional` **applicableProductCharacteristic**: [`IProductCharacteristic`](IProductCharacteristic.md)[]

A product characteristic applicable to this distinct chemical.

#### See

https://vocabulary.uncefact.org/applicableProductCharacteristic

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this distinct chemical.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### commonName?

> `optional` **commonName**: `string`

A common name, expressed as text, for this distinct chemical.

#### See

https://vocabulary.uncefact.org/commonName

***

### familyName?

> `optional` **familyName**: `string`

The family name expressed as text for this distinct chemical.

#### See

https://vocabulary.uncefact.org/familyName

***

### formulaDescription?

> `optional` **formulaDescription**: `string`

The textual description of the formula for this distinct chemical.

#### See

https://vocabulary.uncefact.org/formulaDescription

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this distinct chemical.

#### See

https://vocabulary.uncefact.org/identifier

***

### massMeasure?

> `optional` **massMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the mass of this distinct chemical.

#### See

https://vocabulary.uncefact.org/massMeasure

***

### massRatioMeasure?

> `optional` **massRatioMeasure**: [`IMeasureType`](IMeasureType.md)[]

A mass measure of this distinct chemical expressed as a ratio to another mass, such as the total mass.

#### See

https://vocabulary.uncefact.org/massRatioMeasure

***

### molecularWeightMeasure?

> `optional` **molecularWeightMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure of the molecular weight (in grams) for this distinct chemical.

#### See

https://vocabulary.uncefact.org/molecularWeightMeasure

***

### presenceMeasurement?

> `optional` **presenceMeasurement**: [`IIngredientRangeMeasurement`](IIngredientRangeMeasurement.md)[]

A measurement of the range of the presence of an ingredient in this distinct chemical.

#### See

https://vocabulary.uncefact.org/presenceMeasurement

***

### presencePercent?

> `optional` **presencePercent**: `string`

The percentage of the presence of distinct chemical.

#### See

https://vocabulary.uncefact.org/presencePercent

***

### scientificName?

> `optional` **scientificName**: `string`

The scientific name, expressed as text, for this distinct chemical.

#### See

https://vocabulary.uncefact.org/scientificName

***

### specifiedProductCertificate?

> `optional` **specifiedProductCertificate**: [`IProductCertificate`](IProductCertificate.md)[]

A product certificate specified for this distinct chemical.

#### See

https://vocabulary.uncefact.org/specifiedProductCertificate

***

### synonymName?

> `optional` **synonymName**: `string`

A synonym name, expressed as text, for this distinct chemical.

#### See

https://vocabulary.uncefact.org/synonymName

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of distinct chemical.

#### See

https://vocabulary.uncefact.org/typeCode

***

### volumeMeasure?

> `optional` **volumeMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the volume of this distinct chemical.

#### See

https://vocabulary.uncefact.org/volumeMeasure

***

### volumeRatioMeasure?

> `optional` **volumeRatioMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the volume of this distinct chemical expressed as a ratio to another volume, such as the total volume.

#### See

https://vocabulary.uncefact.org/volumeRatioMeasure

***

### weightMeasure?

> `optional` **weightMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the weight of this distinct chemical.

#### See

https://vocabulary.uncefact.org/weightMeasure
