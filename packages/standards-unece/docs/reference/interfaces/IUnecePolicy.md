# Interface: IUnecePolicy

A plan of action agreed or chosen in order to obey rules or requests made by people in authority and designed to prevent
and detect violations of applicable law, regulations, rules and ethical standards by employees, agents and others.

## See

https://vocabulary.uncefact.org/Policy

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Policy"`

JSON-LD Type.

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard?**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this compliance policy.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this compliance policy.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier of this compliance policy.

#### See

https://vocabulary.uncefact.org/identifier
