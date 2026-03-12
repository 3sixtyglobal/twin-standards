# Interface: IUneceOperationalParameter

A set of measurable factors that specifies the conditions within which an entity operates correctly.

## See

https://vocabulary.uncefact.org/OperationalParameter

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"OperationalParameter"`

JSON-LD Type.

***

### changeableIndicator? {#changeableindicator}

> `optional` **changeableIndicator**: `boolean`

The indication whether or not this operational parameter is changeable.

#### See

https://vocabulary.uncefact.org/changeableIndicator

***

### definedRange? {#definedrange}

> `optional` **definedRange**: [`IUneceRange`](IUneceRange.md)[]

A defined range specified for this operational parameter.

#### See

https://vocabulary.uncefact.org/definedRange

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this operational parameter.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this operational parameter.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, of this operational parameter.

#### See

https://vocabulary.uncefact.org/name

***

### statusCode? {#statuscode}

> `optional` **statusCode**: `string`

The code specifying the status of this operational parameter.

#### See

https://vocabulary.uncefact.org/statusCode

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of this operational parameter.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value? {#value}

> `optional` **value**: `string`

The value, expressed as text, of this operational parameter.

#### See

https://vocabulary.uncefact.org/value

***

### valueAllowedIndicator? {#valueallowedindicator}

> `optional` **valueAllowedIndicator**: `boolean`

The indication of whether or not this operational parameter value is allowed.

#### See

https://vocabulary.uncefact.org/valueAllowedIndicator

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure value for this operational parameter.

#### See

https://vocabulary.uncefact.org/valueMeasure
