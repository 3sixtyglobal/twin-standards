# Interface: IXHEContext

A set of circumstances that form the setting for an XHE (Exchange Header Envelope) data exchange.

## See

https://vocabulary.uncefact.org/XHEContext

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

> **type**: `"XHEContext"`

JSON-LD Type.

***

### scopeReference?

> `optional` **scopeReference**: [`IXHEReference`](IXHEReference.md)[]

A reference to the scope of this XHE context.

#### See

https://vocabulary.uncefact.org/scopeReference

***

### specifiedParameter?

> `optional` **specifiedParameter**: [`IXHEParameter`](IXHEParameter.md)[]

A parameter specified for this XHE context.

#### See

https://vocabulary.uncefact.org/specifiedParameter
