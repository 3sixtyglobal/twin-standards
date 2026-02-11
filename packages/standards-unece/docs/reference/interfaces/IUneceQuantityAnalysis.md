# Interface: IUneceQuantityAnalysis

The quantity analysis for this work item.

## See

https://vocabulary.uncefact.org/QuantityAnalysis

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

> **type**: `"QuantityAnalysis"`

JSON-LD Type.

***

### actualQuantity?

> `optional` **actualQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The actual quantity for this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/actualQuantity

***

### actualQuantityDimension?

> `optional` **actualQuantityDimension**: [`IUneceWorkItemDimension`](IUneceWorkItemDimension.md)[]

A work item dimension of the actual quantity in this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/actualQuantityDimension

***

### actualQuantityPercent?

> `optional` **actualQuantityPercent**: `string`

The percentage of a total quantity that the actual quantity of this work item quantity analysis represents.

#### See

https://vocabulary.uncefact.org/actualQuantityPercent

***

### alternativeClassificationCode?

> `optional` **alternativeClassificationCode**: `string`

A code specifying an alternative classification value for this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/alternativeClassificationCode

***

### breakdownQuantityAnalysis?

> `optional` **breakdownQuantityAnalysis**: `IUneceQuantityAnalysis`[]

A quantity analysis breakdown of this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/breakdownQuantityAnalysis

***

### changedStatus?

> `optional` **changedStatus**: [`IUneceRecordedStatus`](IUneceRecordedStatus.md)[]

A changed recorded status for this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/changedStatus

***

### contractualLanguageCode?

> `optional` **contractualLanguageCode**: `string`

The code specifying the contractual language for this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### description?

> `optional` **description**: `string`

The textual description of this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/description

***

### identifier

> **identifier**: `string`

The unique identifier for this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/identifier

***

### primaryClassificationCode?

> `optional` **primaryClassificationCode**: `string`

A code specifying a primary classification value for this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/primaryClassificationCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of work item quantity analysis.

#### See

https://vocabulary.uncefact.org/typeCode
