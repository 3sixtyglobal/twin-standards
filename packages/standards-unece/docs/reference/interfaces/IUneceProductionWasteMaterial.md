# Interface: IUneceProductionWasteMaterial

Any materials unused and rejected as unwanted during a production process.

## See

https://vocabulary.uncefact.org/ProductionWasteMaterial

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductionWasteMaterial"`

JSON-LD Type.

***

### applicableProductCertificate? {#applicableproductcertificate}

> `optional` **applicableProductCertificate?**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate applicable to this production waste material.

#### See

https://vocabulary.uncefact.org/applicableProductCertificate

***

### applicableProductionWasteRecoveryDisposalProcess? {#applicableproductionwasterecoverydisposalprocess}

> `optional` **applicableProductionWasteRecoveryDisposalProcess?**: [`IUneceProductionWasteRecoveryDisposalProcess`](IUneceProductionWasteRecoveryDisposalProcess.md)[]

A production waste recovery disposal process applicable to this production waste material.

#### See

https://vocabulary.uncefact.org/applicableProductionWasteRecoveryDisposalProcess

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic?**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this production waste material.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### includedProductionWasteMaterialComponent? {#includedproductionwastematerialcomponent}

> `optional` **includedProductionWasteMaterialComponent?**: [`IUneceProductionWasteMaterialComponent`](IUneceProductionWasteMaterialComponent.md)[]

A production waste material component included in this production waste material.

#### See

https://vocabulary.uncefact.org/includedProductionWasteMaterialComponent

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of production waste material.

#### See

https://vocabulary.uncefact.org/typeCode

***

### volumeMeasure? {#volumemeasure}

> `optional` **volumeMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the volume of this production waste material.

#### See

https://vocabulary.uncefact.org/volumeMeasure

***

### weightMeasure? {#weightmeasure}

> `optional` **weightMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the weight of this production waste material.

#### See

https://vocabulary.uncefact.org/weightMeasure
