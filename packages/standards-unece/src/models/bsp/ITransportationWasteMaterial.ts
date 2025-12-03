// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IMeasureType } from "./IMeasureType.js";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ITradeContact } from "./ITradeContact.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { ITransportationWasteMaterialComponent } from "./ITransportationWasteMaterialComponent.js";
import type { ITransportationWasteRecoveryDisposalProcess } from "./ITransportationWasteRecoveryDisposalProcess.js";
import type { ITransportEvent } from "./ITransportEvent.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any materials unused and rejected as unwanted resulting from transportation.
 * @see https://vocabulary.uncefact.org/TransportationWasteMaterial
 */
export interface ITransportationWasteMaterial extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TransportationWasteMaterial;

	/**
	 * A product certificate applicable to this transportation waste material.
	 * @see https://vocabulary.uncefact.org/applicableProductCertificate
	 */
	applicableProductCertificate?: IProductCertificate[];

	/**
	 * A sustainability characteristic applicable to this transportation waste material.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A transportation waste recovery disposal process applicable to this transportation waste material.
	 * @see https://vocabulary.uncefact.org/applicableTransportationWasteRecoveryDisposalProcess
	 */
	applicableTransportationWasteRecoveryDisposalProcess?: ITransportationWasteRecoveryDisposalProcess[];

	/**
	 * The indication of whether or not a transportation waste material delivery is complete.
	 * @see https://vocabulary.uncefact.org/completeDeliveryIndicator
	 */
	completeDeliveryIndicator?: boolean;

	/**
	 * A material component included in this transportation waste.
	 * @see https://vocabulary.uncefact.org/includedTransportationWasteMaterialComponent
	 */
	includedTransportationWasteMaterialComponent?: ITransportationWasteMaterialComponent[];

	/**
	 * A next delivery event for this transportation waste material.
	 * @see https://vocabulary.uncefact.org/nextDeliveryEvent
	 */
	nextDeliveryEvent?: ITransportEvent[];

	/**
	 * A port reception facility party for this transportation waste material.
	 * @see https://vocabulary.uncefact.org/portReceptionFacilityParty
	 */
	portReceptionFacilityParty?: ITradeParty[];

	/**
	 * A previous delivery event for this transportation waste material.
	 * @see https://vocabulary.uncefact.org/previousDeliveryTransportEvent
	 */
	previousDeliveryTransportEvent?: ITransportEvent[];

	/**
	 * A reception facility contact for this transportation waste material.
	 * @see https://vocabulary.uncefact.org/receptionFacilityContact
	 */
	receptionFacilityContact?: ITradeContact[];

	/**
	 * A material treatment facility party for this transportation waste material.
	 * @see https://vocabulary.uncefact.org/treatmentFacilityParty
	 */
	treatmentFacilityParty?: ITradeParty[];

	/**
	 * The code specifying the type of transportation waste material.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * A measure of the volume of this transportation waste material.
	 * @see https://vocabulary.uncefact.org/volumeMeasure
	 */
	volumeMeasure?: IMeasureType[];

	/**
	 * A measure of the weight of this transportation waste material.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IMeasureType[];
}
