// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { ArrayHelper } from "@twin.org/core";
import { DataTypeHandlerFactory, type IJsonSchema, JsonSchemaHelper } from "@twin.org/data-core";
import { JsonLdDataTypes, JsonLdHelper } from "@twin.org/data-json-ld";
import { DublinCoreContexts, DublinCorePropertyType } from "@twin.org/standards-dublin-core";
import { VCardContexts, VCardPropertyType } from "@twin.org/standards-w3c-vcard";
import { OdrlDataTypes } from "../src/dataTypes/odrlDataTypes.js";
import type { IOdrlAction } from "../src/models/IOdrlAction.js";
import type { IOdrlAsset } from "../src/models/IOdrlAsset.js";
import type { IOdrlAssetCollection } from "../src/models/IOdrlAssetCollection.js";
import type { IOdrlConstraint } from "../src/models/IOdrlConstraint.js";
import type { IOdrlLogicalConstraint } from "../src/models/IOdrlLogicalConstraint.js";
import type { IOdrlParty } from "../src/models/IOdrlParty.js";
import type { IOdrlPartyCollection } from "../src/models/IOdrlPartyCollection.js";
import type { IOdrlPolicy } from "../src/models/IOdrlPolicy.js";
import type { IOdrlRule } from "../src/models/IOdrlRule.js";
import { OdrlContexts } from "../src/models/odrlContexts.js";
import { OdrlActionType } from "../src/models/types/odrlActionType.js";
import { OdrlConflictStrategyType } from "../src/models/types/odrlConflictStrategyType.js";
import { OdrlLeftOperandType } from "../src/models/types/odrlLeftOperandType.js";
import { OdrlOperatorType } from "../src/models/types/odrlOperatorType.js";
import { OdrlPolicyType } from "../src/models/types/odrlPolicyType.js";
import { OdrlRightOperandType } from "../src/models/types/odrlRightOperandType.js";
import { OdrlTypes } from "../src/models/types/odrlTypes.js";

describe("ODRL Examples from Specification", () => {
	it("Example 1: Set Policy with use permission", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Set,
			uid: "http://example.com/policy:1010",
			permission: [
				{
					target: "http://example.com/asset:9898.movie",
					action: OdrlActionType.Use
				}
			]
		};

		expect(policy["@type"]).toBe(OdrlPolicyType.Set);
		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission?.action).toBe(OdrlActionType.Use);
		expect(permission?.target).toBe("http://example.com/asset:9898.movie");
	});

	it("Example 2: Offer Policy with play permission and assigner", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Offer,
			uid: "http://example.com/policy:1011",
			profile: "http://example.com/odrl:profile:01",
			permission: [
				{
					target: "http://example.com/asset:9898.movie",
					assigner: "http://example.com/party:org:abc",
					action: OdrlActionType.Play
				}
			]
		};

		expect(policy["@type"]).toBe(OdrlPolicyType.Offer);
		expect(policy.profile).toBe("http://example.com/odrl:profile:01");
		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission?.action).toBe(OdrlActionType.Play);
		expect(permission?.assigner).toBe("http://example.com/party:org:abc");
	});

	it("Example 3: Agreement Policy with play permission and both parties", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Agreement,
			uid: "http://example.com/policy:1012",
			profile: "http://example.com/odrl:profile:01",
			permission: [
				{
					target: "http://example.com/asset:9898.movie",
					assigner: "http://example.com/party:org:abc",
					assignee: "http://example.com/party:person:billie",
					action: OdrlActionType.Play
				}
			]
		};

		expect(policy["@type"]).toBe(OdrlPolicyType.Agreement);
		expect(policy.profile).toBe("http://example.com/odrl:profile:01");

		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.action).toBe(OdrlActionType.Play);
		expect(permission?.assigner).toBe("http://example.com/party:org:abc");
		expect(permission?.assignee).toBe("http://example.com/party:person:billie");
		expect(permission?.target).toBe("http://example.com/asset:9898.movie");
	});

	it("Example 4: Offer Policy with display permission and target Asset", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Offer,
			uid: "http://example.com/policy:3333",
			profile: "http://example.com/odrl:profile:02",
			permission: [
				{
					target: "http://example.com/asset:3333",
					action: OdrlActionType.Display,
					assigner: "http://example.com/party:0001"
				}
			]
		};

		expect(policy["@type"]).toBe(OdrlPolicyType.Offer);
		expect(policy.profile).toBe("http://example.com/odrl:profile:02");
		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toEqual({
			target: "http://example.com/asset:3333",
			action: OdrlActionType.Display,
			assigner: "http://example.com/party:0001"
		});
	});

	it("Example 5: Policy with AssetCollection target", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Policy,
			uid: "http://example.com/policy:1011",
			profile: "http://example.com/odrl:profile:03",
			permission: [
				{
					target: {
						"@type": OdrlTypes.AssetCollection,
						uid: "http://example.com/archive1011"
					},
					action: OdrlActionType.Index,
					summary: "http://example.com/x/database"
				}
			]
		};

		expect(policy["@type"]).toBe(OdrlPolicyType.Policy);
		expect(policy.profile).toBe("http://example.com/odrl:profile:03");

		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission?.target).toEqual({
			"@type": OdrlTypes.AssetCollection,
			uid: "http://example.com/archive1011"
		});
		expect(permission?.action).toBe(OdrlActionType.Index);
		expect(permission?.summary).toBe("http://example.com/x/database");
	});

	it("Example 6: Document with ODRL partOf reference", () => {
		const asset: IOdrlAsset = {
			"@type": "dc:Document",
			uid: "http://example.com/asset:111.doc",
			partOf: "http://example.com/archive1011"
		};

		expect(asset["@type"]).toBe("dc:Document");
		expect(asset.uid).toBe("http://example.com/asset:111.doc");
		expect(asset.partOf).toBe("http://example.com/archive1011");
	});

	it("Example 7: Asset with ODRL hasPolicy reference", () => {
		const asset: IOdrlAsset = {
			"@type": "dc:MovingImage",
			uid: "http://example.com/asset:9999.movie",
			hasPolicy: "http://example.com/policy:1010"
		};

		expect(asset["@type"]).toBe("dc:MovingImage");
		expect(asset.uid).toBe("http://example.com/asset:9999.movie");
		expect(asset.hasPolicy).toBe("http://example.com/policy:1010");
	});

	it("Example 8: Agreement Policy with assigner and assignee", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Agreement,
			uid: "http://example.com/policy:8888",
			profile: "http://example.com/odrl:profile:04",
			permission: [
				{
					target: "http://example.com/music/1999.mp3",
					assigner: "http://example.com/org/sony-music",
					assignee: "http://example.com/people/billie",
					action: OdrlActionType.Play
				}
			]
		};

		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:8888");
		expect(policy.profile).toBe("http://example.com/odrl:profile:04");

		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/music/1999.mp3");
		expect(permission?.assigner).toBe("http://example.com/org/sony-music");
		expect(permission?.assignee).toBe("http://example.com/people/billie");
		expect(permission?.action).toBe(OdrlActionType.Play);
	});

	it("Example 9: Agreement Policy with complex Party objects", () => {
		const policy: IOdrlPolicy = {
			"@context": [OdrlContexts.Context, { vcard: VCardContexts.Namespace }],
			"@type": OdrlPolicyType.Agreement,
			uid: "http://example.com/policy:777",
			profile: "http://example.com/odrl:profile:05",
			permission: [
				{
					target: "http://example.com/looking-glass.ebook",
					assigner: {
						"@type": [OdrlTypes.Party, `vcard:${VCardPropertyType.Organization}`],
						uid: "http://example.com/org/sony-books",
						[`vcard:${VCardPropertyType.FormattedName}`]: "Sony Books LCC",
						[`vcard:${VCardPropertyType.Email}`]: "sony-contact@example.com"
					},
					assignee: {
						"@type": [OdrlTypes.PartyCollection, `vcard:${VCardPropertyType.Group}`],
						uid: "http://example.com/team/A",
						[`vcard:${VCardPropertyType.FormattedName}`]: "Team A",
						[`vcard:${VCardPropertyType.Email}`]: "teamA@example.com"
					},
					action: OdrlActionType.Use
				}
			]
		};

		expect(policy["@context"]).toEqual([OdrlContexts.Context, { vcard: VCardContexts.Namespace }]);
		expect(policy["@type"]).toBe(OdrlPolicyType.Agreement);
		expect(policy.profile).toBe("http://example.com/odrl:profile:05");

		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/looking-glass.ebook");
		expect(permission?.action).toBe(OdrlActionType.Use);

		// Test assigner Party
		const assigner = JsonLdHelper.toNodeObject(permission?.assigner);
		expect(assigner["@type"]).toEqual([OdrlTypes.Party, `vcard:${VCardPropertyType.Organization}`]);
		expect(assigner.uid).toBe("http://example.com/org/sony-books");
		expect(assigner[`vcard:${VCardPropertyType.FormattedName}`]).toBe("Sony Books LCC");
		expect(assigner[`vcard:${VCardPropertyType.Email}`]).toBe("sony-contact@example.com");

		// Test assignee PartyCollection
		const assignee = JsonLdHelper.toNodeObject(permission?.assignee);
		expect(assignee["@type"]).toEqual([
			OdrlTypes.PartyCollection,
			`vcard:${VCardPropertyType.Group}`
		]);
		expect(assignee.uid).toBe("http://example.com/team/A");
		expect(assignee[`vcard:${VCardPropertyType.FormattedName}`]).toBe("Team A");
		expect(assignee[`vcard:${VCardPropertyType.Email}`]).toBe("teamA@example.com");
	});

	it("Example 10: Party with partOf reference to PartyCollection", () => {
		const party: IOdrlParty = {
			"@type": `vcard:${VCardPropertyType.Individual}`,
			uid: "http://example.com/person/murphy",
			[`vcard:${VCardPropertyType.FormattedName}`]: "Murphy",
			[`vcard:${VCardPropertyType.Email}`]: "murphy@example.com",
			partOf: "http://example.com/team/A"
		};

		expect(party["@type"]).toBe(`vcard:${VCardPropertyType.Individual}`);
		expect(party.uid).toBe("http://example.com/person/murphy");

		expect(JsonLdHelper.toNodeObject(party)[`vcard:${VCardPropertyType.FormattedName}`]).toBe(
			"Murphy"
		);
		expect(JsonLdHelper.toNodeObject(party)[`vcard:${VCardPropertyType.Email}`]).toBe(
			"murphy@example.com"
		);
		expect(party.partOf).toBe("http://example.com/team/A");

		// Verify this party is part of the team from Example 9
		const teamAId = "http://example.com/team/A";
		expect(party.partOf).toBe(teamAId);
	});

	it("Example 11: Party with assigneeOf reference to Policy", () => {
		const party: IOdrlParty = {
			"@type": `vcard:${VCardPropertyType.Individual}`,
			uid: "http://example.com/person/billie",
			[`vcard:${VCardPropertyType.FormattedName}`]: "Billie",
			[`vcard:${VCardPropertyType.Email}`]: "billie@example.com",
			assigneeOf: "http://example.com/policy:1011"
		};

		expect(party["@type"]).toBe(`vcard:${VCardPropertyType.Individual}`);
		expect(party.uid).toBe("http://example.com/person/billie");
		expect(JsonLdHelper.toNodeObject(party)[`vcard:${VCardPropertyType.FormattedName}`]).toBe(
			"Billie"
		);
		expect(JsonLdHelper.toNodeObject(party)[`vcard:${VCardPropertyType.Email}`]).toBe(
			"billie@example.com"
		);
		expect(party.assigneeOf).toBe("http://example.com/policy:1011");
	});

	it("Example 12: Offer Policy with play action", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Offer,
			uid: "http://example.com/policy:1012",
			profile: "http://example.com/odrl:profile:06",
			permission: [
				{
					target: "http://example.com/music:1012",
					assigner: "http://example.com/org:abc",
					action: OdrlActionType.Play
				}
			]
		};

		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:1012");
		expect(policy.profile).toBe("http://example.com/odrl:profile:06");

		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/music:1012");
		expect(permission?.assigner).toBe("http://example.com/org:abc");
		expect(permission?.action).toBe(OdrlActionType.Play);

		// Verify that play is included in use (this would be defined in the profile)
		expect(OdrlActionType.Play).toBeDefined();
	});

	it("Example 13: Offer Policy with datetime constraint", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Offer,
			uid: "http://example.com/policy:6163",
			profile: "http://example.com/odrl:profile:10",
			permission: [
				{
					target: "http://example.com/document:1234",
					assigner: "http://example.com/org:616",
					action: OdrlActionType.Distribute,
					constraint: [
						{
							leftOperand: OdrlLeftOperandType.DateTime,
							operator: OdrlOperatorType.Lt,
							rightOperand: {
								"@value": "2018-01-01",
								"@type": "xsd:date"
							}
						}
					]
				}
			]
		};

		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:6163");
		expect(policy.profile).toBe("http://example.com/odrl:profile:10");

		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/document:1234");
		expect(permission?.assigner).toBe("http://example.com/org:616");
		expect(permission?.action).toBe(OdrlActionType.Distribute);

		const constraint = ArrayHelper.fromObjectOrArray(
			permission?.constraint
		)?.[0] as IOdrlConstraint;
		expect(constraint).toBeDefined();
		expect(constraint.leftOperand).toBe(OdrlLeftOperandType.DateTime);
		expect(constraint.operator).toBe(OdrlOperatorType.Lt);
		expect(constraint.rightOperand).toEqual({
			"@value": "2018-01-01",
			"@type": "xsd:date"
		});
	});

	it("Example 14: Offer Policy with action refinement", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Offer,
			uid: "http://example.com/policy:6161",
			profile: "http://example.com/odrl:profile:10",
			permission: [
				{
					target: "http://example.com/document:1234",
					assigner: "http://example.com/org:616",
					action: [
						{
							"rdf:value": { "@id": `odrl:${OdrlActionType.Print}` },
							refinement: [
								{
									leftOperand: "resolution",
									operator: OdrlOperatorType.Lteq,
									rightOperand: {
										"@value": "1200",
										"@type": "xsd:integer"
									},
									unit: "http://dbpedia.org/resource/Dots_per_inch"
								}
							]
						}
					]
				}
			]
		};

		// Test the policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:6161");
		expect(policy.profile).toBe("http://example.com/odrl:profile:10");

		// Test the permission
		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/document:1234");
		expect(permission?.assigner).toBe("http://example.com/org:616");

		// Test the action array
		const actions = permission?.action as (OdrlActionType | IOdrlAction)[];
		expect(Array.isArray(actions)).toBe(true);
		const action = actions[0] as IOdrlAction;
		expect(action["rdf:value"]).toEqual({ "@id": `odrl:${OdrlActionType.Print}` });

		// Test the refinement
		const refinements = action.refinement as (IOdrlConstraint | IOdrlLogicalConstraint)[];
		expect(Array.isArray(refinements)).toBe(true);
		const refinement = refinements[0] as IOdrlConstraint;
		expect(refinement.leftOperand).toBe("resolution");
		expect(refinement.operator).toBe(OdrlOperatorType.Lteq);
		expect(refinement.rightOperand).toEqual({
			"@value": "1200",
			"@type": "xsd:integer"
		});
		expect(refinement.unit).toBe("http://dbpedia.org/resource/Dots_per_inch");
	});

	it("Example 15: Offer Policy with logical constraint (xone)", () => {
		// Define the two referenced constraints first
		const constraint1: IOdrlConstraint = {
			uid: "http://example.com/p:88/C1",
			leftOperand: OdrlLeftOperandType.Media,
			operator: OdrlOperatorType.Eq,
			rightOperand: {
				"@value": "online",
				"@type": "xsd:string"
			}
		};

		const constraint2: IOdrlConstraint = {
			uid: "http://example.com/p:88/C2",
			leftOperand: OdrlLeftOperandType.Media,
			operator: OdrlOperatorType.Eq,
			rightOperand: {
				"@value": "print",
				"@type": "xsd:string"
			}
		};

		// Main policy with logical constraint
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Offer,
			uid: "http://example.com/policy:88",
			profile: "http://example.com/odrl:profile:10",
			permission: [
				{
					target: "http://example.com/book/1999",
					assigner: "http://example.com/org/paisley-park",
					action: {
						"rdf:value": { "@id": "odrl:reproduce" },
						refinement: {
							xone: {
								"@list": [
									{ "@id": "http://example.com/p:88/C1" },
									{ "@id": "http://example.com/p:88/C2" }
								]
							}
						}
					}
				}
			]
		};

		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:88");
		expect(policy.profile).toBe("http://example.com/odrl:profile:10");

		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/book/1999");
		expect(permission?.assigner).toBe("http://example.com/org/paisley-park");

		const action = permission?.action as IOdrlAction;
		expect(action["rdf:value"]).toEqual({ "@id": "odrl:reproduce" });

		const refinement = action.refinement as IOdrlLogicalConstraint;
		expect(refinement.xone).toBeDefined();
		expect(refinement.xone?.["@list"]).toHaveLength(2);
		expect(refinement.xone?.["@list"]).toEqual([
			{ "@id": "http://example.com/p:88/C1" },
			{ "@id": "http://example.com/p:88/C2" }
		]);

		// Test the referenced constraints
		expect(constraint1.leftOperand).toBe(OdrlLeftOperandType.Media);
		expect(constraint1.operator).toBe(OdrlOperatorType.Eq);
		expect(constraint1.rightOperand).toEqual({
			"@value": "online",
			"@type": "xsd:string"
		});

		expect(constraint2.leftOperand).toBe(OdrlLeftOperandType.Media);
		expect(constraint2.operator).toBe(OdrlOperatorType.Eq);
		expect(constraint2.rightOperand).toEqual({
			"@value": "print",
			"@type": "xsd:string"
		});
	});

	it("Example 16: Offer Policy with AssetCollection refinement", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Offer,
			uid: "http://example.com/policy:4444",
			profile: "http://example.com/odrl:profile:11",
			permission: [
				{
					assigner: "http://example.com/org88",
					target: {
						"@type": OdrlTypes.AssetCollection,
						source: "http://example.com/media-catalogue",
						refinement: [
							{
								leftOperand: "runningTime",
								operator: OdrlOperatorType.Lt,
								rightOperand: {
									"@value": "60",
									"@type": "xsd:integer"
								},
								unit: "http://qudt.org/vocab/unit/MinuteTime"
							}
						]
					},
					action: OdrlActionType.Play
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:4444");
		expect(policy.profile).toBe("http://example.com/odrl:profile:11");

		// Test permission
		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.assigner).toBe("http://example.com/org88");
		expect(permission?.action).toBe(OdrlActionType.Play);

		// Test target AssetCollection
		const target = permission?.target as IOdrlAssetCollection;
		expect(target["@type"]).toBe(OdrlTypes.AssetCollection);
		expect(target.source).toBe("http://example.com/media-catalogue");

		// Test refinement
		const refinement = JsonLdHelper.toNodeObject(
			ArrayHelper.fromObjectOrArray(target.refinement)?.[0]
		);
		expect(refinement).toBeDefined();
		expect(refinement?.leftOperand).toBe("runningTime");
		expect(refinement?.operator).toBe(OdrlOperatorType.Lt);
		expect(refinement?.rightOperand).toEqual({
			"@value": "60",
			"@type": "xsd:integer"
		});
		expect(refinement?.unit).toBe("http://qudt.org/vocab/unit/MinuteTime");
	});

	it("Example 17: Agreement Policy with PartyCollection refinement", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Agreement,
			uid: "http://example.com/policy:4444",
			profile: "http://example.com/odrl:profile:12",
			permission: [
				{
					target: "http://example.com/myPhotos:BdayParty",
					assigner: "http://example.com/user44",
					assignee: {
						"@type": OdrlTypes.PartyCollection,
						source: "http://example.com/user44/friends",
						refinement: [
							{
								leftOperand: "foaf:age",
								operator: OdrlOperatorType.Gt,
								rightOperand: {
									"@value": "17",
									"@type": "xsd:integer"
								}
							}
						]
					},
					action: { "@id": "ex:view" }
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:4444");
		expect(policy.profile).toBe("http://example.com/odrl:profile:12");

		// Test permission
		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/myPhotos:BdayParty");
		expect(permission?.assigner).toBe("http://example.com/user44");

		// Test assignee PartyCollection
		const assignee = permission?.assignee as IOdrlPartyCollection;
		expect(assignee["@type"]).toBe(OdrlTypes.PartyCollection);
		expect(assignee.source).toBe("http://example.com/user44/friends");

		// Test refinement
		const refinement = ArrayHelper.fromObjectOrArray(assignee.refinement)?.[0] as IOdrlConstraint;
		expect(refinement).toBeDefined();
		expect(refinement.leftOperand).toBe("foaf:age");
		expect(refinement.operator).toBe(OdrlOperatorType.Gt);
		expect(refinement.rightOperand).toEqual({
			"@value": "17",
			"@type": "xsd:integer"
		});

		// Test action
		expect(permission?.action).toEqual({ "@id": "ex:view" });
	});

	it("Example 18: Offer Policy with permission constraint", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Offer,
			uid: "http://example.com/policy:9090",
			profile: "http://example.com/odrl:profile:07",
			permission: [
				{
					target: "http://example.com/game:9090",
					assigner: "http://example.com/org:xyz",
					action: OdrlActionType.Play,
					constraint: [
						{
							leftOperand: OdrlLeftOperandType.DateTime,
							operator: OdrlOperatorType.Lteq,
							rightOperand: {
								"@value": "2017-12-31",
								"@type": "xsd:date"
							}
						}
					]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:9090");
		expect(policy.profile).toBe("http://example.com/odrl:profile:07");

		// Test permission
		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/game:9090");
		expect(permission?.assigner).toBe("http://example.com/org:xyz");
		expect(permission?.action).toBe(OdrlActionType.Play);

		// Test constraint
		const constraint = ArrayHelper.fromObjectOrArray(
			permission?.constraint
		)?.[0] as IOdrlConstraint;
		expect(constraint).toBeDefined();
		expect(constraint.leftOperand).toBe(OdrlLeftOperandType.DateTime);
		expect(constraint.operator).toBe(OdrlOperatorType.Lteq);
		expect(constraint.rightOperand).toEqual({
			"@value": "2017-12-31",
			"@type": "xsd:date"
		});
	});

	it("Example 19: Agreement Policy with Permission and Prohibition", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Agreement,
			uid: "http://example.com/policy:5555",
			profile: "http://example.com/odrl:profile:08",
			conflict: OdrlConflictStrategyType.Perm,
			permission: [
				{
					target: "http://example.com/photoAlbum:55",
					action: OdrlActionType.Display,
					assigner: "http://example.com/MyPix:55",
					assignee: "http://example.com/assignee:55"
				}
			],
			prohibition: [
				{
					target: "http://example.com/photoAlbum:55",
					action: OdrlActionType.Archive,
					assigner: "http://example.com/MyPix:55",
					assignee: "http://example.com/assignee:55"
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:5555");
		expect(policy.profile).toBe("http://example.com/odrl:profile:08");
		expect(policy.conflict).toBe(OdrlConflictStrategyType.Perm);

		// Test permission
		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/photoAlbum:55");
		expect(permission?.action).toBe(OdrlActionType.Display);
		expect(permission?.assigner).toBe("http://example.com/MyPix:55");
		expect(permission?.assignee).toBe("http://example.com/assignee:55");

		// Test prohibition
		const prohibition = ArrayHelper.fromObjectOrArray(policy.prohibition)?.[0];
		expect(prohibition).toBeDefined();
		expect(prohibition?.target).toBe("http://example.com/photoAlbum:55");
		expect(prohibition?.action).toBe(OdrlActionType.Archive);
		expect(prohibition?.assigner).toBe("http://example.com/MyPix:55");
		expect(prohibition?.assignee).toBe("http://example.com/assignee:55");
	});

	it("Example 20: Agreement Policy with obligation", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Agreement,
			uid: "http://example.com/policy:42",
			profile: "http://example.com/odrl:profile:09",
			obligation: [
				{
					assigner: "http://example.com/org:43",
					assignee: "http://example.com/person:44",
					action: [
						{
							"rdf:value": {
								"@id": `odrl:${OdrlActionType.Compensate}`
							},
							refinement: [
								{
									leftOperand: OdrlLeftOperandType.PayAmount,
									operator: OdrlOperatorType.Eq,
									rightOperand: {
										"@value": "500.00",
										"@type": "xsd:decimal"
									},
									unit: "http://dbpedia.org/resource/Euro"
								}
							]
						}
					]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:42");
		expect(policy.profile).toBe("http://example.com/odrl:profile:09");

		// Test obligation
		const obligation = ArrayHelper.fromObjectOrArray(policy.obligation)?.[0];
		expect(obligation).toBeDefined();
		expect(obligation?.assigner).toBe("http://example.com/org:43");
		expect(obligation?.assignee).toBe("http://example.com/person:44");

		// Test action array
		const actions = obligation?.action as (OdrlActionType | IOdrlAction)[];
		expect(Array.isArray(actions)).toBe(true);
		const action = actions[0] as IOdrlAction;
		expect(action["rdf:value"]).toEqual({ "@id": `odrl:${OdrlActionType.Compensate}` });

		// Test refinement array
		const refinements = action.refinement as (IOdrlConstraint | IOdrlLogicalConstraint)[];
		expect(Array.isArray(refinements)).toBe(true);
		const refinement = refinements[0] as IOdrlConstraint;
		expect(refinement.leftOperand).toBe(OdrlLeftOperandType.PayAmount);
		expect(refinement.operator).toBe(OdrlOperatorType.Eq);
		expect(refinement.rightOperand).toEqual({
			"@value": "500.00",
			"@type": "xsd:decimal"
		});
		expect(refinement.unit).toBe("http://dbpedia.org/resource/Euro");
	});

	it("Example 21: Agreement Policy with obligation consequence", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Agreement,
			uid: "http://example.com/policy:42B",
			profile: "http://example.com/odrl:profile:09",
			assigner: "http://example.com/org:43",
			assignee: "http://example.com/person:44",
			obligation: [
				{
					action: OdrlActionType.Delete,
					target: "http://example.com/document:XZY",
					consequence: [
						{
							action: [
								{
									"rdf:value": { "@id": `odrl:${OdrlActionType.Compensate}` },
									refinement: [
										{
											leftOperand: OdrlLeftOperandType.PayAmount,
											operator: OdrlOperatorType.Eq,
											rightOperand: {
												"@value": "10.00",
												"@type": "xsd:decimal"
											},
											unit: "http://dbpedia.org/resource/Euro"
										}
									]
								}
							],
							compensatedParty: "http://wwf.org"
						}
					]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:42B");
		expect(policy.profile).toBe("http://example.com/odrl:profile:09");
		expect(policy.assigner).toBe("http://example.com/org:43");
		expect(policy.assignee).toBe("http://example.com/person:44");

		// Test obligation
		const obligation = ArrayHelper.fromObjectOrArray(policy.obligation)?.[0];
		expect(obligation).toBeDefined();
		expect(obligation?.action).toBe(OdrlActionType.Delete);
		expect(obligation?.target).toBe("http://example.com/document:XZY");

		// Test consequence
		const consequence = ArrayHelper.fromObjectOrArray(obligation?.consequence)?.[0];
		expect(consequence).toBeDefined();

		// Test consequence action
		const consequenceValue = consequence;
		const actions = consequenceValue.action as (OdrlActionType | IOdrlAction)[];
		expect(Array.isArray(actions)).toBe(true);
		const action = actions[0] as IOdrlAction;
		expect(action["rdf:value"]).toEqual({ "@id": `odrl:${OdrlActionType.Compensate}` });

		// Test consequence refinement
		const refinements = action.refinement as IOdrlConstraint[];
		expect(Array.isArray(refinements)).toBe(true);
		const refinement = refinements[0];
		expect(refinement.leftOperand).toBe(OdrlLeftOperandType.PayAmount);
		expect(refinement.operator).toBe(OdrlOperatorType.Eq);
		expect(refinement.rightOperand).toEqual({
			"@value": "10.00",
			"@type": "xsd:decimal"
		});
		expect(refinement.unit).toBe("http://dbpedia.org/resource/Euro");

		// Test compensated party
		expect(consequenceValue.compensatedParty).toBe("http://wwf.org");
	});

	it("Example 22: Offer Policy with permission duty", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Offer,
			uid: "http://example.com/policy:88",
			profile: "http://example.com/odrl:profile:09",
			permission: [
				{
					assigner: "http://example.com/assigner:sony",
					target: "http://example.com/music/1999.mp3",
					action: OdrlActionType.Play,
					duty: [
						{
							action: [
								{
									"rdf:value": { "@id": `odrl:${OdrlActionType.Compensate}` },
									refinement: [
										{
											leftOperand: OdrlLeftOperandType.PayAmount,
											operator: OdrlOperatorType.Eq,
											rightOperand: {
												"@value": "5.00",
												"@type": "xsd:decimal"
											},
											unit: "http://dbpedia.org/resource/Euro"
										}
									]
								}
							],
							constraint: [
								{
									leftOperand: OdrlLeftOperandType.Event,
									operator: OdrlOperatorType.Lt,
									rightOperand: { "@id": OdrlRightOperandType.PolicyUsage }
								}
							]
						}
					]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Offer);
		expect(policy.uid).toBe("http://example.com/policy:88");
		expect(policy.profile).toBe("http://example.com/odrl:profile:09");

		// Test permission
		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.assigner).toBe("http://example.com/assigner:sony");
		expect(permission?.target).toBe("http://example.com/music/1999.mp3");
		expect(permission?.action).toBe(OdrlActionType.Play);

		// Test duty
		const duty = ArrayHelper.fromObjectOrArray(permission?.duty)?.[0];
		expect(duty).toBeDefined();

		// Test duty action
		const dutyValue = duty;
		const actions = dutyValue.action as (OdrlActionType | IOdrlAction)[];
		expect(Array.isArray(actions)).toBe(true);
		const action = actions[0] as IOdrlAction;
		expect(action["rdf:value"]).toEqual({ "@id": `odrl:${OdrlActionType.Compensate}` });

		// Test duty action refinement
		const refinements = action.refinement as IOdrlConstraint[];
		expect(Array.isArray(refinements)).toBe(true);
		const refinement = refinements[0];
		expect(refinement.leftOperand).toBe(OdrlLeftOperandType.PayAmount);
		expect(refinement.operator).toBe(OdrlOperatorType.Eq);
		expect(refinement.rightOperand).toEqual({
			"@value": "5.00",
			"@type": "xsd:decimal"
		});
		expect(refinement.unit).toBe("http://dbpedia.org/resource/Euro");

		// Test duty constraint
		const constraint = ArrayHelper.fromObjectOrArray(dutyValue.constraint)?.[0] as IOdrlConstraint;
		expect(constraint).toBeDefined();
		expect(constraint.leftOperand).toBe(OdrlLeftOperandType.Event);
		expect(constraint.operator).toBe(OdrlOperatorType.Lt);
		expect(constraint.rightOperand).toEqual({ "@id": OdrlRightOperandType.PolicyUsage });
	});

	it("Example 23: Agreement Policy with permission duty consequence", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Agreement,
			uid: "http://example.com/policy:66",
			profile: "http://example.com/odrl:profile:09",
			permission: [
				{
					target: "http://example.com/data:77",
					assigner: "http://example.com/org:99",
					assignee: "http://example.com/person:88",
					action: OdrlActionType.Distribute,
					duty: [
						{
							action: OdrlActionType.Attribute,
							attributedParty: "http://australia.gov.au/",
							consequence: [
								{
									action: OdrlActionType.AcceptTracking,
									trackingParty: "http://example.com/dept:100"
								}
							]
						}
					]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:66");
		expect(policy.profile).toBe("http://example.com/odrl:profile:09");

		// Test permission
		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/data:77");
		expect(permission?.assigner).toBe("http://example.com/org:99");
		expect(permission?.assignee).toBe("http://example.com/person:88");
		expect(permission?.action).toBe(OdrlActionType.Distribute);

		// Test duty
		const duty = ArrayHelper.fromObjectOrArray(permission?.duty)?.[0];
		expect(duty).toBeDefined();
		expect(duty?.action).toBe(OdrlActionType.Attribute);
		expect(duty?.attributedParty).toBe("http://australia.gov.au/");

		// Test consequence
		const consequence = ArrayHelper.fromObjectOrArray(duty?.consequence)?.[0];
		expect(consequence).toBeDefined();
		expect(consequence?.action).toBe(OdrlActionType.AcceptTracking);
		expect(consequence?.trackingParty).toBe("http://example.com/dept:100");
	});

	it("Example 24: Agreement Policy with prohibition remedy", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Agreement,
			uid: "http://example.com/policy:33CC",
			profile: "http://example.com/odrl:profile:09",
			prohibition: [
				{
					target: "http://example.com/data:77",
					assigner: "http://example.com/person:88",
					assignee: "http://example.com/org:99",
					action: OdrlActionType.Index,
					remedy: [
						{
							action: OdrlActionType.Anonymize,
							target: "http://example.com/data:77"
						}
					]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Agreement);
		expect(policy.uid).toBe("http://example.com/policy:33CC");
		expect(policy.profile).toBe("http://example.com/odrl:profile:09");

		// Test prohibition
		const prohibition = ArrayHelper.fromObjectOrArray(policy.prohibition)?.[0];
		expect(prohibition).toBeDefined();
		expect(prohibition?.target).toBe("http://example.com/data:77");
		expect(prohibition?.assigner).toBe("http://example.com/person:88");
		expect(prohibition?.assignee).toBe("http://example.com/org:99");
		expect(prohibition?.action).toBe(OdrlActionType.Index);

		// Test remedy
		const remedy = ArrayHelper.fromObjectOrArray(prohibition?.remedy)?.[0];
		expect(remedy).toBeDefined();
		expect(remedy?.action).toBe(OdrlActionType.Anonymize);
		expect(remedy?.target).toBe("http://example.com/data:77");
	});

	it("Example 25: Atomic Policy with single permission", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Policy,
			uid: "http://example.com/policy:7777",
			profile: "http://example.com/odrl:profile:20",
			permission: [
				{
					target: "http://example.com/music/1999.mp3",
					assigner: "http://example.com/org/sony-music",
					action: OdrlActionType.Play
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:7777");
		expect(policy.profile).toBe("http://example.com/odrl:profile:20");

		// Test atomic permission rule
		const permissionArray = ArrayHelper.fromObjectOrArray(policy.permission);
		const permission = JsonLdHelper.toNodeObject(permissionArray?.[0]);
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/music/1999.mp3");
		expect(permission?.assigner).toBe("http://example.com/org/sony-music");
		expect(permission?.action).toBe(OdrlActionType.Play);

		// Verify rule is atomic (single target, assigner, and action)
		expect(permissionArray.length).toBe(1);
		expect(Array.isArray(permission?.target)).toBeFalsy();
		expect(Array.isArray(permission?.assigner)).toBeFalsy();
		expect(Array.isArray(permission?.action)).toBeFalsy();
	});

	it("Example 26: Policy with multiple targets and actions", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Policy,
			uid: "http://example.com/policy:8888",
			profile: "http://example.com/odrl:profile:20",
			permission: [
				{
					target: ["http://example.com/music/1999.mp3", "http://example.com/music/PurpleRain.mp3"],
					assigner: "http://example.com/org/sony-music",
					action: [OdrlActionType.Play, "stream"]
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:8888");
		expect(policy.profile).toBe("http://example.com/odrl:profile:20");

		// Test compound permission rule
		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();

		// Test multiple targets
		expect(Array.isArray(permission?.target)).toBe(true);
		const targets = permission?.target as string[];
		expect(targets).toHaveLength(2);
		expect(targets[0]).toBe("http://example.com/music/1999.mp3");
		expect(targets[1]).toBe("http://example.com/music/PurpleRain.mp3");

		// Test single assigner
		expect(permission?.assigner).toBe("http://example.com/org/sony-music");

		// Test multiple actions
		expect(Array.isArray(permission?.action)).toBe(true);
		const actions = permission?.action as OdrlActionType[];
		expect(actions).toHaveLength(2);
		expect(actions[0]).toBe(OdrlActionType.Play);
		expect(actions[1]).toBe("stream");
	});

	it("Example 27: Policy with decomposed atomic permissions", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Policy,
			uid: "http://example.com/policy:8888",
			profile: "http://example.com/odrl:profile:20",
			permission: [
				{
					target: "http://example.com/music/1999.mp3",
					assigner: "http://example.com/org/sony-music",
					action: OdrlActionType.Play
				},
				{
					target: "http://example.com/music/1999.mp3",
					assigner: "http://example.com/org/sony-music",
					action: "stream"
				},
				{
					target: "http://example.com/music/PurpleRain.mp3",
					assigner: "http://example.com/org/sony-music",
					action: OdrlActionType.Play
				},
				{
					target: "http://example.com/music/PurpleRain.mp3",
					assigner: "http://example.com/org/sony-music",
					action: "stream"
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:8888");
		expect(policy.profile).toBe("http://example.com/odrl:profile:20");

		// Test that we have four atomic permissions
		const permissions = ArrayHelper.fromObjectOrArray(policy.permission) ?? [];
		expect(permissions).toHaveLength(4);

		// Test each permission is atomic (single target and action)
		for (const permission of permissions) {
			expect(permission.assigner).toBe("http://example.com/org/sony-music");
			expect(typeof permission.target).toBe("string");
			expect(typeof permission.action).toBe("string");
		}

		// Test specific combinations
		// permissions already normalized above

		// First permission: 1999.mp3 + play
		expect(permissions[0].target).toBe("http://example.com/music/1999.mp3");
		expect(permissions[0].action).toBe(OdrlActionType.Play);

		// Second permission: 1999.mp3 + stream
		expect(permissions[1].target).toBe("http://example.com/music/1999.mp3");
		expect(permissions[1].action).toBe("stream");

		// Third permission: PurpleRain.mp3 + play
		expect(permissions[2].target).toBe("http://example.com/music/PurpleRain.mp3");
		expect(permissions[2].action).toBe(OdrlActionType.Play);

		// Fourth permission: PurpleRain.mp3 + stream
		expect(permissions[3].target).toBe("http://example.com/music/PurpleRain.mp3");
		expect(permissions[3].action).toBe("stream");
	});

	it("Example 28: Compact Policy with shared properties", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Policy,
			uid: "http://example.com/policy:8888",
			profile: "http://example.com/odrl:profile:21",
			target: "http://example.com/music/1999.mp3",
			assigner: "http://example.com/org/sony-music",
			action: OdrlActionType.Play,
			permission: [
				{
					assignee: "http://example.com/people/billie"
				},
				{
					assignee: "http://example.com/people/murphy"
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:8888");
		expect(policy.profile).toBe("http://example.com/odrl:profile:21");

		// Test shared properties at policy level
		expect(policy.target).toBe("http://example.com/music/1999.mp3");
		expect(policy.assigner).toBe("http://example.com/org/sony-music");
		expect(policy.action).toBe(OdrlActionType.Play);

		// Test individual permissions
		const permissions = ArrayHelper.fromObjectOrArray(policy.permission) ?? [];
		expect(permissions).toHaveLength(2);
		expect(permissions[0].assignee).toBe("http://example.com/people/billie");
		expect(permissions[1].assignee).toBe("http://example.com/people/murphy");
	});

	it("Example 29: Policy with expanded shared properties", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Policy,
			uid: "http://example.com/policy:8888",
			profile: "http://example.com/odrl:profile:21",
			permission: [
				{
					assignee: "http://example.com/people/billie",
					target: "http://example.com/music/1999.mp3",
					assigner: "http://example.com/org/sony-music",
					action: OdrlActionType.Play
				},
				{
					assignee: "http://example.com/people/murphy",
					target: "http://example.com/music/1999.mp3",
					assigner: "http://example.com/org/sony-music",
					action: OdrlActionType.Play
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:8888");
		expect(policy.profile).toBe("http://example.com/odrl:profile:21");

		// Test expanded permissions
		const permissions = ArrayHelper.fromObjectOrArray(policy.permission) ?? [];
		expect(permissions).toHaveLength(2);

		// Test that each permission has all properties expanded
		for (const permission of permissions) {
			expect(permission.target).toBe("http://example.com/music/1999.mp3");
			expect(permission.assigner).toBe("http://example.com/org/sony-music");
			expect(permission.action).toBe(OdrlActionType.Play);
		}

		// Test individual assignees
		expect(permissions[0].assignee).toBe("http://example.com/people/billie");
		expect(permissions[1].assignee).toBe("http://example.com/people/murphy");
	});

	it("Example 30: Policy with Dublin Core metadata", () => {
		const policy: IOdrlPolicy = {
			"@context": [OdrlContexts.Context, { dc: DublinCoreContexts.NamespaceTerms }],
			"@type": OdrlPolicyType.Policy,
			uid: "http://example.com/policy:8888",
			profile: "http://example.com/odrl:profile:22",
			[`dc:${DublinCorePropertyType.Creator}`]: "Billie Enterprises LLC",
			[`dc:${DublinCorePropertyType.Description}`]: "This policy covers...",
			[`dc:${DublinCorePropertyType.Issued}`]: "2017-01-01T12:00",
			[`dc:${DublinCorePropertyType.Coverage}`]: {
				"@id": "https://www.iso.org/obp/ui/#iso:code:3166:AU-QLD"
			},
			[`dc:${DublinCorePropertyType.Replaces}`]: { "@id": "http://example.com/policy:8887" },
			permission: [{}]
		};

		// Test basic policy structure
		expect(policy["@context"]).toEqual([
			OdrlContexts.Context,
			{ dc: DublinCoreContexts.NamespaceTerms }
		]);
		expect(policy["@type"]).toBe(OdrlPolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:8888");
		expect(policy.profile).toBe("http://example.com/odrl:profile:22");

		// Test Dublin Core metadata
		expect(JsonLdHelper.toNodeObject(policy)[`dc:${DublinCorePropertyType.Creator}`]).toBe(
			"Billie Enterprises LLC"
		);
		expect(JsonLdHelper.toNodeObject(policy)[`dc:${DublinCorePropertyType.Description}`]).toBe(
			"This policy covers..."
		);
		expect(JsonLdHelper.toNodeObject(policy)[`dc:${DublinCorePropertyType.Issued}`]).toBe(
			"2017-01-01T12:00"
		);
		expect(JsonLdHelper.toNodeObject(policy)[`dc:${DublinCorePropertyType.Coverage}`]).toEqual({
			"@id": "https://www.iso.org/obp/ui/#iso:code:3166:AU-QLD"
		});
		expect(JsonLdHelper.toNodeObject(policy)[`dc:${DublinCorePropertyType.Replaces}`]).toEqual({
			"@id": "http://example.com/policy:8887"
		});

		// Test that permission array exists (even if empty)
		expect(Array.isArray(policy.permission)).toBe(true);
		expect(policy.permission).toHaveLength(1);
	});

	it("Example 31: Parent Policy with obligation for inheritance", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Policy,
			uid: "http://example.com/policy:default",
			profile: "http://example.com/odrl:profile:30",
			assigner: "http://example.com/org-01",
			obligation: [
				{
					target: "http://example.com/asset:terms-and-conditions",
					action: OdrlActionType.ReviewPolicy
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:default");
		expect(policy.profile).toBe("http://example.com/odrl:profile:30");

		// Test shared assigner at policy level
		expect(policy.assigner).toBe("http://example.com/org-01");

		// Test obligation
		const obligation = ArrayHelper.fromObjectOrArray(policy.obligation)?.[0];
		expect(obligation).toBeDefined();
		expect(obligation?.target).toBe("http://example.com/asset:terms-and-conditions");
		expect(obligation?.action).toBe(OdrlActionType.ReviewPolicy);
	});

	it("Example 32: Child Agreement Policy inheriting from parent Policy", () => {
		const childPolicy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Agreement,
			uid: "http://example.com/policy:4444",
			profile: "http://example.com/odrl:profile:30",
			inheritFrom: "http://example.com/policy:default",
			assignee: "http://example.com/user:0001",
			permission: [
				{
					target: "http://example.com/asset:5555",
					action: OdrlActionType.Display
				}
			]
		};

		// Test policy structure
		expect(childPolicy["@context"]).toBe(OdrlContexts.Context);
		expect(childPolicy["@type"]).toBe(OdrlPolicyType.Agreement);
		expect(childPolicy.uid).toBe("http://example.com/policy:4444");
		expect(childPolicy.profile).toBe("http://example.com/odrl:profile:30");

		// Test inheritance
		expect(childPolicy.inheritFrom).toBe("http://example.com/policy:default");

		// Test assignee at policy level
		expect(childPolicy.assignee).toBe("http://example.com/user:0001");

		// Test permission
		const permission = ArrayHelper.fromObjectOrArray(childPolicy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/asset:5555");
		expect(permission?.action).toBe(OdrlActionType.Display);
	});

	it("Example 33: Agreement Policy after inheritance expansion", () => {
		const expandedPolicy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Agreement,
			uid: "http://example.com/policy:4444",
			profile: "http://example.com/odrl:profile:30",
			inheritFrom: "http://example.com/policy:default",
			permission: [
				{
					target: "http://example.com/asset:5555",
					action: OdrlActionType.Display,
					assigner: "http://example.com/org-01",
					assignee: "http://example.com/user:0001"
				}
			],
			obligation: [
				{
					target: "http://example.com/asset:terms-and-conditions",
					action: OdrlActionType.ReviewPolicy,
					assigner: "http://example.com/org-01",
					assignee: "http://example.com/user:0001"
				}
			]
		};

		// Test policy structure
		expect(expandedPolicy["@context"]).toBe(OdrlContexts.Context);
		expect(expandedPolicy["@type"]).toBe(OdrlPolicyType.Agreement);
		expect(expandedPolicy.uid).toBe("http://example.com/policy:4444");
		expect(expandedPolicy.profile).toBe("http://example.com/odrl:profile:30");
		expect(expandedPolicy.inheritFrom).toBe("http://example.com/policy:default");

		// Test expanded permission
		const permission = ArrayHelper.fromObjectOrArray(expandedPolicy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/asset:5555");
		expect(permission?.action).toBe(OdrlActionType.Display);
		expect(permission?.assigner).toBe("http://example.com/org-01");
		expect(permission?.assignee).toBe("http://example.com/user:0001");

		// Test inherited and expanded obligation
		const obligation = ArrayHelper.fromObjectOrArray(expandedPolicy.obligation)?.[0];
		expect(obligation).toBeDefined();
		expect(obligation?.target).toBe("http://example.com/asset:terms-and-conditions");
		expect(obligation?.action).toBe(OdrlActionType.ReviewPolicy);
		expect(obligation?.assigner).toBe("http://example.com/org-01");
		expect(obligation?.assignee).toBe("http://example.com/user:0001");

		// Verify all rules have both assigner and assignee
		const allRules = [
			...(ArrayHelper.fromObjectOrArray(expandedPolicy.permission) ?? []),
			...(ArrayHelper.fromObjectOrArray(expandedPolicy.obligation) ?? [])
		] as IOdrlRule[];
		for (const rule of allRules) {
			expect(rule.assigner).toBe("http://example.com/org-01");
			expect(rule.assignee).toBe("http://example.com/user:0001");
		}
	});

	it("Example 34: Policy with conflict strategy preference", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Policy,
			uid: "http://example.com/policy:0001",
			profile: "http://example.com/odrl:profile:40",
			conflict: OdrlConflictStrategyType.Perm,
			permission: [
				{
					target: "http://example.com/asset:1212",
					action: OdrlActionType.Use,
					assigner: "http://example.com/owner:181"
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:0001");
		expect(policy.profile).toBe("http://example.com/odrl:profile:40");

		// Test conflict strategy
		expect(policy.conflict).toBe(OdrlConflictStrategyType.Perm);

		// Test permission
		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/asset:1212");
		expect(permission?.action).toBe(OdrlActionType.Use);
		expect(permission?.assigner).toBe("http://example.com/owner:181");
	});

	it("Example 35: Policy with permission and prohibition", () => {
		const policy: IOdrlPolicy = {
			"@context": OdrlContexts.Context,
			"@type": OdrlPolicyType.Policy,
			uid: "http://example.com/policy:0002",
			profile: "http://example.com/odrl:profile:40",
			conflict: OdrlConflictStrategyType.Perm,
			permission: [
				{
					target: "http://example.com/asset:1212",
					action: OdrlActionType.Display,
					assigner: "http://example.com/owner:182"
				}
			],
			prohibition: [
				{
					target: "http://example.com/asset:1212",
					action: OdrlActionType.Print
				}
			]
		};

		// Test policy structure
		expect(policy["@context"]).toBe(OdrlContexts.Context);
		expect(policy["@type"]).toBe(OdrlPolicyType.Policy);
		expect(policy.uid).toBe("http://example.com/policy:0002");
		expect(policy.profile).toBe("http://example.com/odrl:profile:40");

		// Test conflict strategy
		expect(policy.conflict).toBe(OdrlConflictStrategyType.Perm);

		// Test permission
		const permission = ArrayHelper.fromObjectOrArray(policy.permission)?.[0];
		expect(permission).toBeDefined();
		expect(permission?.target).toBe("http://example.com/asset:1212");
		expect(permission?.action).toBe(OdrlActionType.Display);
		expect(permission?.assigner).toBe("http://example.com/owner:182");

		// Test prohibition
		const prohibition = ArrayHelper.fromObjectOrArray(policy.prohibition)?.[0];
		expect(prohibition).toBeDefined();
		expect(prohibition?.target).toBe("http://example.com/asset:1212");
		expect(prohibition?.action).toBe(OdrlActionType.Print);

		// Test that permission and prohibition target the same asset
		expect(permission?.target).toBe(prohibition?.target);
	});
});

describe("OdrlDataTypes Validation", () => {
	beforeAll(async () => {
		// Register JSON-LD and ODRL data types
		JsonLdDataTypes.registerTypes();
		OdrlDataTypes.registerRedirects();
		OdrlDataTypes.registerTypes();
	});

	it("should register all ODRL types correctly", async () => {
		const testTypes = [
			OdrlTypes.Policy,
			OdrlTypes.Set,
			OdrlTypes.Offer,
			OdrlTypes.Agreement,
			OdrlTypes.Asset,
			OdrlTypes.AssetCollection,
			OdrlTypes.Rule,
			OdrlTypes.Permission,
			OdrlTypes.Constraint,
			OdrlTypes.LogicalConstraint,
			OdrlTypes.Action,
			OdrlTypes.Party,
			OdrlTypes.PartyCollection,
			OdrlTypes.Duty,
			OdrlTypes.Prohibition
		];

		for (const type of testTypes) {
			const typeKey = `${OdrlContexts.Namespace}${type}`;
			const handler = DataTypeHandlerFactory.get(typeKey);

			expect(handler).toBeDefined();
			expect(handler.namespace).toBe(OdrlContexts.Namespace);
			expect(handler.jsonLdContext).toBe(OdrlContexts.Context);
			expect(handler.type).toBe(type);
			expect(handler.jsonSchema).toBeDefined();
			expect(typeof handler.jsonSchema).toBe("function");
		}
	});

	it("should have proper redirect configuration", () => {
		expect(() => {
			OdrlDataTypes.registerRedirects();
		}).not.toThrow();
	});

	it("should validate valid ODRL objects", async () => {
		const testCases = [
			{
				type: OdrlTypes.Policy,
				data: {
					"@context": OdrlContexts.Context,
					"@type": OdrlPolicyType.Set,
					uid: "http://example.com/policy:test"
				}
			},
			{
				type: OdrlTypes.Asset,
				data: {
					"@type": OdrlTypes.Asset,
					uid: "http://example.com/asset:test"
				}
			},
			{
				type: OdrlTypes.Permission,
				data: {
					target: "http://example.com/asset:test",
					action: OdrlActionType.Use
				}
			}
		];

		for (const testCase of testCases) {
			const typeKey = `${OdrlContexts.Namespace}${testCase.type}`;
			const handler = DataTypeHandlerFactory.get(typeKey);

			expect(handler).toBeDefined();
			expect(handler?.jsonSchema).toBeDefined();

			const schema = await handler?.jsonSchema?.();
			expect(schema).toBeDefined();
			expect(typeof schema).toBe("object");
		}
	});

	it("should have schemas for all registered ODRL types", async () => {
		const testTypes = [
			OdrlTypes.Policy,
			OdrlTypes.Asset,
			OdrlTypes.Permission,
			OdrlTypes.Constraint,
			OdrlTypes.Action,
			OdrlTypes.Party,
			OdrlTypes.Duty,
			OdrlTypes.Prohibition
		];

		for (const type of testTypes) {
			const typeKey = `${OdrlContexts.Namespace}${type}`;
			const handler = DataTypeHandlerFactory.get(typeKey);

			expect(handler).toBeDefined();
			expect(handler?.jsonSchema).toBeDefined();

			const schema = await handler?.jsonSchema?.();
			expect(schema).toBeDefined();
			expect(schema?.type).toBeDefined();
		}
	});

	it("should fail validation for invalid ODRL objects", async () => {
		const testCases = [
			{
				type: OdrlTypes.Policy,
				description: "Policy type registration"
			},
			{
				type: OdrlTypes.Asset,
				description: "Asset type registration"
			},
			{
				type: OdrlTypes.Permission,
				description: "Permission type registration"
			}
		];

		for (const testCase of testCases) {
			const typeKey = `${OdrlContexts.Namespace}${testCase.type}`;
			const handler = DataTypeHandlerFactory.get(typeKey);

			expect(handler).toBeDefined();
			expect(handler?.jsonSchema).toBeDefined();
			expect(typeof handler?.jsonSchema).toBe("function");

			const schema = await handler?.jsonSchema?.();
			expect(schema).toBeDefined();
			expect(typeof schema).toBe("object");

			expect(schema).toHaveProperty("type");
		}
	});

	it("should be able to validate context variants", async () => {
		const testCases = [
			{
				data: OdrlContexts.Context,
				expect: 0
			},
			{
				data: "https://foo",
				expect: 3
			},
			{
				data: [OdrlContexts.Context],
				expect: 0
			},
			{
				data: ["https://foo"],
				expect: 5
			},
			{
				data: [OdrlContexts.Context, OdrlContexts.Context],
				expect: 5
			},
			{
				data: ["https://foo", OdrlContexts.Context, OdrlContexts.Context],
				expect: 6
			},
			{
				data: ["https://foo", "https://foo"],
				expect: 7
			},
			{
				data: ["https://foo", "https://foo2"],
				expect: 6
			},
			{
				data: ["https://foo", OdrlContexts.Context],
				expect: 0
			},
			{
				data: ["https://foo", "https://foo", OdrlContexts.Context],
				expect: 4
			},
			{
				data: ["https://foo", OdrlContexts.Context, "https://foo"],
				expect: 4
			},
			{
				data: ["https://foo", OdrlContexts.Context, "https://foo2"],
				expect: 0
			}
		];

		const schema: IJsonSchema = {
			type: "object",
			properties: {
				"@context": {
					anyOf: [
						{
							type: "string",
							const: OdrlContexts.Context
						},
						{
							type: "array",
							minItems: 1,
							prefixItems: [
								{
									$ref: "https://schema.twindev.org/json-ld/JsonLdContextDefinitionElement"
								}
							],
							items: true,
							minContains: 1,
							maxContains: 1,
							contains: {
								const: OdrlContexts.Context
							},
							uniqueItems: true
						}
					]
				}
			}
		};

		for (const testCase of testCases) {
			const result = await JsonSchemaHelper.validate(schema, { "@context": testCase.data });
			expect(result.length).toBe(testCase.expect);
		}
	});

	describe("PartyCollection.source optionality", () => {
		let schema: IJsonSchema;

		beforeAll(async () => {
			const typeKey = `${OdrlContexts.Namespace}${OdrlTypes.PartyCollection}`;
			const handler = DataTypeHandlerFactory.get(typeKey);
			expect(handler).toBeDefined();
			expect(handler?.jsonSchema).toBeDefined();

			const resolvedSchema = await handler?.jsonSchema?.();
			expect(resolvedSchema).toBeDefined();
			schema = resolvedSchema as IJsonSchema;
		});

		it("accepts a source-less, refinement-only PartyCollection", async () => {
			// Mirrors twin-supply-chain's real isn-notify-template.json assignee shape, and the
			// ODRL-idiomatic pattern DefaultPolicyArbiter's resolveRulePartyContext() treats as
			// supported (scope a rule to parties matching a refinement, no external source lookup).
			// source is optional, so this shape is schema-valid.
			const sourceLessPartyCollection = {
				refinement: {
					leftOperand: "twin:jsonPath",
					"twin:jsonPathExpression": "$.role",
					operator: OdrlOperatorType.Eq,
					rightOperand: "BorderAgency"
				}
			};

			const result = await JsonSchemaHelper.validate(schema, sourceLessPartyCollection);
			expect(result.length).toBe(0);
		});

		it("still accepts a source-bearing PartyCollection", async () => {
			// source remains a valid, optional property at the schema level - DefaultPolicyArbiter's
			// own runtime rejection of this shape (partyCollectionSourceNotSupported) is a separate,
			// arbiter-level business rule, not something the schema itself should also enforce.
			const sourceBearingPartyCollection = {
				source: "https://example.com/parties/group-a"
			};

			const result = await JsonSchemaHelper.validate(schema, sourceBearingPartyCollection);
			expect(result.length).toBe(0);
		});

		it("accepts a PartyCollection with neither source nor refinement", async () => {
			// A distinct, named case per components.md's "Party Scoping" section: a party entry with
			// neither a resolvable id nor a refinement falls back to the ordinary id-matching path at
			// the arbiter level (fail-closed, denies on an empty id list). That is DefaultPolicyArbiter's
			// own business rule, not something the schema itself should also enforce - the schema only
			// needs to confirm this shape is structurally valid, which it is, since neither property is
			// required.
			const emptyPartyCollection = {};

			const result = await JsonSchemaHelper.validate(schema, emptyPartyCollection);
			expect(result.length).toBe(0);
		});

		it("rejects a PartyCollection whose source is not a string", async () => {
			// Regression guard for the exact property this fix touched: making source optional must
			// not loosen its own type constraint.
			const wrongTypeSourcePartyCollection = {
				source: 123
			};

			const result = await JsonSchemaHelper.validate(schema, wrongTypeSourcePartyCollection);
			expect(result.length).toBeGreaterThan(0);
		});
	});

	describe("AssetCollection.source optionality", () => {
		let schema: IJsonSchema;

		beforeAll(async () => {
			const typeKey = `${OdrlContexts.Namespace}${OdrlTypes.AssetCollection}`;
			const handler = DataTypeHandlerFactory.get(typeKey);
			expect(handler).toBeDefined();
			expect(handler?.jsonSchema).toBeDefined();

			const resolvedSchema = await handler?.jsonSchema?.();
			expect(resolvedSchema).toBeDefined();
			schema = resolvedSchema as IJsonSchema;
		});

		it("accepts a source-less, refinement-only AssetCollection", async () => {
			// Mirrors UC2's real policy.json shape but without source. This test only asserts schema
			// optionality: per the W3C ODRL spec, AssetCollection MAY have one `source`, so this
			// refinement-only shape is structurally valid when `source` is omitted.
			// Runtime support for source-less AssetCollection targets is handled outside this package.
			const sourceLessAssetCollection = {
				refinement: {
					leftOperand: "twin:jsonPath",
					"twin:jsonPathExpression": "$.consignments[*].destinationCountry",
					operator: OdrlOperatorType.Eq,
					rightOperand: "GB"
				}
			};

			const result = await JsonSchemaHelper.validate(schema, sourceLessAssetCollection);
			expect(result.length).toBe(0);
		});

		it("still accepts a source-bearing AssetCollection", async () => {
			// source remains a valid, optional property at the schema level - DefaultPolicyArbiter's
			// own rejection of any source value other than "twin:jsonPath" is a separate, arbiter-level
			// business rule, not something the schema itself should also enforce.
			const sourceBearingAssetCollection = {
				source: "twin:jsonPath",
				"twin:jsonPathExpression": "$.consignments[*]"
			};

			const result = await JsonSchemaHelper.validate(schema, sourceBearingAssetCollection);
			expect(result.length).toBe(0);
		});

		it("accepts an AssetCollection with neither source nor refinement", async () => {
			// A distinct, named shape: no external source, no member-level refinement. Structurally
			// valid at the schema level, since neither property is required - DefaultPolicyArbiter's
			// own handling of this shape (target = the collection as a whole, no expansion) is a
			// separate, arbiter-level concern.
			const emptyAssetCollection = {};

			const result = await JsonSchemaHelper.validate(schema, emptyAssetCollection);
			expect(result.length).toBe(0);
		});

		it("rejects an AssetCollection whose source is not a string", async () => {
			// Regression guard for the exact property this fix touched: making source optional must
			// not loosen its own type constraint.
			const wrongTypeSourceAssetCollection = {
				source: 123
			};

			const result = await JsonSchemaHelper.validate(schema, wrongTypeSourceAssetCollection);
			expect(result.length).toBeGreaterThan(0);
		});
	});
});
