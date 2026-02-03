// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceProductCharacteristic } from "./IUneceProductCharacteristic.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A systematic arrangement of products in classes or categories according to established criteria.
 * @see https://vocabulary.uncefact.org/Classification
 */
export interface IUneceClassification extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Classification;

	/**
	 * The referenced standard that is applicable to this product classification.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard;

	/**
	 * A product class characteristic for this product classification.
	 * @see https://vocabulary.uncefact.org/classCharacteristic
	 */
	classCharacteristic?: IUneceProductCharacteristic;

	/**
	 * The code specifying the class for this product classification.
	 * @see https://vocabulary.uncefact.org/classCode
	 */
	classCode?: string;

	/**
	 * The textual description for the class content type of this product classification.
	 * @see https://vocabulary.uncefact.org/classContentTypeDescription
	 */
	classContentTypeDescription?: string;

	/**
	 * The code specifying the description of the class content type of this product classification.
	 * @see https://vocabulary.uncefact.org/classContentTypeDescriptionCode
	 */
	classContentTypeDescriptionCode?: string;

	/**
	 * A class name, expressed as text, for this product classification.
	 * @see https://vocabulary.uncefact.org/className
	 */
	className?: string;

	/**
	 * A textual description of this product classification.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The code specifying the sub class for this product classification.
	 * @see https://vocabulary.uncefact.org/subClassCode
	 */
	subClassCode?: string;

	/**
	 * The unique identifier of the classification system for this product classification.
	 * @see https://vocabulary.uncefact.org/systemId
	 */
	systemId?: string;

	/**
	 * A name, expressed as text, of the classification system for this product classification.
	 * @see https://vocabulary.uncefact.org/systemName
	 */
	systemName?: string;

	/**
	 * The code specifying the type of product classification.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
