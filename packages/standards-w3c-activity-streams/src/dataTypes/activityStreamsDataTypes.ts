// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { ActivityStreamsContexts } from "../models/activityStreamsContexts.js";
import { ActivityStreamsLinkTypes } from "../models/activityStreamsLinkTypes.js";
import { ActivityStreamsObjectTypes } from "../models/activityStreamsObjectTypes.js";
import { ActivityStreamsTypes } from "../models/activityStreamsTypes.js";
import ActivitySchema from "../schemas/ActivityStreamsActivity.json" with { type: "json" };
import ActorSchema from "../schemas/ActivityStreamsActor.json" with { type: "json" };
import ApplicationSchema from "../schemas/ActivityStreamsApplication.json" with { type: "json" };
import ArticleSchema from "../schemas/ActivityStreamsArticle.json" with { type: "json" };
import AudioSchema from "../schemas/ActivityStreamsAudio.json" with { type: "json" };
import CollectionSchema from "../schemas/ActivityStreamsCollection.json" with { type: "json" };
import CollectionPageSchema from "../schemas/ActivityStreamsCollectionPage.json" with { type: "json" };
import DocumentSchema from "../schemas/ActivityStreamsDocument.json" with { type: "json" };
import EventSchema from "../schemas/ActivityStreamsEvent.json" with { type: "json" };
import GroupSchema from "../schemas/ActivityStreamsGroup.json" with { type: "json" };
import ImageSchema from "../schemas/ActivityStreamsImage.json" with { type: "json" };
import IntransitiveActivitySchema from "../schemas/ActivityStreamsIntransitiveActivity.json" with { type: "json" };
import LinkSchema from "../schemas/ActivityStreamsLink.json" with { type: "json" };
import MentionSchema from "../schemas/ActivityStreamsMention.json" with { type: "json" };
import NoteSchema from "../schemas/ActivityStreamsNote.json" with { type: "json" };
import ObjectSchema from "../schemas/ActivityStreamsObject.json" with { type: "json" };
import ActivityStreamsObjectTypesSchema from "../schemas/ActivityStreamsObjectTypes.json" with { type: "json" };
import OrderedCollectionSchema from "../schemas/ActivityStreamsOrderedCollection.json" with { type: "json" };
import OrderedCollectionPageSchema from "../schemas/ActivityStreamsOrderedCollectionPage.json" with { type: "json" };
import OrganizationSchema from "../schemas/ActivityStreamsOrganization.json" with { type: "json" };
import PageSchema from "../schemas/ActivityStreamsPage.json" with { type: "json" };
import PersonSchema from "../schemas/ActivityStreamsPerson.json" with { type: "json" };
import PlaceSchema from "../schemas/ActivityStreamsPlace.json" with { type: "json" };
import ProfileSchema from "../schemas/ActivityStreamsProfile.json" with { type: "json" };
import RelationshipSchema from "../schemas/ActivityStreamsRelationship.json" with { type: "json" };
import ServiceSchema from "../schemas/ActivityStreamsService.json" with { type: "json" };
import TombstoneSchema from "../schemas/ActivityStreamsTombstone.json" with { type: "json" };
import ActivityStreamsTypesSchema from "../schemas/ActivityStreamsTypes.json" with { type: "json" };
import VideoSchema from "../schemas/ActivityStreamsVideo.json" with { type: "json" };

/**
 * Data Type registration for the Data Space Connector
 */
export abstract class ActivityStreamsDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(
			/https:\/\/www.w3.org\/ns\/activitystreams/,
			ActivityStreamsContexts.JsonLdContext
		);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		const types = [
			{
				type: ActivityStreamsObjectTypes.Object,
				schema: ObjectSchema
			},
			{
				type: ActivityStreamsLinkTypes.Link,
				schema: LinkSchema
			},
			{
				type: ActivityStreamsLinkTypes.Mention,
				schema: MentionSchema
			},
			{
				type: ActivityStreamsTypes.Activity,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Accept,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Add,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Announce,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Arrive,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Block,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Create,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Delete,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Dislike,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Flag,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Follow,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Ignore,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Invite,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Join,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Leave,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Like,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Listen,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Move,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Offer,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Question,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Reject,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Read,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Remove,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.TentativeReject,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.TentativeAccept,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Travel,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Undo,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.Update,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsTypes.View,
				schema: ActivitySchema
			},
			{
				type: ActivityStreamsObjectTypes.IntransitiveActivity,
				schema: IntransitiveActivitySchema
			},
			{
				type: ActivityStreamsObjectTypes.Collection,
				schema: CollectionSchema
			},
			{
				type: ActivityStreamsObjectTypes.OrderedCollection,
				schema: OrderedCollectionSchema
			},
			{
				type: ActivityStreamsObjectTypes.CollectionPage,
				schema: CollectionPageSchema
			},
			{
				type: ActivityStreamsObjectTypes.OrderedCollectionPage,
				schema: OrderedCollectionPageSchema
			},
			{
				type: ActivityStreamsObjectTypes.Actor,
				schema: ActorSchema
			},
			{
				type: ActivityStreamsObjectTypes.Application,
				schema: ApplicationSchema
			},
			{
				type: ActivityStreamsObjectTypes.Group,
				schema: GroupSchema
			},
			{
				type: ActivityStreamsObjectTypes.Organization,
				schema: OrganizationSchema
			},
			{
				type: ActivityStreamsObjectTypes.Person,
				schema: PersonSchema
			},
			{
				type: ActivityStreamsObjectTypes.Service,
				schema: ServiceSchema
			},
			{
				type: ActivityStreamsObjectTypes.Article,
				schema: ArticleSchema
			},
			{
				type: ActivityStreamsObjectTypes.Audio,
				schema: AudioSchema
			},
			{
				type: ActivityStreamsObjectTypes.Document,
				schema: DocumentSchema
			},
			{
				type: ActivityStreamsObjectTypes.Event,
				schema: EventSchema
			},
			{
				type: ActivityStreamsObjectTypes.Image,
				schema: ImageSchema
			},
			{
				type: ActivityStreamsObjectTypes.Note,
				schema: NoteSchema
			},
			{
				type: ActivityStreamsObjectTypes.Page,
				schema: PageSchema
			},
			{
				type: ActivityStreamsObjectTypes.Place,
				schema: PlaceSchema
			},
			{
				type: ActivityStreamsObjectTypes.Profile,
				schema: ProfileSchema
			},
			{
				type: ActivityStreamsObjectTypes.Relationship,
				schema: RelationshipSchema
			},
			{
				type: ActivityStreamsObjectTypes.Tombstone,
				schema: TombstoneSchema
			},
			{
				type: ActivityStreamsObjectTypes.Video,
				schema: VideoSchema
			},
			{
				type: "ObjectTypes",
				schema: ActivityStreamsObjectTypesSchema
			},
			{
				type: "Types",
				schema: ActivityStreamsTypesSchema
			}
		];

		DataTypeHelper.registerTypes(
			ActivityStreamsContexts.Namespace,
			ActivityStreamsContexts.JsonLdContext,
			types
		);

		DataTypeHelper.registerTypes(
			ActivityStreamsContexts.JsonSchemaNamespace,
			ActivityStreamsContexts.JsonLdContext,
			types.map(t => ({ type: `ActivityStreams${t.type}`, schema: t.schema }))
		);
	}
}
