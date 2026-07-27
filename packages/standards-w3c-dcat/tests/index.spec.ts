// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DcatDataTypes } from "../src/dataTypes/dcatDataTypes.js";
import { DcatClasses } from "../src/models/dcatClasses.js";
import { DcatContexts } from "../src/models/dcatContexts.js";
import { DcatRelationshipType } from "../src/models/dcatRelationshipTypes.js";

describe("DCAT", () => {
	describe("Contexts", () => {
		it("should have correct DCAT context root URL", () => {
			expect(DcatContexts.Namespace).toBe("http://www.w3.org/ns/dcat#");
		});

		it("should have correct Context property", () => {
			expect(DcatContexts.Context).toBe("http://www.w3.org/ns/dcat#");
		});

		it("should have correct redirect URL", () => {
			expect(DcatContexts.JsonLdContext).toBe("https://www.w3.org/ns/dcat.jsonld");
		});
	});

	describe("Classes", () => {
		it("should have all core DCAT classes", () => {
			expect(DcatClasses.Catalog).toBe("dcat:Catalog");
			expect(DcatClasses.Resource).toBe("dcat:Resource");
			expect(DcatClasses.Dataset).toBe("dcat:Dataset");
			expect(DcatClasses.Distribution).toBe("dcat:Distribution");
			expect(DcatClasses.DataService).toBe("dcat:DataService");
			expect(DcatClasses.DatasetSeries).toBe("dcat:DatasetSeries");
			expect(DcatClasses.CatalogRecord).toBe("dcat:CatalogRecord");
			expect(DcatClasses.Relationship).toBe("dcat:Relationship");
			expect(DcatClasses.Role).toBe("dcat:Role");
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
