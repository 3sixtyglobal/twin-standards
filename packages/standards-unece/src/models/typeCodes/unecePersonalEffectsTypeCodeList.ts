// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */

/**
 * Values for UnecePersonalEffects typeCode property.
 * @see https://vocabulary.uncefact.org/PersonalEffects
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UnecePersonalEffectsTypeCodeList = {
	/**
	 * Personal effects of an individual member of the crew for this logistics transport movement.
	 * @see https://vocabulary.uncefact.org/crewPersonalEffects
	 */
	CrewPersonalEffects: "unece:crewPersonalEffects",

	/**
	 * Personal effects use declared by a transport person.
	 * @see https://vocabulary.uncefact.org/declaredPersonalEffects
	 */
	DeclaredPersonalEffects: "unece:declaredPersonalEffects"
} as const;

/**
 * Values for UnecePersonalEffects typeCode property.
 * @see https://vocabulary.uncefact.org/PersonalEffects
 */
export type UnecePersonalEffectsTypeCodeList = (typeof UnecePersonalEffectsTypeCodeList)[keyof typeof UnecePersonalEffectsTypeCodeList];
