// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDataspaceProtocolVersion } from "./IDataspaceProtocolVersion.js";

/**
 * Interface for the response from the GET /.well-known/dspace-version discovery endpoint.
 * This endpoint MUST be unversioned and unauthenticated per RFC 8615.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#exposure-of-dataspace-protocol-versions
 */
export interface IDataspaceProtocolVersionResponse {
	/**
	 * The list of Dataspace Protocol versions supported by this connector. Must contain at least
	 * one entry.
	 */
	protocolVersions: [IDataspaceProtocolVersion, ...IDataspaceProtocolVersion[]];
}
