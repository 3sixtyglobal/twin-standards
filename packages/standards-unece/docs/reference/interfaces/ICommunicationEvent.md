# Interface: ICommunicationEvent

A significant occurrence or happening communicated by means of sending or receiving information, such as transmitting
digital data by using the internet.

## See

https://vocabulary.uncefact.org/CommunicationEvent

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

> **type**: `"CommunicationEvent"`

JSON-LD Type.

***

### associatedGeographicalFeature?

> `optional` **associatedGeographicalFeature**: [`IGeographicalFeature`](IGeographicalFeature.md)[]

A geographical feature associated with this communication event.

#### See

https://vocabulary.uncefact.org/associatedGeographicalFeature

***

### description?

> `optional` **description**: `string`

A textual description of this communication event.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this communication event.

#### See

https://vocabulary.uncefact.org/identifier

***

### occurrenceDateTime?

> `optional` **occurrenceDateTime**: `string`

The date, time, date time, or other date time value of an occurrence of this communication event.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### occurrenceLogisticsLocation?

> `optional` **occurrenceLogisticsLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

The logistics location where this communication event will occur or has occurred.

#### See

https://vocabulary.uncefact.org/occurrenceLogisticsLocation

***

### operationalResponsibleParty?

> `optional` **operationalResponsibleParty**: [`ITradeParty`](ITradeParty.md)[]

The operational responsible party for this communication event.

#### See

https://vocabulary.uncefact.org/operationalResponsibleParty

***

### reasonCode?

> `optional` **reasonCode**: `string`

The code specifying a reason for this communication event.

#### See

https://vocabulary.uncefact.org/reasonCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of communication event.

#### See

https://vocabulary.uncefact.org/typeCode

***

### unitQuantity?

> `optional` **unitQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of units for this communication event.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### valueMeasure?

> `optional` **valueMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure of a value for this communication event.

#### See

https://vocabulary.uncefact.org/valueMeasure
