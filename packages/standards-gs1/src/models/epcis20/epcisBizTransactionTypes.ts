// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */

/**
 * Supported EPCIS 2.0 `bizTransaction-type` values.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const EpcisBizTransactionTypes = {
	/**
	 * A document issued by a carrier to a shipper, listing and acknowledging receipt
	 * of goods for transport and specifying terms of delivery.
	 */
	Bol: "bol",

	/**
	 * A document confirming certain characteristics of an object, person, or
	 * organisation, typically issued by a third party.
	 */
	Cert: "cert",

	/**
	 * A document/message by which the seller or consignor informs the consignee
	 * about the despatch of goods (Advanced Shipment Notice).
	 */
	Desadv: "desadv",

	/**
	 * A document/message claiming payment for goods or services supplied under agreed
	 * conditions.
	 */
	Inv: "inv",

	/**
	 * A record that traces the ownership or custody and transactions of a product as
	 * it moves among trading partners.
	 */
	Pedigree: "pedigree",

	/**
	 * A document/message that specifies details for goods and services ordered under
	 * agreed conditions.
	 */
	Po: "po",

	/**
	 * A document that provides confirmation from an external supplier to the request
	 * of a purchaser to deliver a specified quantity/service.
	 */
	Poc: "poc",

	/**
	 * An organisation-internal document or message issued by a producer that
	 * initiates a manufacturing process of goods.
	 */
	Prodorder: "prodorder",

	/**
	 * A document/message that lets the receiver inform the shipper of actual goods
	 * received compared to what was advised.
	 */
	Recadv: "recadv",

	/**
	 * A document issued by the seller that authorises a buyer to return merchandise
	 * for credit determination.
	 */
	Rma: "rma",

	/**
	 * A document that provides a formal specification of a sequence of instructions
	 * for verifying one or several criteria.
	 */
	Testprd: "testprd",

	/**
	 * A document that includes the outcome of the execution of a given test
	 * procedure.
	 */
	Testres: "testres",

	/**
	 * Event ID URI(s) of event(s) provided by an upstream supplier, such as packing
	 * and shipping events.
	 */
	Upevt: "upevt"
} as const;

/**
 * Supported EPCIS 2.0 `bizTransaction-type` values.
 */
export type EpcisBizTransactionTypes =
	(typeof EpcisBizTransactionTypes)[keyof typeof EpcisBizTransactionTypes];
