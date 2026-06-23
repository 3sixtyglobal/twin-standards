// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Supported EPCIS 2.0 `bizStep` values.
 *
 * These values come from the GS1 EPCIS / CBV (Core Business Vocabulary).
 * Use the union type `EpcisBizStepTypes` when you want to restrict a field to known CBV values.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisBizStepTypes = {
	/**
	 * Activity where an object changes possession and/or ownership.
	 */
	Accepting: "accepting",

	/**
	 * Activity where an object arrives at a location.
	 */
	Arriving: "arriving",

	/**
	 * Combining one or more objects to create a new finished product while originals
	 * remain recognisable.
	 */
	Assembling: "assembling",

	/**
	 * Picking up and collecting an object for future disposal, recycling, or re-use.
	 */
	Collecting: "collecting",

	/**
	 * Associating a new instance- or class-level identifier with a specific object
	 * for the first time.
	 */
	Commissioning: "commissioning",

	/**
	 * Overall process covering staging_outbound, loading, departing, and accepting
	 * when granular steps are unknown.
	 */
	Consigning: "consigning",

	/**
	 * Step where an instance or increased quantity of a class-level identifier is
	 * produced and may repeat.
	 */
	CreatingClassInstance: "creating_class_instance",

	/**
	 * Counting objects within a location for business needs other than accounting.
	 */
	CycleCounting: "cycle_counting",

	/**
	 * Disassociating an instance-level identifier from an object; it may be
	 * re-commissioned later with a new identifier.
	 */
	Decommissioning: "decommissioning",

	/**
	 * Activity where an object leaves a location on its way to a destination.
	 */
	Departing: "departing",

	/**
	 * Process of terminating an object so it should not be subject of subsequent events.
	 */
	Destroying: "destroying",

	/**
	 * Breaking down an object into separate, uniquely identified component parts.
	 */
	Disassembling: "disassembling",

	/**
	 * Making a product available in full or part to a consumer.
	 */
	Dispensing: "dispensing",

	/**
	 * Writing an instance-level identifier to a barcode or RFID tag before
	 * association with an object.
	 */
	Encoding: "encoding",

	/**
	 * Activity at a facility entrance/exit where customers leave with purchases or
	 * enter with returns.
	 */
	EnteringExiting: "entering_exiting",

	/**
	 * Segregating an object for further review.
	 */
	Holding: "holding",

	/**
	 * Reviewing objects to address potential defects while keeping them viable in the
	 * supply chain.
	 */
	Inspecting: "inspecting",

	/**
	 * Putting an object into a composite object that already exists.
	 */
	Installing: "installing",

	/**
	 * Terminating an RFID tag previously associated with an object while the object
	 * continues to exist.
	 */
	Killing: "killing",

	/**
	 * Loading an object into a shipping conveyance.
	 */
	Loading: "loading",

	/**
	 * A business step not identified by the CBV list.
	 */
	Other: "other",

	/**
	 * Putting objects into a larger container for shipping, typically where
	 * aggregation occurs.
	 */
	Packing: "packing",

	/**
	 * Selecting objects to fill an order.
	 */
	Picking: "picking",

	/**
	 * Indicating an object is being received at a location and added to inventory.
	 */
	Receiving: "receiving",

	/**
	 * Taking an object out of a composite object; opposite of installing.
	 */
	Removing: "removing",

	/**
	 * Changing an object's packaging configuration.
	 */
	Repackaging: "repackaging",

	/**
	 * Repairing a malfunctioning product without replacing it.
	 */
	Repairing: "repairing",

	/**
	 * Substituting or exchanging an object for another object.
	 */
	Replacing: "replacing",

	/**
	 * Providing a set of not-yet-commissioned instance identifiers for use by another party.
	 */
	Reserving: "reserving",

	/**
	 * Point-of-sale activity transferring ownership to a customer for value.
	 */
	RetailSelling: "retail_selling",

	/**
	 * Overall process covering staging_outbound, loading, and departing when finer
	 * detail is unavailable.
	 */
	Shipping: "shipping",

	/**
	 * Moving an object from a facility to an area where it awaits transport pick-up.
	 */
	StagingOutbound: "staging_outbound",

	/**
	 * Counting objects within a location following established rules for accounting purposes.
	 */
	StockTaking: "stock_taking",

	/**
	 * Activity within a location to make an object available to customers or order
	 * fulfilment.
	 */
	Stocking: "stocking",

	/**
	 * Moving an object into and out of storage within a location.
	 */
	Storing: "storing",

	/**
	 * Moving an object from one location to another using a vehicle.
	 */
	Transporting: "transporting",

	/**
	 * Unloading an object from a shipping conveyance.
	 */
	Unloading: "unloading",

	/**
	 * Removing products from a larger container, usually after receiving or
	 * accepting.
	 */
	Unpacking: "unpacking",

	/**
	 * Declaring that objects in a prior outbound process were not shipped as previously indicated.
	 */
	VoidShipping: "void_shipping",

	/**
	 * Returning sensor data about the physical properties or condition of an object or location.
	 */
	SensorReporting: "sensor_reporting",

	/**
	 * Testing activity where portions of an object are examined, rendering the
	 * sampled object no longer viable.
	 */
	Sampling: "sampling"
} as const;

/**
 * Supported EPCIS 2.0 `bizStep` values.
 *
 * These values come from the GS1 EPCIS / CBV (Core Business Vocabulary).
 * Use the union type `EpcisBizStepTypes` when you want to restrict a field to known CBV values.
 */
export type EpcisBizStepTypes = (typeof EpcisBizStepTypes)[keyof typeof EpcisBizStepTypes];
