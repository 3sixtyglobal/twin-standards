# Interface: IUneceLaboratoryObservationAnalysisMethod

A defined way of performing laboratory observation analysis.

## See

https://vocabulary.uncefact.org/LaboratoryObservationAnalysisMethod

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"LaboratoryObservationAnalysisMethod"`

JSON-LD Type.

***

### certificationId?

> `optional` **certificationId**: `string`

The identifier for the certificate granted to a party for this laboratory observation analysis method.

#### See

https://vocabulary.uncefact.org/certificationId

***

### certificationTypeCode?

> `optional` **certificationTypeCode**: `string`

The code specifying the type of certification for this laboratory observation analysis method.

#### See

https://vocabulary.uncefact.org/certificationTypeCode

***

### externalReference?

> `optional` **externalReference**: `string`

The external reference, expressed as text, for this laboratory observation analysis method.

#### See

https://vocabulary.uncefact.org/externalReference

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this laboratory observation analysis method.

#### See

https://vocabulary.uncefact.org/identifier

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this laboratory observation analysis method.

#### See

https://vocabulary.uncefact.org/information

***

### localTypeCode?

> `optional` **localTypeCode**: `string`

The code specifying the type of laboratory observation analysis method, which is the local method of the observer party
for the kind of observation.

#### See

https://vocabulary.uncefact.org/localTypeCode

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this laboratory observation analysis method.

#### See

https://vocabulary.uncefact.org/name

***

### obligatoryTypeCode?

> `optional` **obligatoryTypeCode**: `string`

The code specifying the type of analysis method obligatory for the laboratory observation.

#### See

https://vocabulary.uncefact.org/obligatoryTypeCode

***

### sampledObjectMinimumRequiredObjectSizeMeasure?

> `optional` **sampledObjectMinimumRequiredObjectSizeMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the minimum object size required for this laboratory observation analysis method.

#### See

https://vocabulary.uncefact.org/sampledObjectMinimumRequiredObjectSizeMeasure

***

### standardTypeCode?

> `optional` **standardTypeCode**: `string`

The code specifying the type of laboratory observation analysis method, which is the standard method of the observer
party for the kind of observation, such as a Logical Observation Identifiers Names and Codes (LOINC) code and method.

#### See

https://vocabulary.uncefact.org/standardTypeCode
