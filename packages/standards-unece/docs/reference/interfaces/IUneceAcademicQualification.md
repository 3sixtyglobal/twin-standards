# Interface: IUneceAcademicQualification

An academic achievement that is officially recognized.

## See

https://vocabulary.uncefact.org/AcademicQualification

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

> **type**: `"AcademicQualification"`

JSON-LD Type.

***

### abbreviatedName?

> `optional` **abbreviatedName**: `string`

The abbreviated name, expressed as text, of this academic qualification.

#### See

https://vocabulary.uncefact.org/abbreviatedName

***

### name?

> `optional` **name**: `string`

A name, expressed as text, of this academic qualification.

#### See

https://vocabulary.uncefact.org/name
