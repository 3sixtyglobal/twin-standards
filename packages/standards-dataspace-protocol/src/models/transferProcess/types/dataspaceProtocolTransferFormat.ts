// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * DSP transfer format identifiers used in TransferRequestMessage.format.
 * See RFC-006 Data Transfer Profile Vocabulary.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DataspaceProtocolTransferFormat = {
	/**
	 * PULL mode: consumer queries data via a bearer-token-protected endpoint.
	 */
	HttpPullQueryFormat: "Http-Pull-Query-Format",

	/**
	 * Consumer-initiated PUSH mode: consumer provides an /inbox endpoint; provider posts ActivityStreams objects there.
	 */
	HttpPushActivityStreamFormat: "Http-Push-Activity-Stream-Format",

	/**
	 * Provider-initiated PUSH mode: provider returns an /inbox URL and JWT token in endpointProperties.
	 */
	HttpPostActivityStreamFormat: "Http-Post-Activity-Stream-Format"
} as const;

/**
 * Type for the DataspaceProtocolTransferFormat const values.
 */
export type DataspaceProtocolTransferFormat =
	(typeof DataspaceProtocolTransferFormat)[keyof typeof DataspaceProtocolTransferFormat];
