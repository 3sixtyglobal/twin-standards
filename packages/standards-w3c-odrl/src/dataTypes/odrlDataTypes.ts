// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { OdrlContexts } from "../models/odrlContexts.js";
import { OdrlTypes } from "../models/types/odrlTypes.js";
import OdrlActionSchema from "../schemas/OdrlAction.json" with { type: "json" };
import OdrlAgreementSchema from "../schemas/OdrlAgreement.json" with { type: "json" };
import OdrlAssetSchema from "../schemas/OdrlAsset.json" with { type: "json" };
import OdrlAssetCollectionSchema from "../schemas/OdrlAssetCollection.json" with { type: "json" };
import OdrlConstraintSchema from "../schemas/OdrlConstraint.json" with { type: "json" };
import OdrlDutySchema from "../schemas/OdrlDuty.json" with { type: "json" };
import OdrlLogicalConstraintSchema from "../schemas/OdrlLogicalConstraint.json" with { type: "json" };
import OdrlOfferSchema from "../schemas/OdrlOffer.json" with { type: "json" };
import OdrlPartySchema from "../schemas/OdrlParty.json" with { type: "json" };
import OdrlPartyCollectionSchema from "../schemas/OdrlPartyCollection.json" with { type: "json" };
import OdrlPermissionSchema from "../schemas/OdrlPermission.json" with { type: "json" };
import OdrlPolicySchema from "../schemas/OdrlPolicy.json" with { type: "json" };
import OdrlProhibitionSchema from "../schemas/OdrlProhibition.json" with { type: "json" };
import OdrlRuleSchema from "../schemas/OdrlRule.json" with { type: "json" };
import OdrlSetSchema from "../schemas/OdrlSet.json" with { type: "json" };

/**
 * Handle all the data types for ODRL.
 */
export class OdrlDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(/https?:\/\/www\.w3\.org\/ns\/odrl\/?/, OdrlContexts.JsonLdContext);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		const types = [
			{
				type: OdrlTypes.Policy,
				schema: OdrlPolicySchema
			},
			{
				type: OdrlTypes.Asset,
				schema: OdrlAssetSchema
			},
			{
				type: OdrlTypes.AssetCollection,
				schema: OdrlAssetCollectionSchema
			},
			{
				type: OdrlTypes.Party,
				schema: OdrlPartySchema
			},
			{
				type: OdrlTypes.PartyCollection,
				schema: OdrlPartyCollectionSchema
			},
			{
				type: OdrlTypes.Action,
				schema: OdrlActionSchema
			},
			{
				type: OdrlTypes.Permission,
				schema: OdrlPermissionSchema
			},
			{
				type: OdrlTypes.Prohibition,
				schema: OdrlProhibitionSchema
			},
			{
				type: OdrlTypes.Duty,
				schema: OdrlDutySchema
			},
			{
				type: OdrlTypes.Constraint,
				schema: OdrlConstraintSchema
			},
			{
				type: OdrlTypes.LogicalConstraint,
				schema: OdrlLogicalConstraintSchema
			},
			{
				type: OdrlTypes.Set,
				schema: OdrlSetSchema
			},
			{
				type: OdrlTypes.Offer,
				schema: OdrlOfferSchema
			},
			{
				type: OdrlTypes.Agreement,
				schema: OdrlAgreementSchema
			},
			{
				type: OdrlTypes.Rule,
				schema: OdrlRuleSchema
			}
		];

		DataTypeHelper.registerTypes(OdrlContexts.Namespace, OdrlContexts.JsonLdContext, types);
	}
}
