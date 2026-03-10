# Interface: IUneceIssue

A targeted topic for debate or resolution.

## See

https://vocabulary.uncefact.org/Issue

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Issue"`

JSON-LD Type.

***

### identifier

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this target issue.

#### See

https://vocabulary.uncefact.org/identifier

***

### maximumSpecifiedCharacteristic?

> `optional` **maximumSpecifiedCharacteristic**: [`IUneceMetricCharacteristic`](IUneceMetricCharacteristic.md)

The maximum metric characteristic specified for this target issue.

#### See

https://vocabulary.uncefact.org/maximumSpecifiedCharacteristic

***

### minimumSpecifiedCharacteristic?

> `optional` **minimumSpecifiedCharacteristic**: [`IUneceMetricCharacteristic`](IUneceMetricCharacteristic.md)

The minimum metric characteristic specified for this target issue.

#### See

https://vocabulary.uncefact.org/minimumSpecifiedCharacteristic

***

### specifiedMetricCharacteristic?

> `optional` **specifiedMetricCharacteristic**: [`IUneceMetricCharacteristic`](IUneceMetricCharacteristic.md)

The metric characteristic specified for this target issue.

#### See

https://vocabulary.uncefact.org/specifiedMetricCharacteristic

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of target issue, such as a value or a range.

#### See

https://vocabulary.uncefact.org/typeCode
