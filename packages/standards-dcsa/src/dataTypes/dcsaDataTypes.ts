// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@3sixty/data-core";
import * as CompiledValidators from "../compiled/validators.js";
import { DcsaContexts } from "../models/dcsaContexts.js";
import { DcsaTypes } from "../models/dcsaTypes.js";
import BargeSchema from "../schemas/DcsaBarge.json" with { type: "json" };
import BargeTransportCallSchema from "../schemas/DcsaBargeTransportCall.json" with { type: "json" };
import BaseEquipmentEventSchema from "../schemas/DcsaBaseEquipmentEvent.json" with { type: "json" };
import BaseEventSchema from "../schemas/DcsaBaseEvent.json" with { type: "json" };
import BaseIoTEventSchema from "../schemas/DcsaBaseIoTEvent.json" with { type: "json" };
import BaseReeferEventSchema from "../schemas/DcsaBaseReeferEvent.json" with { type: "json" };
import BaseShipmentEventSchema from "../schemas/DcsaBaseShipmentEvent.json" with { type: "json" };
import BaseTransportEventSchema from "../schemas/DcsaBaseTransportEvent.json" with { type: "json" };
import DocumentTypeCodesSchema from "../schemas/DcsaDocumentTypeCodes.json" with { type: "json" };
import EquipmentEventSchema from "../schemas/DcsaEquipmentEvent.json" with { type: "json" };
import EquipmentEventTypeCodesSchema from "../schemas/DcsaEquipmentEventTypeCodes.json" with { type: "json" };
import EquipmentPayloadSchema from "../schemas/DcsaEquipmentPayload.json" with { type: "json" };
import EquipmentSubscriptionBodySchema from "../schemas/DcsaEquipmentSubscriptionBody.json" with { type: "json" };
import EventSchema from "../schemas/DcsaEvent.json" with { type: "json" };
import EventClassifierCodeSchema from "../schemas/DcsaEventClassifierCode.json" with { type: "json" };
import EventClassifierCodeNoReqSchema from "../schemas/DcsaEventClassifierCodeNoReq.json" with { type: "json" };
import EventMetadataActiveSchema from "../schemas/DcsaEventMetadataActive.json" with { type: "json" };
import EventMetadataBaseSchema from "../schemas/DcsaEventMetadataBase.json" with { type: "json" };
import EventMetadataRetractionSchema from "../schemas/DcsaEventMetadataRetraction.json" with { type: "json" };
import EventPayloadSchema from "../schemas/DcsaEventPayload.json" with { type: "json" };
import EventRetractionSchema from "../schemas/DcsaEventRetraction.json" with { type: "json" };
import EventTypesSchema from "../schemas/DcsaEventTypes.json" with { type: "json" };
import EventWithPayloadSchema from "../schemas/DcsaEventWithPayload.json" with { type: "json" };
import IotEventSchema from "../schemas/DcsaIotEvent.json" with { type: "json" };
import IotEventCodeSchema from "../schemas/DcsaIotEventCode.json" with { type: "json" };
import IotEventMetadataActiveSchema from "../schemas/DcsaIotEventMetadataActive.json" with { type: "json" };
import IotEventMetadataRetractionSchema from "../schemas/DcsaIotEventMetadataRetraction.json" with { type: "json" };
import IotEventTypeCodesSchema from "../schemas/DcsaIotEventTypeCodes.json" with { type: "json" };
import IotPayloadSchema from "../schemas/DcsaIotPayload.json" with { type: "json" };
import IotSubscriptionBodySchema from "../schemas/DcsaIotSubscriptionBody.json" with { type: "json" };
import ModeOfTransportSchema from "../schemas/DcsaModeOfTransport.json" with { type: "json" };
import OperationsEventTypeCodesSchema from "../schemas/DcsaOperationsEventTypeCodes.json" with { type: "json" };
import PortCallPhaseTypeCodesSchema from "../schemas/DcsaPortCallPhaseTypeCodes.json" with { type: "json" };
import PortCallServiceTypeCodesSchema from "../schemas/DcsaPortCallServiceTypeCodes.json" with { type: "json" };
import PublisherSchema from "../schemas/DcsaPublisher.json" with { type: "json" };
import PublisherRoleSchema from "../schemas/DcsaPublisherRole.json" with { type: "json" };
import RailTransportCallSchema from "../schemas/DcsaRailTransportCall.json" with { type: "json" };
import ReeferEventSchema from "../schemas/DcsaReeferEvent.json" with { type: "json" };
import ReeferEventMetadataActiveSchema from "../schemas/DcsaReeferEventMetadataActive.json" with { type: "json" };
import ReeferEventMetadataRetractionSchema from "../schemas/DcsaReeferEventMetadataRetraction.json" with { type: "json" };
import ReeferEventTypeCodesSchema from "../schemas/DcsaReeferEventTypeCodes.json" with { type: "json" };
import ReeferMeasurementsSchema from "../schemas/DcsaReeferMeasurements.json" with { type: "json" };
import ReeferPayloadSchema from "../schemas/DcsaReeferPayload.json" with { type: "json" };
import ReeferSetpointSchema from "../schemas/DcsaReeferSetpoint.json" with { type: "json" };
import ReeferSubscriptionBodySchema from "../schemas/DcsaReeferSubscriptionBody.json" with { type: "json" };
import ReferenceSchema from "../schemas/DcsaReference.json" with { type: "json" };
import RelatedDocumentReferenceSchema from "../schemas/DcsaRelatedDocumentReference.json" with { type: "json" };
import ShipmentEventSchema from "../schemas/DcsaShipmentEvent.json" with { type: "json" };
import ShipmentEventTypeCodesSchema from "../schemas/DcsaShipmentEventTypeCodes.json" with { type: "json" };
import ShipmentPayloadSchema from "../schemas/DcsaShipmentPayload.json" with { type: "json" };
import ShipmentSubscriptionBodySchema from "../schemas/DcsaShipmentSubscriptionBody.json" with { type: "json" };
import TntPublisherRoleSchema from "../schemas/DcsaTntPublisherRole.json" with { type: "json" };
import TransportCallSchema from "../schemas/DcsaTransportCall.json" with { type: "json" };
import TransportCallBaseSchema from "../schemas/DcsaTransportCallBase.json" with { type: "json" };
import TransportCallFacilityTypeCodesSchema from "../schemas/DcsaTransportCallFacilityTypeCodes.json" with { type: "json" };
import TransportCallSubscriptionBodySchema from "../schemas/DcsaTransportCallSubscriptionBody.json" with { type: "json" };
import TransportEventSchema from "../schemas/DcsaTransportEvent.json" with { type: "json" };
import TransportEventTypeCodesSchema from "../schemas/DcsaTransportEventTypeCodes.json" with { type: "json" };
import TransportPayloadSchema from "../schemas/DcsaTransportPayload.json" with { type: "json" };
import TransportSubscriptionBodySchema from "../schemas/DcsaTransportSubscriptionBody.json" with { type: "json" };
import TruckTransportCallSchema from "../schemas/DcsaTruckTransportCall.json" with { type: "json" };
import VesselSchema from "../schemas/DcsaVessel.json" with { type: "json" };
import VesselTransportCallSchema from "../schemas/DcsaVesselTransportCall.json" with { type: "json" };

/**
 * Handles data type registration for DCSA.
 */
export abstract class DcsaDataTypes {
	/**
	 * No-op: DCSA does not define JSON-LD context URLs.
	 */
	public static registerRedirects(): void {}

	/**
	 * Register all the data types.
	 */
	public static registerTypes(): void {
		const types = [
			{
				type: DcsaTypes.Barge,
				schema: BargeSchema,
				compiledValidator: CompiledValidators.CompiledDcsaBarge
			},
			{
				type: DcsaTypes.BargeTransportCall,
				schema: BargeTransportCallSchema,
				compiledValidator: CompiledValidators.CompiledDcsaBargeTransportCall
			},
			{
				type: DcsaTypes.BaseEquipmentEvent,
				schema: BaseEquipmentEventSchema,
				compiledValidator: CompiledValidators.CompiledDcsaBaseEquipmentEvent
			},
			{
				type: DcsaTypes.BaseEvent,
				schema: BaseEventSchema,
				compiledValidator: CompiledValidators.CompiledDcsaBaseEvent
			},
			{
				type: DcsaTypes.BaseIoTEvent,
				schema: BaseIoTEventSchema,
				compiledValidator: CompiledValidators.CompiledDcsaBaseIoTEvent
			},
			{
				type: DcsaTypes.BaseReeferEvent,
				schema: BaseReeferEventSchema,
				compiledValidator: CompiledValidators.CompiledDcsaBaseReeferEvent
			},
			{
				type: DcsaTypes.BaseShipmentEvent,
				schema: BaseShipmentEventSchema,
				compiledValidator: CompiledValidators.CompiledDcsaBaseShipmentEvent
			},
			{
				type: DcsaTypes.BaseTransportEvent,
				schema: BaseTransportEventSchema,
				compiledValidator: CompiledValidators.CompiledDcsaBaseTransportEvent
			},
			{
				type: DcsaTypes.DocumentTypeCodes,
				schema: DocumentTypeCodesSchema,
				compiledValidator: CompiledValidators.CompiledDcsaDocumentTypeCodes
			},
			{
				type: DcsaTypes.EquipmentEvent,
				schema: EquipmentEventSchema,
				compiledValidator: CompiledValidators.CompiledDcsaEquipmentEvent
			},
			{
				type: DcsaTypes.EquipmentEventTypeCodes,
				schema: EquipmentEventTypeCodesSchema,
				compiledValidator: CompiledValidators.CompiledDcsaEquipmentEventTypeCodes
			},
			{
				type: DcsaTypes.EquipmentPayload,
				schema: EquipmentPayloadSchema,
				compiledValidator: CompiledValidators.CompiledDcsaEquipmentPayload
			},
			{
				type: DcsaTypes.EquipmentSubscriptionBody,
				schema: EquipmentSubscriptionBodySchema,
				compiledValidator: CompiledValidators.CompiledDcsaEquipmentSubscriptionBody
			},
			{
				type: DcsaTypes.Event,
				schema: EventSchema,
				compiledValidator: CompiledValidators.CompiledDcsaEvent
			},
			{
				type: DcsaTypes.EventClassifierCode,
				schema: EventClassifierCodeSchema,
				compiledValidator: CompiledValidators.CompiledDcsaEventClassifierCode
			},
			{
				type: DcsaTypes.EventClassifierCodeNoReq,
				schema: EventClassifierCodeNoReqSchema,
				compiledValidator: CompiledValidators.CompiledDcsaEventClassifierCodeNoReq
			},
			{
				type: DcsaTypes.EventMetadataActive,
				schema: EventMetadataActiveSchema,
				compiledValidator: CompiledValidators.CompiledDcsaEventMetadataActive
			},
			{
				type: DcsaTypes.EventMetadataBase,
				schema: EventMetadataBaseSchema,
				compiledValidator: CompiledValidators.CompiledDcsaEventMetadataBase
			},
			{
				type: DcsaTypes.EventMetadataRetraction,
				schema: EventMetadataRetractionSchema,
				compiledValidator: CompiledValidators.CompiledDcsaEventMetadataRetraction
			},
			{
				type: DcsaTypes.EventPayload,
				schema: EventPayloadSchema,
				compiledValidator: CompiledValidators.CompiledDcsaEventPayload
			},
			{
				type: DcsaTypes.EventRetraction,
				schema: EventRetractionSchema,
				compiledValidator: CompiledValidators.CompiledDcsaEventRetraction
			},
			{
				type: DcsaTypes.EventWithPayload,
				schema: EventWithPayloadSchema,
				compiledValidator: CompiledValidators.CompiledDcsaEventWithPayload
			},
			{
				type: DcsaTypes.EventTypes,
				schema: EventTypesSchema,
				compiledValidator: CompiledValidators.CompiledDcsaEventTypes
			},
			{
				type: DcsaTypes.IotEvent,
				schema: IotEventSchema,
				compiledValidator: CompiledValidators.CompiledDcsaIotEvent
			},
			{
				type: DcsaTypes.IotEventCode,
				schema: IotEventCodeSchema,
				compiledValidator: CompiledValidators.CompiledDcsaIotEventCode
			},
			{
				type: DcsaTypes.IotEventMetadataActive,
				schema: IotEventMetadataActiveSchema,
				compiledValidator: CompiledValidators.CompiledDcsaIotEventMetadataActive
			},
			{
				type: DcsaTypes.IotEventMetadataRetraction,
				schema: IotEventMetadataRetractionSchema,
				compiledValidator: CompiledValidators.CompiledDcsaIotEventMetadataRetraction
			},
			{
				type: DcsaTypes.IotEventTypeCodes,
				schema: IotEventTypeCodesSchema,
				compiledValidator: CompiledValidators.CompiledDcsaIotEventTypeCodes
			},
			{
				type: DcsaTypes.IotPayload,
				schema: IotPayloadSchema,
				compiledValidator: CompiledValidators.CompiledDcsaIotPayload
			},
			{
				type: DcsaTypes.IotSubscriptionBody,
				schema: IotSubscriptionBodySchema,
				compiledValidator: CompiledValidators.CompiledDcsaIotSubscriptionBody
			},
			{
				type: DcsaTypes.ModeOfTransport,
				schema: ModeOfTransportSchema,
				compiledValidator: CompiledValidators.CompiledDcsaModeOfTransport
			},
			{
				type: DcsaTypes.OperationsEventTypeCodes,
				schema: OperationsEventTypeCodesSchema,
				compiledValidator: CompiledValidators.CompiledDcsaOperationsEventTypeCodes
			},
			{
				type: DcsaTypes.PortCallPhaseTypeCodes,
				schema: PortCallPhaseTypeCodesSchema,
				compiledValidator: CompiledValidators.CompiledDcsaPortCallPhaseTypeCodes
			},
			{
				type: DcsaTypes.PortCallServiceTypeCodes,
				schema: PortCallServiceTypeCodesSchema,
				compiledValidator: CompiledValidators.CompiledDcsaPortCallServiceTypeCodes
			},
			{
				type: DcsaTypes.Publisher,
				schema: PublisherSchema,
				compiledValidator: CompiledValidators.CompiledDcsaPublisher
			},
			{
				type: DcsaTypes.PublisherRole,
				schema: PublisherRoleSchema,
				compiledValidator: CompiledValidators.CompiledDcsaPublisherRole
			},
			{
				type: DcsaTypes.RailTransportCall,
				schema: RailTransportCallSchema,
				compiledValidator: CompiledValidators.CompiledDcsaRailTransportCall
			},
			{
				type: DcsaTypes.ReeferEvent,
				schema: ReeferEventSchema,
				compiledValidator: CompiledValidators.CompiledDcsaReeferEvent
			},
			{
				type: DcsaTypes.ReeferEventMetadataActive,
				schema: ReeferEventMetadataActiveSchema,
				compiledValidator: CompiledValidators.CompiledDcsaReeferEventMetadataActive
			},
			{
				type: DcsaTypes.ReeferEventMetadataRetraction,
				schema: ReeferEventMetadataRetractionSchema,
				compiledValidator: CompiledValidators.CompiledDcsaReeferEventMetadataRetraction
			},
			{
				type: DcsaTypes.ReeferEventTypeCodes,
				schema: ReeferEventTypeCodesSchema,
				compiledValidator: CompiledValidators.CompiledDcsaReeferEventTypeCodes
			},
			{
				type: DcsaTypes.ReeferMeasurements,
				schema: ReeferMeasurementsSchema,
				compiledValidator: CompiledValidators.CompiledDcsaReeferMeasurements
			},
			{
				type: DcsaTypes.ReeferPayload,
				schema: ReeferPayloadSchema,
				compiledValidator: CompiledValidators.CompiledDcsaReeferPayload
			},
			{
				type: DcsaTypes.ReeferSetpoint,
				schema: ReeferSetpointSchema,
				compiledValidator: CompiledValidators.CompiledDcsaReeferSetpoint
			},
			{
				type: DcsaTypes.ReeferSubscriptionBody,
				schema: ReeferSubscriptionBodySchema,
				compiledValidator: CompiledValidators.CompiledDcsaReeferSubscriptionBody
			},
			{
				type: DcsaTypes.Reference,
				schema: ReferenceSchema,
				compiledValidator: CompiledValidators.CompiledDcsaReference
			},
			{
				type: DcsaTypes.RelatedDocumentReference,
				schema: RelatedDocumentReferenceSchema,
				compiledValidator: CompiledValidators.CompiledDcsaRelatedDocumentReference
			},
			{
				type: DcsaTypes.ShipmentEvent,
				schema: ShipmentEventSchema,
				compiledValidator: CompiledValidators.CompiledDcsaShipmentEvent
			},
			{
				type: DcsaTypes.ShipmentEventTypeCodes,
				schema: ShipmentEventTypeCodesSchema,
				compiledValidator: CompiledValidators.CompiledDcsaShipmentEventTypeCodes
			},
			{
				type: DcsaTypes.ShipmentPayload,
				schema: ShipmentPayloadSchema,
				compiledValidator: CompiledValidators.CompiledDcsaShipmentPayload
			},
			{
				type: DcsaTypes.ShipmentSubscriptionBody,
				schema: ShipmentSubscriptionBodySchema,
				compiledValidator: CompiledValidators.CompiledDcsaShipmentSubscriptionBody
			},
			{
				type: DcsaTypes.TntPublisherRole,
				schema: TntPublisherRoleSchema,
				compiledValidator: CompiledValidators.CompiledDcsaTntPublisherRole
			},
			{
				type: DcsaTypes.TransportCall,
				schema: TransportCallSchema,
				compiledValidator: CompiledValidators.CompiledDcsaTransportCall
			},
			{
				type: DcsaTypes.TransportCallBase,
				schema: TransportCallBaseSchema,
				compiledValidator: CompiledValidators.CompiledDcsaTransportCallBase
			},
			{
				type: DcsaTypes.TransportCallFacilityTypeCodes,
				schema: TransportCallFacilityTypeCodesSchema,
				compiledValidator: CompiledValidators.CompiledDcsaTransportCallFacilityTypeCodes
			},
			{
				type: DcsaTypes.TransportCallSubscriptionBody,
				schema: TransportCallSubscriptionBodySchema,
				compiledValidator: CompiledValidators.CompiledDcsaTransportCallSubscriptionBody
			},
			{
				type: DcsaTypes.TransportEvent,
				schema: TransportEventSchema,
				compiledValidator: CompiledValidators.CompiledDcsaTransportEvent
			},
			{
				type: DcsaTypes.TransportEventTypeCodes,
				schema: TransportEventTypeCodesSchema,
				compiledValidator: CompiledValidators.CompiledDcsaTransportEventTypeCodes
			},
			{
				type: DcsaTypes.TransportPayload,
				schema: TransportPayloadSchema,
				compiledValidator: CompiledValidators.CompiledDcsaTransportPayload
			},
			{
				type: DcsaTypes.TransportSubscriptionBody,
				schema: TransportSubscriptionBodySchema,
				compiledValidator: CompiledValidators.CompiledDcsaTransportSubscriptionBody
			},
			{
				type: DcsaTypes.TruckTransportCall,
				schema: TruckTransportCallSchema,
				compiledValidator: CompiledValidators.CompiledDcsaTruckTransportCall
			},
			{
				type: DcsaTypes.Vessel,
				schema: VesselSchema,
				compiledValidator: CompiledValidators.CompiledDcsaVessel
			},
			{
				type: DcsaTypes.VesselTransportCall,
				schema: VesselTransportCallSchema,
				compiledValidator: CompiledValidators.CompiledDcsaVesselTransportCall
			}
		];
		DataTypeHelper.registerTypes(DcsaContexts.Namespace, undefined, types);
		DataTypeHelper.registerTypes(
			DcsaContexts.JsonSchemaNamespace,
			undefined,
			types.map(t => ({
				type: `Dcsa${t.type}`,
				schema: t.schema,
				compiledValidator: t.compiledValidator
			}))
		);
	}
}
