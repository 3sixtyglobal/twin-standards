# Interface: IUneceChemical

Any clearly defined substance having a defined molecular composition.

## See

https://vocabulary.uncefact.org/Chemical

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Chemical"`

JSON-LD Type.

***

### applicableHazardousMaterial? {#applicablehazardousmaterial}

> `optional` **applicableHazardousMaterial**: [`IUneceHazardousMaterial`](IUneceHazardousMaterial.md)

An applicable toxicological hazardous material for this distinct chemical.

#### See

https://vocabulary.uncefact.org/applicableHazardousMaterial

***

### applicableProductCharacteristic? {#applicableproductcharacteristic}

> `optional` **applicableProductCharacteristic**: [`IUneceProductCharacteristic`](IUneceProductCharacteristic.md)[]

A product characteristic applicable to this distinct chemical.

#### See

https://vocabulary.uncefact.org/applicableProductCharacteristic

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this distinct chemical.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### commonName? {#commonname}

> `optional` **commonName**: `string`

A common name, expressed as text, for this distinct chemical.

#### See

https://vocabulary.uncefact.org/commonName

***

### familyName? {#familyname}

> `optional` **familyName**: `string`

The family name expressed as text for this distinct chemical.

#### See

https://vocabulary.uncefact.org/familyName

***

### formulaDescription? {#formuladescription}

> `optional` **formulaDescription**: `string`

The textual description of the formula for this distinct chemical.

#### See

https://vocabulary.uncefact.org/formulaDescription

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this distinct chemical.

#### See

https://vocabulary.uncefact.org/identifier

***

### massMeasure? {#massmeasure}

> `optional` **massMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the mass of this distinct chemical.

#### See

https://vocabulary.uncefact.org/massMeasure

***

### massRatioMeasure? {#massratiomeasure}

> `optional` **massRatioMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A mass measure of this distinct chemical expressed as a ratio to another mass, such as the total mass.

#### See

https://vocabulary.uncefact.org/massRatioMeasure

***

### molecularWeightMeasure? {#molecularweightmeasure}

> `optional` **molecularWeightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the molecular weight (in grams) for this distinct chemical.

#### See

https://vocabulary.uncefact.org/molecularWeightMeasure

***

### presenceMeasurement? {#presencemeasurement}

> `optional` **presenceMeasurement**: [`IUneceIngredientRangeMeasurement`](IUneceIngredientRangeMeasurement.md)

A measurement of the range of the presence of an ingredient in this distinct chemical.

#### See

https://vocabulary.uncefact.org/presenceMeasurement

***

### presencePercent? {#presencepercent}

> `optional` **presencePercent**: `string`

The percentage of the presence of distinct chemical.

#### See

https://vocabulary.uncefact.org/presencePercent

***

### scientificName? {#scientificname}

> `optional` **scientificName**: `string`

The scientific name, expressed as text, for this distinct chemical.

#### See

https://vocabulary.uncefact.org/scientificName

***

### specifiedProductCertificate? {#specifiedproductcertificate}

> `optional` **specifiedProductCertificate**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate specified for this distinct chemical.

#### See

https://vocabulary.uncefact.org/specifiedProductCertificate

***

### synonymName? {#synonymname}

> `optional` **synonymName**: `string`

A synonym name, expressed as text, for this distinct chemical.

#### See

https://vocabulary.uncefact.org/synonymName

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of distinct chemical.

#### See

https://vocabulary.uncefact.org/typeCode

***

### volumeMeasure? {#volumemeasure}

> `optional` **volumeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the volume of this distinct chemical.

#### See

https://vocabulary.uncefact.org/volumeMeasure

***

### volumeRatioMeasure? {#volumeratiomeasure}

> `optional` **volumeRatioMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the volume of this distinct chemical expressed as a ratio to another volume, such as the total volume.

#### See

https://vocabulary.uncefact.org/volumeRatioMeasure

***

### weightMeasure? {#weightmeasure}

> `optional` **weightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the weight of this distinct chemical.

#### See

https://vocabulary.uncefact.org/weightMeasure
