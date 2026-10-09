// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@3sixty/core";
import type { EpcisContextType } from "./epcisContextType.js";
import type { IEpcisErrorDeclaration } from "./IEpcisErrorDeclaration.js";

/**
 * Base EPCIS 2.0 Event carrying shared fields across all event types.
 * @see https://ref.gs1.org/epcis/Event
 */
export interface IEpcisEvent {
	/**
	 * JSON-LD @context.
	 */
	"@context": EpcisContextType;

	/**
	 * Type of Event.
	 */
	type: string;

	/**
	 * URI identifier of a specific EPCIS event (alias of id in JSON or XML).
	 */
	eventID?: string;

	/**
	 * (Optional) CertificationDetails relevant for Objects, Places and/or
	 * Organizations mentioned in this Event.
	 */
	certificationInfo?: ObjectOrArray<string>;

	/**
	 * Error declaration.
	 */
	errorDeclaration?: IEpcisErrorDeclaration;

	/**
	 * The date and time at which the EPCIS Capturing Applications asserts the event
	 * occurred.
	 */
	eventTime: string;

	/**
	 * The time zone offset in effect at the time and place the event occurred,
	 * expressed as an offset from UTC.
	 */
	eventTimeZoneOffset: string;

	/**
	 * (Optional) The date and time at which this event was recorded by an EPCIS
	 * Repository; ignored at capture and present on query results.
	 */
	recordTime?: string;
}
