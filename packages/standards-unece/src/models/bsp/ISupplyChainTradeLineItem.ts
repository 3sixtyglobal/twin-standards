// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { IAuthentication } from "./IAuthentication.js";
import type { IConsignmentItem } from "./IConsignmentItem.js";
import type { IDocument } from "./IDocument.js";
import type { IDocumentLineDocument } from "./IDocumentLineDocument.js";
import type { ILineTradeAgreement } from "./ILineTradeAgreement.js";
import type { ILineTradeDelivery } from "./ILineTradeDelivery.js";
import type { ILineTradeSettlement } from "./ILineTradeSettlement.js";
import type { ILogisticsTransportEquipment } from "./ILogisticsTransportEquipment.js";
import type { INote } from "./INote.js";
import type { IPackage } from "./IPackage.js";
import type { IProduct } from "./IProduct.js";
import type { IProductBatch } from "./IProductBatch.js";
import type { IProductHandlingProcess } from "./IProductHandlingProcess.js";
import type { IProduction } from "./IProduction.js";
import type { ISpecifiedMaterial } from "./ISpecifiedMaterial.js";
import type { ISubordinateTradeLineItem } from "./ISubordinateTradeLineItem.js";
import type { ITradeProduct } from "./ITradeProduct.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of information specific to an item being used or reported on for supply chain trade purposes.
 * @see https://vocabulary.uncefact.org/SupplyChainTradeLineItem
 */
export interface ISupplyChainTradeLineItem extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SupplyChainTradeLineItem;

	/**
	 * A referenced accessory product applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/accessoryApplicableProduct
	 */
	accessoryApplicableProduct?: IProduct[];

	/**
	 * A referenced product additionally applicable with this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/additionalApplicableProduct
	 */
	additionalApplicableProduct?: IProduct[];

	/**
	 * An additional unique identifier for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/additionalId
	 */
	additionalId?: string;

	/**
	 * A note providing additional information for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/additionalInformationNote
	 */
	additionalInformationNote?: INote[];

	/**
	 * A product batch applicable to this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/applicableBatch
	 */
	applicableBatch?: IProductBatch[];

	/**
	 * Material applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/applicableMaterial
	 */
	applicableMaterial?: ISpecifiedMaterial[];

	/**
	 * A product handling process applied to this supply chain trade line item, such as manufacturing, treatment or storage.
	 * @see https://vocabulary.uncefact.org/appliedProcess
	 */
	appliedProcess?: IProductHandlingProcess[];

	/**
	 * A document authentication asserted for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/assertedAuthentication
	 */
	assertedAuthentication?: IAuthentication[];

	/**
	 * The document line associated with this trade line item.
	 * @see https://vocabulary.uncefact.org/associatedDocumentLineDocument
	 */
	associatedDocumentLineDocument?: IDocumentLineDocument[];

	/**
	 * A piece of transport equipment associated with this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/associatedTransportEquipment
	 */
	associatedTransportEquipment?: ILogisticsTransportEquipment[];

	/**
	 * A unique barcode identifier for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/barcodeId
	 */
	barcodeId?: string;

	/**
	 * A referenced complementary product applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/complementaryApplicableProduct
	 */
	complementaryApplicableProduct?: IProduct[];

	/**
	 * A referenced component product applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/componentApplicableProduct
	 */
	componentApplicableProduct?: IProduct[];

	/**
	 * A monetary value declared for customs purposes for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/declaredValueForCustomsAmount
	 */
	declaredValueForCustomsAmount?: IAmountType[];

	/**
	 * The code specifying a description of this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/descriptionCode
	 */
	descriptionCode?: string;

	/**
	 * A textual description providing general information for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/generalInformationDescription
	 */
	generalInformationDescription?: string;

	/**
	 * The unique identifier for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A subordinate trade line item included in this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/includedSubordinateTradeLineItem
	 */
	includedSubordinateTradeLineItem?: ISubordinateTradeLineItem[];

	/**
	 * The consignment item within which this supply chain trade line item is included.
	 * @see https://vocabulary.uncefact.org/includedWithinConsignmentItem
	 */
	includedWithinConsignmentItem?: IConsignmentItem;

	/**
	 * An invoice document associated to this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/invoiceAssociatedDocument
	 */
	invoiceAssociatedDocument?: IDocument[];

	/**
	 * A logistics package referenced in this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/package
	 */
	package?: IPackage[];

	/**
	 * A physical logistics package for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/physicalPackage
	 */
	physicalPackage?: IPackage[];

	/**
	 * A document referenced for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/referenceDocument
	 */
	referenceDocument?: IDocument[];

	/**
	 * A required product applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/requiredApplicableProduct
	 */
	requiredApplicableProduct?: IProduct[];

	/**
	 * The product specified by the requisitioner for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/requisitionerSpecifiedProduct
	 */
	requisitionerSpecifiedProduct?: ITradeProduct[];

	/**
	 * A sequence number for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * The line trade agreement specified for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedLineTradeAgreement
	 */
	specifiedLineTradeAgreement?: ILineTradeAgreement[];

	/**
	 * A line trade delivery specified for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedLineTradeDelivery
	 */
	specifiedLineTradeDelivery?: ILineTradeDelivery[];

	/**
	 * A line trade settlement specified for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedLineTradeSettlement
	 */
	specifiedLineTradeSettlement?: ILineTradeSettlement[];

	/**
	 * A production of goods specified for this supply chain trade line Item.
	 * @see https://vocabulary.uncefact.org/specifiedProduction
	 */
	specifiedProduction?: IProduction[];

	/**
	 * A product specified for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedTradeProduct
	 */
	specifiedTradeProduct?: ITradeProduct[];

	/**
	 * The indication of whether or not this supply chain trade line item is a subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/subordinateLineIndicator
	 */
	subordinateLineIndicator?: boolean;

	/**
	 * A trade line item subordinate to this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/subordinateTradeLineItem
	 */
	subordinateTradeLineItem?: ISubordinateTradeLineItem[];

	/**
	 * A substitute product batch applicable to this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substituteApplicableBatch
	 */
	substituteApplicableBatch?: IProductBatch[];

	/**
	 * Substitute material applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substituteApplicableMaterial
	 */
	substituteApplicableMaterial?: ISpecifiedMaterial[];

	/**
	 * A referenced substitute product applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substituteApplicableProduct
	 */
	substituteApplicableProduct?: IProduct[];

	/**
	 * A substituted product batch applicable to this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substitutedApplicableBatch
	 */
	substitutedApplicableBatch?: IProductBatch[];

	/**
	 * Substituted material applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substitutedApplicableMaterial
	 */
	substitutedApplicableMaterial?: ISpecifiedMaterial[];

	/**
	 * A referenced product substituted for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substitutedProduct
	 */
	substitutedProduct?: IProduct;

	/**
	 * A code specifying a special condition for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/supplyChainTradeLineItemSpecialConditionCode
	 */
	supplyChainTradeLineItemSpecialConditionCode?: string;

	/**
	 * The code specifying the type of supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The code used as an extension to the type code for further specifying a type of supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/typeExtensionCode
	 */
	typeExtensionCode?: string;
}
