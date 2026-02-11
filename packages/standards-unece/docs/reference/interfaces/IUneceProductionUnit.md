# Interface: IUneceProductionUnit

A defined set of production processes under the single management of a facility.

## See

https://vocabulary.uncefact.org/ProductionUnit

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

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

> `optional` **applicableMachine**: [`IUneceMachine`](IUneceMachine.md)[]

A production machine applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/applicableMachine

***

### applicableProductionDevice?

> `optional` **applicableProductionDevice**: [`IUneceProductionDevice`](IUneceProductionDevice.md)[]

A production device applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/applicableProductionDevice

***

### applicableProductionProcess?

> `optional` **applicableProductionProcess**: [`IUneceProductionProcess`](IUneceProductionProcess.md)[]

A production process applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/applicableProductionProcess

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

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

> `optional` **dedicatedFacility**: [`IUneceProductionFacility`](IUneceProductionFacility.md)[]

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

> `optional` **inputApplicableBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

An input product batch applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/inputApplicableBatch

***

### inputApplicableMaterial?

> `optional` **inputApplicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Input material applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/inputApplicableMaterial

***

### inputApplicableProduct?

> `optional` **inputApplicableProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

An input product applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/inputApplicableProduct

***

### manufacturerParty?

> `optional` **manufacturerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

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

> `optional` **outputApplicableBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

An output product batch applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/outputApplicableBatch

***

### outputApplicableMaterial?

> `optional` **outputApplicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Output material applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/outputApplicableMaterial

***

### outputApplicableProduct?

> `optional` **outputApplicableProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

An output product applicable to this facility production unit.

#### See

https://vocabulary.uncefact.org/outputApplicableProduct

***

### physicalLocation?

> `optional` **physicalLocation**: [`IUneceLocation`](IUneceLocation.md)[]

A physical location referenced for this facility production unit.

#### See

https://vocabulary.uncefact.org/physicalLocation

***

### relatedParty?

> `optional` **relatedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party related to this facility production unit.

#### See

https://vocabulary.uncefact.org/relatedParty

***

### specifiedOrganizationalCertificate?

> `optional` **specifiedOrganizationalCertificate**: [`IUneceOrganizationalCertificate`](IUneceOrganizationalCertificate.md)[]

An organizational certificate specified for this facility production unit.

#### See

https://vocabulary.uncefact.org/specifiedOrganizationalCertificate

***

### specifiedProcessCertificate?

> `optional` **specifiedProcessCertificate**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate specified for this facility production unit.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertificate

***

### specifiedProductBatchCertificate?

> `optional` **specifiedProductBatchCertificate**: [`IUneceProductBatchCertificate`](IUneceProductBatchCertificate.md)[]

A product batch certificate specified for this facility production unit.

#### See

https://vocabulary.uncefact.org/specifiedProductBatchCertificate

***

### specifiedProductCertificate?

> `optional` **specifiedProductCertificate**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate specified for this facility production unit.

#### See

https://vocabulary.uncefact.org/specifiedProductCertificate

***

### subcontractorParty?

> `optional` **subcontractorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A subcontractor party for this facility production unit.

#### See

https://vocabulary.uncefact.org/subcontractorParty

***

### subordinateProductionUnit?

> `optional` **subordinateProductionUnit**: `IUneceProductionUnit`[]

A production unit subordinate to this facility production unit.

#### See

https://vocabulary.uncefact.org/subordinateProductionUnit

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of facility production unit.

#### See

https://vocabulary.uncefact.org/typeCode
