// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAvailablePeriod } from "./IUneceAvailablePeriod.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An actual or virtual place where buyers and sellers interact, directly or through intermediaries, to trade goods or
 * services.
 * @see https://vocabulary.uncefact.org/Marketplace
 */
export interface IUneceMarketplace {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Marketplace;

	/**
	 * The identifier for this specified marketplace.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The name, expressed as text, for this specified marketplace.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * An available ordering period for this specified marketplace.
	 * @see https://vocabulary.uncefact.org/orderingAvailablePeriod
	 */
	orderingAvailablePeriod?: IUneceAvailablePeriod[];

	/**
	 * The code specifying a sales method, such as an auction clock or mediation, for this specified marketplace.
	 * @see https://vocabulary.uncefact.org/salesMethodCode
	 */
	salesMethodCode?: string;

	/**
	 * The indication of whether or not this specified marketplace is virtual, such as a web-based marketplace.
	 * @see https://vocabulary.uncefact.org/virtualIndicator
	 */
	virtualIndicator?: boolean;

	/**
	 * A website Uniform Resource Identifier (URI) for this specified marketplace.
	 * @see https://vocabulary.uncefact.org/websiteURIId
	 */
	websiteURIId?: string | IJsonLdValueObject;
}
