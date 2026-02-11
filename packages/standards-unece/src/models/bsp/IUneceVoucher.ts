// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { UneceVoucherTypeCodeList } from "../typeCodes/uneceVoucherTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A printed piece of paper or an electronic document that can be used instead of money to pay for an experience, such as a
 * tour, a trip or a meal in a restaurant.
 * @see https://vocabulary.uncefact.org/Voucher
 */
export interface IUneceVoucher extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Voucher;

	/**
	 * The indication of whether or not this experience item voucher is applicable.
	 * @see https://vocabulary.uncefact.org/applicableIndicator
	 */
	applicableIndicator?: boolean;

	/**
	 * A textual description of this experience item voucher.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A monetary value shown on the face of this experience item voucher.
	 * @see https://vocabulary.uncefact.org/faceAmount
	 */
	faceAmount?: IUneceAmountType[];

	/**
	 * The identifier for this experience item voucher.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date or date time of the issuance of this experience item voucher.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * A name, expressed as text, of the company issuing this experience item voucher.
	 * @see https://vocabulary.uncefact.org/issuingCompanyName
	 */
	issuingCompanyName?: string;

	/**
	 * The code specifying the type of experience item voucher.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceVoucherTypeCodeList | string;
}
