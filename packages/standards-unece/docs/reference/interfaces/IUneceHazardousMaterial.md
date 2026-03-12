# Interface: IUneceHazardousMaterial

Material which exhibits adverse effects on living organisms.

## See

https://vocabulary.uncefact.org/HazardousMaterial

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"HazardousMaterial"`

JSON-LD Type.

***

### applicableProductCertificate? {#applicableproductcertificate}

> `optional` **applicableProductCertificate**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate applicable to this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/applicableProductCertificate

***

### applicableProductCharacteristic? {#applicableproductcharacteristic}

> `optional` **applicableProductCharacteristic**: [`IUneceProductCharacteristic`](IUneceProductCharacteristic.md)[]

A product characteristic applicable to this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/applicableProductCharacteristic

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### biologicalSeverityDescription? {#biologicalseveritydescription}

> `optional` **biologicalSeverityDescription**: `string`

The textual description of the biological severity of this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/biologicalSeverityDescription

***

### description? {#description}

> `optional` **description**: `string`

The textual description of this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/description

***

### entryRouteDescription? {#entryroutedescription}

> `optional` **entryRouteDescription**: `string`

A textual description of the entry route of this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/entryRouteDescription

***

### reproductiveToxinName? {#reproductivetoxinname}

> `optional` **reproductiveToxinName**: `string`

The name, expressed as text, of the reproductive toxin in this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/reproductiveToxinName
