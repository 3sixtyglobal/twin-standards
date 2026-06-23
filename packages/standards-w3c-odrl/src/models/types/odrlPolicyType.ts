// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Policies.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const OdrlPolicyType = {
	/**
	 * Policy type.
	 */
	Policy: "Policy",

	/**
	 * Set type.
	 */
	Set: "Set",

	/**
	 * Offer type.
	 */
	Offer: "Offer",

	/**
	 * Agreement type.
	 */
	Agreement: "Agreement"
} as const;

/**
 * The types for ODRL Policies.
 */
export type OdrlPolicyType = (typeof OdrlPolicyType)[keyof typeof OdrlPolicyType];
