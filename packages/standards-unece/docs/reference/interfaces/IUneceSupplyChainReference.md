# Interface: IUneceSupplyChainReference

The identification of related information in a supply chain context.

## See

https://vocabulary.uncefact.org/SupplyChainReference

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

> **type**: `"SupplyChainReference"`

JSON-LD Type.

***

### abbreviation?

> `optional` **abbreviation**: `string`

An abbreviation, expressed as text, for this supply chain reference.

#### See

https://vocabulary.uncefact.org/abbreviation

***

### comment?

> `optional` **comment**: `string`

A comment, expressed as text, for this supply chain reference.

#### See

https://vocabulary.uncefact.org/comment

***

### description?

> `optional` **description**: `string`

A textual description of this supply chain reference.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this supply chain reference.

#### See

https://vocabulary.uncefact.org/identifier

***

### propertyReferenceCode?

> `optional` **propertyReferenceCode**: `string`

A code specifying a property reference for this supply chain reference.

#### See

https://vocabulary.uncefact.org/propertyReferenceCode

***

### status?

> `optional` **status**: `string`

A status, expressed as text, for this supply chain reference.

#### See

https://vocabulary.uncefact.org/status

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of supply chain reference.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value?

> `optional` **value**: `string`

A value, expressed as text, for this supply chain reference.

#### See

https://vocabulary.uncefact.org/value

***

### valueCode?

> `optional` **valueCode**: `string`

A value, expressed as a code, for this supply chain reference.

#### See

https://vocabulary.uncefact.org/valueCode
