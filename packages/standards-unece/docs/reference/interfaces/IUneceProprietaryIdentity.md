# Interface: IUneceProprietaryIdentity

Proprietary information which uniquely identifies a person or organization.

## See

https://vocabulary.uncefact.org/ProprietaryIdentity

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

> **type**: `"ProprietaryIdentity"`

JSON-LD Type.

***

### identificationType?

> `optional` **identificationType**: `string`

An identifier type, expressed as text, for this proprietary identity.

#### See

https://vocabulary.uncefact.org/identificationType

***

### identifier?

> `optional` **identifier**: `string`

A proprietary identifier.

#### See

https://vocabulary.uncefact.org/identifier
