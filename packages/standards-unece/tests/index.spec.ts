// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { UneceDataTypes } from "../src/dataTypes/uneceDataTypes.js";

describe("standards-unece", () => {
	test("Can register types", async () => {
		await UneceDataTypes.registerTypes();

		expect(DataTypeHandlerFactory.names().length).toBeGreaterThan(0);
	});
});
