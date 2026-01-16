// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for Dataspace Protocol Contract Negotiation.
 * https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#message-types-0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DataspaceProtocolContractNegotiationTypes = {
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
} as const;

/**
 * The types for Dataspace Protocol Contract Negotiation.
 */
export type DataspaceProtocolContractNegotiationTypes =
	(typeof DataspaceProtocolContractNegotiationTypes)[keyof typeof DataspaceProtocolContractNegotiationTypes];
