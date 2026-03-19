# Interface: IUneceSpecifiedMaterial

A substance from which something is or could be made.

## See

https://vocabulary.uncefact.org/SpecifiedMaterial

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SpecifiedMaterial"`

JSON-LD Type.

***

### applicableAssessment? {#applicableassessment}

> `optional` **applicableAssessment?**: [`IUneceAssessment`](IUneceAssessment.md)[]

An assessment applicable for this specified material.

#### See

https://vocabulary.uncefact.org/applicableAssessment

***

### applicableGoodsCharacteristic? {#applicablegoodscharacteristic}

> `optional` **applicableGoodsCharacteristic?**: [`IUneceGoodsCharacteristic`](IUneceGoodsCharacteristic.md)[]

A goods characteristic applicable to this specified material.

#### See

https://vocabulary.uncefact.org/applicableGoodsCharacteristic

***

### applicableProductCertificate? {#applicableproductcertificate}

> `optional` **applicableProductCertificate?**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate applicable to this specified material.

#### See

https://vocabulary.uncefact.org/applicableProductCertificate

***

### applicableProductCharacteristic? {#applicableproductcharacteristic}

> `optional` **applicableProductCharacteristic?**: [`IUneceProductCharacteristic`](IUneceProductCharacteristic.md)[]

A product characteristic applicable to this specified material.

#### See

https://vocabulary.uncefact.org/applicableProductCharacteristic

***

### applicableQuantity? {#applicablequantity}

> `optional` **applicableQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity applicable to this specified material.

#### See

https://vocabulary.uncefact.org/applicableQuantity

***

### applicableSpecifiedCertificate? {#applicablespecifiedcertificate}

> `optional` **applicableSpecifiedCertificate?**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A certificate applicable to this specified material.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedCertificate

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic?**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this specified material.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableTradeProductCertification? {#applicabletradeproductcertification}

> `optional` **applicableTradeProductCertification?**: [`IUneceTradeProductCertification`](IUneceTradeProductCertification.md)[]

A product certification applicable to this specified material.

#### See

https://vocabulary.uncefact.org/applicableTradeProductCertification

***

### applicableWasteMaterialRecoveryDisposalProcess? {#applicablewastematerialrecoverydisposalprocess}

> `optional` **applicableWasteMaterialRecoveryDisposalProcess?**: [`IUneceWasteMaterialRecoveryDisposalProcess`](IUneceWasteMaterialRecoveryDisposalProcess.md)[]

A waste material recovery disposal process applicable to this specified material.

#### See

https://vocabulary.uncefact.org/applicableWasteMaterialRecoveryDisposalProcess

***

### classificationId? {#classificationid}

> `optional` **classificationId?**: `string` \| `IJsonLdValueObject`

An identifier of the classification of this specified material.

#### See

https://vocabulary.uncefact.org/classificationId

***

### componentMaterial? {#componentmaterial}

> `optional` **componentMaterial?**: `IUneceSpecifiedMaterial`[]

Component material for this specified material.

#### See

https://vocabulary.uncefact.org/componentMaterial

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this specified material.

#### See

https://vocabulary.uncefact.org/description

***

### descriptionCode? {#descriptioncode}

> `optional` **descriptionCode?**: `string`

The code specifying the description of this material.

#### See

https://vocabulary.uncefact.org/descriptionCode

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier of this specified material.

#### See

https://vocabulary.uncefact.org/identifier

***

### information? {#information}

> `optional` **information?**: `string`

Information, expressed as text, for this specified material.

#### See

https://vocabulary.uncefact.org/information

***

### manufacturerParty? {#manufacturerparty}

> `optional` **manufacturerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A manufacturer party for this specified material.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### massMeasure? {#massmeasure}

> `optional` **massMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the mass of this specified material.

#### See

https://vocabulary.uncefact.org/massMeasure

***

### massRatioMeasure? {#massratiomeasure}

> `optional` **massRatioMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A mass measure of this specified material expressed as a ratio to another mass, such as the total mass.

#### See

https://vocabulary.uncefact.org/massRatioMeasure

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, of this specified material.

#### See

https://vocabulary.uncefact.org/name

***

### presencePercent? {#presencepercent}

> `optional` **presencePercent?**: `string`

The percentage of the presence for this specified material.

#### See

https://vocabulary.uncefact.org/presencePercent

***

### specifiedLocation? {#specifiedlocation}

> `optional` **specifiedLocation?**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location specified for this material.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### statusCode? {#statuscode}

> `optional` **statusCode?**: `string`

The code specifying the status of this material.

#### See

https://vocabulary.uncefact.org/statusCode

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of material.

#### See

https://vocabulary.uncefact.org/typeCode

***

### usedChemical? {#usedchemical}

> `optional` **usedChemical?**: [`IUneceChemical`](IUneceChemical.md)[]

A distinct chemical used for this specified material.

#### See

https://vocabulary.uncefact.org/usedChemical

***

### volumeMeasure? {#volumemeasure}

> `optional` **volumeMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the volume of this specified material.

#### See

https://vocabulary.uncefact.org/volumeMeasure

***

### volumeRatioMeasure? {#volumeratiomeasure}

> `optional` **volumeRatioMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the volume of this specified material expressed as a ratio to another volume, such as the total volume.

#### See

https://vocabulary.uncefact.org/volumeRatioMeasure

***

### weightMeasure? {#weightmeasure}

> `optional` **weightMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the weight of this specified material.

#### See

https://vocabulary.uncefact.org/weightMeasure
