// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { UnLocodeCountriesList } from "./locode/unLocodeCountriesList.js";
import type { UnLocodeFunctionsList } from "./locode/unLocodeFunctionsList.js";

/**
 * UN/LOCODE Location information.
 */
export interface IUnLocodeLocation {
	/**
	 * The locode of the UN/LOCODE.
	 */
	locode: string;

	/**
	 * The locodeUri of the UN/LOCODE.
	 */
	locodeUri: string;

	/**
	 * The label of the UN/LOCODE.
	 */
	label: string;

	/**
	 * The label of the UN/LOCODE with diacritics.
	 */
	labelWithDiacritics: string;

	/**
	 * The coordinates of the UN/LOCODE.
	 */
	geoCoordinates?: {
		latitude: number;
		longitude: number;
	};

	/**
	 * The country code uri of the UN/LOCODE.
	 */
	countryCodeUri: UnLocodeCountriesList;

	/**
	 * The country subdivision uri of the UN/LOCODE.
	 */
	countrySubdivisionUri: string;

	/**
	 * The functions of the UN/LOCODE.
	 */
	functions: UnLocodeFunctionsList[];
}
