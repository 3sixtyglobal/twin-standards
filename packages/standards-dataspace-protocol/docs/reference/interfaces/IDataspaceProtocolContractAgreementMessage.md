# Interface: IDataspaceProtocolContractAgreementMessage

Interface for Dataspace Protocol Contract Agreement Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#contract-agreement-message

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type {#type}

> **@type**: `"ContractAgreementMessage"`

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

### agreement {#agreement}

> **agreement**: `JsonLdObjectWithNoContext`\<[`IDataspaceProtocolAgreement`](IDataspaceProtocolAgreement.md)\>

The agreement being sent.

***

### callbackAddress? {#callbackaddress}

> `optional` **callbackAddress?**: `string`

The base callback address for the provider to update the consumer on the state of the negotiation.
