# Interface: IDcsaRailTransportCall

Rail transport call details.

Source: `railTransportCall` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Extends

- [`IDcsaTransportCallBase`](IDcsaTransportCallBase.md)

## Properties

### modeOfTransport {#modeoftransport}

> **modeOfTransport**: `"RAIL"`

Discriminator for the transport mode.

***

### departureID? {#departureid}

> `optional` **departureID**: `string`

Departure reference ID.

***

### railService? {#railservice}

> `optional` **railService**: `string`

Rail service number.

***

### railCar? {#railcar}

> `optional` **railCar**: `string`

Railcar identifier.

***

### transportCallReference {#transportcallreference}

> **transportCallReference**: `string`

Unique reference for the transport call.

#### Inherited from

[`IDcsaTransportCallBase`](IDcsaTransportCallBase.md).[`transportCallReference`](IDcsaTransportCallBase.md#transportcallreference)

***

### transportCallSequenceNumber? {#transportcallsequencenumber}

> `optional` **transportCallSequenceNumber**: `number`

Sequence number of the transport call.

#### Inherited from

[`IDcsaTransportCallBase`](IDcsaTransportCallBase.md).[`transportCallSequenceNumber`](IDcsaTransportCallBase.md#transportcallsequencenumber)

***

### location? {#location}

> `optional` **location**: `unknown`

Location of the transport call.

Kept as unknown since the authoritative schema references LOCATION_DOMAIN types.

#### Inherited from

[`IDcsaTransportCallBase`](IDcsaTransportCallBase.md).[`location`](IDcsaTransportCallBase.md#location)

***

### facilityTypeCode? {#facilitytypecode}

> `optional` **facilityTypeCode**: [`DcsaTransportCallFacilityTypeCodes`](../type-aliases/DcsaTransportCallFacilityTypeCodes.md)

Facility type code.

#### Inherited from

[`IDcsaTransportCallBase`](IDcsaTransportCallBase.md).[`facilityTypeCode`](IDcsaTransportCallBase.md#facilitytypecode)
