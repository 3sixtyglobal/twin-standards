// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { JsonLdDataTypes, JsonLdProcessor } from "@twin.org/data-json-ld";
import { DublinCoreDataTypes } from "@twin.org/standards-dublin-core";
import { FoafDataTypes } from "@twin.org/standards-foaf";
import { OdrlDataTypes } from "@twin.org/standards-w3c-odrl";
import * as CompiledValidators from "../compiled/validators.js";
import { DcatClasses } from "../models/dcatClasses.js";
import { DcatContexts } from "../models/dcatContexts.js";
import CatalogSchema from "../schemas/DcatCatalog.json" with { type: "json" };
import CatalogBaseSchema from "../schemas/DcatCatalogBase.json" with { type: "json" };
import CatalogRecordSchema from "../schemas/DcatCatalogRecord.json" with { type: "json" };
import CatalogRecordBaseSchema from "../schemas/DcatCatalogRecordBase.json" with { type: "json" };
import ContextTypeSchema from "../schemas/DcatContextType.json" with { type: "json" };
import DataServiceSchema from "../schemas/DcatDataService.json" with { type: "json" };
import DataServiceBaseSchema from "../schemas/DcatDataServiceBase.json" with { type: "json" };
import DatasetSchema from "../schemas/DcatDataset.json" with { type: "json" };
import DatasetBaseSchema from "../schemas/DcatDatasetBase.json" with { type: "json" };
import DatasetSeriesSchema from "../schemas/DcatDatasetSeries.json" with { type: "json" };
import DistributionSchema from "../schemas/DcatDistribution.json" with { type: "json" };
import DistributionBaseSchema from "../schemas/DcatDistributionBase.json" with { type: "json" };
import RelationshipSchema from "../schemas/DcatRelationship.json" with { type: "json" };
import ResourceSchema from "../schemas/DcatResource.json" with { type: "json" };
import ResourceBaseSchema from "../schemas/DcatResourceBase.json" with { type: "json" };
import RoleSchema from "../schemas/DcatRole.json" with { type: "json" };

/**
 * Class providing DCAT data type utilities and JSON-LD redirect registration.
 */
export class DcatDataTypes {
	/**
	 * Register redirects for DCAT namespace to enable offline JSON-LD processing.
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
		// Register the types referenced by the schemas, which are only registered once.
		JsonLdDataTypes.registerTypes();
		DublinCoreDataTypes.registerTypes();
		FoafDataTypes.registerTypes();
		OdrlDataTypes.registerTypes();

		const types = [
			{
				type: DcatClasses.Resource,
				schema: ResourceSchema,
				compiledValidator: CompiledValidators.CompiledDcatResource
			},
			{
				type: `${DcatClasses.Resource}Base`,
				schema: ResourceBaseSchema,
				compiledValidator: CompiledValidators.CompiledDcatResourceBase
			},
			{
				type: DcatClasses.Catalog,
				schema: CatalogSchema,
				compiledValidator: CompiledValidators.CompiledDcatCatalog
			},
			{
				type: `${DcatClasses.Catalog}Base`,
				schema: CatalogBaseSchema,
				compiledValidator: CompiledValidators.CompiledDcatCatalogBase
			},
			{
				type: DcatClasses.CatalogRecord,
				schema: CatalogRecordSchema,
				compiledValidator: CompiledValidators.CompiledDcatCatalogRecord
			},
			{
				type: `${DcatClasses.CatalogRecord}Base`,
				schema: CatalogRecordBaseSchema,
				compiledValidator: CompiledValidators.CompiledDcatCatalogRecordBase
			},
			{
				type: DcatClasses.Dataset,
				schema: DatasetSchema,
				compiledValidator: CompiledValidators.CompiledDcatDataset
			},
			{
				type: `${DcatClasses.Dataset}Base`,
				schema: DatasetBaseSchema,
				compiledValidator: CompiledValidators.CompiledDcatDatasetBase
			},
			{
				type: DcatClasses.Distribution,
				schema: DistributionSchema,
				compiledValidator: CompiledValidators.CompiledDcatDistribution
			},
			{
				type: `${DcatClasses.Distribution}Base`,
				schema: DistributionBaseSchema,
				compiledValidator: CompiledValidators.CompiledDcatDistributionBase
			},
			{
				type: DcatClasses.DataService,
				schema: DataServiceSchema,
				compiledValidator: CompiledValidators.CompiledDcatDataService
			},
			{
				type: `${DcatClasses.DataService}Base`,
				schema: DataServiceBaseSchema,
				compiledValidator: CompiledValidators.CompiledDcatDataServiceBase
			},
			{
				type: DcatClasses.DatasetSeries,
				schema: DatasetSeriesSchema,
				compiledValidator: CompiledValidators.CompiledDcatDatasetSeries
			},
			{
				type: DcatClasses.Relationship,
				schema: RelationshipSchema,
				compiledValidator: CompiledValidators.CompiledDcatRelationship
			},
			{
				type: DcatClasses.Role,
				schema: RoleSchema,
				compiledValidator: CompiledValidators.CompiledDcatRole
			},
			{
				type: "ContextType",
				schema: ContextTypeSchema,
				compiledValidator: CompiledValidators.CompiledDcatContextType
			}
		];

		DataTypeHelper.registerTypes(DcatContexts.Namespace, DcatContexts.JsonLdContext, types);

		// The DcatClasses values are prefixed with "dcat:" so the schemas are registered
		// under their own titles, which is what the $refs between them use.
		DataTypeHelper.registerTypes(
			DcatContexts.JsonSchemaNamespace,
			DcatContexts.JsonLdContext,
			types.map(t => ({
				type: t.schema.title,
				schema: t.schema,
				compiledValidator: t.compiledValidator
			}))
		);
	}
}
