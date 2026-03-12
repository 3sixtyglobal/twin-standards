# Interface: IEpcisSensorMetadata

EPCIS 2.0 SensorMetadata describing timing, device, and processing details for
sensor observations.

## See

https://ref.gs1.org/epcis/SensorMetadata

## Properties

### time? {#time}

> `optional` **time**: `string`

(Optional) The actual point in time of an observation as transmitted by a
sensor device.

***

### deviceID? {#deviceid}

> `optional` **deviceID**: `string`

(Optional) Device from which the sensor data originates.

***

### deviceMetadata? {#devicemetadata}

> `optional` **deviceMetadata**: `string`

(Optional) Storage location of an electronic document accommodating metadata
of the device from which the sensor data originates.

***

### rawData? {#rawdata}

> `optional` **rawData**: `string`

(Optional) Storage/service location of the raw sensor data on which the
aggregated/business-oriented data contained in the sensorElement is based.

***

### startTime? {#starttime}

> `optional` **startTime**: `string`

(Optional) The lowest (earliest) value of a given observation period as
transmitted by a sensor device.

***

### endTime? {#endtime}

> `optional` **endTime**: `string`

(Optional) The highest (most recent) value of a given observation period, as
transmitted by a sensor device.

***

### dataProcessingMethod? {#dataprocessingmethod}

> `optional` **dataProcessingMethod**: `string`

(Optional) Storage location of an electronic document accommodating the data
processing method of the contained sensor data, if applicable.

***

### bizRules? {#bizrules}

> `optional` **bizRules**: `string`

(Optional) Storage location of an electronic document accommodating product- or
application-specific business rules on which basis the EPCIS event was
triggered.
