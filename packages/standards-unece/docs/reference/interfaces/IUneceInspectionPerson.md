# Interface: IUneceInspectionPerson

An individual human being who conducts an inspection.

## See

https://vocabulary.uncefact.org/InspectionPerson

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

> **type**: `"InspectionPerson"`

JSON-LD Type.

***

### attainedSpecifiedQualification?

> `optional` **attainedSpecifiedQualification**: [`IUneceSpecifiedQualification`](IUneceSpecifiedQualification.md)

The specified qualification attained by this inspection person.

#### See

https://vocabulary.uncefact.org/attainedSpecifiedQualification

***

### inspectionPersonName?

> `optional` **inspectionPersonName**: `string`

The name or set of names, expressed as text, by which this inspection person is known.

#### See

https://vocabulary.uncefact.org/inspectionPersonName
