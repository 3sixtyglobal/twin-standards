// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAmountType } from "./IUneceAmountType.js";
import type { IUneceCustomsValuation } from "./IUneceCustomsValuation.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceLogisticsLocation } from "./IUneceLogisticsLocation.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceWeightUnitMeasureType } from "./IUneceWeightUnitMeasureType.js";
import type { UneceDocumentCodeList } from "../lists/uneceDocumentCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of data for a piece of written, printed or electronic matter that is exchanged between two parties as a
 * formal declaration.
 * @see https://vocabulary.uncefact.org/ExchangedDeclaration
 */
export interface IUneceExchangedDeclaration extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ExchangedDeclaration;

	/**
	 * An additional statement note for this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/additionalStatementNote
	 */
	additionalStatementNote?: IUneceNote;

	/**
	 * Customs valuation information applicable to this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/applicableCustomsValuation
	 */
	applicableCustomsValuation?: IUneceCustomsValuation;

	/**
	 * A referenced document associated with this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IUneceDocument;

	/**
	 * The rate of currency exchange in this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/currencyExchangeRate
	 */
	currencyExchangeRate?: string;

	/**
	 * The monetary value specified for customs purposes in this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/customsValueSpecifiedAmount
	 */
	customsValueSpecifiedAmount?: IUneceAmountType;

	/**
	 * The trade party acting as an agent for the declarant for this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/declarantAgentParty
	 */
	declarantAgentParty?: IUneceTradeParty;

	/**
	 * The trade party acting as the declarant for this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/declarantParty
	 */
	declarantParty?: IUneceTradeParty;

	/**
	 * The code specifying the type of this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/documentTypeCode
	 */
	documentTypeCode?: UneceDocumentCodeList;

	/**
	 * The gross weight measure specified in this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/grossWeightSpecifiedMeasure
	 */
	grossWeightSpecifiedMeasure?: IUneceWeightUnitMeasureType;

	/**
	 * An identifier for this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time or other date time value for the issuance of this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 */
	issueDateTime?: string;

	/**
	 * The date, time, date time or other date time value when the items which are a subject of this exchanged declaration
	 * enter a jurisdiction, such as the actual date of arrival of a means of transport.
	 * @see https://vocabulary.uncefact.org/jurisdictionEntryDateTime
	 */
	jurisdictionEntryDateTime?: string;

	/**
	 * A previous document referenced for this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/previousDocument
	 */
	previousDocument?: IUneceDocument;

	/**
	 * A principal trade party associated with this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/principalAssociatedParty
	 */
	principalAssociatedParty?: IUneceTradeParty;

	/**
	 * A code specifying a procedure for this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/procedureCode
	 */
	procedureCode?: string;

	/**
	 * The code specifying a specific circumstance in this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/specificCircumstanceCode
	 */
	specificCircumstanceCode?: string;

	/**
	 * The monetary value specified for statistical purposes in this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/statisticalValueSpecifiedAmount
	 */
	statisticalValueSpecifiedAmount?: IUneceAmountType;

	/**
	 * The submission location for this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/submissionLocation
	 */
	submissionLocation?: IUneceLogisticsLocation;

	/**
	 * The total invoice monetary value specified in this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/totalInvoiceSpecifiedAmount
	 */
	totalInvoiceSpecifiedAmount?: IUneceAmountType;

	/**
	 * The total package quantity specified in this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/totalPackageSpecifiedQuantity
	 */
	totalPackageSpecifiedQuantity?: IUneceQuantityType;

	/**
	 * The identifier for the version of this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/versionId
	 */
	versionId?: string;
}
