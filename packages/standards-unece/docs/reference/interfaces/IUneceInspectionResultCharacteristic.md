# Interface: IUneceInspectionResultCharacteristic

A property of a collection of diagnostic data, visual or technical data, obtained by a performed inspection.

## See

https://vocabulary.uncefact.org/InspectionResultCharacteristic

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

> **type**: `"InspectionResultCharacteristic"`

JSON-LD Type.

***

### applicableMethod?

> `optional` **applicableMethod**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A specified method applicable to this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/applicableMethod

***

### comparisonOperatorCode?

> `optional` **comparisonOperatorCode**: `string`

The code specifying the operator, such as less than, for comparing this inspection result characteristic with one or
more other characteristics.

#### See

https://vocabulary.uncefact.org/comparisonOperatorCode

***

### interpretationResultApplicableParameter?

> `optional` **interpretationResultApplicableParameter**: [`IUneceObservationObjectiveParameter`](IUneceObservationObjectiveParameter.md)[]

An applicable objective observation parameter of the interpretation result for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/interpretationResultApplicableParameter

***

### measuredAccuracyMeasure?

> `optional` **measuredAccuracyMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

Accuracy, expressed as a measure, of the measurement for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/measuredAccuracyMeasure

***

### measuredValue?

> `optional` **measuredValue**: `string`

The measured value, expressed as text, for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/measuredValue

***

### measuredValueMeasure?

> `optional` **measuredValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

A measured value for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/measuredValueMeasure

***

### qualityResultCode?

> `optional` **qualityResultCode**: `string`

The code specifying the quality of the result for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/qualityResultCode

***

### qualityResultDescription?

> `optional` **qualityResultDescription**: `string`

A textual description of the quality of the result for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/qualityResultDescription

***

### qualityResultReferenceLevelDescription?

> `optional` **qualityResultReferenceLevelDescription**: `string`

A textual description of the reference level for the quality of the result for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/qualityResultReferenceLevelDescription

***

### range?

> `optional` **range**: `string`

The range, expressed as text, of the values of the measurements performed for this inspection result characteristic.

#### See

https://vocabulary.uncefact.org/range
