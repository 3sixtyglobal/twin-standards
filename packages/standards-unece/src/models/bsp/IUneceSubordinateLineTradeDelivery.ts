// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceSupplyChainPackaging } from "./IUneceSupplyChainPackaging.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Supply chain shipping arrangements and movement of products and or services including despatch and delivery.
 * @see https://vocabulary.uncefact.org/SubordinateLineTradeDelivery
 */
export interface IUneceSubordinateLineTradeDelivery extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SubordinateLineTradeDelivery;

	/**
	 * An actual delivery event for this subordinate line trade delivery.
	 * @see https://vocabulary.uncefact.org/actualDeliveryEvent
	 */
	actualDeliveryEvent?: IUneceSupplyChainEvent[];

	/**
	 * A billed quantity of this subordinate line trade delivery.
	 * @see https://vocabulary.uncefact.org/billedQuantity
	 */
	billedQuantity?: IUneceQuantityType[];

	/**
	 * Packaging included in this subordinate line trade delivery.
	 * @see https://vocabulary.uncefact.org/includedPackaging
	 */
	includedPackaging?: IUneceSupplyChainPackaging[];

	/**
	 * The number of packages in this subordinate line trade delivery.
	 * @see https://vocabulary.uncefact.org/packageQuantity
	 */
	packageQuantity?: IUneceQuantityType[];

	/**
	 * The number of units per package in this subordinate line trade delivery.
	 * @see https://vocabulary.uncefact.org/perPackageUnitQuantity
	 */
	perPackageUnitQuantity?: IUneceQuantityType[];

	/**
	 * The number of product units in this subordinate line trade delivery.
	 * @see https://vocabulary.uncefact.org/productUnitQuantity
	 */
	productUnitQuantity?: IUneceQuantityType[];
}
