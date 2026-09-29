// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import * as CompiledValidators from "../compiled/validators.js";
import { DublinCoreClasses } from "../models/dublinCoreClasses.js";
import { DublinCoreContexts } from "../models/dublinCoreContexts.js";
import PeriodOfTimeSchema from "../schemas/DublinCorePeriodOfTime.json" with { type: "json" };

/**
 * Handle all the data types for Dublin Core.
 */
export class DublinCoreDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(
			/https?:\/\/purl.org\/dc\/terms\/?/,
			DublinCoreContexts.JsonLdContextTerms
		);
		JsonLdProcessor.addRedirect(
			/https?:\/\/purl.org\/dc\/dcmitype\/?/,
			DublinCoreContexts.JsonLdContextDcmiType
		);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		const types = [
			{
				type: DublinCoreClasses.PeriodOfTime,
				schema: PeriodOfTimeSchema,
				compiledValidator: CompiledValidators.CompiledDublinCorePeriodOfTime
			}
		];

		DataTypeHelper.registerTypes(
			DublinCoreContexts.NamespaceTerms,
			DublinCoreContexts.JsonLdContextTerms,
			types
		);

		DataTypeHelper.registerTypes(
			DublinCoreContexts.JsonSchemaNamespace,
			DublinCoreContexts.JsonLdContextTerms,
			types.map(t => ({
				type: `DublinCore${t.type}`,
				schema: t.schema,
				compiledValidator: t.compiledValidator
			}))
		);
	}
}
