# Interface: ITransferProcess

Interface for Dataspace Protocol Transfer Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#ack-transfer-process

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

### state

> **state**: `object`

The transfer process state.

#### COMPLETED

> **COMPLETED**: `string` = `"COMPLETED"`

Completed

#### REQUESTED

> **REQUESTED**: `string` = `"REQUESTED"`

Requested

#### STARTED

> **STARTED**: `string` = `"STARTED"`

Started

#### SUSPENDED

> **SUSPENDED**: `string` = `"SUSPENDED"`

Suspended

#### TERMINATED

> **TERMINATED**: `string` = `"TERMINATED"`

Terminated
