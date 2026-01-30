# Interface: IUneceAllergy

A guest condition of the abnormal reaction of the body to a previously encountered substance introduced by inhalation,
ingestion, injection, or skin contact.

## See

https://vocabulary.uncefact.org/Allergy

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

> **type**: `"Allergy"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this guest allergy.

#### See

https://vocabulary.uncefact.org/description

***

### name?

> `optional` **name**: `string`

A name, expressed as text, of this guest allergy.

#### See

https://vocabulary.uncefact.org/name

***

### restriction?

> `optional` **restriction**: `string`

A restriction, expressed as text, related to this guest allergy.

#### See

https://vocabulary.uncefact.org/restriction

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of guest allergy.

#### See

https://vocabulary.uncefact.org/typeCode
