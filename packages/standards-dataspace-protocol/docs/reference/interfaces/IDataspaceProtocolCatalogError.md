# Interface: IDataspaceProtocolCatalogError

Interface for Dataspace Protocol Catalog Error.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/2025-1/#error-catalog-error

## Properties

### @context {#context}

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

The JSON-LD context.

***

### @type {#type}

> **@type**: `"CatalogError"`

The type of the message.

***

### code {#code}

> **code**: `string`

The error code.

***

### reason? {#reason}

> `optional` **reason?**: `any`[]

The error reason(s).
