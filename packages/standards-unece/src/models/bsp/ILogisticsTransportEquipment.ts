// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAirFlowUnitMeasureType } from "./IAirFlowUnitMeasureType.js";
import type { IAssociatedTransportEquipment } from "./IAssociatedTransportEquipment.js";
import type { IAttachedTransportEquipment } from "./IAttachedTransportEquipment.js";
import type { ICommunicationEvent } from "./ICommunicationEvent.js";
import type { IConsignment } from "./IConsignment.js";
import type { IConsignmentItem } from "./IConsignmentItem.js";
import type { ICountry } from "./ICountry.js";
import type { IDangerousGoods } from "./IDangerousGoods.js";
import type { IDeliveryInstructions } from "./IDeliveryInstructions.js";
import type { IDocument } from "./IDocument.js";
import type { IHandlingInstructions } from "./IHandlingInstructions.js";
import type { IIOTDevice } from "./IIOTDevice.js";
import type { ILinearUnitMeasureType } from "./ILinearUnitMeasureType.js";
import type { ILogisticsStatus } from "./ILogisticsStatus.js";
import type { ILogisticsTransportMeans } from "./ILogisticsTransportMeans.js";
import type { INote } from "./INote.js";
import type { IPairing } from "./IPairing.js";
import type { IQuantityType } from "./IQuantityType.js";
import type { IQuarantineInstructions } from "./IQuarantineInstructions.js";
import type { IRiskAnalysisResult } from "./IRiskAnalysisResult.js";
import type { ISeal } from "./ISeal.js";
import type { IService } from "./IService.js";
import type { IServiceCharge } from "./IServiceCharge.js";
import type { ISpatialDimension } from "./ISpatialDimension.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITransportEvent } from "./ITransportEvent.js";
import type { ITransportInstructions } from "./ITransportInstructions.js";
import type { ITransportMovement } from "./ITransportMovement.js";
import type { ITransportRoute } from "./ITransportRoute.js";
import type { ITransportSettingTemperature } from "./ITransportSettingTemperature.js";
import type { IVolumeUnitMeasureType } from "./IVolumeUnitMeasureType.js";
import type { IWeightUnitMeasureType } from "./IWeightUnitMeasureType.js";
import type { TransportEquipmentCategoryCodeList } from "../lists/transportEquipmentCategoryCodeList.js";
import type { TransportEquipmentFullnessCodeList } from "../lists/transportEquipmentFullnessCodeList.js";
import type { TransportEquipmentHaulageArrangementsCodeList } from "../lists/transportEquipmentHaulageArrangementsCodeList.js";
import type { TransportEquipmentLegalStatusCodeList } from "../lists/transportEquipmentLegalStatusCodeList.js";
import type { TransportEquipmentMovementStatusCodeList } from "../lists/transportEquipmentMovementStatusCodeList.js";
import type { TransportEquipmentOperationalStatusCodeList } from "../lists/transportEquipmentOperationalStatusCodeList.js";
import type { TransportEquipmentSizeTypeCodeList } from "../lists/transportEquipmentSizeTypeCodeList.js";
import type { TransportEquipmentSupplierPartyRoleCodeList } from "../lists/transportEquipmentSupplierPartyRoleCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A piece of equipment used to hold, protect or secure cargo for logistics purposes.
 * A referenced piece of equipment used to hold, protect or secure cargo for logistics purposes.
 * @see https://vocabulary.uncefact.org/LogisticsTransportEquipment
 */
export interface ILogisticsTransportEquipment extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.LogisticsTransportEquipment;

	/**
	 * The indication of whether or not this piece of logistics transport equipment is accompanied, such as by a transport
	 * means.
	 * @see https://vocabulary.uncefact.org/accompaniedIndicator
	 */
	accompaniedIndicator?: boolean;

	/**
	 * An actual route for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/actualRoute
	 */
	actualRoute?: ITransportRoute[];

	/**
	 * Additional instructions for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/additionalInstructions
	 */
	additionalInstructions?: ITransportInstructions[];

	/**
	 * A seal affixed to this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/affixedSeal
	 */
	affixedSeal?: ISeal[];

	/**
	 * The measure of the air flow for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/airFlowUnitAirFlowMeasure
	 */
	airFlowUnitAirFlowMeasure?: IAirFlowUnitMeasureType;

	/**
	 * A note providing information applicable to this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/applicableNote
	 */
	applicableNote?: INote[];

	/**
	 * A service charge applicable to this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/applicableServiceCharge
	 */
	applicableServiceCharge?: IServiceCharge[];

	/**
	 * A referenced document associated with this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IDocument[];

	/**
	 * Transport equipment attached to this piece of logistics transport equipment, such as ropes or refrigeration units.
	 * @see https://vocabulary.uncefact.org/attachedAttachedTransportEquipment
	 */
	attachedAttachedTransportEquipment?: IAttachedTransportEquipment[];

	/**
	 * An IOT device attached to this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/attachedIOTDevice
	 */
	attachedIOTDevice?: IIOTDevice[];

	/**
	 * The number of axles for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/axleQuantity
	 */
	axleQuantity?: IQuantityType[];

	/**
	 * A bonded warehouse storage event specifying when and where this piece of logistics transport equipment will be, or has
	 * been, stored.
	 * @see https://vocabulary.uncefact.org/bondedWarehouseStorageEvent
	 */
	bondedWarehouseStorageEvent?: ITransportEvent[];

	/**
	 * A code specifying the cargo residue status for this piece of logistics transport equipment, such as required by
	 * dangerous goods regulations.
	 * @see https://vocabulary.uncefact.org/cargoResidueStatusCode
	 */
	cargoResidueStatusCode?: string;

	/**
	 * A piece of transport equipment carried on this piece of logistics transport equipment, such as a container placed on a
	 * rail wagon.
	 * @see https://vocabulary.uncefact.org/carriedTransportEquipment
	 */
	carriedTransportEquipment?: IAssociatedTransportEquipment[];

	/**
	 * A carrier assigned booking identifier for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/carrierAssignedBookingId
	 */
	carrierAssignedBookingId?: string;

	/**
	 * A carrier party for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/carrierParty
	 */
	carrierParty?: ITradeParty[];

	/**
	 * The characteristic or characteristics, expressed as text, of a piece of logistics transport equipment, such as its size
	 * and type.
	 * @see https://vocabulary.uncefact.org/characteristic
	 */
	characteristic?: string;

	/**
	 * The consignee assigned consignment identifier for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/consigneeAssignedConsignmentId
	 */
	consigneeAssignedConsignmentId?: string;

	/**
	 * A consolidation event specifying when and where this piece of logistics transport equipment will be, or has been,
	 * stuffed.
	 * @see https://vocabulary.uncefact.org/consolidationEvent
	 */
	consolidationEvent?: ITransportEvent;

	/**
	 * A consignment contained in this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/containedConsignment
	 */
	containedConsignment?: IConsignment[];

	/**
	 * The number of consignments contained in this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/containedConsignmentQuantity
	 */
	containedConsignmentQuantity?: IQuantityType;

	/**
	 * A piece of transport equipment contained within this piece of logistics transport equipment, such as a pallet.
	 * @see https://vocabulary.uncefact.org/containedTransportEquipment
	 */
	containedTransportEquipment?: IAssociatedTransportEquipment[];

	/**
	 * A damage remark, expressed as text, for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/damageRemark
	 */
	damageRemark?: string;

	/**
	 * A deconsolidation event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/deconsolidationEvent
	 */
	deconsolidationEvent?: ITransportEvent[];

	/**
	 * Delivery instructions for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/deliveryInstructions
	 */
	deliveryInstructions?: IDeliveryInstructions[];

	/**
	 * A delivery event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/deliveryTransportEvent
	 */
	deliveryTransportEvent?: ITransportEvent[];

	/**
	 * A quantity of goods items in this logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/goodsItemUnitQuantity
	 */
	goodsItemUnitQuantity?: IQuantityType[];

	/**
	 * A measure of the gross goods volume of this logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/grossGoodsVolumeMeasure
	 */
	grossGoodsVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * A measure of the gross goods weight of this logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/grossGoodsWeightMeasure
	 */
	grossGoodsWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * Handling instructions for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/handlingInstructions
	 */
	handlingInstructions?: IHandlingInstructions;

	/**
	 * The percent of the humidity (moisture content) within this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/humidityPercent
	 */
	humidityPercent?: string;

	/**
	 * The unique identifier of this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * Information, expressed as text, for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/information
	 */
	information?: string;

	/**
	 * The invoicee party for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/invoiceeParty
	 */
	invoiceeParty?: ITradeParty;

	/**
	 * The linear spatial dimensions of this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/linearDimension
	 */
	linearDimension?: ISpatialDimension[];

	/**
	 * The measure of the loading length of this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/linearUnitLoadingLengthMeasure
	 */
	linearUnitLoadingLengthMeasure?: ILinearUnitMeasureType;

	/**
	 * The measure of the length required in a lane for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/linearUnitRequiredLaneLengthMeasure
	 */
	linearUnitRequiredLaneLengthMeasure?: ILinearUnitMeasureType;

	/**
	 * A consignment item loaded onto, or into, this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadedConsignmentItem
	 */
	loadedConsignmentItem?: IConsignmentItem[];

	/**
	 * Dangerous goods loaded into this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadedDangerousGoods
	 */
	loadedDangerousGoods?: IDangerousGoods[];

	/**
	 * The number of packages loaded into or onto this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadedPackageQuantity
	 */
	loadedPackageQuantity?: IQuantityType;

	/**
	 * The loading event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadingEvent
	 */
	loadingEvent?: ITransportEvent;

	/**
	 * Loading instructions for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadingInstructions
	 */
	loadingInstructions?: ITransportInstructions[];

	/**
	 * The party that loads this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadingParty
	 */
	loadingParty?: ITradeParty[];

	/**
	 * A loading remark, expressed as text, for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadingRemark
	 */
	loadingRemark?: string;

	/**
	 * The sequence number differentiating this piece of logistics transport equipment from others during loading.
	 * @see https://vocabulary.uncefact.org/loadingSequenceNumeric
	 */
	loadingSequenceNumeric?: string;

	/**
	 * The code specifying the characteristic or characteristics of this piece of logistics transport equipment, such as the
	 * ISO 6346 transport equipment size and type code.
	 * @see https://vocabulary.uncefact.org/logisticsTransportEquipmentCharacteristicCode
	 */
	logisticsTransportEquipmentCharacteristicCode?: string;

	/**
	 * A main carriage transport movement for this piece of logistic transport equipment.
	 * @see https://vocabulary.uncefact.org/mainCarriageTransportMovement
	 */
	mainCarriageTransportMovement?: ITransportMovement[];

	/**
	 * The manufacturer party specified for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: ITradeParty[];

	/**
	 * The manufacturing date, time, date time, or other date time value for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/manufacturingDateTime
	 */
	manufacturingDateTime?: string;

	/**
	 * A measure of the net goods volume of this logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/netGoodsVolumeMeasure
	 */
	netGoodsVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * A measure of the net goods weight of this logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/netGoodsWeightMeasure
	 */
	netGoodsWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * A party who has been or will be notified about this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/notifiedParty
	 */
	notifiedParty?: ITradeParty[];

	/**
	 * An on-carriage transport movement for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/onCarriageTransportMovement
	 */
	onCarriageTransportMovement?: ITransportMovement[];

	/**
	 * The party that operates this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/operatingParty
	 */
	operatingParty?: ITradeParty[];

	/**
	 * A party who owns this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/ownerParty
	 */
	ownerParty?: ITradeParty[];

	/**
	 * A pick-up event specifying when and where this piece of logistics transport equipment will be, or has been, collected,
	 * i.e. picked-up by the carrier.
	 * @see https://vocabulary.uncefact.org/pickUpEvent
	 */
	pickUpEvent?: ITransportEvent[];

	/**
	 * A positioning event specifying when and where this piece of logistics transport equipment will be, or has been,
	 * positioned, i.e. delivered and available for pick-up.
	 * @see https://vocabulary.uncefact.org/positioningEvent
	 */
	positioningEvent?: ITransportEvent;

	/**
	 * The number of power supply connectors for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/powerSupplyConnectorQuantity
	 */
	powerSupplyConnectorQuantity?: IQuantityType;

	/**
	 * The type of power supply, expressed as text, for this piece of logistics transport equipment, such as diesel fuel or
	 * electricity.
	 * @see https://vocabulary.uncefact.org/powerSupplyType
	 */
	powerSupplyType?: string;

	/**
	 * The code specifying the type of power supply for this piece of logistics transport equipment, such as diesel fuel or
	 * electricity.
	 * @see https://vocabulary.uncefact.org/powerSupplyTypeCode
	 */
	powerSupplyTypeCode?: string;

	/**
	 * A pre-carriage transport movement for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/preCarriageTransportMovement
	 */
	preCarriageTransportMovement?: ITransportMovement[];

	/**
	 * Quarantine instructions for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/quarantineInstructions
	 */
	quarantineInstructions?: IQuarantineInstructions[];

	/**
	 * The registration country for this logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/registrationCountry
	 */
	registrationCountry?: ICountry[];

	/**
	 * A communication event related to this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/relatedEvent
	 */
	relatedEvent?: ICommunicationEvent[];

	/**
	 * The release identifier for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/releaseId
	 */
	releaseId?: string;

	/**
	 * The release restriction, expressed as text, for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/releaseRestriction
	 */
	releaseRestriction?: string;

	/**
	 * A reportable quantity for this logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/reportableQuantity
	 */
	reportableQuantity?: IQuantityType[];

	/**
	 * A status reported for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/reportedLogisticsStatus
	 */
	reportedLogisticsStatus?: ILogisticsStatus[];

	/**
	 * An IOT device reported communication pairing for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/reportingIOTDevicePairing
	 */
	reportingIOTDevicePairing?: IPairing[];

	/**
	 * An IOT device reported transport event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/reportingIOTDeviceTransportEvent
	 */
	reportingIOTDeviceTransportEvent?: ITransportEvent[];

	/**
	 * A requested route for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/requestedRoute
	 */
	requestedRoute?: ITransportRoute[];

	/**
	 * The indication of whether or not this piece of logistics transport equipment is returnable.
	 * @see https://vocabulary.uncefact.org/returnableIndicator
	 */
	returnableIndicator?: boolean;

	/**
	 * A scheduled or planned route for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/scheduledRoute
	 */
	scheduledRoute?: ITransportRoute[];

	/**
	 * The quantity of seals for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/sealQuantity
	 */
	sealQuantity?: IQuantityType[];

	/**
	 * The indication of whether or not this piece of logistics transport equipment is sealed.
	 * @see https://vocabulary.uncefact.org/sealedIndicator
	 */
	sealedIndicator?: boolean;

	/**
	 * The sequence number differentiating this piece of logistics transport equipment from others in a set of transport
	 * equipment.
	 * @see https://vocabulary.uncefact.org/sequenceNumeric
	 */
	sequenceNumeric?: string;

	/**
	 * A temperature setting for this piece of logistics transport equipment, such as storage temperature or operational
	 * temperature.
	 * @see https://vocabulary.uncefact.org/settingTemperature
	 */
	settingTemperature?: ITransportSettingTemperature[];

	/**
	 * Shipper reference information, expressed as text, for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/shipperReferenceInformation
	 */
	shipperReferenceInformation?: string;

	/**
	 * A result of a logistics risk analysis calculation specified for this transport equipment.
	 * @see https://vocabulary.uncefact.org/specifiedRiskAnalysisResult
	 */
	specifiedRiskAnalysisResult?: IRiskAnalysisResult[];

	/**
	 * A transport means specified for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/specifiedTransportMeans
	 */
	specifiedTransportMeans?: ILogisticsTransportMeans;

	/**
	 * A storage event specifying when and where this piece of logistics transport equipment will be, or has been, stored.
	 * @see https://vocabulary.uncefact.org/storageEvent
	 */
	storageEvent?: ITransportEvent[];

	/**
	 * The stowage position identifier for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/stowagePositionId
	 */
	stowagePositionId?: string;

	/**
	 * The code specifying the category for this piece of logistics transport equipment, such as container or trailer.
	 * @see https://vocabulary.uncefact.org/transportEquipmentCategoryCode
	 */
	transportEquipmentCategoryCode?: TransportEquipmentCategoryCodeList[];

	/**
	 * The code specifying the used capacity of this piece of logistics transport equipment, such as full or empty.
	 * @see https://vocabulary.uncefact.org/transportEquipmentFullnessUsedCapacityCode
	 */
	transportEquipmentFullnessUsedCapacityCode?: TransportEquipmentFullnessCodeList;

	/**
	 * The code specifying the arrangement for the haulage of this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentHaulageArrangementsCode
	 */
	transportEquipmentHaulageArrangementsCode?: TransportEquipmentHaulageArrangementsCodeList;

	/**
	 * The code specifying the legal status of this piece of logistics transport equipment with respect to a specific law such
	 * as the "Container Convention Code".
	 * @see https://vocabulary.uncefact.org/transportEquipmentLegalStatusLegalStatusCode
	 */
	transportEquipmentLegalStatusLegalStatusCode?: TransportEquipmentLegalStatusCodeList;

	/**
	 * The code specifying the transport movement status for this piece of logistics transport equipment, such as for export,
	 * for import, or for transhipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentMovementStatusTransportMovementStatusCode
	 */
	transportEquipmentMovementStatusTransportMovementStatusCode?: TransportEquipmentMovementStatusCodeList;

	/**
	 * The code specifying the operational status for this piece of logistics transport equipment, such as to be repaired or to
	 * be shifted.
	 * @see https://vocabulary.uncefact.org/transportEquipmentOperationalStatusCode
	 */
	transportEquipmentOperationalStatusCode?: TransportEquipmentOperationalStatusCodeList[];

	/**
	 * The code specifying the characteristics, such as size and type, of this referenced piece of logistics transport
	 * equipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentSizeTypeCharacteristicCode
	 */
	transportEquipmentSizeTypeCharacteristicCode?: TransportEquipmentSizeTypeCodeList;

	/**
	 * The code specifying the role of the party responsible for supplying this piece of logistics transport equipment, such as
	 * the carrier or the buyer.
	 * @see https://vocabulary.uncefact.org/transportEquipmentSupplierPartyRoleCode
	 */
	transportEquipmentSupplierPartyRoleCode?: TransportEquipmentSupplierPartyRoleCodeList;

	/**
	 * A transport service for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/transportService
	 */
	transportService?: IService[];

	/**
	 * The transport services buyer party for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/transportServicesBuyerParty
	 */
	transportServicesBuyerParty?: ITradeParty[];

	/**
	 * The number of units of this type of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IQuantityType[];

	/**
	 * The unloading event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/unloadingEvent
	 */
	unloadingEvent?: ITransportEvent;

	/**
	 * Unloading instructions for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/unloadingInstructions
	 */
	unloadingInstructions?: ITransportInstructions;

	/**
	 * The sequence number differentiating this piece of logistics transport equipment from others during unloading.
	 * @see https://vocabulary.uncefact.org/unloadingSequenceNumeric
	 */
	unloadingSequenceNumeric?: string;

	/**
	 * A measure of the verified gross weight (mass) of this piece of logistics transport equipment which is the weight (mass)
	 * including loaded goods, packing and transport equipment.
	 * @see https://vocabulary.uncefact.org/verifiedGrossWeightMeasure
	 */
	verifiedGrossWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * The measure of the gross volume of this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure
	 */
	volumeUnitGrossVolumeMeasure?: IVolumeUnitMeasureType[];

	/**
	 * The measure of the gross weight (mass) of this piece of logistics transport equipment which is the weight (mass)
	 * including loaded goods, packing and transport equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure
	 */
	weightUnitGrossWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * A measure of the net weight (mass) of this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IWeightUnitMeasureType[];

	/**
	 * The measure of the tare weight (mass) of this piece of logistics transport equipment which is the weight (mass)
	 * including permanent equipment but excluding goods and loose accessories.
	 * @see https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
	 */
	weightUnitTareWeightMeasure?: IWeightUnitMeasureType[];
}
