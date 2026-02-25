# Interface: IUneceColour

A colour of a product.

## See

https://vocabulary.uncefact.org/Colour

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Colour"`

JSON-LD Type.

***

### applicableMachine?

> `optional` **applicableMachine**: [`IUneceMachine`](IUneceMachine.md)[]

A production machine applicable to this product colour.

#### See

https://vocabulary.uncefact.org/applicableMachine

***

### applicableMaterial?

> `optional` **applicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Specified material applicable to this product colour.

#### See

https://vocabulary.uncefact.org/applicableMaterial

***

### applicableMethod?

> `optional` **applicableMethod**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A specified method applicable to this product colour.

#### See

https://vocabulary.uncefact.org/applicableMethod

***

### applicableProductionDevice?

> `optional` **applicableProductionDevice**: [`IUneceProductionDevice`](IUneceProductionDevice.md)[]

A production device applicable to this product colour.

#### See

https://vocabulary.uncefact.org/applicableProductionDevice

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this product colour.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableTechnicalCharacteristic?

> `optional` **applicableTechnicalCharacteristic**: [`IUneceTechnicalCharacteristic`](IUneceTechnicalCharacteristic.md)[]

A technical characteristic applicable to this product colour.

#### See

https://vocabulary.uncefact.org/applicableTechnicalCharacteristic

***

### description?

> `optional` **description**: `string`

A textual description of this product colour.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this product colour.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this product colour.

#### See

https://vocabulary.uncefact.org/name

***

### presencePercent?

> `optional` **presencePercent**: `string`

The percentage of the presence of this product colour.

#### See

https://vocabulary.uncefact.org/presencePercent

***

### relatedParty?

> `optional` **relatedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party related to this product colour.

#### See

https://vocabulary.uncefact.org/relatedParty

***

### specifiedDocument?

> `optional` **specifiedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document specified for this product colour.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### testIndicator?

> `optional` **testIndicator**: `boolean`

The indication of whether or not this product colour is a test.

#### See

https://vocabulary.uncefact.org/testIndicator

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of product colour.

#### See

https://vocabulary.uncefact.org/typeCode

***

### usedLightSourceCode?

> `optional` **usedLightSourceCode**: `string`

The code specifying the light source used for this product colour.

#### See

https://vocabulary.uncefact.org/usedLightSourceCode

***

### variationMeasureCoefficientNumeric?

> `optional` **variationMeasureCoefficientNumeric**: `string`

The measure of the variation coefficient number for this product colour.

#### See

https://vocabulary.uncefact.org/variationMeasureCoefficientNumeric
