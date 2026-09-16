// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import { DataspaceProtocolTransferProcessTypes } from "../models/transferProcess/dataspaceProtocolTransferProcessTypes.js";
import DataAddressSchema from "../schemas/DataspaceProtocolDataAddress.json" with { type: "json" };
import EndpointPropertySchema from "../schemas/DataspaceProtocolEndpointProperty.json" with { type: "json" };
import TransferCompletionMessageSchema from "../schemas/DataspaceProtocolTransferCompletionMessage.json" with { type: "json" };
import TransferErrorSchema from "../schemas/DataspaceProtocolTransferError.json" with { type: "json" };
import TransferProcessSchema from "../schemas/DataspaceProtocolTransferProcess.json" with { type: "json" };
import TransferProcessStateTypeSchema from "../schemas/DataspaceProtocolTransferProcessStateType.json" with { type: "json" };
import TransferRequestMessageSchema from "../schemas/DataspaceProtocolTransferRequestMessage.json" with { type: "json" };
import TransferStartMessageSchema from "../schemas/DataspaceProtocolTransferStartMessage.json" with { type: "json" };
import TransferSuspensionMessageSchema from "../schemas/DataspaceProtocolTransferSuspensionMessage.json" with { type: "json" };
import TransferTerminationMessageSchema from "../schemas/DataspaceProtocolTransferTerminationMessage.json" with { type: "json" };

/**
 * Handle all the transfer process data types for Dataspace Protocol.
 */
export class TransferProcessDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		const types = [
			{
				type: DataspaceProtocolTransferProcessTypes.DataAddress,
				schema: DataAddressSchema
			},
			{
				type: DataspaceProtocolTransferProcessTypes.EndpointProperty,
				schema: EndpointPropertySchema
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferCompletionMessage,
				schema: TransferCompletionMessageSchema
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferError,
				schema: TransferErrorSchema
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferProcess,
				schema: TransferProcessSchema
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferProcessStateType,
				schema: TransferProcessStateTypeSchema
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferRequestMessage,
				schema: TransferRequestMessageSchema
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferStartMessage,
				schema: TransferStartMessageSchema
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferSuspensionMessage,
				schema: TransferSuspensionMessageSchema
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferTerminationMessage,
				schema: TransferTerminationMessageSchema
			}
		];

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.Namespace,
			DataspaceProtocolContexts.JsonLdContext,
			types
		);

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.JsonSchemaNamespace,
			DataspaceProtocolContexts.JsonLdContext,
			types.map(t => ({ type: `DataspaceProtocol${t.type}`, schema: t.schema }))
		);
	}
}
