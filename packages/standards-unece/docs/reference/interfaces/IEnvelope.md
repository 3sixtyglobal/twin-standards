# Interface: IEnvelope

A structure providing XHE (Exchange Header Envelope) information.

## See

https://vocabulary.uncefact.org/Envelope

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"Envelope"`

JSON-LD Type.

***

### customizationId?

> `optional` **customizationId**: `string`

The customization identifier for this XHE envelope.

#### See

https://vocabulary.uncefact.org/customizationId

***

### includedPayload?

> `optional` **includedPayload**: [`IPayload`](IPayload.md)[]

The payload included in this XHE envelope.

#### See

https://vocabulary.uncefact.org/includedPayload

***

### metadataDocument?

> `optional` **metadataDocument**: [`IXHEDocument`](IXHEDocument.md)[]

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

> `optional` **profileExecutionId**: `string`

The profile execution identifier for this XHE envelope.

#### See

https://vocabulary.uncefact.org/profileExecutionId

***

### profileId?

> `optional` **profileId**: `string`

The profile identifier for this XHE envelope.

#### See

https://vocabulary.uncefact.org/profileId

***

### versionId?

> `optional` **versionId**: `string`

The version identifier for this XHE envelope.

#### See

https://vocabulary.uncefact.org/versionId
