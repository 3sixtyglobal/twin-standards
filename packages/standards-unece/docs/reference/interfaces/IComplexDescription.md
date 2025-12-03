# Interface: IComplexDescription

An aggregation of descriptive information consisting of different but related characteristics that together constitute a
work item complex description.

## See

https://vocabulary.uncefact.org/ComplexDescription

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

> **type**: `"ComplexDescription"`

JSON-LD Type.

***

### abstract?

> `optional` **abstract**: `string`

A textual abstract of the content of the work item complex description.

#### See

https://vocabulary.uncefact.org/abstract

***

### content?

> `optional` **content**: `string`

Content, expressed as text, for this work item complex description.

#### See

https://vocabulary.uncefact.org/content

***

### contractualLanguageCode?

> `optional` **contractualLanguageCode**: `string`

The code specifying the contractual language for this work item complex description.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### requestingQuery?

> `optional` **requestingQuery**: [`ISpecificationQuery`](ISpecificationQuery.md)[]

A requesting specification query for this work item complex description.

#### See

https://vocabulary.uncefact.org/requestingQuery

***

### respondingResponse?

> `optional` **respondingResponse**: [`IResponse`](IResponse.md)[]

A responding specification response for this work item complex description.

#### See

https://vocabulary.uncefact.org/respondingResponse

***

### subsetComplexDescription?

> `optional` **subsetComplexDescription**: `IComplexDescription`[]

The complex description subset for this work item complex description.

#### See

https://vocabulary.uncefact.org/subsetComplexDescription
