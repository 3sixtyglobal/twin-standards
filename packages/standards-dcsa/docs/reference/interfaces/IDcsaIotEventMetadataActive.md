# Interface: IDcsaIotEventMetadataActive

IoT event metadata (active event).

Source: `iotEvent` metadata allOf in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Properties

### eventID {#eventid}

> **eventID**: `string`

Unique identifier of this event.

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

***

### eventType {#eventtype}

> **eventType**: `"IOT"`

Event type discriminator.

***

### retractedEventID? {#retractedeventid}

> `optional` **retractedEventID?**: `null`

Must be `null` (or omitted) for non-retraction events.
The upstream schema defines a default of `null`.
