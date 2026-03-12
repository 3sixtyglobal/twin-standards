# Interface: IDataspaceProtocolDataAddress

Interface for Dataspace Protocol Transfer Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#lower-level-types

## Properties

### @type {#type}

> **@type**: `"DataAddress"`

LD Type

***

### endpointType {#endpointtype}

> **endpointType**: `string`

The type of endpoint of this data address.

***

### endpoint? {#endpoint}

> `optional` **endpoint**: `string`

The endpoint of the data address

***

### endpointProperties? {#endpointproperties}

> `optional` **endpointProperties**: [`IDataspaceProtocolEndpointProperty`](IDataspaceProtocolEndpointProperty.md)[]

Properties associated to the endpoint which might depend on the endpoint type.
