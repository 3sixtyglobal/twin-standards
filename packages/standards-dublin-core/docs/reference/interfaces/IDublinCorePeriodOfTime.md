# Interface: IDublinCorePeriodOfTime

Interface for Dublin Core Terms Period of Time.
An interval of time that is named or defined by its start and end dates.

## See

https://www.dublincore.org/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/PeriodOfTime

## Properties

### @type?

> `optional` **@type**: `"PeriodOfTime"`

The type identifier for PeriodOfTime.

***

### dcat:startDate?

> `optional` **dcat:startDate**: `string`

The start date of the period.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:period_start_date

***

### dcat:endDate?

> `optional` **dcat:endDate**: `string`

The end date of the period.

#### See

https://www.w3.org/TR/vocab-dcat-3/#Property:period_end_date

***

### time:hasBeginning?

> `optional` **time:hasBeginning**: `string`

The beginning of a period or interval.

#### See

https://www.w3.org/TR/owl-time/#time:hasBeginning

***

### time:hasEnd?

> `optional` **time:hasEnd**: `string`

The end of a period or interval.

#### See

https://www.w3.org/TR/owl-time/#time:hasEnd
