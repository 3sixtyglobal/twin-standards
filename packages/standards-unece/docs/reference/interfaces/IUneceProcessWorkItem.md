# Interface: IUneceProcessWorkItem

A distinct operation or task that is part of a process.

## See

https://vocabulary.uncefact.org/ProcessWorkItem

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"ProcessWorkItem"`

JSON-LD Type.

***

### alternativeClassificationCode?

> `optional` **alternativeClassificationCode**: `string`

The code specifying an alternative classification for this process work item.

#### See

https://vocabulary.uncefact.org/alternativeClassificationCode

***

### description?

> `optional` **description**: `string`

A textual description for this process work item.

#### See

https://vocabulary.uncefact.org/description

***

### identifier

> **identifier**: `string`

The identifier of this process work item.

#### See

https://vocabulary.uncefact.org/identifier

***

### primaryClassificationCode?

> `optional` **primaryClassificationCode**: `string`

The code specifying the primary classification for this process work item.

#### See

https://vocabulary.uncefact.org/primaryClassificationCode

***

### totalQuantity?

> `optional` **totalQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total quantity for this process work item.

#### See

https://vocabulary.uncefact.org/totalQuantity

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of process work item.

#### See

https://vocabulary.uncefact.org/typeCode
