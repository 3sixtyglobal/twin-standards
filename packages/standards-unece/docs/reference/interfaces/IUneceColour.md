# Interface: IUneceColour

A colour of a product.

## See

https://vocabulary.uncefact.org/Colour

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Colour"`

JSON-LD Type.

***

### applicableMachine? {#applicablemachine}

> `optional` **applicableMachine**: [`IUneceMachine`](IUneceMachine.md)[]

A production machine applicable to this product colour.

#### See

https://vocabulary.uncefact.org/applicableMachine

***

### applicableMaterial? {#applicablematerial}

> `optional` **applicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Specified material applicable to this product colour.

#### See

https://vocabulary.uncefact.org/applicableMaterial

***

### applicableMethod? {#applicablemethod}

> `optional` **applicableMethod**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A specified method applicable to this product colour.

#### See

https://vocabulary.uncefact.org/applicableMethod

***

### applicableProductionDevice? {#applicableproductiondevice}

> `optional` **applicableProductionDevice**: [`IUneceProductionDevice`](IUneceProductionDevice.md)[]

A production device applicable to this product colour.

#### See

https://vocabulary.uncefact.org/applicableProductionDevice

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this product colour.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableTechnicalCharacteristic? {#applicabletechnicalcharacteristic}

> `optional` **applicableTechnicalCharacteristic**: [`IUneceTechnicalCharacteristic`](IUneceTechnicalCharacteristic.md)[]

A technical characteristic applicable to this product colour.

#### See

https://vocabulary.uncefact.org/applicableTechnicalCharacteristic

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this product colour.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this product colour.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, of this product colour.

#### See

https://vocabulary.uncefact.org/name

***

### presencePercent? {#presencepercent}

> `optional` **presencePercent**: `string`

The percentage of the presence of this product colour.

#### See

https://vocabulary.uncefact.org/presencePercent

***

### relatedParty? {#relatedparty}

> `optional` **relatedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party related to this product colour.

#### See

https://vocabulary.uncefact.org/relatedParty

***

### specifiedDocument? {#specifieddocument}

> `optional` **specifiedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document specified for this product colour.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### testIndicator? {#testindicator}

> `optional` **testIndicator**: `boolean`

The indication of whether or not this product colour is a test.

#### See

https://vocabulary.uncefact.org/testIndicator

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of product colour.

#### See

https://vocabulary.uncefact.org/typeCode

***

### usedLightSourceCode? {#usedlightsourcecode}

> `optional` **usedLightSourceCode**: `string`

The code specifying the light source used for this product colour.

#### See

https://vocabulary.uncefact.org/usedLightSourceCode

***

### variationMeasureCoefficientNumeric? {#variationmeasurecoefficientnumeric}

> `optional` **variationMeasureCoefficientNumeric**: `string`

The measure of the variation coefficient number for this product colour.

#### See

https://vocabulary.uncefact.org/variationMeasureCoefficientNumeric
