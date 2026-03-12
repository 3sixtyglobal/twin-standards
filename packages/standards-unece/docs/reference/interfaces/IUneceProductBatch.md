# Interface: IUneceProductBatch

A group of products considered or dealt with together.

## See

https://vocabulary.uncefact.org/ProductBatch

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductBatch"`

JSON-LD Type.

***

### applicableAssessment? {#applicableassessment}

> `optional` **applicableAssessment**: [`IUneceAssessment`](IUneceAssessment.md)[]

An assessment applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableAssessment

***

### applicableDisposalInstructions? {#applicabledisposalinstructions}

> `optional` **applicableDisposalInstructions**: [`IUneceDisposalInstructions`](IUneceDisposalInstructions.md)[]

Disposal instructions applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableDisposalInstructions

***

### applicableFault? {#applicablefault}

> `optional` **applicableFault**: [`IUneceSpecifiedFault`](IUneceSpecifiedFault.md)[]

A specified fault applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableFault

***

### applicablePeriod? {#applicableperiod}

> `optional` **applicablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A specified period applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicablePeriod

***

### applicableProductBatchCertification? {#applicableproductbatchcertification}

> `optional` **applicableProductBatchCertification**: [`IUneceProductBatchCertification`](IUneceProductBatchCertification.md)[]

A certification applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableProductBatchCertification

***

### applicableProductBatchCharacteristic? {#applicableproductbatchcharacteristic}

> `optional` **applicableProductBatchCharacteristic**: [`IUneceProductBatchCharacteristic`](IUneceProductBatchCharacteristic.md)[]

A product batch characteristic applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableProductBatchCharacteristic

***

### applicableSpecifiedCertificate? {#applicablespecifiedcertificate}

> `optional` **applicableSpecifiedCertificate**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A certificate applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedCertificate

***

### applicableSpecifiedInspection? {#applicablespecifiedinspection}

> `optional` **applicableSpecifiedInspection**: [`IUneceSpecifiedInspection`](IUneceSpecifiedInspection.md)[]

A specified inspection applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSupplyChainPackaging? {#applicablesupplychainpackaging}

> `optional` **applicableSupplyChainPackaging**: [`IUneceSupplyChainPackaging`](IUneceSupplyChainPackaging.md)[]

Packaging applicable for use with this product batch.

#### See

https://vocabulary.uncefact.org/applicableSupplyChainPackaging

***

### applicableSustainabilityInspection? {#applicablesustainabilityinspection}

> `optional` **applicableSustainabilityInspection**: [`IUneceSustainabilityInspection`](IUneceSustainabilityInspection.md)[]

A sustainability inspection applicable to this product batch.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### appliedAgriculturalApplication? {#appliedagriculturalapplication}

> `optional` **appliedAgriculturalApplication**: [`IUneceAgriculturalApplication`](IUneceAgriculturalApplication.md)[]

A specified agricultural application applied to this product batch.

#### See

https://vocabulary.uncefact.org/appliedAgriculturalApplication

***

### appliedChemicalTreatment? {#appliedchemicaltreatment}

> `optional` **appliedChemicalTreatment**: [`IUneceSpecifiedChemicalTreatment`](IUneceSpecifiedChemicalTreatment.md)[]

A chemical treatment applied to this product batch.

#### See

https://vocabulary.uncefact.org/appliedChemicalTreatment

***

### appliedProductFinishingTreatment? {#appliedproductfinishingtreatment}

> `optional` **appliedProductFinishingTreatment**: [`IUneceProductFinishingTreatment`](IUneceProductFinishingTreatment.md)[]

A product finishing treatment applied to this product batch.

#### See

https://vocabulary.uncefact.org/appliedProductFinishingTreatment

***

### appliedTreatment? {#appliedtreatment}

> `optional` **appliedTreatment**: `string`

A treatment, expressed as text, applied to this product batch.

#### See

https://vocabulary.uncefact.org/appliedTreatment

***

### buyerAssignedId? {#buyerassignedid}

> `optional` **buyerAssignedId**: `string` \| `IJsonLdValueObject`

A buyer assigned identifier of this product batch.

#### See

https://vocabulary.uncefact.org/buyerAssignedId

***

### componentBatch? {#componentbatch}

> `optional` **componentBatch**: `IUneceProductBatch`[]

A product batch component of this product batch.

#### See

https://vocabulary.uncefact.org/componentBatch

***

### componentMaterial? {#componentmaterial}

> `optional` **componentMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

A specified material component of this product batch.

#### See

https://vocabulary.uncefact.org/componentMaterial

***

### componentProduct? {#componentproduct}

> `optional` **componentProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

A trade product component of this product batch.

#### See

https://vocabulary.uncefact.org/componentProduct

***

### creationDateTime? {#creationdatetime}

> `optional` **creationDateTime**: `string`

The date, time, date time or other date time value of the creation of this product batch.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### dNAMarkerId? {#dnamarkerid}

> `optional` **dNAMarkerId**: `string` \| `IJsonLdValueObject`

The DNA marker identifier of this product batch.

#### See

https://vocabulary.uncefact.org/dNAMarkerId

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this product batch.

#### See

https://vocabulary.uncefact.org/description

***

### descriptionCode? {#descriptioncode}

> `optional` **descriptionCode**: `string`

The code specifying the description of this product batch.

#### See

https://vocabulary.uncefact.org/descriptionCode

***

### globalId? {#globalid}

> `optional` **globalId**: `string` \| `IJsonLdValueObject`

A global identifier of this product batch.

#### See

https://vocabulary.uncefact.org/globalId

***

### grossVolumeMeasure? {#grossvolumemeasure}

> `optional` **grossVolumeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the gross volume of this product batch.

#### See

https://vocabulary.uncefact.org/grossVolumeMeasure

***

### grossWeightMeasure? {#grossweightmeasure}

> `optional` **grossWeightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the gross weight of this product batch.

#### See

https://vocabulary.uncefact.org/grossWeightMeasure

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this product batch.

#### See

https://vocabulary.uncefact.org/identifier

***

### manufacturerAssignedId? {#manufacturerassignedid}

> `optional` **manufacturerAssignedId**: `string` \| `IJsonLdValueObject`

A manufacturer assigned identifier of this product batch.

#### See

https://vocabulary.uncefact.org/manufacturerAssignedId

***

### massMeasure? {#massmeasure}

> `optional` **massMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the mass of this product batch.

#### See

https://vocabulary.uncefact.org/massMeasure

***

### massRatioMeasure? {#massratiomeasure}

> `optional` **massRatioMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A mass measure of this product batch expressed as a ratio to another mass, such as the total mass.

#### See

https://vocabulary.uncefact.org/massRatioMeasure

***

### maximumSizeMeasure? {#maximumsizemeasure}

> `optional` **maximumSizeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the maximum size of this product batch.

#### See

https://vocabulary.uncefact.org/maximumSizeMeasure

***

### minimumSizeMeasure? {#minimumsizemeasure}

> `optional` **minimumSizeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the minimum size of this product batch.

#### See

https://vocabulary.uncefact.org/minimumSizeMeasure

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, of this product batch.

#### See

https://vocabulary.uncefact.org/name

***

### netVolumeMeasure? {#netvolumemeasure}

> `optional` **netVolumeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the net volume of this product batch.

#### See

https://vocabulary.uncefact.org/netVolumeMeasure

***

### netWeightMeasure? {#netweightmeasure}

> `optional` **netWeightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the net weight of this product batch.

#### See

https://vocabulary.uncefact.org/netWeightMeasure

***

### productName? {#productname}

> `optional` **productName**: `string`

The product name, expressed as text, for this product batch.

#### See

https://vocabulary.uncefact.org/productName

***

### productionModeCode? {#productionmodecode}

> `optional` **productionModeCode**: `string`

The code specifying the production mode for this product batch.

#### See

https://vocabulary.uncefact.org/productionModeCode

***

### sellerAssignedId? {#sellerassignedid}

> `optional` **sellerAssignedId**: `string` \| `IJsonLdValueObject`

A seller assigned identifier of this product batch.

#### See

https://vocabulary.uncefact.org/sellerAssignedId

***

### sizeMeasure? {#sizemeasure}

> `optional` **sizeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The size, expressed as a measure, for this product batch.

#### See

https://vocabulary.uncefact.org/sizeMeasure

***

### specifiedAgriculturalCertificate? {#specifiedagriculturalcertificate}

> `optional` **specifiedAgriculturalCertificate**: [`IUneceAgriculturalCertificate`](IUneceAgriculturalCertificate.md)[]

An agricultural certificate specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalCertificate

***

### specifiedAgriculturalCharacteristic? {#specifiedagriculturalcharacteristic}

> `optional` **specifiedAgriculturalCharacteristic**: [`IUneceAgriculturalCharacteristic`](IUneceAgriculturalCharacteristic.md)[]

An agricultural characteristic specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic

***

### specifiedAssertion? {#specifiedassertion}

> `optional` **specifiedAssertion**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### specifiedDocument? {#specifieddocument}

> `optional` **specifiedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### specifiedLocation? {#specifiedlocation}

> `optional` **specifiedLocation**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### specifiedNote? {#specifiednote}

> `optional` **specifiedNote**: [`IUneceNote`](IUneceNote.md)[]

A note specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedNote

***

### specifiedPicture? {#specifiedpicture}

> `optional` **specifiedPicture**: [`IUnecePicture`](IUnecePicture.md)[]

A photographic picture specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedPicture

***

### specifiedProcess? {#specifiedprocess}

> `optional` **specifiedProcess**: [`IUneceProductionProcess`](IUneceProductionProcess.md)[]

A production process specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedProcess

***

### specifiedProductBatchCertificate? {#specifiedproductbatchcertificate}

> `optional` **specifiedProductBatchCertificate**: [`IUneceProductBatchCertificate`](IUneceProductBatchCertificate.md)[]

A certificate specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedProductBatchCertificate

***

### specifiedProductBatchCharacteristic? {#specifiedproductbatchcharacteristic}

> `optional` **specifiedProductBatchCharacteristic**: [`IUneceProductBatchCharacteristic`](IUneceProductBatchCharacteristic.md)[]

A product batch characteristic specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedProductBatchCharacteristic

***

### specifiedSupplyChainEvent? {#specifiedsupplychainevent}

> `optional` **specifiedSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain event specified for this product batch.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### statusCode? {#statuscode}

> `optional` **statusCode**: `string`

The code specifying the status of this product batch.

#### See

https://vocabulary.uncefact.org/statusCode

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of product batch.

#### See

https://vocabulary.uncefact.org/typeCode

***

### unitQuantity? {#unitquantity}

> `optional` **unitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units, expressed as a quantity, for this product batch.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### weightMeasure? {#weightmeasure}

> `optional` **weightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The weight, expressed as a measure, for this product batch.

#### See

https://vocabulary.uncefact.org/weightMeasure
