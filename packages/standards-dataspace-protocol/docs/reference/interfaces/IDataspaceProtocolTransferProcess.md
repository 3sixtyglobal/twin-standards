# Interface: IDataspaceProtocolTransferProcess

Interface for Dataspace Protocol Transfer Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#ack-transfer-process

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

LD Context

***

### @type {#type}

> **@type**: `"TransferProcess"`

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

### state {#state}

> **state**: [`DataspaceProtocolTransferProcessStateType`](../type-aliases/DataspaceProtocolTransferProcessStateType.md)

The transfer process state.
