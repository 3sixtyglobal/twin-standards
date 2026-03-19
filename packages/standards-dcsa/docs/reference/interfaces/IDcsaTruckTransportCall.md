# Interface: IDcsaTruckTransportCall

Truck transport call details.

Source: `truckTransportCall` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Extends

- [`IDcsaTransportCallBase`](IDcsaTransportCallBase.md)

## Properties

### transportCallReference {#transportcallreference}

> **transportCallReference**: `string`

Unique reference for the transport call.

#### Inherited from

[`IDcsaTransportCallBase`](IDcsaTransportCallBase.md).[`transportCallReference`](IDcsaTransportCallBase.md#transportcallreference)

***

### transportCallSequenceNumber? {#transportcallsequencenumber}

> `optional` **transportCallSequenceNumber?**: `number`

Sequence number of the transport call.

#### Inherited from

[`IDcsaTransportCallBase`](IDcsaTransportCallBase.md).[`transportCallSequenceNumber`](IDcsaTransportCallBase.md#transportcallsequencenumber)

***

### location? {#location}

> `optional` **location?**: `unknown`

Location of the transport call.

Kept as unknown since the authoritative schema references LOCATION_DOMAIN types.

#### Inherited from

[`IDcsaTransportCallBase`](IDcsaTransportCallBase.md).[`location`](IDcsaTransportCallBase.md#location)

***

### facilityTypeCode? {#facilitytypecode}

> `optional` **facilityTypeCode?**: [`DcsaTransportCallFacilityTypeCodes`](../type-aliases/DcsaTransportCallFacilityTypeCodes.md)

Facility type code.

#### Inherited from

[`IDcsaTransportCallBase`](IDcsaTransportCallBase.md).[`facilityTypeCode`](IDcsaTransportCallBase.md#facilitytypecode)

***

### modeOfTransport {#modeoftransport}

> **modeOfTransport**: `"TRUCK"`

Discriminator for the transport mode.

***

### licencePlate? {#licenceplate}

> `optional` **licencePlate?**: `string`

Truck license plate.

***

### chassisLicencePlate? {#chassislicenceplate}

> `optional` **chassisLicencePlate?**: `string`

Chassis license plate.
