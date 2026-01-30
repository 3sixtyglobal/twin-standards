# Interface: IUneceCancellationStatus

Information relevant to a condition of a cancellation.

## See

https://vocabulary.uncefact.org/CancellationStatus

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"CancellationStatus"`

JSON-LD Type.

***

### cancellationDocumentStatusConditionCode?

> `optional` **cancellationDocumentStatusConditionCode**: `string`

The code specifying the condition of this cancellation status.

#### See

https://vocabulary.uncefact.org/cancellationDocumentStatusConditionCode

***

### cancellationStatusReasonCode?

> `optional` **cancellationStatusReasonCode**: `string`

The code specifying the reason for this cancellation status.

#### See

https://vocabulary.uncefact.org/cancellationStatusReasonCode

***

### reason?

> `optional` **reason**: `string`

A reason, expressed as text, for this cancellation status.

#### See

https://vocabulary.uncefact.org/reason

***

### reasonInformation?

> `optional` **reasonInformation**: `string`

Information, expressed as text, related to the reason for this cancellation status.

#### See

https://vocabulary.uncefact.org/reasonInformation
