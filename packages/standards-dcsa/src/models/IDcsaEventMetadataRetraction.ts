// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcsaEventMetadataBase } from "./IDcsaEventMetadataBase.js";

/**
 * Retraction event metadata.
 *
 * If `retractedEventID` is provided, the event MUST NOT include a payload.
 */
export type IDcsaEventMetadataRetraction = IDcsaEventMetadataBase & {
	/**
	 * The `eventID` of the event being retracted.
	 */
	retractedEventID: string;
};
