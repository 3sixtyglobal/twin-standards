// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/**
 * UN/LOCODE Country Location Record information.
 */
export interface IUnLocodeLocationRecord {
	/**
	 * The location code.
	 */
	locationCode: string;

	/**
	 * The location label.
	 */
	label: string;

	/**
	 * The subdivision code.
	 */
	subdivisionCode?: string;

	/**
	 * The label with diacritics.
	 */
	labelWithDiacritics?: string;

	/**
	 * The function code as concatenated string.
	 */
	function?: string;

	/**
	 * The latitude coordinate.
	 */
	lat?: number;

	/**
	 * The longitude coordinate.
	 */
	lng?: number;
}
