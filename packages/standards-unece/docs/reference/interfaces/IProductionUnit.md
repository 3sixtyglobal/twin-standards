# Interface: IProductionUnit

A defined set of production processes under the single management of a facility.

## See

https://vocabulary.uncefact.org/ProductionUnit

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

> **type**: `"ProductionUnit"`

JSON-LD Type.

***

### applicableMachine?

> `optional` **applicableMachine**: [`IMachine`](IMachine.md)[]

A production machine applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/applicableMachine

***

### applicableProductionDevice?

> `optional` **applicableProductionDevice**: [`IProductionDevice`](IProductionDevice.md)[]

A production device applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/applicableProductionDevice

***

### applicableProductionProcess?

> `optional` **applicableProductionProcess**: [`IProductionProcess`](IProductionProcess.md)[]

A production process applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/applicableProductionProcess

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### completionDate?

> `optional` **completionDate**: `string`

The date of completion of this facility production unit.

#### See

https://vocabulary.uncefact.org/completionDate

***

### constructionDate?

> `optional` **constructionDate**: `string`

The date of construction of this facility production unit.

#### See

https://vocabulary.uncefact.org/constructionDate

***

### dedicatedFacility?

> `optional` **dedicatedFacility**: [`IProductionFacility`](IProductionFacility.md)[]

A dedicated production facility for this production unit.

#### See

https://vocabulary.uncefact.org/dedicatedFacility

***

### description?

> `optional` **description**: `string`

A textual description of this facility production unit.

#### See

https://vocabulary.uncefact.org/description

***

### globalId?

> `optional` **globalId**: `string`

A global identifier of this facility production unit.

#### See

https://vocabulary.uncefact.org/globalId

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this facility production unit.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputApplicableBatch?

> `optional` **inputApplicableBatch**: [`IProductBatch`](IProductBatch.md)[]

An input product batch applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/inputApplicableBatch

***

### inputApplicableMaterial?

> `optional` **inputApplicableMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Input material applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/inputApplicableMaterial

***

### inputApplicableProduct?

> `optional` **inputApplicableProduct**: [`ITradeProduct`](ITradeProduct.md)[]

An input product applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/inputApplicableProduct

***

### manufacturerParty?

> `optional` **manufacturerParty**: [`ITradeParty`](ITradeParty.md)[]

A manufacturer party related to this facility production unit.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this facility production unit.

#### See

https://vocabulary.uncefact.org/name

***

### outputApplicableBatch?

> `optional` **outputApplicableBatch**: [`IProductBatch`](IProductBatch.md)[]

An output product batch applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/outputApplicableBatch

***

### outputApplicableMaterial?

> `optional` **outputApplicableMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Output material applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/outputApplicableMaterial

***

### outputApplicableProduct?

> `optional` **outputApplicableProduct**: [`ITradeProduct`](ITradeProduct.md)[]

An output product applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/outputApplicableProduct

***

### physicalLocation?

> `optional` **physicalLocation**: [`ILocation`](ILocation.md)[]

A physical location referenced for this facility production unit.

#### See

https://vocabulary.uncefact.org/physicalLocation

***

### relatedParty?

> `optional` **relatedParty**: [`ITradeParty`](ITradeParty.md)[]

A trade party related to this facility production unit.

#### See

https://vocabulary.uncefact.org/relatedParty

***

### specifiedOrganizationalCertificate?

> `optional` **specifiedOrganizationalCertificate**: [`IOrganizationalCertificate`](IOrganizationalCertificate.md)[]

An organizational certificate specified for this facility production unit.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertificate

***

### specifiedProcessCertificate?

> `optional` **specifiedProcessCertificate**: [`IProcessCertificate`](IProcessCertificate.md)[]

A process certificate specified for this facility production unit.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertificate

***

### specifiedProductBatchCertificate?

> `optional` **specifiedProductBatchCertificate**: [`IProductBatchCertificate`](IProductBatchCertificate.md)[]

A product batch certificate specified for this facility production unit.

#### See

https://vocabulary.uncefact.org/specifiedProductBatchCertificate

***

### specifiedProductCertificate?

> `optional` **specifiedProductCertificate**: [`IProductCertificate`](IProductCertificate.md)[]

A product certificate specified for this facility production unit.

#### See

https://vocabulary.uncefact.org/specifiedProductCertificate

***

### subcontractorParty?

> `optional` **subcontractorParty**: [`ITradeParty`](ITradeParty.md)[]

A subcontractor party for this facility production unit.

#### See

https://vocabulary.uncefact.org/subcontractorParty

***

### subordinateProductionUnit?

> `optional` **subordinateProductionUnit**: `IProductionUnit`[]

A production unit subordinate to this facility production unit.

#### See

https://vocabulary.uncefact.org/subordinateProductionUnit

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of facility production unit.

#### See

https://vocabulary.uncefact.org/typeCode
