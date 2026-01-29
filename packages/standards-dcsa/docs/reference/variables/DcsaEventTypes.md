# Variable: DcsaEventTypes

> `const` **DcsaEventTypes**: `object`

DCSA event types.

Source: the Event Domain defines `eventType` as the discriminator for the base `event` schema
(SHIPMENT/EQUIPMENT/TRANSPORT). The domain also defines dedicated `iotEvent` and `reeferEvent`
schemas which constrain the discriminator to IOT and REEFER respectively.

## Type Declaration

### SHIPMENT

> `readonly` **SHIPMENT**: `"SHIPMENT"` = `"SHIPMENT"`

Shipment event.

### TRANSPORT

> `readonly` **TRANSPORT**: `"TRANSPORT"` = `"TRANSPORT"`

Transport event.

### EQUIPMENT

> `readonly` **EQUIPMENT**: `"EQUIPMENT"` = `"EQUIPMENT"`

Equipment event.

### IOT

> `readonly` **IOT**: `"IOT"` = `"IOT"`

IOT event.

### REEFER

> `readonly` **REEFER**: `"REEFER"` = `"REEFER"`

Reefer event.

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml
