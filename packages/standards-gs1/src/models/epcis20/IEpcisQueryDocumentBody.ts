// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IEpcisQueryResults } from "./IEpcisQueryResults.js";

/**
 * EPCIS 2.0 QueryDocumentBody wrapper that carries query results.
 * @see https://ref.gs1.org/epcis/QueryDocumentBody
 */
export interface IEpcisQueryDocumentBody {
	/**
	 * The results of the query.
	 */
	queryResults: IEpcisQueryResults;
}
