// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IPayload } from "./IPayload.js";
import type { IXHEDocument } from "./IXHEDocument.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A structure providing XHE (Exchange Header Envelope) information.
 * @see https://vocabulary.uncefact.org/Envelope
 */
export interface IEnvelope extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Envelope;

	/**
	 * The customization identifier for this XHE envelope.
	 * @see https://vocabulary.uncefact.org/customizationId
	 */
	customizationId?: string;

	/**
	 * The payload included in this XHE envelope.
	 * @see https://vocabulary.uncefact.org/includedPayload
	 */
	includedPayload?: IPayload[];

	/**
	 * The document metadata for this XHE envelope.
	 * @see https://vocabulary.uncefact.org/metadataDocument
	 */
	metadataDocument?: IXHEDocument[];

	/**
	 * The indication of whether or not a payload is included in this XHE envelope.
	 * @see https://vocabulary.uncefact.org/payloadIncludedIndicator
	 */
	payloadIncludedIndicator?: boolean;

	/**
	 * The profile execution identifier for this XHE envelope.
	 * @see https://vocabulary.uncefact.org/profileExecutionId
	 */
	profileExecutionId?: string;

	/**
	 * The profile identifier for this XHE envelope.
	 * @see https://vocabulary.uncefact.org/profileId
	 */
	profileId?: string;

	/**
	 * The version identifier for this XHE envelope.
	 * @see https://vocabulary.uncefact.org/versionId
	 */
	versionId?: string;
}
