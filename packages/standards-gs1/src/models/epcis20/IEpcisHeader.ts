// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@3sixty/data-json-ld";
import type { IEpcisVocabulary } from "./IEpcisVocabulary.js";

/**
 * EPCIS 2.0 Header carrying optional master data alongside an EPCIS document.
 * @see https://ref.gs1.org/epcis/EPCISHeader
 */
export interface IEpcisHeader {
	/**
	 * EPCIS master data.
	 */
	epcisMasterData?: IJsonLdNodeObject & {
		/**
		 * Vocabulary list.
		 */
		vocabularyList?: IEpcisVocabulary[];
	};
}
