// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDataspaceProtocolDataset } from "./IDataspaceProtocolDataset.js";

/**
 * Dataset interface compliant with Eclipse Data Space Protocol, excluding the `@context` property.
 */
export type IDataspaceProtocolDatasetNoContext = Omit<IDataspaceProtocolDataset, "@context">;
