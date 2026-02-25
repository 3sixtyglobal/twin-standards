// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The making or manufacturing of goods, such as from components or raw materials.
 * @see https://vocabulary.uncefact.org/Production
 */
export interface IUneceProduction {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Production;

	/**
	 * The identifier for this production of goods.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * A textual description of the manufacturing process for this goods production.
	 * @see https://vocabulary.uncefact.org/manufacturingProcessDescription
	 */
	manufacturingProcessDescription?: string;
}
