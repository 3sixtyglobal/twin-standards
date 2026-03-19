# Interface: IUneceCooperatingOrganization

An organized structure set up for a particular purpose, such as a business, government body, department, charity, or
financial institution that is working together with another organization, business, or person.

## See

https://vocabulary.uncefact.org/CooperatingOrganization

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"CooperatingOrganization"`

JSON-LD Type.

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, for this cooperating organization.

#### See

https://vocabulary.uncefact.org/name

***

### roleCode? {#rolecode}

> `optional` **roleCode?**: `string`

The code specifying the role for this cooperating organization.

#### See

https://vocabulary.uncefact.org/roleCode

***

### usedInformationSource? {#usedinformationsource}

> `optional` **usedInformationSource?**: [`IUneceInformationSource`](IUneceInformationSource.md)[]

A specified cooperative information source used for or from this cooperating organization.

#### See

https://vocabulary.uncefact.org/usedInformationSource
