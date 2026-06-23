// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { EpcisDispositionTypes } from "./epcisDispositionTypes.js";

/**
 * EPCIS 2.0 PersistentDisposition indicating business conditions to set or unset
 * independently of event disposition.
 * @see https://ref.gs1.org/epcis/PersistentDisposition
 */
export interface IEpcisPersistentDisposition {
	/**
	 * (Optional) List of persistentDisposition URI values to be set.
	 */
	set?: (EpcisDispositionTypes | string)[];

	/**
	 * (Optional) List of persistentDisposition URI values to be unset (revoked).
	 */
	unset?: (EpcisDispositionTypes | string)[];
}
