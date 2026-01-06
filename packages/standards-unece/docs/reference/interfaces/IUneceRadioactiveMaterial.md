# Interface: IUneceRadioactiveMaterial

Material capable of undergoing spontaneous nuclear decay involving emission of ionizing radiation in the form of
particles or gamma rays.

## See

https://vocabulary.uncefact.org/RadioactiveMaterial

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

> **type**: `"RadioactiveMaterial"`

JSON-LD Type.

***

### applicableRadioactiveIsotope?

> `optional` **applicableRadioactiveIsotope**: [`IUneceRadioactiveIsotope`](IUneceRadioactiveIsotope.md)[]

An isotope applicable to this radioactive material.

#### See

https://vocabulary.uncefact.org/applicableRadioactiveIsotope

***

### compositionDescription?

> `optional` **compositionDescription**: `string`

The textual description of the composition of this radioactive material.

#### See

https://vocabulary.uncefact.org/compositionDescription

***

### criticalitySafetyIndexNumeric?

> `optional` **criticalitySafetyIndexNumeric**: `string`

The criticality safety index number of this radioactive material.

#### See

https://vocabulary.uncefact.org/criticalitySafetyIndexNumeric

***

### fissileCriticalitySafetyIndexNumeric?

> `optional` **fissileCriticalitySafetyIndexNumeric**: `string`

The number (rounded up to the next tenth) assigned to and placed on the label of a fissile radioactive material package,
to designate the degree of control of accumulation of packages, overpacks or freight containers containing fissile
material during transportation.

#### See

https://vocabulary.uncefact.org/fissileCriticalitySafetyIndexNumeric

***

### fissileExceptionIndicator?

> `optional` **fissileExceptionIndicator**: `boolean`

The indication of whether or not this radioactive material is a fissile exception.

#### See

https://vocabulary.uncefact.org/fissileExceptionIndicator

***

### lowDispersibleInformation?

> `optional` **lowDispersibleInformation**: `string`

Information, expressed as text, describing the low dispersion properties of this radioactive material.

#### See

https://vocabulary.uncefact.org/lowDispersibleInformation

***

### radioactivePackageTransportIndexCode?

> `optional` **radioactivePackageTransportIndexCode**: `string`

A code specifying a package transport index for this radioactive material.

#### See

https://vocabulary.uncefact.org/radioactivePackageTransportIndexCode

***

### radionuclideName?

> `optional` **radionuclideName**: `string`

The name of the radionuclide, expressed as text, of this radioactive material.

#### See

https://vocabulary.uncefact.org/radionuclideName

***

### specialFormInformation?

> `optional` **specialFormInformation**: `string`

Information, expressed as text, describing the special form for this radioactive material.

#### See

https://vocabulary.uncefact.org/specialFormInformation

***

### transportIndexNumeric?

> `optional` **transportIndexNumeric**: `string`

The transport index number of this radioactive material.

#### See

https://vocabulary.uncefact.org/transportIndexNumeric

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of this radioactive material.

#### See

https://vocabulary.uncefact.org/typeCode
