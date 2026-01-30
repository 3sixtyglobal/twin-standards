# Interface: IUneceInformationSource

A person, organization, thing or place from which information comes, arises or is obtained.

## See

https://vocabulary.uncefact.org/InformationSource

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

> **type**: `"InformationSource"`

JSON-LD Type.

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category of this specified information source.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### content?

> `optional` **content**: `string`

Content, expressed as text, of this specified information source.

#### See

https://vocabulary.uncefact.org/content

***

### description?

> `optional` **description**: `string`

A textual description of this specified information source.

#### See

https://vocabulary.uncefact.org/description

***

### name?

> `optional` **name**: `string`

A name, expressed as text, of this specified information source.

#### See

https://vocabulary.uncefact.org/name

***

### securityInformation?

> `optional` **securityInformation**: `string`

Security information, expressed as text, of this specified information source.

#### See

https://vocabulary.uncefact.org/securityInformation

***

### websiteURIId?

> `optional` **websiteURIId**: `string`

The identifier of the website URI (Uniform Resource Identifier) of this specified information source.

#### See

https://vocabulary.uncefact.org/websiteURIId
