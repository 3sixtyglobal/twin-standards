// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IQuantityType } from "./IQuantityType.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ISupplyChainPackaging } from "./ISupplyChainPackaging.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Supply chain shipping arrangements and movement of products and or services including despatch and delivery.
 * @see https://vocabulary.uncefact.org/SubordinateLineTradeDelivery
 */
export interface ISubordinateLineTradeDelivery extends IJsonLdNodeObject {
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
	actualDeliveryEvent?: ISupplyChainEvent[];

	/**
	 * A billed quantity of this subordinate line trade delivery.
	 * @see https://vocabulary.uncefact.org/billedQuantity
	 */
	billedQuantity?: IQuantityType[];

	/**
	 * Packaging included in this subordinate line trade delivery.
	 * @see https://vocabulary.uncefact.org/includedPackaging
	 */
	includedPackaging?: ISupplyChainPackaging[];

	/**
	 * The number of packages in this subordinate line trade delivery.
	 * @see https://vocabulary.uncefact.org/packageQuantity
	 */
	packageQuantity?: IQuantityType[];

	/**
	 * The number of units per package in this subordinate line trade delivery.
	 * @see https://vocabulary.uncefact.org/perPackageUnitQuantity
	 */
	perPackageUnitQuantity?: IQuantityType[];

	/**
	 * The number of product units in this subordinate line trade delivery.
	 * @see https://vocabulary.uncefact.org/productUnitQuantity
	 */
	productUnitQuantity?: IQuantityType[];
}
