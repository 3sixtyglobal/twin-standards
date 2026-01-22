// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
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
		const types = [
			{
				type: GaiaXTypes.DataExchangeComponent,
				schema: DataExchangeComponentSchema
			},
			{
				type: GaiaXTypes.DataResource,
				schema: DataResourceSchema
			},
			{
				type: GaiaXTypes.Endpoint,
				schema: EndpointSchema
			},
			{
				type: GaiaXTypes.Address,
				schema: AddressSchema
			},
			{
				type: GaiaXTypes.ServiceOffering,
				schema: ServiceOfferingSchema
			},
			{
				type: GaiaXTypes.LegalPerson,
				schema: LegalPersonSchema
			},
			{
				type: GaiaXTypes.RegistrationNumber,
				schema: RegistrationNumberSchema
			}
		];

		DataTypeHelper.registerTypes(GaiaXContexts.Namespace, GaiaXContexts.JsonLdContext, types);
	}
}
