// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Interface for the authentication descriptor on a versioned Dataspace Protocol endpoint.
 * Describes the authentication mechanism required to call the versioned endpoint (not for the
 * unauthenticated /.well-known/dspace-version discovery endpoint itself).
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#exposure-of-dataspace-protocol-versions
 */
export interface IDataspaceProtocolAuth {
	/**
	 * The authentication protocol identifier (e.g. "OAuth2", "DCP").
	 */
	protocol: string;

	/**
	 * The version of the authentication protocol.
	 */
	version: string;

	/**
	 * List of authentication profile identifiers.
	 */
	profile?: string[];
}
