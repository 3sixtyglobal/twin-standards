# Interface: IUneceAnimalHoldingEvent

The keeping of an animal in a particular location.

## See

https://vocabulary.uncefact.org/AnimalHoldingEvent

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AnimalHoldingEvent"`

JSON-LD Type.

***

### locationId? {#locationid}

> `optional` **locationId**: `string` \| `IJsonLdValueObject`

The identifier of the location for this animal holding event.

#### See

https://vocabulary.uncefact.org/locationId

***

### occurrenceDateTime {#occurrencedatetime}

> **occurrenceDateTime**: `string`

The date, time, date time, or other date time value of the occurrence of this animal holding event.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### relatedTTLocation? {#relatedttlocation}

> `optional` **relatedTTLocation**: [`IUneceTTLocation`](IUneceTTLocation.md)[]

A Track and Trace (TT) location related to this animal holding event.

#### See

https://vocabulary.uncefact.org/relatedTTLocation

***

### relatedTechnicalCharacteristic? {#relatedtechnicalcharacteristic}

> `optional` **relatedTechnicalCharacteristic**: [`IUneceTechnicalCharacteristic`](IUneceTechnicalCharacteristic.md)[]

A technical characteristic related to this animal holding event.

#### See

https://vocabulary.uncefact.org/relatedTechnicalCharacteristic

***

### typeCode {#typecode}

> **typeCode**: `string`

The code specifying the type of animal holding event.

#### See

https://vocabulary.uncefact.org/typeCode
