# Interface: IUneceQuantityAnalysis

The quantity analysis for this work item.

## See

https://vocabulary.uncefact.org/QuantityAnalysis

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"QuantityAnalysis"`

JSON-LD Type.

***

### actualQuantity? {#actualquantity}

> `optional` **actualQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The actual quantity for this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/actualQuantity

***

### actualQuantityDimension? {#actualquantitydimension}

> `optional` **actualQuantityDimension**: [`IUneceWorkItemDimension`](IUneceWorkItemDimension.md)[]

A work item dimension of the actual quantity in this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/actualQuantityDimension

***

### actualQuantityPercent? {#actualquantitypercent}

> `optional` **actualQuantityPercent**: `string`

The percentage of a total quantity that the actual quantity of this work item quantity analysis represents.

#### See

https://vocabulary.uncefact.org/actualQuantityPercent

***

### alternativeClassificationCode? {#alternativeclassificationcode}

> `optional` **alternativeClassificationCode**: `string`

A code specifying an alternative classification value for this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/alternativeClassificationCode

***

### breakdownQuantityAnalysis? {#breakdownquantityanalysis}

> `optional` **breakdownQuantityAnalysis**: `IUneceQuantityAnalysis`[]

A quantity analysis breakdown of this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/breakdownQuantityAnalysis

***

### changedStatus? {#changedstatus}

> `optional` **changedStatus**: [`IUneceRecordedStatus`](IUneceRecordedStatus.md)[]

A changed recorded status for this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/changedStatus

***

### contractualLanguageCode? {#contractuallanguagecode}

> `optional` **contractualLanguageCode**: `string`

The code specifying the contractual language for this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### description? {#description}

> `optional` **description**: `string`

The textual description of this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/description

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier for this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/identifier

***

### primaryClassificationCode? {#primaryclassificationcode}

> `optional` **primaryClassificationCode**: `string`

A code specifying a primary classification value for this work item quantity analysis.

#### See

https://vocabulary.uncefact.org/primaryClassificationCode

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of work item quantity analysis.

#### See

https://vocabulary.uncefact.org/typeCode
