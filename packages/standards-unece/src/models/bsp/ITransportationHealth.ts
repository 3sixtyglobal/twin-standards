// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IMDHHealthIndication } from "./IMDHHealthIndication.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Health indications to be reported on a WHO MDH (Maritime Declaration of Health).
 * @see https://vocabulary.uncefact.org/TransportationHealth
 */
export interface ITransportationHealth extends IJsonLdNodeObject {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.TransportationHealth;

	/**
	 * A died onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/diedOnboardHealthIndication
	 */
	diedOnboardHealthIndication?: IMDHHealthIndication[];

	/**
	 * A disease onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/diseaseOnboardHealthIndication
	 */
	diseaseOnboardHealthIndication?: IMDHHealthIndication[];

	/**
	 * An ill person or persons now onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/illPersonNowOnboardHealthIndication
	 */
	illPersonNowOnboardHealthIndication?: IMDHHealthIndication[];

	/**
	 * A medical practitioner consulted indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/medicalPractitionerConsultedHealthIndication
	 */
	medicalPractitionerConsultedHealthIndication?: IMDHHealthIndication[];

	/**
	 * A more ill onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/moreIllOnboardHealthIndication
	 */
	moreIllOnboardHealthIndication?: IMDHHealthIndication[];

	/**
	 * An onboard infection condition indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/onboardInfectionConditionHealthIndication
	 */
	onboardInfectionConditionHealthIndication?: IMDHHealthIndication[];

	/**
	 * An applied sanitary measure indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/sanitaryMeasureAppliedHealthIndication
	 */
	sanitaryMeasureAppliedHealthIndication?: IMDHHealthIndication[];

	/**
	 * A sick animal or animals onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/sickAnimalOnboardHealthIndication
	 */
	sickAnimalOnboardHealthIndication?: IMDHHealthIndication[];

	/**
	 * A stowaway or stowaways found onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/stowawayFoundOnboardHealthIndication
	 */
	stowawayFoundOnboardHealthIndication?: IMDHHealthIndication[];
}
