# Interface: IDataspaceProtocolTransferStartMessage

Interface for Dataspace Protocol Transfer Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#transfer-start-message

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

LD Context

***

### @type {#type}

> **@type**: `"TransferStartMessage"`

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

### dataAddress? {#dataaddress}

> `optional` **dataAddress?**: [`IDataspaceProtocolDataAddress`](IDataspaceProtocolDataAddress.md)

MUST be provided if the current transfer is a pull transfer and
contains a transport-specific endpoint address for obtaining the data.
