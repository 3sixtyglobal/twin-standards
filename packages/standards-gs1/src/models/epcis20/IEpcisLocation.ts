// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * EPCIS 2.0 Location reference (readPoint/bizLocation) that wraps a location
 * identifier.
 * @see https://ref.gs1.org/epcis/ReadPoint
 */
export interface IEpcisLocation {
	/**
	 * The location identifier (URI/IRI per EPCIS schema and SHACL).
	 */
	id: string;
}
