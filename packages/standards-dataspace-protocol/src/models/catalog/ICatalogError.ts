// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { CatalogTypes } from "./catalogTypes.js";

/**
 * Interface for Dataspace Protocol Catalog Error.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#error-catalog-error
 */
export interface ICatalogError {
	/**
	 * The JSON-LD context.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * The type of the message.
	 */
	"@type": typeof CatalogTypes.CatalogError;

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
