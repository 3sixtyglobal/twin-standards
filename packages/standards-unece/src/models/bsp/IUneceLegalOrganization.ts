// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceLegalRegistration } from "./IUneceLegalRegistration.js";
import type { IUneceTradeAddress } from "./IUneceTradeAddress.js";
import type { UneceLegalOrganizationTypeCodeList } from "../typeCodes/uneceLegalOrganizationTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An organization set up on a legal basis as a business, government body, department, charity, or financial institution.
 * @see https://vocabulary.uncefact.org/LegalOrganization
 */
export interface IUneceLegalOrganization extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LegalOrganization;

	/**
	 * A legal registration authorized for this legally set up organization.
	 * @see https://vocabulary.uncefact.org/authorizedRegistration
	 */
	authorizedRegistration?: IUneceLegalRegistration;

	/**
	 * A code specifying the type of business of this legally set up organization.
	 * @see https://vocabulary.uncefact.org/businessTypeCode
	 */
	businessTypeCode?: string;

	/**
	 * A unique identifier of the district area regarded as a geographic or administrative unit within which this legally set
	 * up organization operates.
	 * @see https://vocabulary.uncefact.org/districtId
	 */
	districtId?: string;

	/**
	 * The date, time, date time, or other date time value when this legally set up organization was established.
	 * @see https://vocabulary.uncefact.org/establishedDateTime
	 */
	establishedDateTime?: string;

	/**
	 * A unique identifier for this legally set up organization.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The code specifying the legal classification of this organization, such as Incorporated (Inc), Limited Liability
	 * Corporation (LLC) or non-profit.
	 * @see https://vocabulary.uncefact.org/legalClassificationCode
	 */
	legalClassificationCode?: string;

	/**
	 * A name, expressed as text, of this legally set up organization.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * A postal address for this legally set up organization.
	 * @see https://vocabulary.uncefact.org/postalAddress
	 */
	postalAddress?: IUneceTradeAddress[];

	/**
	 * The trading business name, expressed as text, of this legally set up organization.
	 * @see https://vocabulary.uncefact.org/tradingBusinessName
	 */
	tradingBusinessName?: string;

	/**
	 * A code specifying a type of legally set up organization.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceLegalOrganizationTypeCodeList | string;
}
