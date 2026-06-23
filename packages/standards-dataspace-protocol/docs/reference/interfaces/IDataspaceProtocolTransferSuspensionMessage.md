# Interface: IDataspaceProtocolTransferSuspensionMessage

Interface for the Dataspace Protocol transfer suspension message.

## See

https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#transfer-suspension-message

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type {#type}

> **@type**: `"TransferSuspensionMessage"`

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

The suspension code.

***

### reason? {#reason}

> `optional` **reason?**: `any`[]

The suspension reason(s).
