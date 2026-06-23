// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { EpcisContextType } from "./epcisContextType.js";
import type { EpcisEvents } from "./epcisEvents.js";
import type { EpcisTypes } from "./epcisTypes.js";
import type { IEpcisHeader } from "./IEpcisHeader.js";

/**
 * EPCIS 2.0 capture document containing header metadata and an event list.
 * @see https://ref.gs1.org/epcis/EPCISDocument
 */
export interface IEpcisDocument {
	/**
	 * The @context.
	 */
	"@context": EpcisContextType;

	/**
	 * The JSON-LD document id.
	 */
	id?: string;

	/**
	 * JSON-LD Type.
	 */
	type: typeof EpcisTypes.EPCISDocument;

	/**
	 * Schema version.
	 */
	schemaVersion: string;

	/**
	 * Creation Date.
	 */
	creationDate: string;

	/**
	 * (Optional) The instance identifier of an EPCISDocument.
	 */
	instanceIdentifier?: string;

	/**
	 * (Optional) The sender of an EPCISDocument.
	 */
	sender?: string;

	/**
	 * (Optional) The intended receiver of an EPCISDocument.
	 */
	receiver?: string;

	/**
	 * EPCIS Header.
	 */
	epcisHeader?: IEpcisHeader;

	/**
	 * The EPCIS Body.
	 */
	epcisBody: {
		/**
		 * The list of events.
		 */
		eventList: EpcisEvents[];
	};
}
