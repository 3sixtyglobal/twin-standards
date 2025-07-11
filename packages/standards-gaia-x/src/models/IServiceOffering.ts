// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { GaiaXTypes } from "./gaiaXTypes";
import type { IDataResource } from "./IDataResource";
import type { IEndpoint } from "./IEndpoint";
import type { IGaiaXEntity } from "./IGaiaXEntity";
import type { ILegalPerson } from "./ILegalPerson";

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
	servicePolicy: ObjectOrArray<IJsonLdNodeObject>;

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
	endpoint: IEndpoint;
}
