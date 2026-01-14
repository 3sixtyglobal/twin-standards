// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Canonical EPCIS JSON-LD context IRIs as defined by GS1.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisContexts = {
	/**
	 * The namespace for the objects.
	 */
	Namespace: "https://ref.gs1.org/epcis/",

	/**
	 * The JSON-LD context.
	 */
	Context: "https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld"
} as const;

/**
 * Canonical EPCIS JSON-LD context IRIs as defined by GS1.
 */
export type EpcisContexts = (typeof EpcisContexts)[keyof typeof EpcisContexts];
