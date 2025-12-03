# Interface: IProductionProcess

A naturally occurring or designed sequence of operations or events in order to produce something.

## See

https://vocabulary.uncefact.org/ProductionProcess

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

> **type**: `"ProductionProcess"`

JSON-LD Type.

***

### additionalInformationNote?

> `optional` **additionalInformationNote**: [`INote`](INote.md)[]

An additional information note for this production process.

#### See

https://vocabulary.uncefact.org/additionalInformationNote

***

### allocatedMachine?

> `optional` **allocatedMachine**: [`IMachine`](IMachine.md)[]

A machine allocated to this production process.

#### See

https://vocabulary.uncefact.org/allocatedMachine

***

### allocatedProductionDevice?

> `optional` **allocatedProductionDevice**: [`IProductionDevice`](IProductionDevice.md)[]

A production device allocated to this production process.

#### See

https://vocabulary.uncefact.org/allocatedProductionDevice

***

### applicableAssessment?

> `optional` **applicableAssessment**: [`IAssessment`](IAssessment.md)[]

An assessment applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableAssessment

***

### applicableDeclaration?

> `optional` **applicableDeclaration**: [`ISpecifiedDeclaration`](ISpecifiedDeclaration.md)[]

A specified declaration applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableDeclaration

***

### applicableFault?

> `optional` **applicableFault**: [`ISpecifiedFault`](ISpecifiedFault.md)[]

A specified fault applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableFault

***

### applicableLicence?

> `optional` **applicableLicence**: [`ILicence`](ILicence.md)[]

A specified licence applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableLicence

***

### applicableParameter?

> `optional` **applicableParameter**: [`ISpecifiedParameter`](ISpecifiedParameter.md)[]

A specified parameter applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableParameter

***

### applicablePeriod?

> `optional` **applicablePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

A period applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicablePeriod

***

### applicableProductionCycle?

> `optional` **applicableProductionCycle**: [`IProductionCycle`](IProductionCycle.md)[]

A specified production cycle applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableProductionCycle

***

### applicableSpecifiedCertificate?

> `optional` **applicableSpecifiedCertificate**: [`ISpecifiedCertificate`](ISpecifiedCertificate.md)[]

A certificate applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedCertificate

***

### applicableSpecifiedInspection?

> `optional` **applicableSpecifiedInspection**: [`ISpecifiedInspection`](ISpecifiedInspection.md)[]

A specified inspection applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableSustainabilityInspection?

> `optional` **applicableSustainabilityInspection**: [`ISustainabilityInspection`](ISustainabilityInspection.md)[]

A sustainability inspection applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### appliedChemicalTreatment?

> `optional` **appliedChemicalTreatment**: [`ISpecifiedChemicalTreatment`](ISpecifiedChemicalTreatment.md)[]

A chemical treatment applied during this production process.

#### See

https://vocabulary.uncefact.org/appliedChemicalTreatment

***

### appliedCropProtectionTreatment?

> `optional` **appliedCropProtectionTreatment**: [`ICropProtectionTreatment`](ICropProtectionTreatment.md)[]

A crop protection treatment applied during this production process.

#### See

https://vocabulary.uncefact.org/appliedCropProtectionTreatment

***

### appliedProductFinishingTreatment?

> `optional` **appliedProductFinishingTreatment**: [`IProductFinishingTreatment`](IProductFinishingTreatment.md)[]

A product finishing treatment applied during this production process.

#### See

https://vocabulary.uncefact.org/appliedProductFinishingTreatment

***

### associatedStandard?

> `optional` **associatedStandard**: [`IStandard`](IStandard.md)[]

A referenced standard associated with this production process.

#### See

https://vocabulary.uncefact.org/associatedStandard

***

### criticalIndicator?

> `optional` **criticalIndicator**: `boolean`

The indication of whether or not this production process is critical.

#### See

https://vocabulary.uncefact.org/criticalIndicator

***

### description?

> `optional` **description**: `string`

A textual description of this production process.

#### See

https://vocabulary.uncefact.org/description

***

### disclosureLevelCode?

> `optional` **disclosureLevelCode**: `string`

A code specifying a disclosure level for this production process.

#### See

https://vocabulary.uncefact.org/disclosureLevelCode

***

### finalIndicator?

> `optional` **finalIndicator**: `boolean`

The indication of whether or not this production process is a final one.

#### See

https://vocabulary.uncefact.org/finalIndicator

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this production process.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputApplicableBatch?

> `optional` **inputApplicableBatch**: [`IProductBatch`](IProductBatch.md)[]

An input product batch applicable to this production process.

#### See

https://vocabulary.uncefact.org/inputApplicableBatch

***

### inputApplicableMaterial?

> `optional` **inputApplicableMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Input material applicable to this production process.

#### See

https://vocabulary.uncefact.org/inputApplicableMaterial

***

### inputApplicableProduct?

> `optional` **inputApplicableProduct**: [`ITradeProduct`](ITradeProduct.md)[]

An input product applicable to this production process.

#### See

https://vocabulary.uncefact.org/inputApplicableProduct

***

### inventoryTypeCode?

> `optional` **inventoryTypeCode**: `string`

The code specifying the inventory type for this production process.

#### See

https://vocabulary.uncefact.org/inventoryTypeCode

***

### manufacturerParty?

> `optional` **manufacturerParty**: [`ITradeParty`](ITradeParty.md)[]

A manufacturer party for this production process.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this production process.

#### See

https://vocabulary.uncefact.org/name

***

### occurrenceDateTime?

> `optional` **occurrenceDateTime**: `string`

The date, time, date time or other date time value of the occurrence of this production process.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### occurrenceEvent?

> `optional` **occurrenceEvent**: [`ISupplyChainEvent`](ISupplyChainEvent.md)[]

An occurrence of an event for this production process.

#### See

https://vocabulary.uncefact.org/occurrenceEvent

***

### operationReferenceCode?

> `optional` **operationReferenceCode**: `string`

The code specifying the operation reference for this production process.

#### See

https://vocabulary.uncefact.org/operationReferenceCode

***

### operationTechnologyCode?

> `optional` **operationTechnologyCode**: `string`

The code specifying the operation technology for this production process.

#### See

https://vocabulary.uncefact.org/operationTechnologyCode

***

### outputApplicableBatch?

> `optional` **outputApplicableBatch**: [`IProductBatch`](IProductBatch.md)[]

An output product batch applicable to this production process.

#### See

https://vocabulary.uncefact.org/outputApplicableBatch

***

### outputApplicableMaterial?

> `optional` **outputApplicableMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Output material applicable to this production process.

#### See

https://vocabulary.uncefact.org/outputApplicableMaterial

***

### outputApplicableProduct?

> `optional` **outputApplicableProduct**: [`ITradeProduct`](ITradeProduct.md)[]

An output product applicable to this production process.

#### See

https://vocabulary.uncefact.org/outputApplicableProduct

***

### performedWorkItem?

> `optional` **performedWorkItem**: [`IProcessWorkItem`](IProcessWorkItem.md)[]

A work item performed for this production process.

#### See

https://vocabulary.uncefact.org/performedWorkItem

***

### productionProcessInventoryTypeCode?

> `optional` **productionProcessInventoryTypeCode**: `string`

The code specifying the inventory type for this production process.

#### See

https://vocabulary.uncefact.org/productionProcessInventoryTypeCode

***

### productionProcessSubordinateTypeCode?

> `optional` **productionProcessSubordinateTypeCode**: `string`

The code specifying the subordinate type of production process.

#### See

https://vocabulary.uncefact.org/productionProcessSubordinateTypeCode

***

### productionProcessTypeCode?

> `optional` **productionProcessTypeCode**: `string`

The code specifying the type of production process.

#### See

https://vocabulary.uncefact.org/productionProcessTypeCode

***

### productionWasteInstructions?

> `optional` **productionWasteInstructions**: [`IDisposalInstructions`](IDisposalInstructions.md)[]

Disposal instructions for the waste resulting from this production process.

#### See

https://vocabulary.uncefact.org/productionWasteInstructions

***

### recyclingIndicator?

> `optional` **recyclingIndicator**: `boolean`

The indication of whether or not this is a recycling production process.

#### See

https://vocabulary.uncefact.org/recyclingIndicator

***

### relatedBinaryFile?

> `optional` **relatedBinaryFile**: [`IBinaryFile`](IBinaryFile.md)[]

A binary file related to this production process.

#### See

https://vocabulary.uncefact.org/relatedBinaryFile

***

### reportedProductionWasteMaterial?

> `optional` **reportedProductionWasteMaterial**: [`IProductionWasteMaterial`](IProductionWasteMaterial.md)[]

Waste material reported for this production process.

#### See

https://vocabulary.uncefact.org/reportedProductionWasteMaterial

***

### specificationDocument?

> `optional` **specificationDocument**: [`IDocument`](IDocument.md)[]

A specification document referenced for this production process.

#### See

https://vocabulary.uncefact.org/specificationDocument

***

### specifiedAssertion?

> `optional` **specifiedAssertion**: [`IAssertion`](IAssertion.md)[]

A sustainability assertion specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### specifiedDocument?

> `optional` **specifiedDocument**: [`IDocument`](IDocument.md)[]

A referenced document specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### specifiedFacility?

> `optional` **specifiedFacility**: [`IProductionFacility`](IProductionFacility.md)[]

A production facility specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedFacility

***

### specifiedOrganizationalCertificate?

> `optional` **specifiedOrganizationalCertificate**: [`IOrganizationalCertificate`](IOrganizationalCertificate.md)[]

An organizational certificate specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertificate

***

### specifiedOrganizationalCertification?

> `optional` **specifiedOrganizationalCertification**: [`IOrganizationalCertification`](IOrganizationalCertification.md)[]

An organizational certification specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertification

***

### specifiedProcessCertificate?

> `optional` **specifiedProcessCertificate**: [`IProcessCertificate`](IProcessCertificate.md)[]

A process certificate specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertificate

***

### specifiedProcessCertification?

> `optional` **specifiedProcessCertification**: [`IProcessCertification`](IProcessCertification.md)[]

A process certification specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertification

***

### specifiedProductBatchCertification?

> `optional` **specifiedProductBatchCertification**: [`IProductBatchCertification`](IProductBatchCertification.md)[]

A product batch certification specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedProductBatchCertification

***

### specifiedTradeProductCertification?

> `optional` **specifiedTradeProductCertification**: [`ITradeProductCertification`](ITradeProductCertification.md)[]

A trade product certification specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedTradeProductCertification

***

### status?

> `optional` **status**: `string`

A status, expressed as text, of this production process.

#### See

https://vocabulary.uncefact.org/status

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this production process.

#### See

https://vocabulary.uncefact.org/statusCode

***

### stepCode?

> `optional` **stepCode**: `string`

The code specifying the step in this production process.

#### See

https://vocabulary.uncefact.org/stepCode

***

### subcontractorParty?

> `optional` **subcontractorParty**: [`ITradeParty`](ITradeParty.md)[]

A subcontractor party specified for this production process.

#### See

https://vocabulary.uncefact.org/subcontractorParty

***

### subordinateProcess?

> `optional` **subordinateProcess**: `IProductionProcess`[]

A subordinate process of this production process.

#### See

https://vocabulary.uncefact.org/subordinateProcess
