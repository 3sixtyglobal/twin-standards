# Interface: IDcsaReeferMeasurements

Measured reefer values.

Source: `reeferMeasurements` schema in the DCSA Event Domain (v3.1.0).

Note: The OpenAPI references value ranges and units from DCSA_DOMAIN; this package models values as numbers and
unit fields as strings.

## See

https://github.com/dcsaorg/DCSA-OpenAPI/blob/master/domain/event/event_domain_v3.1.0.yaml

## Properties

### ambientTemperature?

> `optional` **ambientTemperature**: `number`

Ambient temperature.

***

### temperature?

> `optional` **temperature**: `number`

Temperature.

***

### temperatureUnit?

> `optional` **temperatureUnit**: `string`

Temperature unit.

***

### o2?

> `optional` **o2**: `number`

O2 measurement.

***

### co2?

> `optional` **co2**: `number`

CO2 measurement.

***

### humidity?

> `optional` **humidity**: `number`

Humidity measurement.

***

### airExchange?

> `optional` **airExchange**: `number`

Air exchange measurement.

***

### airExchangeUnit?

> `optional` **airExchangeUnit**: `string`

Air exchange unit.
