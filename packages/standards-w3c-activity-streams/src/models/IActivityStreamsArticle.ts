// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";
import type { IActivityStreamsDocument } from "./IActivityStreamsDocument.js";

/**
 * A W3C Activity Streams Article.
 *
 * An `Article` is a written work.
 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-article
 */
export interface IActivityStreamsArticle extends IActivityStreamsDocument {
	/**
	 * Article type.
	 */
	type:
		| (typeof ActivityStreamsObjectTypes.Article | string)
		| (typeof ActivityStreamsObjectTypes.Article | string)[];
}
