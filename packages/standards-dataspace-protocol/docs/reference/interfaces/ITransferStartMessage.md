# Interface: ITransferStartMessage

Interface for Dataspace Protocol Transfer Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#transfer-start-message

## Properties

### @context

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

LD Context

***

### @type

> **@type**: `string`

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

### dataAddress?

> `optional` **dataAddress**: [`IDataAddress`](IDataAddress.md)

MUST be provided if the current transfer is a pull transfer and
contains a transport-specific endpoint address for obtaining the data.
