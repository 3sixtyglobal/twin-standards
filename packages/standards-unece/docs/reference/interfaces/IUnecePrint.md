# Interface: IUnecePrint

Any text or pattern put on the surface of a product using a specific material such as dye.

## See

https://vocabulary.uncefact.org/Print

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Print"`

JSON-LD Type.

***

### applicableMaterial? {#applicablematerial}

> `optional` **applicableMaterial?**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Material applicable to this product print.

#### See

https://vocabulary.uncefact.org/applicableMaterial

***

### applicableMethod? {#applicablemethod}

> `optional` **applicableMethod?**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A specified method applicable to this product print.

#### See

https://vocabulary.uncefact.org/applicableMethod

***

### applicableProductionDevice? {#applicableproductiondevice}

> `optional` **applicableProductionDevice?**: [`IUneceProductionDevice`](IUneceProductionDevice.md)[]

A production device applicable to this product print.

#### See

https://vocabulary.uncefact.org/applicableProductionDevice

***

### applicableTechnicalCharacteristic? {#applicabletechnicalcharacteristic}

> `optional` **applicableTechnicalCharacteristic?**: [`IUneceTechnicalCharacteristic`](IUneceTechnicalCharacteristic.md)[]

A technical characteristic applicable to this product print.

#### See

https://vocabulary.uncefact.org/applicableTechnicalCharacteristic

***

### backgroundColourCode? {#backgroundcolourcode}

> `optional` **backgroundColourCode?**: `string`

The code specifying the background colour for this product print.

#### See

https://vocabulary.uncefact.org/backgroundColourCode

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this product print.

#### See

https://vocabulary.uncefact.org/description

***

### design? {#design}

> `optional` **design?**: `string`

A textual description of a design for this product print.

#### See

https://vocabulary.uncefact.org/design

***

### designCode? {#designcode}

> `optional` **designCode?**: `string`

The code specifying the design for this product print.

#### See

https://vocabulary.uncefact.org/designCode

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier of this product print.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, of this product print.

#### See

https://vocabulary.uncefact.org/name

***

### relatedParty? {#relatedparty}

> `optional` **relatedParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party related to this product print.

#### See

https://vocabulary.uncefact.org/relatedParty

***

### section? {#section}

> `optional` **section?**: `string`

A section, expressed as text, of this product print.

#### See

https://vocabulary.uncefact.org/section

***

### sectionCode? {#sectioncode}

> `optional` **sectionCode?**: `string`

The code specifying the section for this product print.

#### See

https://vocabulary.uncefact.org/sectionCode

***

### specifiedDocument? {#specifieddocument}

> `optional` **specifiedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document specified for this product print.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### specifiedMachine? {#specifiedmachine}

> `optional` **specifiedMachine?**: [`IUneceMachine`](IUneceMachine.md)[]

A production machine specified for this product print.

#### See

https://vocabulary.uncefact.org/specifiedMachine

***

### testIndicator? {#testindicator}

> `optional` **testIndicator?**: `boolean`

The indication of whether or not this product print is a test.

#### See

https://vocabulary.uncefact.org/testIndicator

***

### textContent? {#textcontent}

> `optional` **textContent?**: `string`

A textual description of the content for this product print.

#### See

https://vocabulary.uncefact.org/textContent

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of product print.

#### See

https://vocabulary.uncefact.org/typeCode
