// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAgriculturalApplication } from "./IAgriculturalApplication.js";
import type { IAssertion } from "./IAssertion.js";
import type { ICoordinateReferenceSystem } from "./ICoordinateReferenceSystem.js";
import type { IGeographicalFeature } from "./IGeographicalFeature.js";
import type { IGeographicalPoint } from "./IGeographicalPoint.js";
import type { ILaboratoryObservationReference } from "./ILaboratoryObservationReference.js";
import type { IPolygon } from "./IPolygon.js";
import type { IProductionFacility } from "./IProductionFacility.js";
import type { IProductionUnit } from "./IProductionUnit.js";
import type { ISpecifiedInspection } from "./ISpecifiedInspection.js";
import type { ISupplyChainEvent } from "./ISupplyChainEvent.js";
import type { ISupplyChainInventory } from "./ISupplyChainInventory.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ISustainabilityInspection } from "./ISustainabilityInspection.js";
import type { ITradeAddress } from "./ITradeAddress.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { CountryId } from "../lists/countryId.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A reference to a physical location or place.
 * @see https://vocabulary.uncefact.org/Location
 */
export interface ILocation extends IJsonLdNodeObject {
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
	applicableSpecifiedInspection?: ISpecifiedInspection[];

	/**
	 * A sustainability characteristic applicable to this referenced location.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A sustainability inspection applicable to this referenced location.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityInspection
	 */
	applicableSustainabilityInspection?: ISustainabilityInspection[];

	/**
	 * A specified agricultural application applied to this referenced location.
	 * @see https://vocabulary.uncefact.org/appliedAgriculturalApplication
	 */
	appliedAgriculturalApplication?: IAgriculturalApplication[];

	/**
	 * A geographical feature associated with this referenced location.
	 * @see https://vocabulary.uncefact.org/associatedGeographicalFeature
	 */
	associatedGeographicalFeature?: IGeographicalFeature[];

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
	definedCoordinateReferenceSystem?: ICoordinateReferenceSystem[];

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
	includedPolygon?: IPolygon;

	/**
	 * The identifier of the country for this referenced location.
	 * @see https://vocabulary.uncefact.org/locationCountryId
	 */
	locationCountryId?: CountryId[];

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
	physicalGeographicalFeature?: IGeographicalFeature[];

	/**
	 * The physical geographical point specified for this location.
	 * @see https://vocabulary.uncefact.org/physicalGeographicalPoint
	 */
	physicalGeographicalPoint?: IGeographicalPoint[];

	/**
	 * The postal trade address for this referenced location.
	 * @see https://vocabulary.uncefact.org/postalAddress
	 */
	postalAddress?: ITradeAddress[];

	/**
	 * A facility production unit related to this referenced location.
	 * @see https://vocabulary.uncefact.org/relatedProductionUnit
	 */
	relatedProductionUnit?: IProductionUnit[];

	/**
	 * A sustainability assertion specified for this referenced location.
	 * @see https://vocabulary.uncefact.org/specifiedAssertion
	 */
	specifiedAssertion?: IAssertion[];

	/**
	 * A production facility specified for this referenced location.
	 * @see https://vocabulary.uncefact.org/specifiedFacility
	 */
	specifiedFacility?: IProductionFacility[];

	/**
	 * Supply chain inventory specified for this referenced location.
	 * @see https://vocabulary.uncefact.org/specifiedInventory
	 */
	specifiedInventory?: ISupplyChainInventory[];

	/**
	 * A laboratory observation reference specified for this referenced location.
	 * @see https://vocabulary.uncefact.org/specifiedLaboratoryObservationReference
	 */
	specifiedLaboratoryObservationReference?: ILaboratoryObservationReference[];

	/**
	 * A supply chain event specified for this referenced location.
	 * @see https://vocabulary.uncefact.org/specifiedSupplyChainEvent
	 */
	specifiedSupplyChainEvent?: ISupplyChainEvent[];

	/**
	 * A trade party specified for this referenced location.
	 * @see https://vocabulary.uncefact.org/specifiedTradeParty
	 */
	specifiedTradeParty?: ITradeParty[];

	/**
	 * The UTC (Universal Time Coordinate) time offset value for this referenced location.
	 * @see https://vocabulary.uncefact.org/uTCOffsetNumeric
	 */
	uTCOffsetNumeric?: string;
}
