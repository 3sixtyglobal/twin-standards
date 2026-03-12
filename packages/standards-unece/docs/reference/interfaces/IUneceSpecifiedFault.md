# Interface: IUneceSpecifiedFault

An unattractive or unsatisfactory characteristic.

## See

https://vocabulary.uncefact.org/SpecifiedFault

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SpecifiedFault"`

JSON-LD Type.

***

### actualSpecifiedPercent? {#actualspecifiedpercent}

> `optional` **actualSpecifiedPercent**: `string`

The actual percentage of this specified fault.

#### See

https://vocabulary.uncefact.org/actualSpecifiedPercent

***

### actualSpecifiedQuantity? {#actualspecifiedquantity}

> `optional` **actualSpecifiedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The actual total quantity of this specified fault.

#### See

https://vocabulary.uncefact.org/actualSpecifiedQuantity

***

### categoryCode? {#categorycode}

> `optional` **categoryCode**: `string`

The code specifying the category for this fault.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### classificationCode? {#classificationcode}

> `optional` **classificationCode**: `string`

The code specifying the classification for this fault.

#### See

https://vocabulary.uncefact.org/classificationCode

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this specified fault.

#### See

https://vocabulary.uncefact.org/description

***

### estimatedSpecifiedPercent? {#estimatedspecifiedpercent}

> `optional` **estimatedSpecifiedPercent**: `string`

The estimated percentage of this specified fault.

#### See

https://vocabulary.uncefact.org/estimatedSpecifiedPercent

***

### faultType? {#faulttype}

> `optional` **faultType**: `string`

A type, expressed as text, of this specified fault.

#### See

https://vocabulary.uncefact.org/faultType

***

### operationalApplicableTolerance? {#operationalapplicabletolerance}

> `optional` **operationalApplicableTolerance**: [`IUneceTolerance`](IUneceTolerance.md)[]

An applicable operational tolerance of this specified fault.

#### See

https://vocabulary.uncefact.org/operationalApplicableTolerance

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of fault.

#### See

https://vocabulary.uncefact.org/typeCode
