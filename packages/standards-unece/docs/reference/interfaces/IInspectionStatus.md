# Interface: IInspectionStatus

The information relevant to a condition related to an inspection.

## See

https://vocabulary.uncefact.org/InspectionStatus

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

> **type**: `"InspectionStatus"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this inspection status.

#### See

https://vocabulary.uncefact.org/description

***

### inspectionStatusConditionCode?

> `optional` **inspectionStatusConditionCode**: `string`

The code specifying this inspection status condition.

#### See

https://vocabulary.uncefact.org/inspectionStatusConditionCode
