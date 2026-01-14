// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { EpcisContexts } from "./epcisContexts.js";

/**
 * Allowed shapes for an EPCIS 2.0 JSON-LD `@context`, anchored on the GS1
 * context root and optionally augmented with custom entries.
 */
export type EpcisContextType =
	| typeof EpcisContexts.Namespace
	| [typeof EpcisContexts.Namespace]
	| [
			...IJsonLdContextDefinitionElement[],
			typeof EpcisContexts.Namespace,
			IJsonLdContextDefinitionElement
	  ]
	| [
			IJsonLdContextDefinitionElement,
			typeof EpcisContexts.Namespace,
			...IJsonLdContextDefinitionElement[]
	  ];
