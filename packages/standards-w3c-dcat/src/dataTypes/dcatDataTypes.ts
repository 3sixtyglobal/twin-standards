// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonSchema } from "@twin.org/data-core";
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { DcatClasses } from "../models/dcatClasses.js";
import { DcatContexts } from "../models/dcatContexts.js";
import CatalogSchema from "../schemas/Catalog.json" with { type: "json" };
import CatalogRecordSchema from "../schemas/CatalogRecord.json" with { type: "json" };
import DataServiceSchema from "../schemas/DataService.json" with { type: "json" };
import DatasetSchema from "../schemas/Dataset.json" with { type: "json" };
import DatasetSeriesSchema from "../schemas/DatasetSeries.json" with { type: "json" };
import DistributionSchema from "../schemas/Distribution.json" with { type: "json" };
import RelationshipSchema from "../schemas/Relationship.json" with { type: "json" };
import ResourceSchema from "../schemas/Resource.json" with { type: "json" };
import RoleSchema from "../schemas/Role.json" with { type: "json" };

/**
 * Class providing DCAT data type utilities and JSON-LD redirect registration.
 */
export class DcatDataTypes {
	/**
	 * Register redirects for DCAT namespace to enable offline JSON-LD processing.
	 * This maps the W3C DCAT namespace to a local redirect URL for faster resolution.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(
			/https?:\/\/www\.w3\.org\/ns\/dcat#?/,
			DcatContexts.ContextRedirect
		);

		JsonLdProcessor.addRedirect(
			/https?:\/\/www\.w3\.org\/2000\/01\/rdf-schema#?/,
			DcatContexts.ContextRdfRedirect
		);
	}

	/**
	 * Register all the DCAT data types with their JSON schemas.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(`${DcatContexts.ContextRoot}${DcatClasses.Resource}`, () => ({
			context: DcatContexts.ContextRoot,
			type: DcatClasses.Resource,
			jsonSchema: async () => ResourceSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${DcatContexts.ContextRoot}${DcatClasses.Catalog}`, () => ({
			context: DcatContexts.ContextRoot,
			type: DcatClasses.Catalog,
			jsonSchema: async () => CatalogSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${DcatContexts.ContextRoot}${DcatClasses.Dataset}`, () => ({
			context: DcatContexts.ContextRoot,
			type: DcatClasses.Dataset,
			jsonSchema: async () => DatasetSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(
			`${DcatContexts.ContextRoot}${DcatClasses.Distribution}`,
			() => ({
				context: DcatContexts.ContextRoot,
				type: DcatClasses.Distribution,
				jsonSchema: async () => DistributionSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DcatContexts.ContextRoot}${DcatClasses.DataService}`,
			() => ({
				context: DcatContexts.ContextRoot,
				type: DcatClasses.DataService,
				jsonSchema: async () => DataServiceSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DcatContexts.ContextRoot}${DcatClasses.DatasetSeries}`,
			() => ({
				context: DcatContexts.ContextRoot,
				type: DcatClasses.DatasetSeries,
				jsonSchema: async () => DatasetSeriesSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DcatContexts.ContextRoot}${DcatClasses.CatalogRecord}`,
			() => ({
				context: DcatContexts.ContextRoot,
				type: DcatClasses.CatalogRecord,
				jsonSchema: async () => CatalogRecordSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DcatContexts.ContextRoot}${DcatClasses.Relationship}`,
			() => ({
				context: DcatContexts.ContextRoot,
				type: DcatClasses.Relationship,
				jsonSchema: async () => RelationshipSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(`${DcatContexts.ContextRoot}${DcatClasses.Role}`, () => ({
			context: DcatContexts.ContextRoot,
			type: DcatClasses.Role,
			jsonSchema: async () => RoleSchema as IJsonSchema
		}));
	}
}
