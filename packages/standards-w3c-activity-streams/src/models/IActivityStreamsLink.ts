// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@twin.org/core";
import type { IJsonLdLanguageMap, IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ActivityStreamsContextType } from "./activityStreamsContextType.js";
import type { ActivityStreamsLinkTypes } from "./activityStreamsLinkTypes.js";

/**
 * A W3C Activity Streams Link.
 *
 * A `Link` is used to reference a resource by URI (via `href`) and can include
 * optional presentation metadata such as `name`, `mediaType`, `height`, and `width`.
 * @see https://www.w3.org/TR/activitystreams-core/#link
 */
export interface IActivityStreamsLink extends IJsonLdNodeObject {
	/**
	 * The LD Context.
	 */
	"@context": ActivityStreamsContextType;

	/**
	 * Link type.
	 */
	type: ObjectOrArray<ActivityStreamsLinkTypes | string>;

	/**
	 * The target URI of the Link.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-href
	 */
	href: string;

	/**
	 * A natural language name for the link.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name
	 */
	name?: string | IJsonLdLanguageMap;

	/**
	 * A language hint for the target resource.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-hreflang
	 */
	hreflang?: string;

	/**
	 * MIME media type of the referenced resource.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-mediatype
	 */
	mediaType?: string;

	/**
	 * Link relation value(s).
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-rel
	 */
	rel?: ObjectOrArray<string>;

	/**
	 * Desired rendered height.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-height
	 */
	height?: number;

	/**
	 * Desired rendered width.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-width
	 */
	width?: number;

	/**
	 * Preview of the link.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview
	 */
	preview?: ObjectOrArray<string | IJsonLdNodeObject>;
}
