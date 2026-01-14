// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { OdrlContexts } from "./odrlContexts.js";

/**
 * The ODRL JSON-LD context type.
 */
export type OdrlContextType =
	| typeof OdrlContexts.JsonLdContext
	| [typeof OdrlContexts.JsonLdContext]
	| [
			...IJsonLdContextDefinitionElement[],
			typeof OdrlContexts.JsonLdContext,
			IJsonLdContextDefinitionElement
	  ]
	| [
			IJsonLdContextDefinitionElement,
			typeof OdrlContexts.JsonLdContext,
			...IJsonLdContextDefinitionElement[]
	  ];
