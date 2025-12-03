// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a response type.
 * @see https://vocabulary.uncefact.org/ResponseTypeCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ResponseTypeCodeList = {
	/**
	 * Debit advice: AA.
	 */
	DebitAdvice: "unece:ResponseTypeCodeList#AA",

	/**
	 * Message acknowledgement: AB.
	 */
	MessageAcknowledgement: "unece:ResponseTypeCodeList#AB",

	/**
	 * Acknowledge - with detail and change: AC.
	 */
	AcknowledgeWithDetailAndChange: "unece:ResponseTypeCodeList#AC",

	/**
	 * Acknowledge - with detail, no change: AD.
	 */
	AcknowledgeWithDetailNoChange: "unece:ResponseTypeCodeList#AD",

	/**
	 * Debit advice for each transaction: AE.
	 */
	DebitAdviceForEachTransaction: "unece:ResponseTypeCodeList#AE",

	/**
	 * Debit advice/message acknowledgement: AF.
	 */
	DebitAdviceMessageAcknowledgement: "unece:ResponseTypeCodeList#AF",

	/**
	 * Authentication: AG.
	 */
	Authentication: "unece:ResponseTypeCodeList#AG",

	/**
	 * Debit advice/message acknowledgement for each transaction: AH.
	 */
	DebitAdviceMessageAcknowledgementForEachTransaction: "unece:ResponseTypeCodeList#AH",

	/**
	 * Acknowledge only changes: AI.
	 */
	AcknowledgeOnlyChanges: "unece:ResponseTypeCodeList#AI",

	/**
	 * Pending: AJ.
	 */
	Pending: "unece:ResponseTypeCodeList#AJ",

	/**
	 * Return only TIR transport information: AK.
	 */
	ReturnOnlyTIRTransportInformation: "unece:ResponseTypeCodeList#AK",

	/**
	 * Return only declaration information: AL.
	 */
	ReturnOnlyDeclarationInformation: "unece:ResponseTypeCodeList#AL",

	/**
	 * Return only guarantee information: AM.
	 */
	ReturnOnlyGuaranteeInformation: "unece:ResponseTypeCodeList#AM",

	/**
	 * Return all information regarding guarantee: AN.
	 */
	ReturnAllInformationRegardingGuarantee: "unece:ResponseTypeCodeList#AN",

	/**
	 * Accepted: AP.
	 */
	Accepted: "unece:ResponseTypeCodeList#AP",

	/**
	 * Response expected: AQ.
	 */
	ResponseExpected: "unece:ResponseTypeCodeList#AQ",

	/**
	 * Direct documentary credit collection: AR.
	 */
	DirectDocumentaryCreditCollection: "unece:ResponseTypeCodeList#AR",

	/**
	 * Credit advice and message acknowledgement: AS.
	 */
	CreditAdviceAndMessageAcknowledgement: "unece:ResponseTypeCodeList#AS",

	/**
	 * Conditionally accepted: CA.
	 */
	ConditionallyAccepted: "unece:ResponseTypeCodeList#CA",

	/**
	 * Confirmation of measurements: CO.
	 */
	ConfirmationOfMeasurements: "unece:ResponseTypeCodeList#CO",

	/**
	 * No acknowledgement needed: NA.
	 */
	NoAcknowledgementNeeded: "unece:ResponseTypeCodeList#NA",

	/**
	 * Rejected: RE.
	 */
	Rejected: "unece:ResponseTypeCodeList#RE",

	/**
	 * Credit advice: UR.
	 */
	CreditAdvice: "unece:ResponseTypeCodeList#UR",

	/**
	 * Acknowledgement when error: US.
	 */
	AcknowledgementWhenError: "unece:ResponseTypeCodeList#US",

	/**
	 * Acknowledgment due to error: UT.
	 */
	AcknowledgmentDueToError: "unece:ResponseTypeCodeList#UT",

	/**
	 * Alternate date: UU.
	 */
	AlternateDate: "unece:ResponseTypeCodeList#UU",

	/**
	 * Alternate service: UV.
	 */
	AlternateService: "unece:ResponseTypeCodeList#UV"
} as const;

/**
 * A character string used to represent a response type.
 * @see https://vocabulary.uncefact.org/ResponseTypeCodeList
 */
export type ResponseTypeCodeList = (typeof ResponseTypeCodeList)[keyof typeof ResponseTypeCodeList];
