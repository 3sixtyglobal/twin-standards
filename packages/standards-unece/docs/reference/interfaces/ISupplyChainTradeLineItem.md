# Interface: ISupplyChainTradeLineItem

A collection of information specific to an item being used or reported on for supply chain trade purposes.

## See

https://vocabulary.uncefact.org/SupplyChainTradeLineItem

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

> **type**: `"SupplyChainTradeLineItem"`

JSON-LD Type.

***

### accessoryApplicableProduct?

> `optional` **accessoryApplicableProduct**: [`IProduct`](IProduct.md)[]

A referenced accessory product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/accessoryApplicableProduct

***

### additionalApplicableProduct?

> `optional` **additionalApplicableProduct**: [`IProduct`](IProduct.md)[]

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

> `optional` **additionalInformationNote**: [`INote`](INote.md)[]

A note providing additional information for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/additionalInformationNote

***

### applicableBatch?

> `optional` **applicableBatch**: [`IProductBatch`](IProductBatch.md)[]

A product batch applicable to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/applicableBatch

***

### applicableMaterial?

> `optional` **applicableMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Material applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/applicableMaterial

***

### appliedProcess?

> `optional` **appliedProcess**: [`IProductHandlingProcess`](IProductHandlingProcess.md)[]

A product handling process applied to this supply chain trade line item, such as manufacturing, treatment or storage.

#### See

https://vocabulary.uncefact.org/appliedProcess

***

### assertedAuthentication?

> `optional` **assertedAuthentication**: [`IAuthentication`](IAuthentication.md)[]

A document authentication asserted for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/assertedAuthentication

***

### associatedDocumentLineDocument?

> `optional` **associatedDocumentLineDocument**: [`IDocumentLineDocument`](IDocumentLineDocument.md)[]

The document line associated with this trade line item.

#### See

https://vocabulary.uncefact.org/associatedDocumentLineDocument

***

### associatedTransportEquipment?

> `optional` **associatedTransportEquipment**: [`ILogisticsTransportEquipment`](ILogisticsTransportEquipment.md)[]

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

> `optional` **complementaryApplicableProduct**: [`IProduct`](IProduct.md)[]

A referenced complementary product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/complementaryApplicableProduct

***

### componentApplicableProduct?

> `optional` **componentApplicableProduct**: [`IProduct`](IProduct.md)[]

A referenced component product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/componentApplicableProduct

***

### declaredValueForCustomsAmount?

> `optional` **declaredValueForCustomsAmount**: [`IAmountType`](IAmountType.md)[]

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

> `optional` **includedSubordinateTradeLineItem**: [`ISubordinateTradeLineItem`](ISubordinateTradeLineItem.md)[]

A subordinate trade line item included in this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/includedSubordinateTradeLineItem

***

### includedWithinConsignmentItem?

> `optional` **includedWithinConsignmentItem**: [`IConsignmentItem`](IConsignmentItem.md)

The consignment item within which this supply chain trade line item is included.

#### See

https://vocabulary.uncefact.org/includedWithinConsignmentItem

***

### invoiceAssociatedDocument?

> `optional` **invoiceAssociatedDocument**: [`IDocument`](IDocument.md)[]

An invoice document associated to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/invoiceAssociatedDocument

***

### package?

> `optional` **package**: [`IPackage`](IPackage.md)[]

A logistics package referenced in this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/package

***

### physicalPackage?

> `optional` **physicalPackage**: [`IPackage`](IPackage.md)[]

A physical logistics package for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/physicalPackage

***

### referenceDocument?

> `optional` **referenceDocument**: [`IDocument`](IDocument.md)[]

A document referenced for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/referenceDocument

***

### requiredApplicableProduct?

> `optional` **requiredApplicableProduct**: [`IProduct`](IProduct.md)[]

A required product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/requiredApplicableProduct

***

### requisitionerSpecifiedProduct?

> `optional` **requisitionerSpecifiedProduct**: [`ITradeProduct`](ITradeProduct.md)[]

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

> `optional` **specifiedLineTradeAgreement**: [`ILineTradeAgreement`](ILineTradeAgreement.md)[]

The line trade agreement specified for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/specifiedLineTradeAgreement

***

### specifiedLineTradeDelivery?

> `optional` **specifiedLineTradeDelivery**: [`ILineTradeDelivery`](ILineTradeDelivery.md)[]

A line trade delivery specified for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/specifiedLineTradeDelivery

***

### specifiedLineTradeSettlement?

> `optional` **specifiedLineTradeSettlement**: [`ILineTradeSettlement`](ILineTradeSettlement.md)[]

A line trade settlement specified for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/specifiedLineTradeSettlement

***

### specifiedProduction?

> `optional` **specifiedProduction**: [`IProduction`](IProduction.md)[]

A production of goods specified for this supply chain trade line Item.

#### See

https://vocabulary.uncefact.org/specifiedProduction

***

### specifiedTradeProduct?

> `optional` **specifiedTradeProduct**: [`ITradeProduct`](ITradeProduct.md)[]

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

> `optional` **subordinateTradeLineItem**: [`ISubordinateTradeLineItem`](ISubordinateTradeLineItem.md)[]

A trade line item subordinate to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/subordinateTradeLineItem

***

### substituteApplicableBatch?

> `optional` **substituteApplicableBatch**: [`IProductBatch`](IProductBatch.md)[]

A substitute product batch applicable to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substituteApplicableBatch

***

### substituteApplicableMaterial?

> `optional` **substituteApplicableMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Substitute material applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substituteApplicableMaterial

***

### substituteApplicableProduct?

> `optional` **substituteApplicableProduct**: [`IProduct`](IProduct.md)[]

A referenced substitute product applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substituteApplicableProduct

***

### substitutedApplicableBatch?

> `optional` **substitutedApplicableBatch**: [`IProductBatch`](IProductBatch.md)[]

A substituted product batch applicable to this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substitutedApplicableBatch

***

### substitutedApplicableMaterial?

> `optional` **substitutedApplicableMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Substituted material applicable for this supply chain trade line item.

#### See

https://vocabulary.uncefact.org/substitutedApplicableMaterial

***

### substitutedProduct?

> `optional` **substitutedProduct**: [`IProduct`](IProduct.md)

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
