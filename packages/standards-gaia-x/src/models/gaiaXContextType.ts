// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { GaiaXContexts } from "./gaiaXContexts.js";

/**
 * The Gaia-X JSON-LD context type.
 */
export type GaiaXContextType =
	| typeof GaiaXContexts.Namespace
	| [
			...IJsonLdContextDefinitionElement[],
			typeof GaiaXContexts.Namespace,
			IJsonLdContextDefinitionElement
	  ]
	| [
			IJsonLdContextDefinitionElement,
			typeof GaiaXContexts.Namespace,
			...IJsonLdContextDefinitionElement[]
	  ];
