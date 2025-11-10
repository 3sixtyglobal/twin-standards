// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonSchema } from "@twin.org/data-core";
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { GaiaXContexts } from "../models/gaiaXContexts.js";
import { GaiaXTypes } from "../models/gaiaXTypes.js";
import AddressSchema from "../schemas/Address.json" with { type: "json" };
import DataExchangeComponentSchema from "../schemas/DataExchangeComponent.json" with { type: "json" };
import DataResourceSchema from "../schemas/DataResource.json" with { type: "json" };
import EndpointSchema from "../schemas/Endpoint.json" with { type: "json" };
import LegalPersonSchema from "../schemas/LegalPerson.json" with { type: "json" };
import RegistrationNumberSchema from "../schemas/RegistrationNumber.json" with { type: "json" };
import ServiceOfferingSchema from "../schemas/ServiceOffering.json" with { type: "json" };

/**
 * Handle all the data types for Gaia-X.
 */
export class GaiaXDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(
			`${GaiaXContexts.ContextRoot}${GaiaXTypes.DataExchangeComponent}`,
			() => ({
				context: GaiaXContexts.ContextRoot,
				type: GaiaXTypes.DataExchangeComponent,
				jsonSchema: async () => DataExchangeComponentSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${GaiaXContexts.ContextRoot}${GaiaXTypes.DataResource}`,
			() => ({
				context: GaiaXContexts.ContextRoot,
				type: GaiaXTypes.DataResource,
				jsonSchema: async () => DataResourceSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(`${GaiaXContexts.ContextRoot}${GaiaXTypes.Endpoint}`, () => ({
			context: GaiaXContexts.ContextRoot,
			type: GaiaXTypes.Endpoint,
			jsonSchema: async () => EndpointSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${GaiaXContexts.ContextRoot}${GaiaXTypes.Address}`, () => ({
			context: GaiaXContexts.ContextRoot,
			type: GaiaXTypes.Address,
			jsonSchema: async () => AddressSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(
			`${GaiaXContexts.ContextRoot}${GaiaXTypes.ServiceOffering}`,
			() => ({
				context: GaiaXContexts.ContextRoot,
				type: GaiaXTypes.ServiceOffering,
				jsonSchema: async () => ServiceOfferingSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${GaiaXContexts.ContextRoot}${GaiaXTypes.LegalPerson}`,
			() => ({
				context: GaiaXContexts.ContextRoot,
				type: GaiaXTypes.LegalPerson,
				jsonSchema: async () => LegalPersonSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${GaiaXContexts.ContextRoot}${GaiaXTypes.RegistrationNumber}`,
			() => ({
				context: GaiaXContexts.ContextRoot,
				type: GaiaXTypes.RegistrationNumber,
				jsonSchema: async () => RegistrationNumberSchema as IJsonSchema
			})
		);
	}
}
