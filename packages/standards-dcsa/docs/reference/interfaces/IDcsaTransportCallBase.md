# Interface: IDcsaTransportCallBase

Transport call common attributes.

Source: `transportCall` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Extended by

- [`IDcsaBargeTransportCall`](IDcsaBargeTransportCall.md)
- [`IDcsaRailTransportCall`](IDcsaRailTransportCall.md)
- [`IDcsaTruckTransportCall`](IDcsaTruckTransportCall.md)
- [`IDcsaVesselTransportCall`](IDcsaVesselTransportCall.md)

## Properties

### transportCallReference {#transportcallreference}

> **transportCallReference**: `string`

Unique reference for the transport call.

***

### transportCallSequenceNumber? {#transportcallsequencenumber}

> `optional` **transportCallSequenceNumber?**: `number`

Sequence number of the transport call.

***

### location? {#location}

> `optional` **location?**: `unknown`

Location of the transport call.

Kept as unknown since the authoritative schema references LOCATION_DOMAIN types.

***

### facilityTypeCode? {#facilitytypecode}

> `optional` **facilityTypeCode?**: [`DcsaTransportCallFacilityTypeCodes`](../type-aliases/DcsaTransportCallFacilityTypeCodes.md)

Facility type code.
