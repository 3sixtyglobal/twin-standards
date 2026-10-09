// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUneceProduct } from "./IUneceProduct.js";
import type { IUneceSubordinateLineTradeAgreement } from "./IUneceSubordinateLineTradeAgreement.js";
import type { IUneceSubordinateLineTradeDelivery } from "./IUneceSubordinateLineTradeDelivery.js";
import type { IUneceSubordinateLineTradeSettlement } from "./IUneceSubordinateLineTradeSettlement.js";
import type { IUneceTradeProduct } from "./IUneceTradeProduct.js";
import type { UneceGoodsTypeCodeList } from "../lists/uneceGoodsTypeCodeList.js";
import type { UneceGoodsTypeExtensionCodeList } from "../lists/uneceGoodsTypeExtensionCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of information specific to a subordinate item being used or reported on for trade purposes.
 * @see https://vocabulary.uncefact.org/SubordinateTradeLineItem
 */
export interface IUneceSubordinateTradeLineItem {
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
	applicableProduct?: IUneceTradeProduct[];

	/**
	 * The code specifying the category of this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/categoryCode
	 */
	categoryCode?: string;

	/**
	 * The code specifying the type of subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/goodsTypeCode
	 */
	goodsTypeCode?: UneceGoodsTypeCodeList | string;

	/**
	 * A code used as an extension to the type code for further specifying this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/goodsTypeExtensionTypeExtensionCode
	 */
	goodsTypeExtensionTypeExtensionCode?: (UneceGoodsTypeExtensionCodeList | string)[];

	/**
	 * A unique identifier for this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * A note included in this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/includedNote
	 */
	includedNote?: IUneceNote[];

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
	specifiedProduct?: IUneceProduct;

	/**
	 * The trade agreement specified for this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedSubordinateLineTradeAgreement
	 */
	specifiedSubordinateLineTradeAgreement?: IUneceSubordinateLineTradeAgreement;

	/**
	 * The delivery specified for this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedSubordinateLineTradeDelivery
	 */
	specifiedSubordinateLineTradeDelivery?: IUneceSubordinateLineTradeDelivery;

	/**
	 * A trade settlement specified for this subordinate trade line item.
	 * @see https://vocabulary.uncefact.org/specifiedSubordinateLineTradeSettlement
	 */
	specifiedSubordinateLineTradeSettlement?: IUneceSubordinateLineTradeSettlement[];
}
