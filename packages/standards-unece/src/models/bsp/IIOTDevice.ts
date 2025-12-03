// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { ICommunicationEvent } from "./ICommunicationEvent.js";
import type { IEquipment } from "./IEquipment.js";
import type { IGeographicalCoordinate } from "./IGeographicalCoordinate.js";
import type { IPairing } from "./IPairing.js";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { ISensor } from "./ISensor.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITransportEvent } from "./ITransportEvent.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An IOT (Internet of Things) piece of mechanical or electronic equipment which can collect, report and autonomously
 * transmit digital data.
 * @see https://vocabulary.uncefact.org/IOTDevice
 */
export interface IIOTDevice extends IJsonLdNodeObject {
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
	attachedAssetId?: string;

	/**
	 * The code specifying the communication capability of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/communicationCapabilityCode
	 */
	communicationCapabilityCode?: string;

	/**
	 * An embedded sensor of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/embeddedSensor
	 */
	embeddedSensor?: ISensor[];

	/**
	 * A product certificate granted for this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/grantedCertificate
	 */
	grantedCertificate?: IProductCertificate[];

	/**
	 * An identifier for this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * An interface between an OEM (Original Equipment Manufacturer) equipment and this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/interfaceEquipment
	 */
	interfaceEquipment?: IEquipment[];

	/**
	 * The latest geographical coordinates received by this monitoring IOT device, from the perspective of the receiver.
	 * @see https://vocabulary.uncefact.org/latestReceivedGeographicalCoordinate
	 */
	latestReceivedGeographicalCoordinate?: IGeographicalCoordinate[];

	/**
	 * The date, time, date time or other date time value of the latest received signal for this monitoring IOT device, from
	 * the perspective of the receiver.
	 * @see https://vocabulary.uncefact.org/latestReceivedSignalDateTime
	 */
	latestReceivedSignalDateTime?: string;

	/**
	 * The manufacturer party of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/manufacturerParty
	 */
	manufacturerParty?: ITradeParty[];

	/**
	 * A model identifier for this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/modelId
	 */
	modelId?: string;

	/**
	 * The code specifying the operational status, such as broken, stolen, unpaired, inactive of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/operationalStatusCode
	 */
	operationalStatusCode?: string;

	/**
	 * The operator party, such as terminal operator, service provider, network operator of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/operatorParty
	 */
	operatorParty?: ITradeParty[];

	/**
	 * The owner party of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/ownerParty
	 */
	ownerParty?: ITradeParty[];

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
	providerParty?: ITradeParty[];

	/**
	 * A communication event related to this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/relatedEvent
	 */
	relatedEvent?: ICommunicationEvent[];

	/**
	 * The percentage of the remaining battery charge of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/remainingBatteryChargePercent
	 */
	remainingBatteryChargePercent?: string;

	/**
	 * A remote sensor of this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/remoteSensor
	 */
	remoteSensor?: ISensor[];

	/**
	 * A transport event reported by this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/reportedTransportEvent
	 */
	reportedTransportEvent?: ITransportEvent[];

	/**
	 * A sensor communication pairing reported for this monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/reportingSensorPairing
	 */
	reportingSensorPairing?: IPairing[];

	/**
	 * The code specifying the type of monitoring IOT device.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
