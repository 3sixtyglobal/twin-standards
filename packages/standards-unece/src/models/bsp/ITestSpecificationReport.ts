// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A report that specifies a certification test and its attributes.
 * @see https://vocabulary.uncefact.org/TestSpecificationReport
 */
export interface ITestSpecificationReport extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TestSpecificationReport;

	/**
	 * A result, expressed as text, reported in this certification test specification report.
	 * @see https://vocabulary.uncefact.org/result
	 */
	result?: string;

	/**
	 * The name, expressed as text, of the standard applicable for this certification test specification report.
	 * @see https://vocabulary.uncefact.org/standardName
	 */
	standardName?: string;

	/**
	 * A test name, expressed as text, for this certification test specification report.
	 * @see https://vocabulary.uncefact.org/testName
	 */
	testName?: string;
}
