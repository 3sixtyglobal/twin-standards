// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DidContexts } from "../../src/models/didContexts.js";
import type { IDidVerifiableCredential } from "../../src/models/IDidVerifiableCredential.js";
import { VerifiableCredentialHelper } from "../../src/utils/verifiableCredentialHelper.js";

describe("VerifiableCredentialHelper", () => {
	test("Can get the class name", () => {
		expect(VerifiableCredentialHelper.CLASS_NAME).toBe("VerifiableCredentialHelper");
	});

	describe("getContext", () => {
		test("Returns VC v1 context when included (array)", () => {
			const vc: IDidVerifiableCredential = {
				"@context": [DidContexts.ContextVCv1],
				type: "VerifiableCredential"
			};

			expect(VerifiableCredentialHelper.getContext(vc)).toBe(DidContexts.ContextVCv1);
		});

		test("Returns VC v2 context when included (array)", () => {
			const vc: IDidVerifiableCredential = {
				"@context": [DidContexts.ContextVCv2],
				type: "VerifiableCredential"
			};

			expect(VerifiableCredentialHelper.getContext(vc)).toBe(DidContexts.ContextVCv2);
		});

		test("Returns VC v1 context when included (string)", () => {
			const vc: IDidVerifiableCredential = {
				"@context": DidContexts.ContextVCv1,
				type: "VerifiableCredential"
			};

			expect(VerifiableCredentialHelper.getContext(vc)).toBe(DidContexts.ContextVCv1);
		});

		test("Returns VC v2 context when included (string)", () => {
			const vc: IDidVerifiableCredential = {
				"@context": DidContexts.ContextVCv2,
				type: "VerifiableCredential"
			};

			expect(VerifiableCredentialHelper.getContext(vc)).toBe(DidContexts.ContextVCv2);
		});

		test("Returns undefined when context is not recognized", () => {
			const vc = {
				"@context": ["https://example.com/not-a-vc-context"],
				type: "VerifiableCredential"
			} as unknown as IDidVerifiableCredential;

			expect(VerifiableCredentialHelper.getContext(vc)).toBeUndefined();
		});
	});

	describe("getContextVersion", () => {
		test("Returns v1 when VC v1 context is included", () => {
			const vc: IDidVerifiableCredential = {
				"@context": [DidContexts.ContextVCv1],
				type: "VerifiableCredential"
			};

			expect(VerifiableCredentialHelper.getContextVersion(vc)).toBe("v1");
		});

		test("Returns v2 when VC v2 context is included", () => {
			const vc: IDidVerifiableCredential = {
				"@context": [DidContexts.ContextVCv2],
				type: "VerifiableCredential"
			};

			expect(VerifiableCredentialHelper.getContextVersion(vc)).toBe("v2");
		});

		test("Returns undefined when context is not recognized", () => {
			const vc = {
				"@context": ["https://example.com/not-a-vc-context"],
				type: "VerifiableCredential"
			} as unknown as IDidVerifiableCredential;

			expect(VerifiableCredentialHelper.getContextVersion(vc)).toBeUndefined();
		});
	});

	describe("getValidUntil", () => {
		test("Prefers validUntil over expirationDate", () => {
			const vc: IDidVerifiableCredential = {
				"@context": [DidContexts.ContextVCv2],
				type: "VerifiableCredential",
				validUntil: "2030-01-01T00:00:00Z",
				expirationDate: "2040-01-01T00:00:00Z"
			};

			expect(VerifiableCredentialHelper.getValidUntil(vc)).toBe("2030-01-01T00:00:00Z");
		});

		test("Falls back to expirationDate when validUntil is not present", () => {
			const vc: IDidVerifiableCredential = {
				"@context": [DidContexts.ContextVCv1],
				type: "VerifiableCredential",
				expirationDate: "2035-01-01T00:00:00Z"
			};

			expect(VerifiableCredentialHelper.getValidUntil(vc)).toBe("2035-01-01T00:00:00Z");
		});

		test("Returns undefined when no date is present", () => {
			const vc: IDidVerifiableCredential = {
				"@context": [DidContexts.ContextVCv2],
				type: "VerifiableCredential"
			};

			expect(VerifiableCredentialHelper.getValidUntil(vc)).toBeUndefined();
		});
	});

	describe("setValidUntil", () => {
		test("Sets expirationDate for VC v1 (array context)", () => {
			const vc: IDidVerifiableCredential & { validUntil?: string; expirationDate?: string } = {
				"@context": [DidContexts.ContextVCv1],
				type: "VerifiableCredential"
			};

			VerifiableCredentialHelper.setValidUntil(vc, "2031-01-01T00:00:00Z");
			expect(vc.expirationDate).toBe("2031-01-01T00:00:00Z");
			expect(vc.validUntil).toBeUndefined();
		});

		test("Sets expirationDate for VC v1 (string context)", () => {
			const vc: IDidVerifiableCredential & { validUntil?: string; expirationDate?: string } = {
				"@context": DidContexts.ContextVCv1,
				type: "VerifiableCredential"
			};

			VerifiableCredentialHelper.setValidUntil(vc, "2031-01-01T00:00:00Z");
			expect(vc.expirationDate).toBe("2031-01-01T00:00:00Z");
			expect(vc.validUntil).toBeUndefined();
		});

		test("Sets validUntil for VC v2 (array context)", () => {
			const vc: IDidVerifiableCredential & { validUntil?: string; expirationDate?: string } = {
				"@context": [DidContexts.ContextVCv2],
				type: "VerifiableCredential"
			};

			VerifiableCredentialHelper.setValidUntil(vc, "2032-01-01T00:00:00Z");
			expect(vc.validUntil).toBe("2032-01-01T00:00:00Z");
			expect(vc.expirationDate).toBeUndefined();
		});

		test("Sets validUntil for VC v2 (string context)", () => {
			const vc: IDidVerifiableCredential & { expirationDate?: string } = {
				"@context": DidContexts.ContextVCv2,
				type: "VerifiableCredential"
			};

			VerifiableCredentialHelper.setValidUntil(vc, "2032-01-01T00:00:00Z");
			expect(vc.validUntil).toBe("2032-01-01T00:00:00Z");
			expect(vc.expirationDate).toBeUndefined();
		});
	});

	describe("getValidFrom", () => {
		test("Prefers validFrom over issuanceDate", () => {
			const vc: IDidVerifiableCredential = {
				"@context": [DidContexts.ContextVCv2],
				type: "VerifiableCredential",
				validFrom: "2020-01-01T00:00:00Z",
				issuanceDate: "2010-01-01T00:00:00Z"
			};

			expect(VerifiableCredentialHelper.getValidFrom(vc)).toBe("2020-01-01T00:00:00Z");
		});

		test("Falls back to issuanceDate when validFrom is not present", () => {
			const vc: IDidVerifiableCredential = {
				"@context": [DidContexts.ContextVCv1],
				type: "VerifiableCredential",
				issuanceDate: "2015-05-10T12:30:00Z"
			};

			expect(VerifiableCredentialHelper.getValidFrom(vc)).toBe("2015-05-10T12:30:00Z");
		});

		test("Returns undefined when no date is present", () => {
			const vc: IDidVerifiableCredential = {
				"@context": [DidContexts.ContextVCv2],
				type: "VerifiableCredential"
			};

			expect(VerifiableCredentialHelper.getValidFrom(vc)).toBeUndefined();
		});
	});

	describe("setValidFrom", () => {
		test("Sets issuanceDate for VC v1 (array context)", () => {
			const vc: IDidVerifiableCredential & { validFrom?: string; issuanceDate?: string } = {
				"@context": [DidContexts.ContextVCv1],
				type: "VerifiableCredential"
			};

			VerifiableCredentialHelper.setValidFrom(vc, "2010-01-01T00:00:00Z");
			expect(vc.issuanceDate).toBe("2010-01-01T00:00:00Z");
			expect(vc.validFrom).toBeUndefined();
		});

		test("Sets issuanceDate for VC v1 (string context)", () => {
			const vc: IDidVerifiableCredential & { validFrom?: string } = {
				"@context": DidContexts.ContextVCv1,
				type: "VerifiableCredential"
			};

			VerifiableCredentialHelper.setValidFrom(vc, "2010-01-01T00:00:00Z");
			expect(vc.issuanceDate).toBe("2010-01-01T00:00:00Z");
			expect(vc.validFrom).toBeUndefined();
		});

		test("Sets validFrom for VC v2 (array context)", () => {
			const vc: IDidVerifiableCredential & { validFrom?: string; issuanceDate?: string } = {
				"@context": [DidContexts.ContextVCv2],
				type: "VerifiableCredential"
			};

			VerifiableCredentialHelper.setValidFrom(vc, "2011-01-01T00:00:00Z");
			expect(vc.validFrom).toBe("2011-01-01T00:00:00Z");
			expect(vc.issuanceDate).toBeUndefined();
		});

		test("Sets validFrom for VC v2 (string context)", () => {
			const vc: IDidVerifiableCredential & { issuanceDate?: string } = {
				"@context": DidContexts.ContextVCv2,
				type: "VerifiableCredential"
			};

			VerifiableCredentialHelper.setValidFrom(vc, "2011-01-01T00:00:00Z");
			expect(vc.validFrom).toBe("2011-01-01T00:00:00Z");
			expect(vc.issuanceDate).toBeUndefined();
		});
	});
});
