# Interface: IUneceIssue

A targeted topic for debate or resolution.

## See

https://vocabulary.uncefact.org/Issue

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Issue"`

JSON-LD Type.

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this target issue.

#### See

https://vocabulary.uncefact.org/identifier

***

### maximumSpecifiedCharacteristic? {#maximumspecifiedcharacteristic}

> `optional` **maximumSpecifiedCharacteristic**: [`IUneceMetricCharacteristic`](IUneceMetricCharacteristic.md)

The maximum metric characteristic specified for this target issue.

#### See

https://vocabulary.uncefact.org/maximumSpecifiedCharacteristic

***

### minimumSpecifiedCharacteristic? {#minimumspecifiedcharacteristic}

> `optional` **minimumSpecifiedCharacteristic**: [`IUneceMetricCharacteristic`](IUneceMetricCharacteristic.md)

The minimum metric characteristic specified for this target issue.

#### See

https://vocabulary.uncefact.org/minimumSpecifiedCharacteristic

***

### specifiedMetricCharacteristic? {#specifiedmetriccharacteristic}

> `optional` **specifiedMetricCharacteristic**: [`IUneceMetricCharacteristic`](IUneceMetricCharacteristic.md)

The metric characteristic specified for this target issue.

#### See

https://vocabulary.uncefact.org/specifiedMetricCharacteristic

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of target issue, such as a value or a range.

#### See

https://vocabulary.uncefact.org/typeCode
