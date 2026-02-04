// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceDocument } from "./IUneceDocument.js";
import type { IUneceInspectionEvent } from "./IUneceInspectionEvent.js";
import type { IUneceInspectionPerson } from "./IUneceInspectionPerson.js";
import type { IUneceInspectionResult } from "./IUneceInspectionResult.js";
import type { IUneceInspectionStatus } from "./IUneceInspectionStatus.js";
import type { IUneceTradeParty } from "./IUneceTradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The process of performing documented checks, such as on materials or processes, with a focus on discovering deviations,
 * errors or faults related to documented requirements.
 * @see https://vocabulary.uncefact.org/SpecifiedInspection
 */
export interface IUneceSpecifiedInspection extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.SpecifiedInspection;

	/**
	 * A binary file attached to this specified inspection.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IUneceBinaryFile[];

	/**
	 * A textual description of this specified inspection.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The party executing this specified inspection.
	 * @see https://vocabulary.uncefact.org/executionParty
	 */
	executionParty?: IUneceTradeParty;

	/**
	 * The inspector executing this specified inspection.
	 * @see https://vocabulary.uncefact.org/executionPerson
	 */
	executionPerson?: IUneceInspectionPerson;

	/**
	 * The identifier of this specified inspection.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The name, expressed as text, for this specified inspection.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The indication of whether or not this specified inspection is outsourced.
	 * @see https://vocabulary.uncefact.org/outsourcedIndicator
	 */
	outsourcedIndicator?: boolean;

	/**
	 * The result reported for this specified inspection.
	 * @see https://vocabulary.uncefact.org/reportedInspectionResult
	 */
	reportedInspectionResult?: IUneceInspectionResult;

	/**
	 * A referenced document for this specified inspection.
	 * @see https://vocabulary.uncefact.org/specifiedDocument
	 */
	specifiedDocument?: IUneceDocument[];

	/**
	 * An inspection event for this specified inspection.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionEvent
	 */
	specifiedInspectionEvent?: IUneceInspectionEvent[];

	/**
	 * The status for this specified inspection.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionStatus
	 */
	specifiedInspectionStatus?: IUneceInspectionStatus;

	/**
	 * The code specifying the type of inspection.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
