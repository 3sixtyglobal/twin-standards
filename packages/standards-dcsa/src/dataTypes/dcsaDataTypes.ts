// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { DataTypeHelper } from "@twin.org/data-core";
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
				schema: BargeSchema
			},
			{
				type: DcsaTypes.BargeTransportCall,
				schema: BargeTransportCallSchema
			},
			{
				type: DcsaTypes.BaseEquipmentEvent,
				schema: BaseEquipmentEventSchema
			},
			{
				type: DcsaTypes.BaseEvent,
				schema: BaseEventSchema
			},
			{
				type: DcsaTypes.BaseIoTEvent,
				schema: BaseIoTEventSchema
			},
			{
				type: DcsaTypes.BaseReeferEvent,
				schema: BaseReeferEventSchema
			},
			{
				type: DcsaTypes.BaseShipmentEvent,
				schema: BaseShipmentEventSchema
			},
			{
				type: DcsaTypes.BaseTransportEvent,
				schema: BaseTransportEventSchema
			},
			{
				type: DcsaTypes.DocumentTypeCodes,
				schema: DocumentTypeCodesSchema
			},
			{
				type: DcsaTypes.EquipmentEvent,
				schema: EquipmentEventSchema
			},
			{
				type: DcsaTypes.EquipmentEventTypeCodes,
				schema: EquipmentEventTypeCodesSchema
			},
			{
				type: DcsaTypes.EquipmentPayload,
				schema: EquipmentPayloadSchema
			},
			{
				type: DcsaTypes.EquipmentSubscriptionBody,
				schema: EquipmentSubscriptionBodySchema
			},
			{
				type: DcsaTypes.Event,
				schema: EventSchema
			},
			{
				type: DcsaTypes.EventClassifierCode,
				schema: EventClassifierCodeSchema
			},
			{
				type: DcsaTypes.EventClassifierCodeNoReq,
				schema: EventClassifierCodeNoReqSchema
			},
			{
				type: DcsaTypes.EventMetadataActive,
				schema: EventMetadataActiveSchema
			},
			{
				type: DcsaTypes.EventMetadataBase,
				schema: EventMetadataBaseSchema
			},
			{
				type: DcsaTypes.EventMetadataRetraction,
				schema: EventMetadataRetractionSchema
			},
			{
				type: DcsaTypes.EventPayload,
				schema: EventPayloadSchema
			},
			{
				type: DcsaTypes.EventRetraction,
				schema: EventRetractionSchema
			},
			{
				type: DcsaTypes.EventWithPayload,
				schema: EventWithPayloadSchema
			},
			{
				type: DcsaTypes.EventTypes,
				schema: EventTypesSchema
			},
			{
				type: DcsaTypes.IotEvent,
				schema: IotEventSchema
			},
			{
				type: DcsaTypes.IotEventCode,
				schema: IotEventCodeSchema
			},
			{
				type: DcsaTypes.IotEventMetadataActive,
				schema: IotEventMetadataActiveSchema
			},
			{
				type: DcsaTypes.IotEventMetadataRetraction,
				schema: IotEventMetadataRetractionSchema
			},
			{
				type: DcsaTypes.IotEventTypeCodes,
				schema: IotEventTypeCodesSchema
			},
			{
				type: DcsaTypes.IotPayload,
				schema: IotPayloadSchema
			},
			{
				type: DcsaTypes.IotSubscriptionBody,
				schema: IotSubscriptionBodySchema
			},
			{
				type: DcsaTypes.ModeOfTransport,
				schema: ModeOfTransportSchema
			},
			{
				type: DcsaTypes.OperationsEventTypeCodes,
				schema: OperationsEventTypeCodesSchema
			},
			{
				type: DcsaTypes.PortCallPhaseTypeCodes,
				schema: PortCallPhaseTypeCodesSchema
			},
			{
				type: DcsaTypes.PortCallServiceTypeCodes,
				schema: PortCallServiceTypeCodesSchema
			},
			{
				type: DcsaTypes.Publisher,
				schema: PublisherSchema
			},
			{
				type: DcsaTypes.PublisherRole,
				schema: PublisherRoleSchema
			},
			{
				type: DcsaTypes.RailTransportCall,
				schema: RailTransportCallSchema
			},
			{
				type: DcsaTypes.ReeferEvent,
				schema: ReeferEventSchema
			},
			{
				type: DcsaTypes.ReeferEventMetadataActive,
				schema: ReeferEventMetadataActiveSchema
			},
			{
				type: DcsaTypes.ReeferEventMetadataRetraction,
				schema: ReeferEventMetadataRetractionSchema
			},
			{
				type: DcsaTypes.ReeferEventTypeCodes,
				schema: ReeferEventTypeCodesSchema
			},
			{
				type: DcsaTypes.ReeferMeasurements,
				schema: ReeferMeasurementsSchema
			},
			{
				type: DcsaTypes.ReeferPayload,
				schema: ReeferPayloadSchema
			},
			{
				type: DcsaTypes.ReeferSetpoint,
				schema: ReeferSetpointSchema
			},
			{
				type: DcsaTypes.ReeferSubscriptionBody,
				schema: ReeferSubscriptionBodySchema
			},
			{
				type: DcsaTypes.Reference,
				schema: ReferenceSchema
			},
			{
				type: DcsaTypes.RelatedDocumentReference,
				schema: RelatedDocumentReferenceSchema
			},
			{
				type: DcsaTypes.ShipmentEvent,
				schema: ShipmentEventSchema
			},
			{
				type: DcsaTypes.ShipmentEventTypeCodes,
				schema: ShipmentEventTypeCodesSchema
			},
			{
				type: DcsaTypes.ShipmentPayload,
				schema: ShipmentPayloadSchema
			},
			{
				type: DcsaTypes.ShipmentSubscriptionBody,
				schema: ShipmentSubscriptionBodySchema
			},
			{
				type: DcsaTypes.TntPublisherRole,
				schema: TntPublisherRoleSchema
			},
			{
				type: DcsaTypes.TransportCall,
				schema: TransportCallSchema
			},
			{
				type: DcsaTypes.TransportCallBase,
				schema: TransportCallBaseSchema
			},
			{
				type: DcsaTypes.TransportCallFacilityTypeCodes,
				schema: TransportCallFacilityTypeCodesSchema
			},
			{
				type: DcsaTypes.TransportCallSubscriptionBody,
				schema: TransportCallSubscriptionBodySchema
			},
			{
				type: DcsaTypes.TransportEvent,
				schema: TransportEventSchema
			},
			{
				type: DcsaTypes.TransportEventTypeCodes,
				schema: TransportEventTypeCodesSchema
			},
			{
				type: DcsaTypes.TransportPayload,
				schema: TransportPayloadSchema
			},
			{
				type: DcsaTypes.TransportSubscriptionBody,
				schema: TransportSubscriptionBodySchema
			},
			{
				type: DcsaTypes.TruckTransportCall,
				schema: TruckTransportCallSchema
			},
			{
				type: DcsaTypes.Vessel,
				schema: VesselSchema
			},
			{
				type: DcsaTypes.VesselTransportCall,
				schema: VesselTransportCallSchema
			}
		];
		DataTypeHelper.registerTypes(DcsaContexts.Namespace, undefined, types);
		DataTypeHelper.registerTypes(
			DcsaContexts.JsonSchemaNamespace,
			undefined,
			types.map(t => ({ type: `Dcsa${t.type}`, schema: t.schema }))
		);
	}
}
