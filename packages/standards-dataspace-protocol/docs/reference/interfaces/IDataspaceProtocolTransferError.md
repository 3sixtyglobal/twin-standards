# Interface: IDataspaceProtocolTransferError

Interface for the Dataspace Protocol transfer error response.

## See

https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol#error-transfer-error

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type {#type}

> **@type**: `"TransferError"`

The JSON-LD type.

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

> `optional` **code?**: `string`

The error code.

***

### reason? {#reason}

> `optional` **reason?**: `any`[]

The error reason(s).
