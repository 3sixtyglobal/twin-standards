// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { UneceCertificateTypeCodeList } from "../lists/uneceCertificateTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The label delivered by a trusted third party to assess the compliance of a product or a service with an agreed standard.
 * @see https://vocabulary.uncefact.org/ConformanceCertificate
 */
export interface IUneceConformanceCertificate {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ConformanceCertificate;

	/**
	 * The code specifying the type of conformance certificate.
	 * @see https://vocabulary.uncefact.org/certificateTypeCode
	 */
	certificateTypeCode?: UneceCertificateTypeCodeList;

	/**
	 * The unique identifier of this conformance certificate.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The date, time, date time, or other date time value when this conformance certificate was issued.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 * @json-schema format:date-time
	 */
	issueDateTime?: string;

	/**
	 * An identifier of the issuing party of this conformance certificate.
	 * @see https://vocabulary.uncefact.org/issuingPartyId
	 */
	issuingPartyId?: string | IJsonLdValueObject;

	/**
	 * The software operating system, expressed as text, for which this conformance certificate is produced.
	 * @see https://vocabulary.uncefact.org/softwareOperatingSystem
	 */
	softwareOperatingSystem?: string;
}
