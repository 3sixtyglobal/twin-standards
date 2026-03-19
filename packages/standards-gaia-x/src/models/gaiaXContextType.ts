// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SingleOccurrenceArray } from "@twin.org/core";
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { GaiaXContexts } from "./gaiaXContexts.js";

/**
 * The Gaia-X JSON-LD context type.
 */
export type GaiaXContextType =
	| typeof GaiaXContexts.Context
	| SingleOccurrenceArray<IJsonLdContextDefinitionElement, typeof GaiaXContexts.Context>;
