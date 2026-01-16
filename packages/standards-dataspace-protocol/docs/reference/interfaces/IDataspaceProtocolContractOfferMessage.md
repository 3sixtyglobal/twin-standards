# Interface: IDataspaceProtocolContractOfferMessage

Interface for Dataspace Protocol Contract Offer Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-offer-message

## Properties

### @context

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type

> **@type**: `"ContractOfferMessage"`

The type of the message.

***

### providerPid

> **providerPid**: `string`

The provider id for the contract.

***

### consumerPid?

> `optional` **consumerPid**: `string`

The consumer id for the contract.

***

### offer

> **offer**: `IOdrlOffer`

The offer being requested.

***

### callbackAddress?

> `optional` **callbackAddress**: `string`

The base callback address for the provider to update the consumer on the state of the negotiation.
