// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { ObjectHelper } from "@twin.org/core";
import { nameof } from "@twin.org/nameof";
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
}
