// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ActivityStreamsTypes } from "./activityStreamsTypes.js";
import type { IActivityStreamsIntransitiveActivity } from "./IActivityStreamsIntransitiveActivity.js";

/**
 * A W3C Activity Streams Question.
 *
 * A `Question` represents a question being asked. Use `oneOf` for exclusive
 * choices, `anyOf` for inclusive choices, and `closed` to indicate when the question
 * is closed.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-question
 */
export interface IActivityStreamsQuestion extends IActivityStreamsIntransitiveActivity {
	/**
	 * Question type.
	 */
	type:
		| (typeof ActivityStreamsTypes.Question | string)
		| (typeof ActivityStreamsTypes.Question | string)[];

	/**
	 * Specifies an inclusive list of possible answers.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-anyof
	 */
	anyOf?: ObjectOrArray<IJsonLdNodeObject>;

	/**
	 * Specifies an exclusive list of possible answers.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-oneof
	 */
	oneOf?: ObjectOrArray<IJsonLdNodeObject>;

	/**
	 * Indicates that the Question has been closed.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-closed
	 */
	closed?: boolean | string;
}
