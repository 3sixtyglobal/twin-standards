# Interface: IUneceObservationResultCharacteristic

Specifies the type of the performed observation and the acquired values of this observation on the sample.

## See

https://vocabulary.uncefact.org/ObservationResultCharacteristic

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"ObservationResultCharacteristic"`

JSON-LD Type.

***

### appliedDilutionNumeric?

> `optional` **appliedDilutionNumeric**: `string`

The rate of the applied dilution for this sample observation result characteristic.

#### See

https://vocabulary.uncefact.org/appliedDilutionNumeric

***

### comparisonOperatorCode?

> `optional` **comparisonOperatorCode**: `string`

The code specifying the operator, such as less than, greater than or equal to, for comparing the measured value for this
sample observation result characteristic.

#### See

https://vocabulary.uncefact.org/comparisonOperatorCode

***

### interpretationResultApplicableParameter?

> `optional` **interpretationResultApplicableParameter**: [`IUneceObservationObjectiveParameter`](IUneceObservationObjectiveParameter.md)[]

An applicable observation objective parameter of the interpretation result for this sample observation result
characteristic.

#### See

https://vocabulary.uncefact.org/interpretationResultApplicableParameter

***

### measuredAccuracyMeasure?

> `optional` **measuredAccuracyMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

Accuracy, expressed as a measure, of the measurement for this sample observation result characteristic.

#### See

https://vocabulary.uncefact.org/measuredAccuracyMeasure

***

### measuredValue?

> `optional` **measuredValue**: `string`

The measured value, expressed as text, for this sample observation result characteristic.

#### See

https://vocabulary.uncefact.org/measuredValue

***

### measuredValueMeasure?

> `optional` **measuredValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measured value, expressed as a measure, for this sample observation result characteristic.

#### See

https://vocabulary.uncefact.org/measuredValueMeasure

***

### methodParameterId?

> `optional` **methodParameterId**: `string`

The identifier of the method parameter for this sample observation result characteristic.

#### See

https://vocabulary.uncefact.org/methodParameterId

***

### parameterValue?

> `optional` **parameterValue**: `string`

The parameter value, expressed as text, for this sample observation result characteristic.

#### See

https://vocabulary.uncefact.org/parameterValue

***

### qualityResultCode?

> `optional` **qualityResultCode**: `string`

The code specifying the quality of the result for this sample observation result characteristic.

#### See

https://vocabulary.uncefact.org/qualityResultCode

***

### qualityResultDescription?

> `optional` **qualityResultDescription**: `string`

The textual description of the quality of the result for this sample observation result characteristic.

#### See

https://vocabulary.uncefact.org/qualityResultDescription

***

### range?

> `optional` **range**: `string`

The range, expressed as text, of the values of the measurements performed for this observation result characteristic
sample.

#### See

https://vocabulary.uncefact.org/range

***

### referenceLevelQualityResultDescription?

> `optional` **referenceLevelQualityResultDescription**: `string`

The textual description of the reference level for the quality of the result for this sample observation result
characteristic.

#### See

https://vocabulary.uncefact.org/referenceLevelQualityResultDescription

***

### shareableIndicator?

> `optional` **shareableIndicator**: `boolean`

The indication of whether or not this sample observation result characteristic is shareable.

#### See

https://vocabulary.uncefact.org/shareableIndicator
