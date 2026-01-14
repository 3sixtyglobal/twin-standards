// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The Contexts concerning Gaia-X.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const GaiaXContexts = {
	/**
	 * The Gaia-X Namespace
	 */
	Namespace: "https://schema.twindev.org/gaia-x-loire/"
} as const;

/**
 * The Contexts concerning Gaia-X.
 */
export type GaiaXContexts = (typeof GaiaXContexts)[keyof typeof GaiaXContexts];
