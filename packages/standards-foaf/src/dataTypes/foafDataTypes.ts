// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@3sixty/data-core";
import { JsonLdDataTypes, JsonLdProcessor } from "@3sixty/data-json-ld";
import * as CompiledValidators from "../compiled/validators.js";
import { FoafContexts } from "../models/foafContexts.js";
import { FoafTypes } from "../models/foafTypes.js";
import AgentSchema from "../schemas/FoafAgent.json" with { type: "json" };
import BaseObjectSchema from "../schemas/FoafBaseObject.json" with { type: "json" };
import ContextTypeSchema from "../schemas/FoafContextType.json" with { type: "json" };
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
		JsonLdProcessor.addRedirect(/https?:\/\/xmlns.com\/foaf\/0.1\//, FoafContexts.JsonLdContext);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		// Register the types referenced by the schemas, which are only registered once.
		JsonLdDataTypes.registerTypes();

		const types = [
			{
				type: FoafTypes.Agent,
				schema: AgentSchema,
				compiledValidator: CompiledValidators.CompiledFoafAgent
			},
			{
				type: FoafTypes.Document,
				schema: DocumentSchema,
				compiledValidator: CompiledValidators.CompiledFoafDocument
			},
			{
				type: FoafTypes.Group,
				schema: GroupSchema,
				compiledValidator: CompiledValidators.CompiledFoafGroup
			},
			{
				type: FoafTypes.Image,
				schema: ImageSchema,
				compiledValidator: CompiledValidators.CompiledFoafImage
			},
			{
				type: FoafTypes.Organization,
				schema: OrganizationSchema,
				compiledValidator: CompiledValidators.CompiledFoafOrganization
			},
			{
				type: FoafTypes.Person,
				schema: PersonSchema,
				compiledValidator: CompiledValidators.CompiledFoafPerson
			},
			{
				type: "BaseObject",
				schema: BaseObjectSchema,
				compiledValidator: CompiledValidators.CompiledFoafBaseObject
			},
			{
				type: "ContextType",
				schema: ContextTypeSchema,
				compiledValidator: CompiledValidators.CompiledFoafContextType
			}
		];

		DataTypeHelper.registerTypes(FoafContexts.Namespace, FoafContexts.JsonLdContext, types);
		DataTypeHelper.registerTypes(
			FoafContexts.JsonSchemaNamespace,
			FoafContexts.JsonLdContext,
			types.map(t => ({
				type: `Foaf${t.type}`,
				schema: t.schema,
				compiledValidator: t.compiledValidator
			}))
		);
	}
}
