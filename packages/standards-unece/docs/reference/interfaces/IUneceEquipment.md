# Interface: IUneceEquipment

Hardware or software typically marketed by a company other than the original manufacturer.

## See

https://vocabulary.uncefact.org/Equipment

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Equipment"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this OEM equipment.

#### See

https://vocabulary.uncefact.org/identifier

***

### manufacturerParty? {#manufacturerparty}

> `optional` **manufacturerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The manufacturer party for this OEM equipment.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### pollingCapabilityIndicator? {#pollingcapabilityindicator}

> `optional` **pollingCapabilityIndicator**: `boolean`

The indication of whether or not this OEM equipment has a polling capability.

#### See

https://vocabulary.uncefact.org/pollingCapabilityIndicator

***

### pollingRateMeasure? {#pollingratemeasure}

> `optional` **pollingRateMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the polling rate for this OEM equipment.

#### See

https://vocabulary.uncefact.org/pollingRateMeasure

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

A code specifying a type of OEM equipment.

#### See

https://vocabulary.uncefact.org/typeCode
