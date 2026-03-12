# Interface: IDcsaBarge

Barge.

Source: `barge` schema in the DCSA Event Domain (v3.1.0).

Note: Most properties are defined in DCSA_DOMAIN; this package models them as strings.

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Properties

### name {#name}

> **name**: `string`

Barge name.

***

### vesselIMONumber? {#vesselimonumber}

> `optional` **vesselIMONumber**: `string`

Barge IMO number (when available).

***

### flag? {#flag}

> `optional` **flag**: `string`

Barge flag.

***

### callSign? {#callsign}

> `optional` **callSign**: `string`

Barge call sign.

***

### operatorCarrierCode? {#operatorcarriercode}

> `optional` **operatorCarrierCode**: `string`

Carrier code of the barge operator.

***

### operatorCarrierCodeListProvider? {#operatorcarriercodelistprovider}

> `optional` **operatorCarrierCodeListProvider**: `string`

Provider of the operator carrier code list.
