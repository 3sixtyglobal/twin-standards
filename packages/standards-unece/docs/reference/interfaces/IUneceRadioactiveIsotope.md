# Interface: IUneceRadioactiveIsotope

Any of several species of the same chemical element with different masses whose nuclei are unstable and dissipate excess
energy by spontaneously emitting radiation in the form of alpha, beta, or gamma rays.

## See

https://vocabulary.uncefact.org/RadioactiveIsotope

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"RadioactiveIsotope"`

JSON-LD Type.

***

### activityLevelMeasure? {#activitylevelmeasure}

> `optional` **activityLevelMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the activity level of this specified radioactive isotope.

#### See

https://vocabulary.uncefact.org/activityLevelMeasure

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, for this specified radioactive isotope, such as C14.

#### See

https://vocabulary.uncefact.org/name

***

### note? {#note}

> `optional` **note?**: `string`

A note, expressed as text, for this specified radioactive isotope.

#### See

https://vocabulary.uncefact.org/note

***

### specifiedRadionuclide? {#specifiedradionuclide}

> `optional` **specifiedRadionuclide?**: [`IUneceRadionuclide`](IUneceRadionuclide.md)[]

The radionuclide details specified for this radioactive isotope.

#### See

https://vocabulary.uncefact.org/specifiedRadionuclide

***

### unitActivityLevelMeasure? {#unitactivitylevelmeasure}

> `optional` **unitActivityLevelMeasure?**: [`IUneceUnitMeasureType`](IUneceUnitMeasureType.md)[]

A measure of the activity level of this specified radioactive isotope.

#### See

https://vocabulary.uncefact.org/unitActivityLevelMeasure
