# Interface: IUneceTransportSettingTemperature

Temperature settings for a transport movement, such as a required storage temperature range.

## See

https://vocabulary.uncefact.org/TransportSettingTemperature

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"TransportSettingTemperature"`

JSON-LD Type.

***

### informationInstructions?

> `optional` **informationInstructions**: [`IUneceTemperatureSettingInstructions`](IUneceTemperatureSettingInstructions.md)

Informational instructions for achieving, maintaining, using or responding to this transport setting temperature.

#### See

https://vocabulary.uncefact.org/informationInstructions

***

### maximumValueMeasure?

> `optional` **maximumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the highest value of this transport setting temperature, such as a maximum temperature value of fourteen
degrees Celsius.

#### See

https://vocabulary.uncefact.org/maximumValueMeasure

***

### minimumValueMeasure?

> `optional` **minimumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the lowest value of this transport setting temperature, such as a minimum temperature value of four
degrees Celsius.

#### See

https://vocabulary.uncefact.org/minimumValueMeasure

***

### temperatureTypeCode?

> `optional` **temperatureTypeCode**: [`UneceTemperatureTypeCodeList`](../type-aliases/UneceTemperatureTypeCodeList.md)

The code specifying the type of transport setting temperature [Reference United Nations Code List (UNCL) 6245].

#### See

https://vocabulary.uncefact.org/temperatureTypeCode

***

### temperatureUnitValueMeasure?

> `optional` **temperatureUnitValueMeasure**: [`IUneceTemperatureUnitMeasureType`](IUneceTemperatureUnitMeasureType.md)

The measure of the value of this transport setting temperature, such as a temperature value of ten degrees Celsius.

#### See

https://vocabulary.uncefact.org/temperatureUnitValueMeasure
