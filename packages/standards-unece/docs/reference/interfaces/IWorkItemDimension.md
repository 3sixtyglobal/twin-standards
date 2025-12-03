# Interface: IWorkItemDimension

A measure of spatial extent associated with this work item, such as length, breadth, or height.

## See

https://vocabulary.uncefact.org/WorkItemDimension

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

> **type**: `"WorkItemDimension"`

JSON-LD Type.

***

### componentDimension?

> `optional` **componentDimension**: `IWorkItemDimension`[]

A work item component dimension for this work item dimension.

#### See

https://vocabulary.uncefact.org/componentDimension

***

### componentWorkItemDimension?

> `optional` **componentWorkItemDimension**: `IWorkItemDimension`[]

A work item component dimension for this work item dimension.

#### See

https://vocabulary.uncefact.org/componentWorkItemDimension

***

### contractualLanguageCode?

> `optional` **contractualLanguageCode**: `string`

The code specifying the contractual language for this work item dimension.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### description?

> `optional` **description**: `string`

The textual description of this work item dimension.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this work item dimension.

#### See

https://vocabulary.uncefact.org/identifier

***

### valueMeasure?

> `optional` **valueMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measured value for this work item dimension.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### workItemDimensionTypeCode?

> `optional` **workItemDimensionTypeCode**: `string`

The code specifying the type of this work item dimension.

#### See

https://vocabulary.uncefact.org/workItemDimensionTypeCode
