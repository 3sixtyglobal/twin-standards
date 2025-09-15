// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for IDS Contract Negotiation.
 * https://docs.internationaldataspaces.org/ids-knowledgebase/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-2-message-types
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const IdsContractNegotiationTypes = {
	/**
	 * Contract Negotiation.
	 */
	ContractNegotiation: "ContractNegotiation",

	/**
	 * Contract Request Message.
	 */
	ContractRequestMessage: "ContractRequestMessage",

	/**
	 * Contract Offer Message.
	 */
	ContractOfferMessage: "ContractOfferMessage",

	/**
	 * Contract Agreement Message.
	 */
	ContractAgreementMessage: "ContractAgreementMessage",

	/**
	 * Contract Agreement Verification Message.
	 */
	ContractAgreementVerificationMessage: "ContractAgreementVerificationMessage",

	/**
	 * Contract Negotiation Event Message.
	 */
	ContractNegotiationEventMessage: "ContractNegotiationEventMessage",

	/**
	 * Contract Negotiation Termination Message.
	 */
	ContractNegotiationTerminationMessage: "ContractNegotiationTerminationMessage",

	/**
	 * Contract Negotiation Error.
	 */
	ContractNegotiationError: "ContractNegotiationError",

	/**
	 * Contract Negotiation Event Type.
	 */
	ContractNegotiationEventType: "ContractNegotiationEventType",

	/**
	 * Contract Negotiation State Type.
	 */
	ContractNegotiationStateType: "ContractNegotiationStateType"
};

/**
 * The types for IDS Contract Negotiation.
 */
export type IdsContractNegotiationTypes =
	(typeof IdsContractNegotiationTypes)[keyof typeof IdsContractNegotiationTypes];
