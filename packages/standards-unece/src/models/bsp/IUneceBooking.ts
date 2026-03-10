// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A result of a financial transaction recorded within a financial account.
 * @see https://vocabulary.uncefact.org/Booking
 */
export interface IUneceBooking {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Booking;

	/**
	 * An actual date, time, date time, or other date time value of this financial booking.
	 * @see https://vocabulary.uncefact.org/actualDateTime
	 * @format date-time
	 */
	actualDateTime?: string;

	/**
	 * The credit date, time, date time, or other date time value of this financial booking.
	 * @see https://vocabulary.uncefact.org/creditDateTime
	 * @format date-time
	 */
	creditDateTime?: string;

	/**
	 * The debit date, time, date time, or other date time value of this financial booking.
	 * @see https://vocabulary.uncefact.org/debitDateTime
	 * @format date-time
	 */
	debitDateTime?: string;
}
