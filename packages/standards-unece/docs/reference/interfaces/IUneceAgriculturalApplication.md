# Interface: IUneceAgriculturalApplication

Any substance such as seed, fertilizer, water, gas or chemical applied to an agricultural field, substrate,
construction, plant, animal or product.

## See

https://vocabulary.uncefact.org/AgriculturalApplication

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"AgriculturalApplication"`

JSON-LD Type.

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this agricultural application.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### appliedArea?

> `optional` **appliedArea**: [`IUneceAgriculturalZoneArea`](IUneceAgriculturalZoneArea.md)[]

A specified agricultural application applied to this agricultural zone area.

#### See

https://vocabulary.uncefact.org/appliedArea

***

### appliedCertificate?

> `optional` **appliedCertificate**: [`IUneceAgriculturalCertificate`](IUneceAgriculturalCertificate.md)[]

An agricultural certificate applied to this specified agricultural application.

#### See

https://vocabulary.uncefact.org/appliedCertificate

***

### appliedChemicalTreatment?

> `optional` **appliedChemicalTreatment**: [`IUneceSpecifiedChemicalTreatment`](IUneceSpecifiedChemicalTreatment.md)[]

A specified chemical treatment applied to this agricultural application.

#### See

https://vocabulary.uncefact.org/appliedChemicalTreatment

***

### appliedMaterial?

> `optional` **appliedMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Specified material applied to this agricultural application.

#### See

https://vocabulary.uncefact.org/appliedMaterial

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this specified agricultural application.

#### See

https://vocabulary.uncefact.org/identifier

***

### specifiedLocation?

> `optional` **specifiedLocation**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location specified for this specified agricultural application.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### specifiedPlot?

> `optional` **specifiedPlot**: [`IUnecePlot`](IUnecePlot.md)[]

A crop plot specified for this agricultural application.

#### See

https://vocabulary.uncefact.org/specifiedPlot

***

### specifiedProductBatch?

> `optional` **specifiedProductBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

A product batch specified for this specified agricultural application.

#### See

https://vocabulary.uncefact.org/specifiedProductBatch
