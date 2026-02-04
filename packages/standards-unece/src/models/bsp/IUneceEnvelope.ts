// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUnecePayload } from "./IUnecePayload.js";
import type { IUneceXHEDocument } from "./IUneceXHEDocument.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A structure providing XHE (Exchange Header Envelope) information.
 * @see https://vocabulary.uncefact.org/Envelope
 */
export interface IUneceEnvelope extends IJsonLdNodeObject {
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
	includedPayload?: IUnecePayload;

	/**
	 * The document metadata for this XHE envelope.
	 * @see https://vocabulary.uncefact.org/metadataDocument
	 */
	metadataDocument: IUneceXHEDocument;

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
