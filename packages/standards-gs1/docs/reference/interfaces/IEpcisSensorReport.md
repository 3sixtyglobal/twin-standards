# Interface: IEpcisSensorReport

EPCIS 2.0 SensorReport containing measurement values and related sensor
observation details.

## See

https://ref.gs1.org/epcis/SensorReport

## Properties

### type {#type}

> **type**: `string`

Identifier indicating what kind of measurement the SensorReport pertains to
(e.g. Length, Mass, Temperature).

Use [EpcisMeasurementTypes](../variables/EpcisMeasurementTypes.md) for known values.

***

### exception? {#exception}

> `optional` **exception?**: `string`

A sensor alert value (alarm condition or error condition); extra details may
be provided via booleanValue or uriValue.

Use [EpcisSensorAlertTypes](../variables/EpcisSensorAlertTypes.md) for known values.

***

### deviceID? {#deviceid}

> `optional` **deviceID?**: `string`

(Optional) Device from which the sensor data originates.

***

### deviceMetadata? {#devicemetadata}

> `optional` **deviceMetadata?**: `string`

(Optional) Storage location of an electronic document accommodating metadata
of the device from which the sensor data originates.

***

### rawData? {#rawdata}

> `optional` **rawData?**: `string`

(Optional) Storage/service location of the raw sensor data on which the
aggregated/business-oriented data contained in the sensorElement is based.

***

### dataProcessingMethod? {#dataprocessingmethod}

> `optional` **dataProcessingMethod?**: `string`

(Optional) Storage location of an electronic document accommodating the data
processing method of the contained sensor data, if applicable.

***

### bizRules? {#bizrules}

> `optional` **bizRules?**: `string`

(Optional) Storage location of an electronic document accommodating product- or
application-specific business rules on which basis the EPCIS event was
triggered.

***

### time? {#time}

> `optional` **time?**: `string`

(Optional) The actual point in time of an observation as transmitted by a
sensor device.

***

### microorganism? {#microorganism}

> `optional` **microorganism?**: `string`

(Optional) Identifies a specific microorganism species; SHALL NOT be present
if chemicalSubstance is included.

***

### chemicalSubstance? {#chemicalsubstance}

> `optional` **chemicalSubstance?**: `string`

(Optional) Identifies a specific chemical substance; SHALL NOT be present
together with microorganism.

***

### coordinateReferenceSystem? {#coordinatereferencesystem}

> `optional` **coordinateReferenceSystem?**: `string`

(Optional) A URI identifying the Coordinate Reference System; if omitted,
WGS-84 is assumed.

***

### value? {#value}

> `optional` **value?**: `number`

(Optional) Value of the property specified by the type; if a time field is
present, it pertains to that time, otherwise to the eventTime.

***

### component? {#component}

> `optional` **component?**: `string`

(Optional) Vector component identifier for measurements with magnitude and
direction (e.g. force, pressure); repeat SensorReport per component.

***

### stringValue? {#stringvalue}

> `optional` **stringValue?**: `string`

(Optional) The String value of the property specified by the type as part of
the sensorReport element.

***

### booleanValue? {#booleanvalue}

> `optional` **booleanValue?**: `boolean`

(Optional) Similar to stringValue, for Boolean value.

***

### hexBinaryValue? {#hexbinaryvalue}

> `optional` **hexBinaryValue?**: `string`

(Optional) Similar to stringValue, for HexBinary value.

***

### uriValue? {#urivalue}

> `optional` **uriValue?**: `string`

(Optional) Similar to stringValue, for a URI value.

***

### minValue? {#minvalue}

> `optional` **minValue?**: `number`

(Optional) Minimum quantitative value of the property specified by type, as
part of the sensorReport element.

***

### maxValue? {#maxvalue}

> `optional` **maxValue?**: `number`

(Optional) Similar to minValue, for the maximum quantitative value.

***

### meanValue? {#meanvalue}

> `optional` **meanValue?**: `number`

(Optional) The arithmetic mean of the values of the property specified by the
type as part of the sensorReport element.

***

### sDev? {#sdev}

> `optional` **sDev?**: `number`

(Optional) Standard deviation of the values of the property specified by type,
as part of the sensorReport element.

***

### percRank? {#percrank}

> `optional` **percRank?**: `number`

(Optional) Percentile rank, signifying the percentage of observations in a
frequency distribution that are equal to or lower than it.

***

### percValue? {#percvalue}

> `optional` **percValue?**: `number`

(Optional) The percentile value, at or below which a given percentage of
observations may be found.

***

### uom? {#uom}

> `optional` **uom?**: `string`

(Optional) Unit of measure by which the specified value(s) of the property
specified by type should be interpreted.
