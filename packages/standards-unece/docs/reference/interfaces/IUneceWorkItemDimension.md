# Interface: IUneceWorkItemDimension

A measure of spatial extent associated with this work item, such as length, breadth, or height.

## See

https://vocabulary.uncefact.org/WorkItemDimension

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"WorkItemDimension"`

JSON-LD Type.

***

### componentDimension? {#componentdimension}

> `optional` **componentDimension?**: `IUneceWorkItemDimension`[]

A work item component dimension for this work item dimension.

#### See

https://vocabulary.uncefact.org/componentDimension

***

### componentWorkItemDimension? {#componentworkitemdimension}

> `optional` **componentWorkItemDimension?**: `IUneceWorkItemDimension`[]

A work item component dimension for this work item dimension.

#### See

https://vocabulary.uncefact.org/componentWorkItemDimension

***

### contractualLanguageCode? {#contractuallanguagecode}

> `optional` **contractualLanguageCode?**: `string`

The code specifying the contractual language for this work item dimension.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### description? {#description}

> `optional` **description?**: `string`

The textual description of this work item dimension.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this work item dimension.

#### See

https://vocabulary.uncefact.org/identifier

***

### valueMeasure {#valuemeasure}

> **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measured value for this work item dimension.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### workItemDimensionTypeCode {#workitemdimensiontypecode}

> **workItemDimensionTypeCode**: `string`

The code specifying the type of this work item dimension.

#### See

https://vocabulary.uncefact.org/workItemDimensionTypeCode
