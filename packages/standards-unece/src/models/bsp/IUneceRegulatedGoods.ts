// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceDangerousGoods } from "./IUneceDangerousGoods.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Articles of trade or commerce which are subject to, or controlled by a rule, regulation, or law at a particular point
 * during their logistics lifecycle.
 * @see https://vocabulary.uncefact.org/RegulatedGoods
 */
export interface IUneceRegulatedGoods {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.RegulatedGoods;

	/**
	 * Transport dangerous goods information applicable to these logistics regulated goods.
	 * @see https://vocabulary.uncefact.org/applicableDangerousGoods
	 */
	applicableDangerousGoods?: IUneceDangerousGoods[];
}
