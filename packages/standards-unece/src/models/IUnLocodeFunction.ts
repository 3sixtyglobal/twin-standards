// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { UnLocodeFunctionsList } from "./locode/unLocodeFunctionsList.js";

/**
 * UN/LOCODE Function information.
 * @see https://vocabulary.uncefact.org/unlocode-functions
 */
export interface IUnLocodeFunction {
	/**
	 * The uri of the UN/LOCODE country.
	 */
	uri: UnLocodeFunctionsList;

	/**
	 * The label of the UN/LOCODE country.
	 */
	label: string;

	/**
	 * The comment of the UN/LOCODE country.
	 */
	comment: string;

	/**
	 * The value of the UN/LOCODE country.
	 */
	value: string;
}
