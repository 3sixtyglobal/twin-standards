# Interface: IDcsaIotEventMetadataRetraction

IoT event metadata (retraction).

Source: `metadata` + `retractedEventID` rule in the DCSA Event Domain (v3.1.0).

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Properties

### eventID {#eventid}

> **eventID**: `string`

Unique identifier of this event.

***

### eventCreatedDateTime {#eventcreateddatetime}

> **eventCreatedDateTime**: `string`

Date-time when the event was created by the publisher.

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

### retractedEventID {#retractedeventid}

> **retractedEventID**: `string`

Reference to the event that is retracted.
