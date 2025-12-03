// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IInstalmentPayment } from "./IInstalmentPayment.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A plan for paying a total sum of money by several payments made over a period of time.
 * @see https://vocabulary.uncefact.org/InstalmentPlan
 */
export interface IInstalmentPlan extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.InstalmentPlan;

	/**
	 * An instalment payment specified for this instalment plan.
	 * @see https://vocabulary.uncefact.org/specifiedInstalmentPayment
	 */
	specifiedInstalmentPayment?: IInstalmentPayment[];
}
