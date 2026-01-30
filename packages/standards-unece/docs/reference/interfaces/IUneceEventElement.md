# Interface: IUneceEventElement

Information about an event in which a Track and Trace (TT) element of one of more physical or digital objects is
identified by a specific object class identifier (such as an electronic product class), either a specific quantity or an
unspecified quantity.

## See

https://vocabulary.uncefact.org/EventElement

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

> **type**: `"EventElement"`

JSON-LD Type.

***

### objectClassId?

> `optional` **objectClassId**: `string`

The identifier of the object class for this TT event element.

#### See

https://vocabulary.uncefact.org/objectClassId

***

### unitQuantity?

> `optional` **unitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of units of this TT event element.

#### See

https://vocabulary.uncefact.org/unitQuantity
