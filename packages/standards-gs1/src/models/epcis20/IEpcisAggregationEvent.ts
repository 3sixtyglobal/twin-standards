// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { EpcisActionTypes } from "./epcisActionTypes.js";
import type { EpcisBizStepTypes } from "./epcisBizStepTypes.js";
import type { EpcisDispositionTypes } from "./epcisDispositionTypes.js";
import type { EpcisTypes } from "./epcisTypes.js";
import type { IEpcisBizTransaction } from "./IEpcisBizTransaction.js";
import type { IEpcisDestination } from "./IEpcisDestination.js";
import type { IEpcisEvent } from "./IEpcisEvent.js";
import type { IEpcisLocation } from "./IEpcisLocation.js";
import type { IEpcisQuantity } from "./IEpcisQuantity.js";
import type { IEpcisSensorElement } from "./IEpcisSensorElement.js";
import type { IEpcisSource } from "./IEpcisSource.js";

/**
 * EPCIS 2.0 AggregationEvent describing how child objects are associated with or
 * disassociated from a parent object.
 * @see https://ref.gs1.org/epcis/AggregationEvent
 */
export interface IEpcisAggregationEvent extends IEpcisEvent {
	/**
	 * The type.
	 */
	type: typeof EpcisTypes.AggregationEvent;

	/**
	 * (Optional when action is OBSERVE, required otherwise) Identifier of the parent
	 * of the aggregation or association; use the pure identity URI when the parent is
	 * an EPC.
	 */
	parentID?: string;

	/**
	 * (Optional) Unordered list of contained objects identified at the instance
	 * level; AggregationEvents normally include childEPCs or childQuantityList unless
	 * action is DELETE.
	 */
	childEPCs?: string[];

	/**
	 * Unordered list of one or more QuantityElements identifying contained objects
	 * at the class level; may be empty only with action DELETE when disaggregating
	 * all children.
	 */
	childQuantityList?: IEpcisQuantity[];

	/**
	 * How this event relates to the lifecycle of the EPCs named in this event.
	 */
	action: EpcisActionTypes;

	/**
	 * (Optional) The business step of which this event was a part.
	 */
	bizStep?: EpcisBizStepTypes | string;

	/**
	 * (Optional) The business condition of the objects associated with the EPCs,
	 * presumed to hold true until contradicted by a subsequent event.
	 */
	disposition?: EpcisDispositionTypes | string;

	/**
	 * (Optional) The read point at which the event took place.
	 */
	readPoint?: IEpcisLocation;

	/**
	 * (Optional) The business location where the objects associated with the EPCs
	 * may be found, until contradicted by a subsequent event.
	 */
	bizLocation?: IEpcisLocation;

	/**
	 * (Optional) An unordered list of business transactions that define the context
	 * of this event.
	 */
	bizTransactionList?: IEpcisBizTransaction[];

	/**
	 * (Optional) Unordered list of Source elements that provide context about the
	 * originating endpoint of a business transfer of which this event is a part.
	 */
	sourceList?: IEpcisSource[];

	/**
	 * (Optional) Unordered list of Destination elements that provide context about the
	 * terminating endpoint of a business transfer of which this event is a part.
	 */
	destinationList?: IEpcisDestination[];

	/**
	 * (Optional) Connects event to one or more SensorElements.
	 */
	sensorElementList?: IEpcisSensorElement[];
}
