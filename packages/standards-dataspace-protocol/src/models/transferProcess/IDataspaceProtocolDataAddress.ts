// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolTransferProcessTypes } from "./dataspaceProtocolTransferProcessTypes.js";
import type { IDataspaceProtocolEndpointProperty } from "./IDataspaceProtocolEndpointProperty.js";

/**
 * Interface for a Dataspace Protocol data address.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#lower-level-types
 */
export interface IDataspaceProtocolDataAddress {
	/**
	 * The JSON-LD type.
	 */
	"@type": typeof DataspaceProtocolTransferProcessTypes.DataAddress;

	/**
	 * The endpoint type identifier.
	 */
	endpointType: string;

	/**
	 * The endpoint URL or address.
	 */
	endpoint?: string;

	/**
	 * Transport-specific endpoint properties.
	 */
	endpointProperties?: IDataspaceProtocolEndpointProperty[];
}
