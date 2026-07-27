// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Binding type identifiers for the Dataspace Protocol version endpoint.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#exposure-of-dataspace-protocol-versions
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DataspaceProtocolVersionBindingType = {
	/**
	 * HTTPS binding.
	 */
	HTTPS: "HTTPS"
} as const;

/**
 * The binding types for the Dataspace Protocol version endpoint.
 */
export type DataspaceProtocolVersionBindingType =
	(typeof DataspaceProtocolVersionBindingType)[keyof typeof DataspaceProtocolVersionBindingType];
