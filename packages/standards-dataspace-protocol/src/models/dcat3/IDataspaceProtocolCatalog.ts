// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { IDataspaceProtocolCatalogBase } from "./IDataspaceProtocolCatalogBase.js";

/**
 * Catalog compliant with Eclipse Data Space Protocol, requiring a context, id, and participantId.
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 */
export interface IDataspaceProtocolCatalog extends IDataspaceProtocolCatalogBase {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;
}
