// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceAgriculturalApplication } from "./IUneceAgriculturalApplication.js";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceCoordinateReferenceSystem } from "./IUneceCoordinateReferenceSystem.js";
import type { IUneceGeographicalFeature } from "./IUneceGeographicalFeature.js";
import type { IUneceGeographicalPoint } from "./IUneceGeographicalPoint.js";
import type { IUneceLaboratoryObservationReference } from "./IUneceLaboratoryObservationReference.js";
import type { IUnecePolygon } from "./IUnecePolygon.js";
import type { IUneceProductionFacility } from "./IUneceProductionFacility.js";
import type { IUneceProductionUnit } from "./IUneceProductionUnit.js";
import type { IUneceSpecifiedInspection } from "./IUneceSpecifiedInspection.js";
import type { IUneceSupplyChainEvent } from "./IUneceSupplyChainEvent.js";
import type { IUneceSupplyChainInventory } from "./IUneceSupplyChainInventory.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceSustainabilityInspection } from "./IUneceSustainabilityInspection.js";
import type { IUneceTradeAddress } from "./IUneceTradeAddress.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceCountryId } from "../lists/uneceCountryId.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A reference to a physical location or place.
 * @see https://vocabulary.uncefact.org/Location
 */
export interface IUneceLocation {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.Location;

	/**
	 * A specified inspection applicable to this referenced location.
	 * @see https://vocabulary.uncefact.org/applicableSpecifiedInspection
	 */
	applicableSpecifiedInspection?: IUneceSpecifiedInspection[];

	/**
	 * A sustainability characteristic applicable to this referenced location.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * A sustainability inspection applicable to this referenced location.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: IUneceSustainabilityInspection[];

	/**
	 * A specified agricultural application applied to this referenced location.
	 * @see https://vocabulary.uncefact.org/appliedAgriculturalApplication
	 */
	appliedAgriculturalApplication?: IUneceAgriculturalApplication[];

	/**
	 * A geographical feature associated with this referenced location.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalFeature
	 */
	associatedGeographicalFeature?: IUneceGeographicalFeature[];

	/**
	 * The country name, expressed as text, of this referenced location.
	 * @see https://vocabulary.uncefact.org/countryName
	 */
	countryName?: string;

	/**
	 * The identifier of the country sub-division for this referenced location.
	 * @see https://vocabulary.uncefact.org/countrySubDivisionId
	 */
	countrySubDivisionId?: string;

	/**
	 * The Coordinate System (CS) engineering coordinate reference system defined for this referenced location.
	 * @see https://vocabulary.uncefact.org/definedCoordinateReferenceSystem
	 */
	definedCoordinateReferenceSystem?: IUneceCoordinateReferenceSystem;

	/**
	 * A textual description for this referenced location.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * A global identifier of this referenced location.
	 * @see https://vocabulary.uncefact.org/globalId
	 */
	globalId?: string;

	/**
	 * An identifier for this referenced location such as a United Nations Blue Number (UNBN) or GS1 Global Location Number
	 * (GLN).
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The polygon included for this referenced location.
	 * @see https://vocabulary.uncefact.org/includedPolygon
	 */
	includedPolygon?: IUnecePolygon;

	/**
	 * The identifier of the country for this referenced location.
	 * @see https://vocabulary.uncefact.org/locationCountryId
	 */
	locationCountryId?: UneceCountryId;

	/**
	 * The code specifying the reference type of this referenced location.
	 * @see https://vocabulary.uncefact.org/locationReferenceTypeCode
	 */
	locationReferenceTypeCode?: string;

	/**
	 * The code specifying the type of referenced location.
	 * @see https://vocabulary.uncefact.org/locationTypeCode
	 */
	locationTypeCode?: string;

	/**
	 * A name, expressed as text, of this referenced location.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The physical geographical feature specified for this referenced location.
	 * @see https://vocabulary.uncefact.org/physicalGeographicalFeature
	 */
	physicalGeographicalFeature?: IUneceGeographicalFeature;

	/**
	 * The physical geographical point specified for this location.
	 * @see https://vocabulary.uncefact.org/physicalGeographicalPoint
	 */
	physicalGeographicalPoint?: IUneceGeographicalPoint;

	/**
	 * The postal trade address for this referenced location.
	 * @see https://vocabulary.uncefact.org/postalAddress
	 */
	postalAddress?: IUneceTradeAddress;

	/**
	 * A facility production unit related to this referenced location.
	 * @see https://vocabulary.uncefact.org/relatedProductionUnit
	 */
	relatedProductionUnit?: IUneceProductionUnit[];

	/**
	 * A sustainability assertion specified for this referenced location.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IUneceAssertion[];

	/**
	 * A production facility specified for this referenced location.
	 * @see https://vocabulary.uncefact.org/specifiedFacility
	 */
	specifiedFacility?: IUneceProductionFacility[];

	/**
	 * Supply chain inventory specified for this referenced location.
	 * @see https://vocabulary.uncefact.org/specifiedInventory
	 */
	specifiedInventory?: IUneceSupplyChainInventory[];

	/**
	 * A laboratory observation reference specified for this referenced location.
	 * @see https://vocabulary.uncefact.org/specifiedLaboratoryObservationReference
	 */
	specifiedLaboratoryObservationReference?: IUneceLaboratoryObservationReference[];

	/**
	 * A supply chain event specified for this referenced location.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: IUneceSupplyChainEvent[];

	/**
	 * A trade party specified for this referenced location.
	 * @see https://vocabulary.uncefact.org/specifiedTradeParty
	 */
	specifiedTradeParty?: IUneceTradeParty[];

	/**
	 * The UTC (Universal Time Coordinate) time offset value for this referenced location.
	 * @see https://vocabulary.uncefact.org/uTCOffsetNumeric
	 */
	uTCOffsetNumeric?: string;
}
