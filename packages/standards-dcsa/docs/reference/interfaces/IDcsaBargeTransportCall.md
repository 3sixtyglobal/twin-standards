# Interface: IDcsaBargeTransportCall

Barge transport call details.

Source: `bargeTransportCall` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Extends

- [`IDcsaTransportCallBase`](IDcsaTransportCallBase.md)

## Properties

### modeOfTransport {#modeoftransport}

> **modeOfTransport**: `"BARGE"`

Discriminator for the transport mode.

***

### barge? {#barge}

> `optional` **barge**: [`IDcsaBarge`](IDcsaBarge.md)

Barge.

***

### portVisitReference? {#portvisitreference}

> `optional` **portVisitReference**: `string`

Port visit reference.

***

### carrierServiceCode? {#carrierservicecode}

> `optional` **carrierServiceCode**: `string`

Carrier service code.

***

### universalServiceReference? {#universalservicereference}

> `optional` **universalServiceReference**: `string`

Universal service reference.

***

### carrierExportVoyageNumber? {#carrierexportvoyagenumber}

> `optional` **carrierExportVoyageNumber**: `string`

Carrier export voyage number.

***

### universalExportVoyageReference? {#universalexportvoyagereference}

> `optional` **universalExportVoyageReference**: `string`

Universal export voyage reference.

***

### carrierImportVoyageNumber? {#carrierimportvoyagenumber}

> `optional` **carrierImportVoyageNumber**: `string`

Carrier import voyage number.

***

### universalImportVoyageReference? {#universalimportvoyagereference}

> `optional` **universalImportVoyageReference**: `string`

Universal import voyage reference.

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
