// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { UnLocodeCountriesList } from "./locode/unLocodeCountriesList.js";

/**
 * UN/LOCODE Country information.
 * @see https://vocabulary.uncefact.org/unlocode-countries
 */
export interface IUnLocodeCountry {
	/**
	 * The uri of the UN/LOCODE country.
	 */
	uri: UnLocodeCountriesList;

	/**
	 * The label of the UN/LOCODE country.
	 */
	label: string;

	/**
	 * The value of the UN/LOCODE country.
	 */
	value: string;
}
