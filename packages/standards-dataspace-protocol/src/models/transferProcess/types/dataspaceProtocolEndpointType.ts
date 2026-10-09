// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * TWIN Data Space Protocol Profile endpoint type identifiers.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DataspaceProtocolEndpointType = {
	/**
	 * HTTPS query endpoint for PULL transfers via the TWIN Data Space Connector Query interface.
	 */
	HttpsQueryEndpoint: "https://schema.3sixty.global/dspace/v1/Https-Query-Endpoint",

	/**
	 * HTTPS Activity Stream endpoint for PUSH transfers via the Activity Streams 2.0 protocol.
	 */
	HttpsActivityStreamEndpoint:
		"https://schema.3sixty.global/dspace/v1/Https-Activity-Stream-Endpoint",

	/**
	 * HTTP endpoint identifier from the IDSA W3ID v4.1 namespace.
	 * @see https://w3id.org/idsa/v4.1/HTTP
	 */
	HTTP: "https://w3id.org/idsa/v4.1/HTTP",

	/**
	 * HTTPS endpoint identifier from the IDSA W3ID v4.1 namespace.
	 *
	 * @see https://w3id.org/idsa/v4.1/HTTPS
	 */
	HTTPS: "https://w3id.org/idsa/v4.1/HTTPS"
} as const;

/**
 * All valid Dataspace Protocol endpoint type URI values.
 */
export type DataspaceProtocolEndpointType =
	(typeof DataspaceProtocolEndpointType)[keyof typeof DataspaceProtocolEndpointType];
