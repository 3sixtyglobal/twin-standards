# Interface: IXHEParameter

A feature that is fixed for an XHE (Exchange Header Envelope) but may be different in other cases.

## See

https://vocabulary.uncefact.org/XHEParameter

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

> **type**: `"XHEParameter"`

JSON-LD Type.

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of XHE parameter.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value?

> `optional` **value**: `string`

The value, expressed as text, of this XHE parameter.

#### See

https://vocabulary.uncefact.org/value
