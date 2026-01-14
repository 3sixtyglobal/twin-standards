// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IEpcisQueryResultsBody } from "./IEpcisQueryResultsBody.js";

/**
 * EPCIS 2.0 QueryResults payload returned from a repository query.
 * @see https://ref.gs1.org/epcis/QueryResults
 */
export interface IEpcisQueryResults extends IJsonLdNodeObject {
	/**
	 * The concerned subscription.
	 */
	subscriptionID?: string;

	/**
	 * The concerned query.
	 */
	queryName: string;

	/**
	 * The query results payload.
	 */
	resultsBody: IEpcisQueryResultsBody;
}
