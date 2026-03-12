# Interface: IDataspaceProtocolTransferError

Interface for Dataspace Protocol Transfer Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol#error-transfer-error

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

LD Context

***

### @type {#type}

> **@type**: `"TransferError"`

LD Type

***

### consumerPid {#consumerpid}

> **consumerPid**: `string`

MUST refer to the transfer identifier of the Consumer side.

***

### providerPid {#providerpid}

> **providerPid**: `string`

MUST refer to the transfer identifier of the Provider side.

***

### code? {#code}

> `optional` **code**: `string`

The error code.

***

### reason? {#reason}

> `optional` **reason**: `any`[]

The error reason(s).
