// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IDidCredentialSchema } from "./IDidCredentialSchema.js";
import type { IDidCredentialStatus } from "./IDidCredentialStatus.js";
import type { IDidLabel } from "./IDidLabel.js";
import type { IProof } from "./IProof.js";

/**
 * Common properties shared by all verifiable credential versions.
 * @see https://www.w3.org/TR/vc-data-model-2.0
 */
export interface IDidVerifiableCredentialCommon {
	/**
	 * The identifier for the verifiable credential.
	 */
	id?: string;

	/**
	 * The types of the data stored in the verifiable credential.
	 */
	type: ObjectOrArray<string>;

	/**
	 * The data for the verifiable credential.
	 */
	credentialSubject?: ObjectOrArray<IJsonLdNodeObject>;

	/**
	 * Used to discover information about the current status of the
	 * verifiable credential, such as whether it is suspended or revoked.
	 */
	credentialStatus?: ObjectOrArray<IDidCredentialStatus>;

	/**
	 * Annotate type definitions or lock them to specific versions of the vocabulary.
	 */
	credentialSchema?: ObjectOrArray<IDidCredentialSchema>;

	/**
	 * The issuing identity.
	 */
	issuer?: string | { id: string; name?: string | IDidLabel[]; description?: string | IDidLabel[] };

	/**
	 * The name of the credential.
	 */
	name?: string | IDidLabel[];

	/**
	 * The description of the credential.
	 */
	description?: string | IDidLabel[];

	/**
	 * Evidence associated with the Credential.
	 */
	evidence?: ObjectOrArray<IJsonLdNodeObject>;

	/**
	 * Proofs that the verifiable credential is valid.
	 * Optional if a different proof method is used, such as JWT.
	 */
	proof?: ObjectOrArray<IProof>;
}
