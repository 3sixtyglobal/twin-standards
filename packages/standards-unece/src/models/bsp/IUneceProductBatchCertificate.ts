// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdValueObject } from "@3sixty/data-json-ld";
import type { IUneceAssertion } from "./IUneceAssertion.js";
import type { IUneceBinaryFile } from "./IUneceBinaryFile.js";
import type { IUneceProductCharacteristic } from "./IUneceProductCharacteristic.js";
import type { IUneceStandard } from "./IUneceStandard.js";
import type { IUneceSustainabilityCharacteristic } from "./IUneceSustainabilityCharacteristic.js";
import type { IUneceTradeProductCertification } from "./IUneceTradeProductCertification.js";
import type { UneceCertificateTypeCodeList } from "../lists/uneceCertificateTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A piece of written, printed or electronic matter that provides information or evidence that a product batch has met
 * required criteria.
 * @see https://vocabulary.uncefact.org/ProductBatchCertificate
 */
export interface IUneceProductBatchCertificate {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.ProductBatchCertificate;

	/**
	 * The actual effective date, time, date time or other date time value for this product batch certificate.
	 * @see https://vocabulary.uncefact.org/actualEffectiveDateTime
	 * @json-schema format:date-time
	 */
	actualEffectiveDateTime?: string;

	/**
	 * A sustainability assertion applicable to this product batch certificate.
	 * @see https://vocabulary.uncefact.org/applicableAssertion
	 */
	applicableAssertion?: IUneceAssertion[];

	/**
	 * A code specifying an object for which this product batch certificate is applicable.
	 * @see https://vocabulary.uncefact.org/applicableObjectCode
	 */
	applicableObjectCode?: string;

	/**
	 * A product characteristic applicable to this product batch certificate.
	 * @see https://vocabulary.uncefact.org/applicableProductCharacteristic
	 */
	applicableProductCharacteristic?: IUneceProductCharacteristic[];

	/**
	 * A referenced standard applicable to this product batch certificate.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IUneceStandard[];

	/**
	 * A sustainability characteristic applicable to this product batch certificate.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: IUneceSustainabilityCharacteristic[];

	/**
	 * The trade product certification applicable to this product batch certificate.
	 * @see https://vocabulary.uncefact.org/applicableTradeProductCertification
	 */
	applicableTradeProductCertification?: IUneceTradeProductCertification;

	/**
	 * A binary file attached to this product batch certificate.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IUneceBinaryFile[];

	/**
	 * The code specifying the type of product batch certificate.
	 * @see https://vocabulary.uncefact.org/certificateTypeCode
	 */
	certificateTypeCode?: UneceCertificateTypeCodeList;

	/**
	 * A textual description of this product batch certificate.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The date, time, date time, or other date time value when this product batch certificate expires.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 * @json-schema format:date-time
	 */
	expiryDateTime?: string;

	/**
	 * The identifier of this product batch certificate.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string | IJsonLdValueObject;

	/**
	 * The date, time, date time, or other date time value when this product batch certificate was issued.
	 * @see https://vocabulary.uncefact.org/issueDateTime
	 * @json-schema format:date-time
	 */
	issueDateTime?: string;

	/**
	 * The code specifying the reason why this product batch certificate was issued.
	 * @see https://vocabulary.uncefact.org/issueReasonCode
	 */
	issueReasonCode?: string;

	/**
	 * The identifier of the party issuing this product batch certificate.
	 * @see https://vocabulary.uncefact.org/issuingPartyId
	 */
	issuingPartyId?: string | IJsonLdValueObject;

	/**
	 * A code specifying a purpose of this product batch certificate.
	 * @see https://vocabulary.uncefact.org/purposeCode
	 */
	purposeCode?: string;

	/**
	 * The requested effective date, time, date time or other date time value for this product batch certificate.
	 * @see https://vocabulary.uncefact.org/requestedEffectiveDateTime
	 * @json-schema format:date-time
	 */
	requestedEffectiveDateTime?: string;
}
