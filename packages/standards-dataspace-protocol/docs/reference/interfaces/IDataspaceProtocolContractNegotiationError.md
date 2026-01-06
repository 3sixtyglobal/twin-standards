# Interface: IDataspaceProtocolContractNegotiationError

Interface for Dataspace Protocol Contract Negotiation Error Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#error-contract-negotiation-error

## Properties

### @context

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type

> **@type**: `string`

The type of the message.

***

### providerPid

> **providerPid**: `string`

The provider id for the contract.

***

### consumerPid

> **consumerPid**: `string`

The consumer id for the contract.

***

### code?

> `optional` **code**: `string`

The error code.

***

### reason?

> `optional` **reason**: `any`[]

The error reason(s).
