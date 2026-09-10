// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for DIDs.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DidTypes = {
	/**
	 * The type for Document.
	 */
	Document: "Document",

	/**
	 * The type for Verifiable Credential.
	 */
	VerifiableCredential: "VerifiableCredential",

	/**
	 * The type for Verifiable Presentation.
	 */
	VerifiablePresentation: "VerifiablePresentation",

	/**
	 * The type for Ed25519VerificationKey2020.
	 */
	Ed25519VerificationKey2020: "Ed25519VerificationKey2020",

	/**
	 * The type for JsonWebKey2020.
	 */
	JsonWebKey2020: "JsonWebKey2020",

	/**
	 * The type for LinkedDomains.
	 */
	LinkedDomains: "LinkedDomains",

	/**
	 * The type for Multikey.
	 */
	Multikey: "Multikey",

	/**
	 * The type for CredentialSchema.
	 */
	CredentialSchema: "CredentialSchema",

	/**
	 * The type for CredentialStatus.
	 */
	CredentialStatus: "CredentialStatus",

	/**
	 * The type for CryptoSuites.
	 */
	CryptoSuites: "CryptoSuites",

	/**
	 * The type for DataIntegrityProof.
	 */
	DataIntegrityProof: "DataIntegrityProof",

	/**
	 * The type for DocumentVerificationMethod.
	 */
	DocumentVerificationMethod: "DocumentVerificationMethod",

	/**
	 * The type for JsonWebSignature2020Proof.
	 */
	JsonWebSignature2020Proof: "JsonWebSignature2020Proof",

	/**
	 * The type for Label.
	 */
	Label: "Label",

	/**
	 * The type for PresentationVerification.
	 */
	PresentationVerification: "PresentationVerification",

	/**
	 * The type for Proof.
	 */
	Proof: "Proof",

	/**
	 * The type for ProofTypes.
	 */
	ProofTypes: "ProofTypes",

	/**
	 * The type for Service.
	 */
	Service: "Service",

	/**
	 * The type for Types.
	 */
	Types: "Types",

	/**
	 * The type for VerifiableCredentialCommon.
	 */
	VerifiableCredentialCommon: "VerifiableCredentialCommon",

	/**
	 * The type for VerifiableCredentialV1.
	 */
	VerifiableCredentialV1: "VerifiableCredentialV1",

	/**
	 * The type for VerifiableCredentialV2.
	 */
	VerifiableCredentialV2: "VerifiableCredentialV2",

	/**
	 * The type for VerifiablePresentationCommon.
	 */
	VerifiablePresentationCommon: "VerifiablePresentationCommon",

	/**
	 * The type for VerifiablePresentationV1.
	 */
	VerifiablePresentationV1: "VerifiablePresentationV1",

	/**
	 * The type for VerifiablePresentationV2.
	 */
	VerifiablePresentationV2: "VerifiablePresentationV2",

	/**
	 * The type for VerificationMethodType.
	 */
	VerificationMethodType: "VerificationMethodType"
} as const;

/**
 * The types for DIDs.
 */
export type DidTypes = (typeof DidTypes)[keyof typeof DidTypes];
