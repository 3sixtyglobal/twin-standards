// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { ObjectHelper } from "@twin.org/core";
import { DataTypeHandlerFactory, JsonSchemaHelper, type IJsonSchema } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { DublinCoreContexts } from "@twin.org/standards-dublin-core";
import { FoafContexts } from "@twin.org/standards-foaf";
import { addAllContextsToDocumentCache } from "@twin.org/standards-ld-contexts";
import { VCardContexts } from "@twin.org/standards-w3c-vcard";
import { DcatDataTypes } from "../src/dataTypes/dcatDataTypes.js";
import {
	DcatClasses,
	type IDcatCatalog,
	type IDcatCatalogRecord,
	type IDcatDataService,
	type IDcatDataset,
	type IDcatDatasetSeries,
	type IDcatDistribution,
	type IDcatRelationship,
	type IDcatRole
} from "../src/index.js";
import { DcatContexts } from "../src/models/dcatContexts.js";
import type { IDcatResource } from "../src/models/IDcatResource.js";

describe("DCAT Interfaces and Schemas", () => {
	beforeAll(async () => {
		DcatDataTypes.registerTypes();
		await addAllContextsToDocumentCache();
	});

	describe("IDcatResource Interface", () => {
		const resourceExample: IDcatResource = {
			"@context": {
				dcat: DcatContexts.Namespace,
				dcterms: DublinCoreContexts.NamespaceTerms,
				foaf: FoafContexts.Namespace,
				vcard: VCardContexts.Namespace
			},
			"@type": "dcat:Resource",
			"dcterms:identifier": "res:20251118-0001",
			"dcterms:title": "National Parks Boundary Dataset (Example)",
			"dcterms:description":
				"An example of an IResource with only the properties defined in the IResource interface.",
			"dcat:landingPage": "https://data.example.gov/datasets/national-parks-boundaries",
			"dcterms:language": "en",
			"dcterms:publisher": {
				"@type": "foaf:Organization",
				"foaf:name": "Example National Data Service"
			},
			"dcterms:creator": {
				"@type": "foaf:Person",
				"foaf:name": "Dr. Ada Example"
			},
			"dcterms:issued": "2021-06-30T00:00:00Z",
			"dcterms:modified": "2025-10-10T12:34:56Z",
			"dcterms:license": "https://creativecommons.org/licenses/by/4.0/",
			"dcterms:rights": "Public Domain",
			"dcterms:accessRights": "public",
			"dcterms:conformsTo": "https://www.opengis.net/spec/wfs/3.0",
			"dcat:theme": ["environment", "biodiversity"],
			"dcat:keyword": ["national park", "boundaries"],
			"dcat:contactPoint": {
				"@type": "vcard:Individual",
				"vcard:fn": "Dr. Ada Example",
				"vcard:hasEmail": "mailto:data-support@example.gov"
			}
		};

		it("should validate resource against schema", async () => {
			const handler = DataTypeHandlerFactory.get(
				`${DcatContexts.Namespace}${DcatClasses.Resource}`
			);
			expect(handler).toBeDefined();

			if (handler?.jsonSchema) {
				const schema = await handler.jsonSchema();
				expect(schema).toBeDefined();

				const result = await JsonSchemaHelper.validate(schema as IJsonSchema, resourceExample);
				expect(result.length).toEqual(0);
			}
		});

		it("should retain all properties after JSON-LD round-trip", async () => {
			const compacted = await JsonLdProcessor.compact(resourceExample, resourceExample["@context"]);

			expect(compacted).toEqual(resourceExample);
		});
	});

	describe("IDcatDataset Interface", () => {
		const datasetExample: IDcatDataset = {
			"@context": {
				dcat: DcatContexts.Namespace,
				dcterms: DublinCoreContexts.NamespaceTerms,
				foaf: FoafContexts.Namespace,
				vcard: VCardContexts.Namespace
			},
			"@id": "http://example.org/dataset/energy-stats",
			"@type": "dcat:Dataset",
			"dcterms:title": "National Energy Statistics 2025",
			"dcterms:description":
				"Annual dataset of national energy production and consumption figures.",
			"dcterms:issued": "2025-11-18T00:00:00Z",
			"dcterms:creator": {
				"@id": "http://example.org/person/martyn",
				"@type": "foaf:Person",
				"foaf:name": "Martyn",
				"foaf:mbox": "mailto:martyn@example.org"
			},
			"dcterms:publisher": {
				"@id": "http://example.org/org/energy-office",
				"@type": "foaf:Organization",
				"foaf:name": "National Energy Office",
				"foaf:homepage": "http://energy-office.example.org/"
			},
			"dcat:landingPage": "http://data.example.org/energy-stats",
			"dcat:contactPoint": {
				"@type": "vcard:Individual",
				"vcard:fn": "Data Support Team",
				"vcard:hasEmail": "mailto:support@energy-office.example.org"
			},
			"dcat:distribution": [
				{
					"@id": "http://example.org/dataset/energy-stats/csv",
					"@type": "dcat:Distribution",
					"dcterms:format": "text/csv",
					"dcat:accessURL": "http://data.example.org/energy-stats.csv"
				},
				{
					"@id": "http://example.org/dataset/energy-stats/json",
					"@type": "dcat:Distribution",
					"dcterms:format": "application/json",
					"dcat:accessURL": "http://data.example.org/energy-stats.json"
				}
			]
		};

		it("should validate dataset against schema", async () => {
			const handler = DataTypeHandlerFactory.get(`${DcatContexts.Namespace}${DcatClasses.Dataset}`);
			expect(handler).toBeDefined();

			if (handler?.jsonSchema) {
				const schema = await handler.jsonSchema();
				expect(schema).toBeDefined();

				const result = await JsonSchemaHelper.validate(schema as IJsonSchema, datasetExample);
				expect(result.length).toEqual(0);
			}
		});

		it("should retain all properties after JSON-LD round-trip", async () => {
			const compacted = await JsonLdProcessor.compact(datasetExample, datasetExample["@context"]);

			expect(compacted).toEqual(datasetExample);
		});
	});

	describe("IDcatCatalog Interface", () => {
		const catalogExample: IDcatCatalog = {
			"@context": {
				dcat: DcatContexts.Namespace,
				dcterms: DublinCoreContexts.NamespaceTerms,
				foaf: FoafContexts.Namespace,
				vcard: VCardContexts.Namespace
			},
			"@id": "http://example.org/catalog/national-energy",
			"@type": "dcat:Catalog",
			"dcterms:title": "National Energy Data Catalog",
			"dcterms:description":
				"A catalog of datasets and services related to national energy statistics and infrastructure.",
			"dcterms:issued": "2025-11-18T00:00:00Z",
			"dcterms:publisher": {
				"@id": "http://example.org/org/energy-office",
				"@type": "foaf:Organization",
				"foaf:name": "National Energy Office",
				"foaf:homepage": "http://energy-office.example.org/"
			},
			"dcat:landingPage": "http://data.example.org/catalog/energy",
			"dcat:contactPoint": {
				"@type": "vcard:Individual",
				"vcard:fn": "Catalog Support Team",
				"vcard:hasEmail": "mailto:support@energy-office.example.org"
			},
			"dcat:dataset": [
				{
					"@id": "http://example.org/dataset/energy-stats",
					"@type": "dcat:Dataset",
					"dcterms:title": "National Energy Statistics 2025",
					"dcterms:description":
						"Annual dataset of national energy production and consumption figures.",
					"dcat:landingPage": "http://data.example.org/energy-stats",
					"dcat:distribution": {
						"@id": "http://example.org/dataset/energy-stats/csv",
						"@type": "dcat:Distribution",
						"dcterms:format": "text/csv",
						"dcat:accessURL": "http://data.example.org/energy-stats.csv"
					}
				},
				{
					"@id": "http://example.org/dataset/renewables",
					"@type": "dcat:Dataset",
					"dcterms:title": "Renewable Energy Installations",
					"dcterms:description": "Dataset of renewable energy installations across the country.",
					"dcat:landingPage": "http://data.example.org/renewables",
					"dcat:distribution": {
						"@id": "http://example.org/dataset/renewables/json",
						"@type": "dcat:Distribution",
						"dcterms:format": "application/json",
						"dcat:accessURL": "http://data.example.org/renewables.json"
					}
				}
			]
		};

		it("should validate catalog against schema", async () => {
			const handler = DataTypeHandlerFactory.get(`${DcatContexts.Namespace}${DcatClasses.Catalog}`);
			expect(handler).toBeDefined();

			if (handler?.jsonSchema) {
				const schema = await handler.jsonSchema();
				expect(schema).toBeDefined();

				const result = await JsonSchemaHelper.validate(schema as IJsonSchema, catalogExample);
				expect(result.length).toEqual(0);
			}
		});

		it("should retain all properties after JSON-LD round-trip", async () => {
			const compacted = await JsonLdProcessor.compact(catalogExample, catalogExample["@context"]);

			expect(compacted).toEqual(catalogExample);
		});
	});

	describe("IDcatDistribution Interface", () => {
		const distributionExample: IDcatDistribution = {
			"@context": {
				dcat: DcatContexts.Namespace,
				dcterms: DublinCoreContexts.NamespaceTerms,
				foaf: FoafContexts.Namespace,
				vcard: VCardContexts.Namespace
			},
			"@id": "http://example.org/dataset/energy-stats/csv",
			"@type": "dcat:Distribution",
			"dcterms:title": "CSV distribution of National Energy Statistics 2025",
			"dcterms:description":
				"This CSV file contains tabular data on national energy production and consumption figures for 2025.",
			"dcterms:format": "text/csv",
			"dcat:accessURL": "http://data.example.org/energy-stats.csv",
			"dcat:downloadURL": "http://data.example.org/energy-stats.csv",
			"dcterms:issued": "2025-11-18T00:00:00Z",
			"dcterms:license": "http://creativecommons.org/licenses/by/4.0/"
		};
		it("should validate distribution against schema", async () => {
			const handler = DataTypeHandlerFactory.get(
				`${DcatContexts.Namespace}${DcatClasses.Distribution}`
			);
			expect(handler).toBeDefined();

			if (handler?.jsonSchema) {
				const schema = await handler.jsonSchema();
				expect(schema).toBeDefined();

				const result = await JsonSchemaHelper.validate(schema as IJsonSchema, distributionExample);
				expect(result.length).toEqual(0);
			}
		});

		it("should retain all properties after JSON-LD round-trip", async () => {
			const compacted = await JsonLdProcessor.compact(
				distributionExample,
				distributionExample["@context"]
			);

			expect(compacted).toEqual(distributionExample);
		});
	});
});

describe("IDcatDataService Interface", () => {
	const dataServiceExample: IDcatDataService = {
		"@context": {
			dcat: DcatContexts.Namespace,
			dcterms: DublinCoreContexts.NamespaceTerms,
			foaf: FoafContexts.Namespace,
			vcard: VCardContexts.Namespace
		},
		"@id": "http://example.org/service/energy-api",
		"@type": "dcat:DataService",
		"dcterms:title": "National Energy Statistics API",
		"dcterms:description":
			"RESTful API providing access to national energy production and consumption data.",
		"dcterms:issued": "2025-11-18T00:00:00Z",
		"dcterms:publisher": {
			"@id": "http://example.org/org/energy-office",
			"@type": "foaf:Organization",
			"foaf:name": "National Energy Office",
			"foaf:homepage": "http://energy-office.example.org/"
		},
		"dcat:endpointURL": "http://api.example.org/energy",
		"dcat:endpointDescription": "http://api.example.org/energy/openapi.yaml",
		"dcat:landingPage": "http://data.example.org/services/energy-api",
		"dcat:contactPoint": {
			"@type": "vcard:Individual",
			"vcard:fn": "API Support Team",
			"vcard:hasEmail": "mailto:api-support@energy-office.example.org"
		},
		"dcterms:license": "http://creativecommons.org/licenses/by/4.0/"
	};

	it("should validate data service against schema", async () => {
		const handler = DataTypeHandlerFactory.get(
			`${DcatContexts.Namespace}${DcatClasses.DataService}`
		);
		expect(handler).toBeDefined();

		if (handler?.jsonSchema) {
			const schema = await handler.jsonSchema();
			expect(schema).toBeDefined();

			const result = await JsonSchemaHelper.validate(schema as IJsonSchema, dataServiceExample);
			expect(result.length).toEqual(0);
		}
	});

	it("should retain all properties after JSON-LD round-trip", async () => {
		const compacted = await JsonLdProcessor.compact(
			dataServiceExample,
			dataServiceExample["@context"]
		);

		expect(compacted).toEqual(dataServiceExample);
	});
});

describe("IDcatDatasetSeries Interface", () => {
	const datasetSeriesExample: IDcatDatasetSeries = {
		"@context": {
			dcat: DcatContexts.Namespace,
			dcterms: DublinCoreContexts.NamespaceTerms,
			foaf: FoafContexts.Namespace,
			vcard: VCardContexts.Namespace
		},
		"@id": "http://example.org/dataset-series/energy-stats",
		"@type": "dcat:DatasetSeries",
		"dcterms:title": "National Energy Statistics Series",
		"dcterms:description":
			"A series of datasets containing annual national energy production and consumption figures.",
		"dcterms:publisher": {
			"@id": "http://example.org/org/energy-office",
			"@type": "foaf:Organization",
			"foaf:name": "National Energy Office",
			"foaf:homepage": "http://energy-office.example.org/"
		},
		"dcat:contactPoint": {
			"@type": "vcard:Individual",
			"vcard:fn": "Energy Data Team",
			"vcard:hasEmail": "mailto:data-support@energy-office.example.org"
		},
		"dcat:dataset": [
			{
				"@id": "http://example.org/dataset/energy-stats-2024",
				"@type": "dcat:Dataset",
				"dcterms:title": "National Energy Statistics 2024",
				"dcterms:issued": "2024-11-18T00:00:00Z",
				"dcat:landingPage": "http://data.example.org/energy-stats-2024",
				"dcat:distribution": {
					"@id": "http://example.org/dataset/energy-stats-2024/csv",
					"@type": "dcat:Distribution",
					"dcterms:format": "text/csv",
					"dcat:accessURL": "http://data.example.org/energy-stats-2024.csv"
				}
			},
			{
				"@id": "http://example.org/dataset/energy-stats-2025",
				"@type": "dcat:Dataset",
				"dcterms:title": "National Energy Statistics 2025",
				"dcterms:issued": "2025-11-18T00:00:00Z",
				"dcat:landingPage": "http://data.example.org/energy-stats-2025",
				"dcat:distribution": {
					"@id": "http://example.org/dataset/energy-stats-2025/json",
					"@type": "dcat:Distribution",
					"dcterms:format": "application/json",
					"dcat:accessURL": "http://data.example.org/energy-stats-2025.json"
				}
			}
		]
	};

	it("should validate dataset series against schema", async () => {
		const handler = DataTypeHandlerFactory.get(
			`${DcatContexts.Namespace}${DcatClasses.DatasetSeries}`
		);
		expect(handler).toBeDefined();

		if (handler?.jsonSchema) {
			const schema = await handler.jsonSchema();
			expect(schema).toBeDefined();

			const result = await JsonSchemaHelper.validate(schema as IJsonSchema, datasetSeriesExample);
			expect(result.length).toEqual(0);
		}
	});

	it("should retain all properties after JSON-LD round-trip", async () => {
		const compacted = await JsonLdProcessor.compact(
			datasetSeriesExample,
			datasetSeriesExample["@context"]
		);

		expect(compacted).toEqual(datasetSeriesExample);
	});
});

describe("IDcatCatalogRecord Interface", () => {
	const catalogRecordExample: IDcatCatalogRecord = {
		"@context": {
			dcat: DcatContexts.Namespace,
			dcterms: DublinCoreContexts.NamespaceTerms,
			foaf: FoafContexts.Namespace,
			vcard: VCardContexts.Namespace
		},
		"@id": "http://example.org/catalog/energy/record/energy-stats-2025",
		"@type": "dcat:CatalogRecord",
		"dcterms:title": "Catalog record for National Energy Statistics 2025",
		"dcterms:description":
			"This record describes the entry of the dataset 'National Energy Statistics 2025' in the National Energy Data Catalog.",
		"dcterms:issued": "2025-11-18T00:00:00Z",
		"dcterms:modified": "2025-11-19T00:00:00Z",
		"foaf:primaryTopic": {
			"@context": {
				dcat: DcatContexts.Namespace,
				dcterms: DublinCoreContexts.NamespaceTerms
			},
			"@id": "http://example.org/dataset/energy-stats-2025",
			"@type": "dcat:Dataset",
			"dcterms:title": "National Energy Statistics 2025",
			"dcterms:description":
				"Annual dataset of national energy production and consumption figures.",
			"dcterms:publisher": {
				"@id": "http://example.org/org/energy-office",
				"@type": "foaf:Organization",
				"foaf:name": "National Energy Office"
			},
			"dcat:landingPage": "http://data.example.org/energy-stats-2025"
		}
	};

	it("should validate catalog record against schema", async () => {
		const handler = DataTypeHandlerFactory.get(
			`${DcatContexts.Namespace}${DcatClasses.CatalogRecord}`
		);
		expect(handler).toBeDefined();

		if (handler?.jsonSchema) {
			const schema = await handler.jsonSchema();
			expect(schema).toBeDefined();

			const result = await JsonSchemaHelper.validate(schema as IJsonSchema, catalogRecordExample);
			expect(result.length).toEqual(0);
		}
	});

	it("should retain all properties after JSON-LD round-trip", async () => {
		const compacted = await JsonLdProcessor.compact(
			catalogRecordExample,
			catalogRecordExample["@context"]
		);

		const catalogRecordExampleCloned = ObjectHelper.clone<IDcatCatalogRecord>(catalogRecordExample);
		const primaryTopic = ObjectHelper.propertyGet<IDcatDataset>(
			catalogRecordExampleCloned,
			"foaf:primaryTopic"
		);
		ObjectHelper.propertyDelete(primaryTopic, "@context");

		expect(compacted).toEqual(catalogRecordExampleCloned);
	});
});

describe("IDcatRelationship Interface", () => {
	const relationship: IDcatRelationship = {
		"@context": {
			dcat: DcatContexts.Namespace,
			dcterms: DublinCoreContexts.NamespaceTerms
		},
		"@type": "dcat:Relationship",
		"dcterms:relation": {
			"@id": "http://example.org/publication/energy-report-2025",
			"@type": "foaf:Document",
			"dcterms:title": "Annual Energy Report 2025"
		},
		"dcat:hadRole": {
			"@context": {
				dcat: DcatContexts.Namespace,
				dcterms: DublinCoreContexts.NamespaceTerms
			},
			"@id": "http://example.org/role/isDocumentedBy",
			"@type": "dcat:Role",
			"dcterms:title": "Is documented by"
		}
	};

	it("should validate relationship against schema", async () => {
		const handler = DataTypeHandlerFactory.get(
			`${DcatContexts.Namespace}${DcatClasses.Relationship}`
		);
		expect(handler).toBeDefined();

		if (handler?.jsonSchema) {
			const schema = await handler.jsonSchema();
			expect(schema).toBeDefined();

			const result = await JsonSchemaHelper.validate(schema as IJsonSchema, relationship);
			expect(result.length).toEqual(0);
		}
	});

	it("should retain all properties after JSON-LD round-trip", async () => {
		const compacted = await JsonLdProcessor.compact(relationship, relationship["@context"]);

		const role = ObjectHelper.propertyGet<IDcatRole>(relationship, "dcat:hadRole");
		ObjectHelper.propertyDelete(role, "@context");

		expect(compacted).toEqual(relationship);
	});
});
