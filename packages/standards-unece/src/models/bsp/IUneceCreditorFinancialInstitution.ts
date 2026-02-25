// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
/* cSpell:disable */
/* This file is auto-generated with the generateInterfaces script, do not edit manually. */
import type { IUneceBranchFinancialInstitution } from "./IUneceBranchFinancialInstitution.js";
import type { IUneceFinancialInstitutionAddress } from "./IUneceFinancialInstitutionAddress.js";
import type { IUneceProprietaryIdentity } from "./IUneceProprietaryIdentity.js";
import type { UneceContextType } from "../uneceContextType.js";
import type { UneceTypes } from "../uneceTypes.js";

/**
 * A bank, building society, credit union, stock brokerage, or similar business of the party that receives money.
 * @see https://vocabulary.uncefact.org/CreditorFinancialInstitution
 */
export interface IUneceCreditorFinancialInstitution {
	/**
	 * JSON-LD Context.
	 */
	"@context"?: UneceContextType;

	/**
	 * JSON-LD Type.
	 */
	type: typeof UneceTypes.CreditorFinancialInstitution;

	/**
	 * An additional clearing system identifier for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/additionalClearingSystemId
	 */
	additionalClearingSystemId?: string;

	/**
	 * The unique Australian Bank State Branch (BSB) Code identifier as assigned by the Australian Payments Clearing
	 * Association (APCA) for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/australianBSBId
	 */
	australianBSBId?: string;

	/**
	 * The Australian Small Network (SN) identifier as assigned by the Australian Payments Clearing Association (APCA) for this
	 * creditor financial institution.
	 * @see https://vocabulary.uncefact.org/australianSNId
	 */
	australianSNId?: string;

	/**
	 * The unique Austrian Bankleitzahl identifier for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/austrianBankleitzahlId
	 */
	austrianBankleitzahlId?: string;

	/**
	 * The unique Bank Identification Code (BIC) as defined in ISO 9362 for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/bICId
	 */
	bICId?: string;

	/**
	 * The unique (United States) Clearing House Interbank Payment System (CHIPS) Participant Identifier (ID) as assigned by
	 * the New York Clearing House for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/cHIPSParticipantId
	 */
	cHIPSParticipantId?: string;

	/**
	 * The unique (United States) Clearing House Interbank Payments System (CHIPS) Universal Identification (UID) as assigned
	 * by the New York Clearing House for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/cHIPSUniversalId
	 */
	cHIPSUniversalId?: string;

	/**
	 * The unique Canadian Payments Association Routing Number identifier for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/canadianPaymentsAssociationId
	 */
	canadianPaymentsAssociationId?: string;

	/**
	 * The clearing system name, expressed as text, for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/clearingSystemName
	 */
	clearingSystemName?: string;

	/**
	 * The unique Fedwire Routing Number identifier as assigned by the American Bankers Association (ABA) for this creditor
	 * financial institution.
	 * @see https://vocabulary.uncefact.org/fedwireRoutingNumberId
	 */
	fedwireRoutingNumberId?: string;

	/**
	 * The unique German Bankleitzahl identifier for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/germanBankleitzahlId
	 */
	germanBankleitzahlId?: string;

	/**
	 * The unique Hellenic Bank Identification Code identifier for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/hellenicBankId
	 */
	hellenicBankId?: string;

	/**
	 * The unique Hong Kong Bank Code identifier for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/hongKongBankId
	 */
	hongKongBankId?: string;

	/**
	 * The unique Indian Financial System Code identifier for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/indianFinancialSystemId
	 */
	indianFinancialSystemId?: string;

	/**
	 * The unique Irish National Sorting Code (NSC) identifier as assigned by the Irish Payments Services Organisation (IPSO)
	 * for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/irishNSCId
	 */
	irishNSCId?: string;

	/**
	 * The unique Italian Domestic Identification Code identifier as assigned by the Associazione Bancaria Italiana (ABI) for
	 * this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/italianDomesticId
	 */
	italianDomesticId?: string;

	/**
	 * The Japan Financial Institution Common identifier as assigned by the Japanese Bankers Association for this creditor
	 * financial institution.
	 * @see https://vocabulary.uncefact.org/japanFinancialInstitutionCommonId
	 */
	japanFinancialInstitutionCommonId?: string;

	/**
	 * The location address for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/locationAddress
	 */
	locationAddress?: IUneceFinancialInstitutionAddress;

	/**
	 * The name, expressed as text, for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/name
	 */
	name?: string;

	/**
	 * The unique New Zealand National Clearing Code (NCC) identifier as assigned by the New Zealand Bankers' Association
	 * (NZBA) for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/newZealandNCCId
	 */
	newZealandNCCId?: string;

	/**
	 * The unique Polish National Clearing Code identifier for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/polishNationalClearingId
	 */
	polishNationalClearingId?: string;

	/**
	 * The unique Portuguese National Clearing Code (NCC) identifier for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/portugueseNCCId
	 */
	portugueseNCCId?: string;

	/**
	 * The unique Russian Central Bank Identification Code identifier for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/russianCentralBankId
	 */
	russianCentralBankId?: string;

	/**
	 * The unique Swiss Interbank Clearing (SIC) Code identifier for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/sICId
	 */
	sICId?: string;

	/**
	 * A unique sort code identifier for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/sortCodeId
	 */
	sortCodeId?: string;

	/**
	 * The unique South African National Clearing Code (NCC) identifier as assigned by the South African Bankers Services
	 * Company Ltd. (BankServ) for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/southAfricanNCCId
	 */
	southAfricanNCCId?: string;

	/**
	 * The unique Spanish Domestic Interbanking Code identifier as assigned by the Centro de Cooperacion Interbancaria (CCI)
	 * for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/spanishDomesticInterbankingId
	 */
	spanishDomesticInterbankingId?: string;

	/**
	 * A proprietary identity specified for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/specifiedProprietaryIdentity
	 */
	specifiedProprietaryIdentity?: IUneceProprietaryIdentity[];

	/**
	 * The branch financial institution for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/subDivisionFinancialInstitution
	 */
	subDivisionFinancialInstitution?: IUneceBranchFinancialInstitution;

	/**
	 * The unique Swiss Bank Code (BC) identifier for this creditor financial institution.
	 * @see https://vocabulary.uncefact.org/swissBCId
	 */
	swissBCId?: string;

	/**
	 * The unique United Kingdom (UK) Sort Code identifier as assigned by the UK Payment Association (APACS) for this creditor
	 * financial institution.
	 * @see https://vocabulary.uncefact.org/uKSortCodeId
	 */
	uKSortCodeId?: string;
}
