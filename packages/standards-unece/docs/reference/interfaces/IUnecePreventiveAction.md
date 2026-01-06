# Interface: IUnecePreventiveAction

An adjustment, such as a change to an organization's processes or products, taken to prevent non-conformities or other
undesirable situations, possibly as a result of a risk analysis.

## See

https://vocabulary.uncefact.org/PreventiveAction

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

> **type**: `"PreventiveAction"`

JSON-LD Type.

***

### actionType?

> `optional` **actionType**: `string`

A type, expressed as text, for this preventive action.

#### See

https://vocabulary.uncefact.org/actionType

***

### description?

> `optional` **description**: `string`

A textual description of this preventive action.

#### See

https://vocabulary.uncefact.org/description

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of preventive action.

#### See

https://vocabulary.uncefact.org/typeCode
