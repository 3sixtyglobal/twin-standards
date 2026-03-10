// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@twin.org/data-json-ld";
import type { IUneceAnimalCertification } from "./IUneceAnimalCertification.js";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { UneceCertificateTypeCodeList } from "../lists/uneceCertificateTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of data for a piece of written, printed or electronic matter that provides information or evidence about
 * the identity of an animal or a batch of animals.
 * @see https://vocabulary.uncefact.org/AnimalCertificate
 */
export interface IUneceAnimalCertificate {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.AnimalCertificate;

	/**
	 * An animal certification applicable to this animal certificate.
	 * @see https://vocabulary.uncefact.org/applicableAnimalCertification
	 */
	applicableAnimalCertification?: IUneceAnimalCertification[];

	/**
	 * A sustainability assertion applicable to this animal certificate.
	 * @see https://vocabulary.uncefact.org/applicableAssertion
	 */
	applicableAssertion?: IUneceAssertion[];

	/**
	 * A referenced standard applicable to this animal certificate.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard[];

	/**
	 * A sustainability characteristic applicable to this animal certificate.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * The code specifying the type of animal certificate.
	 * @see https://vocabulary.uncefact.org/certificateTypeCode
	 */
	certificateTypeCode: UneceCertificateTypeCodeList;

	/**
	 * The identifier for this animal certificate.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier: string | IJsonLdValueObject;
}
