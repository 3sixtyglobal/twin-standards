// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
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
		JsonLdProcessor.addRedirect(/https?:\/\/xmlns.com\/foaf\/0.1\//, FoafContexts.JsonLdContext);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		const types = [
			{
				type: FoafTypes.Agent,
				schema: AgentSchema
			},
			{
				type: FoafTypes.Document,
				schema: DocumentSchema
			},
			{
				type: FoafTypes.Group,
				schema: GroupSchema
			},
			{
				type: FoafTypes.Image,
				schema: ImageSchema
			},
			{
				type: FoafTypes.Organization,
				schema: OrganizationSchema
			},
			{
				type: FoafTypes.Person,
				schema: PersonSchema
			}
		];

		DataTypeHelper.registerTypes(FoafContexts.Namespace, FoafContexts.JsonLdContext, types);
	}
}
