// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent the charge paying party role.
 * @see https://vocabulary.uncefact.org/ChargePayingPartyRoleCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ChargePayingPartyRoleCodeList = {
	/**
	 * Buyer's agent/representative: AB.
	 */
	BuyerSAgentRepresentative: "unece:ChargePayingPartyRoleCodeList#AB",

	/**
	 * Declarant's agent/representative: AE.
	 */
	DeclarantSAgentRepresentative: "unece:ChargePayingPartyRoleCodeList#AE",

	/**
	 * Transit principal: AF.
	 */
	TransitPrincipal: "unece:ChargePayingPartyRoleCodeList#AF",

	/**
	 * Transit principal's agent/representative: AH.
	 */
	TransitPrincipalSAgentRepresentative: "unece:ChargePayingPartyRoleCodeList#AH",

	/**
	 * Approved consignor: AQ.
	 */
	ApprovedConsignor: "unece:ChargePayingPartyRoleCodeList#AQ",

	/**
	 * Authorized exporter: AR.
	 */
	AuthorizedExporter: "unece:ChargePayingPartyRoleCodeList#AR",

	/**
	 * Authorized importer: AT.
	 */
	AuthorizedImporter: "unece:ChargePayingPartyRoleCodeList#AT",

	/**
	 * Authorized trader (transit): AU.
	 */
	AuthorizedTrader: "unece:ChargePayingPartyRoleCodeList#AU",

	/**
	 * Carrier: CA.
	 */
	Carrier: "unece:ChargePayingPartyRoleCodeList#CA",

	/**
	 * Carrier's agent: CG.
	 */
	CarrierSAgent: "unece:ChargePayingPartyRoleCodeList#CG",

	/**
	 * Consignee: CN.
	 */
	Consignee: "unece:ChargePayingPartyRoleCodeList#CN",

	/**
	 * Charges payer at destination: CPD.
	 */
	ChargesPayerAtDestination: "unece:ChargePayingPartyRoleCodeList#CPD",

	/**
	 * Consignee's agent: CX.
	 */
	ConsigneeSAgent: "unece:ChargePayingPartyRoleCodeList#CX",

	/**
	 * Consignor: CZ.
	 */
	Consignor: "unece:ChargePayingPartyRoleCodeList#CZ",

	/**
	 * Invoice processing party: DGB.
	 */
	InvoiceProcessingParty: "unece:ChargePayingPartyRoleCodeList#DGB",

	/**
	 * Exporter: EX.
	 */
	Exporter: "unece:ChargePayingPartyRoleCodeList#EX",

	/**
	 * Freight forwarder: FW.
	 */
	FreightForwarder: "unece:ChargePayingPartyRoleCodeList#FW",

	/**
	 * Consignor's representative: GS.
	 */
	ConsignorSRepresentative: "unece:ChargePayingPartyRoleCodeList#GS",

	/**
	 * Importer: IM.
	 */
	Importer: "unece:ChargePayingPartyRoleCodeList#IM",

	/**
	 * Invoicee: IV.
	 */
	Invoicee: "unece:ChargePayingPartyRoleCodeList#IV",

	/**
	 * Payee: PE.
	 */
	Payee: "unece:ChargePayingPartyRoleCodeList#PE"
} as const;

/**
 * A character string used to represent the charge paying party role.
 * @see https://vocabulary.uncefact.org/ChargePayingPartyRoleCodeList
 */
export type ChargePayingPartyRoleCodeList = (typeof ChargePayingPartyRoleCodeList)[keyof typeof ChargePayingPartyRoleCodeList];
