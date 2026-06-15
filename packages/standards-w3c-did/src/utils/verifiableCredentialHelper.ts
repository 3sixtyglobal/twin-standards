// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { ArrayHelper, Is, ObjectHelper } from "@twin.org/core";
import { nameof } from "@twin.org/nameof";
import { DidContexts } from "../models/didContexts.js";
import type { IDidVerifiableCredential } from "../models/IDidVerifiableCredential.js";

/**
 * Helper methods for creating and verifying proofs.
 */
export class VerifiableCredentialHelper {
	/**
	 * Runtime name for the class.
	 */
	public static readonly CLASS_NAME: string = nameof<VerifiableCredentialHelper>();

	/**
	 * Get the JSON-LD context URL for the verifiable credential.
	 * @param verifiableCredential The verifiable credential to inspect.
	 * @returns The context URL, or undefined if the version cannot be determined.
	 */
	public static getContext(
		verifiableCredential: IDidVerifiableCredential
	): typeof DidContexts.ContextVCv1 | typeof DidContexts.ContextVCv2 | undefined {
		const contextVersion = VerifiableCredentialHelper.getContextVersion(verifiableCredential);
		if (contextVersion === "v1") {
			return DidContexts.ContextVCv1;
		}
		if (contextVersion === "v2") {
			return DidContexts.ContextVCv2;
		}
	}

	/**
	 * Get the context version string for the verifiable credential.
	 * @param verifiableCredential The verifiable credential to inspect.
	 * @returns The context version ("v1" or "v2"), or undefined if not determinable.
	 */
	public static getContextVersion(
		verifiableCredential: IDidVerifiableCredential
	): "v1" | "v2" | undefined {
		const context = ArrayHelper.fromObjectOrArray(verifiableCredential["@context"]);
		if (Is.arrayValue<string>(context)) {
			if (context.includes(DidContexts.ContextVCv1)) {
				return "v1";
			}
			if (context.includes(DidContexts.ContextVCv2)) {
				return "v2";
			}
		}
	}

	/**
	 * Get the expiration date from a verifiable credential.
	 * @param verifiableCredential The verifiable credential to inspect.
	 * @returns The expiration date string, or undefined if not present.
	 */
	public static getValidUntil(verifiableCredential: IDidVerifiableCredential): string | undefined {
		return (
			ObjectHelper.propertyGet(verifiableCredential, "validUntil") ??
			ObjectHelper.propertyGet(verifiableCredential, "expirationDate")
		);
	}

	/**
	 * Set the expiration date on a verifiable credential.
	 * @param verifiableCredential The verifiable credential to update.
	 * @param validUntil The expiration date to set.
	 */
	public static setValidUntil(
		verifiableCredential: IDidVerifiableCredential,
		validUntil: string
	): void {
		if (VerifiableCredentialHelper.getContextVersion(verifiableCredential) === "v2") {
			ObjectHelper.propertySet(verifiableCredential, "validUntil", validUntil);
		} else {
			ObjectHelper.propertySet(verifiableCredential, "expirationDate", validUntil);
		}
	}

	/**
	 * Get the issuance date from a verifiable credential.
	 * @param verifiableCredential The verifiable credential to inspect.
	 * @returns The issuance date string, or undefined if not present.
	 */
	public static getValidFrom(verifiableCredential: IDidVerifiableCredential): string | undefined {
		return (
			ObjectHelper.propertyGet(verifiableCredential, "validFrom") ??
			ObjectHelper.propertyGet(verifiableCredential, "issuanceDate")
		);
	}

	/**
	 * Set the issuance date on a verifiable credential.
	 * @param verifiableCredential The verifiable credential to update.
	 * @param validFrom The issuance date to set.
	 */
	public static setValidFrom(
		verifiableCredential: IDidVerifiableCredential,
		validFrom: string
	): void {
		if (VerifiableCredentialHelper.getContextVersion(verifiableCredential) === "v2") {
			ObjectHelper.propertySet(verifiableCredential, "validFrom", validFrom);
		} else {
			ObjectHelper.propertySet(verifiableCredential, "issuanceDate", validFrom);
		}
	}
}
