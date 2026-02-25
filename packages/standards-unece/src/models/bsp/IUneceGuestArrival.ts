// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceTransportModeCodeList } from "../lists/uneceTransportModeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The act of coming to or reaching a place by a specified guest.
 * @see https://vocabulary.uncefact.org/GuestArrival
 */
export interface IUneceGuestArrival {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.GuestArrival;

	/**
	 * The identifier of the carrier for this specified guest arrival.
	 * @see https://vocabulary.uncefact.org/carrierId
	 */
	carrierId?: string;

	/**
	 * A carrier's name, expressed as text, related to this specified guest arrival.
	 * @see https://vocabulary.uncefact.org/carrierName
	 */
	carrierName?: string;

	/**
	 * The date, time, date time, or other date time value when this specified guest arrival is expected.
	 * @see https://vocabulary.uncefact.org/expectedDateTime
	 */
	expectedDateTime?: string;

	/**
	 * The code specifying the transport mode of this specified guest arrival.
	 * @see https://vocabulary.uncefact.org/transportModeCode
	 */
	transportModeCode?: UneceTransportModeCodeList;
}
