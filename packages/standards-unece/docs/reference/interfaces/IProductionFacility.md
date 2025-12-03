# Interface: IProductionFacility

A man made physical structure, such as a building, in which something is produced.

## See

https://vocabulary.uncefact.org/ProductionFacility

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

> **type**: `"ProductionFacility"`

JSON-LD Type.

***

### applicableAssessment?

> `optional` **applicableAssessment**: [`IAssessment`](IAssessment.md)[]

An assessment applicable to this production facility.

#### See

https://vocabulary.uncefact.org/applicableAssessment

***

### applicableSpecifiedCertificate?

> `optional` **applicableSpecifiedCertificate**: [`ISpecifiedCertificate`](ISpecifiedCertificate.md)[]

A certificate applicable to this production facility.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedCertificate

***

### applicableSpecifiedInspection?

> `optional` **applicableSpecifiedInspection**: [`ISpecifiedInspection`](ISpecifiedInspection.md)[]

A specified inspection applicable to this production facility.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this production facility.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableSustainabilityInspection?

> `optional` **applicableSustainabilityInspection**: [`ISustainabilityInspection`](ISustainabilityInspection.md)[]

A sustainability inspection applicable to this production facility.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### bufferCapacityMeasure?

> `optional` **bufferCapacityMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the buffer capacity for this production facility.

#### See

https://vocabulary.uncefact.org/bufferCapacityMeasure

***

### capacityMeasure?

> `optional` **capacityMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the capacity of this production facility.

#### See

https://vocabulary.uncefact.org/capacityMeasure

***

### completionDate?

> `optional` **completionDate**: `string`

The completion date of this production facility.

#### See

https://vocabulary.uncefact.org/completionDate

***

### constructionDate?

> `optional` **constructionDate**: `string`

The construction date for this production facility.

#### See

https://vocabulary.uncefact.org/constructionDate

***

### description?

> `optional` **description**: `string`

A textual description of this production facility.

#### See

https://vocabulary.uncefact.org/description

***

### digitalPlatformAssignedId?

> `optional` **digitalPlatformAssignedId**: `string`

The digital platform assigned identifier for this production facility.

#### See

https://vocabulary.uncefact.org/digitalPlatformAssignedId

***

### functionCode?

> `optional` **functionCode**: `string`

The code specifying the function of this production facility.

#### See

https://vocabulary.uncefact.org/functionCode

***

### globalId?

> `optional` **globalId**: `string`

A global identifier of this production facility.

#### See

https://vocabulary.uncefact.org/globalId

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this production facility.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputCapacityMeasure?

> `optional` **inputCapacityMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the input capacity for this production facility.

#### See

https://vocabulary.uncefact.org/inputCapacityMeasure

***

### licence?

> `optional` **licence**: `string`

A licence, expressed as text, for this production facility.

#### See

https://vocabulary.uncefact.org/licence

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this production facility.

#### See

https://vocabulary.uncefact.org/name

***

### outputCapacityMeasure?

> `optional` **outputCapacityMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the output capacity for this production facility.

#### See

https://vocabulary.uncefact.org/outputCapacityMeasure

***

### physicalLocation?

> `optional` **physicalLocation**: [`ILocation`](ILocation.md)[]

A physical location referenced for this production facility.

#### See

https://vocabulary.uncefact.org/physicalLocation

***

### productionFacilityCertificationTypeCode?

> `optional` **productionFacilityCertificationTypeCode**: `string`

The code specifying the type of certification for this production facility.

#### See

https://vocabulary.uncefact.org/productionFacilityCertificationTypeCode

***

### productionFacilityRoofTypeCode?

> `optional` **productionFacilityRoofTypeCode**: `string`

The code specifying the type of roof, such as a glass roof, for this production facility.

#### See

https://vocabulary.uncefact.org/productionFacilityRoofTypeCode

***

### productionFacilitySubordinateTypeCode?

> `optional` **productionFacilitySubordinateTypeCode**: `string`

The code specifying the subordinate type for this production facility.

#### See

https://vocabulary.uncefact.org/productionFacilitySubordinateTypeCode

***

### productionFacilityTypeCode?

> `optional` **productionFacilityTypeCode**: `string`

The code specifying the type of production facility.

#### See

https://vocabulary.uncefact.org/productionFacilityTypeCode

***

### relatedProductionUnit?

> `optional` **relatedProductionUnit**: [`IProductionUnit`](IProductionUnit.md)[]

A production unit related to this production facility.

#### See

https://vocabulary.uncefact.org/relatedProductionUnit

***

### renovationDate?

> `optional` **renovationDate**: `string`

The renovation date of this production facility.

#### See

https://vocabulary.uncefact.org/renovationDate

***

### roofTypeCode?

> `optional` **roofTypeCode**: `string`

The code specifying the type of roof, such as a glass roof, for this production facility.

#### See

https://vocabulary.uncefact.org/roofTypeCode

***

### specifiedAnimalCertificate?

> `optional` **specifiedAnimalCertificate**: [`IAnimalCertificate`](IAnimalCertificate.md)[]

An animal certificate specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedAnimalCertificate

***

### specifiedAnimalCertification?

> `optional` **specifiedAnimalCertification**: [`IAnimalCertification`](IAnimalCertification.md)[]

An animal certification specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedAnimalCertification

***

### specifiedOrganizationalCertificate?

> `optional` **specifiedOrganizationalCertificate**: [`IOrganizationalCertificate`](IOrganizationalCertificate.md)[]

An organizational certificate specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertificate

***

### specifiedOrganizationalCertification?

> `optional` **specifiedOrganizationalCertification**: [`IOrganizationalCertification`](IOrganizationalCertification.md)[]

An organizational certification specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertification

***

### specifiedProcess?

> `optional` **specifiedProcess**: [`IProductionProcess`](IProductionProcess.md)[]

A production process specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedProcess

***

### specifiedProcessCertificate?

> `optional` **specifiedProcessCertificate**: [`IProcessCertificate`](IProcessCertificate.md)[]

A process certificate specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertificate

***

### specifiedProcessCertification?

> `optional` **specifiedProcessCertification**: [`IProcessCertification`](IProcessCertification.md)[]

A process certification specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertification

***

### specifiedProductBatchCertificate?

> `optional` **specifiedProductBatchCertificate**: [`IProductBatchCertificate`](IProductBatchCertificate.md)[]

A product batch certificate specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedProductBatchCertificate

***

### specifiedProductBatchCertification?

> `optional` **specifiedProductBatchCertification**: [`IProductBatchCertification`](IProductBatchCertification.md)[]

A product batch certification specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedProductBatchCertification

***

### specifiedProductCertificate?

> `optional` **specifiedProductCertificate**: [`IProductCertificate`](IProductCertificate.md)[]

A product certificate specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedProductCertificate

***

### specifiedSupplyChainEvent?

> `optional` **specifiedSupplyChainEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

A supply chain event specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### specifiedTradeProductCertification?

> `optional` **specifiedTradeProductCertification**: [`ITradeProductCertification`](ITradeProductCertification.md)[]

A trade product certification specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedTradeProductCertification

***

### subordinateFacility?

> `optional` **subordinateFacility**: `IProductionFacility`[]

A production facility subordinate to this production facility.

#### See

https://vocabulary.uncefact.org/subordinateFacility
