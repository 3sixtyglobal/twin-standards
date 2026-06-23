// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcsaEventMetadataBase } from "./IDcsaEventMetadataBase.js";

/**
 * Active event metadata (not a retraction).
 *
 * The OpenAPI schema defines `retractedEventID` with a default of `null`, so we
 * allow it to be omitted or explicitly set to `null`.
 */
export type IDcsaEventMetadataActive = IDcsaEventMetadataBase & {
	/**
	 * Must be `null` (or omitted) for non-retraction events.
	 */
	retractedEventID?: null;
};
