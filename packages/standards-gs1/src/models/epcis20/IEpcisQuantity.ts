// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * EPCIS 2.0 QuantityElement defining class-level identifiers and amounts.
 * @see https://ref.gs1.org/epcis/QuantityElement
 */
export interface IEpcisQuantity {
	/**
	 * A class-level identifier for the class to which the specified quantity of
	 * objects belongs.
	 */
	epcClass: string;

	/**
	 * (Optional) A number that specifies how many or how much of the specified
	 * EPCClass is denoted by this QuantityElement.
	 */
	quantity?: number;

	/**
	 * (Optional) Unit of measure by which the specified value(s) of the property
	 * specified by type should be interpreted.
	 */
	uom?: string;
}
