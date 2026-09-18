// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { entity, property } from "@twin.org/entity";
import type { Gs1SubSiteAttributes } from "../models/gs1/gs1SubSiteAttributes.js";
import type { Gs1SubSiteTypes } from "../models/gs1/gs1SubSiteTypes.js";

/**
 * GS1 Location master data entity.
 * @see https://www.gs1.org/sites/default/files/docs/epc/CBV-Standard-1-2-1-r-2017-05-05.pdf
 */
@entity({
	description:
		"Stores detailed information about locations, including addresses and geographic coordinates"
})
export class Gs1Location {
	/**
	 * The GS1 sgln identifier.
	 */
	@property({
		description: "Unique identifier for the location.",
		type: "string",
		isPrimary: true,
		maxLength: 255
	})
	public id!: string;

	/**
	 * Identifies the site in which the location is contained.
	 */
	@property({
		description: "Site identifier or name, if applicable.",
		type: "string",
		maxLength: 256,
		optional: true
	})
	public site?: string;

	/**
	 * Sub site type describes the primary business function of the sub site location.
	 */
	@property({
		description: "Additional site-specific information or code.",
		type: "string",
		maxLength: 128,
		optional: true
	})
	public sst?: Gs1SubSiteTypes;

	/**
	 * Sub site attribute further qualifies the business function of the sub site location.
	 */
	@property({
		description: "Sub-site area or section information.",
		type: "string",
		maxLength: 128,
		optional: true
	})
	public ssa?: Gs1SubSiteAttributes;

	/**
	 * Sub site detail provides additional proprietary information.
	 */
	@property({
		description: "Detailed site description or additional data.",
		type: "string",
		maxLength: 1024,
		optional: true
	})
	public ssd?: string;

	/**
	 * The name of the location.
	 */
	@property({
		description: "Name of the location.",
		type: "string",
		maxLength: 256,
		optional: true
	})
	public name?: string;

	/**
	 * The street address line 1.
	 */
	@property({
		description: "Primary street address.",
		type: "string",
		maxLength: 256,
		optional: true
	})
	public streetAddressOne?: string;

	/**
	 * The street address line 2.
	 */
	@property({
		description: "Secondary street address, if needed.",
		type: "string",
		maxLength: 256,
		optional: true
	})
	public streetAddressTwo?: string;

	/**
	 * The street address line 3.
	 */
	@property({
		description: "Tertiary street address, if applicable.",
		type: "string",
		maxLength: 256,
		optional: true
	})
	public streetAddressThree?: string;

	/**
	 * City.
	 */
	@property({
		description: "City where the location is situated.",
		type: "string",
		maxLength: 128,
		optional: true
	})
	public city?: string;

	/**
	 * State.
	 */
	@property({
		description: "State or province of the location.",
		type: "string",
		maxLength: 128,
		optional: true
	})
	public state?: string;

	/**
	 * Postal Code.
	 */
	@property({
		description: "Postal or ZIP code for the location.",
		type: "string",
		maxLength: 32,
		optional: true
	})
	public postalCode?: string;

	/**
	 * Country Code The ISO 3166-1 alpha-2 code specifying the country for the address.
	 */
	@property({
		description: "Country code where the location is located.",
		type: "string",
		maxLength: 2,
		optional: true
	})
	public countryCode?: string;

	/**
	 * The latitude of the location in degrees.
	 */
	@property({
		description: "Latitude coordinate of the location.",
		type: "number",
		optional: true
	})
	public latitude?: number;

	/**
	 * The longitude of the location in degrees.
	 */
	@property({
		description: "Longitude coordinate of the location.",
		type: "number",
		optional: true
	})
	public longitude?: number;
}
