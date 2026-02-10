// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UneceMDHHealthIndication typeCode property.
 * @see https://vocabulary.uncefact.org/MDHHealthIndication
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UneceMDHHealthIndicationTypeCodeList = {
	/**
	 * A died onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/diedOnboardHealthIndication
	 */
	DiedOnboardHealthIndication: "unece:diedOnboardHealthIndication",

	/**
	 * A disease onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/diseaseOnboardHealthIndication
	 */
	DiseaseOnboardHealthIndication: "unece:diseaseOnboardHealthIndication",

	/**
	 * An ill person or persons now onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/illPersonNowOnboardHealthIndication
	 */
	IllPersonNowOnboardHealthIndication: "unece:illPersonNowOnboardHealthIndication",

	/**
	 * A medical practitioner consulted indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/medicalPractitionerConsultedHealthIndication
	 */
	MedicalPractitionerConsultedHealthIndication: "unece:medicalPractitionerConsultedHealthIndication",

	/**
	 * A more ill onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/moreIllOnboardHealthIndication
	 */
	MoreIllOnboardHealthIndication: "unece:moreIllOnboardHealthIndication",

	/**
	 * An onboard infection condition indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/onboardInfectionConditionHealthIndication
	 */
	OnboardInfectionConditionHealthIndication: "unece:onboardInfectionConditionHealthIndication",

	/**
	 * An applied sanitary measure indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/sanitaryMeasureAppliedHealthIndication
	 */
	SanitaryMeasureAppliedHealthIndication: "unece:sanitaryMeasureAppliedHealthIndication",

	/**
	 * A sick animal or animals onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/sickAnimalOnboardHealthIndication
	 */
	SickAnimalOnboardHealthIndication: "unece:sickAnimalOnboardHealthIndication",

	/**
	 * A stowaway or stowaways found onboard indication for this MDH transportation health.
	 * @see https://vocabulary.uncefact.org/stowawayFoundOnboardHealthIndication
	 */
	StowawayFoundOnboardHealthIndication: "unece:stowawayFoundOnboardHealthIndication"
} as const;

/**
 * Values for UneceMDHHealthIndication typeCode property.
 * @see https://vocabulary.uncefact.org/MDHHealthIndication
 */
export type UneceMDHHealthIndicationTypeCodeList = (typeof UneceMDHHealthIndicationTypeCodeList)[keyof typeof UneceMDHHealthIndicationTypeCodeList];
