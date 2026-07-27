// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { DataspaceProtocolContexts } from "../models/dataspaceProtocolContexts.js";
import { DataspaceProtocolVersionTypes } from "../models/version/dataspaceProtocolVersionTypes.js";
import AuthSchema from "../schemas/DataspaceProtocolAuth.json" with { type: "json" };
import VersionSchema from "../schemas/DataspaceProtocolVersion.json" with { type: "json" };
import VersionBindingTypeSchema from "../schemas/DataspaceProtocolVersionBindingType.json" with { type: "json" };
import VersionResponseSchema from "../schemas/DataspaceProtocolVersionResponse.json" with { type: "json" };

/**
 * Handle all the version data types for Dataspace Protocol.
 */
export class VersionDataTypes {
	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		const types = [
			{
				type: DataspaceProtocolVersionTypes.VersionResponse,
				schema: VersionResponseSchema
			},
			{
				type: DataspaceProtocolVersionTypes.Version,
				schema: VersionSchema
			},
			{
				type: DataspaceProtocolVersionTypes.Auth,
				schema: AuthSchema
			},
			{
				type: DataspaceProtocolVersionTypes.VersionBindingType,
				schema: VersionBindingTypeSchema
			}
		];

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.Namespace,
			DataspaceProtocolContexts.JsonLdContext,
			types
		);

		DataTypeHelper.registerTypes(
			DataspaceProtocolContexts.JsonSchemaNamespace,
			DataspaceProtocolContexts.JsonLdContext,
			types.map(t => ({ type: `DataspaceProtocol${t.type}`, schema: t.schema }))
		);
	}
}
