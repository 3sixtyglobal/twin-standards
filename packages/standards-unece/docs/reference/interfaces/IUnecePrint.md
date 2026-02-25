# Interface: IUnecePrint

Any text or pattern put on the surface of a product using a specific material such as dye.

## See

https://vocabulary.uncefact.org/Print

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Print"`

JSON-LD Type.

***

### applicableMaterial?

> `optional` **applicableMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Material applicable to this product print.

#### See

https://vocabulary.uncefact.org/applicableMaterial

***

### applicableMethod?

> `optional` **applicableMethod**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A specified method applicable to this product print.

#### See

https://vocabulary.uncefact.org/applicableMethod

***

### applicableProductionDevice?

> `optional` **applicableProductionDevice**: [`IUneceProductionDevice`](IUneceProductionDevice.md)[]

A production device applicable to this product print.

#### See

https://vocabulary.uncefact.org/applicableProductionDevice

***

### applicableTechnicalCharacteristic?

> `optional` **applicableTechnicalCharacteristic**: [`IUneceTechnicalCharacteristic`](IUneceTechnicalCharacteristic.md)[]

A technical characteristic applicable to this product print.

#### See

https://vocabulary.uncefact.org/applicableTechnicalCharacteristic

***

### backgroundColourCode?

> `optional` **backgroundColourCode**: `string`

The code specifying the background colour for this product print.

#### See

https://vocabulary.uncefact.org/backgroundColourCode

***

### description?

> `optional` **description**: `string`

A textual description of this product print.

#### See

https://vocabulary.uncefact.org/description

***

### design?

> `optional` **design**: `string`

A textual description of a design for this product print.

#### See

https://vocabulary.uncefact.org/design

***

### designCode?

> `optional` **designCode**: `string`

The code specifying the design for this product print.

#### See

https://vocabulary.uncefact.org/designCode

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this product print.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this product print.

#### See

https://vocabulary.uncefact.org/name

***

### relatedParty?

> `optional` **relatedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party related to this product print.

#### See

https://vocabulary.uncefact.org/relatedParty

***

### section?

> `optional` **section**: `string`

A section, expressed as text, of this product print.

#### See

https://vocabulary.uncefact.org/section

***

### sectionCode?

> `optional` **sectionCode**: `string`

The code specifying the section for this product print.

#### See

https://vocabulary.uncefact.org/sectionCode

***

### specifiedDocument?

> `optional` **specifiedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document specified for this product print.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### specifiedMachine?

> `optional` **specifiedMachine**: [`IUneceMachine`](IUneceMachine.md)[]

A production machine specified for this product print.

#### See

https://vocabulary.uncefact.org/specifiedMachine

***

### testIndicator?

> `optional` **testIndicator**: `boolean`

The indication of whether or not this product print is a test.

#### See

https://vocabulary.uncefact.org/testIndicator

***

### textContent?

> `optional` **textContent**: `string`

A textual description of the content for this product print.

#### See

https://vocabulary.uncefact.org/textContent

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of product print.

#### See

https://vocabulary.uncefact.org/typeCode
