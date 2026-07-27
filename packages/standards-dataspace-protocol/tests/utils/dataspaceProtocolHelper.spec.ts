// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { ObjectHelper } from "@twin.org/core";
import { JsonLdHelper, type IJsonLdNodeObject } from "@twin.org/data-json-ld";
import { DublinCoreContexts } from "@twin.org/standards-dublin-core";
import { addAllContextsToDocumentCache } from "@twin.org/standards-ld-contexts";
import {
	type IDcatCatalog,
	type IDcatDataset,
	DcatContexts,
	type IDcatDistribution,
	type IDcatDataService,
	DcatDataTypes
} from "@twin.org/standards-w3c-dcat";
import { OdrlContexts, OdrlDataTypes } from "@twin.org/standards-w3c-odrl";
import { DataspaceProtocolDataTypes } from "../../src/dataTypes/dataspaceProtocolDataTypes.js";
import { DataspaceProtocolContexts } from "../../src/models/dataspaceProtocolContexts.js";
import { DataspaceProtocolHelper } from "../../src/utils/dataspaceProtocolHelper.js";

describe("DataspaceProtocolHelper", () => {
	beforeAll(async () => {
		DataspaceProtocolDataTypes.registerTypes();
		DcatDataTypes.registerTypes();
		OdrlDataTypes.registerTypes();
		await addAllContextsToDocumentCache();
	});

	describe("Catalog Protocol - Ds Protocol specific validations", () => {
		const dataset: IDcatDataset = {
			"@context": {
				dcat: DcatContexts.Namespace,
				odrl: OdrlContexts.Namespace,
				dcterms: DublinCoreContexts.NamespaceTerms
			},
			"@id": "dataset:dataset1",
			"@type": "dcat:Dataset",
			"dcat:distribution": [
				{
					"@type": "dcat:Distribution",
					"dcterms:format": "example:format",
					"dcat:accessService": "service:access1"
				}
			],
			[`${OdrlContexts.Namespace}hasPolicy`]: {
				"@context": OdrlContexts.JsonLdContext,
				"@type": "Offer",
				uid: "policy:policy1",
				assigner: "did:iota:0x123456789abcdef",
				permission: [
					{
						action: "use"
					}
				]
			},
			"dcterms:type": "https://vocabulary.uncefact.org/Consignment",
			"dcterms:publisher": "did:iota:0x123456789abcdef"
		};

		const dataService: IDcatDataService = {
			"@context": {
				dcat: DcatContexts.Namespace,
				dcterms: DublinCoreContexts.NamespaceTerms
			},
			"@id": "dataservice:ds1",
			"@type": "dcat:DataService",
			"dcat:endpointURL": "https://as.example.org/as1"
		};

		const transferRequest: IJsonLdNodeObject = {
			"@context": [DataspaceProtocolContexts.Context],
			"@type": "TransferRequestMessage",
			agreementId: "agreement:agreement1",
			consumerPid: "consumer:consumerPid",
			format: "example:format",
			callbackAddress: "https://callback.example.org/cb1"
		};

		const datasetAsDsProtocol: IJsonLdNodeObject = {
			"@context": [
				DataspaceProtocolContexts.Context,
				{
					dcterms: DublinCoreContexts.ContextTerms
				}
			],
			"@id": "dataset:dataset2",
			"@type": "Dataset",
			distribution: [
				{
					"@type": "Distribution",
					format: "example:format",
					accessService: "service:access1"
				}
			],
			hasPolicy: {
				"@type": "Offer",
				"@id": "policy:policy1",
				assigner: "did:iota:0x123456789abcdef",
				permission: [
					{
						action: "use"
					}
				]
			},
			"dcterms:type": "https://vocabulary.uncefact.org/Consignment",
			"dcterms:publisher": "did:iota:0x123456789abcdef"
		};

		test("should determine as conformant valid Dataset as per the DS Protocol", async () => {
			const validationFailures = await DataspaceProtocolHelper.validate(
				JsonLdHelper.toNodeObject(dataset)
			);

			expect(validationFailures).toHaveLength(0);
		});

		test("should determine as conformant valid Catalog as per the DS Protocol", async () => {
			const catalog: IDcatCatalog & { participantId: string } = {
				"@context": {
					dcat: DcatContexts.Namespace,
					odrl: OdrlContexts.Namespace,
					dcterms: DublinCoreContexts.NamespaceTerms,
					// We need this otherwise the compaction process would not work well for participantId
					participantId: {
						"@id": `${DataspaceProtocolContexts.Namespace}participantId`,
						"@type": "@id"
					}
				},
				"@id": "catalog:c1",
				participantId: "p1:p1",
				"@type": "dcat:Catalog",
				"dcat:dataset": dataset,
				"dcat:service": dataService
			};

			const validationFailures = await DataspaceProtocolHelper.validate(
				JsonLdHelper.toNodeObject(catalog)
			);

			expect(validationFailures).toHaveLength(0);
		});

		test("should determine as conformant valid Distribution as per the DS Protocol", async () => {
			const distribution: IDcatDistribution = {
				"@context": {
					dcat: DcatContexts.Namespace,
					odrl: OdrlContexts.Namespace,
					dcterms: DublinCoreContexts.NamespaceTerms
				},
				"@id": "distribution:d1",
				"@type": "dcat:Distribution",
				"dcterms:format": "example:format",
				"dcat:accessService": "dataservice:ds1"
			};

			const validationFailures = await DataspaceProtocolHelper.validate(
				JsonLdHelper.toNodeObject(distribution)
			);
			expect(validationFailures).toHaveLength(0);
		});

		test("should determine as conformant valid DataService as per the DS Protocol", async () => {
			const validationFailures = await DataspaceProtocolHelper.validate(
				JsonLdHelper.toNodeObject(dataService)
			);
			expect(validationFailures).toHaveLength(0);
		});

		test("should determine as conformant a standard object of the DS Protocol", async () => {
			const validationFailures = await DataspaceProtocolHelper.validate(
				JsonLdHelper.toNodeObject(transferRequest)
			);
			expect(validationFailures).toHaveLength(0);
		});

		test("should determine as conformant a dataset represented with the DS Protocol's LD Context", async () => {
			const validationFailures = await DataspaceProtocolHelper.validate(datasetAsDsProtocol);
			expect(validationFailures).toHaveLength(0);
		});

		test("should declare non conformant an invalid Dataset as per the DS Protocol", async () => {
			const dataset2: IDcatDataset = ObjectHelper.clone<IDcatDataset>(dataset);
			delete (dataset2["dcat:distribution"] as IDcatDistribution[])[0]["dcterms:format"];

			const validationFailures = await DataspaceProtocolHelper.validate(
				JsonLdHelper.toNodeObject(dataset2)
			);
			expect(validationFailures.length).toBeGreaterThan(0);
		});

		test("should declare non conformant an invalid DataService as per the DS Protocol", async () => {
			const datasService2: IDcatDataService = ObjectHelper.clone<IDcatDataService>(dataService);
			delete datasService2["dcat:endpointURL"];

			const validationFailures = await DataspaceProtocolHelper.validate(
				JsonLdHelper.toNodeObject(datasService2)
			);
			expect(validationFailures.length).toBeGreaterThan(0);
		});

		test("should determine as non conformant an invalid standard object of the DS Protocol", async () => {
			const transferRequest2: IJsonLdNodeObject =
				ObjectHelper.clone<IJsonLdNodeObject>(transferRequest);
			delete transferRequest2.agreementId;

			const validationFailures = await DataspaceProtocolHelper.validate(transferRequest2);
			expect(validationFailures.length).toBeGreaterThan(0);
		});

		test("should determine as non conformant an invalid standard object of the DS Protocol - no @type", async () => {
			const transferRequest2: IJsonLdNodeObject =
				ObjectHelper.clone<IJsonLdNodeObject>(transferRequest);
			delete transferRequest2["@type"];

			const validationFailures = await DataspaceProtocolHelper.validate(transferRequest2);
			expect(validationFailures).toHaveLength(1);
			expect(validationFailures[0]).toEqual({
				property: "@type",
				reason: "validation.missingType"
			});
		});
	});

	describe("normalize - keyword property", () => {
		const baseDataset: IJsonLdNodeObject = {
			"@context": {
				dcat: DcatContexts.Namespace,
				dcterms: DublinCoreContexts.NamespaceTerms
			},
			"@id": "dataset:keyword-test",
			"@type": "dcat:Dataset"
		};

		test("should keep singular keyword value as an array after normalize", async () => {
			const result = await DataspaceProtocolHelper.normalize({
				...baseDataset,
				"dcat:keyword": ["tag1"]
			});

			expect(Array.isArray(result["dcat:keyword"])).toBe(true);
			expect(result["dcat:keyword"]).toContain("tag1");
		});

		test("should keep keyword array as an array after normalize", async () => {
			const result = await DataspaceProtocolHelper.normalize({
				...baseDataset,
				"dcat:keyword": ["tag1", "tag2"]
			});

			expect(Array.isArray(result["dcat:keyword"])).toBe(true);
			expect(result["dcat:keyword"]).toHaveLength(2);
			expect(result["dcat:keyword"]).toContain("tag1");
			expect(result["dcat:keyword"]).toContain("tag2");
		});
	});
});
