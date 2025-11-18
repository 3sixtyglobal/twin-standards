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
			expect(DataspaceProtocolContexts.ContextRoot).toBe(
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
			const message: ICatalogRequestMessage = {
				"@context": DataspaceProtocolContexts.ContextRoot,
				"@type": CatalogTypes.CatalogRequestMessage,
				filter: { category: "test" }
			};

			expect(message["@context"]).toBe(DataspaceProtocolContexts.ContextRoot);
			expect(message["@type"]).toBe(CatalogTypes.CatalogRequestMessage);
			expect(message.filter).toEqual({ category: "test" });
		});

		test("should create valid dataset request message", () => {
			const message: IDatasetRequestMessage = {
				"@context": DataspaceProtocolContexts.ContextRoot,
				"@type": CatalogTypes.DatasetRequestMessage,
				dataset: "dataset-123"
			};

			expect(message["@context"]).toBe(DataspaceProtocolContexts.ContextRoot);
			expect(message["@type"]).toBe(CatalogTypes.DatasetRequestMessage);
			expect(message.dataset).toBe("dataset-123");
		});
	});

	describe("Catalog Protocol - Error Messages", () => {
		test("should create valid catalog error without reasons", () => {
			const error: ICatalogError = {
				"@context": DataspaceProtocolContexts.ContextRoot,
				"@type": CatalogTypes.CatalogError,
				code: "NOT_FOUND"
			};

			expect(error["@context"]).toBe(DataspaceProtocolContexts.ContextRoot);
			expect(error["@type"]).toBe(CatalogTypes.CatalogError);
			expect(error.code).toBe("NOT_FOUND");
			expect(error.reasons).toBeUndefined();
		});

		test("should create valid catalog error with reasons", () => {
			const error: ICatalogError = {
				"@context": DataspaceProtocolContexts.ContextRoot,
				"@type": CatalogTypes.CatalogError,
				code: "VALIDATION_ERROR",
				reasons: ["Invalid filter format", "Missing required field"]
			};

			expect(error["@context"]).toBe(DataspaceProtocolContexts.ContextRoot);
			expect(error["@type"]).toBe(CatalogTypes.CatalogError);
			expect(error.code).toBe("VALIDATION_ERROR");
			expect(error.reasons).toHaveLength(2);
			expect(error.reasons?.[0]).toBe("Invalid filter format");
		});
	});

	describe("Catalog Protocol - Integration Flows", () => {
		test("should demonstrate catalog request and response flow", () => {
			// Request
			const request: ICatalogRequestMessage = {
				"@context": DataspaceProtocolContexts.ContextRoot,
				"@type": CatalogTypes.CatalogRequestMessage,
				filter: { category: "sensors" }
			};

			expect(request.filter).toEqual({ category: "sensors" });

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
				"@context": DataspaceProtocolContexts.ContextRoot,
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
				"@context": DataspaceProtocolContexts.ContextRoot,
				"@type": CatalogTypes.DatasetRequestMessage,
				dataset: "non-existent-dataset"
			};

			// Error response
			const errorResponse: ICatalogError = {
				"@context": DataspaceProtocolContexts.ContextRoot,
				"@type": CatalogTypes.CatalogError,
				code: "DATASET_NOT_FOUND",
				reasons: [`Dataset '${request.dataset}' does not exist in the catalog`]
			};

			expect(errorResponse.code).toBe("DATASET_NOT_FOUND");
			expect(errorResponse.reasons).toHaveLength(1);
		});
	});
});
