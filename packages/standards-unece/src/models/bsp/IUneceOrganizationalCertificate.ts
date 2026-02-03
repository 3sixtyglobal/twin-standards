// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceOrganizationalCertification } from "./IUneceOrganizationalCertification.js";
import type { IUneceOrganizationCharacteristic } from "./IUneceOrganizationCharacteristic.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { UneceCertificateTypeCodeList } from "../lists/uneceCertificateTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A piece of written, printed or electronic matter that provides information or evidence that an organization has met
 * required organizational criteria.
 * @see https://vocabulary.uncefact.org/OrganizationalCertificate
 */
export interface IUneceOrganizationalCertificate extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.OrganizationalCertificate;

	/**
	 * The actual effective date, time, date time or other date time value for this organizational certificate.
	 * @see https://vocabulary.uncefact.org/actualEffectiveDateTime
	 */
	actualEffectiveDateTime?: string;

	/**
	 * A sustainability assertion applicable to this organizational certificate.
	 * @see https://vocabulary.uncefact.org/applicableAssertion
	 */
	applicableAssertion?: IUneceAssertion;

	/**
	 * A code specifying an object for which this organizational certificate is applicable.
	 * @see https://vocabulary.uncefact.org/applicableObjectCode
	 */
	applicableObjectCode?: string;

	/**
	 * A characteristic applicable to this organization certificate.
	 * @see https://vocabulary.uncefact.org/applicableOrganizationCharacteristic
	 */
	applicableOrganizationCharacteristic?: IUneceOrganizationCharacteristic;

	/**
	 * An organizational certification applicable to this organizational certificate.
	 * @see https://vocabulary.uncefact.org/applicableOrganizationalCertification
	 */
	applicableOrganizationalCertification?: IUneceOrganizationalCertification;

	/**
	 * A referenced standard applicable to this organizational certificate.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard;

	/**
	 * A sustainability characteristic applicable to this organizational certificate.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic;

	/**
	 * A binary file attached to this organizational certificate.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IUneceBinaryFile;

	/**
	 * The code specifying the type of organizational certificate.
	 * @see https://vocabulary.uncefact.org/certificateTypeCode
	 */
	certificateTypeCode?: UneceCertificateTypeCodeList;

	/**
	 * A textual description of this organizational certificate.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The date, time, date time, or other date time value when this organizational certificate expires.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 */
	expiryDateTime?: string;

	/**
	 * The identifier of this organizational certificate.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time, or other date time value for the issuance of this organizational certificate.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * The code specifying the reason why this organizational certificate was issued.
	 * @see https://vocabulary.uncefact.org/issueReasonCode
	 */
	issueReasonCode?: string;

	/**
	 * An identifier of the party issuing this organizational certificate.
	 * @see https://vocabulary.uncefact.org/issuingPartyId
	 */
	issuingPartyId?: string;

	/**
	 * The code specifying the purpose of this organizational certificate.
	 * @see https://vocabulary.uncefact.org/purposeCode
	 */
	purposeCode?: string;

	/**
	 * The requested effective date, time, date time or other date time value for this organizational certificate.
	 * @see https://vocabulary.uncefact.org/requestedEffectiveDateTime
	 */
	requestedEffectiveDateTime?: string;
}
