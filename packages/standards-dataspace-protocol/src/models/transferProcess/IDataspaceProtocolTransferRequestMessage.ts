// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { DataspaceProtocolTransferProcessTypes } from "./dataspaceProtocolTransferProcessTypes.js";
import type { IDataspaceProtocolDataAddress } from "./IDataspaceProtocolDataAddress.js";

/**
 * Interface for the Dataspace Protocol transfer request message.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#transfer-request-message
 */
export interface IDataspaceProtocolTransferRequestMessage {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The JSON-LD type.
	 */
	"@type": typeof DataspaceProtocolTransferProcessTypes.TransferRequestMessage;

	/**
	 * MUST refer to an existing Agreement between the Consumer and Provider.
	 */
	agreementId: string;

	/**
	 * MUST be a URI indicating where messages to the Consumer SHOULD be sent.
	 */
	callbackAddress: string;

	/**
	 * MUST refer to the transfer identifier of the Consumer side.
	 */
	consumerPid: string;

	/**
	 * The format property is a format specified by a Distribution for the Dataset associated with the Agreement.
	 * This is generally obtained from the Provider's Catalog.
	 */
	format: string;

	/**
	 * If defined MUST contain a transport-specific set of properties for pushing the data.
	 * It MAY include an endpoint, a temporary authorization via the endpointProperties property - depending on the endpointType.
	 */
	dataAddress?: IDataspaceProtocolDataAddress;
}
