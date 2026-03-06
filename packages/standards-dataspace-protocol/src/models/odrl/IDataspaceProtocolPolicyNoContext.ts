// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDataspaceProtocolPolicy } from "./IDataspaceProtocolPolicy.js";

/**
 * Policy interface compliant with Eclipse Data Space Protocol, excluding the `@context` property.
 */
export type IDataspaceProtocolPolicyNoContext = Omit<IDataspaceProtocolPolicy, "@context">;
