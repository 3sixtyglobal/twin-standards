// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IEpcisVocabularyElement } from "./IEpcisVocabularyElement.js";

/**
 * EPCIS 2.0 Vocabulary container that groups related vocabulary elements.
 * @see https://ref.gs1.org/epcis/Vocabulary
 */
export interface IEpcisVocabulary {
	/**
	 * Vocabulary type.
	 */
	type: string;

	/**
	 * List of vocabulary elements.
	 */
	vocabularyElementList?: IEpcisVocabularyElement[];
}
