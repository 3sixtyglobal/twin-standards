# Interface: IUneceAuthoritativeSignatoryPerson

A person who is authorized to sign a document, such as a customs officer or other government official.

## See

https://vocabulary.uncefact.org/AuthoritativeSignatoryPerson

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

> **type**: `"AuthoritativeSignatoryPerson"`

JSON-LD Type.

***

### attainedAcademicQualification?

> `optional` **attainedAcademicQualification**: [`IUneceAcademicQualification`](IUneceAcademicQualification.md)

An academic qualification attained by this authoritative signatory person.

#### See

https://vocabulary.uncefact.org/attainedAcademicQualification

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this authoritative signatory person.

#### See

https://vocabulary.uncefact.org/name
