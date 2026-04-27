// Copyright 2025 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * TWIN Data Space Protocol Profile endpoint type identifiers.
 *
 * This module defines endpoint types according to the TWIN Foundation's
 * Data Space Protocol Profile (RFC 006), which extends the Eclipse Dataspace
 * Protocol specification with TWIN-specific vocabulary.
 *
 * The TWIN vocabulary uses persistent identifiers under the
 * https://schema.twindev.org namespace to provide stable, semantic
 * identifiers for data space endpoint types.
 *
 * References:
 * - TWIN RFC 006: https://github.com/iotaledger/twin-rfcs/blob/main/rfcs/data-space-protocol/006-data-space-protocol-profile.md
 * - TWIN DS Protocol Context: https://github.com/iotaledger/twin-rfcs/blob/main/rfcs/data-space-protocol/twin-ds-protocol-profile.jsonld
 * - Eclipse DSP Specification: https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/
 * - RFC 001 (Query Interface): https://github.com/iotaledger/twin-rfcs/blob/main/rfcs/data-space-connector/001-data-space-connector-query.md
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DataspaceProtocolEndpointType = {
	// ========================================
	// TWIN Data Space Protocol Profile (RFC 006)
	// Namespace: https://schema.twindev.org/dspace/v1/
	// ========================================

	/**
	 * HTTPS Query Endpoint (TWIN DS Profile).
	 *
	 * Used for PULL transfers via the TWIN Data Space Connector Query interface.
	 * The consumer retrieves data by querying this endpoint using the data access token.
	 * Endpoint must implement the interface specified in RFC 001.
	 *
	 * Transfer Flow:
	 * 1. Consumer initiates transfer request
	 * 2. Provider returns this endpoint type with data access token
	 * 3. Consumer queries the endpoint with the token to retrieve data
	 *
	 * @see https://github.com/iotaledger/twin-rfcs/blob/main/rfcs/data-space-protocol/006-data-space-protocol-profile.md#data-transfer-profile-vocabulary
	 * @see https://github.com/iotaledger/twin-rfcs/blob/main/rfcs/data-space-connector/001-data-space-connector-query.md
	 */
	HttpsQueryEndpoint: "https://schema.twindev.org/dspace/v1/Https-Query-Endpoint",

	/**
	 * HTTPS Activity Stream Endpoint (TWIN DS Profile).
	 *
	 * Used for PUSH transfers via Activity Streams 2.0 protocol.
	 * The provider actively sends data to the consumer's Activity Stream inbox endpoint.
	 * Based on W3C Activity Streams 2.0 specification.
	 *
	 * Transfer Flow:
	 * 1. Consumer initiates transfer request with this endpoint type
	 * 2. Consumer provides their Activity Stream inbox URL
	 * 3. Provider pushes data to the consumer's inbox as Activity Stream objects
	 *
	 * @see https://github.com/iotaledger/twin-rfcs/blob/main/rfcs/data-space-protocol/006-data-space-protocol-profile.md#data-transfer-profile-vocabulary
	 * @see https://www.w3.org/TR/activitystreams-core/
	 * @see https://www.w3.org/TR/activitypub/
	 */
	HttpsActivityStreamEndpoint:
		"https://schema.twindev.org/dspace/v1/Https-Activity-Stream-Endpoint",

	// ========================================
	// IDSA W3ID Namespace (Interoperability)
	// ========================================

	/**
	 * HTTP endpoint (IDSA W3ID v4.1).
	 *
	 * Persistent identifier for HTTP-based data access endpoints.
	 * This W3ID URL is used as a semantic identifier in JSON-LD contexts.
	 *
	 * Note: For TWIN-specific implementations, prefer using `HttpsQueryEndpoint`.
	 * This constant is provided for interoperability with IDSA-based systems.
	 *
	 * @see https://w3id.org/idsa/v4.1/HTTP
	 * @see https://github.com/International-Data-Spaces-Association/InformationModel
	 */
	HTTP: "https://w3id.org/idsa/v4.1/HTTP",

	/**
	 * HTTPS endpoint (IDSA W3ID v4.1).
	 *
	 * Persistent identifier for HTTPS-based secure data access endpoints.
	 * This W3ID URL is used as a semantic identifier in JSON-LD contexts.
	 *
	 * Note: For TWIN-specific implementations, prefer using `HttpsQueryEndpoint`.
	 * This constant is provided for interoperability with IDSA-based systems.
	 *
	 * @see https://w3id.org/idsa/v4.1/HTTPS
	 * @see https://github.com/International-Data-Spaces-Association/InformationModel
	 */
	HTTPS: "https://w3id.org/idsa/v4.1/HTTPS"
} as const;

/**
 * Type representing all valid Dataspace Protocol endpoint types.
 *
 * All values are valid URIs as required by the DS Protocol JSON-LD context
 * which defines endpointType as @type:@vocab.
 *
 * Includes:
 * - TWIN RFC 006 types: HttpsQueryEndpoint, HttpsActivityStreamEndpoint
 * - IDSA W3ID types: HTTP, HTTPS
 */
export type DataspaceProtocolEndpointType =
	(typeof DataspaceProtocolEndpointType)[keyof typeof DataspaceProtocolEndpointType];
