// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceAuthentication } from "./IUneceAuthentication.js";
import type { IUneceConsignmentItem } from "./IUneceConsignmentItem.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceDocumentLineDocument } from "./IUneceDocumentLineDocument.js";
import type { IUneceLineTradeAgreement } from "./IUneceLineTradeAgreement.js";
import type { IUneceLineTradeDelivery } from "./IUneceLineTradeDelivery.js";
import type { IUneceLineTradeSettlement } from "./IUneceLineTradeSettlement.js";
import type { IUneceLogisticsTransportEquipment } from "./IUneceLogisticsTransportEquipment.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUnecePackage } from "./IUnecePackage.js";
import type { IUneceProduct } from "./IUneceProduct.js";
import type { IUneceProductBatch } from "./IUneceProductBatch.js";
import type { IUneceProductHandlingProcess } from "./IUneceProductHandlingProcess.js";
import type { IUneceProduction } from "./IUneceProduction.js";
import type { IUneceSpecifiedMaterial } from "./IUneceSpecifiedMaterial.js";
import type { IUneceSubordinateTradeLineItem } from "./IUneceSubordinateTradeLineItem.js";
import type { IUneceTradeProduct } from "./IUneceTradeProduct.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of information specific to an item being used or reported on for supply chain trade purposes.
 * @see https://vocabulary.uncefact.org/SupplyChainTradeLineItem
 */
export interface IUneceSupplyChainTradeLineItem extends IJsonLdNodeObject {
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
	accessoryApplicableProduct?: IUneceProduct[];

	/**
	 * A referenced product additionally applicable with this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/additionalApplicableProduct
	 */
	additionalApplicableProduct?: IUneceProduct[];

	/**
	 * An additional unique identifier for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/additionalId
	 */
	additionalId: string;

	/**
	 * A note providing additional information for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/additionalInformationNote
	 */
	additionalInformationNote?: IUneceNote[];

	/**
	 * A product batch applicable to this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/applicableBatch
	 */
	applicableBatch?: IUneceProductBatch[];

	/**
	 * Material applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/applicableMaterial
	 */
	applicableMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * A product handling process applied to this supply chain trade line item, such as manufacturing, treatment or storage.
	 * @see https://vocabulary.uncefact.org/appliedProcess
	 */
	appliedProcess?: IUneceProductHandlingProcess[];

	/**
	 * A document authentication asserted for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/assertedAuthentication
	 */
	assertedAuthentication?: IUneceAuthentication[];

	/**
	 * The document line associated with this trade line item.
	 * @see https://vocabulary.uncefact.org/associatedDocumentLineDocument
	 */
	associatedDocumentLineDocument?: IUneceDocumentLineDocument[];

	/**
	 * A piece of transport equipment associated with this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/associatedTransportEquipment
	 */
	associatedTransportEquipment?: IUneceLogisticsTransportEquipment[];

	/**
	 * A unique barcode identifier for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/barcodeId
	 */
	barcodeId?: string;

	/**
	 * A referenced complementary product applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/complementaryApplicableProduct
	 */
	complementaryApplicableProduct?: IUneceProduct[];

	/**
	 * A referenced component product applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/componentApplicableProduct
	 */
	componentApplicableProduct?: IUneceProduct[];

	/**
	 * A monetary value declared for customs purposes for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/declaredValueForCustomsAmount
	 */
	declaredValueForCustomsAmount?: IUneceAmountType[];

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
	includedSubordinateTradeLineItem?: IUneceSubordinateTradeLineItem[];

	/**
	 * The consignment item within which this supply chain trade line item is included.
	 * @see https://vocabulary.uncefact.org/includedWithinConsignmentItem
	 */
	includedWithinConsignmentItem?: IUneceConsignmentItem;

	/**
	 * An invoice document associated to this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/invoiceAssociatedDocument
	 */
	invoiceAssociatedDocument?: IUneceDocument[];

	/**
	 * A logistics package referenced in this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/package
	 */
	package?: IUnecePackage[];

	/**
	 * A physical logistics package for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/physicalPackage
	 */
	physicalPackage?: IUnecePackage[];

	/**
	 * A document referenced for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/referenceDocument
	 */
	referenceDocument?: IUneceDocument[];

	/**
	 * A required product applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/requiredApplicableProduct
	 */
	requiredApplicableProduct?: IUneceProduct[];

	/**
	 * The product specified by the requisitioner for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/requisitionerSpecifiedProduct
	 */
	requisitionerSpecifiedProduct?: IUneceTradeProduct;

	/**
	 * A sequence number for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * The line trade agreement specified for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedLineTradeAgreement
	 */
	specifiedLineTradeAgreement?: IUneceLineTradeAgreement;

	/**
	 * A line trade delivery specified for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedLineTradeDelivery
	 */
	specifiedLineTradeDelivery?: IUneceLineTradeDelivery;

	/**
	 * A line trade settlement specified for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedLineTradeSettlement
	 */
	specifiedLineTradeSettlement?: IUneceLineTradeSettlement[];

	/**
	 * A production of goods specified for this supply chain trade line Item.
	 * @see https://vocabulary.uncefact.org/specifiedProduction
	 */
	specifiedProduction?: IUneceProduction[];

	/**
	 * A product specified for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedTradeProduct
	 */
	specifiedTradeProduct?: IUneceTradeProduct[];

	/**
	 * The indication of whether or not this supply chain trade line item is a subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/subordinateLineIndicator
	 */
	subordinateLineIndicator?: boolean;

	/**
	 * A trade line item subordinate to this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/subordinateTradeLineItem
	 */
	subordinateTradeLineItem?: IUneceSubordinateTradeLineItem[];

	/**
	 * A substitute product batch applicable to this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substituteApplicableBatch
	 */
	substituteApplicableBatch?: IUneceProductBatch[];

	/**
	 * Substitute material applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substituteApplicableMaterial
	 */
	substituteApplicableMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * A referenced substitute product applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substituteApplicableProduct
	 */
	substituteApplicableProduct?: IUneceProduct[];

	/**
	 * A substituted product batch applicable to this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substitutedApplicableBatch
	 */
	substitutedApplicableBatch?: IUneceProductBatch[];

	/**
	 * Substituted material applicable for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substitutedApplicableMaterial
	 */
	substitutedApplicableMaterial?: IUneceSpecifiedMaterial[];

	/**
	 * A referenced product substituted for this supply chain trade line item.
	 * @see https://vocabulary.uncefact.org/substitutedProduct
	 */
	substitutedProduct?: IUneceProduct;

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
