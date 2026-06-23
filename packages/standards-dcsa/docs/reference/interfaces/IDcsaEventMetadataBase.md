# Interface: IDcsaEventMetadataBase

Event metadata.

Source: `metadata` schema in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Properties

### eventID {#eventid}

> **eventID**: `string`

The unique identifier for this event message (not the source system).

***

### eventCreatedDateTime {#eventcreateddatetime}

> **eventCreatedDateTime**: `string`

Timestamp of when the event was created by the publisher.
Format: ISO 8601 date-time.

***

### publisher {#publisher}

> **publisher**: [`IDcsaPublisher`](IDcsaPublisher.md)

The party publishing this event.

***

### publisherRole {#publisherrole}

> **publisherRole**: [`DcsaTntPublisherRole`](../type-aliases/DcsaTntPublisherRole.md)

Publisher role (context of the publisher).
For Track & Trace events, this is the `tntPublisherRole` code list.

***

### eventType {#eventtype}

> **eventType**: [`DcsaEventTypes`](../type-aliases/DcsaEventTypes.md)

Event type discriminator.

For the base `event` schema (T&T polling), the discriminator is limited to
SHIPMENT/EQUIPMENT/TRANSPORT and is further narrowed by the concrete event union types.
Other event hub schemas (e.g. IoT/Reefer) constrain this to IOT/REEFER.
