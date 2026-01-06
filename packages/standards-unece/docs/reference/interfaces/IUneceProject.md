# Interface: IUneceProject

An endeavour carefully planned to achieve a procurement of goods, works and service.

## See

https://vocabulary.uncefact.org/Project

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

> **type**: `"Project"`

JSON-LD Type.

***

### constraintIndicator?

> `optional` **constraintIndicator**: `boolean`

The indication of whether or not the project is constrained by an authority such as the World Trade Organization (WTO)
for this procuring project.

#### See

https://vocabulary.uncefact.org/constraintIndicator

***

### description?

> `optional` **description**: `string`

The textual description of this procuring project.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier of this procuring project.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this procuring project.

#### See

https://vocabulary.uncefact.org/name

***

### netBudgetAmount?

> `optional` **netBudgetAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

The monetary value of the net budget for this procuring project.

#### See

https://vocabulary.uncefact.org/netBudgetAmount

***

### specifiedInspectionEvent?

> `optional` **specifiedInspectionEvent**: [`IUneceInspectionEvent`](IUneceInspectionEvent.md)[]

The inspection event specified for this procuring project.

#### See

https://vocabulary.uncefact.org/specifiedInspectionEvent

***

### subWorksTypeCode?

> `optional` **subWorksTypeCode**: `string`

A code specifying the type of sub works, such as land surveying or information technology consulting, for this procuring
project.

#### See

https://vocabulary.uncefact.org/subWorksTypeCode

***

### totalBudgetAmount?

> `optional` **totalBudgetAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

The monetary value of the total budget which includes net amount, taxes, and material and instalment costs for this
procuring project.

#### See

https://vocabulary.uncefact.org/totalBudgetAmount

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of procuring project, such as goods, works and service.

#### See

https://vocabulary.uncefact.org/typeCode

***

### worksTypeCode?

> `optional` **worksTypeCode**: `string`

A code specifying the type of work, such as surveying or consulting, for this procuring project.

#### See

https://vocabulary.uncefact.org/worksTypeCode
