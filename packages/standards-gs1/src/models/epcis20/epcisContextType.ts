// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SingleOccurrenceArray } from "@twin.org/core";
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { EpcisContexts } from "./epcisContexts.js";

/**
 * Allowed shapes for an EPCIS 2.0 JSON-LD `@context`, anchored on the GS1
 * context root and optionally augmented with custom entries.
 */
export type EpcisContextType =
	| typeof EpcisContexts.Context
	| SingleOccurrenceArray<IJsonLdContextDefinitionElement, typeof EpcisContexts.Context>;
