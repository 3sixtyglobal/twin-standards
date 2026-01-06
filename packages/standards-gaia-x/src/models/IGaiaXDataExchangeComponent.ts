// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { GaiaXContextType } from "./gaiaXContextType.js";
import type { GaiaXTypes } from "./gaiaXTypes.js";

/**
 * Data Exchange component as defined by Gaia-X
 * https://docs.gaia-x.eu/ontology/development/classes/DataExchangeComponent
 */
export interface IGaiaXDataExchangeComponent extends IJsonLdNodeObject {
	/**
	 * The LD Context
	 */
	"@context": GaiaXContextType;

	/**
	 * The type of JSON-LD node
	 */
	type:
		| typeof GaiaXTypes.DataExchangeComponent
		| [typeof GaiaXTypes.DataExchangeComponent, ...string[]];
}
