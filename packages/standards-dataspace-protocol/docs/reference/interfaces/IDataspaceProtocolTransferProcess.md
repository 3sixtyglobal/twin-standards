# Interface: IDataspaceProtocolTransferProcess

Interface for the Dataspace Protocol transfer process acknowledgment.

## See

https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#ack-transfer-process

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type {#type}

> **@type**: `"TransferProcess"`

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

### state {#state}

> **state**: [`DataspaceProtocolTransferProcessStateType`](../type-aliases/DataspaceProtocolTransferProcessStateType.md)

The transfer process state.
