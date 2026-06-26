# Interface: IDataspaceProtocolAuth

Interface for the authentication descriptor on a versioned Dataspace Protocol endpoint.
Describes the authentication mechanism required to call the versioned endpoint.

## See

https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1-err1/#exposure-of-dataspace-protocol-versions

## Properties

### protocol {#protocol}

> **protocol**: `string`

The authentication protocol identifier (e.g. "OAuth2", "DCP").

***

### version {#version}

> **version**: `string`

The version of the authentication protocol.

***

### profile? {#profile}

> `optional` **profile?**: `string`[]

List of authentication profile identifiers.
