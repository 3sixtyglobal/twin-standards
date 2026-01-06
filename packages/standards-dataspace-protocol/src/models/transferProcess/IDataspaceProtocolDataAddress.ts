// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolTransferProcessTypes } from "./dataspaceProtocolTransferProcessTypes.js";
import type { IDataspaceProtocolEndpointProperty } from "./IDataspaceProtocolEndpointProperty.js";

/**
 * Interface for Dataspace Protocol Transfer Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#lower-level-types
 */
export interface IDataspaceProtocolDataAddress {
	/**
	 * LD Type
	 */
	"@type": typeof DataspaceProtocolTransferProcessTypes.DataAddress;

	/**
	 * The type of endpoint of this data address.
	 */
	endpointType: string;

	/**
	 * The endpoint of the data address
	 */
	endpoint?: string;

	/**
	 * Properties associated to the endpoint which might depend on the endpoint type.
	 */
	endpointProperties?: IDataspaceProtocolEndpointProperty[];
}
