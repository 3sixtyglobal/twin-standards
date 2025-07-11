// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { GaiaXContextType } from "./gaiaXContextType";

/**
 * GaiaX Entity.
 * @see https://docs.gaia-x.eu/ontology/development/classes/GaiaXEntity/
 */
export interface IGaiaXEntity extends IJsonLdNodeObject {
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
