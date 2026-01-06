// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceProcessCertification } from "./IUneceProcessCertification.js";
import type { IUneceProcessCharacteristic } from "./IUneceProcessCharacteristic.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { UneceCertificateTypeCodeList } from "../lists/uneceCertificateTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A piece of written, printed or electronic matter that provides information or evidence that a process has met required
 * criteria.
 * @see https://vocabulary.uncefact.org/ProcessCertificate
 */
export interface IUneceProcessCertificate extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProcessCertificate;

	/**
	 * The actual effective date, time, date time or other date time value for this process certificate.
	 * @see https://vocabulary.uncefact.org/actualEffectiveDateTime
	 */
	actualEffectiveDateTime?: string;

	/**
	 * The sustainability assertion applicable to this process certificate.
	 * @see https://vocabulary.uncefact.org/applicableAssertion
	 */
	applicableAssertion?: IUneceAssertion[];

	/**
	 * A code specifying an object for which this process certificate is applicable.
	 * @see https://vocabulary.uncefact.org/applicableObjectCode
	 */
	applicableObjectCode?: string;

	/**
	 * A process certification applicable to this process certificate.
	 * @see https://vocabulary.uncefact.org/applicableProcessCertification
	 */
	applicableProcessCertification?: IUneceProcessCertification[];

	/**
	 * A process characteristic applicable to this process certificate.
	 * @see https://vocabulary.uncefact.org/applicableProcessCharacteristic
	 */
	applicableProcessCharacteristic?: IUneceProcessCharacteristic[];

	/**
	 * A referenced standard applicable to this process certificate.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard[];

	/**
	 * A sustainability characteristic applicable to this process certificate.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * A binary file attached to this process certificate.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IUneceBinaryFile[];

	/**
	 * The code specifying the type of process certificate.
	 * @see https://vocabulary.uncefact.org/certificateTypeCode
	 */
	certificateTypeCode?: UneceCertificateTypeCodeList[];

	/**
	 * A textual description of this process certificate.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The date, time, date time, or other date time value when this process certificate expires.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 */
	expiryDateTime?: string;

	/**
	 * The identifier of this process certificate.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time, or other date time value for the issuance of this process certificate.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * The code specifying the reason for the issue of this process certificate.
	 * @see https://vocabulary.uncefact.org/issueReasonCode
	 */
	issueReasonCode?: string;

	/**
	 * An identifier of the party issuing this process certificate.
	 * @see https://vocabulary.uncefact.org/issuingPartyId
	 */
	issuingPartyId?: string;

	/**
	 * The code specifying the purpose of this process certificate.
	 * @see https://vocabulary.uncefact.org/purposeCode
	 */
	purposeCode?: string;

	/**
	 * The requested effective date, time, date time or other date time value for this process certificate.
	 * @see https://vocabulary.uncefact.org/requestedEffectiveDateTime
	 */
	requestedEffectiveDateTime?: string;
}
