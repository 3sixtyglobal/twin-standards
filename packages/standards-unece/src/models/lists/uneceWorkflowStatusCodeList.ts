// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent a workflow status.
 * @see https://vocabulary.uncefact.org/WorkflowStatusCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceWorkflowStatusCodeList = {
	/**
	 * To be done: 1.
	 */
	ToBeDone: "unece:WorkflowStatusCodeList#1",

	/**
	 * Instructed to start: 108.
	 */
	InstructedToStart: "unece:WorkflowStatusCodeList#108",

	/**
	 * Instructed to stop: 109.
	 */
	InstructedToStop: "unece:WorkflowStatusCodeList#109",

	/**
	 * Inactive: 111.
	 */
	Inactive: "unece:WorkflowStatusCodeList#111",

	/**
	 * Active: 112.
	 */
	Active: "unece:WorkflowStatusCodeList#112",

	/**
	 * Complete: 121.
	 */
	Complete: "unece:WorkflowStatusCodeList#121",

	/**
	 * Requested: 17.
	 */
	Requested: "unece:WorkflowStatusCodeList#17",

	/**
	 * Done: 2.
	 */
	Done: "unece:WorkflowStatusCodeList#2",

	/**
	 * Transaction expected to be executed: 28.
	 */
	TransactionExpectedToBeExecuted: "unece:WorkflowStatusCodeList#28",

	/**
	 * Passed on: 3.
	 */
	PassedOn: "unece:WorkflowStatusCodeList#3",

	/**
	 * Started: 35.
	 */
	Started: "unece:WorkflowStatusCodeList#35",

	/**
	 * Revised: 36.
	 */
	Revised: "unece:WorkflowStatusCodeList#36",

	/**
	 * Assigned: 38.
	 */
	Assigned: "unece:WorkflowStatusCodeList#38",

	/**
	 * Approved: 39.
	 */
	Approved: "unece:WorkflowStatusCodeList#39",

	/**
	 * Withdrawn: 40.
	 */
	Withdrawn: "unece:WorkflowStatusCodeList#40",

	/**
	 * Rejected: 41.
	 */
	Rejected: "unece:WorkflowStatusCodeList#41",

	/**
	 * Approval pending: 42.
	 */
	ApprovalPending: "unece:WorkflowStatusCodeList#42",

	/**
	 * Postponed: 43.
	 */
	Postponed: "unece:WorkflowStatusCodeList#43",

	/**
	 * Replaced: 44.
	 */
	Replaced: "unece:WorkflowStatusCodeList#44",

	/**
	 * Issued: 70.
	 */
	Issued: "unece:WorkflowStatusCodeList#70",

	/**
	 * Confirmed: 73.
	 */
	Confirmed: "unece:WorkflowStatusCodeList#73",

	/**
	 * Updated: 85.
	 */
	Updated: "unece:WorkflowStatusCodeList#85",

	/**
	 * Unchanged: 95.
	 */
	Unchanged: "unece:WorkflowStatusCodeList#95",

	/**
	 * Pending: 97.
	 */
	Pending: "unece:WorkflowStatusCodeList#97"
} as const;

/**
 * A character string used to represent a workflow status.
 * @see https://vocabulary.uncefact.org/WorkflowStatusCodeList
 */
export type UneceWorkflowStatusCodeList = (typeof UneceWorkflowStatusCodeList)[keyof typeof UneceWorkflowStatusCodeList];
