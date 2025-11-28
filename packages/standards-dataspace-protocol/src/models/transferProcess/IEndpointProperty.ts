// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { TransferProcessTypes } from "./transferProcessTypes.js";

/**
 * Interface for Dataspace Protocol Transfer Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#lower-level-types
 */
export interface IEndpointProperty {
	/**
	 * LD Type.
	 */
	"@type": typeof TransferProcessTypes.EndpointProperty;

	/**
	 * Property name.
	 */
	name: string;

	/**
	 * Property value.
	 */
	value: string;
}
