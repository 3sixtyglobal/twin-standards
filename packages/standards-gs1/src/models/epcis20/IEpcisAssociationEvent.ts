// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IBaseAggregationEvent } from "./IEpcisBaseAggregationEvent.js";

/**
 * Association Event.
 */
export interface IAssociationEvent extends IBaseAggregationEvent {
	/**
	 * Type.
	 */
	type: "AssociationEvent";
}
