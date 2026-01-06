# Interface: IUneceProduct

A reference to a product or service produced by human or mechanical effort or by a natural process for trading purposes.

## See

https://vocabulary.uncefact.org/Product

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

> **type**: `"Product"`

JSON-LD Type.

***

### buyerAssignedId?

> `optional` **buyerAssignedId**: `string`

The unique buyer assigned identifier for this referenced product.

#### See

https://vocabulary.uncefact.org/buyerAssignedId

***

### description?

> `optional` **description**: `string`

A textual description for this referenced product.

#### See

https://vocabulary.uncefact.org/description

***

### globalId?

> `optional` **globalId**: `string`

A unique global identifier for this referenced product.

#### See

https://vocabulary.uncefact.org/globalId

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this referenced product.

#### See

https://vocabulary.uncefact.org/identifier

***

### industryAssignedId?

> `optional` **industryAssignedId**: `string`

A unique industry assigned identifier for this referenced product.

#### See

https://vocabulary.uncefact.org/industryAssignedId

***

### manufacturerAssignedId?

> `optional` **manufacturerAssignedId**: `string`

A unique manufacturer assigned identifier for this referenced product.

#### See

https://vocabulary.uncefact.org/manufacturerAssignedId

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this referenced product.

#### See

https://vocabulary.uncefact.org/name

***

### relationshipTypeCode?

> `optional` **relationshipTypeCode**: `string`

A code specifying a type of relationship for this referenced product.

#### See

https://vocabulary.uncefact.org/relationshipTypeCode

***

### sellerAssignedId?

> `optional` **sellerAssignedId**: `string`

The unique seller assigned identifier for this referenced product.

#### See

https://vocabulary.uncefact.org/sellerAssignedId

***

### unitQuantity?

> `optional` **unitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A unit quantity of this referenced product.

#### See

https://vocabulary.uncefact.org/unitQuantity
