# Interface: IDataspaceProtocolTransferTerminationMessage

Interface for the Dataspace Protocol transfer termination message.

## See

https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#transfer-termination-message

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type {#type}

> **@type**: `"TransferTerminationMessage"`

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

The termination code.

***

### reason? {#reason}

> `optional` **reason?**: `any`[]

The termination reason(s).
