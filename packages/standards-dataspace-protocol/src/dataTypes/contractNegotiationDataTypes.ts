// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonSchema } from "@twin.org/data-core";
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { DataspaceProtocolContractNegotiationTypes } from "../models/contractNegotiation/dataspaceProtocolContractNegotiationTypes.js";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import ContractAgreementMessage from "../schemas/DataspaceProtocolContractAgreementMessage.json" with { type: "json" };
import ContractAgreementVerificationMessage from "../schemas/DataspaceProtocolContractAgreementVerificationMessage.json" with { type: "json" };
import ContractNegotiation from "../schemas/DataspaceProtocolContractNegotiation.json" with { type: "json" };
import ContractNegotiationError from "../schemas/DataspaceProtocolContractNegotiationError.json" with { type: "json" };
import ContractNegotiationEventMessage from "../schemas/DataspaceProtocolContractNegotiationEventMessage.json" with { type: "json" };
import ContractNegotiationEventType from "../schemas/DataspaceProtocolContractNegotiationEventType.json" with { type: "json" };
import ContractNegotiationStateType from "../schemas/DataspaceProtocolContractNegotiationStateType.json" with { type: "json" };
import ContractNegotiationTerminationMessage from "../schemas/DataspaceProtocolContractNegotiationTerminationMessage.json" with { type: "json" };
import ContractOfferMessage from "../schemas/DataspaceProtocolContractOfferMessage.json" with { type: "json" };
import ContractRequestMessage from "../schemas/DataspaceProtocolContractRequestMessage.json" with { type: "json" };

/**
 * Handle all the contract negotiation data types for Dataspace Protocol.
 */
export class ContractNegotiationDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolContractNegotiationTypes.ContractAgreementMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolContractNegotiationTypes.ContractAgreementMessage,
				jsonSchema: async () => ContractAgreementMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolContractNegotiationTypes.ContractAgreementVerificationMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolContractNegotiationTypes.ContractAgreementVerificationMessage,
				jsonSchema: async () => ContractAgreementVerificationMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolContractNegotiationTypes.ContractNegotiation}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolContractNegotiationTypes.ContractNegotiation,
				jsonSchema: async () => ContractNegotiation as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolContractNegotiationTypes.ContractNegotiationError}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolContractNegotiationTypes.ContractNegotiationError,
				jsonSchema: async () => ContractNegotiationError as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolContractNegotiationTypes.ContractNegotiationEventMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolContractNegotiationTypes.ContractNegotiationEventMessage,
				jsonSchema: async () => ContractNegotiationEventMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolContractNegotiationTypes.ContractNegotiationTerminationMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolContractNegotiationTypes.ContractNegotiationTerminationMessage,
				jsonSchema: async () => ContractNegotiationTerminationMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolContractNegotiationTypes.ContractOfferMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolContractNegotiationTypes.ContractOfferMessage,
				jsonSchema: async () => ContractOfferMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolContractNegotiationTypes.ContractRequestMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolContractNegotiationTypes.ContractRequestMessage,
				jsonSchema: async () => ContractRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolContractNegotiationTypes.ContractNegotiationEventType}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolContractNegotiationTypes.ContractNegotiationEventType,
				jsonSchema: async () => ContractNegotiationEventType as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${DataspaceProtocolContractNegotiationTypes.ContractNegotiationStateType}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: DataspaceProtocolContractNegotiationTypes.ContractNegotiationStateType,
				jsonSchema: async () => ContractNegotiationStateType as IJsonSchema
			})
		);
	}
}
