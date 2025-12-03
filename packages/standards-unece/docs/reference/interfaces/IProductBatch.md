# Interface: IProductBatch

A group of products considered or dealt with together.

## See

https://vocabulary.uncefact.org/ProductBatch

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

> **type**: `"ProductBatch"`

JSON-LD Type.

***

### applicableAssessment?

> `optional` **applicableAssessment**: [`IAssessment`](IAssessment.md)[]

An assessment applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableAssessment

***

### applicableDisposalInstructions?

> `optional` **applicableDisposalInstructions**: [`IDisposalInstructions`](IDisposalInstructions.md)[]

Disposal instructions applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableDisposalInstructions

***

### applicableFault?

> `optional` **applicableFault**: [`ISpecifiedFault`](ISpecifiedFault.md)[]

A specified fault applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableFault

***

### applicablePeriod?

> `optional` **applicablePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

A specified period applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicablePeriod

***

### applicableProductBatchCertification?

> `optional` **applicableProductBatchCertification**: [`IProductBatchCertification`](IProductBatchCertification.md)[]

A certification applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableProductBatchCertification

***

### applicableProductBatchCharacteristic?

> `optional` **applicableProductBatchCharacteristic**: [`IProductBatchCharacteristic`](IProductBatchCharacteristic.md)[]

A product batch characteristic applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableProductBatchCharacteristic

***

### applicableSpecifiedCertificate?

> `optional` **applicableSpecifiedCertificate**: [`ISpecifiedCertificate`](ISpecifiedCertificate.md)[]

A certificate applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedCertificate

***

### applicableSpecifiedInspection?

> `optional` **applicableSpecifiedInspection**: [`ISpecifiedInspection`](ISpecifiedInspection.md)[]

A specified inspection applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSupplyChainPackaging?

> `optional` **applicableSupplyChainPackaging**: [`ISupplyChainPackaging`](ISupplyChainPackaging.md)[]

Packaging applicable for use with this product batch.

#### See

https://vocabulary.uncefact.org/applicableSupplyChainPackaging

***

### applicableSustainabilityInspection?

> `optional` **applicableSustainabilityInspection**: [`ISustainabilityInspection`](ISustainabilityInspection.md)[]

A sustainability inspection applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### appliedAgriculturalApplication?

> `optional` **appliedAgriculturalApplication**: [`IAgriculturalApplication`](IAgriculturalApplication.md)[]

A specified agricultural application applied to this product batch.

#### See

https://vocabulary.uncefact.org/appliedAgriculturalApplication

***

### appliedChemicalTreatment?

> `optional` **appliedChemicalTreatment**: [`ISpecifiedChemicalTreatment`](ISpecifiedChemicalTreatment.md)[]

A chemical treatment applied to this product batch.

#### See

https://vocabulary.uncefact.org/appliedChemicalTreatment

***

### appliedProductFinishingTreatment?

> `optional` **appliedProductFinishingTreatment**: [`IProductFinishingTreatment`](IProductFinishingTreatment.md)[]

A product finishing treatment applied to this product batch.

#### See

https://vocabulary.uncefact.org/appliedProductFinishingTreatment

***

### appliedTreatment?

> `optional` **appliedTreatment**: `string`

A treatment, expressed as text, applied to this product batch.

#### See

https://vocabulary.uncefact.org/appliedTreatment

***

### buyerAssignedId?

> `optional` **buyerAssignedId**: `string`

A buyer assigned identifier of this product batch.

#### See

https://vocabulary.uncefact.org/buyerAssignedId

***

### componentBatch?

> `optional` **componentBatch**: `IProductBatch`[]

A product batch component of this product batch.

#### See

https://vocabulary.uncefact.org/componentBatch

***

### componentMaterial?

> `optional` **componentMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

A specified material component of this product batch.

#### See

https://vocabulary.uncefact.org/componentMaterial

***

### componentProduct?

> `optional` **componentProduct**: [`ITradeProduct`](ITradeProduct.md)[]

A trade product component of this product batch.

#### See

https://vocabulary.uncefact.org/componentProduct

***

### creationDateTime?

> `optional` **creationDateTime**: `string`

The date, time, date time or other date time value of the creation of this product batch.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### dNAMarkerId?

> `optional` **dNAMarkerId**: `string`

The DNA marker identifier of this product batch.

#### See

https://vocabulary.uncefact.org/dNAMarkerId

***

### description?

> `optional` **description**: `string`

A textual description of this product batch.

#### See

https://vocabulary.uncefact.org/description

***

### descriptionCode?

> `optional` **descriptionCode**: `string`

The code specifying the description of this product batch.

#### See

https://vocabulary.uncefact.org/descriptionCode

***

### globalId?

> `optional` **globalId**: `string`

A global identifier of this product batch.

#### See

https://vocabulary.uncefact.org/globalId

***

### grossVolumeMeasure?

> `optional` **grossVolumeMeasure**: [`IMeasureType`](IMeasureType.md)

A measure of the gross volume of this product batch.

#### See

https://vocabulary.uncefact.org/grossVolumeMeasure

***

### grossWeightMeasure?

> `optional` **grossWeightMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the gross weight of this product batch.

#### See

https://vocabulary.uncefact.org/grossWeightMeasure

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this product batch.

#### See

https://vocabulary.uncefact.org/identifier

***

### manufacturerAssignedId?

> `optional` **manufacturerAssignedId**: `string`

A manufacturer assigned identifier of this product batch.

#### See

https://vocabulary.uncefact.org/manufacturerAssignedId

***

### massMeasure?

> `optional` **massMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the mass of this product batch.

#### See

https://vocabulary.uncefact.org/massMeasure

***

### massRatioMeasure?

> `optional` **massRatioMeasure**: [`IMeasureType`](IMeasureType.md)[]

A mass measure of this product batch expressed as a ratio to another mass, such as the total mass.

#### See

https://vocabulary.uncefact.org/massRatioMeasure

***

### maximumSizeMeasure?

> `optional` **maximumSizeMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the maximum size of this product batch.

#### See

https://vocabulary.uncefact.org/maximumSizeMeasure

***

### minimumSizeMeasure?

> `optional` **minimumSizeMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the minimum size of this product batch.

#### See

https://vocabulary.uncefact.org/minimumSizeMeasure

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this product batch.

#### See

https://vocabulary.uncefact.org/name

***

### netVolumeMeasure?

> `optional` **netVolumeMeasure**: [`IMeasureType`](IMeasureType.md)

A measure of the net volume of this product batch.

#### See

https://vocabulary.uncefact.org/netVolumeMeasure

***

### netWeightMeasure?

> `optional` **netWeightMeasure**: [`IMeasureType`](IMeasureType.md)

A measure of the net weight of this product batch.

#### See

https://vocabulary.uncefact.org/netWeightMeasure

***

### productName?

> `optional` **productName**: `string`

The product name, expressed as text, for this product batch.

#### See

https://vocabulary.uncefact.org/productName

***

### productionModeCode?

> `optional` **productionModeCode**: `string`

The code specifying the production mode for this product batch.

#### See

https://vocabulary.uncefact.org/productionModeCode

***

### sellerAssignedId?

> `optional` **sellerAssignedId**: `string`

A seller assigned identifier of this product batch.

#### See

https://vocabulary.uncefact.org/sellerAssignedId

***

### sizeMeasure?

> `optional` **sizeMeasure**: [`IMeasureType`](IMeasureType.md)[]

The size, expressed as a measure, for this product batch.

#### See

https://vocabulary.uncefact.org/sizeMeasure

***

### specifiedAgriculturalCertificate?

> `optional` **specifiedAgriculturalCertificate**: [`IAgriculturalCertificate`](IAgriculturalCertificate.md)[]

An agricultural certificate specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalCertificate

***

### specifiedAgriculturalCharacteristic?

> `optional` **specifiedAgriculturalCharacteristic**: [`IAgriculturalCharacteristic`](IAgriculturalCharacteristic.md)[]

An agricultural characteristic specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic

***

### specifiedAssertion?

> `optional` **specifiedAssertion**: [`IAssertion`](IAssertion.md)[]

A sustainability assertion specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### specifiedDocument?

> `optional` **specifiedDocument**: [`IDocument`](IDocument.md)[]

A referenced document specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### specifiedLocation?

> `optional` **specifiedLocation**: [`ILocation`](ILocation.md)[]

A referenced location specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### specifiedNote?

> `optional` **specifiedNote**: [`INote`](INote.md)[]

A note specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedNote

***

### specifiedPicture?

> `optional` **specifiedPicture**: [`IPicture`](IPicture.md)[]

A photographic picture specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedPicture

***

### specifiedProcess?

> `optional` **specifiedProcess**: [`IProductionProcess`](IProductionProcess.md)[]

A production process specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedProcess

***

### specifiedProductBatchCertificate?

> `optional` **specifiedProductBatchCertificate**: [`IProductBatchCertificate`](IProductBatchCertificate.md)[]

A certificate specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedProductBatchCertificate

***

### specifiedProductBatchCharacteristic?

> `optional` **specifiedProductBatchCharacteristic**: [`IProductBatchCharacteristic`](IProductBatchCharacteristic.md)[]

A product batch characteristic specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedProductBatchCharacteristic

***

### specifiedSupplyChainEvent?

> `optional` **specifiedSupplyChainEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A supply chain event specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this product batch.

#### See

https://vocabulary.uncefact.org/statusCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of product batch.

#### See

https://vocabulary.uncefact.org/typeCode

***

### unitQuantity?

> `optional` **unitQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of units, expressed as a quantity, for this product batch.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### weightMeasure?

> `optional` **weightMeasure**: [`IMeasureType`](IMeasureType.md)[]

The weight, expressed as a measure, for this product batch.

#### See

https://vocabulary.uncefact.org/weightMeasure
