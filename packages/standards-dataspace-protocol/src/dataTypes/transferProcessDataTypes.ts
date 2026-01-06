// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonSchema } from "@twin.org/data-core";
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import { DataspaceProtocolTransferProcessTypes } from "../models/transferProcess/dataspaceProtocolTransferProcessTypes.js";
import DataAddress from "../schemas/DataspaceProtocolDataAddress.json" with { type: "json" };
import EndpointProperty from "../schemas/DataspaceProtocolEndpointProperty.json" with { type: "json" };
import TransferCompletionMessage from "../schemas/DataspaceProtocolTransferCompletionMessage.json" with { type: "json" };
import TransferError from "../schemas/DataspaceProtocolTransferError.json" with { type: "json" };
import TransferProcess from "../schemas/DataspaceProtocolTransferProcess.json" with { type: "json" };
import TransferRequestMessage from "../schemas/DataspaceProtocolTransferRequestMessage.json" with { type: "json" };
import TransferStartMessage from "../schemas/DataspaceProtocolTransferStartMessage.json" with { type: "json" };
import TransferSuspensionMessage from "../schemas/DataspaceProtocolTransferSuspensionMessage.json" with { type: "json" };
import TransferTerminationMessage from "../schemas/DataspaceProtocolTransferTerminationMessage.json" with { type: "json" };

/**
 * Handle all the transfer process data types for Dataspace Protocol.
 */
export class TransferProcessDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolTransferProcessTypes.DataAddress}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolTransferProcessTypes.DataAddress,
				jsonSchema: async () => DataAddress as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolTransferProcessTypes.EndpointProperty}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolTransferProcessTypes.EndpointProperty,
				jsonSchema: async () => EndpointProperty as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolTransferProcessTypes.TransferCompletionMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolTransferProcessTypes.TransferCompletionMessage,
				jsonSchema: async () => TransferCompletionMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolTransferProcessTypes.TransferError}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolTransferProcessTypes.TransferError,
				jsonSchema: async () => TransferError as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolTransferProcessTypes.TransferProcess}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolTransferProcessTypes.TransferProcess,
				jsonSchema: async () => TransferProcess as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolTransferProcessTypes.TransferRequestMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolTransferProcessTypes.TransferRequestMessage,
				jsonSchema: async () => TransferRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolTransferProcessTypes.TransferStartMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolTransferProcessTypes.TransferStartMessage,
				jsonSchema: async () => TransferStartMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolTransferProcessTypes.TransferSuspensionMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolTransferProcessTypes.TransferSuspensionMessage,
				jsonSchema: async () => TransferSuspensionMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolTransferProcessTypes.TransferTerminationMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolTransferProcessTypes.TransferTerminationMessage,
				jsonSchema: async () => TransferTerminationMessage as IJsonSchema
			})
		);
	}
}
