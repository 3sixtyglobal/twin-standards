# Interface: IUneceMembership

The state of belonging to a group, such as a club or trade association.

## See

https://vocabulary.uncefact.org/Membership

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

> **type**: `"Membership"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this specified membership.

#### See

https://vocabulary.uncefact.org/description

***

### endDateTime?

> `optional` **endDateTime**: `string`

The date, time, date time, or other date time value of the end of this specified membership.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this specified membership.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this specified membership.

#### See

https://vocabulary.uncefact.org/name

***

### startDateTime?

> `optional` **startDateTime**: `string`

The date, time, date time, or other date time value of the start of this specified membership.

#### See

https://vocabulary.uncefact.org/startDateTime
