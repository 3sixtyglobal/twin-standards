# Interface: IDcsaVessel

Vessel.

Source: `vessel` schema in the DCSA Event Domain (v3.1.0).

Note: Most properties are defined in DCSA_DOMAIN; this package models them as strings.

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Properties

### vesselIMONumber {#vesselimonumber}

> **vesselIMONumber**: `string`

Vessel IMO number.

***

### name? {#name}

> `optional` **name**: `string`

Vessel name.

***

### flag? {#flag}

> `optional` **flag**: `string`

Vessel flag.

***

### callSign? {#callsign}

> `optional` **callSign**: `string`

Vessel call sign.

***

### operatorCarrierCode? {#operatorcarriercode}

> `optional` **operatorCarrierCode**: `string`

Carrier code of the vessel operator.

***

### operatorCarrierCodeListProvider? {#operatorcarriercodelistprovider}

> `optional` **operatorCarrierCodeListProvider**: `string`

Provider of the operator carrier code list.
