// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IDcatDistributionBase } from "@3sixty/standards-w3c-dcat";
import type { IDataspaceProtocolDataServiceBase } from "./IDataspaceProtocolDataServiceBase.js";
import type { DataspaceProtocolCatalogTypes } from "../catalog/dataspaceProtocolCatalogTypes.js";
import type { IDataspaceProtocolOfferBase } from "../odrl/IDataspaceProtocolOfferBase.js";

/**
 * Base distribution interface compliant with Eclipse Data Space Protocol, requiring a format and accessService.
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 */
export interface IDataspaceProtocolDistributionBase extends Omit<
	IDcatDistributionBase,
	"odrl:hasPolicy" | "@type" | "dcterms:format"
> {
	/**
	 * The type identifier for the Distribution.
	 * REQUIRED per Eclipse Data Space Protocol.
	 */
	"@type": typeof DataspaceProtocolCatalogTypes.Distribution;

	/**
	 * Unique identifier for the distribution; optional for embedded distributions.
	 */
	"@id"?: string;

	/**
	 * Optional array of ODRL offers; when present, must contain at least one entry.
	 * @json-schema minItems:1
	 */
	hasPolicy?: IDataspaceProtocolOfferBase[];

	/**
	 * Access service URI or inline access service definition.
	 */
	accessService: string | IDataspaceProtocolDataServiceBase;

	/**
	 * Distribution format identifier.
	 */
	format: string;
}
