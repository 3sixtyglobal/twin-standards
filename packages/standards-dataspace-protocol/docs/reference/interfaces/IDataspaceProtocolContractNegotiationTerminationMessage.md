# Interface: IDataspaceProtocolContractNegotiationTerminationMessage

Interface for Dataspace Protocol Contract Negotiation Termination Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-negotiation-termination-message

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type {#type}

> **@type**: `"ContractNegotiationTerminationMessage"`

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

### code? {#code}

> `optional` **code**: `string`

The termination code.

***

### reason? {#reason}

> `optional` **reason**: `any`[]

The termination reason(s).
