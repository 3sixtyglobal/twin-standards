// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types concerning Activity Streams.
 * Section 3.1 Activity Types: https://www.w3.org/TR/activitystreams-vocabulary/#activity-types
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ActivityStreamsTypes = {
	/**
	 * Activity.
	 *
	 * Generic base type for activities (actions) in Activity Streams.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-activity
	 */
	Activity: "Activity",

	/**
	 * Accept.
	 *
	 * Indicates that the actor accepts the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-accept
	 */
	Accept: "Accept",

	/**
	 * Add.
	 *
	 * Indicates that the actor added the object to the target.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-add
	 */
	Add: "Add",

	/**
	 * Announce.
	 *
	 * Indicates that the actor is calling attention to the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-announce
	 */
	Announce: "Announce",

	/**
	 * Arrive.
	 *
	 * Intransitive activity indicating that the actor arrived at a location.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-arrive
	 */
	Arrive: "Arrive",

	/**
	 * Block.
	 *
	 * Indicates that the actor is blocking the object (a stronger form of Ignore).
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-block
	 */
	Block: "Block",

	/**
	 * Create.
	 *
	 * Indicates that the actor has created the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create
	 */
	Create: "Create",

	/**
	 * Delete.
	 *
	 * Indicates that the actor has deleted the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-delete
	 */
	Delete: "Delete",

	/**
	 * Dislike.
	 *
	 * Indicates that the actor dislikes the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-dislike
	 */
	Dislike: "Dislike",

	/**
	 * Flag.
	 *
	 * Indicates that the actor is flagging the object (e.g., reporting it).
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-flag
	 */
	Flag: "Flag",

	/**
	 * Follow.
	 *
	 * Indicates that the actor is following the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-follow
	 */
	Follow: "Follow",

	/**
	 * Ignore.
	 *
	 * Indicates that the actor is ignoring the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-ignore
	 */
	Ignore: "Ignore",

	/**
	 * Invite.
	 *
	 * Specialization of Offer in which the actor is extending an invitation.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-invite
	 */
	Invite: "Invite",

	/**
	 * Join.
	 *
	 * Indicates that the actor has joined the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-join
	 */
	Join: "Join",

	/**
	 * Leave.
	 *
	 * Indicates that the actor has left the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-leave
	 */
	Leave: "Leave",

	/**
	 * Like.
	 *
	 * Indicates that the actor likes, recommends, or endorses the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-like
	 */
	Like: "Like",

	/**
	 * Listen.
	 *
	 * Indicates that the actor has listened to the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-listen
	 */
	Listen: "Listen",

	/**
	 * Move.
	 *
	 * Indicates that the actor has moved the object from `origin` to `target`.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-move
	 */
	Move: "Move",

	/**
	 * Offer.
	 *
	 * Indicates that the actor is offering the object (optionally to a target).
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-offer
	 */
	Offer: "Offer",

	/**
	 * Question.
	 *
	 * Intransitive activity representing a question; can express options via `oneOf`/`anyOf`.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-question
	 */
	Question: "Question",

	/**
	 * Reject.
	 *
	 * Indicates that the actor is rejecting the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-reject
	 */
	Reject: "Reject",

	/**
	 * Read.
	 *
	 * Indicates that the actor has read the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-read
	 */
	Read: "Read",

	/**
	 * Remove.
	 *
	 * Indicates that the actor is removing the object (optionally from an origin context).
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-remove
	 */
	Remove: "Remove",

	/**
	 * TentativeReject.
	 *
	 * Specialization of Reject indicating that the rejection is tentative.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativereject
	 */
	TentativeReject: "TentativeReject",

	/**
	 * TentativeAccept.
	 *
	 * Specialization of Accept indicating that the acceptance is tentative.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativeaccept
	 */
	TentativeAccept: "TentativeAccept",

	/**
	 * Travel.
	 *
	 * Intransitive activity indicating that the actor is travelling to `target` from `origin`.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-travel
	 */
	Travel: "Travel",

	/**
	 * Undo.
	 *
	 * Indicates that the actor is undoing a previous activity.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-undo
	 */
	Undo: "Undo",

	/**
	 * Update.
	 *
	 * Indicates that the actor has updated the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-update
	 */
	Update: "Update",

	/**
	 * View.
	 *
	 * Indicates that the actor has viewed the object.
	 * @see https://www.w3.org/TR/activitystreams-vocabulary/#dfn-view
	 */
	View: "View"
} as const;

/**
 * The types concerning Activity.
 * Section 3.1 Activity Types: https://www.w3.org/TR/activitystreams-vocabulary/#activity-types
 */
export type ActivityStreamsTypes = (typeof ActivityStreamsTypes)[keyof typeof ActivityStreamsTypes];
