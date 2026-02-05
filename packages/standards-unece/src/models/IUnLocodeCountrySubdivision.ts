// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { UnLocodeCountriesList } from "./locode/unLocodeCountriesList.js";

/**
 * UN/LOCODE Country subdivision information.
 * @see https://vocabulary.uncefact.org/unlocode-subdivisions
 */
export interface IUnLocodeCountrySubdivision {
	/**
	 * The uri of the UN/LOCODE country subdivision.
	 */
	uri: UnLocodeCountriesList;

	/**
	 * The label of the UN/LOCODE country subdivision.
	 */
	label: string;

	/**
	 * The value of the UN/LOCODE country subdivision.
	 */
	value: string;

	/**
	 * The type of the UN/LOCODE country subdivision.
	 */
	subdivisionType: string;

	/**
	 * The country code of the UN/LOCODE country subdivision.
	 */
	countryCodeUri: UnLocodeCountriesList;
}
