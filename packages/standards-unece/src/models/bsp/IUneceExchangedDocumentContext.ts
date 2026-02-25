// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceDocumentContextParameter } from "./IUneceDocumentContextParameter.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The scenario or setting of an exchanged document, such as its business process application context.
 * @see https://vocabulary.uncefact.org/ExchangedDocumentContext
 */
export interface IUneceExchangedDocumentContext {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ExchangedDocumentContext;

	/**
	 * An application context parameter specified for this exchanged document context.
	 * @see https://vocabulary.uncefact.org/applicationSpecifiedParameter
	 */
	applicationSpecifiedParameter?: IUneceDocumentContextParameter[];

	/**
	 * A Business Information Master (BIM) context parameter specified for this exchanged document context.
	 * @see https://vocabulary.uncefact.org/bIMSpecifiedParameter
	 */
	bIMSpecifiedParameter?: IUneceDocumentContextParameter[];

	/**
	 * A business process context parameter specified for this exchanged document context.
	 * @see https://vocabulary.uncefact.org/businessProcessSpecifiedParameter
	 */
	businessProcessSpecifiedParameter?: IUneceDocumentContextParameter[];

	/**
	 * A guideline context parameter specified for this exchanged document context.
	 * @see https://vocabulary.uncefact.org/guidelineSpecifiedParameter
	 */
	guidelineSpecifiedParameter?: IUneceDocumentContextParameter[];

	/**
	 * The message standard document context parameter specified for this exchanged document context.
	 * @see https://vocabulary.uncefact.org/messageStandardSpecifiedParameter
	 */
	messageStandardSpecifiedParameter?: IUneceDocumentContextParameter;

	/**
	 * The date, time, date time, or other date time value of the processing of a transaction for this exchanged document
	 * context.
	 * @see https://vocabulary.uncefact.org/processingTransactionDateTime
	 */
	processingTransactionDateTime?: string;

	/**
	 * A scenario context parameter specified for this exchanged document context.
	 * @see https://vocabulary.uncefact.org/scenarioSpecifiedParameter
	 */
	scenarioSpecifiedParameter?: IUneceDocumentContextParameter[];

	/**
	 * The identifier of a specified transaction in this exchanged document context.
	 * @see https://vocabulary.uncefact.org/specifiedTransactionId
	 */
	specifiedTransactionId?: string;

	/**
	 * A subset context parameter specified for this exchanged document context.
	 * @see https://vocabulary.uncefact.org/subsetSpecifiedParameter
	 */
	subsetSpecifiedParameter?: IUneceDocumentContextParameter[];

	/**
	 * The indication of whether or not this exchanged document context is a test.
	 * @see https://vocabulary.uncefact.org/testIndicator
	 */
	testIndicator?: boolean;

	/**
	 * A user specified document context parameter specified for this exchanged document context.
	 * @see https://vocabulary.uncefact.org/userSpecifiedParameter
	 */
	userSpecifiedParameter?: IUneceDocumentContextParameter[];
}
