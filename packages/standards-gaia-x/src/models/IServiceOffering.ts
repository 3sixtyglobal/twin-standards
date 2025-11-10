// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IOdrlPolicy } from "@twin.org/standards-w3c-odrl";
import type { GaiaXTypes } from "./gaiaXTypes.js";
import type { IDataResource } from "./IDataResource.js";
import type { IEndpoint } from "./IEndpoint.js";
import type { IGaiaXEntity } from "./IGaiaXEntity.js";
import type { ILegalPerson } from "./ILegalPerson.js";

/**
 * A Service offering
 */
export interface IServiceOffering extends IGaiaXEntity {
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
		| ILegalPerson
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
		| IDataResource[]
		| (IJsonLdNodeObject & { id: string; type: typeof GaiaXTypes.DataResource });

	/**
	 * The endpoint
	 */
	endpoint?: IEndpoint;
}
