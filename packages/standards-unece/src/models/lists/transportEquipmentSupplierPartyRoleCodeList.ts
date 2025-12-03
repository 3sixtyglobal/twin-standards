// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the transport equipment supplier party role.
 * @see https://vocabulary.uncefact.org/TransportEquipmentSupplierPartyRoleCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const TransportEquipmentSupplierPartyRoleCodeList = {
	/**
	 * Shipper supplied: 1.
	 */
	ShipperSupplied: "unece:TransportEquipmentSupplierPartyRoleCodeList#1",

	/**
	 * Carrier supplied: 2.
	 */
	CarrierSupplied: "unece:TransportEquipmentSupplierPartyRoleCodeList#2",

	/**
	 * Consolidator supplied: 3.
	 */
	ConsolidatorSupplied: "unece:TransportEquipmentSupplierPartyRoleCodeList#3",

	/**
	 * Deconsolidator supplied: 4.
	 */
	DeconsolidatorSupplied: "unece:TransportEquipmentSupplierPartyRoleCodeList#4",

	/**
	 * Third party supplied: 5.
	 */
	ThirdPartySupplied: "unece:TransportEquipmentSupplierPartyRoleCodeList#5",

	/**
	 * Forwarder supplied from a leasing company: 6.
	 */
	ForwarderSuppliedFromALeasingCompany: "unece:TransportEquipmentSupplierPartyRoleCodeList#6",

	/**
	 * Forwarder supplied from the railways' pool: 7.
	 */
	ForwarderSuppliedFromTheRailwaysPool: "unece:TransportEquipmentSupplierPartyRoleCodeList#7"
} as const;

/**
 * A character string used to represent the transport equipment supplier party role.
 * @see https://vocabulary.uncefact.org/TransportEquipmentSupplierPartyRoleCodeList
 */
export type TransportEquipmentSupplierPartyRoleCodeList = (typeof TransportEquipmentSupplierPartyRoleCodeList)[keyof typeof TransportEquipmentSupplierPartyRoleCodeList];
