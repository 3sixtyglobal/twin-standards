# Interface: IUneceSensor

An object which can detect and measure physical properties and which can record, indicate and transmit such
measurements.

## See

https://vocabulary.uncefact.org/Sensor

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Sensor"`

JSON-LD Type.

***

### actualReportedMeasurement? {#actualreportedmeasurement}

> `optional` **actualReportedMeasurement**: [`IUneceCalibratedMeasurement`](IUneceCalibratedMeasurement.md)[]

An actual calibrated measurement reported for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/actualReportedMeasurement

***

### definedControlSettingParameter? {#definedcontrolsettingparameter}

> `optional` **definedControlSettingParameter**: [`IUneceControlSettingParameter`](IUneceControlSettingParameter.md)[]

A control setting parameter defined for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/definedControlSettingParameter

***

### definedOperationalParameter? {#definedoperationalparameter}

> `optional` **definedOperationalParameter**: [`IUneceOperationalParameter`](IUneceOperationalParameter.md)[]

An operational parameter defined for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/definedOperationalParameter

***

### grantedCertificate? {#grantedcertificate}

> `optional` **grantedCertificate**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate granted for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/grantedCertificate

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this monitoring sensor.

#### See

https://vocabulary.uncefact.org/identifier

***

### manufacturerParty? {#manufacturerparty}

> `optional` **manufacturerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The manufacturer party for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### ownerParty? {#ownerparty}

> `optional` **ownerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The owner party of this monitoring sensor.

#### See

https://vocabulary.uncefact.org/ownerParty

***

### positionCode? {#positioncode}

> `optional` **positionCode**: `string`

The code specifying a position of this monitoring sensor.

#### See

https://vocabulary.uncefact.org/positionCode

***

### precisionMeasurement? {#precisionmeasurement}

> `optional` **precisionMeasurement**: [`IUneceCalibratedMeasurement`](IUneceCalibratedMeasurement.md)[]

A calibrated measurement of precision for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/precisionMeasurement

***

### remainingBatteryChargePercent? {#remainingbatterychargepercent}

> `optional` **remainingBatteryChargePercent**: `string`

The percentage of the remaining battery charge of this monitoring sensor.

#### See

https://vocabulary.uncefact.org/remainingBatteryChargePercent

***

### scheduledReportedMeasurement? {#scheduledreportedmeasurement}

> `optional` **scheduledReportedMeasurement**: [`IUneceCalibratedMeasurement`](IUneceCalibratedMeasurement.md)[]

A scheduled calibrated measurement reported for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/scheduledReportedMeasurement

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying a type of monitoring sensor.

#### See

https://vocabulary.uncefact.org/typeCode

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the value for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/valueMeasure
