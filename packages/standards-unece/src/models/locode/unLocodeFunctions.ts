// Copyright 2026 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated. Do not edit manually. */
import type { IUnLocodeFunction } from "../IUnLocodeFunction.js";

/**
 * UN/LOCODE Functions as a JSON array.
 * @see https://vocabulary.uncefact.org/unlocode-functions
 */
export const UN_LOCODE_FUNCTIONS: IUnLocodeFunction[] = [
	{
		uri: "unlcdf:0",
		label: "Not officially functional",
		comment:
			'Digit "0" means that the criteria for inclusion apply, but that no information is available or used which is recognized by the competent authority regarding the specific transport mode or function(s) of the location.',
		value: "0"
	},
	{
		uri: "unlcdf:1",
		label: "Maritime transport (sea port or maritime port)",
		comment:
			"Any location with permanent facilities at which seagoing vessels can load or discharge cargo moving in maritime traffic.",
		value: "1"
	},
	{
		uri: "unlcdf:2",
		label: "Rail transport",
		comment:
			"Any location that has one or more railway terminals like cargo terminals or train stations (excluding passenger terminals). Specific terminals located inside a location shall not be considered individually as a location.",
		value: "2"
	},
	{
		uri: "unlcdf:3",
		label: "Road transport",
		comment:
			"Any location that is connected to other ones by means of roads. Specific terminals located inside a location shall not be considered individually as a location.",
		value: "3"
	},
	{
		uri: "unlcdf:4",
		label: "Air transport (airport) or space transport (spaceport)",
		comment:
			"Any location with permanent facilities at which aircraft can load or discharge cargo moving in air traffic.",
		value: "4"
	},
	{
		uri: "unlcdf:5",
		label:
			"International Mail Processing Centre (IMPC) recognized by the Universal Postal Union (UPU)",
		comment:
			"A mail processing facility, recognized by UPU, that has significance for the processing of inter-operator mail, either because they generate or receive dispatches or because they act as transit centres for mail exchanged between other IMPCs. Each IMPC has a well-defined physical location, is operated by or under the responsibility of a single organization and handles a specific set of mail flows. (This was known as a postal exchange office in the former edition of the Recommendation.)",
		value: "5"
	},
	{
		uri: "unlcdf:6",
		label: "Multimodal transport facility",
		comment:
			"Any location where one or more of the below facilities can be found: Inland Clearance Depot (ICD): a multimodal transport facility, other than a sea port or an airport, which is approved by a competent body, equipped with fixed installations and offering services for the handling and temporary storage of any kind of goods (including containers) carried under customs transit by any applicable mode of transport, placed under customs control and, with customs and other agencies, competent to clear goods for home use, warehousing, temporary admission, re-export, temporary storage for onward transit and outright export. (Definition applies also to synonyms like Dry Port, Inland Clearance Terminal, etc.) Container Depot: a multimodal transport facility which offers services for storage, repair and maintenance of containers. Inland freight terminal: a multimodal transport facility, other than a sea port or an airport, operated on a common- user basis, at which trade cargo is received or dispatched.",
		value: "6"
	},
	{
		uri: "unlcdf:7",
		label:
			"Fixed Transport Installation (oil pipeline terminal, electric power lines, ropeway terminals, etc.)",
		comment:
			"Any location with permanent facilities to load or discharge cargo that doesn’t fit in the previous definitions (e.g. oil platform).",
		value: "7"
	},
	{
		uri: "unlcdf:8",
		label: "Inland water transport (river ports, and lake ports)",
		comment:
			"Any location with permanent facilities at which vessels can load or discharge cargo moving in inland waterway traffic.",
		value: "8"
	},
	{
		uri: "unlcdf:A",
		label: "Special Economic Zone (SEZ)",
		comment:
			"Any geographic region that has economic laws different from a country's typical economic laws for the purposes of trade operations and duties and tariffs.",
		value: "A"
	},
	{
		uri: "unlcdf:B",
		label: "Cross Border (former code; not to be used) ",
		comment: "Any location that is located on the border with other",
		value: "B"
	}
];
