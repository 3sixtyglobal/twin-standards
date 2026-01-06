// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { UneceCertificateTypeCodeList } from "../lists/uneceCertificateTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A legal proof of ownership, worthiness or qualification to operate an agricultural item.
 * @see https://vocabulary.uncefact.org/AgriculturalCertificate
 */
export interface IUneceAgriculturalCertificate extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AgriculturalCertificate;

	/**
	 * The actual effective date, time, date time or other date time value for this agricultural certificate.
	 * @see https://vocabulary.uncefact.org/actualEffectiveDateTime
	 */
	actualEffectiveDateTime?: string;

	/**
	 * A sustainability assertion applicable to this agricultural certificate.
	 * @see https://vocabulary.uncefact.org/applicableAssertion
	 */
	applicableAssertion?: IUneceAssertion[];

	/**
	 * A code specifying an applicable object, such as item, animal, person or organization, for this agricultural certificate.
	 * @see https://vocabulary.uncefact.org/applicableObjectCode
	 */
	applicableObjectCode?: string;

	/**
	 * A referenced standard applicable to this agricultural certificate.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard[];

	/**
	 * A sustainability characteristic applicable to this agricultural certificate.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * A binary file attached to this agricultural certificate.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IUneceBinaryFile[];

	/**
	 * The code specifying the type of agricultural certificate.
	 * @see https://vocabulary.uncefact.org/certificateTypeCode
	 */
	certificateTypeCode?: UneceCertificateTypeCodeList[];

	/**
	 * The textual description of this agricultural certificate.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The date, time, date time, or other date time value when this agricultural certificate expires.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 */
	expiryDateTime?: string;

	/**
	 * The identifier for this agricultural certificate.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time, or other date time value when this agricultural certificate was issued.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * The code specifying the reason why the agricultural certificate was issued.
	 * @see https://vocabulary.uncefact.org/issueReasonCode
	 */
	issueReasonCode?: string;

	/**
	 * The identifier for the issuing party of this agricultural certificate.
	 * @see https://vocabulary.uncefact.org/issuingPartyId
	 */
	issuingPartyId?: string;

	/**
	 * A code specifying the purpose of this agricultural certificate.
	 * @see https://vocabulary.uncefact.org/purposeCode
	 */
	purposeCode?: string;

	/**
	 * The requested effective date, time, date time or other date time value for this agricultural certificate.
	 * @see https://vocabulary.uncefact.org/requestedEffectiveDateTime
	 */
	requestedEffectiveDateTime?: string;
}
