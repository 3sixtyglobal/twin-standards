# Interface: IUneceTestSpecificationReport

A report that specifies a certification test and its attributes.

## See

https://vocabulary.uncefact.org/TestSpecificationReport

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

> **type**: `"TestSpecificationReport"`

JSON-LD Type.

***

### result?

> `optional` **result**: `string`

A result, expressed as text, reported in this certification test specification report.

#### See

https://vocabulary.uncefact.org/result

***

### standardName?

> `optional` **standardName**: `string`

The name, expressed as text, of the standard applicable for this certification test specification report.

#### See

https://vocabulary.uncefact.org/standardName

***

### testName?

> `optional` **testName**: `string`

A test name, expressed as text, for this certification test specification report.

#### See

https://vocabulary.uncefact.org/testName
