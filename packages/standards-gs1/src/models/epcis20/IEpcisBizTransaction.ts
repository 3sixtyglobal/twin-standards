// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { EpcisBizTransactionTypes } from "./epcisBizTransactionTypes.js";

/**
 * EPCIS 2.0 BizTransaction element identifying a business document and its type.
 * @see https://ref.gs1.org/epcis/BizTransaction
 */
export interface IEpcisBizTransaction {
	/**
	 * Identifier that indicates the type of BizTransaction document (e.g. Purchase
	 * Order, Despatch Advice).
	 *
	 * Use {@link EpcisBizTransactionTypes} for known values.
	 */
	type?: EpcisBizTransactionTypes | string;

	/**
	 * URI identifier of the specific business transaction document (alias of id in
	 * JSON or XML).
	 */
	bizTransaction: string;
}
