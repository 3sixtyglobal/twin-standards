// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDataspaceProtocolDistribution } from "./IDataspaceProtocolDistribution.js";

/**
 * Distribution interface compliant with Eclipse Data Space Protocol, excluding the `@context` property.
 */
export type IDataspaceProtocolDistributionNoContext = Omit<
	IDataspaceProtocolDistribution,
	"@context"
>;
