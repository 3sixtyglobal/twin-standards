# Interface: IUneceInspectionResultCharacteristic

A property of a collection of diagnostic data, visual or technical data, obtained by a performed inspection.

## See

https://vocabulary.uncefact.org/InspectionResultCharacteristic

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"InspectionResultCharacteristic"`

JSON-LD Type.

***

### applicableMethod? {#applicablemethod}

> `optional` **applicableMethod?**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A specified method applicable to this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/applicableMethod

***

### comparisonOperatorCode? {#comparisonoperatorcode}

> `optional` **comparisonOperatorCode?**: `string`

The code specifying the operator, such as less than, for comparing this inspection result characteristic with one or
more other characteristics.

#### See

https://vocabulary.uncefact.org/comparisonOperatorCode

***

### interpretationResultApplicableParameter? {#interpretationresultapplicableparameter}

> `optional` **interpretationResultApplicableParameter?**: [`IUneceObservationObjectiveParameter`](IUneceObservationObjectiveParameter.md)[]

An applicable objective observation parameter of the interpretation result for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/interpretationResultApplicableParameter

***

### measuredAccuracyMeasure? {#measuredaccuracymeasure}

> `optional` **measuredAccuracyMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

Accuracy, expressed as a measure, of the measurement for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/measuredAccuracyMeasure

***

### measuredValue? {#measuredvalue}

> `optional` **measuredValue?**: `string`

The measured value, expressed as text, for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/measuredValue

***

### measuredValueMeasure? {#measuredvaluemeasure}

> `optional` **measuredValueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measured value for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/measuredValueMeasure

***

### qualityResultCode? {#qualityresultcode}

> `optional` **qualityResultCode?**: `string`

The code specifying the quality of the result for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/qualityResultCode

***

### qualityResultDescription? {#qualityresultdescription}

> `optional` **qualityResultDescription?**: `string`

A textual description of the quality of the result for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/qualityResultDescription

***

### qualityResultReferenceLevelDescription? {#qualityresultreferenceleveldescription}

> `optional` **qualityResultReferenceLevelDescription?**: `string`

A textual description of the reference level for the quality of the result for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/qualityResultReferenceLevelDescription

***

### range? {#range}

> `optional` **range?**: `string`

The range, expressed as text, of the values of the measurements performed for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/range
