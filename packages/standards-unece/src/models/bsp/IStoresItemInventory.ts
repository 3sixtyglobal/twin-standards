// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A stores item, such as for onboard use during a journey.
 * @see https://vocabulary.uncefact.org/StoresItemInventory
 */
export interface IStoresItemInventory extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.StoresItemInventory;

	/**
	 * A textual description of this stores inventory item.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An onboard quantity for this stores inventory item.
	 * @see https://vocabulary.uncefact.org/onboardQuantity
	 */
	onboardQuantity?: IQuantityType[];

	/**
	 * A sequence number for this stores inventory item.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * A location specified for this stores inventory item.
	 * @see https://vocabulary.uncefact.org/specifiedLogisticsLocation
	 */
	specifiedLogisticsLocation?: ILogisticsLocation[];

	/**
	 * A code specifying the type of stores inventory item.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
