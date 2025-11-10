// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdContextDefinitionElement } from "@twin.org/data-json-ld";
import type { ContractNegotiationContexts } from "./contractNegotiationContexts.js";

/**
 * The Dataspace Protocol Contract Negotiation JSON-LD context type.
 */
export type ContractNegotiationContextType =
	| typeof ContractNegotiationContexts.ContextRoot
	| [
			...IJsonLdContextDefinitionElement[],
			typeof ContractNegotiationContexts.ContextRoot,
			IJsonLdContextDefinitionElement
	  ]
	| [
			IJsonLdContextDefinitionElement,
			typeof ContractNegotiationContexts.ContextRoot,
			...IJsonLdContextDefinitionElement[]
	  ];
