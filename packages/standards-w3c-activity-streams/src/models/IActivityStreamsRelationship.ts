// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@3sixty/core";
import type { IJsonLdNodeObject } from "@3sixty/data-json-ld";
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsObject } from "./IActivityStreamsObject.js";

/**
 * A W3C Activity Streams Relationship.
 *
 * A `Relationship` can be used to describe a relationship between two entities.
 * It is commonly used as a reified statement, using `subject` (subject), `relationship`
 * (predicate), and `object` (object).
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-relationship
 */
export interface IActivityStreamsRelationship extends IActivityStreamsObject {
	/**
	 * Relationship type.
	 */
	type: ObjectOrArray<typeof ActivityStreamsObjectTypes.Relationship | string>;

	/**
	 * Subject of the relationship.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-subject
	 */
	subject?: string | IJsonLdNodeObject;

	/**
	 * Object of the relationship.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-object-term
	 */
	object?: IJsonLdNodeObject;

	/**
	 * The relationship predicate.
	 *
	 * For example, a URI identifying the relationship type.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-relationship
	 */
	relationship?: string | IJsonLdNodeObject;
}
