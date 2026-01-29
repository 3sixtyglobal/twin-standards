# Interface: IDcsaBarge

Barge.

Source: `barge` schema in the DCSA Event Domain (v3.1.0).

Note: Most properties are defined in DCSA_DOMAIN; this package models them as strings.

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Properties

### name

> **name**: `string`

Barge name.

***

### vesselIMONumber?

> `optional` **vesselIMONumber**: `string`

Barge IMO number (when available).

***

### flag?

> `optional` **flag**: `string`

Barge flag.

***

### callSign?

> `optional` **callSign**: `string`

Barge call sign.

***

### operatorCarrierCode?

> `optional` **operatorCarrierCode**: `string`

Carrier code of the barge operator.

***

### operatorCarrierCodeListProvider?

> `optional` **operatorCarrierCodeListProvider**: `string`

Provider of the operator carrier code list.
