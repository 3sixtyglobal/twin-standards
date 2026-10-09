// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@3sixty/core";
import type { IJsonLdNodeObject } from "@3sixty/data-json-ld";

/**
 * Represents a Question with an exclusive list of possible answers, but not an inclusive list.
 */
export interface IActivityStreamsQuestionOneOfChoice {
	/**
	 * Specifies an inclusive list of possible answers.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-anyof
	 */
	anyOf?: never;

	/**
	 * Specifies an exclusive list of possible answers.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-oneof
	 */
	oneOf: ObjectOrArray<IJsonLdNodeObject>;
}
