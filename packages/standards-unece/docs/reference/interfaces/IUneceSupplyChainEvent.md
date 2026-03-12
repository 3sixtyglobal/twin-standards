# Interface: IUneceSupplyChainEvent

A significant occurrence or happening in a supply chain.

## See

https://vocabulary.uncefact.org/SupplyChainEvent

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SupplyChainEvent"`

JSON-LD Type.

***

### actualStatus? {#actualstatus}

> `optional` **actualStatus**: [`IUneceInspectionStatus`](IUneceInspectionStatus.md)

The actual inspection status of this supply chain event.

#### See

https://vocabulary.uncefact.org/actualStatus

***

### associatedReference? {#associatedreference}

> `optional` **associatedReference**: [`IUneceSupplyChainReference`](IUneceSupplyChainReference.md)[]

A reference associated with this supply chain event.

#### See

https://vocabulary.uncefact.org/associatedReference

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this supply chain event.

#### See

https://vocabulary.uncefact.org/description

***

### descriptionBinaryObject? {#descriptionbinaryobject}

> `optional` **descriptionBinaryObject**: `string`

Binary object data, such as a photograph, describing this supply chain event.

#### See

https://vocabulary.uncefact.org/descriptionBinaryObject

***

### discretePeriod? {#discreteperiod}

> `optional` **discretePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A discrete period specified for this supply chain event.

#### See

https://vocabulary.uncefact.org/discretePeriod

***

### dueDateTime? {#duedatetime}

> `optional` **dueDateTime**: `string`

The due date, time, date time, or other date time value of this supply chain event.

#### See

https://vocabulary.uncefact.org/dueDateTime

***

### earliestOccurrenceDateTime? {#earliestoccurrencedatetime}

> `optional` **earliestOccurrenceDateTime**: `string`

The date, time, date time, or other date time value of the earliest occurrence of this supply chain event.

#### See

https://vocabulary.uncefact.org/earliestOccurrenceDateTime

***

### frequencyCode? {#frequencycode}

> `optional` **frequencyCode**: `string`

The code specifying a frequency for this supply chain event.

#### See

https://vocabulary.uncefact.org/frequencyCode

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier for this supply chain event.

#### See

https://vocabulary.uncefact.org/identifier

***

### latestOccurrenceDateTime? {#latestoccurrencedatetime}

> `optional` **latestOccurrenceDateTime**: `string`

The date, time, date time, or other date time value of the latest occurrence of this supply chain event.

#### See

https://vocabulary.uncefact.org/latestOccurrenceDateTime

***

### occurrenceDateTime? {#occurrencedatetime}

> `optional` **occurrenceDateTime**: `string`

A date, time, date time, or other date time value of an occurrence of this supply chain event.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### occurrenceLocation? {#occurrencelocation}

> `optional` **occurrenceLocation**: [`IUneceLocation`](IUneceLocation.md)

The referenced location for the occurrence of this supply chain event.

#### See

https://vocabulary.uncefact.org/occurrenceLocation

***

### occurrenceLogisticsLocation? {#occurrencelogisticslocation}

> `optional` **occurrenceLogisticsLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location where this supply chain event occurs.

#### See

https://vocabulary.uncefact.org/occurrenceLogisticsLocation

***

### occurrencePeriod? {#occurrenceperiod}

> `optional` **occurrencePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A specified period of time during which this supply chain event occurs.

#### See

https://vocabulary.uncefact.org/occurrencePeriod

***

### relatedSustainabilityCharacteristic? {#relatedsustainabilitycharacteristic}

> `optional` **relatedSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic related to this supply chain event.

#### See

https://vocabulary.uncefact.org/relatedSustainabilityCharacteristic

***

### relatedTechnicalCharacteristic? {#relatedtechnicalcharacteristic}

> `optional` **relatedTechnicalCharacteristic**: [`IUneceTechnicalCharacteristic`](IUneceTechnicalCharacteristic.md)[]

A technical characteristic related to this supply chain event.

#### See

https://vocabulary.uncefact.org/relatedTechnicalCharacteristic

***

### timeOccurrenceDateTime? {#timeoccurrencedatetime}

> `optional` **timeOccurrenceDateTime**: `string`

A time value of an occurrence of this supply chain event.

#### See

https://vocabulary.uncefact.org/timeOccurrenceDateTime

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

A code specifying the type of supply chain event.

#### See

https://vocabulary.uncefact.org/typeCode

***

### unitQuantity? {#unitquantity}

> `optional` **unitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A number of units for this supply chain event.

#### See

https://vocabulary.uncefact.org/unitQuantity
