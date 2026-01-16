# Interface: IDataspaceProtocolTransferError

Interface for Dataspace Protocol Transfer Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol#error-transfer-error

## Properties

### @context

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

LD Context

***

### @type

> **@type**: `"TransferError"`

LD Type

***

### consumerPid

> **consumerPid**: `string`

MUST refer to the transfer identifier of the Consumer side.

***

### providerPid

> **providerPid**: `string`

MUST refer to the transfer identifier of the Provider side.

***

### code?

> `optional` **code**: `string`

The error code.

***

### reason?

> `optional` **reason**: `any`[]

The error reason(s).
