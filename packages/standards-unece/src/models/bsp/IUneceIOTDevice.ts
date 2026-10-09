// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceCommunicationEvent } from "./IUneceCommunicationEvent.js";
import type { IUneceEquipment } from "./IUneceEquipment.js";
import type { IUneceGeographicalCoordinate } from "./IUneceGeographicalCoordinate.js";
import type { IUnecePairing } from "./IUnecePairing.js";
import type { IUneceProductCertificate } from "./IUneceProductCertificate.js";
import type { IUneceSensor } from "./IUneceSensor.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTransportEvent } from "./IUneceTransportEvent.js";
import type { UneceIOTDeviceTypeCodeList } from "../typeCodes/uneceIOTDeviceTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An IOT (Internet of Things) piece of mechanical or electronic equipment which can collect, report and autonomously
 * transmit digital data.
 * @see https://vocabulary.uncefact.org/IOTDevice
 */
export interface IUneceIOTDevice {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.IOTDevice;

	/**
	 * The identifier for the asset, such as a container, to which this monitoring IOT device is attached.
	 * @see https://vocabulary.uncefact.org/attachedAssetId
	 */
	attachedAssetId?: string | IJsonLdValueObject;

	/**
	 * The code specifying the communication capability of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/communicationCapabilityCode
	 */
	communicationCapabilityCode?: string;

	/**
	 * An embedded sensor of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/embeddedSensor
	 */
	embeddedSensor?: IUneceSensor[];

	/**
	 * A product certificate granted for this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/grantedCertificate
	 */
	grantedCertificate?: IUneceProductCertificate[];

	/**
	 * An identifier for this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * An interface between an OEM (Original Equipment Manufacturer) equipment and this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/interfaceEquipment
	 */
	interfaceEquipment?: IUneceEquipment[];

	/**
	 * The latest geographical coordinates received by this monitoring IOT device, from the perspective of the receiver.
	 * @see https://vocabulary.uncefact.org/latestReceivedGeographicalCoordinate
	 */
	latestReceivedGeographicalCoordinate?: IUneceGeographicalCoordinate;

	/**
	 * The date, time, date time or other date time value of the latest received signal for this monitoring IOT device, from
	 * the perspective of the receiver.
	 * @see https://vocabulary.uncefact.org/latestReceivedSignalDateTime
	 * @json-schema format:date-time
	 */
	latestReceivedSignalDateTime?: string;

	/**
	 * The manufacturer party of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: IUneceTradeParty;

	/**
	 * A model identifier for this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/modelId
	 */
	modelId?: string | IJsonLdValueObject;

	/**
	 * The code specifying the operational status, such as broken, stolen, unpaired, inactive of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/operationalStatusCode
	 */
	operationalStatusCode?: string;

	/**
	 * The operator party, such as terminal operator, service provider, network operator of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/operatorParty
	 */
	operatorParty?: IUneceTradeParty;

	/**
	 * The owner party of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/ownerParty
	 */
	ownerParty?: IUneceTradeParty;

	/**
	 * The code specifying the position of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/positionCode
	 */
	positionCode?: string;

	/**
	 * The code specifying a type of power source for this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/powerSourceTypeCode
	 */
	powerSourceTypeCode?: string;

	/**
	 * The provider party for this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/providerParty
	 */
	providerParty?: IUneceTradeParty;

	/**
	 * A communication event related to this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/relatedEvent
	 */
	relatedEvent?: IUneceCommunicationEvent[];

	/**
	 * The percentage of the remaining battery charge of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/remainingBatteryChargePercent
	 */
	remainingBatteryChargePercent?: string;

	/**
	 * A remote sensor of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/remoteSensor
	 */
	remoteSensor?: IUneceSensor[];

	/**
	 * A transport event reported by this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/reportedTransportEvent
	 */
	reportedTransportEvent?: IUneceTransportEvent[];

	/**
	 * A sensor communication pairing reported for this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/reportingSensorPairing
	 */
	reportingSensorPairing?: IUnecePairing[];

	/**
	 * The code specifying the type of monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceIOTDeviceTypeCodeList | string;
}
