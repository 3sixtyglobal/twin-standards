// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The object types concerning Activity Streams.
 * @see https://www.w3.org/TR/activitystreams-core/#model
 * @see https://www.w3.org/TR/activitystreams-vocabulary/
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ActivityStreamsObjectTypes = {
	/**
	 * Object
	 * @see https://www.w3.org/TR/activitystreams-core/#object
	 */
	Object: "Object",

	/**
	 * Activity
	 * @see https://www.w3.org/TR/activitystreams-core/#activities
	 */
	Activity: "Activity",

	/**
	 * IntransitiveActivity
	 * @see https://www.w3.org/TR/activitystreams-core/#intransitiveactivities
	 */
	IntransitiveActivity: "IntransitiveActivity",

	/**
	 * Collection
	 * @see https://www.w3.org/TR/activitystreams-core/#collections
	 */
	Collection: "Collection",

	/**
	 * OrderedCollection
	 * @see https://www.w3.org/TR/activitystreams-core/#collections
	 */
	OrderedCollection: "OrderedCollection",

	/**
	 * CollectionPage
	 * @see https://www.w3.org/TR/activitystreams-core/#collections
	 */
	CollectionPage: "CollectionPage",

	/**
	 * OrderedCollectionPage
	 * @see https://www.w3.org/TR/activitystreams-core/#collections
	 */
	OrderedCollectionPage: "OrderedCollectionPage",

	/**
	 * Actor
	 * @see https://www.w3.org/TR/activitystreams-core/#actors
	 */
	Actor: "Actor",

	/**
	 * Application
	 * @see https://www.w3.org/TR/activitystreams-core/#actors
	 */
	Application: "Application",

	/**
	 * Group
	 * @see https://www.w3.org/TR/activitystreams-core/#actors
	 */
	Group: "Group",

	/**
	 * Organization
	 * @see https://www.w3.org/TR/activitystreams-core/#actors
	 */
	Organization: "Organization",

	/**
	 * Person
	 * @see https://www.w3.org/TR/activitystreams-core/#actors
	 */
	Person: "Person",

	/**
	 * Service
	 * @see https://www.w3.org/TR/activitystreams-core/#actors
	 */
	Service: "Service",

	/**
	 * Article
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-article
	 */
	Article: "Article",

	/**
	 * Audio
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-audio
	 */
	Audio: "Audio",

	/**
	 * Document
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-document
	 */
	Document: "Document",

	/**
	 * Event
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-event
	 */
	Event: "Event",

	/**
	 * Image
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-image
	 */
	Image: "Image",

	/**
	 * Note
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-note
	 */
	Note: "Note",

	/**
	 * Page
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-page
	 */
	Page: "Page",

	/**
	 * Question
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-question
	 */
	Question: "Question",

	/**
	 * Place
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-place
	 */
	Place: "Place",

	/**
	 * Profile
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-profile
	 */
	Profile: "Profile",

	/**
	 * Relationship
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-relationship
	 */
	Relationship: "Relationship",

	/**
	 * Tombstone
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tombstone
	 */
	Tombstone: "Tombstone",

	/**
	 * Video
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-video
	 */
	Video: "Video"
} as const;

/**
 * The object types concerning Activity Streams.
 */
export type ActivityStreamsObjectTypes =
	(typeof ActivityStreamsObjectTypes)[keyof typeof ActivityStreamsObjectTypes];
