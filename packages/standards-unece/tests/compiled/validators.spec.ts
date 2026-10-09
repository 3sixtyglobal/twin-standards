// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Is } from "@3sixty/core";
import { DataTypeHandlerFactory, JsonSchemaHelper } from "@3sixty/data-core";
import * as CompiledValidators from "../../src/compiled/validators.js";
import { UneceDataTypes } from "../../src/dataTypes/uneceDataTypes.js";
import { UneceUnitMeasureCode } from "../../src/models/lists/uneceUnitMeasureCode.js";
import UneceDateTimePeriodFunctionCodeListSchema from "../../src/schemas/UneceDateTimePeriodFunctionCodeList.json" with { type: "json" };
import UneceUnitMeasureCodeSchema from "../../src/schemas/UneceUnitMeasureCode.json" with { type: "json" };

describe("Compiled validators", () => {
	beforeAll(() => {
		UneceDataTypes.registerTypes();
	});

	test("should register a compiled validator for every data type with a schema", async () => {
		// The dependent types are registered too, so their validators come from their own packages.
		const withSchema = DataTypeHandlerFactory.names().filter(name =>
			Is.function(DataTypeHandlerFactory.get(name).jsonSchema)
		);

		const missing: string[] = [];
		for (const name of withSchema) {
			const compiledValidator = await DataTypeHandlerFactory.get(name).compiledValidator?.();
			if (!Is.function(compiledValidator)) {
				missing.push(name);
			}
		}

		expect(withSchema.length).toBeGreaterThan(0);
		expect(missing).toEqual([]);
	});

	test.each([
		["a valid code", UneceUnitMeasureCode.Group],
		["an invalid code", "unece:UnitMeasureCode#Invalid"],
		["a number", 10]
	])(
		"should validate a code list with %s the same as JsonSchemaHelper",
		async (description, data) => {
			const failures = await JsonSchemaHelper.validate(UneceUnitMeasureCodeSchema, data);

			expect(
				JsonSchemaHelper.validateCompiled(CompiledValidators.CompiledUneceUnitMeasureCode, data)
			).toEqual(failures);
		}
	);

	test("should validate a code list with integer like keys the same as JsonSchemaHelper", async () => {
		const data = "unece:DateTimePeriodFunctionCodeList#Invalid";
		const failures = await JsonSchemaHelper.validate(
			UneceDateTimePeriodFunctionCodeListSchema,
			data
		);

		expect(
			JsonSchemaHelper.validateCompiled(
				CompiledValidators.CompiledUneceDateTimePeriodFunctionCodeList,
				data
			)
		).toEqual(failures);
	});
});
