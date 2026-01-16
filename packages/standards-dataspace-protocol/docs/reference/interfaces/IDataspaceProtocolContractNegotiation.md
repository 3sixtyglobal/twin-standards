# Interface: IDataspaceProtocolContractNegotiation

Interface for Dataspace Protocol Contract Agreement Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#ack-contract-negotiation

## Properties

### @context

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type

> **@type**: `"ContractNegotiation"`

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

### state

> **state**: [`DataspaceProtocolContractNegotiationStateType`](../type-aliases/DataspaceProtocolContractNegotiationStateType.md)

The offer being requested.
