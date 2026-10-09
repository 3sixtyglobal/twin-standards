// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHandlerFactory } from "@3sixty/data-core";
import { JsonSchemaHelper, type IJsonSchema } from "@3sixty/data-core";
import { UneceDataTypes } from "../src/dataTypes/uneceDataTypes.js";

describe("standards-unece", () => {
	test("Can register types", async () => {
		UneceDataTypes.registerTypes();

		expect(DataTypeHandlerFactory.names().length).toBeGreaterThan(0);

		expect(
			DataTypeHandlerFactory.hasName("https://vocabulary.uncefact.org/AcademicQualification")
		).toBe(true);
		expect(
			DataTypeHandlerFactory.hasName(
				"https://schema.3sixty.global/unece/UneceAcademicQualification"
			)
		).toBe(true);
	});

	test("Can validate schema for UneceUnitMeasureCode", async () => {
		UneceDataTypes.registerTypes();

		const handler = DataTypeHandlerFactory.get(
			"https://schema.3sixty.global/unece/UneceUnitMeasureCode"
		);

		expect(handler).toBeDefined();
		expect(handler?.jsonSchema).toBeDefined();

		if (handler?.jsonSchema) {
			const schema = await handler.jsonSchema();

			expect(schema).toBeDefined();

			const result = await JsonSchemaHelper.validate(
				schema as IJsonSchema,
				"unece:UnitMeasureCode#10"
			);

			expect(result.length).toEqual(0);
		}
	});
});
