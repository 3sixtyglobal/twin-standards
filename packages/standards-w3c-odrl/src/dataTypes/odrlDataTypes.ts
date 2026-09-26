// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { JsonLdDataTypes, JsonLdProcessor } from "@twin.org/data-json-ld";
import * as CompiledValidators from "../compiled/validators.js";
import { OdrlContexts } from "../models/odrlContexts.js";
import { OdrlTypes } from "../models/types/odrlTypes.js";
import OdrlActionSchema from "../schemas/OdrlAction.json" with { type: "json" };
import OdrlActionTypeSchema from "../schemas/OdrlActionType.json" with { type: "json" };
import OdrlAgreementSchema from "../schemas/OdrlAgreement.json" with { type: "json" };
import OdrlAssetSchema from "../schemas/OdrlAsset.json" with { type: "json" };
import OdrlAssetCollectionSchema from "../schemas/OdrlAssetCollection.json" with { type: "json" };
import OdrlConflictStrategyTypeSchema from "../schemas/OdrlConflictStrategyType.json" with { type: "json" };
import OdrlConstraintSchema from "../schemas/OdrlConstraint.json" with { type: "json" };
import ContextTypeSchema from "../schemas/OdrlContextType.json" with { type: "json" };
import OdrlDutySchema from "../schemas/OdrlDuty.json" with { type: "json" };
import OdrlLeftOperandTypeSchema from "../schemas/OdrlLeftOperandType.json" with { type: "json" };
import OdrlLogicalConstraintSchema from "../schemas/OdrlLogicalConstraint.json" with { type: "json" };
import OdrlLogicalConstraintOperandSchema from "../schemas/OdrlLogicalConstraintOperand.json" with { type: "json" };
import OdrlLogicalConstraintTypeSchema from "../schemas/OdrlLogicalConstraintType.json" with { type: "json" };
import OdrlOfferSchema from "../schemas/OdrlOffer.json" with { type: "json" };
import OdrlOperatorTypeSchema from "../schemas/OdrlOperatorType.json" with { type: "json" };
import OdrlPartySchema from "../schemas/OdrlParty.json" with { type: "json" };
import OdrlPartyCollectionSchema from "../schemas/OdrlPartyCollection.json" with { type: "json" };
import OdrlPermissionSchema from "../schemas/OdrlPermission.json" with { type: "json" };
import OdrlPolicySchema from "../schemas/OdrlPolicy.json" with { type: "json" };
import OdrlPolicyTypeSchema from "../schemas/OdrlPolicyType.json" with { type: "json" };
import OdrlProhibitionSchema from "../schemas/OdrlProhibition.json" with { type: "json" };
import OdrlRightOperandTypeSchema from "../schemas/OdrlRightOperandType.json" with { type: "json" };
import OdrlRuleSchema from "../schemas/OdrlRule.json" with { type: "json" };
import OdrlRuleTypeSchema from "../schemas/OdrlRuleType.json" with { type: "json" };
import OdrlSetSchema from "../schemas/OdrlSet.json" with { type: "json" };
import OdrlStatusTypeSchema from "../schemas/OdrlStatusType.json" with { type: "json" };

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
		// Register the types referenced by the schemas, which are only registered once.
		JsonLdDataTypes.registerTypes();

		const types = [
			{
				type: OdrlTypes.Policy,
				schema: OdrlPolicySchema,
				compiledValidator: CompiledValidators.CompiledOdrlPolicy
			},
			{
				type: OdrlTypes.Asset,
				schema: OdrlAssetSchema,
				compiledValidator: CompiledValidators.CompiledOdrlAsset
			},
			{
				type: OdrlTypes.AssetCollection,
				schema: OdrlAssetCollectionSchema,
				compiledValidator: CompiledValidators.CompiledOdrlAssetCollection
			},
			{
				type: OdrlTypes.Party,
				schema: OdrlPartySchema,
				compiledValidator: CompiledValidators.CompiledOdrlParty
			},
			{
				type: OdrlTypes.PartyCollection,
				schema: OdrlPartyCollectionSchema,
				compiledValidator: CompiledValidators.CompiledOdrlPartyCollection
			},
			{
				type: OdrlTypes.Action,
				schema: OdrlActionSchema,
				compiledValidator: CompiledValidators.CompiledOdrlAction
			},
			{
				type: OdrlTypes.Permission,
				schema: OdrlPermissionSchema,
				compiledValidator: CompiledValidators.CompiledOdrlPermission
			},
			{
				type: OdrlTypes.Prohibition,
				schema: OdrlProhibitionSchema,
				compiledValidator: CompiledValidators.CompiledOdrlProhibition
			},
			{
				type: OdrlTypes.Duty,
				schema: OdrlDutySchema,
				compiledValidator: CompiledValidators.CompiledOdrlDuty
			},
			{
				type: OdrlTypes.Constraint,
				schema: OdrlConstraintSchema,
				compiledValidator: CompiledValidators.CompiledOdrlConstraint
			},
			{
				type: OdrlTypes.LogicalConstraint,
				schema: OdrlLogicalConstraintSchema,
				compiledValidator: CompiledValidators.CompiledOdrlLogicalConstraint
			},
			{
				type: OdrlTypes.LogicalConstraintOperand,
				schema: OdrlLogicalConstraintOperandSchema,
				compiledValidator: CompiledValidators.CompiledOdrlLogicalConstraintOperand
			},
			{
				type: OdrlTypes.Set,
				schema: OdrlSetSchema,
				compiledValidator: CompiledValidators.CompiledOdrlSet
			},
			{
				type: OdrlTypes.Offer,
				schema: OdrlOfferSchema,
				compiledValidator: CompiledValidators.CompiledOdrlOffer
			},
			{
				type: OdrlTypes.Agreement,
				schema: OdrlAgreementSchema,
				compiledValidator: CompiledValidators.CompiledOdrlAgreement
			},
			{
				type: OdrlTypes.Rule,
				schema: OdrlRuleSchema,
				compiledValidator: CompiledValidators.CompiledOdrlRule
			},
			{
				type: OdrlTypes.ContextType,
				schema: ContextTypeSchema,
				compiledValidator: CompiledValidators.CompiledOdrlContextType
			},
			{
				type: OdrlTypes.ActionType,
				schema: OdrlActionTypeSchema,
				compiledValidator: CompiledValidators.CompiledOdrlActionType
			},
			{
				type: OdrlTypes.ConflictStrategyType,
				schema: OdrlConflictStrategyTypeSchema,
				compiledValidator: CompiledValidators.CompiledOdrlConflictStrategyType
			},
			{
				type: OdrlTypes.LeftOperandType,
				schema: OdrlLeftOperandTypeSchema,
				compiledValidator: CompiledValidators.CompiledOdrlLeftOperandType
			},
			{
				type: OdrlTypes.LogicalConstraintType,
				schema: OdrlLogicalConstraintTypeSchema,
				compiledValidator: CompiledValidators.CompiledOdrlLogicalConstraintType
			},
			{
				type: OdrlTypes.OperatorType,
				schema: OdrlOperatorTypeSchema,
				compiledValidator: CompiledValidators.CompiledOdrlOperatorType
			},
			{
				type: OdrlTypes.PolicyType,
				schema: OdrlPolicyTypeSchema,
				compiledValidator: CompiledValidators.CompiledOdrlPolicyType
			},
			{
				type: OdrlTypes.RightOperandType,
				schema: OdrlRightOperandTypeSchema,
				compiledValidator: CompiledValidators.CompiledOdrlRightOperandType
			},
			{
				type: OdrlTypes.RuleType,
				schema: OdrlRuleTypeSchema,
				compiledValidator: CompiledValidators.CompiledOdrlRuleType
			},
			{
				type: OdrlTypes.StatusType,
				schema: OdrlStatusTypeSchema,
				compiledValidator: CompiledValidators.CompiledOdrlStatusType
			}
		];

		DataTypeHelper.registerTypes(OdrlContexts.Namespace, OdrlContexts.JsonLdContext, types);
		DataTypeHelper.registerTypes(
			OdrlContexts.JsonSchemaNamespace,
			OdrlContexts.JsonLdContext,
			types.map(t => ({
				type: `Odrl${t.type}`,
				schema: t.schema,
				compiledValidator: t.compiledValidator
			}))
		);
	}
}
