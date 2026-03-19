# Interface: IUneceProductionProcess

A naturally occurring or designed sequence of operations or events in order to produce something.

## See

https://vocabulary.uncefact.org/ProductionProcess

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductionProcess"`

JSON-LD Type.

***

### additionalInformationNote? {#additionalinformationnote}

> `optional` **additionalInformationNote?**: [`IUneceNote`](IUneceNote.md)[]

An additional information note for this production process.

#### See

https://vocabulary.uncefact.org/additionalInformationNote

***

### allocatedMachine? {#allocatedmachine}

> `optional` **allocatedMachine?**: [`IUneceMachine`](IUneceMachine.md)[]

A machine allocated to this production process.

#### See

https://vocabulary.uncefact.org/allocatedMachine

***

### allocatedProductionDevice? {#allocatedproductiondevice}

> `optional` **allocatedProductionDevice?**: [`IUneceProductionDevice`](IUneceProductionDevice.md)[]

A production device allocated to this production process.

#### See

https://vocabulary.uncefact.org/allocatedProductionDevice

***

### applicableAssessment? {#applicableassessment}

> `optional` **applicableAssessment?**: [`IUneceAssessment`](IUneceAssessment.md)[]

An assessment applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableAssessment

***

### applicableDeclaration? {#applicabledeclaration}

> `optional` **applicableDeclaration?**: [`IUneceSpecifiedDeclaration`](IUneceSpecifiedDeclaration.md)[]

A specified declaration applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableDeclaration

***

### applicableFault? {#applicablefault}

> `optional` **applicableFault?**: [`IUneceSpecifiedFault`](IUneceSpecifiedFault.md)[]

A specified fault applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableFault

***

### applicableLicence? {#applicablelicence}

> `optional` **applicableLicence?**: [`IUneceLicence`](IUneceLicence.md)[]

A specified licence applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableLicence

***

### applicableParameter? {#applicableparameter}

> `optional` **applicableParameter?**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A specified parameter applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableParameter

***

### applicablePeriod? {#applicableperiod}

> `optional` **applicablePeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A period applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicablePeriod

***

### applicableProductionCycle? {#applicableproductioncycle}

> `optional` **applicableProductionCycle?**: [`IUneceProductionCycle`](IUneceProductionCycle.md)[]

A specified production cycle applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableProductionCycle

***

### applicableSpecifiedCertificate? {#applicablespecifiedcertificate}

> `optional` **applicableSpecifiedCertificate?**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A certificate applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedCertificate

***

### applicableSpecifiedInspection? {#applicablespecifiedinspection}

> `optional` **applicableSpecifiedInspection?**: [`IUneceSpecifiedInspection`](IUneceSpecifiedInspection.md)[]

A specified inspection applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic?**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableSustainabilityInspection? {#applicablesustainabilityinspection}

> `optional` **applicableSustainabilityInspection?**: [`IUneceSustainabilityInspection`](IUneceSustainabilityInspection.md)[]

A sustainability inspection applicable to this production process.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### appliedChemicalTreatment? {#appliedchemicaltreatment}

> `optional` **appliedChemicalTreatment?**: [`IUneceSpecifiedChemicalTreatment`](IUneceSpecifiedChemicalTreatment.md)[]

A chemical treatment applied during this production process.

#### See

https://vocabulary.uncefact.org/appliedChemicalTreatment

***

### appliedCropProtectionTreatment? {#appliedcropprotectiontreatment}

> `optional` **appliedCropProtectionTreatment?**: [`IUneceCropProtectionTreatment`](IUneceCropProtectionTreatment.md)[]

A crop protection treatment applied during this production process.

#### See

https://vocabulary.uncefact.org/appliedCropProtectionTreatment

***

### appliedProductFinishingTreatment? {#appliedproductfinishingtreatment}

> `optional` **appliedProductFinishingTreatment?**: [`IUneceProductFinishingTreatment`](IUneceProductFinishingTreatment.md)[]

A product finishing treatment applied during this production process.

#### See

https://vocabulary.uncefact.org/appliedProductFinishingTreatment

***

### associatedStandard? {#associatedstandard}

> `optional` **associatedStandard?**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard associated with this production process.

#### See

https://vocabulary.uncefact.org/associatedStandard

***

### criticalIndicator? {#criticalindicator}

> `optional` **criticalIndicator?**: `boolean`

The indication of whether or not this production process is critical.

#### See

https://vocabulary.uncefact.org/criticalIndicator

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this production process.

#### See

https://vocabulary.uncefact.org/description

***

### disclosureLevelCode? {#disclosurelevelcode}

> `optional` **disclosureLevelCode?**: `string`

A code specifying a disclosure level for this production process.

#### See

https://vocabulary.uncefact.org/disclosureLevelCode

***

### finalIndicator? {#finalindicator}

> `optional` **finalIndicator?**: `boolean`

The indication of whether or not this production process is a final one.

#### See

https://vocabulary.uncefact.org/finalIndicator

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier of this production process.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputApplicableBatch? {#inputapplicablebatch}

> `optional` **inputApplicableBatch?**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

An input product batch applicable to this production process.

#### See

https://vocabulary.uncefact.org/inputApplicableBatch

***

### inputApplicableMaterial? {#inputapplicablematerial}

> `optional` **inputApplicableMaterial?**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Input material applicable to this production process.

#### See

https://vocabulary.uncefact.org/inputApplicableMaterial

***

### inputApplicableProduct? {#inputapplicableproduct}

> `optional` **inputApplicableProduct?**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

An input product applicable to this production process.

#### See

https://vocabulary.uncefact.org/inputApplicableProduct

***

### inventoryTypeCode? {#inventorytypecode}

> `optional` **inventoryTypeCode?**: `string`

The code specifying the inventory type for this production process.

#### See

https://vocabulary.uncefact.org/inventoryTypeCode

***

### manufacturerParty? {#manufacturerparty}

> `optional` **manufacturerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A manufacturer party for this production process.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, of this production process.

#### See

https://vocabulary.uncefact.org/name

***

### occurrenceDateTime? {#occurrencedatetime}

> `optional` **occurrenceDateTime?**: `string`

The date, time, date time or other date time value of the occurrence of this production process.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### occurrenceEvent? {#occurrenceevent}

> `optional` **occurrenceEvent?**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An occurrence of an event for this production process.

#### See

https://vocabulary.uncefact.org/occurrenceEvent

***

### operationReferenceCode? {#operationreferencecode}

> `optional` **operationReferenceCode?**: `string`

The code specifying the operation reference for this production process.

#### See

https://vocabulary.uncefact.org/operationReferenceCode

***

### operationTechnologyCode? {#operationtechnologycode}

> `optional` **operationTechnologyCode?**: `string`

The code specifying the operation technology for this production process.

#### See

https://vocabulary.uncefact.org/operationTechnologyCode

***

### outputApplicableBatch? {#outputapplicablebatch}

> `optional` **outputApplicableBatch?**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

An output product batch applicable to this production process.

#### See

https://vocabulary.uncefact.org/outputApplicableBatch

***

### outputApplicableMaterial? {#outputapplicablematerial}

> `optional` **outputApplicableMaterial?**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Output material applicable to this production process.

#### See

https://vocabulary.uncefact.org/outputApplicableMaterial

***

### outputApplicableProduct? {#outputapplicableproduct}

> `optional` **outputApplicableProduct?**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

An output product applicable to this production process.

#### See

https://vocabulary.uncefact.org/outputApplicableProduct

***

### performedWorkItem? {#performedworkitem}

> `optional` **performedWorkItem?**: [`IUneceProcessWorkItem`](IUneceProcessWorkItem.md)[]

A work item performed for this production process.

#### See

https://vocabulary.uncefact.org/performedWorkItem

***

### productionProcessInventoryTypeCode? {#productionprocessinventorytypecode}

> `optional` **productionProcessInventoryTypeCode?**: `string`

The code specifying the inventory type for this production process.

#### See

https://vocabulary.uncefact.org/productionProcessInventoryTypeCode

***

### productionProcessSubordinateTypeCode? {#productionprocesssubordinatetypecode}

> `optional` **productionProcessSubordinateTypeCode?**: `string`

The code specifying the subordinate type of production process.

#### See

https://vocabulary.uncefact.org/productionProcessSubordinateTypeCode

***

### productionProcessTypeCode? {#productionprocesstypecode}

> `optional` **productionProcessTypeCode?**: `string`

The code specifying the type of production process.

#### See

https://vocabulary.uncefact.org/productionProcessTypeCode

***

### productionWasteInstructions? {#productionwasteinstructions}

> `optional` **productionWasteInstructions?**: [`IUneceDisposalInstructions`](IUneceDisposalInstructions.md)[]

Disposal instructions for the waste resulting from this production process.

#### See

https://vocabulary.uncefact.org/productionWasteInstructions

***

### recyclingIndicator? {#recyclingindicator}

> `optional` **recyclingIndicator?**: `boolean`

The indication of whether or not this is a recycling production process.

#### See

https://vocabulary.uncefact.org/recyclingIndicator

***

### relatedBinaryFile? {#relatedbinaryfile}

> `optional` **relatedBinaryFile?**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file related to this production process.

#### See

https://vocabulary.uncefact.org/relatedBinaryFile

***

### reportedProductionWasteMaterial? {#reportedproductionwastematerial}

> `optional` **reportedProductionWasteMaterial?**: [`IUneceProductionWasteMaterial`](IUneceProductionWasteMaterial.md)[]

Waste material reported for this production process.

#### See

https://vocabulary.uncefact.org/reportedProductionWasteMaterial

***

### specificationDocument? {#specificationdocument}

> `optional` **specificationDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A specification document referenced for this production process.

#### See

https://vocabulary.uncefact.org/specificationDocument

***

### specifiedAssertion? {#specifiedassertion}

> `optional` **specifiedAssertion?**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### specifiedDocument? {#specifieddocument}

> `optional` **specifiedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### specifiedFacility? {#specifiedfacility}

> `optional` **specifiedFacility?**: [`IUneceProductionFacility`](IUneceProductionFacility.md)[]

A production facility specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedFacility

***

### specifiedOrganizationalCertificate? {#specifiedorganizationalcertificate}

> `optional` **specifiedOrganizationalCertificate?**: [`IUneceOrganizationalCertificate`](IUneceOrganizationalCertificate.md)[]

An organizational certificate specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertificate

***

### specifiedOrganizationalCertification? {#specifiedorganizationalcertification}

> `optional` **specifiedOrganizationalCertification?**: [`IUneceOrganizationalCertification`](IUneceOrganizationalCertification.md)[]

An organizational certification specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertification

***

### specifiedProcessCertificate? {#specifiedprocesscertificate}

> `optional` **specifiedProcessCertificate?**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertificate

***

### specifiedProcessCertification? {#specifiedprocesscertification}

> `optional` **specifiedProcessCertification?**: [`IUneceProcessCertification`](IUneceProcessCertification.md)[]

A process certification specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertification

***

### specifiedProductBatchCertification? {#specifiedproductbatchcertification}

> `optional` **specifiedProductBatchCertification?**: [`IUneceProductBatchCertification`](IUneceProductBatchCertification.md)[]

A product batch certification specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedProductBatchCertification

***

### specifiedTradeProductCertification? {#specifiedtradeproductcertification}

> `optional` **specifiedTradeProductCertification?**: [`IUneceTradeProductCertification`](IUneceTradeProductCertification.md)[]

A trade product certification specified for this production process.

#### See

https://vocabulary.uncefact.org/specifiedTradeProductCertification

***

### status? {#status}

> `optional` **status?**: `string`

A status, expressed as text, of this production process.

#### See

https://vocabulary.uncefact.org/status

***

### statusCode? {#statuscode}

> `optional` **statusCode?**: `string`

The code specifying the status of this production process.

#### See

https://vocabulary.uncefact.org/statusCode

***

### stepCode? {#stepcode}

> `optional` **stepCode?**: `string`

The code specifying the step in this production process.

#### See

https://vocabulary.uncefact.org/stepCode

***

### subcontractorParty? {#subcontractorparty}

> `optional` **subcontractorParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A subcontractor party specified for this production process.

#### See

https://vocabulary.uncefact.org/subcontractorParty

***

### subordinateProcess? {#subordinateprocess}

> `optional` **subordinateProcess?**: `IUneceProductionProcess`[]

A subordinate process of this production process.

#### See

https://vocabulary.uncefact.org/subordinateProcess
