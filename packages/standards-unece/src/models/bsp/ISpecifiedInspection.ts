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
import type { ITradeParty } from "./ITradeParty.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * The process of performing documented checks, such as on materials or processes, with a focus on discovering deviations,
 * errors or faults related to documented requirements.
 * @see https://vocabulary.uncefact.org/SpecifiedInspection
 */
export interface ISpecifiedInspection extends IJsonLdNodeObject {
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
	attachedBinaryFile?: IBinaryFile[];

	/**
	 * A textual description of this specified inspection.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The party executing this specified inspection.
	 * @see https://vocabulary.uncefact.org/executionParty
	 */
	executionParty?: ITradeParty[];

	/**
	 * The inspector executing this specified inspection.
	 * @see https://vocabulary.uncefact.org/executionPerson
	 */
	executionPerson?: IInspectionPerson[];

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
	reportedInspectionResult?: IInspectionResult[];

	/**
	 * A referenced document for this specified inspection.
	 * @see https://vocabulary.uncefact.org/specifiedDocument
	 */
	specifiedDocument?: IDocument[];

	/**
	 * An inspection event for this specified inspection.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionEvent
	 */
	specifiedInspectionEvent?: IInspectionEvent[];

	/**
	 * The status for this specified inspection.
	 * @see https://vocabulary.uncefact.org/specifiedInspectionStatus
	 */
	specifiedInspectionStatus?: IInspectionStatus[];

	/**
	 * The code specifying the type of inspection.
	 * @see https://vocabulary.uncefact.org/typeCode
	 */
	typeCode?: string;
}
