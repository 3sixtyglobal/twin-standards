// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { EpcisContextType } from "./epcisContextType.js";
import type { EpcisTypes } from "./epcisTypes.js";
import type { IEpcisQueryDocumentBody } from "./IEpcisQueryDocumentBody.js";

/**
 * EPCIS 2.0 QueryDocument used to submit queries to an EPCIS repository.
 * @see https://ref.gs1.org/epcis/EPCISQueryDocument
 */
export interface IEpcisQueryDocument extends IJsonLdNodeObject {
	/**
	 * The @context.
	 */
	"@context": EpcisContextType;

	/**
	 * The JSON-LD document id.
	 */
	id?: string;

	/**
	 * JSON-LD Type.
	 */
	type: typeof EpcisTypes.EPCISQueryDocument;

	/**
	 * Schema version.
	 */
	schemaVersion?: string;

	/**
	 * Creation Date.
	 */
	creationDate?: string;

	/**
	 * The EPCIS Body.
	 */
	epcisBody: IEpcisQueryDocumentBody;
}
