# Interface: IUneceProductionFacility

A man made physical structure, such as a building, in which something is produced.

## See

https://vocabulary.uncefact.org/ProductionFacility

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductionFacility"`

JSON-LD Type.

***

### applicableAssessment? {#applicableassessment}

> `optional` **applicableAssessment**: [`IUneceAssessment`](IUneceAssessment.md)[]

An assessment applicable to this production facility.

#### See

https://vocabulary.uncefact.org/applicableAssessment

***

### applicableSpecifiedCertificate? {#applicablespecifiedcertificate}

> `optional` **applicableSpecifiedCertificate**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A certificate applicable to this production facility.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedCertificate

***

### applicableSpecifiedInspection? {#applicablespecifiedinspection}

> `optional` **applicableSpecifiedInspection**: [`IUneceSpecifiedInspection`](IUneceSpecifiedInspection.md)[]

A specified inspection applicable to this production facility.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this production facility.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableSustainabilityInspection? {#applicablesustainabilityinspection}

> `optional` **applicableSustainabilityInspection**: [`IUneceSustainabilityInspection`](IUneceSustainabilityInspection.md)[]

A sustainability inspection applicable to this production facility.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### bufferCapacityMeasure? {#buffercapacitymeasure}

> `optional` **bufferCapacityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the buffer capacity for this production facility.

#### See

https://vocabulary.uncefact.org/bufferCapacityMeasure

***

### capacityMeasure? {#capacitymeasure}

> `optional` **capacityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the capacity of this production facility.

#### See

https://vocabulary.uncefact.org/capacityMeasure

***

### completionDate? {#completiondate}

> `optional` **completionDate**: `string`

The completion date of this production facility.

#### See

https://vocabulary.uncefact.org/completionDate

***

### constructionDate? {#constructiondate}

> `optional` **constructionDate**: `string`

The construction date for this production facility.

#### See

https://vocabulary.uncefact.org/constructionDate

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this production facility.

#### See

https://vocabulary.uncefact.org/description

***

### digitalPlatformAssignedId? {#digitalplatformassignedid}

> `optional` **digitalPlatformAssignedId**: `string` \| `IJsonLdValueObject`

The digital platform assigned identifier for this production facility.

#### See

https://vocabulary.uncefact.org/digitalPlatformAssignedId

***

### functionCode? {#functioncode}

> `optional` **functionCode**: `string`

The code specifying the function of this production facility.

#### See

https://vocabulary.uncefact.org/functionCode

***

### globalId? {#globalid}

> `optional` **globalId**: `string` \| `IJsonLdValueObject`

A global identifier of this production facility.

#### See

https://vocabulary.uncefact.org/globalId

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this production facility.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputCapacityMeasure? {#inputcapacitymeasure}

> `optional` **inputCapacityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the input capacity for this production facility.

#### See

https://vocabulary.uncefact.org/inputCapacityMeasure

***

### licence? {#licence}

> `optional` **licence**: `string`

A licence, expressed as text, for this production facility.

#### See

https://vocabulary.uncefact.org/licence

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, of this production facility.

#### See

https://vocabulary.uncefact.org/name

***

### outputCapacityMeasure? {#outputcapacitymeasure}

> `optional` **outputCapacityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the output capacity for this production facility.

#### See

https://vocabulary.uncefact.org/outputCapacityMeasure

***

### physicalLocation? {#physicallocation}

> `optional` **physicalLocation**: [`IUneceLocation`](IUneceLocation.md)[]

A physical location referenced for this production facility.

#### See

https://vocabulary.uncefact.org/physicalLocation

***

### productionFacilityCertificationTypeCode? {#productionfacilitycertificationtypecode}

> `optional` **productionFacilityCertificationTypeCode**: `string`

The code specifying the type of certification for this production facility.

#### See

https://vocabulary.uncefact.org/productionFacilityCertificationTypeCode

***

### productionFacilityRoofTypeCode? {#productionfacilityrooftypecode}

> `optional` **productionFacilityRoofTypeCode**: `string`

The code specifying the type of roof, such as a glass roof, for this production facility.

#### See

https://vocabulary.uncefact.org/productionFacilityRoofTypeCode

***

### productionFacilitySubordinateTypeCode? {#productionfacilitysubordinatetypecode}

> `optional` **productionFacilitySubordinateTypeCode**: `string`

The code specifying the subordinate type for this production facility.

#### See

https://vocabulary.uncefact.org/productionFacilitySubordinateTypeCode

***

### productionFacilityTypeCode? {#productionfacilitytypecode}

> `optional` **productionFacilityTypeCode**: `string`

The code specifying the type of production facility.

#### See

https://vocabulary.uncefact.org/productionFacilityTypeCode

***

### relatedProductionUnit? {#relatedproductionunit}

> `optional` **relatedProductionUnit**: [`IUneceProductionUnit`](IUneceProductionUnit.md)[]

A production unit related to this production facility.

#### See

https://vocabulary.uncefact.org/relatedProductionUnit

***

### renovationDate? {#renovationdate}

> `optional` **renovationDate**: `string`

The renovation date of this production facility.

#### See

https://vocabulary.uncefact.org/renovationDate

***

### roofTypeCode? {#rooftypecode}

> `optional` **roofTypeCode**: `string`

The code specifying the type of roof, such as a glass roof, for this production facility.

#### See

https://vocabulary.uncefact.org/roofTypeCode

***

### specifiedAnimalCertificate? {#specifiedanimalcertificate}

> `optional` **specifiedAnimalCertificate**: [`IUneceAnimalCertificate`](IUneceAnimalCertificate.md)[]

An animal certificate specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedAnimalCertificate

***

### specifiedAnimalCertification? {#specifiedanimalcertification}

> `optional` **specifiedAnimalCertification**: [`IUneceAnimalCertification`](IUneceAnimalCertification.md)[]

An animal certification specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedAnimalCertification

***

### specifiedOrganizationalCertificate? {#specifiedorganizationalcertificate}

> `optional` **specifiedOrganizationalCertificate**: [`IUneceOrganizationalCertificate`](IUneceOrganizationalCertificate.md)[]

An organizational certificate specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertificate

***

### specifiedOrganizationalCertification? {#specifiedorganizationalcertification}

> `optional` **specifiedOrganizationalCertification**: [`IUneceOrganizationalCertification`](IUneceOrganizationalCertification.md)[]

An organizational certification specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertification

***

### specifiedProcess? {#specifiedprocess}

> `optional` **specifiedProcess**: [`IUneceProductionProcess`](IUneceProductionProcess.md)[]

A production process specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedProcess

***

### specifiedProcessCertificate? {#specifiedprocesscertificate}

> `optional` **specifiedProcessCertificate**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertificate

***

### specifiedProcessCertification? {#specifiedprocesscertification}

> `optional` **specifiedProcessCertification**: [`IUneceProcessCertification`](IUneceProcessCertification.md)[]

A process certification specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertification

***

### specifiedProductBatchCertificate? {#specifiedproductbatchcertificate}

> `optional` **specifiedProductBatchCertificate**: [`IUneceProductBatchCertificate`](IUneceProductBatchCertificate.md)[]

A product batch certificate specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedProductBatchCertificate

***

### specifiedProductBatchCertification? {#specifiedproductbatchcertification}

> `optional` **specifiedProductBatchCertification**: [`IUneceProductBatchCertification`](IUneceProductBatchCertification.md)[]

A product batch certification specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedProductBatchCertification

***

### specifiedProductCertificate? {#specifiedproductcertificate}

> `optional` **specifiedProductCertificate**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedProductCertificate

***

### specifiedSupplyChainEvent? {#specifiedsupplychainevent}

> `optional` **specifiedSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain event specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### specifiedTradeProductCertification? {#specifiedtradeproductcertification}

> `optional` **specifiedTradeProductCertification**: [`IUneceTradeProductCertification`](IUneceTradeProductCertification.md)[]

A trade product certification specified for this production facility.

#### See

https://vocabulary.uncefact.org/specifiedTradeProductCertification

***

### subordinateFacility? {#subordinatefacility}

> `optional` **subordinateFacility**: `IUneceProductionFacility`[]

A production facility subordinate to this production facility.

#### See

https://vocabulary.uncefact.org/subordinateFacility
