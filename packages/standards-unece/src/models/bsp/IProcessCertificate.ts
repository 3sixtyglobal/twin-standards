// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAssertion } from "./IAssertion.js";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { IProcessCertification } from "./IProcessCertification.js";
import type { IProcessCharacteristic } from "./IProcessCharacteristic.js";
import type { IStandard } from "./IStandard.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { CertificateTypeCodeList } from "../lists/certificateTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A piece of written, printed or electronic matter that provides information or evidence that a process has met required
 * criteria.
 * @see https://vocabulary.uncefact.org/ProcessCertificate
 */
export interface IProcessCertificate extends IJsonLdNodeObject {
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
	applicableAssertion?: IAssertion[];

	/**
	 * A code specifying an object for which this process certificate is applicable.
	 * @see https://vocabulary.uncefact.org/applicableObjectCode
	 */
	applicableObjectCode?: string;

	/**
	 * A process certification applicable to this process certificate.
	 * @see https://vocabulary.uncefact.org/applicableProcessCertification
	 */
	applicableProcessCertification?: IProcessCertification[];

	/**
	 * A process characteristic applicable to this process certificate.
	 * @see https://vocabulary.uncefact.org/applicableProcessCharacteristic
	 */
	applicableProcessCharacteristic?: IProcessCharacteristic[];

	/**
	 * A referenced standard applicable to this process certificate.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IStandard[];

	/**
	 * A sustainability characteristic applicable to this process certificate.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A binary file attached to this process certificate.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IBinaryFile[];

	/**
	 * The code specifying the type of process certificate.
	 * @see https://vocabulary.uncefact.org/certificateTypeCode
	 */
	certificateTypeCode?: CertificateTypeCodeList[];

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
