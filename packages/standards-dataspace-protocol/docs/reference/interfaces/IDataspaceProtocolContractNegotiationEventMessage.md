# Interface: IDataspaceProtocolContractNegotiationEventMessage

Interface for Dataspace Protocol Contract Negotiation Event Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-negotiation-event-message

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type {#type}

> **@type**: `"ContractNegotiationEventMessage"`

The type of the message.

***

### providerPid {#providerpid}

> **providerPid**: `string`

The provider id for the contract.

***

### consumerPid {#consumerpid}

> **consumerPid**: `string`

The consumer id for the contract.

***

### event {#event}

> **event**: [`DataspaceProtocolContractNegotiationEventType`](../type-aliases/DataspaceProtocolContractNegotiationEventType.md)

The event type.
