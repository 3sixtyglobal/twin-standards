// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { DidContexts } from "../models/didContexts.js";
import { DidTypes } from "../models/didTypes.js";
import DidDocumentSchema from "../schemas/DidDocument.json" with { type: "json" };
import DidVerifiableCredentialSchema from "../schemas/DidVerifiableCredential.json" with { type: "json" };
import DidVerifiablePresentationSchema from "../schemas/DidVerifiablePresentation.json" with { type: "json" };

/**
 * Data Type registration for DID.
 */
export abstract class DidDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		const types = [
			{
				type: DidTypes.Document,
				schema: DidDocumentSchema
			}
		];

		DataTypeHelper.registerTypes(DidContexts.Namespace, undefined, types);
		DataTypeHelper.registerTypes(DidContexts.JsonSchemaNamespace, undefined, types);

		const typesCredentials = [
			{
				type: DidTypes.VerifiableCredential,
				schema: DidVerifiableCredentialSchema
			},
			{
				type: DidTypes.VerifiablePresentation,
				schema: DidVerifiablePresentationSchema
			}
		];

		DataTypeHelper.registerTypes(DidContexts.NamespaceVCv1, undefined, typesCredentials);
		DataTypeHelper.registerTypes(DidContexts.NamespaceVCv2, undefined, typesCredentials);
		DataTypeHelper.registerTypes(DidContexts.JsonSchemaNamespace, undefined, typesCredentials);
	}
}
