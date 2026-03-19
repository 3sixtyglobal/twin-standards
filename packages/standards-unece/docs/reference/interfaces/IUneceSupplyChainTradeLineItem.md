# Interface: IUneceSupplyChainTradeLineItem

A collection of information specific to an item being used or reported on for supply chain trade purposes.

## See

https://vocabulary.uncefact.org/SupplyChainTradeLineItem

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SupplyChainTradeLineItem"`

JSON-LD Type.

***

### accessoryApplicableProduct? {#accessoryapplicableproduct}

> `optional` **accessoryApplicableProduct?**: [`IUneceProduct`](IUneceProduct.md)[]

A referenced accessory product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/accessoryApplicableProduct

***

### additionalApplicableProduct? {#additionalapplicableproduct}

> `optional` **additionalApplicableProduct?**: [`IUneceProduct`](IUneceProduct.md)[]

A referenced product additionally applicable with this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/additionalApplicableProduct

***

### additionalId? {#additionalid}

> `optional` **additionalId?**: `string` \| `IJsonLdValueObject`

An additional unique identifier for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/additionalId

***

### additionalInformationNote? {#additionalinformationnote}

> `optional` **additionalInformationNote?**: [`IUneceNote`](IUneceNote.md)[]

A note providing additional information for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/additionalInformationNote

***

### applicableBatch? {#applicablebatch}

> `optional` **applicableBatch?**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

A product batch applicable to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/applicableBatch

***

### applicableMaterial? {#applicablematerial}

> `optional` **applicableMaterial?**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Material applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/applicableMaterial

***

### appliedProcess? {#appliedprocess}

> `optional` **appliedProcess?**: [`IUneceProductHandlingProcess`](IUneceProductHandlingProcess.md)[]

A product handling process applied to this supply chain trade line item, such as manufacturing, treatment or storage.

#### See

https://vocabulary.uncefact.org/appliedProcess

***

### assertedAuthentication? {#assertedauthentication}

> `optional` **assertedAuthentication?**: [`IUneceAuthentication`](IUneceAuthentication.md)[]

A document authentication asserted for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/assertedAuthentication

***

### associatedDocumentLineDocument? {#associateddocumentlinedocument}

> `optional` **associatedDocumentLineDocument?**: [`IUneceDocumentLineDocument`](IUneceDocumentLineDocument.md)

The document line associated with this trade line item.

#### See

https://vocabulary.uncefact.org/associatedDocumentLineDocument

***

### associatedTransportEquipment? {#associatedtransportequipment}

> `optional` **associatedTransportEquipment?**: [`IUneceLogisticsTransportEquipment`](IUneceLogisticsTransportEquipment.md)[]

A piece of transport equipment associated with this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/associatedTransportEquipment

***

### barcodeId? {#barcodeid}

> `optional` **barcodeId?**: `string` \| `IJsonLdValueObject`

A unique barcode identifier for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/barcodeId

***

### complementaryApplicableProduct? {#complementaryapplicableproduct}

> `optional` **complementaryApplicableProduct?**: [`IUneceProduct`](IUneceProduct.md)[]

A referenced complementary product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/complementaryApplicableProduct

***

### componentApplicableProduct? {#componentapplicableproduct}

> `optional` **componentApplicableProduct?**: [`IUneceProduct`](IUneceProduct.md)[]

A referenced component product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/componentApplicableProduct

***

### declaredValueForCustomsAmount? {#declaredvalueforcustomsamount}

> `optional` **declaredValueForCustomsAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value declared for customs purposes for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/declaredValueForCustomsAmount

***

### descriptionCode? {#descriptioncode}

> `optional` **descriptionCode?**: `string`

The code specifying a description of this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/descriptionCode

***

### generalInformationDescription? {#generalinformationdescription}

> `optional` **generalInformationDescription?**: `string`

A textual description providing general information for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/generalInformationDescription

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedSubordinateTradeLineItem? {#includedsubordinatetradelineitem}

> `optional` **includedSubordinateTradeLineItem?**: [`IUneceSubordinateTradeLineItem`](IUneceSubordinateTradeLineItem.md)[]

A subordinate trade line item included in this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/includedSubordinateTradeLineItem

***

### includedWithinConsignmentItem? {#includedwithinconsignmentitem}

> `optional` **includedWithinConsignmentItem?**: [`IUneceConsignmentItem`](IUneceConsignmentItem.md)

The consignment item within which this supply chain trade line item is included.

#### See

https://vocabulary.uncefact.org/includedWithinConsignmentItem

***

### invoiceAssociatedDocument? {#invoiceassociateddocument}

> `optional` **invoiceAssociatedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

An invoice document associated to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/invoiceAssociatedDocument

***

### package? {#package}

> `optional` **package?**: [`IUnecePackage`](IUnecePackage.md)[]

A logistics package referenced in this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/package

***

### physicalPackage? {#physicalpackage}

> `optional` **physicalPackage?**: [`IUnecePackage`](IUnecePackage.md)[]

A physical logistics package for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/physicalPackage

***

### referenceDocument? {#referencedocument}

> `optional` **referenceDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A document referenced for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/referenceDocument

***

### requiredApplicableProduct? {#requiredapplicableproduct}

> `optional` **requiredApplicableProduct?**: [`IUneceProduct`](IUneceProduct.md)[]

A required product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/requiredApplicableProduct

***

### requisitionerSpecifiedProduct? {#requisitionerspecifiedproduct}

> `optional` **requisitionerSpecifiedProduct?**: [`IUneceTradeProduct`](IUneceTradeProduct.md)

The product specified by the requisitioner for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/requisitionerSpecifiedProduct

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric?**: `string`

A sequence number for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedLineTradeAgreement? {#specifiedlinetradeagreement}

> `optional` **specifiedLineTradeAgreement?**: [`IUneceLineTradeAgreement`](IUneceLineTradeAgreement.md)

The line trade agreement specified for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/specifiedLineTradeAgreement

***

### specifiedLineTradeDelivery? {#specifiedlinetradedelivery}

> `optional` **specifiedLineTradeDelivery?**: [`IUneceLineTradeDelivery`](IUneceLineTradeDelivery.md)[]

A line trade delivery specified for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/specifiedLineTradeDelivery

***

### specifiedLineTradeSettlement? {#specifiedlinetradesettlement}

> `optional` **specifiedLineTradeSettlement?**: [`IUneceLineTradeSettlement`](IUneceLineTradeSettlement.md)[]

A line trade settlement specified for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/specifiedLineTradeSettlement

***

### specifiedProduction? {#specifiedproduction}

> `optional` **specifiedProduction?**: [`IUneceProduction`](IUneceProduction.md)[]

A production of goods specified for this supply chain trade line Item.

#### See

https://vocabulary.uncefact.org/specifiedProduction

***

### specifiedTradeProduct? {#specifiedtradeproduct}

> `optional` **specifiedTradeProduct?**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

A product specified for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/specifiedTradeProduct

***

### subordinateLineIndicator? {#subordinatelineindicator}

> `optional` **subordinateLineIndicator?**: `boolean`

The indication of whether or not this supply chain trade line item is a subordinate trade line item.

#### See

https://vocabulary.uncefact.org/subordinateLineIndicator

***

### subordinateTradeLineItem? {#subordinatetradelineitem}

> `optional` **subordinateTradeLineItem?**: [`IUneceSubordinateTradeLineItem`](IUneceSubordinateTradeLineItem.md)[]

A trade line item subordinate to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/subordinateTradeLineItem

***

### substituteApplicableBatch? {#substituteapplicablebatch}

> `optional` **substituteApplicableBatch?**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

A substitute product batch applicable to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substituteApplicableBatch

***

### substituteApplicableMaterial? {#substituteapplicablematerial}

> `optional` **substituteApplicableMaterial?**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Substitute material applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substituteApplicableMaterial

***

### substituteApplicableProduct? {#substituteapplicableproduct}

> `optional` **substituteApplicableProduct?**: [`IUneceProduct`](IUneceProduct.md)[]

A referenced substitute product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substituteApplicableProduct

***

### substitutedApplicableBatch? {#substitutedapplicablebatch}

> `optional` **substitutedApplicableBatch?**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

A substituted product batch applicable to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substitutedApplicableBatch

***

### substitutedApplicableMaterial? {#substitutedapplicablematerial}

> `optional` **substitutedApplicableMaterial?**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Substituted material applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substitutedApplicableMaterial

***

### substitutedProduct? {#substitutedproduct}

> `optional` **substitutedProduct?**: [`IUneceProduct`](IUneceProduct.md)[]

A referenced product substituted for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substitutedProduct

***

### supplyChainTradeLineItemSpecialConditionCode? {#supplychaintradelineitemspecialconditioncode}

> `optional` **supplyChainTradeLineItemSpecialConditionCode?**: `string`

A code specifying a special condition for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/supplyChainTradeLineItemSpecialConditionCode

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of supply chain trade line item.

#### See

https://vocabulary.uncefact.org/typeCode

***

### typeExtensionCode? {#typeextensioncode}

> `optional` **typeExtensionCode?**: `string`

The code used as an extension to the type code for further specifying a type of supply chain trade line item.

#### See

https://vocabulary.uncefact.org/typeExtensionCode
