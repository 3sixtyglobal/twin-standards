# Interface: IUneceAppliedChemicalTreatment

A process of applying a chemical, physical, or biological agent to an object.

## See

https://vocabulary.uncefact.org/AppliedChemicalTreatment

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AppliedChemicalTreatment"`

JSON-LD Type.

***

### applicableSpecifiedTemperature? {#applicablespecifiedtemperature}

> `optional` **applicableSpecifiedTemperature**: [`IUneceSpecifiedTemperature`](IUneceSpecifiedTemperature.md)

The specified temperature applicable for this applied chemical treatment.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedTemperature

***

### appliedPeriod? {#appliedperiod}

> `optional` **appliedPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A period during which this chemical treatment is applied.

#### See

https://vocabulary.uncefact.org/appliedPeriod

***

### chemicalConcentrationMeasure? {#chemicalconcentrationmeasure}

> `optional` **chemicalConcentrationMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the chemical concentration of this applied chemical treatment.

#### See

https://vocabulary.uncefact.org/chemicalConcentrationMeasure

***

### methodName? {#methodname}

> `optional` **methodName**: `string`

The name, expressed as text, of the method of this applied chemical treatment.

#### See

https://vocabulary.uncefact.org/methodName

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, of this applied chemical treatment.

#### See

https://vocabulary.uncefact.org/name

***

### occurrenceDateTime? {#occurrencedatetime}

> `optional` **occurrenceDateTime**: `string`

The date time of the occurrence of this applied chemical treatment.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### resultAuthentication? {#resultauthentication}

> `optional` **resultAuthentication**: [`IUneceAuthentication`](IUneceAuthentication.md)

The authentication of the results of this applied chemical treatment.

#### See

https://vocabulary.uncefact.org/resultAuthentication

***

### resultNote? {#resultnote}

> `optional` **resultNote**: [`IUneceNote`](IUneceNote.md)

The note describing the results of this applied chemical treatment.

#### See

https://vocabulary.uncefact.org/resultNote

***

### unitChemicalConcentrationMeasure? {#unitchemicalconcentrationmeasure}

> `optional` **unitChemicalConcentrationMeasure**: [`IUneceUnitMeasureType`](IUneceUnitMeasureType.md)[]

A measure of the chemical concentration of this applied chemical treatment.

#### See

https://vocabulary.uncefact.org/unitChemicalConcentrationMeasure

***

### usedChemical? {#usedchemical}

> `optional` **usedChemical**: [`IUneceChemical`](IUneceChemical.md)[]

A chemical used during this applied chemical treatment.

#### See

https://vocabulary.uncefact.org/usedChemical
