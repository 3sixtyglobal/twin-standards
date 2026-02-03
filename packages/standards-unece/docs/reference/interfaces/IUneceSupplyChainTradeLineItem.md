# Interface: IUneceSupplyChainTradeLineItem

A collection of information specific to an item being used or reported on for supply chain trade purposes.

## See

https://vocabulary.uncefact.org/SupplyChainTradeLineItem

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

> **type**: `"SupplyChainTradeLineItem"`

JSON-LD Type.

***

### accessoryApplicableProduct?

> `optional` **accessoryApplicableProduct**: [`IUneceProduct`](IUneceProduct.md)

A referenced accessory product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/accessoryApplicableProduct

***

### additionalApplicableProduct?

> `optional` **additionalApplicableProduct**: [`IUneceProduct`](IUneceProduct.md)

A referenced product additionally applicable with this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/additionalApplicableProduct

***

### additionalId?

> `optional` **additionalId**: `string`

An additional unique identifier for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/additionalId

***

### additionalInformationNote?

> `optional` **additionalInformationNote**: [`IUneceNote`](IUneceNote.md)

A note providing additional information for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/additionalInformationNote

***

### applicableBatch?

> `optional` **applicableBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)

A product batch applicable to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/applicableBatch

***

### applicableMaterial?

> `optional` **applicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)

Material applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/applicableMaterial

***

### appliedProcess?

> `optional` **appliedProcess**: [`IUneceProductHandlingProcess`](IUneceProductHandlingProcess.md)

A product handling process applied to this supply chain trade line item, such as manufacturing, treatment or storage.

#### See

https://vocabulary.uncefact.org/appliedProcess

***

### assertedAuthentication?

> `optional` **assertedAuthentication**: [`IUneceAuthentication`](IUneceAuthentication.md)

A document authentication asserted for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/assertedAuthentication

***

### associatedDocumentLineDocument?

> `optional` **associatedDocumentLineDocument**: [`IUneceDocumentLineDocument`](IUneceDocumentLineDocument.md)

The document line associated with this trade line item.

#### See

https://vocabulary.uncefact.org/associatedDocumentLineDocument

***

### associatedTransportEquipment?

> `optional` **associatedTransportEquipment**: [`IUneceLogisticsTransportEquipment`](IUneceLogisticsTransportEquipment.md)

A piece of transport equipment associated with this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/associatedTransportEquipment

***

### barcodeId?

> `optional` **barcodeId**: `string`

A unique barcode identifier for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/barcodeId

***

### complementaryApplicableProduct?

> `optional` **complementaryApplicableProduct**: [`IUneceProduct`](IUneceProduct.md)

A referenced complementary product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/complementaryApplicableProduct

***

### componentApplicableProduct?

> `optional` **componentApplicableProduct**: [`IUneceProduct`](IUneceProduct.md)

A referenced component product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/componentApplicableProduct

***

### declaredValueForCustomsAmount?

> `optional` **declaredValueForCustomsAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A monetary value declared for customs purposes for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/declaredValueForCustomsAmount

***

### descriptionCode?

> `optional` **descriptionCode**: `string`

The code specifying a description of this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/descriptionCode

***

### generalInformationDescription?

> `optional` **generalInformationDescription**: `string`

A textual description providing general information for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/generalInformationDescription

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedSubordinateTradeLineItem?

> `optional` **includedSubordinateTradeLineItem**: [`IUneceSubordinateTradeLineItem`](IUneceSubordinateTradeLineItem.md)

A subordinate trade line item included in this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/includedSubordinateTradeLineItem

***

### includedWithinConsignmentItem?

> `optional` **includedWithinConsignmentItem**: [`IUneceConsignmentItem`](IUneceConsignmentItem.md)

The consignment item within which this supply chain trade line item is included.

#### See

https://vocabulary.uncefact.org/includedWithinConsignmentItem

***

### invoiceAssociatedDocument?

> `optional` **invoiceAssociatedDocument**: [`IUneceDocument`](IUneceDocument.md)

An invoice document associated to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/invoiceAssociatedDocument

***

### package?

> `optional` **package**: [`IUnecePackage`](IUnecePackage.md)

A logistics package referenced in this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/package

***

### physicalPackage?

> `optional` **physicalPackage**: [`IUnecePackage`](IUnecePackage.md)

A physical logistics package for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/physicalPackage

***

### referenceDocument?

> `optional` **referenceDocument**: [`IUneceDocument`](IUneceDocument.md)

A document referenced for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/referenceDocument

***

### requiredApplicableProduct?

> `optional` **requiredApplicableProduct**: [`IUneceProduct`](IUneceProduct.md)

A required product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/requiredApplicableProduct

***

### requisitionerSpecifiedProduct?

> `optional` **requisitionerSpecifiedProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)

The product specified by the requisitioner for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/requisitionerSpecifiedProduct

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

A sequence number for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedLineTradeAgreement?

> `optional` **specifiedLineTradeAgreement**: [`IUneceLineTradeAgreement`](IUneceLineTradeAgreement.md)

The line trade agreement specified for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/specifiedLineTradeAgreement

***

### specifiedLineTradeDelivery?

> `optional` **specifiedLineTradeDelivery**: [`IUneceLineTradeDelivery`](IUneceLineTradeDelivery.md)

A line trade delivery specified for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/specifiedLineTradeDelivery

***

### specifiedLineTradeSettlement?

> `optional` **specifiedLineTradeSettlement**: [`IUneceLineTradeSettlement`](IUneceLineTradeSettlement.md)

A line trade settlement specified for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/specifiedLineTradeSettlement

***

### specifiedProduction?

> `optional` **specifiedProduction**: [`IUneceProduction`](IUneceProduction.md)

A production of goods specified for this supply chain trade line Item.

#### See

https://vocabulary.uncefact.org/specifiedProduction

***

### specifiedTradeProduct?

> `optional` **specifiedTradeProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)

A product specified for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/specifiedTradeProduct

***

### subordinateLineIndicator?

> `optional` **subordinateLineIndicator**: `boolean`

The indication of whether or not this supply chain trade line item is a subordinate trade line item.

#### See

https://vocabulary.uncefact.org/subordinateLineIndicator

***

### subordinateTradeLineItem?

> `optional` **subordinateTradeLineItem**: [`IUneceSubordinateTradeLineItem`](IUneceSubordinateTradeLineItem.md)

A trade line item subordinate to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/subordinateTradeLineItem

***

### substituteApplicableBatch?

> `optional` **substituteApplicableBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)

A substitute product batch applicable to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substituteApplicableBatch

***

### substituteApplicableMaterial?

> `optional` **substituteApplicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)

Substitute material applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substituteApplicableMaterial

***

### substituteApplicableProduct?

> `optional` **substituteApplicableProduct**: [`IUneceProduct`](IUneceProduct.md)

A referenced substitute product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substituteApplicableProduct

***

### substitutedApplicableBatch?

> `optional` **substitutedApplicableBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)

A substituted product batch applicable to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substitutedApplicableBatch

***

### substitutedApplicableMaterial?

> `optional` **substitutedApplicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)

Substituted material applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substitutedApplicableMaterial

***

### substitutedProduct?

> `optional` **substitutedProduct**: [`IUneceProduct`](IUneceProduct.md)

A referenced product substituted for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substitutedProduct

***

### supplyChainTradeLineItemSpecialConditionCode?

> `optional` **supplyChainTradeLineItemSpecialConditionCode**: `string`

A code specifying a special condition for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/supplyChainTradeLineItemSpecialConditionCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of supply chain trade line item.

#### See

https://vocabulary.uncefact.org/typeCode

***

### typeExtensionCode?

> `optional` **typeExtensionCode**: `string`

The code used as an extension to the type code for further specifying a type of supply chain trade line item.

#### See

https://vocabulary.uncefact.org/typeExtensionCode
