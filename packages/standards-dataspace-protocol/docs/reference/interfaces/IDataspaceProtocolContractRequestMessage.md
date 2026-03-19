# Interface: IDataspaceProtocolContractRequestMessage

Interface for Dataspace Protocol Contract Request Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-request-message

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type {#type}

> **@type**: `"ContractRequestMessage"`

The type of the message.

***

### providerPid? {#providerpid}

> `optional` **providerPid**: `string`

The provider id for the contract.

***

### consumerPid {#consumerpid}

> **consumerPid**: `string`

The consumer id for the contract.

***

### offer {#offer}

> **offer**: [`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md)

The offer being requested.

***

### callbackAddress? {#callbackaddress}

> `optional` **callbackAddress**: `string`

The base callback address for the provider to update the consumer on the state of the negotiation.
