// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * Supported EPCIS 2.0 `disposition` values from the GS1 Core Business
 * Vocabulary (CBV).
 *
 * Use the union type `EpcisDispositionTypes` to restrict a field to known CBV
 * values.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisDispositionTypes = {
	/**
	 * A commissioned object has just been introduced into the supply chain.
	 */
	Active: "active",

	/**
	 * Object has been loaded onto a container, the doors closed, and the shipment
	 * sealed.
	 */
	ContainerClosed: "container_closed",

	/**
	 * Object is impaired in usefulness or value due to a defect.
	 */
	Damaged: "damaged",

	/**
	 * Object has been fully rendered non-usable.
	 */
	Destroyed: "destroyed",

	/**
	 * A full quantity of product is distributed to a consumer.
	 */
	Dispensed: "dispensed",

	/**
	 * Object has been returned for disposal.
	 */
	Disposed: "disposed",

	/**
	 * An instance-level identifier has been written to a barcode or RFID tag, but
	 * not yet commissioned.
	 */
	Encoded: "encoded",

	/**
	 * Object's expiration date is in the past.
	 */
	Expired: "expired",

	/**
	 * Optional disposition for objects proceeding through points in the supply
	 * chain.
	 */
	InProgress: "in_progress",

	/**
	 * Object is being shipped between two trading partners.
	 */
	InTransit: "in_transit",

	/**
	 * Decommissioned object that may be reintroduced to the supply chain.
	 */
	Inactive: "inactive",

	/**
	 * No pedigree match was found during validation, so the product is quarantined
	 * for investigation.
	 */
	NoPedigreeMatch: "no_pedigree_match",

	/**
	 * Object cannot be sold to a customer.
	 */
	NonSellableOther: "non_sellable_other",

	/**
	 * A portion of a product is distributed to a customer while additional product
	 * is retained.
	 */
	PartiallyDispensed: "partially_dispensed",

	/**
	 * Object is non-sellable because of public safety reasons.
	 */
	Recalled: "recalled",

	/**
	 * Instance-level identifier has been allocated for a third party.
	 */
	Reserved: "reserved",

	/**
	 * Product has been purchased by a customer.
	 */
	RetailSold: "retail_sold",

	/**
	 * Object has been sent or brought back for various reasons; it may or may not
	 * be sellable.
	 */
	Returned: "returned",

	/**
	 * Product can be sold as is and a customer can access it for purchase.
	 */
	SellableAccessible: "sellable_accessible",

	/**
	 * Product can be sold as is, but a customer cannot access it for purchase.
	 */
	SellableNotAccessible: "sellable_not_accessible",

	/**
	 * An object has been taken without permission or right.
	 */
	Stolen: "stolen",

	/**
	 * An object's condition is not known.
	 */
	Unknown: "unknown",

	/**
	 * Object has been returned to service or the supply chain after repair.
	 */
	Available: "available",

	/**
	 * Explicitly indicates verified integrity of an aggregation when children are
	 * unpacked or verified.
	 */
	CompletenessVerified: "completeness_verified",

	/**
	 * Indicates inferred integrity of an aggregation based on upstream aggregation
	 * information.
	 */
	CompletenessInferred: "completeness_inferred",

	/**
	 * Outcome of a successful inspection in an inspecting or repairing step.
	 */
	Conformant: "conformant",

	/**
	 * Container doors have been opened or a shipment seal has been broken.
	 */
	ContainerOpen: "container_open",

	/**
	 * Instance-level identifiers do not match what was expected.
	 */
	MismatchInstance: "mismatch_instance",

	/**
	 * Class-level identifiers do not match what was expected.
	 */
	MismatchClass: "mismatch_class",

	/**
	 * Quantities do not match what was expected.
	 */
	MismatchQuantity: "mismatch_quantity",

	/**
	 * Components or assets must be replaced to ensure functional requirements.
	 */
	NeedsReplacement: "needs_replacement",

	/**
	 * Outcome of an unsuccessful inspection in an inspecting or repairing step.
	 */
	NonConformant: "non_conformant",

	/**
	 * Object has been removed from service or the supply chain, for example pending
	 * repair.
	 */
	Unavailable: "unavailable"
} as const;

/**
 * Supported EPCIS 2.0 `disposition` values from the GS1 Core Business
 * Vocabulary (CBV).
 *
 * Use the union type `EpcisDispositionTypes` to restrict a field to known CBV
 * values.
 */
export type EpcisDispositionTypes =
	(typeof EpcisDispositionTypes)[keyof typeof EpcisDispositionTypes];
