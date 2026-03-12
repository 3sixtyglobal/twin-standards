# Interface: IDataspaceProtocolContractNegotiationError

Interface for Dataspace Protocol Contract Negotiation Error Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#error-contract-negotiation-error

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type {#type}

> **@type**: `"ContractNegotiationError"`

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

The error code.

***

### reason? {#reason}

> `optional` **reason**: `any`[]

The error reason(s).
