# Interface: IDataspaceProtocolVersionResponse

Interface for the response from the GET /.well-known/dspace-version discovery endpoint.
This endpoint MUST be unversioned and unauthenticated per RFC 8615.

## See

https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#exposure-of-dataspace-protocol-versions

## Properties

### protocolVersions {#protocolversions}

> **protocolVersions**: \[[`IDataspaceProtocolVersion`](IDataspaceProtocolVersion.md), `...IDataspaceProtocolVersion[]`\]

The list of Dataspace Protocol versions supported by this connector. Must contain at least
one entry.
