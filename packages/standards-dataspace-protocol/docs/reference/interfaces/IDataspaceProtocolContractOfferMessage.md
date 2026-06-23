# Interface: IDataspaceProtocolContractOfferMessage

Interface for the Dataspace Protocol contract offer message.

## See

https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-offer-message

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type {#type}

> **@type**: `"ContractOfferMessage"`

The type of the message.

***

### providerPid {#providerpid}

> **providerPid**: `string`

The provider id for the contract.

***

### consumerPid? {#consumerpid}

> `optional` **consumerPid?**: `string`

The consumer id for the contract.

***

### offer {#offer}

> **offer**: [`IDataspaceProtocolOfferBase`](IDataspaceProtocolOfferBase.md)

The offer being requested.

***

### callbackAddress? {#callbackaddress}

> `optional` **callbackAddress?**: `string`

The base callback address for the provider to update the consumer on the state of the negotiation.
