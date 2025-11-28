// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonSchema } from "@twin.org/data-core";
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import { TransferProcessTypes } from "../models/transferProcess/transferProcessTypes.js";
import DataAddress from "../schemas/DataAddress.json" with { type: "json" };
import EndpointProperty from "../schemas/EndpointProperty.json" with { type: "json" };
import TransferCompletionMessage from "../schemas/TransferCompletionMessage.json" with { type: "json" };
import TransferError from "../schemas/TransferError.json" with { type: "json" };
import TransferProcess from "../schemas/TransferProcess.json" with { type: "json" };
import TransferRequestMessage from "../schemas/TransferRequestMessage.json" with { type: "json" };
import TransferStartMessage from "../schemas/TransferStartMessage.json" with { type: "json" };
import TransferSuspensionMessage from "../schemas/TransferSuspensionMessage.json" with { type: "json" };
import TransferTerminationMessage from "../schemas/TransferTerminationMessage.json" with { type: "json" };

/**
 * Handle all the transfer process data types for Dataspace Protocol.
 */
export class TransferProcessDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${TransferProcessTypes.DataAddress}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: TransferProcessTypes.DataAddress,
				jsonSchema: async () => DataAddress as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${TransferProcessTypes.EndpointProperty}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: TransferProcessTypes.EndpointProperty,
				jsonSchema: async () => EndpointProperty as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${TransferProcessTypes.TransferCompletionMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: TransferProcessTypes.TransferCompletionMessage,
				jsonSchema: async () => TransferCompletionMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${TransferProcessTypes.TransferError}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: TransferProcessTypes.TransferError,
				jsonSchema: async () => TransferError as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${TransferProcessTypes.TransferProcess}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: TransferProcessTypes.TransferProcess,
				jsonSchema: async () => TransferProcess as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${TransferProcessTypes.TransferRequestMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: TransferProcessTypes.TransferRequestMessage,
				jsonSchema: async () => TransferRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${TransferProcessTypes.TransferStartMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: TransferProcessTypes.TransferStartMessage,
				jsonSchema: async () => TransferStartMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${TransferProcessTypes.TransferSuspensionMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: TransferProcessTypes.TransferSuspensionMessage,
				jsonSchema: async () => TransferSuspensionMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${TransferProcessTypes.TransferTerminationMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: TransferProcessTypes.TransferTerminationMessage,
				jsonSchema: async () => TransferTerminationMessage as IJsonSchema
			})
		);
	}
}
