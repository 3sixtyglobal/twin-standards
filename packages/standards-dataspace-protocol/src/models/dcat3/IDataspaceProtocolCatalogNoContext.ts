// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDataspaceProtocolCatalog } from "./IDataspaceProtocolCatalog.js";

/**
 * Catalog interface compliant with Eclipse Data Space Protocol, excluding the `@context` property.
 */
export type IDataspaceProtocolCatalogNoContext = Omit<IDataspaceProtocolCatalog, "@context">;
