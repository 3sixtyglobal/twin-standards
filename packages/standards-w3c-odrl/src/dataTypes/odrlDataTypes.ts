// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import type { IJsonSchema } from "@twin.org/data-core";
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
		JsonLdProcessor.addRedirect(
			/https?:\/\/www\.w3\.org\/ns\/odrl\/?/,
			OdrlContexts.ContextRedirect
		);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(`${OdrlContexts.Namespace}${OdrlTypes.Policy}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Policy,
			jsonSchema: async () => OdrlPolicySchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.Namespace}${OdrlTypes.Asset}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Asset,
			jsonSchema: async () => OdrlAssetSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(
			`${OdrlContexts.Namespace}${OdrlTypes.AssetCollection}`,
			() => ({
				context: OdrlContexts.ContextRoot,
				type: OdrlTypes.AssetCollection,
				jsonSchema: async () => OdrlAssetCollectionSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(`${OdrlContexts.Namespace}${OdrlTypes.Party}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Party,
			jsonSchema: async () => OdrlPartySchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(
			`${OdrlContexts.Namespace}${OdrlTypes.PartyCollection}`,
			() => ({
				context: OdrlContexts.ContextRoot,
				type: OdrlTypes.PartyCollection,
				jsonSchema: async () => OdrlPartyCollectionSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(`${OdrlContexts.Namespace}${OdrlTypes.Action}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Action,
			jsonSchema: async () => OdrlActionSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.Namespace}${OdrlTypes.Permission}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Permission,
			jsonSchema: async () => OdrlPermissionSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.Namespace}${OdrlTypes.Prohibition}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Prohibition,
			jsonSchema: async () => OdrlProhibitionSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.Namespace}${OdrlTypes.Duty}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Duty,
			jsonSchema: async () => OdrlDutySchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.Namespace}${OdrlTypes.Constraint}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Constraint,
			jsonSchema: async () => OdrlConstraintSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(
			`${OdrlContexts.Namespace}${OdrlTypes.LogicalConstraint}`,
			() => ({
				context: OdrlContexts.ContextRoot,
				type: OdrlTypes.LogicalConstraint,
				jsonSchema: async () => OdrlLogicalConstraintSchema as IJsonSchema
			})
		);

		DataTypeHandlerFactory.register(`${OdrlContexts.Namespace}${OdrlTypes.Set}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Set,
			jsonSchema: async () => OdrlSetSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.Namespace}${OdrlTypes.Offer}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Offer,
			jsonSchema: async () => OdrlOfferSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.Namespace}${OdrlTypes.Agreement}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Agreement,
			jsonSchema: async () => OdrlAgreementSchema as IJsonSchema
		}));

		DataTypeHandlerFactory.register(`${OdrlContexts.Namespace}${OdrlTypes.Rule}`, () => ({
			context: OdrlContexts.ContextRoot,
			type: OdrlTypes.Rule,
			jsonSchema: async () => OdrlRuleSchema as IJsonSchema
		}));
	}
}
