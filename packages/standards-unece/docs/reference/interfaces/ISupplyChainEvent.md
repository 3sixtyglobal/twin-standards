# Interface: ISupplyChainEvent

A significant occurrence or happening in a supply chain.

## See

https://vocabulary.uncefact.org/SupplyChainEvent

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"SupplyChainEvent"`

JSON-LD Type.

***

### actualStatus?

> `optional` **actualStatus**: [`IInspectionStatus`](IInspectionStatus.md)

The actual inspection status of this supply chain event.

#### See

https://vocabulary.uncefact.org/actualStatus

***

### associatedReference?

> `optional` **associatedReference**: [`ISupplyChainReference`](ISupplyChainReference.md)[]

A reference associated with this supply chain event.

#### See

https://vocabulary.uncefact.org/associatedReference

***

### description?

> `optional` **description**: `string`

A textual description of this supply chain event.

#### See

https://vocabulary.uncefact.org/description

***

### descriptionBinaryObject?

> `optional` **descriptionBinaryObject**: `string`

Binary object data, such as a photograph, describing this supply chain event.

#### See

https://vocabulary.uncefact.org/descriptionBinaryObject

***

### discretePeriod?

> `optional` **discretePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

A discrete period specified for this supply chain event.

#### See

https://vocabulary.uncefact.org/discretePeriod

***

### dueDateTime?

> `optional` **dueDateTime**: `string`

The due date, time, date time, or other date time value of this supply chain event.

#### See

https://vocabulary.uncefact.org/dueDateTime

***

### earliestOccurrenceDateTime?

> `optional` **earliestOccurrenceDateTime**: `string`

The date, time, date time, or other date time value of the earliest occurrence of this supply chain event.

#### See

https://vocabulary.uncefact.org/earliestOccurrenceDateTime

***

### frequencyCode?

> `optional` **frequencyCode**: `string`

The code specifying a frequency for this supply chain event.

#### See

https://vocabulary.uncefact.org/frequencyCode

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this supply chain event.

#### See

https://vocabulary.uncefact.org/identifier

***

### latestOccurrenceDateTime?

> `optional` **latestOccurrenceDateTime**: `string`

The date, time, date time, or other date time value of the latest occurrence of this supply chain event.

#### See

https://vocabulary.uncefact.org/latestOccurrenceDateTime

***

### occurrenceDateTime?

> `optional` **occurrenceDateTime**: `string`

A date, time, date time, or other date time value of an occurrence of this supply chain event.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### occurrenceLocation?

> `optional` **occurrenceLocation**: [`ILocation`](ILocation.md)[]

The referenced location for the occurrence of this supply chain event.

#### See

https://vocabulary.uncefact.org/occurrenceLocation

***

### occurrenceLogisticsLocation?

> `optional` **occurrenceLogisticsLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A logistics location where this supply chain event occurs.

#### See

https://vocabulary.uncefact.org/occurrenceLogisticsLocation

***

### occurrencePeriod?

> `optional` **occurrencePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

A specified period of time during which this supply chain event occurs.

#### See

https://vocabulary.uncefact.org/occurrencePeriod

***

### relatedSustainabilityCharacteristic?

> `optional` **relatedSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

A sustainability characteristic related to this supply chain event.

#### See

https://vocabulary.uncefact.org/relatedSustainabilityCharacteristic

***

### relatedTechnicalCharacteristic?

> `optional` **relatedTechnicalCharacteristic**: [`ITechnicalCharacteristic`](ITechnicalCharacteristic.md)[]

A technical characteristic related to this supply chain event.

#### See

https://vocabulary.uncefact.org/relatedTechnicalCharacteristic

***

### timeOccurrenceDateTime?

> `optional` **timeOccurrenceDateTime**: `string`

A time value of an occurrence of this supply chain event.

#### See

https://vocabulary.uncefact.org/timeOccurrenceDateTime

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying the type of supply chain event.

#### See

https://vocabulary.uncefact.org/typeCode

***

### unitQuantity?

> `optional` **unitQuantity**: [`IQuantityType`](IQuantityType.md)[]

A number of units for this supply chain event.

#### See

https://vocabulary.uncefact.org/unitQuantity
