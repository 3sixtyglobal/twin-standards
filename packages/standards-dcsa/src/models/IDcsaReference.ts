// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * A generic reference (shipper/forwarder references).
 *
 * The OpenAPI references a shared `referenceType` enum from DCSA_DOMAIN; this
 * package does not model it yet, so `type` is left as a string.
 */
export interface IDcsaReference {
	/**
	 * Reference type.
	 */
	type: string;
	/**
	 * Reference value.
	 */
	value: string;
}
