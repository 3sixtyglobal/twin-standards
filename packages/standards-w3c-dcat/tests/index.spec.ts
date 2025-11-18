// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DcatClasses, DcatContexts, DcatDataTypes, DcatRelationshipType } from "../src/index.js";

describe("DCAT", () => {
	describe("Contexts", () => {
		it("should have correct DCAT context root URL", () => {
			expect(DcatContexts.ContextRoot).toBe("http://www.w3.org/ns/dcat#");
		});

		it("should have correct redirect URL", () => {
			expect(DcatContexts.ContextRedirect).toBe("https://www.w3.org/ns/dcat.jsonld");
		});

		it("should have correct SPDX context URL", () => {
			expect(DcatContexts.ContextSpdx).toBe("http://spdx.org/rdf/terms#");
		});

		it("should have correct PROV context URL", () => {
			expect(DcatContexts.ContextProv).toBe("http://www.w3.org/ns/prov#");
		});
	});

	describe("Classes", () => {
		it("should have all core DCAT classes", () => {
			expect(DcatClasses.Catalog).toBe("Catalog");
			expect(DcatClasses.Resource).toBe("Resource");
			expect(DcatClasses.Dataset).toBe("Dataset");
			expect(DcatClasses.Distribution).toBe("Distribution");
			expect(DcatClasses.DataService).toBe("DataService");
			expect(DcatClasses.DatasetSeries).toBe("DatasetSeries");
			expect(DcatClasses.CatalogRecord).toBe("CatalogRecord");
			expect(DcatClasses.Relationship).toBe("Relationship");
			expect(DcatClasses.Role).toBe("Role");
		});

		it("should have exactly 9 classes", () => {
			const classKeys = Object.keys(DcatClasses);
			expect(classKeys.length).toBe(9);
		});
	});

	describe("Relationship Types", () => {
		it("should have qualified relationship types", () => {
			expect(DcatRelationshipType.HadRole).toBe("hadRole");
			expect(DcatRelationshipType.Replaces).toBe("replaces");
			expect(DcatRelationshipType.IsReplacedBy).toBe("isReplacedBy");
		});

		it("should have versioning relationship types", () => {
			expect(DcatRelationshipType.HasVersion).toBe("hasVersion");
			expect(DcatRelationshipType.IsVersionOf).toBe("isVersionOf");
		});

		it("should have reference relationship types", () => {
			expect(DcatRelationshipType.IsReferencedBy).toBe("isReferencedBy");
			expect(DcatRelationshipType.References).toBe("references");
		});

		it("should have dependency relationship types", () => {
			expect(DcatRelationshipType.Requires).toBe("requires");
			expect(DcatRelationshipType.IsRequiredBy).toBe("isRequiredBy");
		});
	});

	describe("Data Types", () => {
		it("should have registerRedirects method", () => {
			expect(typeof DcatDataTypes.registerRedirects).toBe("function");
		});

		it("should not throw when registering redirects", () => {
			expect(() => DcatDataTypes.registerRedirects()).not.toThrow();
		});
	});
});
