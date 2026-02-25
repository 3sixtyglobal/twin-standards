// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { GaiaXTypes } from "./gaiaXTypes.js";

/**
 * Address as defined by Gaia-X
 * https://docs.gaia-x.eu/ontology/development/classes/Address/
 */
export interface IGaiaXAddress {
	/**
	 * JSON-LD @ type. In this case it is allowed to be omitted as it is usually a child node.
	 */
	type: typeof GaiaXTypes.Address | undefined;

	/**
	 * Country code in ISO 3166-1 alpha2, alpha-3 or numeric format
	 */
	countryCode: string | number;
}
