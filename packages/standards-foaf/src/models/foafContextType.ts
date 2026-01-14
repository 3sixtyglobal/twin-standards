// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { FoafContexts } from "./foafContexts.js";

/**
 * The FOAF JSON-LD context type.
 */
export type FoafContextType =
	| typeof FoafContexts.Namespace
	| [typeof FoafContexts.Namespace]
	| [...IJsonLdContextDefinitionElement[], typeof FoafContexts.Namespace];
