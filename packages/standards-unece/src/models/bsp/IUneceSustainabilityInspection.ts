// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceInspectionEvent } from "./IUneceInspectionEvent.js";
import type { IUneceInspectionPerson } from "./IUneceInspectionPerson.js";
import type { IUneceInspectionResult } from "./IUneceInspectionResult.js";
import type { IUneceInspectionStatus } from "./IUneceInspectionStatus.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceSustainabilityInspectionTypeCodeList } from "../typeCodes/uneceSustainabilityInspectionTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The process of performing documented checks of sustainability characteristics, with a focus on discovering deviations,
 * related to documented sustainability requirements.
 * @see https://vocabulary.uncefact.org/SustainabilityInspection
 */
export interface IUneceSustainabilityInspection {
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
	applicableInspectionResult?: IUneceInspectionResult;

	/**
	 * A referenced standard applicable to this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard[];

	/**
	 * A characteristic applicable to this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * A binary file attached for this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IUneceBinaryFile[];

	/**
	 * A textual description of this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The party responsible for the execution of this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/executionParty
	 */
	executionParty?: IUneceTradeParty;

	/**
	 * The inspector responsible for the execution of this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/executionPerson
	 */
	executionPerson?: IUneceInspectionPerson;

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
	specifiedDocument?: IUneceDocument[];

	/**
	 * A specified inspection event for this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionEvent
	 */
	specifiedInspectionEvent?: IUneceInspectionEvent[];

	/**
	 * The inspection status specified for this sustainability inspection.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionStatus
	 */
	specifiedInspectionStatus?: IUneceInspectionStatus;

	/**
	 * The code specifying the type of sustainability inspection.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: UneceSustainabilityInspectionTypeCodeList | string;
}
