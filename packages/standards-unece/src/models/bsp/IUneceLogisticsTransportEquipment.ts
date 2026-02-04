// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceAirFlowUnitMeasureType } from "./IUneceAirFlowUnitMeasureType.js";
import type { IUneceAssociatedTransportEquipment } from "./IUneceAssociatedTransportEquipment.js";
import type { IUneceAttachedTransportEquipment } from "./IUneceAttachedTransportEquipment.js";
import type { IUneceCommunicationEvent } from "./IUneceCommunicationEvent.js";
import type { IUneceConsignment } from "./IUneceConsignment.js";
import type { IUneceConsignmentItem } from "./IUneceConsignmentItem.js";
import type { IUneceCountry } from "./IUneceCountry.js";
import type { IUneceDangerousGoods } from "./IUneceDangerousGoods.js";
import type { IUneceDeliveryInstructions } from "./IUneceDeliveryInstructions.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceHandlingInstructions } from "./IUneceHandlingInstructions.js";
import type { IUneceIOTDevice } from "./IUneceIOTDevice.js";
import type { IUneceLinearUnitMeasureType } from "./IUneceLinearUnitMeasureType.js";
import type { IUneceLogisticsStatus } from "./IUneceLogisticsStatus.js";
import type { IUneceLogisticsTransportMeans } from "./IUneceLogisticsTransportMeans.js";
import type { IUneceNote } from "./IUneceNote.js";
import type { IUnecePairing } from "./IUnecePairing.js";
import type { IUneceQuantityType } from "./IUneceQuantityType.js";
import type { IUneceQuarantineInstructions } from "./IUneceQuarantineInstructions.js";
import type { IUneceRiskAnalysisResult } from "./IUneceRiskAnalysisResult.js";
import type { IUneceSeal } from "./IUneceSeal.js";
import type { IUneceService } from "./IUneceService.js";
import type { IUneceServiceCharge } from "./IUneceServiceCharge.js";
import type { IUneceSpatialDimension } from "./IUneceSpatialDimension.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTransportEvent } from "./IUneceTransportEvent.js";
import type { IUneceTransportInstructions } from "./IUneceTransportInstructions.js";
import type { IUneceTransportMovement } from "./IUneceTransportMovement.js";
import type { IUneceTransportRoute } from "./IUneceTransportRoute.js";
import type { IUneceTransportSettingTemperature } from "./IUneceTransportSettingTemperature.js";
import type { IUneceVolumeUnitMeasureType } from "./IUneceVolumeUnitMeasureType.js";
import type { IUneceWeightUnitMeasureType } from "./IUneceWeightUnitMeasureType.js";
import type { UneceTransportEquipmentCategoryCodeList } from "../lists/uneceTransportEquipmentCategoryCodeList.js";
import type { UneceTransportEquipmentFullnessCodeList } from "../lists/uneceTransportEquipmentFullnessCodeList.js";
import type { UneceTransportEquipmentHaulageArrangementsCodeList } from "../lists/uneceTransportEquipmentHaulageArrangementsCodeList.js";
import type { UneceTransportEquipmentLegalStatusCodeList } from "../lists/uneceTransportEquipmentLegalStatusCodeList.js";
import type { UneceTransportEquipmentMovementStatusCodeList } from "../lists/uneceTransportEquipmentMovementStatusCodeList.js";
import type { UneceTransportEquipmentOperationalStatusCodeList } from "../lists/uneceTransportEquipmentOperationalStatusCodeList.js";
import type { UneceTransportEquipmentSizeTypeCodeList } from "../lists/uneceTransportEquipmentSizeTypeCodeList.js";
import type { UneceTransportEquipmentSupplierPartyRoleCodeList } from "../lists/uneceTransportEquipmentSupplierPartyRoleCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A piece of equipment used to hold, protect or secure cargo for logistics purposes.
 * A referenced piece of equipment used to hold, protect or secure cargo for logistics purposes.
 * @see https://vocabulary.uncefact.org/LogisticsTransportEquipment
 */
export interface IUneceLogisticsTransportEquipment extends IJsonLdNodeObject {
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
	actualRoute?: IUneceTransportRoute[];

	/**
	 * Additional instructions for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/additionalInstructions
	 */
	additionalInstructions?: IUneceTransportInstructions[];

	/**
	 * A seal affixed to this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/affixedSeal
	 */
	affixedSeal?: IUneceSeal[];

	/**
	 * The measure of the air flow for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/airFlowUnitAirFlowMeasure
	 */
	airFlowUnitAirFlowMeasure?: IUneceAirFlowUnitMeasureType;

	/**
	 * A note providing information applicable to this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/applicableNote
	 */
	applicableNote?: IUneceNote[];

	/**
	 * A service charge applicable to this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/applicableServiceCharge
	 */
	applicableServiceCharge?: IUneceServiceCharge[];

	/**
	 * A referenced document associated with this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/associatedDocument
	 */
	associatedDocument?: IUneceDocument[];

	/**
	 * Transport equipment attached to this piece of logistics transport equipment, such as ropes or refrigeration units.
	 * @see https://vocabulary.uncefact.org/attachedAttachedTransportEquipment
	 */
	attachedAttachedTransportEquipment?: IUneceAttachedTransportEquipment[];

	/**
	 * An IOT device attached to this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/attachedIOTDevice
	 */
	attachedIOTDevice?: IUneceIOTDevice[];

	/**
	 * The number of axles for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/axleQuantity
	 */
	axleQuantity?: IUneceQuantityType;

	/**
	 * A bonded warehouse storage event specifying when and where this piece of logistics transport equipment will be, or has
	 * been, stored.
	 * @see https://vocabulary.uncefact.org/bondedWarehouseStorageEvent
	 */
	bondedWarehouseStorageEvent?: IUneceTransportEvent[];

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
	carriedTransportEquipment?: IUneceAssociatedTransportEquipment[];

	/**
	 * A carrier assigned booking identifier for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/carrierAssignedBookingId
	 */
	carrierAssignedBookingId: string;

	/**
	 * A carrier party for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/carrierParty
	 */
	carrierParty?: IUneceTradeParty[];

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
	consigneeAssignedConsignmentId: string;

	/**
	 * A consolidation event specifying when and where this piece of logistics transport equipment will be, or has been,
	 * stuffed.
	 * @see https://vocabulary.uncefact.org/consolidationEvent
	 */
	consolidationEvent?: IUneceTransportEvent;

	/**
	 * A consignment contained in this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/containedConsignment
	 */
	containedConsignment?: IUneceConsignment[];

	/**
	 * The number of consignments contained in this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/containedConsignmentQuantity
	 */
	containedConsignmentQuantity?: IUneceQuantityType;

	/**
	 * A piece of transport equipment contained within this piece of logistics transport equipment, such as a pallet.
	 * @see https://vocabulary.uncefact.org/containedTransportEquipment
	 */
	containedTransportEquipment?: IUneceAssociatedTransportEquipment[];

	/**
	 * A damage remark, expressed as text, for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/damageRemark
	 */
	damageRemark?: string;

	/**
	 * A deconsolidation event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/deconsolidationEvent
	 */
	deconsolidationEvent?: IUneceTransportEvent[];

	/**
	 * Delivery instructions for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/deliveryInstructions
	 */
	deliveryInstructions?: IUneceDeliveryInstructions[];

	/**
	 * A delivery event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/deliveryTransportEvent
	 */
	deliveryTransportEvent?: IUneceTransportEvent[];

	/**
	 * A quantity of goods items in this logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/goodsItemUnitQuantity
	 */
	goodsItemUnitQuantity?: IUneceQuantityType[];

	/**
	 * A measure of the gross goods volume of this logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/grossGoodsVolumeMeasure
	 */
	grossGoodsVolumeMeasure?: IUneceVolumeUnitMeasureType[];

	/**
	 * A measure of the gross goods weight of this logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/grossGoodsWeightMeasure
	 */
	grossGoodsWeightMeasure?: IUneceWeightUnitMeasureType[];

	/**
	 * Handling instructions for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/handlingInstructions
	 */
	handlingInstructions?: IUneceHandlingInstructions;

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
	invoiceeParty?: IUneceTradeParty;

	/**
	 * The linear spatial dimensions of this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/linearDimension
	 */
	linearDimension?: IUneceSpatialDimension;

	/**
	 * The measure of the loading length of this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/linearUnitLoadingLengthMeasure
	 */
	linearUnitLoadingLengthMeasure?: IUneceLinearUnitMeasureType;

	/**
	 * The measure of the length required in a lane for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/linearUnitRequiredLaneLengthMeasure
	 */
	linearUnitRequiredLaneLengthMeasure?: IUneceLinearUnitMeasureType;

	/**
	 * A consignment item loaded onto, or into, this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadedConsignmentItem
	 */
	loadedConsignmentItem?: IUneceConsignmentItem[];

	/**
	 * Dangerous goods loaded into this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadedDangerousGoods
	 */
	loadedDangerousGoods?: IUneceDangerousGoods[];

	/**
	 * The number of packages loaded into or onto this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadedPackageQuantity
	 */
	loadedPackageQuantity?: IUneceQuantityType;

	/**
	 * The loading event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadingEvent
	 */
	loadingEvent?: IUneceTransportEvent;

	/**
	 * Loading instructions for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadingInstructions
	 */
	loadingInstructions?: IUneceTransportInstructions[];

	/**
	 * The party that loads this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/loadingParty
	 */
	loadingParty?: IUneceTradeParty;

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
	mainCarriageTransportMovement?: IUneceTransportMovement[];

	/**
	 * The manufacturer party specified for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: IUneceTradeParty[];

	/**
	 * The manufacturing date, time, date time, or other date time value for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/manufacturingDateTime
	 */
	manufacturingDateTime?: string;

	/**
	 * A measure of the net goods volume of this logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/netGoodsVolumeMeasure
	 */
	netGoodsVolumeMeasure?: IUneceVolumeUnitMeasureType[];

	/**
	 * A measure of the net goods weight of this logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/netGoodsWeightMeasure
	 */
	netGoodsWeightMeasure?: IUneceWeightUnitMeasureType[];

	/**
	 * A party who has been or will be notified about this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/notifiedParty
	 */
	notifiedParty?: IUneceTradeParty[];

	/**
	 * An on-carriage transport movement for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/onCarriageTransportMovement
	 */
	onCarriageTransportMovement?: IUneceTransportMovement[];

	/**
	 * The party that operates this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/operatingParty
	 */
	operatingParty?: IUneceTradeParty;

	/**
	 * A party who owns this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/ownerParty
	 */
	ownerParty?: IUneceTradeParty[];

	/**
	 * A pick-up event specifying when and where this piece of logistics transport equipment will be, or has been, collected,
	 * i.e. picked-up by the carrier.
	 * @see https://vocabulary.uncefact.org/pickUpEvent
	 */
	pickUpEvent?: IUneceTransportEvent[];

	/**
	 * A positioning event specifying when and where this piece of logistics transport equipment will be, or has been,
	 * positioned, i.e. delivered and available for pick-up.
	 * @see https://vocabulary.uncefact.org/positioningEvent
	 */
	positioningEvent?: IUneceTransportEvent;

	/**
	 * The number of power supply connectors for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/powerSupplyConnectorQuantity
	 */
	powerSupplyConnectorQuantity?: IUneceQuantityType;

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
	preCarriageTransportMovement?: IUneceTransportMovement[];

	/**
	 * Quarantine instructions for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/quarantineInstructions
	 */
	quarantineInstructions?: IUneceQuarantineInstructions[];

	/**
	 * The registration country for this logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/registrationCountry
	 */
	registrationCountry?: IUneceCountry;

	/**
	 * A communication event related to this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/relatedEvent
	 */
	relatedEvent?: IUneceCommunicationEvent[];

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
	reportableQuantity?: IUneceQuantityType[];

	/**
	 * A status reported for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/reportedLogisticsStatus
	 */
	reportedLogisticsStatus?: IUneceLogisticsStatus[];

	/**
	 * An IOT device reported communication pairing for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/reportingIOTDevicePairing
	 */
	reportingIOTDevicePairing?: IUnecePairing[];

	/**
	 * An IOT device reported transport event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/reportingIOTDeviceTransportEvent
	 */
	reportingIOTDeviceTransportEvent?: IUneceTransportEvent[];

	/**
	 * A requested route for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/requestedRoute
	 */
	requestedRoute?: IUneceTransportRoute[];

	/**
	 * The indication of whether or not this piece of logistics transport equipment is returnable.
	 * @see https://vocabulary.uncefact.org/returnableIndicator
	 */
	returnableIndicator?: boolean;

	/**
	 * A scheduled or planned route for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/scheduledRoute
	 */
	scheduledRoute?: IUneceTransportRoute[];

	/**
	 * The quantity of seals for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/sealQuantity
	 */
	sealQuantity?: IUneceQuantityType;

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
	settingTemperature?: IUneceTransportSettingTemperature[];

	/**
	 * Shipper reference information, expressed as text, for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/shipperReferenceInformation
	 */
	shipperReferenceInformation?: string;

	/**
	 * A result of a logistics risk analysis calculation specified for this transport equipment.
	 * @see https://vocabulary.uncefact.org/specifiedRiskAnalysisResult
	 */
	specifiedRiskAnalysisResult?: IUneceRiskAnalysisResult[];

	/**
	 * A transport means specified for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/specifiedTransportMeans
	 */
	specifiedTransportMeans?: IUneceLogisticsTransportMeans;

	/**
	 * A storage event specifying when and where this piece of logistics transport equipment will be, or has been, stored.
	 * @see https://vocabulary.uncefact.org/storageEvent
	 */
	storageEvent?: IUneceTransportEvent[];

	/**
	 * The stowage position identifier for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/stowagePositionId
	 */
	stowagePositionId?: string;

	/**
	 * The code specifying the category for this piece of logistics transport equipment, such as container or trailer.
	 * @see https://vocabulary.uncefact.org/transportEquipmentCategoryCode
	 */
	transportEquipmentCategoryCode?: UneceTransportEquipmentCategoryCodeList;

	/**
	 * The code specifying the used capacity of this piece of logistics transport equipment, such as full or empty.
	 * @see https://vocabulary.uncefact.org/transportEquipmentFullnessUsedCapacityCode
	 */
	transportEquipmentFullnessUsedCapacityCode?: UneceTransportEquipmentFullnessCodeList;

	/**
	 * The code specifying the arrangement for the haulage of this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentHaulageArrangementsCode
	 */
	transportEquipmentHaulageArrangementsCode?: UneceTransportEquipmentHaulageArrangementsCodeList;

	/**
	 * The code specifying the legal status of this piece of logistics transport equipment with respect to a specific law such
	 * as the "Container Convention Code".
	 * @see https://vocabulary.uncefact.org/transportEquipmentLegalStatusLegalStatusCode
	 */
	transportEquipmentLegalStatusLegalStatusCode?: UneceTransportEquipmentLegalStatusCodeList;

	/**
	 * The code specifying the transport movement status for this piece of logistics transport equipment, such as for export,
	 * for import, or for transhipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentMovementStatusTransportMovementStatusCode
	 */
	transportEquipmentMovementStatusTransportMovementStatusCode?: UneceTransportEquipmentMovementStatusCodeList;

	/**
	 * The code specifying the operational status for this piece of logistics transport equipment, such as to be repaired or to
	 * be shifted.
	 * @see https://vocabulary.uncefact.org/transportEquipmentOperationalStatusCode
	 */
	transportEquipmentOperationalStatusCode?: UneceTransportEquipmentOperationalStatusCodeList;

	/**
	 * The code specifying the characteristics, such as size and type, of this referenced piece of logistics transport
	 * equipment.
	 * @see https://vocabulary.uncefact.org/transportEquipmentSizeTypeCharacteristicCode
	 */
	transportEquipmentSizeTypeCharacteristicCode?: UneceTransportEquipmentSizeTypeCodeList;

	/**
	 * The code specifying the role of the party responsible for supplying this piece of logistics transport equipment, such as
	 * the carrier or the buyer.
	 * @see https://vocabulary.uncefact.org/transportEquipmentSupplierPartyRoleCode
	 */
	transportEquipmentSupplierPartyRoleCode?: UneceTransportEquipmentSupplierPartyRoleCodeList;

	/**
	 * A transport service for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/transportService
	 */
	transportService?: IUneceService[];

	/**
	 * The transport services buyer party for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/transportServicesBuyerParty
	 */
	transportServicesBuyerParty?: IUneceTradeParty;

	/**
	 * The number of units of this type of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/unitQuantity
	 */
	unitQuantity?: IUneceQuantityType;

	/**
	 * The unloading event for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/unloadingEvent
	 */
	unloadingEvent?: IUneceTransportEvent;

	/**
	 * Unloading instructions for this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/unloadingInstructions
	 */
	unloadingInstructions?: IUneceTransportInstructions;

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
	verifiedGrossWeightMeasure?: IUneceWeightUnitMeasureType;

	/**
	 * The measure of the gross volume of this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/volumeUnitGrossVolumeMeasure
	 */
	volumeUnitGrossVolumeMeasure?: IUneceVolumeUnitMeasureType;

	/**
	 * The measure of the gross weight (mass) of this piece of logistics transport equipment which is the weight (mass)
	 * including loaded goods, packing and transport equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitGrossWeightMeasure
	 */
	weightUnitGrossWeightMeasure?: IUneceWeightUnitMeasureType;

	/**
	 * A measure of the net weight (mass) of this piece of logistics transport equipment.
	 * @see https://vocabulary.uncefact.org/weightUnitNetWeightMeasure
	 */
	weightUnitNetWeightMeasure?: IUneceWeightUnitMeasureType[];

	/**
	 * The measure of the tare weight (mass) of this piece of logistics transport equipment which is the weight (mass)
	 * including permanent equipment but excluding goods and loose accessories.
	 * @see https://vocabulary.uncefact.org/weightUnitTareWeightMeasure
	 */
	weightUnitTareWeightMeasure?: IUneceWeightUnitMeasureType;
}
