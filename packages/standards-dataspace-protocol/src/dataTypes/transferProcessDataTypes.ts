// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import * as CompiledValidators from "../compiled/validators.js";
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
				schema: DataAddressSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolDataAddress
			},
			{
				type: DataspaceProtocolTransferProcessTypes.EndpointProperty,
				schema: EndpointPropertySchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolEndpointProperty
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferCompletionMessage,
				schema: TransferCompletionMessageSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolTransferCompletionMessage
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferError,
				schema: TransferErrorSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolTransferError
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferProcess,
				schema: TransferProcessSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolTransferProcess
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferProcessStateType,
				schema: TransferProcessStateTypeSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolTransferProcessStateType
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferRequestMessage,
				schema: TransferRequestMessageSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolTransferRequestMessage
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferStartMessage,
				schema: TransferStartMessageSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolTransferStartMessage
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferSuspensionMessage,
				schema: TransferSuspensionMessageSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolTransferSuspensionMessage
			},
			{
				type: DataspaceProtocolTransferProcessTypes.TransferTerminationMessage,
				schema: TransferTerminationMessageSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolTransferTerminationMessage
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
			types.map(t => ({
				type: `DataspaceProtocol${t.type}`,
				schema: t.schema,
				compiledValidator: t.compiledValidator
			}))
		);
	}
}
