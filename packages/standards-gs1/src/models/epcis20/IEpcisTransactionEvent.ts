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
 * EPCIS 2.0 TransactionEvent relating objects or quantities to one or more
 * business transactions, optionally with a parent identifier.
 * @see https://ref.gs1.org/epcis/TransactionEvent
 */
export interface IEpcisTransactionEvent extends IEpcisEvent {
	/**
	 * Fixed to TransactionEvent.
	 */
	type: typeof EpcisTypes.TransactionEvent;

	/**
	 * Business transaction list (required by schema).
	 */
	bizTransactionList: IEpcisBizTransaction[];

	/**
	 * (Optional when action is OBSERVE, required otherwise) Identifier of the parent
	 * of the aggregation or association; use the pure identity URI when the parent is
	 * an EPC.
	 */
	parentID?: string;

	/**
	 * (Optional) An unordered list of one or more EPCs naming specific objects to
	 * which the event pertained.
	 */
	epcList?: string[];

	/**
	 * An unordered list of one or more QuantityElements identifying (at the class
	 * level) contained objects.
	 */
	quantityList?: IEpcisQuantity[];

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
