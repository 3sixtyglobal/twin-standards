// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHandlerFactory } from "@twin.org/data-core";
import { JsonLdProcessor } from "@twin.org/data-json-ld";
import type { JSONSchema7 } from "json-schema";
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
		JsonLdProcessor.addRedirect(/https?:\/\/ref.gs1.org\/epcis\/?/, EpcisContexts.Context);
	}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		DataTypeHandlerFactory.register(
			`${EpcisContexts.Namespace}${EpcisTypes.EPCISDocument}`,
			() => ({
				context: EpcisContexts.Context,
				type: EpcisTypes.EPCISDocument,
				defaultValue: {},
				jsonSchema: async () => DocumentSchema as JSONSchema7
			})
		);
		DataTypeHandlerFactory.register(
			`${EpcisContexts.Namespace}${EpcisTypes.EPCISQueryDocument}`,
			() => ({
				context: EpcisContexts.Context,
				type: EpcisTypes.EPCISQueryDocument,
				defaultValue: {},
				jsonSchema: async () => QueryDocumentSchema as JSONSchema7
			})
		);
		DataTypeHandlerFactory.register(
			`${EpcisContexts.Namespace}${EpcisTypes.AggregationEvent}`,
			() => ({
				context: EpcisContexts.Context,
				type: EpcisTypes.AggregationEvent,
				defaultValue: {},
				jsonSchema: async () => AggregationEventSchema as JSONSchema7
			})
		);
		DataTypeHandlerFactory.register(
			`${EpcisContexts.Namespace}${EpcisTypes.AssociationEvent}`,
			() => ({
				context: EpcisContexts.Context,
				type: EpcisTypes.AssociationEvent,
				defaultValue: {},
				jsonSchema: async () => AssociationEventSchema as JSONSchema7
			})
		);
		DataTypeHandlerFactory.register(`${EpcisContexts.Namespace}${EpcisTypes.ObjectEvent}`, () => ({
			context: EpcisContexts.Context,
			type: EpcisTypes.ObjectEvent,
			defaultValue: {},
			jsonSchema: async () => ObjectEventSchema as JSONSchema7
		}));
		DataTypeHandlerFactory.register(
			`${EpcisContexts.Namespace}${EpcisTypes.TransactionEvent}`,
			() => ({
				context: EpcisContexts.Context,
				type: EpcisTypes.TransactionEvent,
				defaultValue: {},
				jsonSchema: async () => TransactionEventSchema as JSONSchema7
			})
		);
		DataTypeHandlerFactory.register(
			`${EpcisContexts.Namespace}${EpcisTypes.TransformationEvent}`,
			() => ({
				context: EpcisContexts.Context,
				type: EpcisTypes.TransformationEvent,
				defaultValue: {},
				jsonSchema: async () => TransformationEventSchema as JSONSchema7
			})
		);
	}
}
