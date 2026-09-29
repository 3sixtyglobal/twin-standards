// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { JsonLdDataTypes } from "@twin.org/data-json-ld";
import * as CompiledValidators from "../compiled/validators.js";
import { DidContexts } from "../models/didContexts.js";
import { DidTypes } from "../models/didTypes.js";
import DataIntegrityProofSchema from "../schemas/DataIntegrityProof.json" with { type: "json" };
import DidCredentialSchemaSchema from "../schemas/DidCredentialSchema.json" with { type: "json" };
import DidCredentialStatusSchema from "../schemas/DidCredentialStatus.json" with { type: "json" };
import DidCryptoSuitesSchema from "../schemas/DidCryptoSuites.json" with { type: "json" };
import DidDocumentSchema from "../schemas/DidDocument.json" with { type: "json" };
import DidDocumentVerificationMethodSchema from "../schemas/DidDocumentVerificationMethod.json" with { type: "json" };
import DidLabelSchema from "../schemas/DidLabel.json" with { type: "json" };
import DidPresentationVerificationSchema from "../schemas/DidPresentationVerification.json" with { type: "json" };
import DidServiceSchema from "../schemas/DidService.json" with { type: "json" };
import DidTypesSchema from "../schemas/DidTypes.json" with { type: "json" };
import DidVerifiableCredentialSchema from "../schemas/DidVerifiableCredential.json" with { type: "json" };
import DidVerifiableCredentialCommonSchema from "../schemas/DidVerifiableCredentialCommon.json" with { type: "json" };
import DidVerifiableCredentialV1Schema from "../schemas/DidVerifiableCredentialV1.json" with { type: "json" };
import DidVerifiableCredentialV2Schema from "../schemas/DidVerifiableCredentialV2.json" with { type: "json" };
import DidVerifiablePresentationSchema from "../schemas/DidVerifiablePresentation.json" with { type: "json" };
import DidVerifiablePresentationCommonSchema from "../schemas/DidVerifiablePresentationCommon.json" with { type: "json" };
import DidVerifiablePresentationV1Schema from "../schemas/DidVerifiablePresentationV1.json" with { type: "json" };
import DidVerifiablePresentationV2Schema from "../schemas/DidVerifiablePresentationV2.json" with { type: "json" };
import DidVerificationMethodTypeSchema from "../schemas/DidVerificationMethodType.json" with { type: "json" };
import JsonWebSignature2020ProofSchema from "../schemas/JsonWebSignature2020Proof.json" with { type: "json" };
import MultikeySchema from "../schemas/Multikey.json" with { type: "json" };
import ProofSchema from "../schemas/Proof.json" with { type: "json" };
import ProofTypesSchema from "../schemas/ProofTypes.json" with { type: "json" };

/**
 * Handles data type registration for DID.
 */
export abstract class DidDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		// Register the types referenced by the schemas, which are only registered once.
		JsonLdDataTypes.registerTypes();

		const types = [
			{
				type: DidTypes.DataIntegrityProof,
				schema: DataIntegrityProofSchema,
				compiledValidator: CompiledValidators.CompiledDataIntegrityProof
			},
			{
				type: DidTypes.CredentialSchema,
				schema: DidCredentialSchemaSchema,
				compiledValidator: CompiledValidators.CompiledDidCredentialSchema
			},
			{
				type: DidTypes.CredentialStatus,
				schema: DidCredentialStatusSchema,
				compiledValidator: CompiledValidators.CompiledDidCredentialStatus
			},
			{
				type: DidTypes.CryptoSuites,
				schema: DidCryptoSuitesSchema,
				compiledValidator: CompiledValidators.CompiledDidCryptoSuites
			},
			{
				type: DidTypes.Document,
				schema: DidDocumentSchema,
				compiledValidator: CompiledValidators.CompiledDidDocument
			},
			{
				type: DidTypes.DocumentVerificationMethod,
				schema: DidDocumentVerificationMethodSchema,
				compiledValidator: CompiledValidators.CompiledDidDocumentVerificationMethod
			},
			{
				type: DidTypes.Label,
				schema: DidLabelSchema,
				compiledValidator: CompiledValidators.CompiledDidLabel
			},
			{
				type: DidTypes.PresentationVerification,
				schema: DidPresentationVerificationSchema,
				compiledValidator: CompiledValidators.CompiledDidPresentationVerification
			},
			{
				type: DidTypes.Service,
				schema: DidServiceSchema,
				compiledValidator: CompiledValidators.CompiledDidService
			},
			{
				type: DidTypes.Types,
				schema: DidTypesSchema,
				compiledValidator: CompiledValidators.CompiledDidTypes
			},
			{
				type: DidTypes.VerifiableCredential,
				schema: DidVerifiableCredentialSchema,
				compiledValidator: CompiledValidators.CompiledDidVerifiableCredential
			},
			{
				type: DidTypes.VerifiableCredentialCommon,
				schema: DidVerifiableCredentialCommonSchema,
				compiledValidator: CompiledValidators.CompiledDidVerifiableCredentialCommon
			},
			{
				type: DidTypes.VerifiableCredentialV1,
				schema: DidVerifiableCredentialV1Schema,
				compiledValidator: CompiledValidators.CompiledDidVerifiableCredentialV1
			},
			{
				type: DidTypes.VerifiableCredentialV2,
				schema: DidVerifiableCredentialV2Schema,
				compiledValidator: CompiledValidators.CompiledDidVerifiableCredentialV2
			},
			{
				type: DidTypes.VerifiablePresentation,
				schema: DidVerifiablePresentationSchema,
				compiledValidator: CompiledValidators.CompiledDidVerifiablePresentation
			},
			{
				type: DidTypes.VerifiablePresentationCommon,
				schema: DidVerifiablePresentationCommonSchema,
				compiledValidator: CompiledValidators.CompiledDidVerifiablePresentationCommon
			},
			{
				type: DidTypes.VerifiablePresentationV1,
				schema: DidVerifiablePresentationV1Schema,
				compiledValidator: CompiledValidators.CompiledDidVerifiablePresentationV1
			},
			{
				type: DidTypes.VerifiablePresentationV2,
				schema: DidVerifiablePresentationV2Schema,
				compiledValidator: CompiledValidators.CompiledDidVerifiablePresentationV2
			},
			{
				type: DidTypes.VerificationMethodType,
				schema: DidVerificationMethodTypeSchema,
				compiledValidator: CompiledValidators.CompiledDidVerificationMethodType
			},
			{
				type: DidTypes.JsonWebSignature2020Proof,
				schema: JsonWebSignature2020ProofSchema,
				compiledValidator: CompiledValidators.CompiledJsonWebSignature2020Proof
			},
			{
				type: DidTypes.Multikey,
				schema: MultikeySchema,
				compiledValidator: CompiledValidators.CompiledMultikey
			},
			{
				type: DidTypes.Proof,
				schema: ProofSchema,
				compiledValidator: CompiledValidators.CompiledProof
			},
			{
				type: DidTypes.ProofTypes,
				schema: ProofTypesSchema,
				compiledValidator: CompiledValidators.CompiledProofTypes
			}
		];

		DataTypeHelper.registerTypes(DidContexts.Namespace, undefined, types);

		// The schema titles are not all the DID type prefixed with "Did", so the schemas
		// are registered under their own titles, which is what the $refs between them use.
		DataTypeHelper.registerTypes(
			DidContexts.JsonSchemaNamespace,
			undefined,
			types.map(t => ({ ...t, type: t.schema.title }))
		);

		const typesCredentials = [
			{
				type: DidTypes.VerifiableCredential,
				schema: DidVerifiableCredentialSchema,
				compiledValidator: CompiledValidators.CompiledDidVerifiableCredential
			},
			{
				type: DidTypes.VerifiablePresentation,
				schema: DidVerifiablePresentationSchema,
				compiledValidator: CompiledValidators.CompiledDidVerifiablePresentation
			}
		];

		DataTypeHelper.registerTypes(DidContexts.NamespaceVCv1, undefined, typesCredentials);
		DataTypeHelper.registerTypes(DidContexts.NamespaceVCv2, undefined, typesCredentials);
	}
}
