// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { ObjectOrArray } from "@3sixty/core";
import type { IJsonLdLanguageMap, IJsonLdNodeObject } from "@3sixty/data-json-ld";
import type { ActivityStreamsContextType } from "./activityStreamsContextType.js";
import type { ActivityStreamsObjectTypes } from "./activityStreamsObjectTypes.js";

/**
 * A W3C Activity Streams Object.
 *
 * This is the base type for most ActivityStreams entities. It supports natural language
 * values (e.g. `name`, `summary`, `content`) as either plain strings or language maps.
 * @see https://www.w3.org/TR/activitystreams-core/#object
 */
export interface IActivityStreamsObject {
	/**
	 * The LD Context.
	 */
	"@context": ActivityStreamsContextType;

	/**
	 * Object type.
	 *
	 * The value can be a single type or an array of types.
	 */
	type?: ObjectOrArray<ActivityStreamsObjectTypes | string>;

	/**
	 * Global identifier.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-id
	 * @json-schema format:uri
	 */
	id?: string;

	/**
	 * Natural language name.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-name
	 */
	name?: string | IJsonLdLanguageMap;

	/**
	 * Natural language name map.
	 * @see https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues
	 */
	nameMap?: IJsonLdLanguageMap;

	/**
	 * Natural language summary.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-summary
	 */
	summary?: string | IJsonLdLanguageMap;

	/**
	 * Natural language summary map.
	 * @see https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues
	 */
	summaryMap?: IJsonLdLanguageMap;

	/**
	 * Natural language content.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-content
	 */
	content?: string | IJsonLdLanguageMap;

	/**
	 * Natural language content map.
	 * @see https://www.w3.org/TR/activitystreams-core/#naturalLanguageValues
	 */
	contentMap?: IJsonLdLanguageMap;

	/**
	 * A link to the representation of the object.
	 *
	 * The value can be a URI or an embedded node object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-url
	 */
	url?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * A graphical representation of the object.
	 *
	 * The value can be a URI or an embedded `Image`/`Link` object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image-term
	 */
	image?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * An icon for the object.
	 *
	 * The value can be a URI or an embedded `Image`/`Link` object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-icon
	 */
	icon?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * Published date-time.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-published
	 * @json-schema format:date-time
	 */
	published?: string;

	/**
	 * Updated date-time.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-updated
	 * @json-schema format:date-time
	 */
	updated?: string;

	/**
	 * Start time.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-starttime
	 * @json-schema format:date-time
	 */
	startTime?: string;

	/**
	 * End time.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-endtime
	 * @json-schema format:date-time
	 */
	endTime?: string;

	/**
	 * Duration.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-duration
	 * @json-schema format:duration
	 */
	duration?: string;

	/**
	 * The generator of the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-generator
	 */
	generator?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * Attachments.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attachment
	 */
	attachment?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * Objects attributed to.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-attributedto
	 */
	attributedTo?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * Audience.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audience
	 */
	audience?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * Context.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-context
	 */
	context?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * Location.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-location
	 */
	location?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * Tag.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tag
	 */
	tag?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * In reply to.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-inreplyto
	 */
	inReplyTo?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * Replies collection.
	 *
	 * Typically an embedded `Collection` of Objects that are replies to this object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-replies
	 */
	replies?: IJsonLdNodeObject;

	/**
	 * Preview.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-preview
	 */
	preview?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * To.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-to
	 */
	to?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * BTo.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bto
	 */
	bto?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * CC.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-cc
	 */
	cc?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * BCC.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-bcc
	 */
	bcc?: ObjectOrArray<string | IJsonLdNodeObject>;

	/**
	 * MIME media type of the referenced resource.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-mediatype
	 */
	mediaType?: string;
}
