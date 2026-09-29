// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
import { JsonLdDataTypes, JsonLdProcessor } from "@twin.org/data-json-ld";
import * as CompiledValidators from "../compiled/validators.js";
import { EpcisContexts } from "../models/epcis20/epcisContexts.js";
import { EpcisTypes } from "../models/epcis20/epcisTypes.js";
import EpcisActionTypesSchema from "../schemas/EpcisActionTypes.json" with { type: "json" };
import EpcisAggregationEventSchema from "../schemas/EpcisAggregationEvent.json" with { type: "json" };
import EpcisAssociationEventSchema from "../schemas/EpcisAssociationEvent.json" with { type: "json" };
import EpcisAttributeSchema from "../schemas/EpcisAttribute.json" with { type: "json" };
import EpcisBizStepTypesSchema from "../schemas/EpcisBizStepTypes.json" with { type: "json" };
import EpcisBizTransactionSchema from "../schemas/EpcisBizTransaction.json" with { type: "json" };
import EpcisBizTransactionTypesSchema from "../schemas/EpcisBizTransactionTypes.json" with { type: "json" };
import EpcisComponentTypesSchema from "../schemas/EpcisComponentTypes.json" with { type: "json" };
import EpcisContextTypeSchema from "../schemas/EpcisContextType.json" with { type: "json" };
import EpcisDestinationSchema from "../schemas/EpcisDestination.json" with { type: "json" };
import EpcisDispositionTypesSchema from "../schemas/EpcisDispositionTypes.json" with { type: "json" };
import EpcisDocumentSchema from "../schemas/EpcisDocument.json" with { type: "json" };
import EpcisErrorDeclarationSchema from "../schemas/EpcisErrorDeclaration.json" with { type: "json" };
import EpcisErrorReasonTypesSchema from "../schemas/EpcisErrorReasonTypes.json" with { type: "json" };
import EpcisEventSchema from "../schemas/EpcisEvent.json" with { type: "json" };
import EpcisEventsSchema from "../schemas/EpcisEvents.json" with { type: "json" };
import EpcisEventTypesSchema from "../schemas/EpcisEventTypes.json" with { type: "json" };
import EpcisHeaderSchema from "../schemas/EpcisHeader.json" with { type: "json" };
import EpcisIlmdSchema from "../schemas/EpcisIlmd.json" with { type: "json" };
import EpcisLocationSchema from "../schemas/EpcisLocation.json" with { type: "json" };
import EpcisMeasurementTypesSchema from "../schemas/EpcisMeasurementTypes.json" with { type: "json" };
import EpcisObjectEventSchema from "../schemas/EpcisObjectEvent.json" with { type: "json" };
import EpcisPersistentDispositionSchema from "../schemas/EpcisPersistentDisposition.json" with { type: "json" };
import EpcisQuantitySchema from "../schemas/EpcisQuantity.json" with { type: "json" };
import EpcisQuerySchema from "../schemas/EpcisQuery.json" with { type: "json" };
import EpcisQueryDocumentSchema from "../schemas/EpcisQueryDocument.json" with { type: "json" };
import EpcisQueryDocumentBodySchema from "../schemas/EpcisQueryDocumentBody.json" with { type: "json" };
import EpcisQueryResultsSchema from "../schemas/EpcisQueryResults.json" with { type: "json" };
import EpcisQueryResultsBodySchema from "../schemas/EpcisQueryResultsBody.json" with { type: "json" };
import EpcisSensorAlertTypesSchema from "../schemas/EpcisSensorAlertTypes.json" with { type: "json" };
import EpcisSensorElementSchema from "../schemas/EpcisSensorElement.json" with { type: "json" };
import EpcisSensorMetadataSchema from "../schemas/EpcisSensorMetadata.json" with { type: "json" };
import EpcisSensorReportSchema from "../schemas/EpcisSensorReport.json" with { type: "json" };
import EpcisSourceSchema from "../schemas/EpcisSource.json" with { type: "json" };
import EpcisSourceDestTypesSchema from "../schemas/EpcisSourceDestTypes.json" with { type: "json" };
import EpcisTransactionEventSchema from "../schemas/EpcisTransactionEvent.json" with { type: "json" };
import EpcisTransformationEventSchema from "../schemas/EpcisTransformationEvent.json" with { type: "json" };
import EpcisVocabularySchema from "../schemas/EpcisVocabulary.json" with { type: "json" };
import EpcisVocabularyElementSchema from "../schemas/EpcisVocabularyElement.json" with { type: "json" };

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
		// Register the types referenced by the schemas, which are only registered once.
		JsonLdDataTypes.registerTypes();

		const types = [
			{
				type: EpcisTypes.ActionTypes,
				schema: EpcisActionTypesSchema,
				compiledValidator: CompiledValidators.CompiledEpcisActionTypes
			},
			{
				type: EpcisTypes.AggregationEvent,
				schema: EpcisAggregationEventSchema,
				compiledValidator: CompiledValidators.CompiledEpcisAggregationEvent
			},
			{
				type: EpcisTypes.AssociationEvent,
				schema: EpcisAssociationEventSchema,
				compiledValidator: CompiledValidators.CompiledEpcisAssociationEvent
			},
			{
				type: EpcisTypes.Attribute,
				schema: EpcisAttributeSchema,
				compiledValidator: CompiledValidators.CompiledEpcisAttribute
			},
			{
				type: EpcisTypes.BizStepTypes,
				schema: EpcisBizStepTypesSchema,
				compiledValidator: CompiledValidators.CompiledEpcisBizStepTypes
			},
			{
				type: EpcisTypes.BizTransaction,
				schema: EpcisBizTransactionSchema,
				compiledValidator: CompiledValidators.CompiledEpcisBizTransaction
			},
			{
				type: EpcisTypes.BizTransactionTypes,
				schema: EpcisBizTransactionTypesSchema,
				compiledValidator: CompiledValidators.CompiledEpcisBizTransactionTypes
			},
			{
				type: EpcisTypes.ComponentTypes,
				schema: EpcisComponentTypesSchema,
				compiledValidator: CompiledValidators.CompiledEpcisComponentTypes
			},
			{
				type: EpcisTypes.ContextType,
				schema: EpcisContextTypeSchema,
				compiledValidator: CompiledValidators.CompiledEpcisContextType
			},
			{
				type: EpcisTypes.Destination,
				schema: EpcisDestinationSchema,
				compiledValidator: CompiledValidators.CompiledEpcisDestination
			},
			{
				type: EpcisTypes.DispositionTypes,
				schema: EpcisDispositionTypesSchema,
				compiledValidator: CompiledValidators.CompiledEpcisDispositionTypes
			},
			{
				type: EpcisTypes.EPCISDocument,
				schema: EpcisDocumentSchema,
				compiledValidator: CompiledValidators.CompiledEpcisDocument
			},
			{
				type: EpcisTypes.ErrorDeclaration,
				schema: EpcisErrorDeclarationSchema,
				compiledValidator: CompiledValidators.CompiledEpcisErrorDeclaration
			},
			{
				type: EpcisTypes.ErrorReasonTypes,
				schema: EpcisErrorReasonTypesSchema,
				compiledValidator: CompiledValidators.CompiledEpcisErrorReasonTypes
			},
			{
				type: EpcisTypes.Event,
				schema: EpcisEventSchema,
				compiledValidator: CompiledValidators.CompiledEpcisEvent
			},
			{
				type: EpcisTypes.Events,
				schema: EpcisEventsSchema,
				compiledValidator: CompiledValidators.CompiledEpcisEvents
			},
			{
				type: EpcisTypes.EventTypes,
				schema: EpcisEventTypesSchema,
				compiledValidator: CompiledValidators.CompiledEpcisEventTypes
			},
			{
				type: EpcisTypes.Header,
				schema: EpcisHeaderSchema,
				compiledValidator: CompiledValidators.CompiledEpcisHeader
			},
			{
				type: EpcisTypes.Ilmd,
				schema: EpcisIlmdSchema,
				compiledValidator: CompiledValidators.CompiledEpcisIlmd
			},
			{
				type: EpcisTypes.Location,
				schema: EpcisLocationSchema,
				compiledValidator: CompiledValidators.CompiledEpcisLocation
			},
			{
				type: EpcisTypes.MeasurementTypes,
				schema: EpcisMeasurementTypesSchema,
				compiledValidator: CompiledValidators.CompiledEpcisMeasurementTypes
			},
			{
				type: EpcisTypes.ObjectEvent,
				schema: EpcisObjectEventSchema,
				compiledValidator: CompiledValidators.CompiledEpcisObjectEvent
			},
			{
				type: EpcisTypes.PersistentDisposition,
				schema: EpcisPersistentDispositionSchema,
				compiledValidator: CompiledValidators.CompiledEpcisPersistentDisposition
			},
			{
				type: EpcisTypes.Quantity,
				schema: EpcisQuantitySchema,
				compiledValidator: CompiledValidators.CompiledEpcisQuantity
			},
			{
				type: EpcisTypes.Query,
				schema: EpcisQuerySchema,
				compiledValidator: CompiledValidators.CompiledEpcisQuery
			},
			{
				type: EpcisTypes.EPCISQueryDocument,
				schema: EpcisQueryDocumentSchema,
				compiledValidator: CompiledValidators.CompiledEpcisQueryDocument
			},
			{
				type: EpcisTypes.QueryDocumentBody,
				schema: EpcisQueryDocumentBodySchema,
				compiledValidator: CompiledValidators.CompiledEpcisQueryDocumentBody
			},
			{
				type: EpcisTypes.QueryResults,
				schema: EpcisQueryResultsSchema,
				compiledValidator: CompiledValidators.CompiledEpcisQueryResults
			},
			{
				type: EpcisTypes.QueryResultsBody,
				schema: EpcisQueryResultsBodySchema,
				compiledValidator: CompiledValidators.CompiledEpcisQueryResultsBody
			},
			{
				type: EpcisTypes.SensorAlertTypes,
				schema: EpcisSensorAlertTypesSchema,
				compiledValidator: CompiledValidators.CompiledEpcisSensorAlertTypes
			},
			{
				type: EpcisTypes.SensorElement,
				schema: EpcisSensorElementSchema,
				compiledValidator: CompiledValidators.CompiledEpcisSensorElement
			},
			{
				type: EpcisTypes.SensorMetadata,
				schema: EpcisSensorMetadataSchema,
				compiledValidator: CompiledValidators.CompiledEpcisSensorMetadata
			},
			{
				type: EpcisTypes.SensorReport,
				schema: EpcisSensorReportSchema,
				compiledValidator: CompiledValidators.CompiledEpcisSensorReport
			},
			{
				type: EpcisTypes.Source,
				schema: EpcisSourceSchema,
				compiledValidator: CompiledValidators.CompiledEpcisSource
			},
			{
				type: EpcisTypes.SourceDestTypes,
				schema: EpcisSourceDestTypesSchema,
				compiledValidator: CompiledValidators.CompiledEpcisSourceDestTypes
			},
			{
				type: EpcisTypes.TransactionEvent,
				schema: EpcisTransactionEventSchema,
				compiledValidator: CompiledValidators.CompiledEpcisTransactionEvent
			},
			{
				type: EpcisTypes.TransformationEvent,
				schema: EpcisTransformationEventSchema,
				compiledValidator: CompiledValidators.CompiledEpcisTransformationEvent
			},
			{
				type: EpcisTypes.Vocabulary,
				schema: EpcisVocabularySchema,
				compiledValidator: CompiledValidators.CompiledEpcisVocabulary
			},
			{
				type: EpcisTypes.VocabularyElement,
				schema: EpcisVocabularyElementSchema,
				compiledValidator: CompiledValidators.CompiledEpcisVocabularyElement
			}
		];

		DataTypeHelper.registerTypes(EpcisContexts.Namespace, EpcisContexts.JsonLdContext, types);

		// EpcisTypes.EPCISDocument is already prefixed, so the schemas are registered
		// under their own titles, which is what the $refs between them use.
		DataTypeHelper.registerTypes(
			EpcisContexts.JsonSchemaNamespace,
			EpcisContexts.JsonLdContext,
			types.map(t => ({
				type: t.schema.title,
				schema: t.schema,
				compiledValidator: t.compiledValidator
			}))
		);
	}
}
