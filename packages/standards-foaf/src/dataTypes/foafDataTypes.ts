// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import type { JSONSchema7 } from "json-schema";
import { FoafContexts } from "../models/foafContexts.js";
import { FoafTypes } from "../models/foafTypes.js";
import AgentSchema from "../schemas/FoafAgent.json" with { type: "json" };
import DocumentSchema from "../schemas/FoafDocument.json" with { type: "json" };
import GroupSchema from "../schemas/FoafGroup.json" with { type: "json" };
import ImageSchema from "../schemas/FoafImage.json" with { type: "json" };
import OrganizationSchema from "../schemas/FoafOrganization.json" with { type: "json" };
import PersonSchema from "../schemas/FoafPerson.json" with { type: "json" };

/**
 * Data Type registration for FOAF
 */
export abstract class FoafDataTypes {
	/**
	 * Register redirects for FOAF namespace to enable offline JSON-LD processing.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(/https?:\/\/xmlns.com\/foaf\/0.1\//, FoafContexts.ContextRedirect);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(`${FoafContexts.TwinContext}/${FoafTypes.Agent}`, () => ({
			context: FoafContexts.TwinContext,
			type: FoafTypes.Agent,
			defaultValue: {},
			jsonSchema: async () => AgentSchema as JSONSchema7
		}));

		DataTypeHandlerFactory.register(`${FoafContexts.TwinContext}/${FoafTypes.Document}`, () => ({
			context: FoafContexts.TwinContext,
			type: FoafTypes.Document,
			defaultValue: {},
			jsonSchema: async () => DocumentSchema as JSONSchema7
		}));

		DataTypeHandlerFactory.register(`${FoafContexts.TwinContext}/${FoafTypes.Group}`, () => ({
			context: FoafContexts.TwinContext,
			type: FoafTypes.Group,
			defaultValue: {},
			jsonSchema: async () => GroupSchema as JSONSchema7
		}));

		DataTypeHandlerFactory.register(`${FoafContexts.TwinContext}/${FoafTypes.Image}`, () => ({
			context: FoafContexts.TwinContext,
			type: FoafTypes.Image,
			defaultValue: {},
			jsonSchema: async () => ImageSchema as JSONSchema7
		}));

		DataTypeHandlerFactory.register(
			`${FoafContexts.TwinContext}/${FoafTypes.Organization}`,
			() => ({
				context: FoafContexts.TwinContext,
				type: FoafTypes.Organization,
				defaultValue: {},
				jsonSchema: async () => OrganizationSchema as JSONSchema7
			})
		);

		DataTypeHandlerFactory.register(`${FoafContexts.TwinContext}/${FoafTypes.Person}`, () => ({
			context: FoafContexts.TwinContext,
			type: FoafTypes.Person,
			defaultValue: {},
			jsonSchema: async () => PersonSchema as JSONSchema7
		}));
	}
}
