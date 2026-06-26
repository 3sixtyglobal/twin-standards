# Interface: IDataspaceProtocolVersion

Interface for a single supported Dataspace Protocol version entry.

## See

https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#exposure-of-dataspace-protocol-versions

## Properties

### version {#version}

> **version**: `string`

The protocol version identifier (e.g. "2025-1"). An open string to accommodate future
versions; known values are "0.8", "2024-1", and "2025-1".

***

### path {#path}

> **path**: `string`

The URL path prefix at which the versioned endpoints are served (e.g. "/dsp/2025-1").

***

### binding {#binding}

> **binding**: `"HTTPS"`

The transport binding for this version's endpoints.

***

### serviceId? {#serviceid}

> `optional` **serviceId?**: `string`

Data Service identifier, allowing a Data Service to group multiple version entries.
Corresponds to the `@id` of the Data Service in the DID document.

***

### identifierType? {#identifiertype}

> `optional` **identifierType?**: `string`

Participant identifier scheme (e.g. "did:web", "D-U-N-S").

***

### auth? {#auth}

> `optional` **auth?**: [`IDataspaceProtocolAuth`](IDataspaceProtocolAuth.md)

Authentication descriptor for the versioned endpoints.
