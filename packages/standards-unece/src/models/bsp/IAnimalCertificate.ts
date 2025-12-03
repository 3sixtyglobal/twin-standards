// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAnimalCertification } from "./IAnimalCertification.js";
import type { IAssertion } from "./IAssertion.js";
import type { IStandard } from "./IStandard.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { CertificateTypeCodeList } from "../lists/certificateTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A collection of data for a piece of written, printed or electronic matter that provides information or evidence about
 * the identity of an animal or a batch of animals.
 * @see https://vocabulary.uncefact.org/AnimalCertificate
 */
export interface IAnimalCertificate extends IJsonLdNodeObject {
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
	applicableAnimalCertification?: IAnimalCertification[];

	/**
	 * A sustainability assertion applicable to this animal certificate.
	 * @see https://vocabulary.uncefact.org/applicableAssertion
	 */
	applicableAssertion?: IAssertion[];

	/**
	 * A referenced standard applicable to this animal certificate.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IStandard[];

	/**
	 * A sustainability characteristic applicable to this animal certificate.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * The code specifying the type of animal certificate.
	 * @see https://vocabulary.uncefact.org/certificateTypeCode
	 */
	certificateTypeCode?: CertificateTypeCodeList[];

	/**
	 * The identifier for this animal certificate.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;
}
