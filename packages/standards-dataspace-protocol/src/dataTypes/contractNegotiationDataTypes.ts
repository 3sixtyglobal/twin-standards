// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonSchema } from "@twin.org/data-core";
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { ContractNegotiationContexts } from "../models/contractNegotiation/contractNegotiationContexts.js";
import { ContractNegotiationTypes } from "../models/contractNegotiation/contractNegotiationTypes.js";
import ContractAgreementMessage from "../schemas/ContractAgreementMessage.json" with { type: "json" };
import ContractAgreementVerificationMessage from "../schemas/ContractAgreementVerificationMessage.json" with { type: "json" };
import ContractNegotiation from "../schemas/ContractNegotiation.json" with { type: "json" };
import ContractNegotiationError from "../schemas/ContractNegotiationError.json" with { type: "json" };
import ContractNegotiationEventMessage from "../schemas/ContractNegotiationEventMessage.json" with { type: "json" };
import ContractNegotiationEventType from "../schemas/ContractNegotiationEventType.json" with { type: "json" };
import ContractNegotiationStateType from "../schemas/ContractNegotiationStateType.json" with { type: "json" };
import ContractNegotiationTerminationMessage from "../schemas/ContractNegotiationTerminationMessage.json" with { type: "json" };
import ContractOfferMessage from "../schemas/ContractOfferMessage.json" with { type: "json" };
import ContractRequestMessage from "../schemas/ContractRequestMessage.json" with { type: "json" };

/**
 * Handle all the data types for Dataspace Protocol Contract Negotiation.
 */
export class ContractNegotiationDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(
			new RegExp(ContractNegotiationContexts.ContextRoot),
			ContractNegotiationContexts.ContextRedirect
		);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(
			`${ContractNegotiationContexts.ContextRoot}${ContractNegotiationTypes.ContractAgreementMessage}`,
			() => ({
				context: ContractNegotiationContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractAgreementMessage,
				jsonSchema: async () => ContractAgreementMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${ContractNegotiationContexts.ContextRoot}${ContractNegotiationTypes.ContractAgreementVerificationMessage}`,
			() => ({
				context: ContractNegotiationContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractAgreementVerificationMessage,
				jsonSchema: async () => ContractAgreementVerificationMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${ContractNegotiationContexts.ContextRoot}${ContractNegotiationTypes.ContractNegotiation}`,
			() => ({
				context: ContractNegotiationContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractNegotiation,
				jsonSchema: async () => ContractNegotiation as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${ContractNegotiationContexts.ContextRoot}${ContractNegotiationTypes.ContractNegotiationError}`,
			() => ({
				context: ContractNegotiationContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractNegotiationError,
				jsonSchema: async () => ContractNegotiationError as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${ContractNegotiationContexts.ContextRoot}${ContractNegotiationTypes.ContractNegotiationEventMessage}`,
			() => ({
				context: ContractNegotiationContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractNegotiationEventMessage,
				jsonSchema: async () => ContractNegotiationEventMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${ContractNegotiationContexts.ContextRoot}${ContractNegotiationTypes.ContractNegotiationTerminationMessage}`,
			() => ({
				context: ContractNegotiationContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractNegotiationTerminationMessage,
				jsonSchema: async () => ContractNegotiationTerminationMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${ContractNegotiationContexts.ContextRoot}${ContractNegotiationTypes.ContractOfferMessage}`,
			() => ({
				context: ContractNegotiationContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractOfferMessage,
				jsonSchema: async () => ContractOfferMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${ContractNegotiationContexts.ContextRoot}${ContractNegotiationTypes.ContractRequestMessage}`,
			() => ({
				context: ContractNegotiationContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractRequestMessage,
				jsonSchema: async () => ContractRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${ContractNegotiationContexts.ContextRoot}${ContractNegotiationTypes.ContractNegotiationEventType}`,
			() => ({
				context: ContractNegotiationContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractNegotiationEventType,
				jsonSchema: async () => ContractNegotiationEventType as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${ContractNegotiationContexts.ContextRoot}${ContractNegotiationTypes.ContractNegotiationStateType}`,
			() => ({
				context: ContractNegotiationContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractNegotiationStateType,
				jsonSchema: async () => ContractNegotiationStateType as IJsonSchema
			})
		);
	}
}
