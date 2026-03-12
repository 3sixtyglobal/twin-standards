# Interface: IUneceEventElement

Information about an event in which a Track and Trace (TT) element of one of more physical or digital objects is
identified by a specific object class identifier (such as an electronic product class), either a specific quantity or an
unspecified quantity.

## See

https://vocabulary.uncefact.org/EventElement

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"EventElement"`

JSON-LD Type.

***

### objectClassId {#objectclassid}

> **objectClassId**: `string` \| `IJsonLdValueObject`

The identifier of the object class for this TT event element.

#### See

https://vocabulary.uncefact.org/objectClassId

***

### unitQuantity? {#unitquantity}

> `optional` **unitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units of this TT event element.

#### See

https://vocabulary.uncefact.org/unitQuantity
