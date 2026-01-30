# Interface: IUnecePlot

A small piece of land or water used for a crop such as an agricultural or aquacultural crop.

## See

https://vocabulary.uncefact.org/Plot

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"Plot"`

JSON-LD Type.

***

### applicableAgriculturalProcess?

> `optional` **applicableAgriculturalProcess**: [`IUneceAgriculturalProcess`](IUneceAgriculturalProcess.md)[]

An agricultural process crop production specified for this crop plot.

#### See

https://vocabulary.uncefact.org/applicableAgriculturalProcess

***

### appliedAgriculturalApplication?

> `optional` **appliedAgriculturalApplication**: [`IUneceAgriculturalApplication`](IUneceAgriculturalApplication.md)[]

A specified agricultural application applied to this crop plot.

#### See

https://vocabulary.uncefact.org/appliedAgriculturalApplication

***

### areaMeasure?

> `optional` **areaMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The area measure for this crop plot.

#### See

https://vocabulary.uncefact.org/areaMeasure

***

### endDateTime?

> `optional` **endDateTime**: `string`

The date, time, date time, or other date time value for the end of this crop plot.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### grownCrop?

> `optional` **grownCrop**: [`IUneceFieldCrop`](IUneceFieldCrop.md)[]

A field crop grown on this crop plot.

#### See

https://vocabulary.uncefact.org/grownCrop

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this crop plot.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedPlot?

> `optional` **includedPlot**: `IUnecePlot`[]

A crop plot included in this crop plot.

#### See

https://vocabulary.uncefact.org/includedPlot

***

### regulatoryOrganicIndicator?

> `optional` **regulatoryOrganicIndicator**: `boolean`

The indication of whether or not this crop plot is certified as regulatory organic.

#### See

https://vocabulary.uncefact.org/regulatoryOrganicIndicator

***

### regulatorySoilTypeCode?

> `optional` **regulatorySoilTypeCode**: `string`

The code specifying the type of regulatory soil for this crop plot.

#### See

https://vocabulary.uncefact.org/regulatorySoilTypeCode

***

### specifiedAgriculturalCertificate?

> `optional` **specifiedAgriculturalCertificate**: [`IUneceAgriculturalCertificate`](IUneceAgriculturalCertificate.md)[]

An agricultural certificate specified for this crop plot.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalCertificate

***

### specifiedAgriculturalCharacteristic?

> `optional` **specifiedAgriculturalCharacteristic**: [`IUneceAgriculturalCharacteristic`](IUneceAgriculturalCharacteristic.md)[]

An agricultural characteristic specified for this crop plot.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalCharacteristic

***

### specifiedAgriculturalZoneArea?

> `optional` **specifiedAgriculturalZoneArea**: [`IUneceAgriculturalZoneArea`](IUneceAgriculturalZoneArea.md)[]

An agricultural zone area specified for this crop plot.

#### See

https://vocabulary.uncefact.org/specifiedAgriculturalZoneArea

***

### ~~specifiedArea?~~

> `optional` **specifiedArea**: [`IUneceArea`](IUneceArea.md)[]

An agricultural zone area specified for this crop plot.

#### See

https://vocabulary.uncefact.org/specifiedArea

#### Deprecated

***

### specifiedLocation?

> `optional` **specifiedLocation**: [`IUneceLocation`](IUneceLocation.md)[]

The referenced location specified for this crop plot.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### startDateTime?

> `optional` **startDateTime**: `string`

The date, time, date time, or other date time value for the start of this crop plot.

#### See

https://vocabulary.uncefact.org/startDateTime
