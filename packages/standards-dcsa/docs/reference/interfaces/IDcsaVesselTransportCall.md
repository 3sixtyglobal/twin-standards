# Interface: IDcsaVesselTransportCall

Vessel transport call details.

Source: `vesselTransportCall` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Extends

- [`IDcsaTransportCallBase`](IDcsaTransportCallBase.md)

## Properties

### transportCallReference

> **transportCallReference**: `string`

Unique reference for the transport call.

#### Inherited from

[`IDcsaTransportCallBase`](IDcsaTransportCallBase.md).[`transportCallReference`](IDcsaTransportCallBase.md#transportcallreference)

***

### transportCallSequenceNumber?

> `optional` **transportCallSequenceNumber**: `number`

Sequence number of the transport call.

#### Inherited from

[`IDcsaTransportCallBase`](IDcsaTransportCallBase.md).[`transportCallSequenceNumber`](IDcsaTransportCallBase.md#transportcallsequencenumber)

***

### location?

> `optional` **location**: `unknown`

Location of the transport call.

Kept as unknown since the authoritative schema references LOCATION_DOMAIN types.

#### Inherited from

[`IDcsaTransportCallBase`](IDcsaTransportCallBase.md).[`location`](IDcsaTransportCallBase.md#location)

***

### facilityTypeCode?

> `optional` **facilityTypeCode**: [`DcsaTransportCallFacilityTypeCodes`](../type-aliases/DcsaTransportCallFacilityTypeCodes.md)

Facility type code.

#### Inherited from

[`IDcsaTransportCallBase`](IDcsaTransportCallBase.md).[`facilityTypeCode`](IDcsaTransportCallBase.md#facilitytypecode)

***

### modeOfTransport

> **modeOfTransport**: `"VESSEL"`

Discriminator for the transport mode.

***

### portVisitReference?

> `optional` **portVisitReference**: `string`

Port visit reference.

***

### carrierServiceCode?

> `optional` **carrierServiceCode**: `string`

Carrier service code.

***

### universalServiceReference?

> `optional` **universalServiceReference**: `string`

Universal service reference.

***

### carrierExportVoyageNumber?

> `optional` **carrierExportVoyageNumber**: `string`

Carrier export voyage number.

***

### universalExportVoyageReference?

> `optional` **universalExportVoyageReference**: `string`

Universal export voyage reference.

***

### carrierImportVoyageNumber?

> `optional` **carrierImportVoyageNumber**: `string`

Carrier import voyage number.

***

### universalImportVoyageReference?

> `optional` **universalImportVoyageReference**: `string`

Universal import voyage reference.

***

### vessel?

> `optional` **vessel**: [`IDcsaVessel`](IDcsaVessel.md)

Vessel.
