// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IJsonLdNodeObject } from "@twin.org/data-json-ld";
import type { IAssertion } from "./IAssertion.js";
import type { IBinaryFile } from "./IBinaryFile.js";
import type { IProductCharacteristic } from "./IProductCharacteristic.js";
import type { IStandard } from "./IStandard.js";
import type { ISustainabilityCharacteristic } from "./ISustainabilityCharacteristic.js";
import type { ITradeProductCertification } from "./ITradeProductCertification.js";
import type { CertificateTypeCodeList } from "../lists/certificateTypeCodeList.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A piece of written, printed or electronic matter that provides information or evidence that a product batch has met
 * required criteria.
 * @see https://vocabulary.uncefact.org/ProductBatchCertificate
 */
export interface IProductBatchCertificate extends IJsonLdNodeObject {
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
	 */
	actualEffectiveDateTime?: string;

	/**
	 * A sustainability assertion applicable to this product batch certificate.
	 * @see https://vocabulary.uncefact.org/applicableAssertion
	 */
	applicableAssertion?: IAssertion[];

	/**
	 * A code specifying an object for which this product batch certificate is applicable.
	 * @see https://vocabulary.uncefact.org/applicableObjectCode
	 */
	applicableObjectCode?: string;

	/**
	 * A product characteristic applicable to this product batch certificate.
	 * @see https://vocabulary.uncefact.org/applicableProductCharacteristic
	 */
	applicableProductCharacteristic?: IProductCharacteristic[];

	/**
	 * A referenced standard applicable to this product batch certificate.
	 * @see https://vocabulary.uncefact.org/applicableStandard
	 */
	applicableStandard?: IStandard[];

	/**
	 * A sustainability characteristic applicable to this product batch certificate.
	 * @see https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic
	 */
	applicableSustainabilityCharacteristic?: ISustainabilityCharacteristic[];

	/**
	 * The trade product certification applicable to this product batch certificate.
	 * @see https://vocabulary.uncefact.org/applicableTradeProductCertification
	 */
	applicableTradeProductCertification?: ITradeProductCertification[];

	/**
	 * A binary file attached to this product batch certificate.
	 * @see https://vocabulary.uncefact.org/attachedBinaryFile
	 */
	attachedBinaryFile?: IBinaryFile[];

	/**
	 * The code specifying the type of product batch certificate.
	 * @see https://vocabulary.uncefact.org/certificateTypeCode
	 */
	certificateTypeCode?: CertificateTypeCodeList[];

	/**
	 * A textual description of this product batch certificate.
	 * @see https://vocabulary.uncefact.org/description
	 */
	description?: string;

	/**
	 * The date, time, date time, or other date time value when this product batch certificate expires.
	 * @see https://vocabulary.uncefact.org/expiryDateTime
	 */
	expiryDateTime?: string;

	/**
	 * The identifier of this product batch certificate.
	 * @see https://vocabulary.uncefact.org/identifier
	 */
	identifier?: string;

	/**
	 * The date, time, date time, or other date time value when this product batch certificate was issued.
	 * @see https://vocabulary.uncefact.org/issueDateTime
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
	issuingPartyId?: string;

	/**
	 * A code specifying a purpose of this product batch certificate.
	 * @see https://vocabulary.uncefact.org/purposeCode
	 */
	purposeCode?: string;

	/**
	 * The requested effective date, time, date time or other date time value for this product batch certificate.
	 * @see https://vocabulary.uncefact.org/requestedEffectiveDateTime
	 */
	requestedEffectiveDateTime?: string;
}
