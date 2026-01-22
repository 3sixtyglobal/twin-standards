// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
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
		JsonLdProcessor.addRedirect(/https?:\/\/www\.w3\.org\/ns\/dcat#?/, DcatContexts.JsonLdContext);

		JsonLdProcessor.addRedirect(
			/https?:\/\/www\.w3\.org\/2000\/01\/rdf-schema#?/,
			DcatContexts.JsonLdContextRdf
		);
	}

	/**
	 * Register all the DCAT data types with their JSON schemas.
	 */
	public static registerTypes(): void {
		const types = [
			{
				type: DcatClasses.Resource,
				schema: ResourceSchema
			},
			{
				type: DcatClasses.Catalog,
				schema: CatalogSchema
			},
			{
				type: DcatClasses.CatalogRecord,
				schema: CatalogRecordSchema
			},
			{
				type: DcatClasses.Dataset,
				schema: DatasetSchema
			},
			{
				type: DcatClasses.Distribution,
				schema: DistributionSchema
			},
			{
				type: DcatClasses.DataService,
				schema: DataServiceSchema
			},
			{
				type: DcatClasses.DatasetSeries,
				schema: DatasetSeriesSchema
			},
			{
				type: DcatClasses.Relationship,
				schema: RelationshipSchema
			},
			{
				type: DcatClasses.Role,
				schema: RoleSchema
			}
		];

		DataTypeHelper.registerTypes(DcatContexts.Namespace, DcatContexts.JsonLdContext, types);
	}
}
