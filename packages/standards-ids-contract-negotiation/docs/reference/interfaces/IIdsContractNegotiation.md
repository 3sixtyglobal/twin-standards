# Interface: IIdsContractNegotiation

Interface for IDS Contract Agreement Messages.
https://docs.internationaldataspaces.org/ids-knowledgebase/dataspace-protocol/contract-negotiation/contract.negotiation.protocol#id-2.3-contract-agreement-message

## Properties

### @context

> **@context**: [`IdsContractNegotiationContextType`](../type-aliases/IdsContractNegotiationContextType.md)

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

### state

> **state**: [`IdsContractNegotiationStateType`](../type-aliases/IdsContractNegotiationStateType.md)

The offer being requested.
