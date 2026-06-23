// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";

/**
 * Represents a Question with an inclusive list of possible answers, but not an exclusive list.
 */
export interface IActivityStreamsQuestionAnyOfChoice {
	/**
	 * Specifies an inclusive list of possible answers.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-anyof
	 */
	anyOf: ObjectOrArray<IJsonLdNodeObject>;

	/**
	 * Specifies an exclusive list of possible answers.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-oneof
	 */
	oneOf?: never;
}
