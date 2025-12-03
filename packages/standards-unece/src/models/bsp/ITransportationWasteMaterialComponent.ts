// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IProductCertificate } from "./IProductCertificate.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ITransportEvent } from "./ITransportEvent.js";
import type { IVolumeUnitMeasureType } from "./IVolumeUnitMeasureType.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * An unused and rejected as unwanted component of transport material resulting from transportation.
 * @see https://vocabulary.uncefact.org/TransportationWasteMaterialComponent
 */
export interface ITransportationWasteMaterialComponent extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TransportationWasteMaterialComponent;

	/**
	 * A product certificate applicable to this transportation waste material component.
	 * @see https://vocabulary.uncefact.org/applicableProductCertificate
	 */
	applicableProductCertificate?: IProductCertificate[];

	/**
	 * A sustainability characteristic applicable to this transportation waste material component.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A textual description for this transportation waste material component.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The estimated measure for this generated transportation waste material component.
	 * @see https://vocabulary.uncefact.org/estimatedGeneratedMeasure
	 */
	estimatedGeneratedMeasure?: IVolumeUnitMeasureType[];

	/**
	 * The measure of the maximum dedicated storage capacity for this transportation waste material component.
	 * @see https://vocabulary.uncefact.org/maximumDedicatedStorageCapacityMeasure
	 */
	maximumDedicatedStorageCapacityMeasure?: IVolumeUnitMeasureType[];

	/**
	 * The planned measure for this discharged transportation waste material component.
	 * @see https://vocabulary.uncefact.org/plannedDischargedMeasure
	 */
	plannedDischargedMeasure?: IVolumeUnitMeasureType[];

	/**
	 * A delivery event for this remaining transportation waste material component.
	 * @see https://vocabulary.uncefact.org/remainingDeliveryEvent
	 */
	remainingDeliveryEvent?: ITransportEvent[];

	/**
	 * A code specifying a type of transportation waste material component.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;

	/**
	 * The measure of this received transportation waste material component.
	 * @see https://vocabulary.uncefact.org/volumeUnitReceivedMeasure
	 */
	volumeUnitReceivedMeasure?: IVolumeUnitMeasureType[];

	/**
	 * The measure for this retained transportation waste material component.
	 * @see https://vocabulary.uncefact.org/volumeUnitRetainedMeasure
	 */
	volumeUnitRetainedMeasure?: IVolumeUnitMeasureType[];
}
