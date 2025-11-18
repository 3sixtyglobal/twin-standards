// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonSchema } from "@twin.org/data-core";
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { CatalogTypes } from "../models/catalog/catalogTypes.js";
import { ContractNegotiationTypes } from "../models/contractNegotiation/contractNegotiationTypes.js";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import CatalogError from "../schemas/CatalogError.json" with { type: "json" };
import CatalogRequestMessage from "../schemas/CatalogRequestMessage.json" with { type: "json" };
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
import DatasetRequestMessage from "../schemas/DatasetRequestMessage.json" with { type: "json" };

/**
 * Handle all the data types for Dataspace Protocol.
 */
export class DataspaceProtocolDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(
			new RegExp(DataspaceProtocolContexts.ContextRoot),
			DataspaceProtocolContexts.ContextRedirect
		);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${ContractNegotiationTypes.ContractAgreementMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractAgreementMessage,
				jsonSchema: async () => ContractAgreementMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${ContractNegotiationTypes.ContractAgreementVerificationMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractAgreementVerificationMessage,
				jsonSchema: async () => ContractAgreementVerificationMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${ContractNegotiationTypes.ContractNegotiation}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractNegotiation,
				jsonSchema: async () => ContractNegotiation as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${ContractNegotiationTypes.ContractNegotiationError}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractNegotiationError,
				jsonSchema: async () => ContractNegotiationError as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${ContractNegotiationTypes.ContractNegotiationEventMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractNegotiationEventMessage,
				jsonSchema: async () => ContractNegotiationEventMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${ContractNegotiationTypes.ContractNegotiationTerminationMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractNegotiationTerminationMessage,
				jsonSchema: async () => ContractNegotiationTerminationMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${ContractNegotiationTypes.ContractOfferMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractOfferMessage,
				jsonSchema: async () => ContractOfferMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${ContractNegotiationTypes.ContractRequestMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractRequestMessage,
				jsonSchema: async () => ContractRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${ContractNegotiationTypes.ContractNegotiationEventType}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractNegotiationEventType,
				jsonSchema: async () => ContractNegotiationEventType as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${ContractNegotiationTypes.ContractNegotiationStateType}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: ContractNegotiationTypes.ContractNegotiationStateType,
				jsonSchema: async () => ContractNegotiationStateType as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${CatalogTypes.CatalogRequestMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: CatalogTypes.CatalogRequestMessage,
				jsonSchema: async () => CatalogRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${CatalogTypes.DatasetRequestMessage}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: CatalogTypes.DatasetRequestMessage,
				jsonSchema: async () => DatasetRequestMessage as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DataspaceProtocolContexts.ContextRoot}${CatalogTypes.CatalogError}`,
			() => ({
				context: DataspaceProtocolContexts.ContextRoot,
				type: CatalogTypes.CatalogError,
				jsonSchema: async () => CatalogError as IJsonSchema
			})
		);
	}
}
