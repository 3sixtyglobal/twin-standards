# Interface: IDataspaceProtocolTransferSuspensionMessage

Interface for Dataspace Protocol Transfer Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#transfer-suspension-message

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

### code?

> `optional` **code**: `string`

The suspension code.

***

### reason?

> `optional` **reason**: `any`[]

The suspension reason(s).
