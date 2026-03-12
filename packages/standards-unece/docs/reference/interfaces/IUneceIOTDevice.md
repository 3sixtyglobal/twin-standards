# Interface: IUneceIOTDevice

An IOT (Internet of Things) piece of mechanical or electronic equipment which can collect, report and autonomously
transmit digital data.

## See

https://vocabulary.uncefact.org/IOTDevice

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"IOTDevice"`

JSON-LD Type.

***

### attachedAssetId? {#attachedassetid}

> `optional` **attachedAssetId**: `string` \| `IJsonLdValueObject`

The identifier for the asset, such as a container, to which this monitoring IOT device is attached.

#### See

https://vocabulary.uncefact.org/attachedAssetId

***

### communicationCapabilityCode? {#communicationcapabilitycode}

> `optional` **communicationCapabilityCode**: `string`

The code specifying the communication capability of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/communicationCapabilityCode

***

### embeddedSensor? {#embeddedsensor}

> `optional` **embeddedSensor**: [`IUneceSensor`](IUneceSensor.md)[]

An embedded sensor of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/embeddedSensor

***

### grantedCertificate? {#grantedcertificate}

> `optional` **grantedCertificate**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate granted for this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/grantedCertificate

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier for this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/identifier

***

### interfaceEquipment? {#interfaceequipment}

> `optional` **interfaceEquipment**: [`IUneceEquipment`](IUneceEquipment.md)[]

An interface between an OEM (Original Equipment Manufacturer) equipment and this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/interfaceEquipment

***

### latestReceivedGeographicalCoordinate? {#latestreceivedgeographicalcoordinate}

> `optional` **latestReceivedGeographicalCoordinate**: [`IUneceGeographicalCoordinate`](IUneceGeographicalCoordinate.md)

The latest geographical coordinates received by this monitoring IOT device, from the perspective of the receiver.

#### See

https://vocabulary.uncefact.org/latestReceivedGeographicalCoordinate

***

### latestReceivedSignalDateTime? {#latestreceivedsignaldatetime}

> `optional` **latestReceivedSignalDateTime**: `string`

The date, time, date time or other date time value of the latest received signal for this monitoring IOT device, from
the perspective of the receiver.

#### See

https://vocabulary.uncefact.org/latestReceivedSignalDateTime

***

### manufacturerParty? {#manufacturerparty}

> `optional` **manufacturerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The manufacturer party of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### modelId? {#modelid}

> `optional` **modelId**: `string` \| `IJsonLdValueObject`

A model identifier for this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/modelId

***

### operationalStatusCode? {#operationalstatuscode}

> `optional` **operationalStatusCode**: `string`

The code specifying the operational status, such as broken, stolen, unpaired, inactive of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/operationalStatusCode

***

### operatorParty? {#operatorparty}

> `optional` **operatorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The operator party, such as terminal operator, service provider, network operator of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/operatorParty

***

### ownerParty? {#ownerparty}

> `optional` **ownerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The owner party of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/ownerParty

***

### positionCode? {#positioncode}

> `optional` **positionCode**: `string`

The code specifying the position of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/positionCode

***

### powerSourceTypeCode? {#powersourcetypecode}

> `optional` **powerSourceTypeCode**: `string`

The code specifying a type of power source for this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/powerSourceTypeCode

***

### providerParty? {#providerparty}

> `optional` **providerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The provider party for this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/providerParty

***

### relatedEvent? {#relatedevent}

> `optional` **relatedEvent**: [`IUneceCommunicationEvent`](IUneceCommunicationEvent.md)[]

A communication event related to this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/relatedEvent

***

### remainingBatteryChargePercent? {#remainingbatterychargepercent}

> `optional` **remainingBatteryChargePercent**: `string`

The percentage of the remaining battery charge of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/remainingBatteryChargePercent

***

### remoteSensor? {#remotesensor}

> `optional` **remoteSensor**: [`IUneceSensor`](IUneceSensor.md)[]

A remote sensor of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/remoteSensor

***

### reportedTransportEvent? {#reportedtransportevent}

> `optional` **reportedTransportEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)[]

A transport event reported by this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/reportedTransportEvent

***

### reportingSensorPairing? {#reportingsensorpairing}

> `optional` **reportingSensorPairing**: [`IUnecePairing`](IUnecePairing.md)[]

A sensor communication pairing reported for this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/reportingSensorPairing

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of monitoring IOT device.

#### See

https://vocabulary.uncefact.org/typeCode
