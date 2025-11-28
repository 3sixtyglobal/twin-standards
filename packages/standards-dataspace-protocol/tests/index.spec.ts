// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { ArrayHelper } from "@twin.org/core";
import type { ICatalog, IDataset } from "@twin.org/standards-w3c-dcat";
import {
	CatalogTypes,
	DataspaceProtocolContexts,
	type ICatalogError,
	type ICatalogRequestMessage,
	type IDatasetRequestMessage
} from "../src/index.js";

describe("Dataspace Protocol", () => {
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
			expect(CatalogTypes.CatalogRequestMessage).toBe("CatalogRequestMessage");
			expect(CatalogTypes.DatasetRequestMessage).toBe("DatasetRequestMessage");
			expect(CatalogTypes.CatalogError).toBe("CatalogError");
		});
	});

	describe("Catalog Protocol - Request Messages", () => {
		test("should create valid catalog request message with filter", () => {
			const filterEelement = { category: "test" };
			const message: ICatalogRequestMessage = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": CatalogTypes.CatalogRequestMessage,
				filter: [filterEelement]
			};

			expect(message["@context"]).toContain(DataspaceProtocolContexts.ContextRoot);
			expect(message["@type"]).toBe(CatalogTypes.CatalogRequestMessage);
			expect(message.filter).toContain(filterEelement);
		});

		test("should create valid dataset request message", () => {
			const message: IDatasetRequestMessage = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": CatalogTypes.DatasetRequestMessage,
				dataset: "dataset-123"
			};

			expect(message["@context"]).toContain(DataspaceProtocolContexts.ContextRoot);
			expect(message["@type"]).toBe(CatalogTypes.DatasetRequestMessage);
			expect(message.dataset).toBe("dataset-123");
		});
	});

	describe("Catalog Protocol - Error Messages", () => {
		test("should create valid catalog error without reasons", () => {
			const error: ICatalogError = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": CatalogTypes.CatalogError,
				code: "NOT_FOUND"
			};

			expect(error["@context"]).toContain(DataspaceProtocolContexts.ContextRoot);
			expect(error["@type"]).toBe(CatalogTypes.CatalogError);
			expect(error.code).toBe("NOT_FOUND");
			expect(error.reason).toBeUndefined();
		});

		test("should create valid catalog error with reasons", () => {
			const error: ICatalogError = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": CatalogTypes.CatalogError,
				code: "VALIDATION_ERROR",
				reason: ["Invalid filter format", "Missing required field"]
			};

			expect(error["@context"]).toContain(DataspaceProtocolContexts.ContextRoot);
			expect(error["@type"]).toBe(CatalogTypes.CatalogError);
			expect(error.code).toBe("VALIDATION_ERROR");
			expect(error.reason).toHaveLength(2);
			expect(error.reason?.[0]).toBe("Invalid filter format");
		});
	});

	describe("Catalog Protocol - Integration Flows", () => {
		test("should demonstrate catalog request and response flow", () => {
			const filterEelement = { category: "sensors" };
			// Request
			const request: ICatalogRequestMessage = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": CatalogTypes.CatalogRequestMessage,
				filter: [filterEelement]
			};

			expect(request.filter).toContain(filterEelement);

			// Response (simulated)
			const dataset: IDataset = {
				"@type": "Dataset",
				"@id": "sensor-dataset-1"
			};

			const response: ICatalog = {
				"@type": "Catalog",
				"@id": "catalog-response",
				"dcat:dataset": [dataset]
			};

			expect(response["dcat:dataset"]).toBeDefined();
			const datasets = ArrayHelper.fromObjectOrArray(response["dcat:dataset"]);
			expect(datasets?.[0]?.["@id"]).toBe("sensor-dataset-1");
		});

		test("should demonstrate dataset request and response flow", () => {
			// Request
			const request: IDatasetRequestMessage = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": CatalogTypes.DatasetRequestMessage,
				dataset: "dataset-456"
			};

			expect(request.dataset).toBe("dataset-456");

			// Response
			const response: IDataset = {
				"@type": "Dataset",
				"@id": "dataset-456",
				"dcterms:title": "Requested Dataset"
			};

			expect(response["@id"]).toBe(request.dataset);
			expect(response["dcterms:title"]).toBe("Requested Dataset");
		});

		test("should demonstrate error response flow", () => {
			const request: IDatasetRequestMessage = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": CatalogTypes.DatasetRequestMessage,
				dataset: "non-existent-dataset"
			};

			// Error response
			const errorResponse: ICatalogError = {
				"@context": [DataspaceProtocolContexts.ContextRoot],
				"@type": CatalogTypes.CatalogError,
				code: "DATASET_NOT_FOUND",
				reason: [`Dataset '${request.dataset}' does not exist in the catalog`]
			};

			expect(errorResponse.code).toBe("DATASET_NOT_FOUND");
			expect(errorResponse.reason).toHaveLength(1);
		});
	});
});
