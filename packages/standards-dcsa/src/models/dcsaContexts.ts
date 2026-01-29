// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The LD Contexts concerning DCSA.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DcsaContexts = {
	/**
	 * The canonical RDF namespace URI.
	 */
	Namespace: "https://dcsa.org/"
} as const;

/**
 * The LD Contexts concerning DCSA.
 */
export type DcsaContexts = (typeof DcsaContexts)[keyof typeof DcsaContexts];
