// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDataspaceProtocolSet } from "./IDataspaceProtocolSet.js";

/**
 * Set interface compliant with Eclipse Data Space Protocol, excluding the `@context` property.
 */
export type IDataspaceProtocolSetNoContext = Omit<IDataspaceProtocolSet, "@context">;
