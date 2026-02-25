// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { GaiaXContextType } from "./gaiaXContextType.js";

/**
 * GaiaX Entity.
 * @see https://docs.gaia-x.eu/ontology/development/classes/GaiaXEntity/
 */
export interface IGaiaXEntity {
	/**
	 * The LD context.
	 */
	"@context": GaiaXContextType;

	/**
	 * The Id.
	 */
	id: string;

	/**
	 * Human readable Name.
	 */
	name?: string;

	/**
	 * Description of the Gaia-X entity.
	 */
	description?: string;
}
