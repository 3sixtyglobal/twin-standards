// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Is } from "@twin.org/core";
import { DataTypeHelper, JsonSchemaHelper } from "@twin.org/data-core";
import { JsonLdDataTypes } from "@twin.org/data-json-ld";
import { ActivityStreamsDataTypes } from "../src/dataTypes/activityStreamsDataTypes.js";
import { ActivityStreamsContexts } from "../src/models/activityStreamsContexts.js";
import type { IActivityStreamsActivity } from "../src/models/IActivityStreamsActivity.js";
import type { IActivityStreamsCollection } from "../src/models/IActivityStreamsCollection.js";
import type { IActivityStreamsCollectionPage } from "../src/models/IActivityStreamsCollectionPage.js";
import type { IActivityStreamsIntransitiveActivity } from "../src/models/IActivityStreamsIntransitiveActivity.js";
import type { IActivityStreamsLink } from "../src/models/IActivityStreamsLink.js";
import type { IActivityStreamsMention } from "../src/models/IActivityStreamsMention.js";
import type { IActivityStreamsObject } from "../src/models/IActivityStreamsObject.js";
import type { IActivityStreamsOrderedCollection } from "../src/models/IActivityStreamsOrderedCollection.js";
import type { IActivityStreamsOrderedCollectionPage } from "../src/models/IActivityStreamsOrderedCollectionPage.js";
import type { IActivityStreamsPlace } from "../src/models/IActivityStreamsPlace.js";
import type { IActivityStreamsProfile } from "../src/models/IActivityStreamsProfile.js";
import type { IActivityStreamsQuestion } from "../src/models/IActivityStreamsQuestion.js";
import type { IActivityStreamsRelationship } from "../src/models/IActivityStreamsRelationship.js";
import type { IActivityStreamsTombstone } from "../src/models/IActivityStreamsTombstone.js";

describe("standards-w3c-activity-streams", () => {
	beforeAll(() => {
		ActivityStreamsDataTypes.registerTypes();
		JsonLdDataTypes.registerTypes();
	});

	test("Can construct Vocabulary Example 1", async () => {
		const example1: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Object",
			id: "http://www.test.example/object/1",
			name: "A Simple, non-specific object"
		};
		expect(example1).toBeDefined();

		const schema = await DataTypeHelper.getSchemaForType(
			`${ActivityStreamsContexts.Namespace}Object`
		);
		expect(Is.objectValue(schema)).toBeTruthy();
		const failures = await JsonSchemaHelper.validate(schema ?? {}, example1);
		expect(failures.length).toEqual(0);
	});

	test("Can construct Vocabulary Example 2", () => {
		const example2: IActivityStreamsLink = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Link",
			href: "http://example.org/abc",
			hreflang: "en",
			mediaType: "text/html",
			name: "An example link"
		};
		expect(example2).toBeDefined();
	});

	test("Can construct Vocabulary Example 3", () => {
		const example3: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Activity",
			summary: "Sally did something to a note",
			actor: { type: "Person", name: "Sally" },
			object: { type: "Note", name: "A Note" }
		};
		expect(example3).toBeDefined();
	});

	test("Can construct Vocabulary Example 4", () => {
		const example4: IActivityStreamsIntransitiveActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Travel",
			summary: "Sally went to work",
			actor: { type: "Person", name: "Sally" },
			target: { type: "Place", name: "Work" }
		};
		expect(example4).toBeDefined();
	});

	test("Can construct Vocabulary Example 5", () => {
		const example5: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally's notes",
			type: "Collection",
			totalItems: 2,
			items: [
				{ type: "Note", name: "A Simple Note" },
				{ type: "Note", name: "Another Simple Note" }
			]
		};
		expect(example5).toBeDefined();
	});

	test("Can construct Vocabulary Example 6", () => {
		const example6: IActivityStreamsOrderedCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally's notes",
			type: "OrderedCollection",
			totalItems: 2,
			orderedItems: [
				{ type: "Note", name: "A Simple Note" },
				{ type: "Note", name: "Another Simple Note" }
			]
		};
		expect(example6).toBeDefined();
	});

	test("Can construct Vocabulary Example 7", () => {
		const example7: IActivityStreamsCollectionPage = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Page 1 of Sally's notes",
			type: "CollectionPage",
			id: "http://example.org/foo?page=1",
			partOf: "http://example.org/foo",
			items: [
				{ type: "Note", name: "A Simple Note" },
				{ type: "Note", name: "Another Simple Note" }
			]
		};
		expect(example7).toBeDefined();
	});

	test("Can construct Vocabulary Example 8", () => {
		const example8: IActivityStreamsOrderedCollectionPage = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Page 1 of Sally's notes",
			type: "OrderedCollectionPage",
			id: "http://example.org/foo?page=1",
			partOf: "http://example.org/foo",
			orderedItems: [
				{ type: "Note", name: "A Simple Note" },
				{ type: "Note", name: "Another Simple Note" }
			]
		};
		expect(example8).toBeDefined();
	});

	test("Can construct Vocabulary Example 9", () => {
		const example9: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally accepted an invitation to a party",
			type: "Accept",
			actor: { type: "Person", name: "Sally" },
			object: {
				type: "Invite",
				actor: "http://john.example.org",
				object: { type: "Event", name: "Going-Away Party for Jim" }
			}
		};
		expect(example9).toBeDefined();
	});

	test("Can construct Vocabulary Example 10", () => {
		const example10: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally accepted Joe into the club",
			type: "Accept",
			actor: { type: "Person", name: "Sally" },
			object: { type: "Person", name: "Joe" },
			target: { type: "Group", name: "The Club" }
		};
		expect(example10).toBeDefined();
	});

	test("Can construct Vocabulary Example 11", () => {
		const example11: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally tentatively accepted an invitation to a party",
			type: "TentativeAccept",
			actor: { type: "Person", name: "Sally" },
			object: {
				type: "Invite",
				actor: "http://john.example.org",
				object: { type: "Event", name: "Going-Away Party for Jim" }
			}
		};
		expect(example11).toBeDefined();
	});

	test("Can construct Vocabulary Example 12", () => {
		const example12: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally added an object",
			type: "Add",
			actor: { type: "Person", name: "Sally" },
			object: "http://example.org/abc"
		};
		expect(example12).toBeDefined();
	});

	test("Can construct Vocabulary Example 13", () => {
		const example13: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally added a picture of her cat to her cat picture collection",
			type: "Add",
			actor: { type: "Person", name: "Sally" },
			object: {
				type: "Image",
				name: "A picture of my cat",
				url: "http://example.org/img/cat.png"
			},
			origin: { type: "Collection", name: "Camera Roll" },
			target: { type: "Collection", name: "My Cat Pictures" }
		};
		expect(example13).toBeDefined();
	});

	test("Can construct Vocabulary Example 14", () => {
		const example14: IActivityStreamsIntransitiveActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally arrived at work",
			type: "Arrive",
			actor: { type: "Person", name: "Sally" },
			location: { type: "Place", name: "Work" },
			origin: { type: "Place", name: "Home" }
		};
		expect(example14).toBeDefined();
	});

	test("Can construct Vocabulary Example 15", () => {
		const example15: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally created a note",
			type: "Create",
			actor: { type: "Person", name: "Sally" },
			object: { type: "Note", name: "A Simple Note", content: "This is a simple note" }
		};
		expect(example15).toBeDefined();
	});

	test("Can construct Vocabulary Example 16", () => {
		const example16: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally deleted a note",
			type: "Delete",
			actor: { type: "Person", name: "Sally" },
			object: "http://example.org/notes/1",
			origin: { type: "Collection", name: "Sally's Notes" }
		};
		expect(example16).toBeDefined();
	});

	test("Can construct Vocabulary Example 17", () => {
		const example17: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally followed John",
			type: "Follow",
			actor: { type: "Person", name: "Sally" },
			object: { type: "Person", name: "John" }
		};
		expect(example17).toBeDefined();
	});

	test("Can construct Vocabulary Example 18", () => {
		const example18: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally ignored a note",
			type: "Ignore",
			actor: { type: "Person", name: "Sally" },
			object: "http://example.org/notes/1"
		};
		expect(example18).toBeDefined();
	});

	test("Can construct Vocabulary Example 19", () => {
		const example19: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally joined a group",
			type: "Join",
			actor: { type: "Person", name: "Sally" },
			object: { type: "Group", name: "A Simple Group" }
		};
		expect(example19).toBeDefined();
	});

	test("Can construct Vocabulary Example 20", () => {
		const example20: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally left work",
			type: "Leave",
			actor: { type: "Person", name: "Sally" },
			object: { type: "Place", name: "Work" }
		};
		expect(example20).toBeDefined();
	});

	test("Can construct Vocabulary Example 21", () => {
		const example21: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally left a group",
			type: "Leave",
			actor: { type: "Person", name: "Sally" },
			object: { type: "Group", name: "A Simple Group" }
		};
		expect(example21).toBeDefined();
	});

	test("Can construct Vocabulary Example 22", () => {
		const example22: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally liked a note",
			type: "Like",
			actor: { type: "Person", name: "Sally" },
			object: "http://example.org/notes/1"
		};
		expect(example22).toBeDefined();
	});

	test("Can construct Vocabulary Example 23", () => {
		const example23: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally offered 50% off to Lewis",
			type: "Offer",
			actor: { type: "Person", name: "Sally" },
			object: { type: "http://www.types.example/ProductOffer", name: "50% Off!" },
			target: { type: "Person", name: "Lewis" }
		};
		expect(example23).toBeDefined();
	});

	test("Can construct Vocabulary Example 24", () => {
		const example24: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally invited John and Lisa to a party",
			type: "Invite",
			actor: { type: "Person", name: "Sally" },
			object: { type: "Event", name: "A Party" },
			target: [
				{ type: "Person", name: "John" },
				{ type: "Person", name: "Lisa" }
			]
		};
		expect(example24).toBeDefined();
	});

	test("Can construct Vocabulary Example 25", () => {
		const example25: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally rejected an invitation to a party",
			type: "Reject",
			actor: { type: "Person", name: "Sally" },
			object: {
				type: "Invite",
				actor: "http://john.example.org",
				object: { type: "Event", name: "Going-Away Party for Jim" }
			}
		};
		expect(example25).toBeDefined();
	});

	test("Can construct Vocabulary Example 26", () => {
		const example26: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally tentatively rejected an invitation to a party",
			type: "TentativeReject",
			actor: { type: "Person", name: "Sally" },
			object: {
				type: "Invite",
				actor: "http://john.example.org",
				object: { type: "Event", name: "Going-Away Party for Jim" }
			}
		};
		expect(example26).toBeDefined();
	});

	test("Can construct Vocabulary Example 27", () => {
		const example27: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally removed a note from her notes folder",
			type: "Remove",
			actor: { type: "Person", name: "Sally" },
			object: "http://example.org/notes/1",
			target: { type: "Collection", name: "Notes Folder" }
		};
		expect(example27).toBeDefined();
	});

	test("Can construct Vocabulary Example 28", () => {
		const example28: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "The moderator removed Sally from a group",
			type: "Remove",
			actor: { type: "http://example.org/Role", name: "The Moderator" },
			object: { type: "Person", name: "Sally" },
			origin: { type: "Group", name: "A Simple Group" }
		};
		expect(example28).toBeDefined();
	});

	test("Can construct Vocabulary Example 29", () => {
		const example29: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally retracted her offer to John",
			type: "Undo",
			actor: "http://sally.example.org",
			object: {
				type: "Offer",
				actor: "http://sally.example.org",
				object: "http://example.org/posts/1",
				target: "http://john.example.org"
			}
		};
		expect(example29).toBeDefined();
	});

	test("Can construct Vocabulary Example 30", () => {
		const example30: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally updated her note",
			type: "Update",
			actor: { type: "Person", name: "Sally" },
			object: "http://example.org/notes/1"
		};
		expect(example30).toBeDefined();
	});

	test("Can construct Vocabulary Example 31", () => {
		const example31: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally read an article",
			type: "View",
			actor: { type: "Person", name: "Sally" },
			object: { type: "Article", name: "What You Should Know About Activity Streams" }
		};
		expect(example31).toBeDefined();
	});

	test("Can construct Vocabulary Example 32", () => {
		const example32: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally listened to a piece of music",
			type: "Listen",
			actor: { type: "Person", name: "Sally" },
			object: "http://example.org/music.mp3"
		};
		expect(example32).toBeDefined();
	});

	test("Can construct Vocabulary Example 33", () => {
		const example33: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally read a blog post",
			type: "Read",
			actor: {
				type: "Person",
				name: "Sally"
			},
			object: "http://example.org/posts/1"
		};
		expect(example33).toBeDefined();
	});

	test("Can construct Vocabulary Example 34", () => {
		const example34: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally moved a post from List A to List B",
			type: "Move",
			actor: {
				type: "Person",
				name: "Sally"
			},
			object: "http://example.org/posts/1",
			target: {
				type: "Collection",
				name: "List B"
			},
			origin: {
				type: "Collection",
				name: "List A"
			}
		};
		expect(example34).toBeDefined();
	});

	test("Can construct Vocabulary Example 35", () => {
		const example35: IActivityStreamsIntransitiveActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally went home from work",
			type: "Travel",
			actor: {
				type: "Person",
				name: "Sally"
			},
			target: {
				type: "Place",
				name: "Home"
			},
			origin: {
				type: "Place",
				name: "Work"
			}
		};
		expect(example35).toBeDefined();
	});

	test("Can construct Vocabulary Example 36", () => {
		const example36: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally announced that she had arrived at work",
			type: "Announce",
			actor: {
				type: "Person",
				id: "http://sally.example.org",
				name: "Sally"
			},
			object: {
				type: "Arrive",
				actor: "http://sally.example.org",
				location: {
					type: "Place",
					name: "Work"
				}
			}
		};
		expect(example36).toBeDefined();
	});

	test("Can construct Vocabulary Example 37", () => {
		const example37: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally blocked Joe",
			type: "Block",
			actor: "http://sally.example.org",
			object: "http://joe.example.org"
		};
		expect(example37).toBeDefined();
	});

	test("Can construct Vocabulary Example 38", () => {
		const example38: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally flagged an inappropriate note",
			type: "Flag",
			actor: "http://sally.example.org",
			object: {
				type: "Note",
				content: "An inappropriate note"
			}
		};
		expect(example38).toBeDefined();
	});

	test("Can construct Vocabulary Example 39", () => {
		const example39: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally disliked a post",
			type: "Dislike",
			actor: "http://sally.example.org",
			object: "http://example.org/posts/1"
		};
		expect(example39).toBeDefined();
	});

	test("Can construct Vocabulary Example 40", () => {
		const example40: IActivityStreamsQuestion = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Question",
			name: "What is the answer?",
			oneOf: [
				{
					type: "Note",
					name: "Option A"
				},
				{
					type: "Note",
					name: "Option B"
				}
			]
		};
		expect(example40).toBeDefined();
	});

	test("Can construct Vocabulary Example 41", () => {
		const example41: IActivityStreamsQuestion = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Question",
			name: "What is the answer?",
			closed: "2016-05-10T00:00:00Z"
		};
		expect(example41).toBeDefined();
	});

	test("Can construct Vocabulary Example 42", () => {
		const example42: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Application",
			name: "Exampletron 3000"
		};
		expect(example42).toBeDefined();
	});

	test("Can construct Vocabulary Example 43", () => {
		const example43: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Group",
			name: "Big Beards of Austin"
		};
		expect(example43).toBeDefined();
	});

	test("Can construct Vocabulary Example 44", () => {
		const example44: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Organization",
			name: "Example Co."
		};
		expect(example44).toBeDefined();
	});

	test("Can construct Vocabulary Example 45", () => {
		const example45: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Person",
			name: "Sally Smith"
		};
		expect(example45).toBeDefined();
	});

	test("Can construct Vocabulary Example 46", () => {
		const example46: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Service",
			name: "Acme Web Service"
		};
		expect(example46).toBeDefined();
	});

	test("Can construct Vocabulary Example 47", () => {
		const example47: IActivityStreamsRelationship = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally is an acquaintance of John",
			type: "Relationship",
			subject: {
				type: "Person",
				name: "Sally"
			},
			relationship: "http://purl.org/vocab/relationship/acquaintanceOf",
			object: {
				type: "Person",
				name: "John"
			}
		};
		expect(example47).toBeDefined();
	});

	test("Can construct Vocabulary Example 48", () => {
		const example48: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Article",
			name: "What a Crazy Day I Had",
			content: "<div>... you will never believe ...</div>",
			attributedTo: "http://sally.example.org"
		};
		expect(example48).toBeDefined();
	});

	test("Can construct Vocabulary Example 49", () => {
		const example49: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Document",
			name: "4Q Sales Forecast",
			url: "http://example.org/4q-sales-forecast.pdf"
		};
		expect(example49).toBeDefined();
	});

	test("Can construct Vocabulary Example 50", () => {
		const example50: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Audio",
			name: "Interview With A Famous Technologist",
			url: {
				type: "Link",
				href: "http://example.org/podcast.mp3",
				mediaType: "audio/mp3"
			}
		};
		expect(example50).toBeDefined();
	});

	test("Can construct Vocabulary Example 51", () => {
		const example51: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Image",
			name: "Cat Jumping on Wagon",
			url: [
				{
					type: "Link",
					href: "http://example.org/image.jpeg",
					mediaType: "image/jpeg"
				},
				{
					type: "Link",
					href: "http://example.org/image.png",
					mediaType: "image/png"
				}
			]
		};
		expect(example51).toBeDefined();
	});

	test("Can construct Vocabulary Example 52", () => {
		const example52: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Video",
			name: "Puppy Plays With Ball",
			url: "http://example.org/video.mkv",
			duration: "PT2H"
		};
		expect(example52).toBeDefined();
	});

	test("Can construct Vocabulary Example 53", () => {
		const example53: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Note",
			name: "A Word of Warning",
			content: "Looks like it is going to rain today. Bring an umbrella!"
		};
		expect(example53).toBeDefined();
	});

	test("Can construct Vocabulary Example 54", () => {
		const example54: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Page",
			name: "Omaha Weather Report",
			url: "http://example.org/weather-in-omaha.html"
		};
		expect(example54).toBeDefined();
	});

	test("Can construct Vocabulary Example 55", () => {
		const example55: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Event",
			name: "Going-Away Party for Jim",
			startTime: "2014-12-31T23:00:00-08:00",
			endTime: "2015-01-01T06:00:00-08:00"
		};
		expect(example55).toBeDefined();
	});

	test("Can construct Vocabulary Example 56", () => {
		const example56: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Place",
			name: "Work"
		};
		expect(example56).toBeDefined();
	});

	test("Can construct Vocabulary Example 57", () => {
		const example57: IActivityStreamsPlace = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Place",
			name: "Fresno Area",
			latitude: 36.75,
			longitude: 119.7667,
			radius: 15,
			units: "miles"
		};
		expect(example57).toBeDefined();
	});

	test("Can construct Vocabulary Example 58", () => {
		const example58: IActivityStreamsMention = {
			"@context": "https://www.w3.org/ns/activitystreams",
			// The example 58 https://www.w3.org/TR/activitystreams-vocabulary
			// includes a summary property, but Link types do not have a summary property.
			// summary: "Mention of Joe by Carrie in her note",
			type: "Mention",
			href: "http://example.org/joe",
			name: "Joe"
		};
		expect(example58).toBeDefined();
	});

	test("Can construct Vocabulary Example 59", () => {
		const example59: IActivityStreamsProfile = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Profile",
			summary: "Sally's Profile",
			describes: {
				type: "Person",
				name: "Sally Smith"
			}
		};
		expect(example59).toBeDefined();
	});

	test("Can construct Vocabulary Example 60", () => {
		const example60: IActivityStreamsOrderedCollection = {
			type: "OrderedCollection",
			"@context": "https://www.w3.org/ns/activitystreams",
			totalItems: 3,
			name: "Vacation photos 2016",
			orderedItems: [
				{
					type: "Image",
					id: "http://image.example/1"
				},
				{
					type: "Tombstone",
					formerType: "Image",
					id: "http://image.example/2",
					deleted: "2016-03-17T00:00:00Z"
				},
				{
					type: "Image",
					id: "http://image.example/3"
				}
			]
		};
		expect(example60).toBeDefined();
	});

	test("Can construct Vocabulary Example 61", () => {
		const example61: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			name: "Foo",
			id: "http://example.org/foo"
		};
		expect(example61).toBeDefined();
	});

	test("Can construct Vocabulary Example 62", () => {
		const example62: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "A foo",
			type: "http://example.org/Foo"
		};
		expect(example62).toBeDefined();
	});

	test("Can construct Vocabulary Example 63", () => {
		const example63: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally offered the Foo object",
			type: "Offer",
			actor: "http://sally.example.org",
			object: "http://example.org/foo"
		};
		expect(example63).toBeDefined();
	});

	test("Can construct Vocabulary Example 64", () => {
		const example64: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally offered the Foo object",
			type: "Offer",
			actor: {
				type: "Person",
				id: "http://sally.example.org",
				summary: "Sally"
			},
			object: "http://example.org/foo"
		};
		expect(example64).toBeDefined();
	});

	test("Can construct Vocabulary Example 65", () => {
		const example65: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally and Joe offered the Foo object",
			type: "Offer",
			actor: [
				"http://joe.example.org",
				{
					type: "Person",
					id: "http://sally.example.org",
					name: "Sally"
				}
			],
			object: "http://example.org/foo"
		};
		expect(example65).toBeDefined();
	});

	test("Can construct Vocabulary Example 66", () => {
		const example66: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Note",
			name: "Have you seen my cat?",
			attachment: [
				{
					type: "Image",
					content: "This is what he looks like.",
					url: "http://example.org/cat.jpeg"
				}
			]
		};
		expect(example66).toBeDefined();
	});

	test("Can construct Vocabulary Example 67", () => {
		const example67: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Image",
			name: "My cat taking a nap",
			url: "http://example.org/cat.jpeg",
			attributedTo: [
				{
					type: "Person",
					name: "Sally"
				}
			]
		};
		expect(example67).toBeDefined();
	});

	test("Can construct Vocabulary Example 68", () => {
		const example68: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Image",
			name: "My cat taking a nap",
			url: "http://example.org/cat.jpeg",
			attributedTo: [
				"http://joe.example.org",
				{
					type: "Person",
					name: "Sally"
				}
			]
		};
		expect(example68).toBeDefined();
	});

	test("Can construct Vocabulary Example 69", () => {
		const example69: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			name: "Holiday announcement",
			type: "Note",
			content: "Thursday will be a company-wide holiday. Enjoy your day off!",
			audience: {
				type: "http://example.org/Organization",
				name: "ExampleCo LLC"
			}
		};
		expect(example69).toBeDefined();
	});

	test("Can construct Vocabulary Example 70", () => {
		const example70: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally offered a post to John",
			type: "Offer",
			actor: "http://sally.example.org",
			object: "http://example.org/posts/1",
			target: "http://john.example.org",
			bcc: ["http://joe.example.org"]
		};
		expect(example70).toBeDefined();
	});

	test("Can construct Vocabulary Example 71", () => {
		const example71: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally offered a post to John",
			type: "Offer",
			actor: "http://sally.example.org",
			object: "http://example.org/posts/1",
			target: "http://john.example.org",
			bto: ["http://joe.example.org"]
		};
		expect(example71).toBeDefined();
	});

	test("Can construct Vocabulary Example 72", () => {
		const example72: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally offered a post to John",
			type: "Offer",
			actor: "http://sally.example.org",
			object: "http://example.org/posts/1",
			target: "http://john.example.org",
			cc: ["http://joe.example.org"]
		};
		expect(example72).toBeDefined();
	});

	test("Can construct Vocabulary Example 73", () => {
		const example73: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Activities in context 1",
			type: "Collection",
			items: [
				{
					type: "Offer",
					actor: "http://sally.example.org",
					object: "http://example.org/posts/1",
					target: "http://john.example.org",
					context: "http://example.org/contexts/1"
				},
				{
					type: "Like",
					actor: "http://joe.example.org",
					object: "http://example.org/posts/2",
					context: "http://example.org/contexts/1"
				}
			]
		};
		expect(example73).toBeDefined();
	});

	test("Can construct Vocabulary Example 74", () => {
		const example74: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally's blog posts",
			type: "Collection",
			totalItems: 3,
			current: "http://example.org/collection",
			items: [
				"http://example.org/posts/1",
				"http://example.org/posts/2",
				"http://example.org/posts/3"
			]
		};
		expect(example74).toBeDefined();
	});

	test("Can construct Vocabulary Example 75", () => {
		const example75: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally's blog posts",
			type: "Collection",
			totalItems: 3,
			current: {
				type: "Link",
				summary: "Most Recent Items",
				href: "http://example.org/collection"
			},
			items: [
				"http://example.org/posts/1",
				"http://example.org/posts/2",
				"http://example.org/posts/3"
			]
		};
		expect(example75).toBeDefined();
	});

	test("Can construct Vocabulary Example 76", () => {
		const example76: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally's blog posts",
			type: "Collection",
			totalItems: 3,
			first: "http://example.org/collection?page=0"
		};
		expect(example76).toBeDefined();
	});

	test("Can construct Vocabulary Example 77", () => {
		const example77: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally's blog posts",
			type: "Collection",
			totalItems: 3,
			first: {
				type: "Link",
				summary: "First Page",
				href: "http://example.org/collection?page=0"
			}
		};
		expect(example77).toBeDefined();
	});

	test("Can construct Vocabulary Example 78", () => {
		const example78: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "A simple note",
			type: "Note",
			content: "This is all there is.",
			generator: {
				type: "Application",
				name: "Exampletron 3000"
			}
		};
		expect(example78).toBeDefined();
	});

	test("Can construct Vocabulary Example 79", () => {
		const example79: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "A simple note",
			type: "Note",
			content: "This is all there is.",
			icon: {
				type: "Image",
				name: "Note icon",
				url: "http://example.org/note.png",
				width: 16,
				height: 16
			}
		};
		expect(example79).toBeDefined();
	});

	test("Can construct Vocabulary Example 80", () => {
		const example80: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "A simple note",
			type: "Note",
			content: "A simple note",
			icon: [
				{
					type: "Image",
					summary: "Note (16x16)",
					url: "http://example.org/note1.png",
					width: 16,
					height: 16
				},
				{
					type: "Image",
					summary: "Note (32x32)",
					url: "http://example.org/note2.png",
					width: 32,
					height: 32
				}
			]
		};
		expect(example80).toBeDefined();
	});

	test("Can construct Vocabulary Example 81", () => {
		const example81: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			name: "A simple note",
			type: "Note",
			content: "This is all there is.",
			image: {
				type: "Image",
				name: "A Cat",
				url: "http://example.org/cat.png"
			}
		};
		expect(example81).toBeDefined();
	});

	test("Can construct Vocabulary Example 82", () => {
		const example82: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			name: "A simple note",
			type: "Note",
			content: "This is all there is.",
			image: [
				{
					type: "Image",
					name: "Cat 1",
					url: "http://example.org/cat1.png"
				},
				{
					type: "Image",
					name: "Cat 2",
					url: "http://example.org/cat2.png"
				}
			]
		};
		expect(example82).toBeDefined();
	});

	test("Can construct Vocabulary Example 83", () => {
		const example83: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "A simple note",
			type: "Note",
			content: "This is all there is.",
			inReplyTo: {
				summary: "Previous note",
				type: "Note",
				content: "What else is there?"
			}
		};
		expect(example83).toBeDefined();
	});

	test("Can construct Vocabulary Example 84", () => {
		const example84: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "A simple note",
			type: "Note",
			content: "This is all there is.",
			inReplyTo: "http://example.org/posts/1"
		};
		expect(example84).toBeDefined();
	});

	test("Can construct Vocabulary Example 85", () => {
		const example85: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally listened to a piece of music on the Acme Music Service",
			type: "Listen",
			actor: {
				type: "Person",
				name: "Sally"
			},
			object: "http://example.org/foo.mp3",
			instrument: {
				type: "Service",
				name: "Acme Music Service"
			}
		};
		expect(example85).toBeDefined();
	});

	test("Can construct Vocabulary Example 86", () => {
		const example86: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "A collection",
			type: "Collection",
			totalItems: 3,
			last: "http://example.org/collection?page=1"
		};
		expect(example86).toBeDefined();
	});

	test("Can construct Vocabulary Example 87", () => {
		const example87: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "A collection",
			type: "Collection",
			totalItems: 5,
			last: {
				type: "Link",
				summary: "Last Page",
				href: "http://example.org/collection?page=1"
			}
		};
		expect(example87).toBeDefined();
	});

	test("Can construct Vocabulary Example 88", () => {
		const example88: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Person",
			name: "Sally",
			location: {
				name: "Over the Arabian Sea, east of Socotra Island Nature Sanctuary",
				type: "Place",
				longitude: 12.34,
				latitude: 56.78,
				altitude: 90,
				units: "m"
			}
		};
		expect(example88).toBeDefined();
	});

	test("Can construct Vocabulary Example 89", () => {
		const example89: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally's notes",
			type: "Collection",
			totalItems: 2,
			items: [
				{
					type: "Note",
					name: "Reminder for Going-Away Party"
				},
				{
					type: "Note",
					name: "Meeting 2016-11-17"
				}
			]
		};
		expect(example89).toBeDefined();
	});

	test("Can construct Vocabulary Example 90", () => {
		const example90: IActivityStreamsOrderedCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally's notes",
			type: "OrderedCollection",
			totalItems: 2,
			orderedItems: [
				{
					type: "Note",
					name: "Meeting 2016-11-17"
				},
				{
					type: "Note",
					name: "Reminder for Going-Away Party"
				}
			]
		};
		expect(example90).toBeDefined();
	});

	test("Can construct Vocabulary Example 91", () => {
		const example91: IActivityStreamsQuestion = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Question",
			name: "What is the answer?",
			oneOf: [
				{
					type: "Note",
					name: "Option A"
				},
				{
					type: "Note",
					name: "Option B"
				}
			]
		};
		expect(example91).toBeDefined();
	});

	test("Can construct Vocabulary Example 92", () => {
		const example92: IActivityStreamsQuestion = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Question",
			name: "What is the answer?",
			anyOf: [
				{
					type: "Note",
					name: "Option A"
				},
				{
					type: "Note",
					name: "Option B"
				}
			]
		};
		expect(example92).toBeDefined();
	});

	test("Can construct Vocabulary Example 93", () => {
		const example93: IActivityStreamsQuestion = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Question",
			name: "What is the answer?",
			closed: "2016-05-10T00:00:00Z"
		};
		expect(example93).toBeDefined();
	});

	test("Can construct Vocabulary Example 94", () => {
		const example94: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally moved a post from List A to List B",
			type: "Move",
			actor: "http://sally.example.org",
			object: "http://example.org/posts/1",
			target: {
				type: "Collection",
				name: "List B"
			},
			origin: {
				type: "Collection",
				name: "List A"
			}
		};
		expect(example94).toBeDefined();
	});

	test("Can construct Vocabulary Example 95", () => {
		const example95: IActivityStreamsCollectionPage = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Page 2 of Sally's blog posts",
			type: "CollectionPage",
			next: "http://example.org/collection?page=2",
			items: [
				"http://example.org/posts/1",
				"http://example.org/posts/2",
				"http://example.org/posts/3"
			]
		};
		expect(example95).toBeDefined();
	});

	test("Can construct Vocabulary Example 96", () => {
		const example96: IActivityStreamsCollectionPage = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Page 2 of Sally's blog posts",
			type: "CollectionPage",
			next: {
				type: "Link",
				name: "Next Page",
				href: "http://example.org/collection?page=2"
			},
			items: [
				"http://example.org/posts/1",
				"http://example.org/posts/2",
				"http://example.org/posts/3"
			]
		};
		expect(example96).toBeDefined();
	});

	test("Can construct Vocabulary Example 97", () => {
		const example97: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally liked a post",
			type: "Like",
			actor: "http://sally.example.org",
			object: "http://example.org/posts/1"
		};
		expect(example97).toBeDefined();
	});

	test("Can construct Vocabulary Example 98", () => {
		const example98: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Like",
			actor: "http://sally.example.org",
			object: {
				type: "Note",
				content: "A simple note"
			}
		};
		expect(example98).toBeDefined();
	});

	test("Can construct Vocabulary Example 99", () => {
		const example99: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally liked a note",
			type: "Like",
			actor: "http://sally.example.org",
			object: [
				"http://example.org/posts/1",
				{
					type: "Note",
					summary: "A simple note",
					content: "That is a tree."
				}
			]
		};
		expect(example99).toBeDefined();
	});

	test("Can construct Vocabulary Example 100", () => {
		const example100: IActivityStreamsCollectionPage = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Page 1 of Sally's blog posts",
			type: "CollectionPage",
			prev: "http://example.org/collection?page=1",
			items: [
				"http://example.org/posts/1",
				"http://example.org/posts/2",
				"http://example.org/posts/3"
			]
		};
		expect(example100).toBeDefined();
	});

	test("Can construct Vocabulary Example 101", () => {
		const example101: IActivityStreamsCollectionPage = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Page 1 of Sally's blog posts",
			type: "CollectionPage",
			prev: {
				type: "Link",
				name: "Previous Page",
				href: "http://example.org/collection?page=1"
			},
			items: [
				"http://example.org/posts/1",
				"http://example.org/posts/2",
				"http://example.org/posts/3"
			]
		};
		expect(example101).toBeDefined();
	});

	test("Can construct Vocabulary Example 102", () => {
		const example102: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Video",
			name: "Cool New Movie",
			duration: "PT2H30M",
			preview: {
				type: "Video",
				name: "Trailer",
				duration: "PT1M",
				url: {
					href: "http://example.org/trailer.mkv",
					mediaType: "video/mkv"
				}
			}
		};
		expect(example102).toBeDefined();
	});

	test("Can construct Vocabulary Example 103", () => {
		const example103: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally checked that her flight was on time",
			type: ["Activity", "http://www.verbs.example/Check"],
			actor: "http://sally.example.org",
			object: "http://example.org/flights/1",
			result: {
				type: "http://www.types.example/flightstatus",
				name: "On Time"
			}
		};
		expect(example103).toBeDefined();
	});

	test("Can construct Vocabulary Example 104", () => {
		const example104: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "A simple note",
			type: "Note",
			id: "http://www.test.example/notes/1",
			content: "I am fine.",
			replies: {
				type: "Collection",
				totalItems: 1,
				items: [
					{
						summary: "A response to the note",
						type: "Note",
						content: "I am glad to hear it.",
						inReplyTo: "http://www.test.example/notes/1"
					}
				]
			}
		};
		expect(example104).toBeDefined();
	});

	test("Can construct Vocabulary Example 105", () => {
		const example105: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Image",
			summary: "Picture of Sally",
			url: "http://example.org/sally.jpg",
			tag: [
				{
					type: "Person",
					id: "http://sally.example.org",
					name: "Sally"
				}
			]
		};
		expect(example105).toBeDefined();
	});

	test("Can construct Vocabulary Example 106", () => {
		const example106: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally offered the post to John",
			type: "Offer",
			actor: "http://sally.example.org",
			object: "http://example.org/posts/1",
			target: "http://john.example.org"
		};
		expect(example106).toBeDefined();
	});

	test("Can construct Vocabulary Example 107", () => {
		const example107: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally offered the post to John",
			type: "Offer",
			actor: "http://sally.example.org",
			object: "http://example.org/posts/1",
			target: {
				type: "Person",
				name: "John"
			}
		};
		expect(example107).toBeDefined();
	});

	test("Can construct Vocabulary Example 108", () => {
		const example108: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally offered the post to John",
			type: "Offer",
			actor: "http://sally.example.org",
			object: "http://example.org/posts/1",
			target: "http://john.example.org",
			to: ["http://joe.example.org"]
		};
		expect(example108).toBeDefined();
	});

	test("Can construct Vocabulary Example 109", () => {
		const example109: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Document",
			name: "4Q Sales Forecast",
			url: "http://example.org/4q-sales-forecast.pdf"
		};
		expect(example109).toBeDefined();
	});

	test("Can construct Vocabulary Example 110", () => {
		const example110: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Document",
			name: "4Q Sales Forecast",
			url: {
				type: "Link",
				href: "http://example.org/4q-sales-forecast.pdf"
			}
		};
		expect(example110).toBeDefined();
	});

	test("Can construct Vocabulary Example 111", () => {
		const example111: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Document",
			name: "4Q Sales Forecast",
			url: [
				{
					type: "Link",
					href: "http://example.org/4q-sales-forecast.pdf",
					mediaType: "application/pdf"
				},
				{
					type: "Link",
					href: "http://example.org/4q-sales-forecast.html",
					mediaType: "text/html"
				}
			]
		};
		expect(example111).toBeDefined();
	});

	test("Can construct Vocabulary Example 112", () => {
		const example112: IActivityStreamsPlace = {
			"@context": "https://www.w3.org/ns/activitystreams",
			name: "Liu Gu Lu Cun, Pingdu, Qingdao, Shandong, China",
			type: "Place",
			latitude: 36.75,
			longitude: 119.7667,
			accuracy: 94.5
		};
		expect(example112).toBeDefined();
	});

	test("Can construct Vocabulary Example 113", () => {
		const example113: IActivityStreamsPlace = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Place",
			name: "Fresno Area",
			altitude: 15,
			latitude: 36.75,
			longitude: 119.7667,
			units: "miles"
		};
		expect(example113).toBeDefined();
	});

	test("Can construct Vocabulary Example 114", () => {
		const example114: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "A simple note",
			type: "Note",
			content: "A <em>simple</em> note"
		};
		expect(example114).toBeDefined();
	});

	test("Can construct Vocabulary Example 115", () => {
		const example115: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "A simple note",
			type: "Note",
			contentMap: {
				en: "A <em>simple</em> note",
				es: "Una nota <em>sencilla</em>",
				"zh-Hans": "一段<em>简单的</em>笔记"
			}
		};
		expect(example115).toBeDefined();
	});

	test("Can construct Vocabulary Example 116", () => {
		const example116: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "A simple note",
			type: "Note",
			mediaType: "text/markdown",
			content: "## A simple note\nA simple markdown `note`"
		};
		expect(example116).toBeDefined();
	});

	test("Can construct Vocabulary Example 117", () => {
		const example117: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Note",
			name: "A simple note"
		};
		expect(example117).toBeDefined();
	});

	test("Can construct Vocabulary Example 118", () => {
		const example118: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Note",
			nameMap: {
				en: "A simple note",
				es: "Una nota sencilla",
				"zh-Hans": "一段简单的笔记"
			}
		};
		expect(example118).toBeDefined();
	});

	test("Can construct Vocabulary Example 119", () => {
		const example119: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Video",
			name: "Birds Flying",
			url: "http://example.org/video.mkv",
			duration: "PT2H"
		};
		expect(example119).toBeDefined();
	});

	test("Can construct Vocabulary Example 120", () => {
		const example120: IActivityStreamsLink = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Link",
			href: "http://example.org/image.png",
			height: 100,
			width: 100
		};
		expect(example120).toBeDefined();
	});

	test("Can construct Vocabulary Example 121", () => {
		const example121: IActivityStreamsLink = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Link",
			href: "http://example.org/abc",
			mediaType: "text/html",
			name: "Previous"
		};
		expect(example121).toBeDefined();
	});

	test("Can construct Vocabulary Example 122", () => {
		const example122: IActivityStreamsLink = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Link",
			href: "http://example.org/abc",
			hreflang: "en",
			mediaType: "text/html",
			name: "Previous"
		};
		expect(example122).toBeDefined();
	});

	test("Can construct Vocabulary Example 123", () => {
		const example123: IActivityStreamsCollectionPage = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Page 1 of Sally's notes",
			type: "CollectionPage",
			id: "http://example.org/collection?page=1",
			partOf: "http://example.org/collection",
			items: [
				{
					type: "Note",
					name: "Pizza Toppings to Try"
				},
				{
					type: "Note",
					name: "Thought about California"
				}
			]
		};
		expect(example123).toBeDefined();
	});

	test("Can construct Vocabulary Example 124", () => {
		const example124: IActivityStreamsPlace = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Place",
			name: "Fresno Area",
			latitude: 36.75,
			longitude: 119.7667,
			radius: 15,
			units: "miles"
		};
		expect(example124).toBeDefined();
	});

	test("Can construct Vocabulary Example 125", () => {
		const example125: IActivityStreamsPlace = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Place",
			name: "Fresno Area",
			latitude: 36.75,
			longitude: 119.7667,
			radius: 15,
			units: "miles"
		};
		expect(example125).toBeDefined();
	});

	test("Can construct Vocabulary Example 126", () => {
		const example126: IActivityStreamsLink = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Link",
			href: "http://example.org/abc",
			hreflang: "en",
			mediaType: "text/html",
			name: "Next"
		};
		expect(example126).toBeDefined();
	});

	test("Can construct Vocabulary Example 127", () => {
		const example127: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Event",
			name: "Going-Away Party for Jim",
			startTime: "2014-12-31T23:00:00-08:00",
			endTime: "2015-01-01T06:00:00-08:00"
		};
		expect(example127).toBeDefined();
	});

	test("Can construct Vocabulary Example 128", () => {
		const example128: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "A simple note",
			type: "Note",
			content: "Fish swim.",
			published: "2014-12-12T12:12:12Z"
		};
		expect(example128).toBeDefined();
	});

	test("Can construct Vocabulary Example 129", () => {
		const example129: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Event",
			name: "Going-Away Party for Jim",
			startTime: "2014-12-31T23:00:00-08:00",
			endTime: "2015-01-01T06:00:00-08:00"
		};
		expect(example129).toBeDefined();
	});

	test("Can construct Vocabulary Example 130", () => {
		const example130: IActivityStreamsPlace = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Place",
			name: "Fresno Area",
			latitude: 36.75,
			longitude: 119.7667,
			radius: 15,
			units: "miles"
		};
		expect(example130).toBeDefined();
	});

	test("Can construct Vocabulary Example 131", () => {
		const example131: IActivityStreamsLink = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Link",
			href: "http://example.org/abc",
			hreflang: "en",
			mediaType: "text/html",
			name: "Preview",
			rel: ["canonical", "preview"]
		};
		expect(example131).toBeDefined();
	});

	test("Can construct Vocabulary Example 132", () => {
		const example132: IActivityStreamsOrderedCollectionPage = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Page 1 of Sally's notes",
			type: "OrderedCollectionPage",
			startIndex: 0,
			orderedItems: [
				{
					type: "Note",
					name: "Density of Water"
				},
				{
					type: "Note",
					name: "Air Mattress Idea"
				}
			]
		};
		expect(example132).toBeDefined();
	});

	test("Can construct Vocabulary Example 133", () => {
		const example133: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			name: "Cane Sugar Processing",
			type: "Note",
			summary: "A simple <em>note</em>"
		};
		expect(example133).toBeDefined();
	});

	test("Can construct Vocabulary Example 134", () => {
		const example134: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			name: "Cane Sugar Processing",
			type: "Note",
			summaryMap: {
				en: "A simple <em>note</em>",
				es: "Una <em>nota</em> sencilla",
				"zh-Hans": "一段<em>简单的</em>笔记"
			}
		};
		expect(example134).toBeDefined();
	});

	test("Can construct Vocabulary Example 135", () => {
		const example135: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally's notes",
			type: "Collection",
			totalItems: 2,
			items: [
				{
					type: "Note",
					name: "Which Staircase Should I Use"
				},
				{
					type: "Note",
					name: "Something to Remember"
				}
			]
		};
		expect(example135).toBeDefined();
	});

	test("Can construct Vocabulary Example 136", () => {
		const example136: IActivityStreamsPlace = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Place",
			name: "Fresno Area",
			latitude: 36.75,
			longitude: 119.7667,
			radius: 15,
			units: "miles"
		};
		expect(example136).toBeDefined();
	});

	test("Can construct Vocabulary Example 137", () => {
		const example137: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			name: "Cranberry Sauce Idea",
			type: "Note",
			content: "Mush it up so it does not have the same shape as the can.",
			updated: "2014-12-12T12:12:12Z"
		};
		expect(example137).toBeDefined();
	});

	test("Can construct Vocabulary Example 138", () => {
		const example138: IActivityStreamsLink = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Link",
			href: "http://example.org/image.png",
			height: 100,
			width: 100
		};
		expect(example138).toBeDefined();
	});

	test("Can construct Vocabulary Example 139", () => {
		const example139: IActivityStreamsRelationship = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally is an acquaintance of John's",
			type: "Relationship",
			subject: {
				type: "Person",
				name: "Sally"
			},
			relationship: "http://purl.org/vocab/relationship/acquaintanceOf",
			object: {
				type: "Person",
				name: "John"
			}
		};
		expect(example139).toBeDefined();
	});

	test("Can construct Vocabulary Example 140", () => {
		const example140: IActivityStreamsRelationship = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally is an acquaintance of John's",
			type: "Relationship",
			subject: {
				type: "Person",
				name: "Sally"
			},
			relationship: "http://purl.org/vocab/relationship/acquaintanceOf",
			object: {
				type: "Person",
				name: "John"
			}
		};
		expect(example140).toBeDefined();
	});

	test("Can construct Vocabulary Example 141", () => {
		const example141: IActivityStreamsProfile = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally's profile",
			type: "Profile",
			describes: {
				type: "Person",
				name: "Sally"
			},
			url: "http://sally.example.org"
		};
		expect(example141).toBeDefined();
	});

	test("Can construct Vocabulary Example 142", () => {
		const example142: IActivityStreamsTombstone = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "This image has been deleted",
			type: "Tombstone",
			formerType: "Image",
			url: "http://example.org/image/2"
		};
		expect(example142).toBeDefined();
	});

	test("Can construct Vocabulary Example 143", () => {
		const example143: IActivityStreamsTombstone = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "This image has been deleted",
			type: "Tombstone",
			deleted: "2016-05-03T00:00:00Z"
		};
		expect(example143).toBeDefined();
	});

	test("Can construct Vocabulary Example 144", () => {
		const example144: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Activities in Project XYZ",
			type: "Collection",
			items: [
				{
					summary: "Sally created a note",
					type: "Create",
					id: "http://activities.example.com/1",
					actor: "http://sally.example.org",
					object: {
						summary: "A note",
						type: "Note",
						id: "http://notes.example.com/1",
						content: "A note"
					},
					context: {
						type: "http://example.org/Project",
						name: "Project XYZ"
					},
					audience: {
						type: "Group",
						name: "Project XYZ Working Group"
					},
					to: "http://john.example.org"
				},
				{
					summary: "John liked Sally's note",
					type: "Like",
					id: "http://activities.example.com/1",
					actor: "http://john.example.org",
					object: "http://notes.example.com/1",
					context: {
						type: "http://example.org/Project",
						name: "Project XYZ"
					},
					audience: {
						type: "Group",
						name: "Project XYZ Working Group"
					},
					to: "http://sally.example.org"
				}
			]
		};
		expect(example144).toBeDefined();
	});

	test("Can construct Vocabulary Example 145", () => {
		const example145: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally's friends list",
			type: "Collection",
			items: [
				{
					summary: "Sally is influenced by Joe",
					type: "Relationship",
					subject: {
						type: "Person",
						name: "Sally"
					},
					relationship: "http://purl.org/vocab/relationship/influencedBy",
					object: {
						type: "Person",
						name: "Joe"
					}
				},
				{
					summary: "Sally is a friend of Jane",
					type: "Relationship",
					subject: {
						type: "Person",
						name: "Sally"
					},
					relationship: "http://purl.org/vocab/relationship/friendOf",
					object: {
						type: "Person",
						name: "Jane"
					}
				}
			]
		};
		expect(example145).toBeDefined();
	});

	test("Can construct Vocabulary Example 146", () => {
		const example146: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally became a friend of Matt",
			type: "Create",
			actor: "http://sally.example.org",
			object: {
				type: "Relationship",
				subject: "http://sally.example.org",
				relationship: "http://purl.org/vocab/relationship/friendOf",
				object: "http://matt.example.org",
				startTime: "2015-04-21T12:34:56"
			}
		};
		expect(example146).toBeDefined();
	});

	test("Can construct Vocabulary Example 147", () => {
		const example147: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			id: "http://example.org/connection-requests/123",
			summary: "Sally requested to be a friend of John",
			type: "Offer",
			actor: "acct:sally@example.org",
			object: {
				summary: "Sally and John's friendship",
				id: "http://example.org/connections/123",
				type: "Relationship",
				subject: "acct:sally@example.org",
				relationship: "http://purl.org/vocab/relationship/friendOf",
				object: "acct:john@example.org"
			},
			target: "acct:john@example.org"
		};
		expect(example147).toBeDefined();
	});

	test("Can construct Vocabulary Example 148", () => {
		const example148: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally and John's relationship history",
			type: "Collection",
			items: [
				{
					summary: "John accepted Sally's friend request",
					id: "http://example.org/activities/122",
					type: "Accept",
					actor: "acct:john@example.org",
					object: "http://example.org/connection-requests/123",
					inReplyTo: "http://example.org/connection-requests/123",
					context: "http://example.org/connections/123",
					result: [
						"http://example.org/activities/123",
						"http://example.org/activities/124",
						"http://example.org/activities/125",
						"http://example.org/activities/126"
					]
				},
				{
					summary: "John followed Sally",
					id: "http://example.org/activities/123",
					type: "Follow",
					actor: "acct:john@example.org",
					object: "acct:sally@example.org",
					context: "http://example.org/connections/123"
				},
				{
					summary: "Sally followed John",
					id: "http://example.org/activities/124",
					type: "Follow",
					actor: "acct:sally@example.org",
					object: "acct:john@example.org",
					context: "http://example.org/connections/123"
				},
				{
					summary: "John added Sally to his friends list",
					id: "http://example.org/activities/125",
					type: "Add",
					actor: "acct:john@example.org",
					object: "http://example.org/connections/123",
					target: {
						type: "Collection",
						summary: "John's Connections"
					},
					context: "http://example.org/connections/123"
				},
				{
					summary: "Sally added John to her friends list",
					id: "http://example.org/activities/126",
					type: "Add",
					actor: "acct:sally@example.org",
					object: "http://example.org/connections/123",
					target: {
						type: "Collection",
						summary: "Sally's Connections"
					},
					context: "http://example.org/connections/123"
				}
			]
		};
		expect(example148).toBeDefined();
	});

	test("Can construct Vocabulary Example 149", () => {
		const example149: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Place",
			name: "San Francisco, CA"
		};
		expect(example149).toBeDefined();
	});

	test("Can construct Vocabulary Example 150", () => {
		const example150: IActivityStreamsPlace = {
			"@context": "https://www.w3.org/ns/activitystreams",
			type: "Place",
			name: "San Francisco, CA",
			longitude: 122.4167,
			latitude: 37.7833
		};
		expect(example150).toBeDefined();
	});

	test("Can construct Vocabulary Example 151", () => {
		const example151: IActivityStreamsQuestion = {
			"@context": "https://www.w3.org/ns/activitystreams",
			name: "A question about robots",
			id: "http://help.example.org/question/1",
			type: "Question",
			content: "I'd like to build a robot to feed my cat. Should I use Arduino or Raspberry Pi?"
		};
		expect(example151).toBeDefined();
	});

	test("Can construct Vocabulary Example 152", () => {
		const example152: IActivityStreamsQuestion = {
			"@context": "https://www.w3.org/ns/activitystreams",
			id: "http://polls.example.org/question/1",
			name: "A question about robots",
			type: "Question",
			content: "I'd like to build a robot to feed my cat. Which platform is best?",
			oneOf: [
				{
					name: "arduino"
				},
				{
					name: "raspberry pi"
				}
			]
		};
		expect(example152).toBeDefined();
	});

	test("Can construct Vocabulary Example 153", () => {
		const example153: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			attributedTo: "http://sally.example.org",
			inReplyTo: "http://polls.example.org/question/1",
			name: "arduino"
		};
		expect(example153).toBeDefined();
	});

	test("Can construct Vocabulary Example 154", () => {
		const example154: IActivityStreamsQuestion = {
			"@context": "https://www.w3.org/ns/activitystreams",
			name: "A question about robots",
			id: "http://polls.example.org/question/1",
			type: "Question",
			content: "I'd like to build a robot to feed my cat. Which platform is best?",
			oneOf: [
				{
					name: "arduino"
				},
				{
					name: "raspberry pi"
				}
			],
			replies: {
				type: "Collection",
				totalItems: 3,
				items: [
					{
						attributedTo: "http://sally.example.org",
						inReplyTo: "http://polls.example.org/question/1",
						name: "arduino"
					},
					{
						attributedTo: "http://joe.example.org",
						inReplyTo: "http://polls.example.org/question/1",
						name: "arduino"
					},
					{
						attributedTo: "http://john.example.org",
						inReplyTo: "http://polls.example.org/question/1",
						name: "raspberry pi"
					}
				]
			},
			result: {
				type: "Note",
				content: "Users are favoriting &quot;arduino&quot; by a 33% margin."
			}
		};
		expect(example154).toBeDefined();
	});

	test("Can construct Vocabulary Example 155", () => {
		const example155: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "History of John's note",
			type: "Collection",
			items: [
				{
					summary: "Sally liked John's note",
					type: "Like",
					actor: "http://sally.example.org",
					id: "http://activities.example.com/1",
					published: "2015-11-12T12:34:56Z",
					object: {
						summary: "John's note",
						type: "Note",
						id: "http://notes.example.com/1",
						attributedTo: "http://john.example.org",
						content: "My note"
					}
				},
				{
					summary: "Sally disliked John's note",
					type: "Dislike",
					actor: "http://sally.example.org",
					id: "http://activities.example.com/2",
					published: "2015-12-11T21:43:56Z",
					object: {
						summary: "John's note",
						type: "Note",
						id: "http://notes.example.com/1",
						attributedTo: "http://john.example.org",
						content: "My note"
					}
				}
			]
		};
		expect(example155).toBeDefined();
	});

	test("Can construct Vocabulary Example 156", () => {
		const example156: IActivityStreamsCollection = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "History of John's note",
			type: "Collection",
			items: [
				{
					summary: "Sally liked John's note",
					type: "Like",
					id: "http://activities.example.com/1",
					actor: "http://sally.example.org",
					published: "2015-11-12T12:34:56Z",
					object: {
						summary: "John's note",
						type: "Note",
						id: "http://notes.example.com/1",
						attributedTo: "http://john.example.org",
						content: "My note"
					}
				},
				{
					summary: "Sally no longer likes John's note",
					type: "Undo",
					id: "http://activities.example.com/2",
					actor: "http://sally.example.org",
					published: "2015-12-11T21:43:56Z",
					object: "http://activities.example.com/1"
				}
			]
		};
		expect(example156).toBeDefined();
	});

	test("Can construct Vocabulary Example 157", () => {
		const example157: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			name: "A thank-you note",
			type: "Note",
			content:
				"Thank you <a href='http://sally.example.org'>@sally</a>\n      for all your hard work!\n      <a href='http://example.org/tags/givingthanks'>#givingthanks</a>",
			to: {
				name: "Sally",
				type: "Person",
				id: "http://sally.example.org"
			},
			tag: {
				id: "http://example.org/tags/givingthanks",
				name: "#givingthanks"
			}
		};
		expect(example157).toBeDefined();
	});

	test("Can construct Vocabulary Example 158", () => {
		const example158: IActivityStreamsObject = {
			"@context": "https://www.w3.org/ns/activitystreams",
			name: "A thank-you note",
			type: "Note",
			content: "Thank you @sally for all your hard work! #givingthanks",
			tag: [
				{
					type: "Mention",
					href: "http://example.org/people/sally",
					name: "@sally"
				},
				{
					id: "http://example.org/tags/givingthanks",
					name: "#givingthanks"
				}
			]
		};
		expect(example158).toBeDefined();
	});

	test("Can construct Vocabulary Example 159", () => {
		const example159: IActivityStreamsActivity = {
			"@context": "https://www.w3.org/ns/activitystreams",
			summary: "Sally moved the sales figures from Folder A to Folder B",
			type: "Move",
			actor: "http://sally.example.org",
			object: {
				type: "Document",
				name: "sales figures"
			},
			origin: {
				type: "Collection",
				name: "Folder A"
			},
			target: {
				type: "Collection",
				name: "Folder B"
			}
		};
		expect(example159).toBeDefined();
	});

	test("Can construct and validate an activity with reverse order context", async () => {
		const example1: IActivityStreamsActivity = {
			"@context": [
				{
					MyCreate: "https://twin.example.org/MyCreate"
				},
				ActivityStreamsContexts.Context
			],
			type: ["Create", "MyCreate"],
			actor: {
				id: "did:iota:testnet:0x123456"
			},
			object: {
				"@context": "https://vocabulary.uncefact.org/unece-context-D23B.jsonld",
				"@type": "Consignment",
				globalId: "24KEP051219453I002610796"
			},
			updated: new Date().toISOString()
		};

		const schema = await DataTypeHelper.getSchemaForType(
			`${ActivityStreamsContexts.Namespace}Activity`
		);
		expect(Is.objectValue(schema)).toBeTruthy();
		const failures = await JsonSchemaHelper.validate(schema ?? {}, example1);
		if (failures.length > 0) {
			console.error(JSON.stringify(failures, null, 2));
		}
		expect(failures.length).toEqual(0);
	});
});
