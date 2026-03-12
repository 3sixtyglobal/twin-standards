# Interface: IUneceProcessWorkItem

A distinct operation or task that is part of a process.

## See

https://vocabulary.uncefact.org/ProcessWorkItem

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProcessWorkItem"`

JSON-LD Type.

***

### alternativeClassificationCode? {#alternativeclassificationcode}

> `optional` **alternativeClassificationCode**: `string`

The code specifying an alternative classification for this process work item.

#### See

https://vocabulary.uncefact.org/alternativeClassificationCode

***

### description? {#description}

> `optional` **description**: `string`

A textual description for this process work item.

#### See

https://vocabulary.uncefact.org/description

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this process work item.

#### See

https://vocabulary.uncefact.org/identifier

***

### primaryClassificationCode? {#primaryclassificationcode}

> `optional` **primaryClassificationCode**: `string`

The code specifying the primary classification for this process work item.

#### See

https://vocabulary.uncefact.org/primaryClassificationCode

***

### totalQuantity? {#totalquantity}

> `optional` **totalQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total quantity for this process work item.

#### See

https://vocabulary.uncefact.org/totalQuantity

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of process work item.

#### See

https://vocabulary.uncefact.org/typeCode
