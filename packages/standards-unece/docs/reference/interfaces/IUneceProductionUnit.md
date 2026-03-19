# Interface: IUneceProductionUnit

A defined set of production processes under the single management of a facility.

## See

https://vocabulary.uncefact.org/ProductionUnit

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductionUnit"`

JSON-LD Type.

***

### applicableMachine? {#applicablemachine}

> `optional` **applicableMachine?**: [`IUneceMachine`](IUneceMachine.md)[]

A production machine applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/applicableMachine

***

### applicableProductionDevice? {#applicableproductiondevice}

> `optional` **applicableProductionDevice?**: [`IUneceProductionDevice`](IUneceProductionDevice.md)[]

A production device applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/applicableProductionDevice

***

### applicableProductionProcess? {#applicableproductionprocess}

> `optional` **applicableProductionProcess?**: [`IUneceProductionProcess`](IUneceProductionProcess.md)[]

A production process applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/applicableProductionProcess

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic?**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### completionDate? {#completiondate}

> `optional` **completionDate?**: `string`

The date of completion of this facility production unit.

#### See

https://vocabulary.uncefact.org/completionDate

***

### constructionDate? {#constructiondate}

> `optional` **constructionDate?**: `string`

The date of construction of this facility production unit.

#### See

https://vocabulary.uncefact.org/constructionDate

***

### dedicatedFacility? {#dedicatedfacility}

> `optional` **dedicatedFacility?**: [`IUneceProductionFacility`](IUneceProductionFacility.md)[]

A dedicated production facility for this production unit.

#### See

https://vocabulary.uncefact.org/dedicatedFacility

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this facility production unit.

#### See

https://vocabulary.uncefact.org/description

***

### globalId? {#globalid}

> `optional` **globalId?**: `string` \| `IJsonLdValueObject`

A global identifier of this facility production unit.

#### See

https://vocabulary.uncefact.org/globalId

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier of this facility production unit.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputApplicableBatch? {#inputapplicablebatch}

> `optional` **inputApplicableBatch?**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

An input product batch applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/inputApplicableBatch

***

### inputApplicableMaterial? {#inputapplicablematerial}

> `optional` **inputApplicableMaterial?**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Input material applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/inputApplicableMaterial

***

### inputApplicableProduct? {#inputapplicableproduct}

> `optional` **inputApplicableProduct?**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

An input product applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/inputApplicableProduct

***

### manufacturerParty? {#manufacturerparty}

> `optional` **manufacturerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A manufacturer party related to this facility production unit.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, for this facility production unit.

#### See

https://vocabulary.uncefact.org/name

***

### outputApplicableBatch? {#outputapplicablebatch}

> `optional` **outputApplicableBatch?**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

An output product batch applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/outputApplicableBatch

***

### outputApplicableMaterial? {#outputapplicablematerial}

> `optional` **outputApplicableMaterial?**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Output material applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/outputApplicableMaterial

***

### outputApplicableProduct? {#outputapplicableproduct}

> `optional` **outputApplicableProduct?**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

An output product applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/outputApplicableProduct

***

### physicalLocation? {#physicallocation}

> `optional` **physicalLocation?**: [`IUneceLocation`](IUneceLocation.md)[]

A physical location referenced for this facility production unit.

#### See

https://vocabulary.uncefact.org/physicalLocation

***

### relatedParty? {#relatedparty}

> `optional` **relatedParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party related to this facility production unit.

#### See

https://vocabulary.uncefact.org/relatedParty

***

### specifiedOrganizationalCertificate? {#specifiedorganizationalcertificate}

> `optional` **specifiedOrganizationalCertificate?**: [`IUneceOrganizationalCertificate`](IUneceOrganizationalCertificate.md)[]

An organizational certificate specified for this facility production unit.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertificate

***

### specifiedProcessCertificate? {#specifiedprocesscertificate}

> `optional` **specifiedProcessCertificate?**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate specified for this facility production unit.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertificate

***

### specifiedProductBatchCertificate? {#specifiedproductbatchcertificate}

> `optional` **specifiedProductBatchCertificate?**: [`IUneceProductBatchCertificate`](IUneceProductBatchCertificate.md)[]

A product batch certificate specified for this facility production unit.

#### See

https://vocabulary.uncefact.org/specifiedProductBatchCertificate

***

### specifiedProductCertificate? {#specifiedproductcertificate}

> `optional` **specifiedProductCertificate?**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate specified for this facility production unit.

#### See

https://vocabulary.uncefact.org/specifiedProductCertificate

***

### subcontractorParty? {#subcontractorparty}

> `optional` **subcontractorParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A subcontractor party for this facility production unit.

#### See

https://vocabulary.uncefact.org/subcontractorParty

***

### subordinateProductionUnit? {#subordinateproductionunit}

> `optional` **subordinateProductionUnit?**: `IUneceProductionUnit`[]

A production unit subordinate to this facility production unit.

#### See

https://vocabulary.uncefact.org/subordinateProductionUnit

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of facility production unit.

#### See

https://vocabulary.uncefact.org/typeCode
