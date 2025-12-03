// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IXHEReference } from "./IXHEReference.js";
import type { DocumentCodeList } from "../lists/documentCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An individual set of transmitted data in an XHE (Exchange Header Envelope).
 * @see https://vocabulary.uncefact.org/PayloadInstance
 */
export interface IPayloadInstance extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.PayloadInstance;

	/**
	 * The code specifying the content type of this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/contentTypeCode
	 */
	contentTypeCode?: string;

	/**
	 * The customization identifier for this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/customizationId
	 */
	customizationId?: string;

	/**
	 * The reference to the decryption key for this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/decryptionKeyReference
	 */
	decryptionKeyReference?: IXHEReference[];

	/**
	 * The reference to the decryption for this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/decryptionReference
	 */
	decryptionReference?: IXHEReference[];

	/**
	 * A textual description of this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the document type for this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/documentTypeCode
	 */
	documentTypeCode?: DocumentCodeList[];

	/**
	 * The indication of whether or not this XHE payload instance is encrypted.
	 * @see https://vocabulary.uncefact.org/encryptedIndicator
	 */
	encryptedIndicator?: boolean;

	/**
	 * The encryption hash value, expressed as text, for this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/encryptionHashValue
	 */
	encryptionHashValue?: string;

	/**
	 * The encryption method, expressed as text, for this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/encryptionMethod
	 */
	encryptionMethod?: string;

	/**
	 * The code specifying the encryption method for this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/encryptionMethodCode
	 */
	encryptionMethodCode?: string;

	/**
	 * The handling service identifier for this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/handlingServiceId
	 */
	handlingServiceId?: string;

	/**
	 * The identifier of this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The reference to the payload for this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/payloadReference
	 */
	payloadReference?: IXHEReference[];

	/**
	 * The profile execution identifier for this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/profileExecutionId
	 */
	profileExecutionId?: string;

	/**
	 * The profile identifier for this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/profileId
	 */
	profileId?: string;

	/**
	 * A reference relevant to this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/relevantReference
	 */
	relevantReference?: IXHEReference[];

	/**
	 * The code specifying the validation type of this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/validationTypeCode
	 */
	validationTypeCode?: string;

	/**
	 * The validation version identifier for this XHE payload instance.
	 * @see https://vocabulary.uncefact.org/validationVersionId
	 */
	validationVersionId?: string;
}
