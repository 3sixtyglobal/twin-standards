// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@3sixty/data-core";
import * as CompiledValidators from "../compiled/validators.js";
import { DataspaceProtocolContractNegotiationTypes } from "../models/contractNegotiation/dataspaceProtocolContractNegotiationTypes.js";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import ContractAgreementMessageSchema from "../schemas/DataspaceProtocolContractAgreementMessage.json" with { type: "json" };
import ContractAgreementVerificationMessageSchema from "../schemas/DataspaceProtocolContractAgreementVerificationMessage.json" with { type: "json" };
import ContractNegotiationSchema from "../schemas/DataspaceProtocolContractNegotiation.json" with { type: "json" };
import ContractNegotiationErrorSchema from "../schemas/DataspaceProtocolContractNegotiationError.json" with { type: "json" };
import ContractNegotiationEventMessageSchema from "../schemas/DataspaceProtocolContractNegotiationEventMessage.json" with { type: "json" };
import ContractNegotiationEventTypeSchema from "../schemas/DataspaceProtocolContractNegotiationEventType.json" with { type: "json" };
import ContractNegotiationStateTypeSchema from "../schemas/DataspaceProtocolContractNegotiationStateType.json" with { type: "json" };
import ContractNegotiationTerminationMessageSchema from "../schemas/DataspaceProtocolContractNegotiationTerminationMessage.json" with { type: "json" };
import ContractOfferMessageSchema from "../schemas/DataspaceProtocolContractOfferMessage.json" with { type: "json" };
import ContractRequestMessageSchema from "../schemas/DataspaceProtocolContractRequestMessage.json" with { type: "json" };

/**
 * Handle all the contract negotiation data types for Dataspace Protocol.
 */
export class ContractNegotiationDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		const types = [
			{
				type: DataspaceProtocolContractNegotiationTypes.ContractAgreementMessage,
				schema: ContractAgreementMessageSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolContractAgreementMessage
			},
			{
				type: DataspaceProtocolContractNegotiationTypes.ContractAgreementVerificationMessage,
				schema: ContractAgreementVerificationMessageSchema,
				compiledValidator:
					CompiledValidators.CompiledDataspaceProtocolContractAgreementVerificationMessage
			},
			{
				type: DataspaceProtocolContractNegotiationTypes.ContractNegotiation,
				schema: ContractNegotiationSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolContractNegotiation
			},
			{
				type: DataspaceProtocolContractNegotiationTypes.ContractNegotiationError,
				schema: ContractNegotiationErrorSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolContractNegotiationError
			},
			{
				type: DataspaceProtocolContractNegotiationTypes.ContractNegotiationEventMessage,
				schema: ContractNegotiationEventMessageSchema,
				compiledValidator:
					CompiledValidators.CompiledDataspaceProtocolContractNegotiationEventMessage
			},
			{
				type: DataspaceProtocolContractNegotiationTypes.ContractNegotiationTerminationMessage,
				schema: ContractNegotiationTerminationMessageSchema,
				compiledValidator:
					CompiledValidators.CompiledDataspaceProtocolContractNegotiationTerminationMessage
			},
			{
				type: DataspaceProtocolContractNegotiationTypes.ContractOfferMessage,
				schema: ContractOfferMessageSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolContractOfferMessage
			},
			{
				type: DataspaceProtocolContractNegotiationTypes.ContractRequestMessage,
				schema: ContractRequestMessageSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolContractRequestMessage
			},
			{
				type: DataspaceProtocolContractNegotiationTypes.ContractNegotiationEventType,
				schema: ContractNegotiationEventTypeSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolContractNegotiationEventType
			},
			{
				type: DataspaceProtocolContractNegotiationTypes.ContractNegotiationStateType,
				schema: ContractNegotiationStateTypeSchema,
				compiledValidator: CompiledValidators.CompiledDataspaceProtocolContractNegotiationStateType
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
