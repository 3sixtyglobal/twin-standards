// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * EPCIS 2.0 Query key/value parameter map used in query documents.
 * @see https://ref.gs1.org/epcis/Query
 */
export interface IEpcisQuery {
	[key: string]: string;
}
