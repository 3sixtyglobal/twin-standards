# Interface: IUneceControlSettingParameter

A set of measurable factors that specifies the conditions of its operation within a specific context.

## See

https://vocabulary.uncefact.org/ControlSettingParameter

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ControlSettingParameter"`

JSON-LD Type.

***

### changeableIndicator? {#changeableindicator}

> `optional` **changeableIndicator**: `boolean`

The indication whether or not this control setting parameter is changeable.

#### See

https://vocabulary.uncefact.org/changeableIndicator

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this control setting parameter.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this control setting parameter.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, of this control setting parameter.

#### See

https://vocabulary.uncefact.org/name

***

### requestedRange? {#requestedrange}

> `optional` **requestedRange**: [`IUneceRange`](IUneceRange.md)[]

A requested range specified for this control setting parameter.

#### See

https://vocabulary.uncefact.org/requestedRange

***

### statusCode? {#statuscode}

> `optional` **statusCode**: `string`

The code specifying the status of this control setting parameter.

#### See

https://vocabulary.uncefact.org/statusCode

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying a type of parameter for this control setting parameter.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value? {#value}

> `optional` **value**: `string`

The value, expressed as text, of this control setting parameter.

#### See

https://vocabulary.uncefact.org/value

***

### valueAllowedIndicator? {#valueallowedindicator}

> `optional` **valueAllowedIndicator**: `boolean`

The indication of whether or not this control setting parameter value is allowed.

#### See

https://vocabulary.uncefact.org/valueAllowedIndicator

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure value for this control setting parameter.

#### See

https://vocabulary.uncefact.org/valueMeasure
