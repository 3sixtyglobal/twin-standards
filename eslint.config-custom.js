// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
export function extendConfig(allRules, config) {
	if (Array.isArray(config[0].ignores)) {
		config[0].ignores.push('./packages/standards-unece/src/models/bsp/**/*');
		config[0].ignores.push('./packages/standards-unece/src/models/lists/**/*');
		config[0].ignores.push('./packages/standards-unece/src/models/typeCodes/**/*');
		config[0].ignores.push('./packages/standards-unece/src/models/uneceCodeLists.ts');
		config[0].ignores.push('./packages/standards-unece/src-data/**/*');
		// Validators compiled from the schemas by ts-to-schema.
		config[0].ignores.push('./packages/*/src/compiled/**/*');
	}
}
