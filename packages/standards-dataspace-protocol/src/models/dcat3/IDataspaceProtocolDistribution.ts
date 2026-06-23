// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { IDataspaceProtocolDistributionBase } from "./IDataspaceProtocolDistributionBase.js";

/**
 * Distribution compliant with Eclipse Data Space Protocol, requiring an id and format.
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 */
export interface IDataspaceProtocolDistribution extends IDataspaceProtocolDistributionBase {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * Unique identifier for the distribution; required on standalone distribution objects.
	 */
	"@id": string;
}
