# Interface: IUneceIOTDevice

An IOT (Internet of Things) piece of mechanical or electronic equipment which can collect, report and autonomously
transmit digital data.

## See

https://vocabulary.uncefact.org/IOTDevice

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"IOTDevice"`

JSON-LD Type.

***

### attachedAssetId?

> `optional` **attachedAssetId**: `string`

The identifier for the asset, such as a container, to which this monitoring IOT device is attached.

#### See

https://vocabulary.uncefact.org/attachedAssetId

***

### communicationCapabilityCode?

> `optional` **communicationCapabilityCode**: `string`

The code specifying the communication capability of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/communicationCapabilityCode

***

### embeddedSensor?

> `optional` **embeddedSensor**: [`IUneceSensor`](IUneceSensor.md)

An embedded sensor of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/embeddedSensor

***

### grantedCertificate?

> `optional` **grantedCertificate**: [`IUneceProductCertificate`](IUneceProductCertificate.md)

A product certificate granted for this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/grantedCertificate

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/identifier

***

### interfaceEquipment?

> `optional` **interfaceEquipment**: [`IUneceEquipment`](IUneceEquipment.md)

An interface between an OEM (Original Equipment Manufacturer) equipment and this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/interfaceEquipment

***

### latestReceivedGeographicalCoordinate?

> `optional` **latestReceivedGeographicalCoordinate**: [`IUneceGeographicalCoordinate`](IUneceGeographicalCoordinate.md)

The latest geographical coordinates received by this monitoring IOT device, from the perspective of the receiver.

#### See

https://vocabulary.uncefact.org/latestReceivedGeographicalCoordinate

***

### latestReceivedSignalDateTime?

> `optional` **latestReceivedSignalDateTime**: `string`

The date, time, date time or other date time value of the latest received signal for this monitoring IOT device, from
the perspective of the receiver.

#### See

https://vocabulary.uncefact.org/latestReceivedSignalDateTime

***

### manufacturerParty?

> `optional` **manufacturerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The manufacturer party of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### modelId?

> `optional` **modelId**: `string`

A model identifier for this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/modelId

***

### operationalStatusCode?

> `optional` **operationalStatusCode**: `string`

The code specifying the operational status, such as broken, stolen, unpaired, inactive of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/operationalStatusCode

***

### operatorParty?

> `optional` **operatorParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The operator party, such as terminal operator, service provider, network operator of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/operatorParty

***

### ownerParty?

> `optional` **ownerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The owner party of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/ownerParty

***

### positionCode?

> `optional` **positionCode**: `string`

The code specifying the position of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/positionCode

***

### powerSourceTypeCode?

> `optional` **powerSourceTypeCode**: `string`

The code specifying a type of power source for this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/powerSourceTypeCode

***

### providerParty?

> `optional` **providerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The provider party for this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/providerParty

***

### relatedEvent?

> `optional` **relatedEvent**: [`IUneceCommunicationEvent`](IUneceCommunicationEvent.md)

A communication event related to this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/relatedEvent

***

### remainingBatteryChargePercent?

> `optional` **remainingBatteryChargePercent**: `string`

The percentage of the remaining battery charge of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/remainingBatteryChargePercent

***

### remoteSensor?

> `optional` **remoteSensor**: [`IUneceSensor`](IUneceSensor.md)

A remote sensor of this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/remoteSensor

***

### reportedTransportEvent?

> `optional` **reportedTransportEvent**: [`IUneceTransportEvent`](IUneceTransportEvent.md)

A transport event reported by this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/reportedTransportEvent

***

### reportingSensorPairing?

> `optional` **reportingSensorPairing**: [`IUnecePairing`](IUnecePairing.md)

A sensor communication pairing reported for this monitoring IOT device.

#### See

https://vocabulary.uncefact.org/reportingSensorPairing

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of monitoring IOT device.

#### See

https://vocabulary.uncefact.org/typeCode
