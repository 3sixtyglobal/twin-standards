// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceCorrectiveEvent } from "./IUneceCorrectiveEvent.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A notification that an error has occurred.
 * @see https://vocabulary.uncefact.org/Error
 */
export interface IUneceError {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Error;

	/**
	 * A corrective event associated with this declared error.
	 * @see https://vocabulary.uncefact.org/associatedEvent
	 */
	associatedEvent?: IUneceCorrectiveEvent[];

	/**
	 * An issue date, time, date time or other date time value for this declared error.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * A code specifying a reason for the declared error.
	 * @see https://vocabulary.uncefact.org/reasonCode
	 */
	reasonCode?: string;
}
