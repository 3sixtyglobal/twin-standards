// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IJsonLdNodeObject, IJsonLdNodePrimitive } from "@twin.org/data-json-ld";

/**
 * EPCIS 2.0 Vocabulary Attribute describing metadata on vocabulary elements.
 * @see https://ref.gs1.org/epcis/Attribute
 */
export interface IEpcisAttribute extends IJsonLdNodeObject {
	/**
	 * Attribute id.
	 */
	id: string;

	/**
	 * Attribute value.
	 */
	attribute?: IJsonLdNodePrimitive;
}
