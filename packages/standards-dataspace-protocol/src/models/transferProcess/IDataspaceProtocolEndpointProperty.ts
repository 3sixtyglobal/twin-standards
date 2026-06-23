// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolTransferProcessTypes } from "./dataspaceProtocolTransferProcessTypes.js";

/**
 * Interface for a Dataspace Protocol endpoint property key-value pair.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#lower-level-types
 */
export interface IDataspaceProtocolEndpointProperty {
	/**
	 * The JSON-LD type.
	 */
	"@type": typeof DataspaceProtocolTransferProcessTypes.EndpointProperty;

	/**
	 * The property name.
	 */
	name: string;

	/**
	 * The property value.
	 */
	value: string;
}
