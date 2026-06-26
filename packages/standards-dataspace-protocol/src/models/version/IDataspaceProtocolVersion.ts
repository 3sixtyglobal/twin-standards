// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDataspaceProtocolAuth } from "./IDataspaceProtocolAuth.js";
import type { DataspaceProtocolVersionBindingType } from "./types/dataspaceProtocolVersionBindingType.js";

/**
 * Interface for a single supported Dataspace Protocol version entry.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#exposure-of-dataspace-protocol-versions
 */
export interface IDataspaceProtocolVersion {
	/**
	 * The protocol version identifier (e.g. "2025-1"). An open string to accommodate future
	 * versions; known values are "0.8", "2024-1", and "2025-1".
	 */
	version: string;

	/**
	 * The URL path prefix at which the versioned endpoints are served (e.g. "/dsp/2025-1").
	 */
	path: string;

	/**
	 * The transport binding for this version's endpoints.
	 */
	binding: DataspaceProtocolVersionBindingType;

	/**
	 * Data Service identifier, allowing a Data Service to group multiple version entries.
	 * Corresponds to the `@id` of the Data Service in the DID document.
	 */
	serviceId?: string;

	/**
	 * Participant identifier scheme (e.g. "did:web", "D-U-N-S").
	 */
	identifierType?: string;

	/**
	 * Authentication descriptor for the versioned endpoints.
	 */
	auth?: IDataspaceProtocolAuth;
}
