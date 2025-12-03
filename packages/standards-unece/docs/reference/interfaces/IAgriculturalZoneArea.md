# Interface: IAgriculturalZoneArea

A named, delimited and identified part of a land and or water surface of the globe subject to dedicated uniform
agricultural treatment.

## See

https://vocabulary.uncefact.org/AgriculturalZoneArea

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

> **type**: `"AgriculturalZoneArea"`

JSON-LD Type.

***

### applicableAgriculturalCharacteristic?

> `optional` **applicableAgriculturalCharacteristic**: [`IAgriculturalCharacteristic`](IAgriculturalCharacteristic.md)[]

An agricultural characteristic applicable to this agricultural zone area.

#### See

https://vocabulary.uncefact.org/applicableAgriculturalCharacteristic

***

### appliedAgriculturalApplication?

> `optional` **appliedAgriculturalApplication**: [`IAgriculturalApplication`](IAgriculturalApplication.md)[]

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

> `optional` **harvestedProduce**: [`IProduce`](IProduce.md)[]

Crop produce harvested from this agricultural zone area.

#### See

https://vocabulary.uncefact.org/harvestedProduce

***

### identifier?

> `optional` **identifier**: `string`

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

> `optional` **specifiedLocation**: [`ILocation`](ILocation.md)[]

The referenced location specified for this agricultural zone area.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### specifiedPlot?

> `optional` **specifiedPlot**: [`IPlot`](IPlot.md)[]

A crop plot specified for this agricultural zone area.

#### See

https://vocabulary.uncefact.org/specifiedPlot

***

### subordinateArea?

> `optional` **subordinateArea**: `IAgriculturalZoneArea`[]

An agricultural zone area subordinate to this agricultural zone area.

#### See

https://vocabulary.uncefact.org/subordinateArea

***

### thirdPartyIssuedId?

> `optional` **thirdPartyIssuedId**: `string`

An identifier issued by a third party for this agricultural zone area.

#### See

https://vocabulary.uncefact.org/thirdPartyIssuedId
