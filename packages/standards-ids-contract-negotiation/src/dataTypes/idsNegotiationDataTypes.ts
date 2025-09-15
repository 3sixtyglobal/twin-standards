// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonSchema } from "@twin.org/data-core";
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { IdsContractNegotiationContexts } from "../models/idsContractNegotiationContexts";
import { IdsContractNegotiationTypes } from "../models/idsContractNegotiationTypes";
import IdsContractAgreementMessage from "../schemas/IdsContractAgreementMessage.json";
import IdsContractAgreementVerificationMessage from "../schemas/IdsContractAgreementVerificationMessage.json";
import IdsContractNegotiation from "../schemas/IdsContractNegotiation.json";
import IdsContractNegotiationError from "../schemas/IdsContractNegotiationError.json";
import IdsContractNegotiationEventMessage from "../schemas/IdsContractNegotiationEventMessage.json";
import IdsContractNegotiationEventType from "../schemas/IdsContractNegotiationEventType.json";
import IdsContractNegotiationStateType from "../schemas/IdsContractNegotiationStateType.json";
import IdsContractNegotiationTerminationMessage from "../schemas/IdsContractNegotiationTerminationMessage.json";
import IdsContractOfferMessage from "../schemas/IdsContractOfferMessage.json";
import IdsContractRequestMessage from "../schemas/IdsContractRequestMessage.json";

/**
 * Handle all the data types for IDS Contract Negotiation.
 */
export class IdsNegotiationDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(
			new RegExp(IdsContractNegotiationContexts.ContextRoot),
			IdsContractNegotiationContexts.ContextRedirect
		);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(
			`${IdsContractNegotiationContexts.ContextRoot}${IdsContractNegotiationTypes.ContractAgreementMessage}`,
			() => ({
				context: IdsContractNegotiationContexts.ContextRoot,
				type: IdsContractNegotiationTypes.ContractAgreementMessage,
				jsonSchema: async () => IdsContractAgreementMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${IdsContractNegotiationContexts.ContextRoot}${IdsContractNegotiationTypes.ContractAgreementVerificationMessage}`,
			() => ({
				context: IdsContractNegotiationContexts.ContextRoot,
				type: IdsContractNegotiationTypes.ContractAgreementVerificationMessage,
				jsonSchema: async () => IdsContractAgreementVerificationMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${IdsContractNegotiationContexts.ContextRoot}${IdsContractNegotiationTypes.ContractNegotiation}`,
			() => ({
				context: IdsContractNegotiationContexts.ContextRoot,
				type: IdsContractNegotiationTypes.ContractNegotiation,
				jsonSchema: async () => IdsContractNegotiation as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${IdsContractNegotiationContexts.ContextRoot}${IdsContractNegotiationTypes.ContractNegotiationError}`,
			() => ({
				context: IdsContractNegotiationContexts.ContextRoot,
				type: IdsContractNegotiationTypes.ContractNegotiationError,
				jsonSchema: async () => IdsContractNegotiationError as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${IdsContractNegotiationContexts.ContextRoot}${IdsContractNegotiationTypes.ContractNegotiationEventMessage}`,
			() => ({
				context: IdsContractNegotiationContexts.ContextRoot,
				type: IdsContractNegotiationTypes.ContractNegotiationEventMessage,
				jsonSchema: async () => IdsContractNegotiationEventMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${IdsContractNegotiationContexts.ContextRoot}${IdsContractNegotiationTypes.ContractNegotiationTerminationMessage}`,
			() => ({
				context: IdsContractNegotiationContexts.ContextRoot,
				type: IdsContractNegotiationTypes.ContractNegotiationTerminationMessage,
				jsonSchema: async () => IdsContractNegotiationTerminationMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${IdsContractNegotiationContexts.ContextRoot}${IdsContractNegotiationTypes.ContractOfferMessage}`,
			() => ({
				context: IdsContractNegotiationContexts.ContextRoot,
				type: IdsContractNegotiationTypes.ContractOfferMessage,
				jsonSchema: async () => IdsContractOfferMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${IdsContractNegotiationContexts.ContextRoot}${IdsContractNegotiationTypes.ContractRequestMessage}`,
			() => ({
				context: IdsContractNegotiationContexts.ContextRoot,
				type: IdsContractNegotiationTypes.ContractRequestMessage,
				jsonSchema: async () => IdsContractRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${IdsContractNegotiationContexts.ContextRoot}${IdsContractNegotiationTypes.ContractNegotiationEventType}`,
			() => ({
				context: IdsContractNegotiationContexts.ContextRoot,
				type: IdsContractNegotiationTypes.ContractNegotiationEventType,
				jsonSchema: async () => IdsContractNegotiationEventType as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${IdsContractNegotiationContexts.ContextRoot}${IdsContractNegotiationTypes.ContractNegotiationStateType}`,
			() => ({
				context: IdsContractNegotiationContexts.ContextRoot,
				type: IdsContractNegotiationTypes.ContractNegotiationStateType,
				jsonSchema: async () => IdsContractNegotiationStateType as IJsonSchema
			})
		);
	}
}
