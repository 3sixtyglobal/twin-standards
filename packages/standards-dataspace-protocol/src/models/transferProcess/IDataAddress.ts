// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IEndpointProperty } from "./IEndpointProperty.js";
import type { TransferProcessTypes } from "./transferProcessTypes.js";

/**
 * Interface for Dataspace Protocol Transfer Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#lower-level-types
 */
export interface IDataAddress {
	/**
	 * LD Type
	 */
	"@type": typeof TransferProcessTypes.DataAddress;

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
	endpointProperties?: IEndpointProperty[];
}
