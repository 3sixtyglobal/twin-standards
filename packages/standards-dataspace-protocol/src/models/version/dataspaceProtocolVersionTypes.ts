// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Type identifiers for the Dataspace Protocol version endpoint.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#exposure-of-dataspace-protocol-versions
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DataspaceProtocolVersionTypes = {
	/**
	 * Version Response.
	 */
	VersionResponse: "VersionResponse",

	/**
	 * Version.
	 */
	Version: "Version",

	/**
	 * Version Auth.
	 */
	Auth: "Auth",

	/**
	 * Version Binding Type.
	 */
	VersionBindingType: "VersionBindingType"
} as const;

/**
 * The types for the Dataspace Protocol version endpoint.
 */
export type DataspaceProtocolVersionTypes =
	(typeof DataspaceProtocolVersionTypes)[keyof typeof DataspaceProtocolVersionTypes];
