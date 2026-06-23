# Interface: IUneceMDHHealthIndication

Information related to a specific transportation indication to be reported on a WHO MDH (Maritime Declaration of
Health).

## See

https://vocabulary.uncefact.org/MDHHealthIndication

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"MDHHealthIndication"`

JSON-LD Type.

***

### appliedSanitaryMeasure? {#appliedsanitarymeasure}

> `optional` **appliedSanitaryMeasure?**: [`IUneceSanitaryMeasure`](IUneceSanitaryMeasure.md)[]

A sanitary measure applied for this MDH health indication.

#### See

https://vocabulary.uncefact.org/appliedSanitaryMeasure

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this MDH health indication.

#### See

https://vocabulary.uncefact.org/description

***

### locationId? {#locationid}

> `optional` **locationId?**: `string` \| `IJsonLdValueObject`

An identifier of a location for this MDH health indication.

#### See

https://vocabulary.uncefact.org/locationId

***

### locationName? {#locationname}

> `optional` **locationName?**: `string`

A location name, expressed as text, of a location for this MDH health indication.

#### See

https://vocabulary.uncefact.org/locationName

***

### reportedDateTime? {#reporteddatetime}

> `optional` **reportedDateTime?**: `string`

A reported date, time, date time or other date time value for this MDH health indication.

#### See

https://vocabulary.uncefact.org/reportedDateTime

***

### reportedQuantity? {#reportedquantity}

> `optional` **reportedQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A reported quantity for this MDH health indication.

#### See

https://vocabulary.uncefact.org/reportedQuantity

***

### statusIndicator? {#statusindicator}

> `optional` **statusIndicator?**: `boolean`

The indication of whether or not the status of this MDH health indication is true or false.

#### See

https://vocabulary.uncefact.org/statusIndicator

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

A code specifying a type of MDH health indication.

#### See

https://vocabulary.uncefact.org/typeCode
