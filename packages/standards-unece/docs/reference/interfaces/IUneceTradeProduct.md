# Interface: IUneceTradeProduct

Any tangible output or service produced by human or mechanical effort or by a natural process for trade purposes.

## See

https://vocabulary.uncefact.org/TradeProduct

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

> **type**: `"TradeProduct"`

JSON-LD Type.

***

### acquisitionLeadTimeMeasure?

> `optional` **acquisitionLeadTimeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the acquisition lead time for this trade product.

#### See

https://vocabulary.uncefact.org/acquisitionLeadTimeMeasure

***

### additionalDescription?

> `optional` **additionalDescription**: `string`

An additional textual description for this trade product.

#### See

https://vocabulary.uncefact.org/additionalDescription

***

### additionalReferenceDocument?

> `optional` **additionalReferenceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

An additional referenced document for this trade product, such as a manual or a certificate.

#### See

https://vocabulary.uncefact.org/additionalReferenceDocument

***

### applicableAssessment?

> `optional` **applicableAssessment**: [`IUneceAssessment`](IUneceAssessment.md)[]

An assessment applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableAssessment

***

### applicableDangerousGoods?

> `optional` **applicableDangerousGoods**: [`IUneceDangerousGoods`](IUneceDangerousGoods.md)[]

Transport dangerous goods information applicable for this trade product.

#### See

https://vocabulary.uncefact.org/applicableDangerousGoods

***

### applicableDeclaration?

> `optional` **applicableDeclaration**: [`IUneceSpecifiedDeclaration`](IUneceSpecifiedDeclaration.md)[]

A specified declaration applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableDeclaration

***

### applicableDisposalInstructions?

> `optional` **applicableDisposalInstructions**: [`IUneceDisposalInstructions`](IUneceDisposalInstructions.md)[]

Disposal instructions applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableDisposalInstructions

***

### applicableFault?

> `optional` **applicableFault**: [`IUneceSpecifiedFault`](IUneceSpecifiedFault.md)[]

A fault applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableFault

***

### applicableGoodsCharacteristic?

> `optional` **applicableGoodsCharacteristic**: [`IUneceGoodsCharacteristic`](IUneceGoodsCharacteristic.md)[]

A material goods characteristic applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableGoodsCharacteristic

***

### applicableKeyword?

> `optional` **applicableKeyword**: [`IUneceKeyword`](IUneceKeyword.md)[]

A keyword applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableKeyword

***

### applicableLicence?

> `optional` **applicableLicence**: [`IUneceLicence`](IUneceLicence.md)[]

A specified licence applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableLicence

***

### applicableLogisticsPackaging?

> `optional` **applicableLogisticsPackaging**: [`IUneceLogisticsPackaging`](IUneceLogisticsPackaging.md)[]

Logistics packaging applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableLogisticsPackaging

***

### applicablePeriod?

> `optional` **applicablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A specified period applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicablePeriod

***

### applicableProductCharacteristic?

> `optional` **applicableProductCharacteristic**: [`IUneceProductCharacteristic`](IUneceProductCharacteristic.md)[]

A characteristic applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableProductCharacteristic

***

### applicableProductionProcess?

> `optional` **applicableProductionProcess**: [`IUneceProductionProcess`](IUneceProductionProcess.md)[]

A production process applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableProductionProcess

***

### applicableSpecifiedCertificate?

> `optional` **applicableSpecifiedCertificate**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A certificate applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedCertificate

***

### applicableSpecifiedInspection?

> `optional` **applicableSpecifiedInspection**: [`IUneceSpecifiedInspection`](IUneceSpecifiedInspection.md)[]

An inspection applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSupplyChainPackaging?

> `optional` **applicableSupplyChainPackaging**: [`IUneceSupplyChainPackaging`](IUneceSupplyChainPackaging.md)[]

Packaging applicable for use with this trade product.

#### See

https://vocabulary.uncefact.org/applicableSupplyChainPackaging

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableSustainabilityInspection?

> `optional` **applicableSustainabilityInspection**: [`IUneceSustainabilityInspection`](IUneceSustainabilityInspection.md)[]

A sustainability inspection applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### applicableTechnicalCharacteristic?

> `optional` **applicableTechnicalCharacteristic**: [`IUneceTechnicalCharacteristic`](IUneceTechnicalCharacteristic.md)[]

A technical characteristic applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableTechnicalCharacteristic

***

### applicableTradeProductCertification?

> `optional` **applicableTradeProductCertification**: [`IUneceTradeProductCertification`](IUneceTradeProductCertification.md)[]

A certification applicable to this trade product.

#### See

https://vocabulary.uncefact.org/applicableTradeProductCertification

***

### appliedChemicalTreatment?

> `optional` **appliedChemicalTreatment**: [`IUneceSpecifiedChemicalTreatment`](IUneceSpecifiedChemicalTreatment.md)[]

A chemical treatment applied to this trade product.

#### See

https://vocabulary.uncefact.org/appliedChemicalTreatment

***

### appliedProductFinishingTreatment?

> `optional` **appliedProductFinishingTreatment**: [`IUneceProductFinishingTreatment`](IUneceProductFinishingTreatment.md)[]

A product finishing treatment applied to this trade product.

#### See

https://vocabulary.uncefact.org/appliedProductFinishingTreatment

***

### areaDensityMeasure?

> `optional` **areaDensityMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the area density, such as paper density 100 gsm, of this trade product.

#### See

https://vocabulary.uncefact.org/areaDensityMeasure

***

### attachedSecurityTag?

> `optional` **attachedSecurityTag**: [`IUneceSecurityTag`](IUneceSecurityTag.md)[]

A tag device attached to this trade product to provide protection from a peril such as theft.

#### See

https://vocabulary.uncefact.org/attachedSecurityTag

***

### availableMeasurementCode?

> `optional` **availableMeasurementCode**: `string`

A code specifying the available measurement of this trade product.

#### See

https://vocabulary.uncefact.org/availableMeasurementCode

***

### batchId?

> `optional` **batchId**: `string`

A batch identifier for this trade product.

#### See

https://vocabulary.uncefact.org/batchId

***

### biologicallyBasedIndicator?

> `optional` **biologicallyBasedIndicator**: `boolean`

The indication of whether or not this trade product is biologically based.

#### See

https://vocabulary.uncefact.org/biologicallyBasedIndicator

***

### brandName?

> `optional` **brandName**: `string`

The brand name, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/brandName

***

### brandOwnerParty?

> `optional` **brandOwnerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party that owns the brand of this trade product.

#### See

https://vocabulary.uncefact.org/brandOwnerParty

***

### brandRangeName?

> `optional` **brandRangeName**: `string`

The brand range name, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/brandRangeName

***

### buyerAssignedId?

> `optional` **buyerAssignedId**: `string`

The unique buyer assigned identifier for this trade product.

#### See

https://vocabulary.uncefact.org/buyerAssignedId

***

### buyerSuppliedPartsReferenceDocument?

> `optional` **buyerSuppliedPartsReferenceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A buyer supplier parts document referenced for this trade product.

#### See

https://vocabulary.uncefact.org/buyerSuppliedPartsReferenceDocument

***

### cITESSpeciesCode?

> `optional` **cITESSpeciesCode**: `string`

The CITES (Convention on International Trade in Endangered Species) code for this trade product.

#### See

https://vocabulary.uncefact.org/cITESSpeciesCode

***

### cancellationAnnouncedLaunchDateTime?

> `optional` **cancellationAnnouncedLaunchDateTime**: `string`

The formatted date, time, date time, or other date time value of the cancellation of the announced launch of this trade
product.

#### See

https://vocabulary.uncefact.org/cancellationAnnouncedLaunchDateTime

***

### careSpecifiedLabel?

> `optional` **careSpecifiedLabel**: [`IUneceProductLabel`](IUneceProductLabel.md)[]

A product care label specified for this trade product.

#### See

https://vocabulary.uncefact.org/careSpecifiedLabel

***

### certificationEvidenceReferenceDocument?

> `optional` **certificationEvidenceReferenceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced certification evidence document for this trade product.

#### See

https://vocabulary.uncefact.org/certificationEvidenceReferenceDocument

***

### classificationCode?

> `optional` **classificationCode**: `string`

The code specifying the classification for this trade product.

#### See

https://vocabulary.uncefact.org/classificationCode

***

### collectionId?

> `optional` **collectionId**: `string`

A collection identifier of this trade product.

#### See

https://vocabulary.uncefact.org/collectionId

***

### collectionStatusCode?

> `optional` **collectionStatusCode**: `string`

The code specifying the collection status of this trade product.

#### See

https://vocabulary.uncefact.org/collectionStatusCode

***

### colourCode?

> `optional` **colourCode**: `string`

The code specifying the colour for this trade product.

#### See

https://vocabulary.uncefact.org/colourCode

***

### colourDescription?

> `optional` **colourDescription**: `string`

A textual description of the colour of this trade product.

#### See

https://vocabulary.uncefact.org/colourDescription

***

### colourMatchingLightSourceCode?

> `optional` **colourMatchingLightSourceCode**: `string`

The code specifying the light source used for colour matching of this trade product.

#### See

https://vocabulary.uncefact.org/colourMatchingLightSourceCode

***

### colourMatchingSampleId?

> `optional` **colourMatchingSampleId**: `string`

An identifier of the colour matching sample for this trade product.

#### See

https://vocabulary.uncefact.org/colourMatchingSampleId

***

### commonName?

> `optional` **commonName**: `string`

A common name, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/commonName

***

### componentMaterial?

> `optional` **componentMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

A material component of this trade product.

#### See

https://vocabulary.uncefact.org/componentMaterial

***

### conciseDescription?

> `optional` **conciseDescription**: `string`

A concise textual description for this trade product, such as the description used on a shelf or printed on a receipt.

#### See

https://vocabulary.uncefact.org/conciseDescription

***

### configurableIndicator?

> `optional` **configurableIndicator**: `boolean`

The indication of whether or not this trade product is configurable.

#### See

https://vocabulary.uncefact.org/configurableIndicator

***

### consumerAgeDescription?

> `optional` **consumerAgeDescription**: `string`

A consumer age description, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/consumerAgeDescription

***

### consumerGenderCode?

> `optional` **consumerGenderCode**: `string`

The code specifying the gender of the consumer of this trade product.

#### See

https://vocabulary.uncefact.org/consumerGenderCode

***

### consumerGenderDescription?

> `optional` **consumerGenderDescription**: `string`

A consumer gender description, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/consumerGenderDescription

***

### contentUnitQuantity?

> `optional` **contentUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of content units of this trade product.

#### See

https://vocabulary.uncefact.org/contentUnitQuantity

***

### contentVariableMeasureIndicator?

> `optional` **contentVariableMeasureIndicator**: `boolean`

The indication of whether or not instances of this trade product have a content variable measure, such as weight, length
or volume.

#### See

https://vocabulary.uncefact.org/contentVariableMeasureIndicator

***

### criticalityTypeCode?

> `optional` **criticalityTypeCode**: `string`

The code specifying the criticality type of this trade product.

#### See

https://vocabulary.uncefact.org/criticalityTypeCode

***

### customerAssignedId?

> `optional` **customerAssignedId**: `string`

A unique customer assigned identifier for this trade product.

#### See

https://vocabulary.uncefact.org/customerAssignedId

***

### customsStatisticalClassificationCode?

> `optional` **customsStatisticalClassificationCode**: `string`

The code specifying the customs statistical classification for this trade product.

#### See

https://vocabulary.uncefact.org/customsStatisticalClassificationCode

***

### dNAMarkerId?

> `optional` **dNAMarkerId**: `string`

The DNA marker identifier of this trade product.

#### See

https://vocabulary.uncefact.org/dNAMarkerId

***

### description?

> `optional` **description**: `string`

A textual description for this trade product.

#### See

https://vocabulary.uncefact.org/description

***

### descriptionCode?

> `optional` **descriptionCode**: `string`

The code specifying the description of this trade product.

#### See

https://vocabulary.uncefact.org/descriptionCode

***

### designatedClassification?

> `optional` **designatedClassification**: [`IUneceClassification`](IUneceClassification.md)[]

A product classification designated for this trade product.

#### See

https://vocabulary.uncefact.org/designatedClassification

***

### designation?

> `optional` **designation**: `string`

A designation, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/designation

***

### digitalPlatformAssignedId?

> `optional` **digitalPlatformAssignedId**: `string`

The digital platform assigned identifier for this trade product.

#### See

https://vocabulary.uncefact.org/digitalPlatformAssignedId

***

### distributorParty?

> `optional` **distributorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A distributor trade party for this trade product.

#### See

https://vocabulary.uncefact.org/distributorParty

***

### drainedNetWeightMeasure?

> `optional` **drainedNetWeightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the drained net weight (mass) of this trade product.

#### See

https://vocabulary.uncefact.org/drainedNetWeightMeasure

***

### ePCId?

> `optional` **ePCId**: `string`

The EPC (Electronic Product Code) identifier of this trade product.

#### See

https://vocabulary.uncefact.org/ePCId

***

### endItemName?

> `optional` **endItemName**: `string`

An end item name, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/endItemName

***

### endItemTypeCode?

> `optional` **endItemTypeCode**: `string`

A code specifying a type of end item for this trade product.

#### See

https://vocabulary.uncefact.org/endItemTypeCode

***

### endUseProductGroup?

> `optional` **endUseProductGroup**: [`IUneceProductGroup`](IUneceProductGroup.md)[]

An end use product group for this trade product.

#### See

https://vocabulary.uncefact.org/endUseProductGroup

***

### endUserParty?

> `optional` **endUserParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

An end user party for this trade product.

#### See

https://vocabulary.uncefact.org/endUserParty

***

### exportIndicator?

> `optional` **exportIndicator**: `boolean`

The indication of whether or not this trade product is for export.

#### See

https://vocabulary.uncefact.org/exportIndicator

***

### fIIGCriticalityTypeCode?

> `optional` **fIIGCriticalityTypeCode**: `string`

A code specifying the Federal Item Identification Guide (FIIG) criticality type of this trade product.

#### See

https://vocabulary.uncefact.org/fIIGCriticalityTypeCode

***

### fSCId?

> `optional` **fSCId**: `string`

A unique Federal Supply Class (FSC) identifier for this trade product.

#### See

https://vocabulary.uncefact.org/fSCId

***

### finalAssemblyCountry?

> `optional` **finalAssemblyCountry**: [`IUneceCountry`](IUneceCountry.md)[]

A final assembly country for this trade product.

#### See

https://vocabulary.uncefact.org/finalAssemblyCountry

***

### fromDeliveryLifeSpanMeasure?

> `optional` **fromDeliveryLifeSpanMeasure**: [`IUneceDurationUnitMeasureType`](IUneceDurationUnitMeasureType.md)[]

The measure of the life span of this trade product from date of delivery.

#### See

https://vocabulary.uncefact.org/fromDeliveryLifeSpanMeasure

***

### fromOpeningLifeSpanMeasure?

> `optional` **fromOpeningLifeSpanMeasure**: [`IUneceDurationUnitMeasureType`](IUneceDurationUnitMeasureType.md)[]

The measure of the life span of this trade product from date of opening.

#### See

https://vocabulary.uncefact.org/fromOpeningLifeSpanMeasure

***

### fromProductionLifeSpanMeasure?

> `optional` **fromProductionLifeSpanMeasure**: [`IUneceDurationUnitMeasureType`](IUneceDurationUnitMeasureType.md)[]

The measure of the life span of this trade product from date of production.

#### See

https://vocabulary.uncefact.org/fromProductionLifeSpanMeasure

***

### functionDescription?

> `optional` **functionDescription**: `string`

A textual description of a function for this trade product.

#### See

https://vocabulary.uncefact.org/functionDescription

***

### functionTypeCode?

> `optional` **functionTypeCode**: `string`

The code specifying the type of function for this trade product.

#### See

https://vocabulary.uncefact.org/functionTypeCode

***

### gTINId?

> `optional` **gTINId**: `string`

A Global Trade Item Number (GTIN) identifier for this trade product.

#### See

https://vocabulary.uncefact.org/gTINId

***

### geneticModificationExtentCode?

> `optional` **geneticModificationExtentCode**: `string`

The code specifying the extent of a genetic modification to this trade product.

#### See

https://vocabulary.uncefact.org/geneticModificationExtentCode

***

### globalExtensionId?

> `optional` **globalExtensionId**: `string`

A global extension identifier for this trade product, such as a prefix or a suffix.

#### See

https://vocabulary.uncefact.org/globalExtensionId

***

### globalId?

> `optional` **globalId**: `string`

A unique global identifier for this trade product.

#### See

https://vocabulary.uncefact.org/globalId

***

### grossVolumeMeasure?

> `optional` **grossVolumeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

A measure of the gross volume for this trade product.

#### See

https://vocabulary.uncefact.org/grossVolumeMeasure

***

### grossWeightMeasure?

> `optional` **grossWeightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the gross weight (mass) of this trade product.

#### See

https://vocabulary.uncefact.org/grossWeightMeasure

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this trade product.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedProduct?

> `optional` **includedProduct**: [`IUneceProduct`](IUneceProduct.md)[]

An included product referenced from this trade product.

#### See

https://vocabulary.uncefact.org/includedProduct

***

### includedProductContentUnitQuantity?

> `optional` **includedProductContentUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of content units of products included in this trade product.

#### See

https://vocabulary.uncefact.org/includedProductContentUnitQuantity

***

### includedProductTypeQuantity?

> `optional` **includedProductTypeQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of different product types included at the next lower level in this trade product.

#### See

https://vocabulary.uncefact.org/includedProductTypeQuantity

***

### individualProductInstance?

> `optional` **individualProductInstance**: [`IUneceProductInstance`](IUneceProductInstance.md)[]

An individual instance of this trade product.

#### See

https://vocabulary.uncefact.org/individualProductInstance

***

### industryAssignedId?

> `optional` **industryAssignedId**: `string`

A unique industry assigned identifier for this product.

#### See

https://vocabulary.uncefact.org/industryAssignedId

***

### informationNote?

> `optional` **informationNote**: [`IUneceNote`](IUneceNote.md)[]

An information note for this trade product.

#### See

https://vocabulary.uncefact.org/informationNote

***

### innerPackContentUnitQuantity?

> `optional` **innerPackContentUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of content units in an inner pack of this trade product.

#### See

https://vocabulary.uncefact.org/innerPackContentUnitQuantity

***

### innerPackQuantity?

> `optional` **innerPackQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of inner packs of this trade product.

#### See

https://vocabulary.uncefact.org/innerPackQuantity

***

### inspectionReferenceDocument?

> `optional` **inspectionReferenceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced inspection document for this trade product.

#### See

https://vocabulary.uncefact.org/inspectionReferenceDocument

***

### intendedUse?

> `optional` **intendedUse**: `string`

An intended use, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/intendedUse

***

### latestProductDataChangeDateTime?

> `optional` **latestProductDataChangeDateTime**: `string`

The formatted date, time, date time, or other date time value of the latest change in the product data for this trade
product.

#### See

https://vocabulary.uncefact.org/latestProductDataChangeDateTime

***

### legalRightsOwnerParty?

> `optional` **legalRightsOwnerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party that owns the legal rights for this trade product.

#### See

https://vocabulary.uncefact.org/legalRightsOwnerParty

***

### lifeCycleStageCode?

> `optional` **lifeCycleStageCode**: `string`

The code specifying the life cycle stage for this trade product.

#### See

https://vocabulary.uncefact.org/lifeCycleStageCode

***

### line?

> `optional` **line**: `string`

A product line, such as a fashion product line, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/line

***

### linearDimension?

> `optional` **linearDimension**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)[]

Linear spatial dimensions of this trade product.

#### See

https://vocabulary.uncefact.org/linearDimension

***

### mSDSReferenceDocument?

> `optional` **mSDSReferenceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A Material Safety Data Sheet (MSDS) document referenced for this product.

#### See

https://vocabulary.uncefact.org/mSDSReferenceDocument

***

### mSRPPrice?

> `optional` **mSRPPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)[]

The MSRP (Manufacturer Suggested Retail Price) for this trade product.

#### See

https://vocabulary.uncefact.org/mSRPPrice

***

### manufactureCountry?

> `optional` **manufactureCountry**: [`IUneceCountry`](IUneceCountry.md)

The country of manufacture of this trade product.

#### See

https://vocabulary.uncefact.org/manufactureCountry

***

### manufacturerAssignedId?

> `optional` **manufacturerAssignedId**: `string`

A unique manufacturer assigned identifier for this trade product.

#### See

https://vocabulary.uncefact.org/manufacturerAssignedId

***

### manufacturerParty?

> `optional` **manufacturerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A manufacturer party for this trade product.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### markedSerialNumberIndicator?

> `optional` **markedSerialNumberIndicator**: `boolean`

The indication of whether or not this trade product is marked with a serial number.

#### See

https://vocabulary.uncefact.org/markedSerialNumberIndicator

***

### marketingCampaignReferenceDocument?

> `optional` **marketingCampaignReferenceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced marketing campaign document for this trade product.

#### See

https://vocabulary.uncefact.org/marketingCampaignReferenceDocument

***

### marketingDescription?

> `optional` **marketingDescription**: `string`

A marketing description, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/marketingDescription

***

### marketingFeature?

> `optional` **marketingFeature**: [`IUneceTradeProductFeature`](IUneceTradeProductFeature.md)[]

A marketing feature of this trade product.

#### See

https://vocabulary.uncefact.org/marketingFeature

***

### maximumLinearDimension?

> `optional` **maximumLinearDimension**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)[]

Maximum linear spatial dimensions of this trade product.

#### See

https://vocabulary.uncefact.org/maximumLinearDimension

***

### minimumLinearDimension?

> `optional` **minimumLinearDimension**: [`IUneceSpatialDimension`](IUneceSpatialDimension.md)[]

Minimum linear spatial dimensions of this trade product.

#### See

https://vocabulary.uncefact.org/minimumLinearDimension

***

### modelId?

> `optional` **modelId**: `string`

A unique model identifier for this trade product.

#### See

https://vocabulary.uncefact.org/modelId

***

### modelName?

> `optional` **modelName**: `string`

The model name, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/modelName

***

### nIINId?

> `optional` **nIINId**: `string`

A unique National Item Identification Number (NIIN) identifier for this trade product.

#### See

https://vocabulary.uncefact.org/nIINId

***

### nSNId?

> `optional` **nSNId**: `string`

A unique National Stock Number (NSN) identifier for this trade product.

#### See

https://vocabulary.uncefact.org/nSNId

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/name

***

### netVolumeMeasure?

> `optional` **netVolumeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

A measure of a net volume for this trade product.

#### See

https://vocabulary.uncefact.org/netVolumeMeasure

***

### netWeightMeasure?

> `optional` **netWeightMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

A measure of the net weight (mass) of this trade product.

#### See

https://vocabulary.uncefact.org/netWeightMeasure

***

### originCountry?

> `optional` **originCountry**: [`IUneceCountry`](IUneceCountry.md)[]

A country of origin for this trade product.

#### See

https://vocabulary.uncefact.org/originCountry

***

### originLocation?

> `optional` **originLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A location of origin for this trade product.

#### See

https://vocabulary.uncefact.org/originLocation

***

### physicalFormDescription?

> `optional` **physicalFormDescription**: `string`

A textual description of the physical form of this trade product.

#### See

https://vocabulary.uncefact.org/physicalFormDescription

***

### pieceIndicator?

> `optional` **pieceIndicator**: `boolean`

The indication of whether or not this trade product is a piece, such as a piece of fabric.

#### See

https://vocabulary.uncefact.org/pieceIndicator

***

### prePackagedIndicator?

> `optional` **prePackagedIndicator**: `boolean`

The indication of whether or not this trade product is pre-packaged.

#### See

https://vocabulary.uncefact.org/prePackagedIndicator

***

### presentationBinaryFile?

> `optional` **presentationBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file presentation specified for this trade product.

#### See

https://vocabulary.uncefact.org/presentationBinaryFile

***

### preservationAppliedMethod?

> `optional` **preservationAppliedMethod**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A preservation method applied to this trade product.

#### See

https://vocabulary.uncefact.org/preservationAppliedMethod

***

### printDesignDescription?

> `optional` **printDesignDescription**: `string`

A textual description of the print design for this trade product.

#### See

https://vocabulary.uncefact.org/printDesignDescription

***

### printDesignId?

> `optional` **printDesignId**: `string`

An identifier of the print design for this trade product.

#### See

https://vocabulary.uncefact.org/printDesignId

***

### priorityCode?

> `optional` **priorityCode**: `string`

A code specifying a priority for this trade product.

#### See

https://vocabulary.uncefact.org/priorityCode

***

### productGroupId?

> `optional` **productGroupId**: `string`

A unique identifier for a product group for this trade product.

#### See

https://vocabulary.uncefact.org/productGroupId

***

### productionDiscontinuedDateTime?

> `optional` **productionDiscontinuedDateTime**: `string`

The date, time, date time, or other date time value of the discontinuation of the production of this trade product.

#### See

https://vocabulary.uncefact.org/productionDiscontinuedDateTime

***

### productionLeadTimeMeasure?

> `optional` **productionLeadTimeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the production lead time for this trade product.

#### See

https://vocabulary.uncefact.org/productionLeadTimeMeasure

***

### promotionalVariantId?

> `optional` **promotionalVariantId**: `string`

The promotional variant identifier for this trade product.

#### See

https://vocabulary.uncefact.org/promotionalVariantId

***

### qualityLevelCode?

> `optional` **qualityLevelCode**: `string`

The code specifying the quality level for this trade product.

#### See

https://vocabulary.uncefact.org/qualityLevelCode

***

### qualityParameter?

> `optional` **qualityParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A quality parameter specified for this trade product.

#### See

https://vocabulary.uncefact.org/qualityParameter

***

### recyclableIndicator?

> `optional` **recyclableIndicator**: `boolean`

The indication of whether or not this trade product is recyclable.

#### See

https://vocabulary.uncefact.org/recyclableIndicator

***

### recycledMaterialIndicator?

> `optional` **recycledMaterialIndicator**: `boolean`

The indication of whether or not this trade product is made of recycled material.

#### See

https://vocabulary.uncefact.org/recycledMaterialIndicator

***

### recycledMaterialPercent?

> `optional` **recycledMaterialPercent**: `string`

The percentage of recycled material in this trade product.

#### See

https://vocabulary.uncefact.org/recycledMaterialPercent

***

### recyclingTypeCode?

> `optional` **recyclingTypeCode**: `string`

The code specifying the type of recycling for this trade product.

#### See

https://vocabulary.uncefact.org/recyclingTypeCode

***

### regulationConformityId?

> `optional` **regulationConformityId**: `string`

An identifier assigned to indicate conformity with a regulation or standard for this trade product, such as "CE" which
declares that the product conforms with the essential requirements of the applicable EC directives.

#### See

https://vocabulary.uncefact.org/regulationConformityId

***

### rejectionReasonCode?

> `optional` **rejectionReasonCode**: `string`

A code specifying a rejection reason for this trade product.

#### See

https://vocabulary.uncefact.org/rejectionReasonCode

***

### relatedAnimal?

> `optional` **relatedAnimal**: [`IUneceTTAnimal`](IUneceTTAnimal.md)[]

A TT (Track and Trace) animal, such as one kept or raised on a farm or ranch, related to this trade product.

#### See

https://vocabulary.uncefact.org/relatedAnimal

***

### relatedLocation?

> `optional` **relatedLocation**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location related to this trade product.

#### See

https://vocabulary.uncefact.org/relatedLocation

***

### relatedPackage?

> `optional` **relatedPackage**: [`IUnecePackage`](IUnecePackage.md)[]

A logistics package related to this trade product.

#### See

https://vocabulary.uncefact.org/relatedPackage

***

### relatedTradeTransaction?

> `optional` **relatedTradeTransaction**: [`IUneceSupplyChainTradeTransaction`](IUneceSupplyChainTradeTransaction.md)[]

A supply chain trade transaction related to this trade product.

#### See

https://vocabulary.uncefact.org/relatedTradeTransaction

***

### repairLevelTypeCode?

> `optional` **repairLevelTypeCode**: `string`

A code specifying a repair level type for this trade product.

#### See

https://vocabulary.uncefact.org/repairLevelTypeCode

***

### responsibleParty?

> `optional` **responsibleParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party responsible for this trade product.

#### See

https://vocabulary.uncefact.org/responsibleParty

***

### responsibleTradeParty?

> `optional` **responsibleTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party responsible for this trade product.

#### See

https://vocabulary.uncefact.org/responsibleTradeParty

***

### reusableIndicator?

> `optional` **reusableIndicator**: `boolean`

The indication of whether or not this trade product is reusable.

#### See

https://vocabulary.uncefact.org/reusableIndicator

***

### salesCountry?

> `optional` **salesCountry**: [`IUneceCountry`](IUneceCountry.md)[]

A sales country for this trade product.

#### See

https://vocabulary.uncefact.org/salesCountry

***

### scientificName?

> `optional` **scientificName**: `string`

A scientific name, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/scientificName

***

### seasonCode?

> `optional` **seasonCode**: `string`

A code specifying a season for this trade product.

#### See

https://vocabulary.uncefact.org/seasonCode

***

### seasonDescription?

> `optional` **seasonDescription**: `string`

A season description, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/seasonDescription

***

### sectionCode?

> `optional` **sectionCode**: `string`

The code specifying the section of this trade product.

#### See

https://vocabulary.uncefact.org/sectionCode

***

### securityInformationNote?

> `optional` **securityInformationNote**: [`IUneceNote`](IUneceNote.md)

A security information note for this trade product.

#### See

https://vocabulary.uncefact.org/securityInformationNote

***

### sellerAssignedId?

> `optional` **sellerAssignedId**: `string`

The unique seller assigned identifier for this trade product.

#### See

https://vocabulary.uncefact.org/sellerAssignedId

***

### sizeCode?

> `optional` **sizeCode**: `string`

The code specifying the size of this trade product.

#### See

https://vocabulary.uncefact.org/sizeCode

***

### sizeDescription?

> `optional` **sizeDescription**: `string`

A size description, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/sizeDescription

***

### speciesCode?

> `optional` **speciesCode**: `string`

The code specifying the species, such as for a plant or animal, of this trade product.

#### See

https://vocabulary.uncefact.org/speciesCode

***

### specifiedAssertion?

> `optional` **specifiedAssertion**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion specified for this trade product.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### specifiedColour?

> `optional` **specifiedColour**: [`IUneceColour`](IUneceColour.md)[]

A colour specified for this trade product.

#### See

https://vocabulary.uncefact.org/specifiedColour

***

### specifiedFacility?

> `optional` **specifiedFacility**: [`IUneceProductionFacility`](IUneceProductionFacility.md)[]

A production facility specified for this trade product.

#### See

https://vocabulary.uncefact.org/specifiedFacility

***

### specifiedLabel?

> `optional` **specifiedLabel**: [`IUneceProductLabel`](IUneceProductLabel.md)[]

A product label specified for this trade product.

#### See

https://vocabulary.uncefact.org/specifiedLabel

***

### specifiedPicture?

> `optional` **specifiedPicture**: [`IUnecePicture`](IUnecePicture.md)[]

A photographic picture specified for this trade product.

#### See

https://vocabulary.uncefact.org/specifiedPicture

***

### specifiedPrint?

> `optional` **specifiedPrint**: [`IUnecePrint`](IUnecePrint.md)[]

A product print specified for this trade product.

#### See

https://vocabulary.uncefact.org/specifiedPrint

***

### specifiedProductCertificate?

> `optional` **specifiedProductCertificate**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate specified for this trade product.

#### See

https://vocabulary.uncefact.org/specifiedProductCertificate

***

### specifiedProductGroup?

> `optional` **specifiedProductGroup**: [`IUneceProductGroup`](IUneceProductGroup.md)[]

A product group specified for this trade product.

#### See

https://vocabulary.uncefact.org/specifiedProductGroup

***

### specifiedProductLabel?

> `optional` **specifiedProductLabel**: [`IUneceProductLabel`](IUneceProductLabel.md)[]

A product label specified for this trade product.

#### See

https://vocabulary.uncefact.org/specifiedProductLabel

***

### specifiedSupplyChainEvent?

> `optional` **specifiedSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain event specified for this trade product.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### specifiedSupplyPlan?

> `optional` **specifiedSupplyPlan**: [`IUneceSupplyPlan`](IUneceSupplyPlan.md)[]

The specification of the delivery quantities and delivery date/time values in a supply plan for this trade product.

#### See

https://vocabulary.uncefact.org/specifiedSupplyPlan

***

### statusCode?

> `optional` **statusCode**: `string`

A code specifying a status for this trade product.

#### See

https://vocabulary.uncefact.org/statusCode

***

### storageInformationNote?

> `optional` **storageInformationNote**: [`IUneceNote`](IUneceNote.md)

A storage information note for this trade product.

#### See

https://vocabulary.uncefact.org/storageInformationNote

***

### subBrandName?

> `optional` **subBrandName**: `string`

The sub-brand name, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/subBrandName

***

### subcontractorParty?

> `optional` **subcontractorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A subcontractor party for this trade product.

#### See

https://vocabulary.uncefact.org/subcontractorParty

***

### subordinateTypeCode?

> `optional` **subordinateTypeCode**: `string`

The code specifying the subordinate type of trade product.

#### See

https://vocabulary.uncefact.org/subordinateTypeCode

***

### subordinateTypeDescription?

> `optional` **subordinateTypeDescription**: `string`

A textual description of the subordinate type for this trade product.

#### See

https://vocabulary.uncefact.org/subordinateTypeDescription

***

### substituteProduct?

> `optional` **substituteProduct**: [`IUneceProduct`](IUneceProduct.md)[]

A referenced product that may substitute for this trade product.

#### See

https://vocabulary.uncefact.org/substituteProduct

***

### substitutedProduct?

> `optional` **substitutedProduct**: [`IUneceProduct`](IUneceProduct.md)

A referenced product that is substituted by this trade product.

#### See

https://vocabulary.uncefact.org/substitutedProduct

***

### suppliedFromCountry?

> `optional` **suppliedFromCountry**: [`IUneceCountry`](IUneceCountry.md)[]

A country of supply for this trade product.

#### See

https://vocabulary.uncefact.org/suppliedFromCountry

***

### trackingSystemId?

> `optional` **trackingSystemId**: `string`

An identifier for a tracking system of this trade product.

#### See

https://vocabulary.uncefact.org/trackingSystemId

***

### tradeName?

> `optional` **tradeName**: `string`

A trade name, expressed as text, for this trade product.

#### See

https://vocabulary.uncefact.org/tradeName

***

### transportInformationNote?

> `optional` **transportInformationNote**: [`IUneceNote`](IUneceNote.md)

A transport information note for this trade product.

#### See

https://vocabulary.uncefact.org/transportInformationNote

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying the type of trade product.

#### See

https://vocabulary.uncefact.org/typeCode

***

### typeDescription?

> `optional` **typeDescription**: `string`

A textual description of the type for this trade product.

#### See

https://vocabulary.uncefact.org/typeDescription

***

### uRIId?

> `optional` **uRIId**: `string`

The URI (Uniform Resource Identifier), such as a web or an email address, for this trade product.

#### See

https://vocabulary.uncefact.org/uRIId

***

### ultimateCustomerAssignedExtensionId?

> `optional` **ultimateCustomerAssignedExtensionId**: `string`

An ultimate customer assigned extension identifier for this trade product.

#### See

https://vocabulary.uncefact.org/ultimateCustomerAssignedExtensionId

***

### unitTypeCode?

> `optional` **unitTypeCode**: `string`

A code specifying a type of unit for this trade product.

#### See

https://vocabulary.uncefact.org/unitTypeCode

***

### usageInformationNote?

> `optional` **usageInformationNote**: [`IUneceNote`](IUneceNote.md)[]

A usage information note for this trade product.

#### See

https://vocabulary.uncefact.org/usageInformationNote

***

### useDescription?

> `optional` **useDescription**: `string`

A textual description of a use of this trade product.

#### See

https://vocabulary.uncefact.org/useDescription

***

### variableMeasureIndicator?

> `optional` **variableMeasureIndicator**: `boolean`

The indication of whether or not instances of this trade product have a variable measure, such as weight, length or
volume.

#### See

https://vocabulary.uncefact.org/variableMeasureIndicator

***

### variantDescription?

> `optional` **variantDescription**: `string`

A textual description of a variant of this trade product.

#### See

https://vocabulary.uncefact.org/variantDescription

***

### variantId?

> `optional` **variantId**: `string`

A variant identifier of this trade product.

#### See

https://vocabulary.uncefact.org/variantId
