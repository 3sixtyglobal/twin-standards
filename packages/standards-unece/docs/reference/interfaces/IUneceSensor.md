# Interface: IUneceSensor

An object which can detect and measure physical properties and which can record, indicate and transmit such
measurements.

## See

https://vocabulary.uncefact.org/Sensor

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Sensor"`

JSON-LD Type.

***

### actualReportedMeasurement?

> `optional` **actualReportedMeasurement**: [`IUneceCalibratedMeasurement`](IUneceCalibratedMeasurement.md)[]

An actual calibrated measurement reported for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/actualReportedMeasurement

***

### definedControlSettingParameter?

> `optional` **definedControlSettingParameter**: [`IUneceControlSettingParameter`](IUneceControlSettingParameter.md)[]

A control setting parameter defined for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/definedControlSettingParameter

***

### definedOperationalParameter?

> `optional` **definedOperationalParameter**: [`IUneceOperationalParameter`](IUneceOperationalParameter.md)[]

An operational parameter defined for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/definedOperationalParameter

***

### grantedCertificate?

> `optional` **grantedCertificate**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate granted for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/grantedCertificate

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this monitoring sensor.

#### See

https://vocabulary.uncefact.org/identifier

***

### manufacturerParty?

> `optional` **manufacturerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The manufacturer party for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### ownerParty?

> `optional` **ownerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The owner party of this monitoring sensor.

#### See

https://vocabulary.uncefact.org/ownerParty

***

### positionCode?

> `optional` **positionCode**: `string`

The code specifying a position of this monitoring sensor.

#### See

https://vocabulary.uncefact.org/positionCode

***

### precisionMeasurement?

> `optional` **precisionMeasurement**: [`IUneceCalibratedMeasurement`](IUneceCalibratedMeasurement.md)[]

A calibrated measurement of precision for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/precisionMeasurement

***

### remainingBatteryChargePercent?

> `optional` **remainingBatteryChargePercent**: `string`

The percentage of the remaining battery charge of this monitoring sensor.

#### See

https://vocabulary.uncefact.org/remainingBatteryChargePercent

***

### scheduledReportedMeasurement?

> `optional` **scheduledReportedMeasurement**: [`IUneceCalibratedMeasurement`](IUneceCalibratedMeasurement.md)[]

A scheduled calibrated measurement reported for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/scheduledReportedMeasurement

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying a type of monitoring sensor.

#### See

https://vocabulary.uncefact.org/typeCode

***

### valueMeasure?

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the value for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/valueMeasure
