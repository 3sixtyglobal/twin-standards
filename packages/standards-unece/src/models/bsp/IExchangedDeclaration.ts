// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAmountType } from "./IAmountType.js";
import type { ICustomsValuation } from "./ICustomsValuation.js";
import type { IDocument } from "./IDocument.js";
import type { ILogisticsLocation } from "./ILogisticsLocation.js";
import type { INote } from "./INote.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { DocumentCodeList } from "../lists/documentCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of data for a piece of written, printed or electronic matter that is exchanged between two parties as a
 * formal declaration.
 * @see https://vocabulary.uncefact.org/ExchangedDeclaration
 */
export interface IExchangedDeclaration extends IJsonLdNodeObject {
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
	additionalStatementNote?: INote[];

	/**
	 * Customs valuation information applicable to this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/applicableCustomsValuation
	 */
	applicableCustomsValuation?: ICustomsValuation;

	/**
	 * A referenced document associated with this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IDocument[];

	/**
	 * The rate of currency exchange in this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/currencyExchangeRate
	 */
	currencyExchangeRate?: string;

	/**
	 * The monetary value specified for customs purposes in this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/customsValueSpecifiedAmount
	 */
	customsValueSpecifiedAmount?: IAmountType[];

	/**
	 * The trade party acting as an agent for the declarant for this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/declarantAgentParty
	 */
	declarantAgentParty?: ITradeParty[];

	/**
	 * The trade party acting as the declarant for this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/declarantParty
	 */
	declarantParty?: ITradeParty;

	/**
	 * The code specifying the type of this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/documentTypeCode
	 */
	documentTypeCode?: DocumentCodeList[];

	/**
	 * The gross weight measure specified in this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/grossWeightSpecifiedMeasure
	 */
	grossWeightSpecifiedMeasure?: IWeightUnitMeasureType[];

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
	previousDocument?: IDocument[];

	/**
	 * A principal trade party associated with this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/principalAssociatedParty
	 */
	principalAssociatedParty?: ITradeParty[];

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
	statisticalValueSpecifiedAmount?: IAmountType[];

	/**
	 * The submission location for this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/submissionLocation
	 */
	submissionLocation?: ILogisticsLocation[];

	/**
	 * The total invoice monetary value specified in this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/totalInvoiceSpecifiedAmount
	 */
	totalInvoiceSpecifiedAmount?: IAmountType[];

	/**
	 * The total package quantity specified in this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/totalPackageSpecifiedQuantity
	 */
	totalPackageSpecifiedQuantity?: IQuantityType[];

	/**
	 * The identifier for the version of this exchanged declaration.
	 * @see https://vocabulary.uncefact.org/versionId
	 */
	versionId?: string;
}
