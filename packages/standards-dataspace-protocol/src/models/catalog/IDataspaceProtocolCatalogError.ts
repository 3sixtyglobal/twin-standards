// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { DataspaceProtocolCatalogTypes } from "./dataspaceProtocolCatalogTypes.js";

/**
 * Interface for the Dataspace Protocol catalog error response.
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#error-catalog-error
 */
export interface IDataspaceProtocolCatalogError {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof DataspaceProtocolCatalogTypes.CatalogError;

	/**
	 * The error code.
	 */
	code: string;

	/**
	 * The error reason(s).
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	reason?: any[];
}
