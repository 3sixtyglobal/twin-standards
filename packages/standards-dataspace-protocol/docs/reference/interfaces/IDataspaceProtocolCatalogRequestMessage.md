# Interface: IDataspaceProtocolCatalogRequestMessage

Interface for the Dataspace Protocol catalog request message.

## See

https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#catalog-request-message

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type {#type}

> **@type**: `"CatalogRequestMessage"`

The type of the message.

***

### filter? {#filter}

> `optional` **filter?**: `unknown`[]

An implementation-specific query or filter expression.
