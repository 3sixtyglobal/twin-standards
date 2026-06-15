// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { DataspaceProtocolCatalogTypes } from "./dataspaceProtocolCatalogTypes.js";

/**
 * Interface for the Dataspace Protocol dataset request message.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#dataset-request-message
 */
export interface IDataspaceProtocolDatasetRequestMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof DataspaceProtocolCatalogTypes.DatasetRequestMessage;

	/**
	 * The identifier of the dataset.
	 */
	dataset: string;
}
