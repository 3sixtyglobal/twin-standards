# Interface: IUnecePlot

A small piece of land or water used for a crop such as an agricultural or aquacultural crop.

## See

https://vocabulary.uncefact.org/Plot

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Plot"`

JSON-LD Type.

***

### applicableAgriculturalProcess? {#applicableagriculturalprocess}

> `optional` **applicableAgriculturalProcess**: [`IUneceAgriculturalProcess`](IUneceAgriculturalProcess.md)[]

An agricultural process crop production specified for this crop plot.

#### See

https://vocabulary.uncefact.org/applicableAgriculturalProcess

***

### appliedAgriculturalApplication? {#appliedagriculturalapplication}

> `optional` **appliedAgriculturalApplication**: [`IUneceAgriculturalApplication`](IUneceAgriculturalApplication.md)[]

A specified agricultural application applied to this crop plot.

#### See

https://vocabulary.uncefact.org/appliedAgriculturalApplication

***

### areaMeasure? {#areameasure}

> `optional` **areaMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The area measure for this crop plot.

#### See

https://vocabulary.uncefact.org/areaMeasure

***

### endDateTime? {#enddatetime}

> `optional` **endDateTime**: `string`

The date, time, date time, or other date time value for the end of this crop plot.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### grownCrop? {#growncrop}

> `optional` **grownCrop**: [`IUneceFieldCrop`](IUneceFieldCrop.md)[]

A field crop grown on this crop plot.

#### See

https://vocabulary.uncefact.org/grownCrop

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this crop plot.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedPlot? {#includedplot}

> `optional` **includedPlot**: `IUnecePlot`[]

A crop plot included in this crop plot.

#### See

https://vocabulary.uncefact.org/includedPlot

***

### regulatoryOrganicIndicator? {#regulatoryorganicindicator}

> `optional` **regulatoryOrganicIndicator**: `boolean`

The indication of whether or not this crop plot is certified as regulatory organic.

#### See

https://vocabulary.uncefact.org/regulatoryOrganicIndicator

***

### regulatorySoilTypeCode? {#regulatorysoiltypecode}

> `optional` **regulatorySoilTypeCode**: `string`

The code specifying the type of regulatory soil for this crop plot.

#### See

https://vocabulary.uncefact.org/regulatorySoilTypeCode

***

### specifiedAgriculturalCertificate? {#specifiedagriculturalcertificate}

> `optional` **specifiedAgriculturalCertificate**: [`IUneceAgriculturalCertificate`](IUneceAgriculturalCertificate.md)[]

An agricultural certificate specified for this crop plot.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalCertificate

***

### specifiedAgriculturalCharacteristic? {#specifiedagriculturalcharacteristic}

> `optional` **specifiedAgriculturalCharacteristic**: [`IUneceAgriculturalCharacteristic`](IUneceAgriculturalCharacteristic.md)[]

An agricultural characteristic specified for this crop plot.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic

***

### specifiedAgriculturalZoneArea? {#specifiedagriculturalzonearea}

> `optional` **specifiedAgriculturalZoneArea**: [`IUneceAgriculturalZoneArea`](IUneceAgriculturalZoneArea.md)[]

An agricultural zone area specified for this crop plot.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalZoneArea

***

### ~~specifiedArea?~~ {#specifiedarea}

> `optional` **specifiedArea**: [`IUneceArea`](IUneceArea.md)[]

An agricultural zone area specified for this crop plot.

#### See

https://vocabulary.uncefact.org/specifiedArea

#### Deprecated

***

### specifiedLocation? {#specifiedlocation}

> `optional` **specifiedLocation**: [`IUneceLocation`](IUneceLocation.md)

The referenced location specified for this crop plot.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### startDateTime? {#startdatetime}

> `optional` **startDateTime**: `string`

The date, time, date time, or other date time value for the start of this crop plot.

#### See

https://vocabulary.uncefact.org/startDateTime
