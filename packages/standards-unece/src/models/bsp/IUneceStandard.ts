// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceAssessment } from "./IUneceAssessment.js";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceLicence } from "./IUneceLicence.js";
import type { IUneceMetricCharacteristic } from "./IUneceMetricCharacteristic.js";
import type { IUneceSpecifiedCertificate } from "./IUneceSpecifiedCertificate.js";
import type { IUneceSpecifiedDeclaration } from "./IUneceSpecifiedDeclaration.js";
import type { UneceStandardTypeCodeList } from "../typeCodes/uneceStandardTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A referenced norm or requirement that establishes uniform criteria, methods, processes and practices, such as in
 * engineering or technical areas.
 * @see https://vocabulary.uncefact.org/Standard
 */
export interface IUneceStandard extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Standard;

	/**
	 * The identifier of the agency for this referenced standard.
	 * @see https://vocabulary.uncefact.org/agencyId
	 */
	agencyId?: string;

	/**
	 * A specified assessment applicable to this referenced standard.
	 * @see https://vocabulary.uncefact.org/applicableAssessment
	 */
	applicableAssessment?: IUneceAssessment[];

	/**
	 * A country where this referenced standard is applicable.
	 * @see https://vocabulary.uncefact.org/applicableCountry
	 */
	applicableCountry?: IUneceCountry[];

	/**
	 * A specified declaration applicable to this referenced standard.
	 * @see https://vocabulary.uncefact.org/applicableDeclaration
	 */
	applicableDeclaration?: IUneceSpecifiedDeclaration[];

	/**
	 * A specified licence applicable to this referenced standard.
	 * @see https://vocabulary.uncefact.org/applicableLicence
	 */
	applicableLicence?: IUneceLicence[];

	/**
	 * A metric characteristic applicable to this referenced standard.
	 * @see https://vocabulary.uncefact.org/applicableMetricCharacteristic
	 */
	applicableMetricCharacteristic?: IUneceMetricCharacteristic[];

	/**
	 * A specified certificate applicable to this referenced standard.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedCertificate
	 */
	applicableSpecifiedCertificate?: IUneceSpecifiedCertificate[];

	/**
	 * A binary file attached to this referenced standard.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IUneceBinaryFile[];

	/**
	 * A textual description of this referenced standard.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The identifier of the version of a specific element within the referenced standard, such as the version of a data
	 * element.
	 * @see https://vocabulary.uncefact.org/elementVersionId
	 */
	elementVersionId?: string;

	/**
	 * The identifier of this referenced standard.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The name, expressed as text, for this referenced standard.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The identifier of a part of this referenced standard, such as a section or topic.
	 * @see https://vocabulary.uncefact.org/partId
	 */
	partId?: string;

	/**
	 * A sustainability assertion specified for this referenced standard.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IUneceAssertion[];

	/**
	 * A referenced document specified for this referenced standard.
	 * @see https://vocabulary.uncefact.org/specifiedDocument
	 */
	specifiedDocument?: IUneceDocument[];

	/**
	 * The code specifying the type of referenced standard.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceStandardTypeCodeList | string;

	/**
	 * The Uniform Resource Identifier (URI) for this referenced standard.
	 * @see https://vocabulary.uncefact.org/uRIId
	 */
	uRIId?: string;

	/**
	 * The identifier of the version of this referenced standard.
	 * @see https://vocabulary.uncefact.org/versionId
	 */
	versionId?: string;
}
