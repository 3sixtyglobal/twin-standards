// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { EpcisActionTypes } from "./epcisActionTypes.js";
import type { EpcisBizStepTypes } from "./epcisBizStepTypes.js";
import type { EpcisDispositionTypes } from "./epcisDispositionTypes.js";
import type { IBizTransaction } from "./IEpcisBizTransaction.js";
import type { IEpcisEvent } from "./IEpcisEvent.js";
import type { ISimpleLocation } from "./IEpcisSimpleLocation.js";

/**
 * EPCIS Event Details.
 */
export interface IEpcisEventDetails extends IEpcisEvent {
	/**
	 * Action: ADD, OBSERVE, DELETE.
	 */
	action: EpcisActionTypes;

	/**
	 * The location of reading point.
	 */
	readPoint?: ISimpleLocation;

	/**
	 * The biz location where the item ends up.
	 */
	bizLocation?: ISimpleLocation;

	/**
	 * The business step as per EPCIS.
	 */
	bizStep?: EpcisBizStepTypes;

	/**
	 * The disposition as per EPCIS.
	 */
	disposition?: EpcisDispositionTypes;

	/**
	 * The list of related business transactions.
	 */
	bizTransactionList?: IBizTransaction[];
}
