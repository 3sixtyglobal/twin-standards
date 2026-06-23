// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IActivityStreamsQuestionAnyOfChoice } from "./IActivityStreamsQuestionAnyOfChoice.js";
import type { IActivityStreamsQuestionBase } from "./IActivityStreamsQuestionBase.js";
import type { IActivityStreamsQuestionNeitherChoice } from "./IActivityStreamsQuestionNeitherChoice.js";
import type { IActivityStreamsQuestionOneOfChoice } from "./IActivityStreamsQuestionOneOfChoice.js";

/**
 * A W3C Activity Streams Question.
 *
 * A `Question` represents a question being asked. Use `oneOf` for exclusive
 * choices, `anyOf` for inclusive choices, and `closed` to indicate when the question
 * is closed.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-question
 */
export type IActivityStreamsQuestion = IActivityStreamsQuestionBase &
	(
		| IActivityStreamsQuestionAnyOfChoice
		| IActivityStreamsQuestionOneOfChoice
		| IActivityStreamsQuestionNeitherChoice
	);
