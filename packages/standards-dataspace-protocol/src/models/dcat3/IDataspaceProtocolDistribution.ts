// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { DataspaceProtocolContextType } from "../dataspaceProtocolContextType.js";
import type { IDataspaceProtocolDistributionBase } from "./IDataspaceProtocolDistributionBase.js";

/**
 * Distribution interface compliant with Eclipse Data Space Protocol.
 *
 * This interface extends IDistribution  and enforces DS Protocol-specific requirements
 * by overriding properties with more specific types and constraints.
 *
 * **Requirements per DS Protocol:**
 * - `@id` MUST be present for dataset identification (REQUIRED)
 * - `odrl:hasPolicy` MIGHT be present as an array of ODRL Offers (OPTIONAL)
 * - Array MUST contain at least one IOdrlOffer
 * - Each Offer MUST have `@type`: "Offer"
 * - `format` is REQUIRED.
 *
 * **Type System Design:**
 * - W3C DCAT spec defines `odrl:hasPolicy` as optional singular `IOdrlPolicy`
 * - DS Protocol requires it as a REQUIRED array of `IOdrlOffer`
 * - Interface extension allows TypeScript to override inherited property types
 * - Standards packages (@twin.org/standards-w3c-*) follow W3C specs exactly
 * - DS Protocol-specific constraints are defined here
 *
 * **Future Compatibility:**
 * - Currently only one Offer per dataset is supported
 * - Array structure allows future support for multiple offers
 *
 * @see https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#lower-level-types
 * @see https://www.w3.org/TR/vocab-dcat-3/ - W3C DCAT v3 spec
 * @see IOdrlOffer from @twin.org/standards-w3c-odrl
 * @see IResource.odrl:hasPolicy from @twin.org/standards-w3c-dcat
 */
export interface IDataspaceProtocolDistribution extends IDataspaceProtocolDistributionBase {
	/**
	 * LD Context. Required per Eclipse Data Space Protocol.
	 */
	"@context": DataspaceProtocolContextType;

	/**
	 * Unique identifier for the distribution.
	 * REQUIRED on standalone Distribution objects per Eclipse Data Space Protocol.
	 */
	"@id": string;
}
