// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUnecePayloadInstance } from "./IUnecePayloadInstance.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Transmitted data that is included in an XHE (Exchange Header Envelope).
 * @see https://vocabulary.uncefact.org/Payload
 */
export interface IUnecePayload {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Payload;

	/**
	 * A payload instance included in this XHE payload.
	 * @see https://vocabulary.uncefact.org/includedPayloadInstance
	 */
	includedPayloadInstance: IUnecePayloadInstance[];
}
