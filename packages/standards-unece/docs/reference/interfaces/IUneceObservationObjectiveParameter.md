# Interface: IUneceObservationObjectiveParameter

A feature that is fixed for the case in question but may be different in other cases for this observation objective.

## See

https://vocabulary.uncefact.org/ObservationObjectiveParameter

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ObservationObjectiveParameter"`

JSON-LD Type.

***

### description? {#description}

> `optional` **description?**: `string`

The textual description of this observation objective parameter.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier for this observation objective parameter.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, for this observation objective parameter.

#### See

https://vocabulary.uncefact.org/name

***

### parameterType? {#parametertype}

> `optional` **parameterType?**: `string`

A type, expressed as text, for this observation objective parameter.

#### See

https://vocabulary.uncefact.org/parameterType

***

### statusCode? {#statuscode}

> `optional` **statusCode?**: `string`

The code specifying the status of this observation objective parameter.

#### See

https://vocabulary.uncefact.org/statusCode

***

### statusValueMeasure? {#statusvaluemeasure}

> `optional` **statusValueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the status value for this observation objective parameter.

#### See

https://vocabulary.uncefact.org/statusValueMeasure

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of observation objective parameter, such as retailer, country, toxic standard or
examination type.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value? {#value}

> `optional` **value?**: `string`

The value, expressed as text, of this observation objective parameter.

#### See

https://vocabulary.uncefact.org/value

***

### valueAllowedIndicator? {#valueallowedindicator}

> `optional` **valueAllowedIndicator?**: `boolean`

The indication of whether or not this value is allowed for this parameter observation objective.

#### See

https://vocabulary.uncefact.org/valueAllowedIndicator

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the value for this observation objective parameter.

#### See

https://vocabulary.uncefact.org/valueMeasure
