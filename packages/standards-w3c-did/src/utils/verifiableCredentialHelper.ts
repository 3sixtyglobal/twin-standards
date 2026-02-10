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
	 * Get the context for the verifiable credential.
	 * @param verifiableCredential The verifiable credential to extract the expiration date from.
	 * @returns The context.
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
	 * Get the context version for the verifiable credential.
	 * @param verifiableCredential The verifiable credential to extract the expiration date from.
	 * @returns The context version.
	 */
	public static getContextVersion(
		verifiableCredential: IDidVerifiableCredential
	): "v1" | "v2" | undefined {
		const context = ArrayHelper.fromObjectOrArray(verifiableCredential["@context"]);
		if (Is.arrayValue(context)) {
			if (context.includes(DidContexts.ContextVCv1)) {
				return "v1";
			}
			if (context.includes(DidContexts.ContextVCv2)) {
				return "v2";
			}
		}
	}

	/**
	 * Get the valid until date from a verifiable credential.
	 * @param verifiableCredential The verifiable credential to extract the expiration date from.
	 * @returns The expiration date, if available.
	 */
	public static getValidUntil(verifiableCredential: IDidVerifiableCredential): string | undefined {
		return (
			ObjectHelper.propertyGet(verifiableCredential, "validUntil") ??
			ObjectHelper.propertyGet(verifiableCredential, "expirationDate")
		);
	}

	/**
	 * Set the valid until date on a verifiable credential.
	 * @param verifiableCredential The verifiable credential to set the expiration date on.
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
	 * Get the valid from from a verifiable credential.
	 * @param verifiableCredential The verifiable credential to extract the issuance date from.
	 * @returns The issuance date, if available.
	 */
	public static getValidFrom(verifiableCredential: IDidVerifiableCredential): string | undefined {
		return (
			ObjectHelper.propertyGet(verifiableCredential, "validFrom") ??
			ObjectHelper.propertyGet(verifiableCredential, "issuanceDate")
		);
	}

	/**
	 * Set the valid from date on a verifiable credential.
	 * @param verifiableCredential The verifiable credential to set the issuance date on.
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
