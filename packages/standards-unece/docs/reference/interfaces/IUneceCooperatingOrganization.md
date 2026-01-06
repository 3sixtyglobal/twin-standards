# Interface: IUneceCooperatingOrganization

An organized structure set up for a particular purpose, such as a business, government body, department, charity, or
financial institution that is working together with another organization, business, or person.

## See

https://vocabulary.uncefact.org/CooperatingOrganization

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

> **type**: `"CooperatingOrganization"`

JSON-LD Type.

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this cooperating organization.

#### See

https://vocabulary.uncefact.org/name

***

### roleCode?

> `optional` **roleCode**: `string`

The code specifying the role for this cooperating organization.

#### See

https://vocabulary.uncefact.org/roleCode

***

### usedInformationSource?

> `optional` **usedInformationSource**: [`IUneceInformationSource`](IUneceInformationSource.md)[]

A specified cooperative information source used for or from this cooperating organization.

#### See

https://vocabulary.uncefact.org/usedInformationSource
