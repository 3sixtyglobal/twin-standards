// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { ArrayHelper, ObjectHelper, type IValidationFailure } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import { DublinCoreContexts } from "@twin.org/standards-dublin-core";
import { addAllContextsToDocumentCache } from "@twin.org/standards-ld-contexts";
import {
	type IDcatCatalog,
	type IDcatDataset,
	DcatContexts,
	type IDcatDistribution,
	type IDcatDataService
} from "@twin.org/standards-w3c-dcat";
import { OdrlContexts } from "@twin.org/standards-w3c-odrl";
import {
	DataspaceProtocolCatalogTypes,
	DataspaceProtocolContexts,
	DataspaceProtocolDataTypes,
	DataspaceProtocolHelper,
	type IDataspaceProtocolCatalogRequestMessage,
	type IDataspaceProtocolDatasetRequestMessage,
	type IDataspaceProtocolCatalogError,
	type IDataspaceProtocolTransferProcess,
	DataspaceProtocolTransferProcessStateType
} from "../src/index.js";

describe("Dataspace Protocol", () => {
	beforeAll(async () => {
		DataspaceProtocolDataTypes.registerTypes();
		await addAllContextsToDocumentCache();
	});

	describe("Catalog Protocol - Contexts", () => {
		test("should have correct context URLs", () => {
			expect(DataspaceProtocolContexts.ContextRoot).toContain(
				"https://w3id.org/dspace/2025/1/context.json"
			);
			expect(DataspaceProtocolContexts.ContextRedirect).toBe(
				"https://w3id.org/dspace/2025/1/context.jsonld"
			);
		});
	});

	describe("Catalog Protocol - Message Types", () => {
		test("should have correct message types", () => {
			expect(DataspaceProtocolCatalogTypes.CatalogRequestMessage).toBe("CatalogRequestMessage");
			expect(DataspaceProtocolCatalogTypes.DatasetRequestMessage).toBe("DatasetRequestMessage");
			expect(DataspaceProtocolCatalogTypes.CatalogError).toBe("CatalogError");
		});
	});

	describe("Catalog Protocol - Ds Protocol specific validations", () => {
		const dataset: IDcatDataset = {
			"@context": {
				dcat: DcatContexts.ContextRoot,
				odrl: OdrlContexts.Namespace,
				dcterms: DublinCoreContexts.ContextTerms
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
			"odrl:hasPolicy": {
				"@context": OdrlContexts.ContextRoot,
				"@type": "Offer",
				uid: "policy:policy1",
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
				dcat: DcatContexts.ContextRoot,
				dcterms: DublinCoreContexts.ContextTerms
			},
			"@id": "dataservice:ds1",
			"@type": "dcat:DataService",
			"dcat:endpointURL": "https://as.example.org/as1"
		};

		const transferRequest: IJsonLdNodeObject = {
			"@context": [DataspaceProtocolContexts.ContextRoot],
			"@type": "TransferRequestMessage",
			agreementId: "agreement:agreement1",
			consumerPid: "consumer:consumerPid",
			format: "example:format",
			callbackAddress: "https://callback.example.org/cb1"
		};

		const datasetAsDsProtocol: IJsonLdNodeObject = {
			"@context": [
				DataspaceProtocolContexts.ContextRoot,
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
			const validationFailures: IValidationFailure[] = [];
			const isConformant = await DataspaceProtocolHelper.checkConformance(
				dataset,
				validationFailures
			);

			expect(isConformant).toBe(true);
		});

		test("should determine as conformant valid Catalog as per the DS Protocol", async () => {
			const catalog: IDcatCatalog = {
				"@context": {
					dcat: DcatContexts.ContextRoot,
					odrl: OdrlContexts.Namespace,
					dcterms: DublinCoreContexts.ContextTerms,
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

			const validationFailures: IValidationFailure[] = [];
			const isConformant = await DataspaceProtocolHelper.checkConformance(
				catalog,
				validationFailures
			);

			expect(isConformant).toBe(true);
		});

		test("should determine as conformant valid Distribution as per the DS Protocol", async () => {
			const distribution: IDcatDistribution = {
				"@context": {
					dcat: DcatContexts.ContextRoot,
					odrl: OdrlContexts.Namespace,
					dcterms: DublinCoreContexts.ContextTerms
				},
				"@id": "distribution:d1",
				"@type": "dcat:Distribution",
				"dcterms:format": "example:format",
				"dcat:accessService": "dataservice:ds1"
			};

			const validationFailures: IValidationFailure[] = [];
			const isConformant = await DataspaceProtocolHelper.checkConformance(
				distribution,
				validationFailures
			);
			expect(isConformant).toBe(true);
		});

		test("should determine as conformant valid DataService as per the DS Protocol", async () => {
			const validationFailures: IValidationFailure[] = [];
			const isConformant = await DataspaceProtocolHelper.checkConformance(
				dataService,
				validationFailures
			);
			expect(isConformant).toBe(true);
		});

		test("should determine as conformant a standard object of the DS Protocol", async () => {
			const validationFailures: IValidationFailure[] = [];
			const isConformant = await DataspaceProtocolHelper.checkConformance(
				transferRequest,
				validationFailures
			);
			expect(isConformant).toBe(true);
		});

		test("should determine as conformant a dataset represented with the DS Protocol's LD Context", async () => {
			const validationFailures: IValidationFailure[] = [];
			const isConformant = await DataspaceProtocolHelper.checkConformance(
				datasetAsDsProtocol,
				validationFailures
			);
			expect(isConformant).toBe(true);
		});

		test("should declare non conformant an invalid Dataset as per the DS Protocol", async () => {
			const dataset2: IDcatDataset = ObjectHelper.clone<IDcatDataset>(dataset);
			delete (dataset2["dcat:distribution"] as IDcatDistribution[])[0]["dcterms:format"];

			const validationFailures: IValidationFailure[] = [];
			const isConformant = await DataspaceProtocolHelper.checkConformance(
				dataset2,
				validationFailures
			);
			expect(isConformant).toBe(false);
		});

		test("should declare non conformant an invalid DataService as per the DS Protocol", async () => {
			const datasService2: IDcatDataService = ObjectHelper.clone<IDcatDataService>(dataService);
			delete datasService2["dcat:endpointURL"];

			const validationFailures: IValidationFailure[] = [];
			const isConformant = await DataspaceProtocolHelper.checkConformance(
				datasService2,
				validationFailures
			);
			expect(isConformant).toBe(false);
		});

		test("should determine as non conformant an invalid standard object of the DS Protocol", async () => {
			const transferRequest2: IJsonLdNodeObject =
				ObjectHelper.clone<IJsonLdNodeObject>(transferRequest);
			delete transferRequest2.agreementId;

			const validationFailures: IValidationFailure[] = [];
			const isConformant = await DataspaceProtocolHelper.checkConformance(
				transferRequest2,
				validationFailures
			);
			expect(isConformant).toBe(false);
		});

		test("should determine as non conformant an invalid standard object of the DS Protocol - no @type", async () => {
			const transferRequest2: IJsonLdNodeObject =
				ObjectHelper.clone<IJsonLdNodeObject>(transferRequest);
			delete transferRequest2["@type"];

			const validationFailures: IValidationFailure[] = [];
			const isConformant = await DataspaceProtocolHelper.checkConformance(
				transferRequest2,
				validationFailures
			);
			expect(isConformant).toBe(false);
		});
	});

	describe("Catalog Protocol - Request Messages", () => {
		test("should create valid catalog request message with filter", () => {
			const filterEelement = { category: "test" };
			const message: IDataspaceProtocolCatalogRequestMessage = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": DataspaceProtocolCatalogTypes.CatalogRequestMessage,
				filter: [filterEelement]
			};

			expect(message["@context"]).toContain(DataspaceProtocolContexts.ContextRoot);
			expect(message["@type"]).toBe(DataspaceProtocolCatalogTypes.CatalogRequestMessage);
			expect(message.filter).toContain(filterEelement);
		});

		test("should create valid dataset request message", () => {
			const message: IDataspaceProtocolDatasetRequestMessage = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": DataspaceProtocolCatalogTypes.DatasetRequestMessage,
				dataset: "dataset-123"
			};

			expect(message["@context"]).toContain(DataspaceProtocolContexts.ContextRoot);
			expect(message["@type"]).toBe(DataspaceProtocolCatalogTypes.DatasetRequestMessage);
			expect(message.dataset).toBe("dataset-123");
		});
	});

	describe("Catalog Protocol - Error Messages", () => {
		test("should create valid catalog error without reasons", () => {
			const error: IDataspaceProtocolCatalogError = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": DataspaceProtocolCatalogTypes.CatalogError,
				code: "NOT_FOUND"
			};

			expect(error["@context"]).toContain(DataspaceProtocolContexts.ContextRoot);
			expect(error["@type"]).toBe(DataspaceProtocolCatalogTypes.CatalogError);
			expect(error.code).toBe("NOT_FOUND");
			expect(error.reason).toBeUndefined();
		});

		test("should create valid catalog error with reasons", () => {
			const error: IDataspaceProtocolCatalogError = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": DataspaceProtocolCatalogTypes.CatalogError,
				code: "VALIDATION_ERROR",
				reason: ["Invalid filter format", "Missing required field"]
			};

			expect(error["@context"]).toContain(DataspaceProtocolContexts.ContextRoot);
			expect(error["@type"]).toBe(DataspaceProtocolCatalogTypes.CatalogError);
			expect(error.code).toBe("VALIDATION_ERROR");
			expect(error.reason).toHaveLength(2);
			expect(error.reason?.[0]).toBe("Invalid filter format");
		});
	});

	describe("Catalog Protocol - Integration Flows", () => {
		test("should demonstrate catalog request and response flow", () => {
			const filterEelement = { category: "sensors" };
			// Request
			const request: IDataspaceProtocolCatalogRequestMessage = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": DataspaceProtocolCatalogTypes.CatalogRequestMessage,
				filter: [filterEelement]
			};

			expect(request.filter).toContain(filterEelement);

			// Response (simulated)
			const dataset: IDcatDataset = {
				"@context": {
					dcat: DcatContexts.Namespace,
					dcterms: DublinCoreContexts.ContextTerms
				},
				"@type": "dcat:Dataset",
				"@id": "sensor:sensor-dataset-1"
			};

			const response: IDcatCatalog = {
				"@context": {
					dcat: DcatContexts.Namespace,
					dcterms: DublinCoreContexts.ContextTerms
				},
				"@type": "dcat:Catalog",
				"@id": "catalog:catalog-response",
				"dcat:dataset": [dataset]
			};

			expect(response["dcat:dataset"]).toBeDefined();
			const datasets = ArrayHelper.fromObjectOrArray(response["dcat:dataset"]);
			expect(datasets?.[0]?.["@id"]).toBe("sensor:sensor-dataset-1");
		});

		test("should demonstrate dataset request and response flow", () => {
			// Request
			const request: IDataspaceProtocolDatasetRequestMessage = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": DataspaceProtocolCatalogTypes.DatasetRequestMessage,
				dataset: "dataset:dataset-456"
			};

			expect(request.dataset).toBe("dataset:dataset-456");

			// Response
			const response: IDcatDataset = {
				"@context": {
					dcat: DcatContexts.Namespace,
					dcterms: DublinCoreContexts.ContextTerms
				},
				"@type": "dcat:Dataset",
				"@id": "dataset:dataset-456",
				"dcterms:title": "Requested Dataset"
			};

			expect(response["@id"]).toBe(request.dataset);
			expect(response["dcterms:title"]).toBe("Requested Dataset");
		});

		test("should demonstrate error response flow", () => {
			const request: IDataspaceProtocolDatasetRequestMessage = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": DataspaceProtocolCatalogTypes.DatasetRequestMessage,
				dataset: "non-existent-dataset"
			};

			// Error response
			const errorResponse: IDataspaceProtocolCatalogError = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": DataspaceProtocolCatalogTypes.CatalogError,
				code: "DATASET_NOT_FOUND",
				reason: [`Dataset '${request.dataset}' does not exist in the catalog`]
			};

			expect(errorResponse.code).toBe("DATASET_NOT_FOUND");
			expect(errorResponse.reason).toHaveLength(1);
		});
	});

	describe("Transfer Protocol - Transfer Process Messages", () => {
		test("should create valid Transfer Process with REQUESTED state", () => {
			const transferProcess: IDataspaceProtocolTransferProcess = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": "dspace:TransferProcess",
				consumerPid: "consumer:pid-123",
				providerPid: "provider:pid-456",
				state: DataspaceProtocolTransferProcessStateType.REQUESTED
			};

			expect(transferProcess["@context"]).toContain(DataspaceProtocolContexts.ContextRoot);
			expect(transferProcess["@type"]).toBe("dspace:TransferProcess");
			expect(transferProcess.consumerPid).toBe("consumer:pid-123");
			expect(transferProcess.providerPid).toBe("provider:pid-456");
			expect(transferProcess.state).toBe("REQUESTED");
		});

		test("should create valid Transfer Process with STARTED state", () => {
			const transferProcess: IDataspaceProtocolTransferProcess = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": "dspace:TransferProcess",
				consumerPid: "consumer:pid-789",
				providerPid: "provider:pid-012",
				state: DataspaceProtocolTransferProcessStateType.STARTED
			};

			expect(transferProcess.state).toBe("STARTED");
		});

		test("should accept all valid Transfer Process state values", () => {
			const states = [
				DataspaceProtocolTransferProcessStateType.REQUESTED,
				DataspaceProtocolTransferProcessStateType.STARTED,
				DataspaceProtocolTransferProcessStateType.COMPLETED,
				DataspaceProtocolTransferProcessStateType.SUSPENDED,
				DataspaceProtocolTransferProcessStateType.TERMINATED
			];

			states.forEach(state => {
				const transferProcess: IDataspaceProtocolTransferProcess = {
					"@context": [DataspaceProtocolContexts.ContextRoot],
					"@type": "dspace:TransferProcess",
					consumerPid: "consumer:pid",
					providerPid: "provider:pid",
					state
				};

				expect(transferProcess.state).toBe(state);
				expect(typeof transferProcess.state).toBe("string");
			});
		});

		test("should demonstrate Transfer Process state as string value", () => {
			const transferProcess: IDataspaceProtocolTransferProcess = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": "dspace:TransferProcess",
				consumerPid: "consumer:pid-test",
				providerPid: "provider:pid-test",
				state: "COMPLETED"
			};

			// Verify state is a string, not an object
			expect(typeof transferProcess.state).toBe("string");
			expect(transferProcess.state).toBe("COMPLETED");

			// Verify it can be serialized to JSON properly
			const json = JSON.stringify(transferProcess);
			const parsed = JSON.parse(json);
			expect(parsed.state).toBe("COMPLETED");
			expect(typeof parsed.state).toBe("string");
		});
	});
});
