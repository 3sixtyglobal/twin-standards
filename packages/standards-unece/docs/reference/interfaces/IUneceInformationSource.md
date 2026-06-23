# Interface: IUneceInformationSource

A person, organization, thing or place from which information comes, arises or is obtained.

## See

https://vocabulary.uncefact.org/InformationSource

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"InformationSource"`

JSON-LD Type.

***

### categoryCode? {#categorycode}

> `optional` **categoryCode?**: `string`

The code specifying the category of this specified information source.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### content? {#content}

> `optional` **content?**: `string`

Content, expressed as text, of this specified information source.

#### See

https://vocabulary.uncefact.org/content

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this specified information source.

#### See

https://vocabulary.uncefact.org/description

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, of this specified information source.

#### See

https://vocabulary.uncefact.org/name

***

### securityInformation? {#securityinformation}

> `optional` **securityInformation?**: `string`

Security information, expressed as text, of this specified information source.

#### See

https://vocabulary.uncefact.org/securityInformation

***

### websiteURIId? {#websiteuriid}

> `optional` **websiteURIId?**: `string` \| `IJsonLdValueObject`

The identifier of the website URI (Uniform Resource Identifier) of this specified information source.

#### See

https://vocabulary.uncefact.org/websiteURIId
