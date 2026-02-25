// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { EpcisSourceDestTypes } from "./epcisSourceDestTypes.js";

/**
 * EPCIS 2.0 Source element identifying the origin of a business transfer.
 * @see https://ref.gs1.org/epcis/SourceOrDestination
 */
export interface IEpcisSource {
	/**
	 * Identifier indicating the role of SourceOrDestination in a transfer (Owning
	 * Party, Possessing Party, or Location).
	 *
	 * Use {@link EpcisSourceDestTypes} for known values.
	 */
	type: EpcisSourceDestTypes | string;

	/**
	 * Identifier that denotes the specific source or destination of a business
	 * transfer; must correlate with the selected type.
	 */
	source: string;
}
