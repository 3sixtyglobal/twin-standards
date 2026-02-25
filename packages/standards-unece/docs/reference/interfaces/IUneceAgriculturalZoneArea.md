# Interface: IUneceAgriculturalZoneArea

A named, delimited and identified part of a land and or water surface of the globe subject to dedicated uniform
agricultural treatment.

## See

https://vocabulary.uncefact.org/AgriculturalZoneArea

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"AgriculturalZoneArea"`

JSON-LD Type.

***

### applicableAgriculturalCharacteristic?

> `optional` **applicableAgriculturalCharacteristic**: [`IUneceAgriculturalCharacteristic`](IUneceAgriculturalCharacteristic.md)[]

An agricultural characteristic applicable to this agricultural zone area.

#### See

https://vocabulary.uncefact.org/applicableAgriculturalCharacteristic

***

### appliedAgriculturalApplication?

> `optional` **appliedAgriculturalApplication**: [`IUneceAgriculturalApplication`](IUneceAgriculturalApplication.md)[]

A specified agricultural application applied to this agricultural zone area.

#### See

https://vocabulary.uncefact.org/appliedAgriculturalApplication

***

### designatedSection?

> `optional` **designatedSection**: `string`

The designated section, expressed as text, of this agricultural zone area.

#### See

https://vocabulary.uncefact.org/designatedSection

***

### harvestedProduce?

> `optional` **harvestedProduce**: [`IUneceProduce`](IUneceProduce.md)[]

Crop produce harvested from this agricultural zone area.

#### See

https://vocabulary.uncefact.org/harvestedProduce

***

### identifier

> **identifier**: `string`

The identifier for this agricultural zone area.

#### See

https://vocabulary.uncefact.org/identifier

***

### multiSurfaceTypeCode?

> `optional` **multiSurfaceTypeCode**: `string`

The code specifying the multi-surface type for this agricultural zone area.

#### See

https://vocabulary.uncefact.org/multiSurfaceTypeCode

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this agricultural zone area.

#### See

https://vocabulary.uncefact.org/name

***

### specifiedLocation?

> `optional` **specifiedLocation**: [`IUneceLocation`](IUneceLocation.md)

The referenced location specified for this agricultural zone area.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### specifiedPlot?

> `optional` **specifiedPlot**: [`IUnecePlot`](IUnecePlot.md)[]

A crop plot specified for this agricultural zone area.

#### See

https://vocabulary.uncefact.org/specifiedPlot

***

### subordinateArea?

> `optional` **subordinateArea**: `IUneceAgriculturalZoneArea`[]

An agricultural zone area subordinate to this agricultural zone area.

#### See

https://vocabulary.uncefact.org/subordinateArea

***

### thirdPartyIssuedId?

> `optional` **thirdPartyIssuedId**: `string`

An identifier issued by a third party for this agricultural zone area.

#### See

https://vocabulary.uncefact.org/thirdPartyIssuedId
