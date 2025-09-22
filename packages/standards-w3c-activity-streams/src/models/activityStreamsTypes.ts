// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types concerning Activity Streams.
 * Section 3.1 Activity Types: https://www.w3.org/TR/activitystreams-vocabulary/#activity-types
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ActivityStreamsTypes = {
	/**
	 * Activity
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-activity
	 */
	Activity: "Activity",

	/**
	 * Accept
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-accept
	 */
	Accept: "Accept",

	/**
	 * Add
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-add
	 */
	Add: "Add",

	/**
	 * Announce
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-announce
	 */
	Announce: "Announce",

	/**
	 * Arrive
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-arrive
	 */
	Arrive: "Arrive",

	/**
	 * Block
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-block
	 */
	Block: "Block",

	/**
	 * Create
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create
	 */
	Create: "Create",

	/**
	 * Delete
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-delete
	 */
	Delete: "Delete",

	/**
	 * Dislike
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-dislike
	 */
	Dislike: "Dislike",

	/**
	 * Flag
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-flag
	 */
	Flag: "Flag",

	/**
	 * Follow
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-follow
	 */
	Follow: "Follow",

	/**
	 * Ignore
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-ignore
	 */
	Ignore: "Ignore",

	/**
	 * Invite
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-invite
	 */
	Invite: "Invite",

	/**
	 * Join
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-join
	 */
	Join: "Join",

	/**
	 * Leave
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-leave
	 */
	Leave: "Leave",

	/**
	 * Like
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-like
	 */
	Like: "Like",

	/**
	 * Listen
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-listen
	 */
	Listen: "Listen",

	/**
	 * Move
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-move
	 */
	Move: "Move",

	/**
	 * Offer
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-offer
	 */
	Offer: "Offer",

	/**
	 * Question
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-question
	 */
	Question: "Question",

	/**
	 * Reject
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-reject
	 */
	Reject: "Reject",

	/**
	 * Read
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-read
	 */
	Read: "Read",

	/**
	 * Remove
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-remove
	 */
	Remove: "Remove",

	/**
	 * TentativeReject
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativereject
	 */
	TentativeReject: "TentativeReject",

	/**
	 * TentativeAccept
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativeaccept
	 */
	TentativeAccept: "TentativeAccept",

	/**
	 * Travel
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-travel
	 */
	Travel: "Travel",

	/**
	 * Undo
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-undo
	 */
	Undo: "Undo",

	/**
	 * Update
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-update
	 */
	Update: "Update",

	/**
	 * View
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-view
	 */
	View: "View"
} as const;

/**
 * The types concerning Activity.
 * Section 3.1 Activity Types: https://www.w3.org/TR/activitystreams-vocabulary/#activity-types
 */
export type ActivityStreamsTypes = (typeof ActivityStreamsTypes)[keyof typeof ActivityStreamsTypes];
