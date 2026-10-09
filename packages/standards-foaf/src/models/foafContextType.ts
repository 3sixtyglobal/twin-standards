// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SingleOccurrenceArray } from "@3sixty/core";
import type { IJsonLdContextDefinitionElement } from "@3sixty/data-json-ld";
import type { FoafContexts } from "./foafContexts.js";

/**
 * The FOAF JSON-LD context type.
 */
export type FoafContextType =
	| typeof FoafContexts.Context
	| SingleOccurrenceArray<IJsonLdContextDefinitionElement, typeof FoafContexts.Context>;
