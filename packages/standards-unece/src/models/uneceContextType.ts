// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SingleOccurrenceArray } from "@3sixty/core";
import type { IJsonLdContextDefinitionElement } from "@3sixty/data-json-ld";
import type { UneceContexts } from "./uneceContexts.js";

/**
 * The UNECE JSON-LD context type.
 */
export type UneceContextType =
	| typeof UneceContexts.Context
	| SingleOccurrenceArray<IJsonLdContextDefinitionElement, typeof UneceContexts.Context>;
