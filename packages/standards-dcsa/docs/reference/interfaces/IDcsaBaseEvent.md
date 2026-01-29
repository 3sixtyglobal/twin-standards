# Interface: IDcsaBaseEvent

Base event attributes shared by all payloads.

Source: `baseEvent` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Extended by

- [`IDcsaEquipmentPayload`](IDcsaEquipmentPayload.md)
- [`IDcsaShipmentPayload`](IDcsaShipmentPayload.md)
- [`IDcsaTransportPayload`](IDcsaTransportPayload.md)

## Properties

### eventClassifierCode

> **eventClassifierCode**: [`DcsaEventClassifierCode`](../type-aliases/DcsaEventClassifierCode.md)

Code for the event classifier.

Note: allowed values depend on event type. Some event categories in the upstream spec
constrain this to a subset (e.g. Shipment/IoT/Reefer are always ACT).

***

### eventDateTime

> **eventDateTime**: `string`

The local date and time when the event took place (or will take place).
Format: ISO 8601 date-time.
