// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { SingleOccurrenceArray } from "@3sixty/core";
import type { IJsonLdContextDefinitionElement } from "@3sixty/data-json-ld";
import type { OdrlContexts } from "./odrlContexts.js";

/**
 * The ODRL JSON-LD context type.
 */
export type OdrlContextType =
	| typeof OdrlContexts.Context
	| SingleOccurrenceArray<IJsonLdContextDefinitionElement, typeof OdrlContexts.Context>;
