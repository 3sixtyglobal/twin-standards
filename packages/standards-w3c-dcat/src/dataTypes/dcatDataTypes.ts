// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonSchema } from "@twin.org/data-core";
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { DcatClasses } from "../models/dcatClasses.js";
import { DcatContexts } from "../models/dcatContexts.js";
import CatalogSchema from "../schemas/DcatCatalog.json" with { type: "json" };
import CatalogRecordSchema from "../schemas/DcatCatalogRecord.json" with { type: "json" };
import DataServiceSchema from "../schemas/DcatDataService.json" with { type: "json" };
import DatasetSchema from "../schemas/DcatDataset.json" with { type: "json" };
import DatasetSeriesSchema from "../schemas/DcatDatasetSeries.json" with { type: "json" };
import DistributionSchema from "../schemas/DcatDistribution.json" with { type: "json" };
import RelationshipSchema from "../schemas/DcatRelationship.json" with { type: "json" };
import ResourceSchema from "../schemas/DcatResource.json" with { type: "json" };
import RoleSchema from "../schemas/DcatRole.json" with { type: "json" };

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
		DataTypeHandlerFactory.register(`${DcatContexts.DcatNamespace}${DcatClasses.Resource}`, () => ({
			context: DcatContexts.DcatNamespace,
			type: DcatClasses.Resource,
			jsonSchema: async () => ResourceSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${DcatContexts.DcatNamespace}${DcatClasses.Catalog}`, () => ({
			context: DcatContexts.DcatNamespace,
			type: DcatClasses.Catalog,
			jsonSchema: async () => CatalogSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${DcatContexts.DcatNamespace}${DcatClasses.Dataset}`, () => ({
			context: DcatContexts.DcatNamespace,
			type: DcatClasses.Dataset,
			jsonSchema: async () => DatasetSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(
			`${DcatContexts.DcatNamespace}${DcatClasses.Distribution}`,
			() => ({
				context: DcatContexts.DcatNamespace,
				type: DcatClasses.Distribution,
				jsonSchema: async () => DistributionSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DcatContexts.DcatNamespace}${DcatClasses.DataService}`,
			() => ({
				context: DcatContexts.DcatNamespace,
				type: DcatClasses.DataService,
				jsonSchema: async () => DataServiceSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DcatContexts.DcatNamespace}${DcatClasses.DatasetSeries}`,
			() => ({
				context: DcatContexts.DcatNamespace,
				type: DcatClasses.DatasetSeries,
				jsonSchema: async () => DatasetSeriesSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DcatContexts.DcatNamespace}${DcatClasses.CatalogRecord}`,
			() => ({
				context: DcatContexts.DcatNamespace,
				type: DcatClasses.CatalogRecord,
				jsonSchema: async () => CatalogRecordSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(
			`${DcatContexts.DcatNamespace}${DcatClasses.Relationship}`,
			() => ({
				context: DcatContexts.DcatNamespace,
				type: DcatClasses.Relationship,
				jsonSchema: async () => RelationshipSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(`${DcatContexts.DcatNamespace}${DcatClasses.Role}`, () => ({
			context: DcatContexts.DcatNamespace,
			type: DcatClasses.Role,
			jsonSchema: async () => RoleSchema as IJsonSchema
		}));
	}
}
