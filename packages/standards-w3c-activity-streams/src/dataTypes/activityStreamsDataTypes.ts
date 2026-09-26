// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { JsonLdDataTypes, JsonLdProcessor } from "@twin.org/data-json-ld";
import * as CompiledValidators from "../compiled/validators.js";
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
import ContextTypeSchema from "../schemas/ActivityStreamsContextType.json" with { type: "json" };
import DocumentSchema from "../schemas/ActivityStreamsDocument.json" with { type: "json" };
import EventSchema from "../schemas/ActivityStreamsEvent.json" with { type: "json" };
import GroupSchema from "../schemas/ActivityStreamsGroup.json" with { type: "json" };
import ImageSchema from "../schemas/ActivityStreamsImage.json" with { type: "json" };
import IntransitiveActivitySchema from "../schemas/ActivityStreamsIntransitiveActivity.json" with { type: "json" };
import LinkSchema from "../schemas/ActivityStreamsLink.json" with { type: "json" };
import ActivityStreamsLinkTypesSchema from "../schemas/ActivityStreamsLinkTypes.json" with { type: "json" };
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
import QuestionSchema from "../schemas/ActivityStreamsQuestion.json" with { type: "json" };
import QuestionAnyOfChoiceSchema from "../schemas/ActivityStreamsQuestionAnyOfChoice.json" with { type: "json" };
import QuestionBaseSchema from "../schemas/ActivityStreamsQuestionBase.json" with { type: "json" };
import QuestionNeitherChoiceSchema from "../schemas/ActivityStreamsQuestionNeitherChoice.json" with { type: "json" };
import QuestionOneOfChoiceSchema from "../schemas/ActivityStreamsQuestionOneOfChoice.json" with { type: "json" };
import RelationshipSchema from "../schemas/ActivityStreamsRelationship.json" with { type: "json" };
import ServiceSchema from "../schemas/ActivityStreamsService.json" with { type: "json" };
import TombstoneSchema from "../schemas/ActivityStreamsTombstone.json" with { type: "json" };
import ActivityStreamsTypesSchema from "../schemas/ActivityStreamsTypes.json" with { type: "json" };
import VideoSchema from "../schemas/ActivityStreamsVideo.json" with { type: "json" };

/**
 * Handle all the data types for Activity Streams.
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
		// Register the types referenced by the schemas, which are only registered once.
		JsonLdDataTypes.registerTypes();

		const types = [
			{
				type: ActivityStreamsObjectTypes.Object,
				schema: ObjectSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsObject
			},
			{
				type: ActivityStreamsLinkTypes.Link,
				schema: LinkSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsLink
			},
			{
				type: ActivityStreamsLinkTypes.Mention,
				schema: MentionSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsMention
			},
			{
				type: ActivityStreamsTypes.Activity,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Accept,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Add,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Announce,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Arrive,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Block,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Create,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Delete,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Dislike,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Flag,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Follow,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Ignore,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Invite,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Join,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Leave,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Like,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Listen,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Move,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Offer,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Question,
				schema: QuestionSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsQuestion
			},
			{
				type: ActivityStreamsTypes.Reject,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Read,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Remove,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.TentativeReject,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.TentativeAccept,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Travel,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Undo,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.Update,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsTypes.View,
				schema: ActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActivity
			},
			{
				type: ActivityStreamsObjectTypes.IntransitiveActivity,
				schema: IntransitiveActivitySchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsIntransitiveActivity
			},
			{
				type: ActivityStreamsObjectTypes.Collection,
				schema: CollectionSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsCollection
			},
			{
				type: ActivityStreamsObjectTypes.OrderedCollection,
				schema: OrderedCollectionSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsOrderedCollection
			},
			{
				type: ActivityStreamsObjectTypes.CollectionPage,
				schema: CollectionPageSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsCollectionPage
			},
			{
				type: ActivityStreamsObjectTypes.OrderedCollectionPage,
				schema: OrderedCollectionPageSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsOrderedCollectionPage
			},
			{
				type: ActivityStreamsObjectTypes.Actor,
				schema: ActorSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsActor
			},
			{
				type: ActivityStreamsObjectTypes.Application,
				schema: ApplicationSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsApplication
			},
			{
				type: ActivityStreamsObjectTypes.Group,
				schema: GroupSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsGroup
			},
			{
				type: ActivityStreamsObjectTypes.Organization,
				schema: OrganizationSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsOrganization
			},
			{
				type: ActivityStreamsObjectTypes.Person,
				schema: PersonSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsPerson
			},
			{
				type: ActivityStreamsObjectTypes.Service,
				schema: ServiceSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsService
			},
			{
				type: ActivityStreamsObjectTypes.Article,
				schema: ArticleSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsArticle
			},
			{
				type: ActivityStreamsObjectTypes.Audio,
				schema: AudioSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsAudio
			},
			{
				type: ActivityStreamsObjectTypes.Document,
				schema: DocumentSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsDocument
			},
			{
				type: ActivityStreamsObjectTypes.Event,
				schema: EventSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsEvent
			},
			{
				type: ActivityStreamsObjectTypes.Image,
				schema: ImageSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsImage
			},
			{
				type: ActivityStreamsObjectTypes.Note,
				schema: NoteSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsNote
			},
			{
				type: ActivityStreamsObjectTypes.Page,
				schema: PageSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsPage
			},
			{
				type: ActivityStreamsObjectTypes.Place,
				schema: PlaceSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsPlace
			},
			{
				type: ActivityStreamsObjectTypes.Profile,
				schema: ProfileSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsProfile
			},
			{
				type: ActivityStreamsObjectTypes.Relationship,
				schema: RelationshipSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsRelationship
			},
			{
				type: ActivityStreamsObjectTypes.Tombstone,
				schema: TombstoneSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsTombstone
			},
			{
				type: ActivityStreamsObjectTypes.Video,
				schema: VideoSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsVideo
			},
			{
				type: "QuestionAnyOfChoice",
				schema: QuestionAnyOfChoiceSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsQuestionAnyOfChoice
			},
			{
				type: "QuestionBase",
				schema: QuestionBaseSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsQuestionBase
			},
			{
				type: "QuestionNeitherChoice",
				schema: QuestionNeitherChoiceSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsQuestionNeitherChoice
			},
			{
				type: "QuestionOneOfChoice",
				schema: QuestionOneOfChoiceSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsQuestionOneOfChoice
			},
			{
				type: "LinkTypes",
				schema: ActivityStreamsLinkTypesSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsLinkTypes
			},
			{
				type: "ObjectTypes",
				schema: ActivityStreamsObjectTypesSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsObjectTypes
			},
			{
				type: "Types",
				schema: ActivityStreamsTypesSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsTypes
			},
			{
				type: "ContextType",
				schema: ContextTypeSchema,
				compiledValidator: CompiledValidators.CompiledActivityStreamsContextType
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
			types.map(t => ({
				type: `ActivityStreams${t.type}`,
				schema: t.schema,
				compiledValidator: t.compiledValidator
			}))
		);
	}
}
