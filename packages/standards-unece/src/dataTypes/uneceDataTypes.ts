// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHandlerFactory, type IJsonSchema } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { UneceContexts } from "../models/uneceContexts.js";
import { UneceTypes } from "../models/uneceTypes.js";

/**
 * Handle all the data types for UN/CEFACT.
 */
export class UneceDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(new RegExp(UneceContexts.Namespace), UneceContexts.JsonLdContext);
	}

	/**
	 * Register all the data types.
	 */
	public static async registerTypes(): Promise<void> {
		for (const type of Object.values(UneceTypes)) {
			const json = await import(`../schemas/Unece${type}.json`, { assert: { type: "json" } });

			DataTypeHandlerFactory.register(`${UneceContexts.Namespace}${type}`, () => ({
				namespace: UneceContexts.Namespace,
				jsonLdContext: UneceContexts.JsonLdContext,
				type,
				jsonSchema: async () => json as IJsonSchema
			}));
		}
	}
}
