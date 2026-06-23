// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { IDataspaceProtocolDatasetBase } from "./IDataspaceProtocolDatasetBase.js";

/**
 * Dataset compliant with Eclipse Data Space Protocol, requiring an id, hasPolicy, and distribution.
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 */
export interface IDataspaceProtocolDataset extends IDataspaceProtocolDatasetBase {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;
}
