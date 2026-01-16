# Interface: IDataspaceProtocolTransferRequestMessage

Interface for Dataspace Protocol Transfer Messages.
https://eclipse-dataspace-protocol-base.github.io/DataspaceProtocol/#transfer-request-message

## Properties

### @context

> **@context**: [`DataspaceProtocolContextType`](../type-aliases/DataspaceProtocolContextType.md)

LD Context

***

### @type

> **@type**: `"TransferRequestMessage"`

LD Type

***

### agreementId

> **agreementId**: `string`

MUST refer to an existing Agreement between the Consumer and Provider.

***

### callbackAddress

> **callbackAddress**: `string`

MUST be a URI indicating where messages to the Consumer SHOULD be sent.

***

### consumerPid

> **consumerPid**: `string`

MUST refer to the transfer identifier of the Consumer side.

***

### format

> **format**: `string`

The format property is a format specified by a Distribution for the Dataset associated with the Agreement.
This is generally obtained from the Provider's Catalog.

***

### dataAddress?

> `optional` **dataAddress**: [`IDataspaceProtocolDataAddress`](IDataspaceProtocolDataAddress.md)

If defined MUST contain a transport-specific set of properties for pushing the data.
It MAY include an endpoint, a temporary authorization via the endpointProperties property - depending on the endpointType.
