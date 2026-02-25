// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An occurrence or happening related to an object or process that is subject to a correction.
 * @see https://vocabulary.uncefact.org/CorrectiveEvent
 */
export interface IUneceCorrectiveEvent {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CorrectiveEvent;

	/**
	 * The identifier for this corrective event.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;
}
