# Interface: IDataspaceProtocolDataAddress

Interface for a Dataspace Protocol data address.

## See

https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#lower-level-types

## Properties

### @type {#type}

> **@type**: `"DataAddress"`

The JSON-LD type.

***

### endpointType {#endpointtype}

> **endpointType**: `string`

The endpoint type identifier.

***

### endpoint? {#endpoint}

> `optional` **endpoint?**: `string`

The endpoint URL or address.

***

### endpointProperties? {#endpointproperties}

> `optional` **endpointProperties?**: [`IDataspaceProtocolEndpointProperty`](IDataspaceProtocolEndpointProperty.md)[]

Transport-specific endpoint properties.
