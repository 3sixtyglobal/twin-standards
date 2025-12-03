# Interface: ISensor

An object which can detect and measure physical properties and which can record, indicate and transmit such
measurements.

## See

https://vocabulary.uncefact.org/Sensor

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"Sensor"`

JSON-LD Type.

***

### actualReportedMeasurement?

> `optional` **actualReportedMeasurement**: [`ICalibratedMeasurement`](ICalibratedMeasurement.md)[]

An actual calibrated measurement reported for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/actualReportedMeasurement

***

### definedControlSettingParameter?

> `optional` **definedControlSettingParameter**: [`IControlSettingParameter`](IControlSettingParameter.md)[]

A control setting parameter defined for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/definedControlSettingParameter

***

### definedOperationalParameter?

> `optional` **definedOperationalParameter**: [`IOperationalParameter`](IOperationalParameter.md)[]

An operational parameter defined for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/definedOperationalParameter

***

### grantedCertificate?

> `optional` **grantedCertificate**: [`IProductCertificate`](IProductCertificate.md)[]

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

> `optional` **manufacturerParty**: [`ITradeParty`](ITradeParty.md)[]

The manufacturer party for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/manufacturerParty

***

### ownerParty?

> `optional` **ownerParty**: [`ITradeParty`](ITradeParty.md)[]

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

> `optional` **precisionMeasurement**: [`ICalibratedMeasurement`](ICalibratedMeasurement.md)[]

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

> `optional` **scheduledReportedMeasurement**: [`ICalibratedMeasurement`](ICalibratedMeasurement.md)[]

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

> `optional` **valueMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure of the value for this monitoring sensor.

#### See

https://vocabulary.uncefact.org/valueMeasure
