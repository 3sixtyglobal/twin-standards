// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceIOTDevice typeCode property.
 * @see https://vocabulary.uncefact.org/IOTDevice
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceIOTDeviceTypeCodeList = {
	/**
	 * An IOT device attached to this logistics transport means.
	 * An IOT device attached to this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/attachedIOTDevice
	 */
	AttachedIOTDevice: "unece:attachedIOTDevice",

	/**
	 * An IOT device for this transport reporting event.
	 * @see https://vocabulary.uncefact.org/reportingIOTDevice
	 */
	ReportingIOTDevice: "unece:reportingIOTDevice"
} as const;

/**
 * Values for UneceIOTDevice typeCode property.
 * @see https://vocabulary.uncefact.org/IOTDevice
 */
export type UneceIOTDeviceTypeCodeList = (typeof UneceIOTDeviceTypeCodeList)[keyof typeof UneceIOTDeviceTypeCodeList];
