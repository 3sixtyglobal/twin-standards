// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { CatalogTypes } from "./catalogTypes.js";

/**
 * Interface for Dataspace Protocol Dataset Request Messages.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#dataset-request-message
 */
export interface IDatasetRequestMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof CatalogTypes.DatasetRequestMessage;

	/**
	 * The identifier of the dataset.
	 */
	dataset: string;
}
