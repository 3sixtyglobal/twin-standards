# Interface: IUneceEnvelope

A structure providing XHE (Exchange Header Envelope) information.

## See

https://vocabulary.uncefact.org/Envelope

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Envelope"`

JSON-LD Type.

***

### customizationId?

> `optional` **customizationId**: `string` \| `IJsonLdValueObject`

The customization identifier for this XHE envelope.

#### See

https://vocabulary.uncefact.org/customizationId

***

### includedPayload?

> `optional` **includedPayload**: [`IUnecePayload`](IUnecePayload.md)

The payload included in this XHE envelope.

#### See

https://vocabulary.uncefact.org/includedPayload

***

### metadataDocument

> **metadataDocument**: [`IUneceXHEDocument`](IUneceXHEDocument.md)

The document metadata for this XHE envelope.

#### See

https://vocabulary.uncefact.org/metadataDocument

***

### payloadIncludedIndicator?

> `optional` **payloadIncludedIndicator**: `boolean`

The indication of whether or not a payload is included in this XHE envelope.

#### See

https://vocabulary.uncefact.org/payloadIncludedIndicator

***

### profileExecutionId?

> `optional` **profileExecutionId**: `string` \| `IJsonLdValueObject`

The profile execution identifier for this XHE envelope.

#### See

https://vocabulary.uncefact.org/profileExecutionId

***

### profileId?

> `optional` **profileId**: `string` \| `IJsonLdValueObject`

The profile identifier for this XHE envelope.

#### See

https://vocabulary.uncefact.org/profileId

***

### versionId

> **versionId**: `string` \| `IJsonLdValueObject`

The version identifier for this XHE envelope.

#### See

https://vocabulary.uncefact.org/versionId
