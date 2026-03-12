# Interface: IUneceAgriculturalApplication

Any substance such as seed, fertilizer, water, gas or chemical applied to an agricultural field, substrate,
construction, plant, animal or product.

## See

https://vocabulary.uncefact.org/AgriculturalApplication

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AgriculturalApplication"`

JSON-LD Type.

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this agricultural application.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### appliedArea? {#appliedarea}

> `optional` **appliedArea**: [`IUneceAgriculturalZoneArea`](IUneceAgriculturalZoneArea.md)[]

A specified agricultural application applied to this agricultural zone area.

#### See

https://vocabulary.uncefact.org/appliedArea

***

### appliedCertificate? {#appliedcertificate}

> `optional` **appliedCertificate**: [`IUneceAgriculturalCertificate`](IUneceAgriculturalCertificate.md)[]

An agricultural certificate applied to this specified agricultural application.

#### See

https://vocabulary.uncefact.org/appliedCertificate

***

### appliedChemicalTreatment? {#appliedchemicaltreatment}

> `optional` **appliedChemicalTreatment**: [`IUneceSpecifiedChemicalTreatment`](IUneceSpecifiedChemicalTreatment.md)[]

A specified chemical treatment applied to this agricultural application.

#### See

https://vocabulary.uncefact.org/appliedChemicalTreatment

***

### appliedMaterial? {#appliedmaterial}

> `optional` **appliedMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Specified material applied to this agricultural application.

#### See

https://vocabulary.uncefact.org/appliedMaterial

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this specified agricultural application.

#### See

https://vocabulary.uncefact.org/identifier

***

### specifiedLocation? {#specifiedlocation}

> `optional` **specifiedLocation**: [`IUneceLocation`](IUneceLocation.md)[]

A referenced location specified for this specified agricultural application.

#### See

https://vocabulary.uncefact.org/specifiedLocation

***

### specifiedPlot? {#specifiedplot}

> `optional` **specifiedPlot**: [`IUnecePlot`](IUnecePlot.md)[]

A crop plot specified for this agricultural application.

#### See

https://vocabulary.uncefact.org/specifiedPlot

***

### specifiedProductBatch? {#specifiedproductbatch}

> `optional` **specifiedProductBatch**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

A product batch specified for this specified agricultural application.

#### See

https://vocabulary.uncefact.org/specifiedProductBatch
