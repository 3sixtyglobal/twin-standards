// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { IDocument } from "./IDocument.js";
import type { IInspectionEvent } from "./IInspectionEvent.js";
import type { IInspectionPerson } from "./IInspectionPerson.js";
import type { IInspectionResult } from "./IInspectionResult.js";
import type { IInspectionStatus } from "./IInspectionStatus.js";
import type { IStandard } from "./IStandard.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ITradeParty } from "./ITradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The process of performing documented checks of sustainability characteristics, with a focus on discovering deviations,
 * related to documented sustainability requirements.
 * @see https://vocabulary.uncefact.org/SustainabilityInspection
 */
export interface ISustainabilityInspection extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SustainabilityInspection;

	/**
	 * The specified inspection result applicable to this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/applicableInspectionResult
	 */
	applicableInspectionResult?: IInspectionResult[];

	/**
	 * A referenced standard applicable to this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IStandard[];

	/**
	 * A characteristic applicable to this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * A binary file attached for this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IBinaryFile[];

	/**
	 * A textual description of this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The party responsible for the execution of this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/executionParty
	 */
	executionParty?: ITradeParty[];

	/**
	 * The inspector responsible for the execution of this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/executionPerson
	 */
	executionPerson?: IInspectionPerson[];

	/**
	 * An identifier of this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The name, expressed as text, for this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The indication of whether or not this sustainability inspection is outsourced.
	 * @see https://vocabulary.uncefact.org/outsourcedIndicator
	 */
	outsourcedIndicator?: boolean;

	/**
	 * A referenced document specified for this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/specifiedDocument
	 */
	specifiedDocument?: IDocument[];

	/**
	 * A specified inspection event for this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionEvent
	 */
	specifiedInspectionEvent?: IInspectionEvent[];

	/**
	 * The inspection status specified for this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionStatus
	 */
	specifiedInspectionStatus?: IInspectionStatus[];

	/**
	 * The code specifying the type of sustainability inspection.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
