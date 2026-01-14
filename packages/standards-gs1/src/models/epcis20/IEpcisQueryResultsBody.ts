// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { EpcisEvents } from "./epcisEvents.js";
import type { IEpcisVocabulary } from "./IEpcisVocabulary.js";

/**
 * EPCIS 2.0 QueryResultsBody containing events and optional master data.
 * @see https://ref.gs1.org/epcis/QueryResultsBody
 */
export interface IEpcisQueryResultsBody extends IJsonLdNodeObject {
	/**
	 * The list of events.
	 */
	eventList: EpcisEvents[];

	/**
	 * Optional master data.
	 */
	vocabularyList?: IEpcisVocabulary[];
}
