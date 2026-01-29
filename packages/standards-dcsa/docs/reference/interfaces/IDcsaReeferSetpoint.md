# Interface: IDcsaReeferSetpoint

Reefer setpoint values.

Source: `reeferSetpoint` schema in the DCSA Event Domain (v3.1.0).

Note: The OpenAPI references value ranges and units from DCSA_DOMAIN; this package models values as numbers and
unit fields as strings.

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Properties

### temperature?

> `optional` **temperature**: `number`

Target temperature.

***

### temperatureUnit?

> `optional` **temperatureUnit**: `string`

Temperature unit.

***

### o2?

> `optional` **o2**: `number`

Target O2.

***

### co2?

> `optional` **co2**: `number`

Target CO2.

***

### humidity?

> `optional` **humidity**: `number`

Target humidity.

***

### airExchange?

> `optional` **airExchange**: `number`

Target air exchange.

***

### airExchangeUnit?

> `optional` **airExchangeUnit**: `string`

Air exchange unit.
