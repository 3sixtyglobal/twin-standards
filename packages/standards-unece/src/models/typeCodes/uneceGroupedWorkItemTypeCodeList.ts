// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceGroupedWorkItem typeCode property.
 * @see https://vocabulary.uncefact.org/GroupedWorkItem
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceGroupedWorkItemTypeCodeList = {
	/**
	 * A grouped work item in this valuation breakdown statement.
	 * A grouped work item within this grouped work item.
	 * @see https://vocabulary.uncefact.org/itemGroupedWorkItem
	 */
	ItemGroupedWorkItem: "unece:itemGroupedWorkItem"
} as const;

/**
 * Values for UneceGroupedWorkItem typeCode property.
 * @see https://vocabulary.uncefact.org/GroupedWorkItem
 */
export type UneceGroupedWorkItemTypeCodeList = (typeof UneceGroupedWorkItemTypeCodeList)[keyof typeof UneceGroupedWorkItemTypeCodeList];
