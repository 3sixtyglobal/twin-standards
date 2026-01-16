# Interface: IDataspaceProtocolDataAddress

Interface for Dataspace Protocol Transfer Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#lower-level-types

## Properties

### @type

> **@type**: `"DataAddress"`

LD Type

***

### endpointType

> **endpointType**: `string`

The type of endpoint of this data address.

***

### endpoint?

> `optional` **endpoint**: `string`

The endpoint of the data address

***

### endpointProperties?

> `optional` **endpointProperties**: [`IDataspaceProtocolEndpointProperty`](IDataspaceProtocolEndpointProperty.md)[]

Properties associated to the endpoint which might depend on the endpoint type.
