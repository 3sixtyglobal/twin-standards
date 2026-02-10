// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceMeasureType } from "./IUneceMeasureType.js";
import type { IUneceProductCertificate } from "./IUneceProductCertificate.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceTradeContact } from "./IUneceTradeContact.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { IUneceTransportationWasteMaterialComponent } from "./IUneceTransportationWasteMaterialComponent.js";
import type { IUneceTransportationWasteRecoveryDisposalProcess } from "./IUneceTransportationWasteRecoveryDisposalProcess.js";
import type { IUneceTransportEvent } from "./IUneceTransportEvent.js";
import type { UneceTransportationWasteMaterialTypeCodeList } from "../typeCodes/uneceTransportationWasteMaterialTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Any materials unused and rejected as unwanted resulting from transportation.
 * @see https://vocabulary.uncefact.org/TransportationWasteMaterial
 */
export interface IUneceTransportationWasteMaterial extends IJsonLdNodeObject {
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
	applicableProductCertificate?: IUneceProductCertificate[];

	/**
	 * A sustainability characteristic applicable to this transportation waste material.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * A transportation waste recovery disposal process applicable to this transportation waste material.
	 * @see https://vocabulary.uncefact.org/applicableTransportationWasteRecoveryDisposalProcess
	 */
	applicableTransportationWasteRecoveryDisposalProcess?: IUneceTransportationWasteRecoveryDisposalProcess[];

	/**
	 * The indication of whether or not a transportation waste material delivery is complete.
	 * @see https://vocabulary.uncefact.org/completeDeliveryIndicator
	 */
	completeDeliveryIndicator?: boolean;

	/**
	 * A material component included in this transportation waste.
	 * @see https://vocabulary.uncefact.org/includedTransportationWasteMaterialComponent
	 */
	includedTransportationWasteMaterialComponent?: IUneceTransportationWasteMaterialComponent[];

	/**
	 * A next delivery event for this transportation waste material.
	 * @see https://vocabulary.uncefact.org/nextDeliveryEvent
	 */
	nextDeliveryEvent?: IUneceTransportEvent[];

	/**
	 * A port reception facility party for this transportation waste material.
	 * @see https://vocabulary.uncefact.org/portReceptionFacilityParty
	 */
	portReceptionFacilityParty?: IUneceTradeParty[];

	/**
	 * A previous delivery event for this transportation waste material.
	 * @see https://vocabulary.uncefact.org/previousDeliveryTransportEvent
	 */
	previousDeliveryTransportEvent?: IUneceTransportEvent[];

	/**
	 * A reception facility contact for this transportation waste material.
	 * @see https://vocabulary.uncefact.org/receptionFacilityContact
	 */
	receptionFacilityContact?: IUneceTradeContact[];

	/**
	 * A material treatment facility party for this transportation waste material.
	 * @see https://vocabulary.uncefact.org/treatmentFacilityParty
	 */
	treatmentFacilityParty?: IUneceTradeParty[];

	/**
	 * The code specifying the type of transportation waste material.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceTransportationWasteMaterialTypeCodeList | string;

	/**
	 * A measure of the volume of this transportation waste material.
	 * @see https://vocabulary.uncefact.org/volumeMeasure
	 */
	volumeMeasure?: IUneceMeasureType[];

	/**
	 * A measure of the weight of this transportation waste material.
	 * @see https://vocabulary.uncefact.org/weightMeasure
	 */
	weightMeasure?: IUneceMeasureType;
}
