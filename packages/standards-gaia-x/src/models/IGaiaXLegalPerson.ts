// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { GaiaXTypes } from "./gaiaXTypes.js";
import type { IGaiaXAddress } from "./IGaiaXAddress.js";
import type { IGaiaXEntity } from "./IGaiaXEntity.js";
import type { IGaiaXRegistrationNumber } from "./IGaiaXRegistrationNumber.js";

/**
 * A Legal Person as defined by Gaia-X.
 * @see https://docs.gaia-x.eu/ontology/development/classes/LegalPerson/.
 */
export interface IGaiaXLegalPerson extends IGaiaXEntity {
	/**
	 * JSON-LD type.
	 */
	type: typeof GaiaXTypes.LegalPerson;

	/**
	 * The legal registration number.
	 * @see https://docs.gaia-x.eu/ontology/development/slots/registrationNumber/
	 */
	registrationNumber: IGaiaXRegistrationNumber;

	/**
	 * The legal name.
	 */
	legalName: string;

	/**
	 * Legal Address
	 * @see https://docs.gaia-x.eu/ontology/development/slots/legalAddress/
	 */
	legalAddress: IGaiaXAddress;

	/**
	 * Headquarters address.
	 * @see https://docs.gaia-x.eu/ontology/development/slots/headquartersAddress/
	 */
	headquartersAddress?: IGaiaXAddress;

	/**
	 * Parent organization.
	 * @see https://docs.gaia-x.eu/ontology/development/slots/parentOrganizationOf/
	 */
	parentOrganizationOf?: (IJsonLdNodeObject & {
		id: string;
		type: typeof GaiaXTypes.LegalPerson;
	})[];

	/**
	 * Sub organization of.
	 * @see https://docs.gaia-x.eu/ontology/development/slots/parentSubOrganizationOf
	 */
	subOrganizationOf?: (IJsonLdNodeObject & {
		id: string;
		type: typeof GaiaXTypes.LegalPerson;
	})[];
}
