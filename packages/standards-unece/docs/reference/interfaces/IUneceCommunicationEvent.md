# Interface: IUneceCommunicationEvent

A significant occurrence or happening communicated by means of sending or receiving information, such as transmitting
digital data by using the internet.

## See

https://vocabulary.uncefact.org/CommunicationEvent

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"CommunicationEvent"`

JSON-LD Type.

***

### associatedGeographicalFeature? {#associatedgeographicalfeature}

> `optional` **associatedGeographicalFeature?**: [`IUneceGeographicalFeature`](IUneceGeographicalFeature.md)[]

A geographical feature associated with this communication event.

#### See

https://vocabulary.uncefact.org/associatedGeographicalFeature

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this communication event.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier for this communication event.

#### See

https://vocabulary.uncefact.org/identifier

***

### occurrenceDateTime? {#occurrencedatetime}

> `optional` **occurrenceDateTime?**: `string`

The date, time, date time, or other date time value of an occurrence of this communication event.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### occurrenceLogisticsLocation? {#occurrencelogisticslocation}

> `optional` **occurrenceLogisticsLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The logistics location where this communication event will occur or has occurred.

#### See

https://vocabulary.uncefact.org/occurrenceLogisticsLocation

***

### operationalResponsibleParty? {#operationalresponsibleparty}

> `optional` **operationalResponsibleParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The operational responsible party for this communication event.

#### See

https://vocabulary.uncefact.org/operationalResponsibleParty

***

### reasonCode? {#reasoncode}

> `optional` **reasonCode?**: `string`

The code specifying a reason for this communication event.

#### See

https://vocabulary.uncefact.org/reasonCode

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of communication event.

#### See

https://vocabulary.uncefact.org/typeCode

***

### unitQuantity? {#unitquantity}

> `optional` **unitQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units for this communication event.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of a value for this communication event.

#### See

https://vocabulary.uncefact.org/valueMeasure
