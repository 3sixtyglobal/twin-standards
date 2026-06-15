// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { IDataspaceProtocolDataServiceBase } from "./IDataspaceProtocolDataServiceBase.js";

/**
 * Data service compliant with Eclipse Data Space Protocol, requiring an id and endpointURL.
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 */
export interface IDataspaceProtocolDataService extends IDataspaceProtocolDataServiceBase {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;
}
