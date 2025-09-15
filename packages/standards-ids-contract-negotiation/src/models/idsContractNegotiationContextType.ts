// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { IdsContractNegotiationContexts } from "./idsContractNegotiationContexts";

/**
 * The IDS Contract Negotiation JSON-LD context type.
 */
export type IdsContractNegotiationContextType =
	| typeof IdsContractNegotiationContexts.ContextRoot
	| [
			...IJsonLdContextDefinitionElement[],
			typeof IdsContractNegotiationContexts.ContextRoot,
			IJsonLdContextDefinitionElement
	  ]
	| [
			IJsonLdContextDefinitionElement,
			typeof IdsContractNegotiationContexts.ContextRoot,
			...IJsonLdContextDefinitionElement[]
	  ];
