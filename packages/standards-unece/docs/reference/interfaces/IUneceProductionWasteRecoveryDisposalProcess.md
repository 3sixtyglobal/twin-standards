# Interface: IUneceProductionWasteRecoveryDisposalProcess

A process of either regaining waste substances in usable form, or of getting rid of waste substances resulting from
production.

## See

https://vocabulary.uncefact.org/ProductionWasteRecoveryDisposalProcess

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

> **type**: `"ProductionWasteRecoveryDisposalProcess"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this production waste recovery disposal process.

#### See

https://vocabulary.uncefact.org/description

***

### productionWasteRecoveryDisposalProcessTypeCode?

> `optional` **productionWasteRecoveryDisposalProcessTypeCode**: `string`

The code specifying the type of production waste recovery disposal process.

#### See

https://vocabulary.uncefact.org/productionWasteRecoveryDisposalProcessTypeCode

***

### specifiedProcessCertificate?

> `optional` **specifiedProcessCertificate**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate specified for this production waste recovery disposal process.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertificate
