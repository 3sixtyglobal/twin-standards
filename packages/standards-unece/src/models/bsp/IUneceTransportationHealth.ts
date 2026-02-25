// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceMDHHealthIndication } from "./IUneceMDHHealthIndication.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * Health indications to be reported on a WHO MDH (Maritime Declaration of Health).
 * @see https://vocabulary.uncefact.org/TransportationHealth
 */
export interface IUneceTransportationHealth {
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
	diedOnboardHealthIndication?: IUneceMDHHealthIndication[];

	/**
	 * A disease onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/diseaseOnboardHealthIndication
	 */
	diseaseOnboardHealthIndication?: IUneceMDHHealthIndication[];

	/**
	 * An ill person or persons now onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/illPersonNowOnboardHealthIndication
	 */
	illPersonNowOnboardHealthIndication?: IUneceMDHHealthIndication[];

	/**
	 * A medical practitioner consulted indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/medicalPractitionerConsultedHealthIndication
	 */
	medicalPractitionerConsultedHealthIndication?: IUneceMDHHealthIndication[];

	/**
	 * A more ill onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/moreIllOnboardHealthIndication
	 */
	moreIllOnboardHealthIndication?: IUneceMDHHealthIndication[];

	/**
	 * An onboard infection condition indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/onboardInfectionConditionHealthIndication
	 */
	onboardInfectionConditionHealthIndication?: IUneceMDHHealthIndication[];

	/**
	 * An applied sanitary measure indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/sanitaryMeasureAppliedHealthIndication
	 */
	sanitaryMeasureAppliedHealthIndication?: IUneceMDHHealthIndication[];

	/**
	 * A sick animal or animals onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/sickAnimalOnboardHealthIndication
	 */
	sickAnimalOnboardHealthIndication?: IUneceMDHHealthIndication[];

	/**
	 * A stowaway or stowaways found onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/stowawayFoundOnboardHealthIndication
	 */
	stowawayFoundOnboardHealthIndication?: IUneceMDHHealthIndication[];
}
