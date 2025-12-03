# Interface: ITransportationWasteRecoveryDisposalProcess

A process of either regaining substances in usable form, or of getting rid of substances resulting from transportation.

## See

https://vocabulary.uncefact.org/TransportationWasteRecoveryDisposalProcess

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

> **type**: `"TransportationWasteRecoveryDisposalProcess"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description for the type of transportation waste recovery disposal process.

#### See

https://vocabulary.uncefact.org/description

***

### specifiedProcessCertificate?

> `optional` **specifiedProcessCertificate**: [`IProcessCertificate`](IProcessCertificate.md)[]

A process certificate specified for this transportation waste recovery disposal process.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertificate

***

### transportationWasteRecoveryDisposalProcessTypeCode?

> `optional` **transportationWasteRecoveryDisposalProcessTypeCode**: `string`

The code specifying the type of transportation waste recovery disposal process.

#### See

https://vocabulary.uncefact.org/transportationWasteRecoveryDisposalProcessTypeCode
