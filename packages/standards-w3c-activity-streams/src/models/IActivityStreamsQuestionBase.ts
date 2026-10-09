// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@3sixty/core";
import type { ActivityStreamsTypes } from "./activityStreamsTypes.js";
import type { IActivityStreamsIntransitiveActivity } from "./IActivityStreamsIntransitiveActivity.js";

/**
 * A W3C Activity Streams Question base.
 *
 * A `Question` represents a question being asked. Use `oneOf` for exclusive
 * choices, `anyOf` for inclusive choices, and `closed` to indicate when the question
 * is closed.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-question
 */
export interface IActivityStreamsQuestionBase extends IActivityStreamsIntransitiveActivity {
	/**
	 * Question type.
	 */
	type: ObjectOrArray<typeof ActivityStreamsTypes.Question | string>;

	/**
	 * Indicates that the Question has been closed.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-closed
	 */
	closed?: boolean | string;
}
