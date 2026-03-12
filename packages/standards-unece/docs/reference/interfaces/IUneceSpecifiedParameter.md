# Interface: IUneceSpecifiedParameter

A specified feature that is fixed for the case in question but may be different in other cases.

## See

https://vocabulary.uncefact.org/SpecifiedParameter

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SpecifiedParameter"`

JSON-LD Type.

***

### description? {#description}

> `optional` **description**: `string`

A textual description for this specified parameter.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this specified parameter.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, for this specified parameter.

#### See

https://vocabulary.uncefact.org/name

***

### parameterType? {#parametertype}

> `optional` **parameterType**: `string`

A type, expressed as text, for this specified parameter.

#### See

https://vocabulary.uncefact.org/parameterType

***

### statusCode? {#statuscode}

> `optional` **statusCode**: `string`

The code specifying the status of this specified parameter.

#### See

https://vocabulary.uncefact.org/statusCode

***

### statusValueMeasure? {#statusvaluemeasure}

> `optional` **statusValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a value of the status for this specified parameter.

#### See

https://vocabulary.uncefact.org/statusValueMeasure

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of parameter.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value? {#value}

> `optional` **value**: `string`

The value, expressed as text, for this specified parameter.

#### See

https://vocabulary.uncefact.org/value

***

### valueAllowedIndicator? {#valueallowedindicator}

> `optional` **valueAllowedIndicator**: `boolean`

The indication of whether or not the value for this specified parameter is allowed.

#### See

https://vocabulary.uncefact.org/valueAllowedIndicator

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a value for this specified parameter.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueTolerance? {#valuetolerance}

> `optional` **valueTolerance**: [`IUneceTolerance`](IUneceTolerance.md)[]

A tolerance specified for the value of this parameter.

#### See

https://vocabulary.uncefact.org/valueTolerance
