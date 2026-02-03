# Variable: DataspaceProtocolEndpointType

> `const` **DataspaceProtocolEndpointType**: `object`

TWIN Data Space Protocol Profile endpoint type identifiers.

This module defines endpoint types according to the TWIN Foundation's
Data Space Protocol Profile (RFC 006), which extends the Eclipse Dataspace
Protocol specification with TWIN-specific vocabulary.

The TWIN vocabulary uses persistent identifiers under the
https://schema.twindev.org namespace to provide stable, semantic
identifiers for data space endpoint types.

References:
- TWIN RFC 006: https://github.com/twinfoundation/rfcs/blob/main/rfcs/data-space-protocol/006-data-space-protocol-profile.md
- TWIN DS Protocol Context: https://github.com/twinfoundation/rfcs/blob/main/rfcs/data-space-protocol/twin-ds-protocol-profile.jsonld
- Eclipse DSP Specification: https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/
- RFC 001 (Query Interface): https://github.com/twinfoundation/rfcs/blob/main/rfcs/data-space-connector/001-data-space-connector-query.md

## Type Declaration

### HttpsQueryEndpoint

> `readonly` **HttpsQueryEndpoint**: `"https://schema.twindev.org/dspace/v1/Https-Query-Endpoint"` = `"https://schema.twindev.org/dspace/v1/Https-Query-Endpoint"`

HTTPS Query Endpoint (TWIN DS Profile).

Used for PULL transfers via the TWIN Data Space Connector Query interface.
The consumer retrieves data by querying this endpoint using the data access token.
Endpoint must implement the interface specified in RFC 001.

Transfer Flow:
1. Consumer initiates transfer request
2. Provider returns this endpoint type with data access token
3. Consumer queries the endpoint with the token to retrieve data

#### See

 - https://github.com/twinfoundation/rfcs/blob/main/rfcs/data-space-protocol/006-data-space-protocol-profile.md#data-transfer-profile-vocabulary
 - https://github.com/twinfoundation/rfcs/blob/main/rfcs/data-space-connector/001-data-space-connector-query.md

### HttpsActivityStreamEndpoint

> `readonly` **HttpsActivityStreamEndpoint**: `"https://schema.twindev.org/dspace/v1/Https-Activity-Stream-Endpoint"` = `"https://schema.twindev.org/dspace/v1/Https-Activity-Stream-Endpoint"`

HTTPS Activity Stream Endpoint (TWIN DS Profile).

Used for PUSH transfers via Activity Streams 2.0 protocol.
The provider actively sends data to the consumer's Activity Stream inbox endpoint.
Based on W3C Activity Streams 2.0 specification.

Transfer Flow:
1. Consumer initiates transfer request with this endpoint type
2. Consumer provides their Activity Stream inbox URL
3. Provider pushes data to the consumer's inbox as Activity Stream objects

#### See

 - https://github.com/twinfoundation/rfcs/blob/main/rfcs/data-space-protocol/006-data-space-protocol-profile.md#data-transfer-profile-vocabulary
 - https://www.w3.org/TR/activitystreams-core/
 - https://www.w3.org/TR/activitypub/

### HTTP

> `readonly` **HTTP**: `"https://w3id.org/idsa/v4.1/HTTP"` = `"https://w3id.org/idsa/v4.1/HTTP"`

HTTP endpoint (IDSA W3ID v4.1).

Persistent identifier for HTTP-based data access endpoints.
This W3ID URL is used as a semantic identifier in JSON-LD contexts.

Note: For TWIN-specific implementations, prefer using `HttpsQueryEndpoint`.
This constant is provided for interoperability with IDSA-based systems.

#### See

 - https://w3id.org/idsa/v4.1/HTTP
 - https://github.com/International-Data-Spaces-Association/InformationModel

### HTTPS

> `readonly` **HTTPS**: `"https://w3id.org/idsa/v4.1/HTTPS"` = `"https://w3id.org/idsa/v4.1/HTTPS"`

HTTPS endpoint (IDSA W3ID v4.1).

Persistent identifier for HTTPS-based secure data access endpoints.
This W3ID URL is used as a semantic identifier in JSON-LD contexts.

Note: For TWIN-specific implementations, prefer using `HttpsQueryEndpoint`.
This constant is provided for interoperability with IDSA-based systems.

#### See

 - https://w3id.org/idsa/v4.1/HTTPS
 - https://github.com/International-Data-Spaces-Association/InformationModel
