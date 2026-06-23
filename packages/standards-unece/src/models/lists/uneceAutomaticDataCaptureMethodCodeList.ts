// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * A character string used to represent an automatic data capturing method.
 * @see https://vocabulary.uncefact.org/AutomaticDataCaptureMethodCodeList
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceAutomaticDataCaptureMethodCodeList = {
	/**
	 * Package barcoded EAN-13 or EAN-8: 50.
	 */
	PackageBarcodedEAN13OrEAN8: "unece:AutomaticDataCaptureMethodCodeList#50",

	/**
	 * Package barcoded ITF-14 or ITF-6: 51.
	 */
	PackageBarcodedITF14OrITF6: "unece:AutomaticDataCaptureMethodCodeList#51",

	/**
	 * Package barcoded UCC or EAN-128: 52.
	 */
	PackageBarcodedUCCOrEAN128: "unece:AutomaticDataCaptureMethodCodeList#52",

	/**
	 * Package never EPC tagged: 64.
	 */
	PackageNeverEPCTagged: "unece:AutomaticDataCaptureMethodCodeList#64",

	/**
	 * Package sometimes EPC tagged: 65.
	 */
	PackageSometimesEPCTagged: "unece:AutomaticDataCaptureMethodCodeList#65",

	/**
	 * Tagging/bar code instructions: 67.
	 */
	TaggingBarCodeInstructions: "unece:AutomaticDataCaptureMethodCodeList#67",

	/**
	 * Package bar-coded and EPC tagged: 78.
	 */
	PackageBarCodedAndEPCTagged: "unece:AutomaticDataCaptureMethodCodeList#78",

	/**
	 * Package EPC tagged only: 79.
	 */
	PackageEPCTaggedOnly: "unece:AutomaticDataCaptureMethodCodeList#79",

	/**
	 * Package marked with a variable measure barcode: 81.
	 */
	PackageMarkedWithAVariableMeasureBarcode: "unece:AutomaticDataCaptureMethodCodeList#81",

	/**
	 * Package marked with fixed measure barcode.: 82.
	 */
	PackageMarkedWithFixedMeasureBarcode: "unece:AutomaticDataCaptureMethodCodeList#82"
} as const;

/**
 * A character string used to represent an automatic data capturing method.
 * @see https://vocabulary.uncefact.org/AutomaticDataCaptureMethodCodeList
 */
export type UneceAutomaticDataCaptureMethodCodeList = (typeof UneceAutomaticDataCaptureMethodCodeList)[keyof typeof UneceAutomaticDataCaptureMethodCodeList];
