// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IOdrlPolicy } from "@twin.org/standards-w3c-odrl";
import type { GaiaXTypes } from "./gaiaXTypes.js";
import type { IGaiaXDataResource } from "./IGaiaXDataResource.js";
import type { IGaiaXEndpoint } from "./IGaiaXEndpoint.js";
import type { IGaiaXEntity } from "./IGaiaXEntity.js";
import type { IGaiaXLegalPerson } from "./IGaiaXLegalPerson.js";

/**
 * A Service offering
 */
export interface IGaiaXServiceOffering extends IGaiaXEntity {
	/**
	 * Type
	 */
	type: typeof GaiaXTypes.ServiceOffering;

	/**
	 * Name of the Service Offering.
	 */
	name: string;

	/**
	 * Participant that provides the offering
	 */
	providedBy:
		| string
		| IGaiaXLegalPerson
		| (IJsonLdNodeObject & { id: string; type: typeof GaiaXTypes.LegalPerson });

	/**
	 * ODRL policy associated to the service offering
	 */
	servicePolicy: ObjectOrArray<IOdrlPolicy>;

	/**
	 * Resources aggregated
	 * It is supported different representations, inline,
	 * by reference both providing the URI or a partial JSON-LD Node object
	 */
	aggregationOfResources?:
		| string[]
		| IGaiaXDataResource[]
		| (IJsonLdNodeObject & { id: string; type: typeof GaiaXTypes.DataResource });

	/**
	 * The endpoint
	 */
	endpoint?: IGaiaXEndpoint;
}
