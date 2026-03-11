// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import { EpcisContexts } from "../models/epcis20/epcisContexts.js";
import { EpcisTypes } from "../models/epcis20/epcisTypes.js";
import AggregationEventSchema from "../schemas/EpcisAggregationEvent.json" with { type: "json" };
import AssociationEventSchema from "../schemas/EpcisAssociationEvent.json" with { type: "json" };
import DocumentSchema from "../schemas/EpcisDocument.json" with { type: "json" };
import ObjectEventSchema from "../schemas/EpcisObjectEvent.json" with { type: "json" };
import QueryDocumentSchema from "../schemas/EpcisQueryDocument.json" with { type: "json" };
import TransactionEventSchema from "../schemas/EpcisTransactionEvent.json" with { type: "json" };
import TransformationEventSchema from "../schemas/EpcisTransformationEvent.json" with { type: "json" };

/**
 * Handle all the data types for EPCIS.
 */
export class EpcisDataTypes {
	/**
	 * Register the JSON-LD Redirects.
	 */
	public static registerRedirects(): void {
		JsonLdProcessor.addRedirect(/https?:\/\/ref.gs1.org\/epcis\/?/, EpcisContexts.JsonLdContext);
		const escapedContext = EpcisContexts.Context.replace(/[$()*+.?[\\\]^{|}]/g, "\\$&");
		JsonLdProcessor.addRedirect(new RegExp(`^${escapedContext}$`), EpcisContexts.JsonLdContext);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		const types = [
			{
				type: EpcisTypes.EPCISDocument,
				schema: DocumentSchema
			},
			{
				type: EpcisTypes.EPCISQueryDocument,
				schema: QueryDocumentSchema
			},
			{
				type: EpcisTypes.AggregationEvent,
				schema: AggregationEventSchema
			},
			{
				type: EpcisTypes.AssociationEvent,
				schema: AssociationEventSchema
			},
			{
				type: EpcisTypes.ObjectEvent,
				schema: ObjectEventSchema
			},
			{
				type: EpcisTypes.TransactionEvent,
				schema: TransactionEventSchema
			},
			{
				type: EpcisTypes.TransformationEvent,
				schema: TransformationEventSchema
			}
		];

		DataTypeHelper.registerTypes(EpcisContexts.Namespace, EpcisContexts.JsonLdContext, types);
		DataTypeHelper.registerTypes(
			EpcisContexts.JsonSchemaNamespace,
			EpcisContexts.JsonLdContext,
			types.map(t => ({ type: `Epcis${t.type}`, schema: t.schema }))
		);
	}
}
