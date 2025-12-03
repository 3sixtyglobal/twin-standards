// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { INote } from "./INote.js";
import type { IProduct } from "./IProduct.js";
import type { ISubordinateLineTradeAgreement } from "./ISubordinateLineTradeAgreement.js";
import type { ISubordinateLineTradeDelivery } from "./ISubordinateLineTradeDelivery.js";
import type { ISubordinateLineTradeSettlement } from "./ISubordinateLineTradeSettlement.js";
import type { ITradeProduct } from "./ITradeProduct.js";
import type { GoodsTypeCodeList } from "../lists/goodsTypeCodeList.js";
import type { GoodsTypeExtensionCodeList } from "../lists/goodsTypeExtensionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of information specific to a subordinate item being used or reported on for trade purposes.
 * @see https://vocabulary.uncefact.org/SubordinateTradeLineItem
 */
export interface ISubordinateTradeLineItem extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SubordinateTradeLineItem;

	/**
	 * A product applicable for this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/applicableProduct
	 */
	applicableProduct?: ITradeProduct[];

	/**
	 * The code specifying the category of this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * The code specifying the type of subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/goodsTypeCode
	 */
	goodsTypeCode?: GoodsTypeCodeList[];

	/**
	 * A code used as an extension to the type code for further specifying this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/goodsTypeExtensionTypeExtensionCode
	 */
	goodsTypeExtensionTypeExtensionCode?: GoodsTypeExtensionCodeList[];

	/**
	 * A unique identifier for this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A note included in this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/includedNote
	 */
	includedNote?: INote[];

	/**
	 * The code specifying the type of response requested for this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/requestedResponseTypeCode
	 */
	requestedResponseTypeCode?: string;

	/**
	 * The code specifying the response reason of this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/responseReasonCode
	 */
	responseReasonCode?: string;

	/**
	 * The referenced product specified for this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedProduct
	 */
	specifiedProduct?: IProduct[];

	/**
	 * The trade agreement specified for this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedSubordinateLineTradeAgreement
	 */
	specifiedSubordinateLineTradeAgreement?: ISubordinateLineTradeAgreement[];

	/**
	 * The delivery specified for this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedSubordinateLineTradeDelivery
	 */
	specifiedSubordinateLineTradeDelivery?: ISubordinateLineTradeDelivery[];

	/**
	 * A trade settlement specified for this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedSubordinateLineTradeSettlement
	 */
	specifiedSubordinateLineTradeSettlement?: ISubordinateLineTradeSettlement[];
}
