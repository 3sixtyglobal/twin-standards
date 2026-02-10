// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceInspectionEvent typeCode property.
 * @see https://vocabulary.uncefact.org/InspectionEvent
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceInspectionEventTypeCodeList = {
	/**
	 * A specified inspection event for this sustainability inspection.
	 * An inspection event for this specified inspection.
	 * An inspection event specified for this logistics location.
	 * An inspection event specified for this supply chain consignment item.
	 * An inspection event specified for this supply chain consignment.
	 * The inspection event specified for this procuring project.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionEvent
	 */
	SpecifiedInspectionEvent: "unece:specifiedInspectionEvent"
} as const;

/**
 * Values for UneceInspectionEvent typeCode property.
 * @see https://vocabulary.uncefact.org/InspectionEvent
 */
export type UneceInspectionEventTypeCodeList = (typeof UneceInspectionEventTypeCodeList)[keyof typeof UneceInspectionEventTypeCodeList];
