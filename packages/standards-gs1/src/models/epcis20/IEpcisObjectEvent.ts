// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { EpcisActionTypes } from "./epcisActionTypes.js";
import type { EpcisBizStepTypes } from "./epcisBizStepTypes.js";
import type { EpcisDispositionTypes } from "./epcisDispositionTypes.js";
import type { EpcisTypes } from "./epcisTypes.js";
import type { IEpcisBizTransaction } from "./IEpcisBizTransaction.js";
import type { IEpcisDestination } from "./IEpcisDestination.js";
import type { IEpcisEvent } from "./IEpcisEvent.js";
import type { IEpcisIlmd } from "./IEpcisIlmd.js";
import type { IEpcisLocation } from "./IEpcisLocation.js";
import type { IEpcisPersistentDisposition } from "./IEpcisPersistentDisposition.js";
import type { IEpcisQuantity } from "./IEpcisQuantity.js";
import type { IEpcisSensorElement } from "./IEpcisSensorElement.js";
import type { IEpcisSource } from "./IEpcisSource.js";

/**
 * EPCIS 2.0 ObjectEvent describing one or more objects (instance- or class-level)
 * observed at a point in the business process.
 *
 * @see https://ref.gs1.org/epcis/ObjectEvent
 */
export interface IEpcisObjectEvent extends IEpcisEvent {
	/**
	 * Fixed to ObjectEvent.
	 */
	type: typeof EpcisTypes.ObjectEvent;

	/**
	 * (Optional) Unordered list of one or more EPCs naming specific objects to which
	 * the event pertained.
	 */
	epcList?: string[];

	/**
	 * Unordered list of one or more QuantityElements identifying contained objects at
	 * the class level.
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
	 * Persistent disposition.
	 */
	persistentDisposition?: IEpcisPersistentDisposition;

	/**
	 * (Optional) The read point at which the event took place.
	 */
	readPoint?: IEpcisLocation;

	/**
	 * (Optional) The business location where the objects associated with the EPCs may
	 * be found, until contradicted by a subsequent event.
	 */
	bizLocation?: IEpcisLocation;

	/**
	 * (Optional) Unordered list of business transactions that define the context of
	 * this event.
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

	/**
	 * (Optional) Instance/Lot master data that describes the objects created during
	 * this event.
	 */
	ilmd?: IEpcisIlmd;
}
