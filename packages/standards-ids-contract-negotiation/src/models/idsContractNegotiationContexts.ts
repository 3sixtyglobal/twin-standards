// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The contexts for IDS Contract Negotiation Protocol.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const IdsContractNegotiationContexts = {
	/**
	 * The context root for IDS Contract Negotiation Protocol.
	 */
	ContextRoot: "https://w3id.org/dspace/2024/1/context.json",

	/**
	 * The context redirect for IDS Contract Negotiation Protocol.
	 */
	ContextRedirect: "https://w3id.org/dspace/2025/1/context.jsonld"
} as const;

/**
 * The contexts for IDS Contract Negotiation Protocol.
 */
export type IdsContractNegotiationContexts =
	(typeof IdsContractNegotiationContexts)[keyof typeof IdsContractNegotiationContexts];
