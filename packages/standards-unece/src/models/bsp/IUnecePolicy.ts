// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A plan of action agreed or chosen in order to obey rules or requests made by people in authority and designed to prevent
 * and detect violations of applicable law, regulations, rules and ethical standards by employees, agents and others.
 * @see https://vocabulary.uncefact.org/Policy
 */
export interface IUnecePolicy extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Policy;

	/**
	 * A referenced standard applicable to this compliance policy.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard[];

	/**
	 * A textual description of this compliance policy.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * An identifier of this compliance policy.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;
}
