// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IEpcisAttribute } from "./IEpcisAttribute.js";

/**
 * EPCIS 2.0 VocabularyElement representing a master data entity with
 * attributes and optional children.
 * @see https://ref.gs1.org/epcis/VocabularyElement
 */
export interface IEpcisVocabularyElement {
	/**
	 * Element id.
	 */
	id: string;

	/**
	 * Attributes.
	 */
	attributes?: IEpcisAttribute[];

	/**
	 * Children.
	 */
	children?: string[];
}
