// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcsaEventMetadataRetraction } from "./IDcsaEventMetadataRetraction.js";

/**
 * Retraction event.
 */
export interface IDcsaEventRetraction {
	/**
	 * Retraction metadata.
	 */
	metadata: IDcsaEventMetadataRetraction;
	/**
	 * Retractions do not carry payloads.
	 */
	payload?: never;
}
