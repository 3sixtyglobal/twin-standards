// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { UnLocodeCountriesList } from "./locode/unLocodeCountriesList.js";

/**
 * Interface for a UN/LOCODE subdivision.
 */
export interface IUnLocodeSubdivision {
	/**
	 * The subdivision code (e.g., "04" for Andorra).
	 */
	code: string;

	/**
	 * The subdivision URI (e.g., "unlcds:AD04").
	 */
	subdivisionUri: string;

	/**
	 * The subdivision label (e.g., "Aberdeenshire").
	 */
	label: string;

	/**
	 * The subdivision type (e.g., "Province", "Parish", "State").
	 */
	type?: string;

	/**
	 * The country URI (e.g., "unlcdc:AD").
	 */
	countryCodeUri?: UnLocodeCountriesList;
}
