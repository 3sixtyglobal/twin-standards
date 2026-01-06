# Interface: IUneceObservationResult

A collection of diagnostic data, visual or technical, and processing data, performed on a sample.

## See

https://vocabulary.uncefact.org/ObservationResult

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"ObservationResult"`

JSON-LD Type.

***

### actualObservationEndDateTime?

> `optional` **actualObservationEndDateTime**: `string`

The date, time, date time, or other date time value for the end of the observation for this sample observation result.

#### See

https://vocabulary.uncefact.org/actualObservationEndDateTime

***

### actualObservationStartDateTime?

> `optional` **actualObservationStartDateTime**: `string`

The date, time, date time, or other date time value for the start of the observation for this sample observation result.

#### See

https://vocabulary.uncefact.org/actualObservationStartDateTime

***

### applicableMethod?

> `optional` **applicableMethod**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A specified method applicable to this sample observation result.

#### See

https://vocabulary.uncefact.org/applicableMethod

***

### attachedLaboratoryObservationNote?

> `optional` **attachedLaboratoryObservationNote**: [`IUneceLaboratoryObservationNote`](IUneceLaboratoryObservationNote.md)[]

A note attached to the laboratory observation results with additional observations and or conclusions.

#### See

https://vocabulary.uncefact.org/attachedLaboratoryObservationNote

***

### authorizationParty?

> `optional` **authorizationParty**: [`IUneceLaboratoryObservationParty`](IUneceLaboratoryObservationParty.md)[]

The laboratory observation party who authorized this sample observation result.

#### See

https://vocabulary.uncefact.org/authorizationParty

***

### emergencyObservationIndicator?

> `optional` **emergencyObservationIndicator**: `boolean`

The indication of whether or not the observation was an emergency observation for this sample observation result.

#### See

https://vocabulary.uncefact.org/emergencyObservationIndicator

***

### expectedValueSpecifiedObservationResultCharacteristic?

> `optional` **expectedValueSpecifiedObservationResultCharacteristic**: [`IUneceObservationResultCharacteristic`](IUneceObservationResultCharacteristic.md)[]

An expected value for the characteristic, to be observed or measured according to the specified type of observation for
this sample observation result.

#### See

https://vocabulary.uncefact.org/expectedValueSpecifiedObservationResultCharacteristic

***

### generalCharacteristic?

> `optional` **generalCharacteristic**: `string`

The general characteristic, expressed as text, for this sample observation result, such as length, volume, density,
titre, sensitivity, conductivity.

#### See

https://vocabulary.uncefact.org/generalCharacteristic

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this sample observation result.

#### See

https://vocabulary.uncefact.org/identifier

***

### interpretationResultApplicableParameter?

> `optional` **interpretationResultApplicableParameter**: [`IUneceObservationObjectiveParameter`](IUneceObservationObjectiveParameter.md)[]

An applicable observation objective parameter of the interpretation result for this sample observation result.

#### See

https://vocabulary.uncefact.org/interpretationResultApplicableParameter

***

### laboratoryAnalysisRequestSpecifiedReference?

> `optional` **laboratoryAnalysisRequestSpecifiedReference**: [`IUneceLaboratoryObservationReference`](IUneceLaboratoryObservationReference.md)[]

A laboratory observation analysis request reference specified for this sample observation result.

#### See

https://vocabulary.uncefact.org/laboratoryAnalysisRequestSpecifiedReference

***

### materialType?

> `optional` **materialType**: `string`

The context material type of the observed sample, expressed as text, such as animal or blood.

#### See

https://vocabulary.uncefact.org/materialType

***

### materialTypeCode?

> `optional` **materialTypeCode**: `string`

The code specifying a material type for this sample observation result.

#### See

https://vocabulary.uncefact.org/materialTypeCode

***

### maximumStandardValueSpecifiedObservationResultCharacteristic?

> `optional` **maximumStandardValueSpecifiedObservationResultCharacteristic**: [`IUneceObservationResultCharacteristic`](IUneceObservationResultCharacteristic.md)[]

A maximum standard value of the values for the characteristic observed or measured by using the specified type of
observation for this sample observation result.

#### See

https://vocabulary.uncefact.org/maximumStandardValueSpecifiedObservationResultCharacteristic

***

### minimumStandardValueSpecifiedObservationResultCharacteristic?

> `optional` **minimumStandardValueSpecifiedObservationResultCharacteristic**: [`IUneceObservationResultCharacteristic`](IUneceObservationResultCharacteristic.md)[]

A minimum standard value of the values for the characteristic observed or measured by using the specified type of
observation for this sample observation result.

#### See

https://vocabulary.uncefact.org/minimumStandardValueSpecifiedObservationResultCharacteristic

***

### observationDiscontinuationReason?

> `optional` **observationDiscontinuationReason**: `string`

The observation discontinuation reason, expressed as text, for this sample observation result.

#### See

https://vocabulary.uncefact.org/observationDiscontinuationReason

***

### observationDiscontinuationReasonCode?

> `optional` **observationDiscontinuationReasonCode**: `string`

The code specifying the observation discontinuation reason for this sample observation result.

#### See

https://vocabulary.uncefact.org/observationDiscontinuationReasonCode

***

### observationTimeFrame?

> `optional` **observationTimeFrame**: `string`

The observation time frame, expressed as text, for this sample observation result.

#### See

https://vocabulary.uncefact.org/observationTimeFrame

***

### observedValueSpecifiedObservationResultCharacteristic?

> `optional` **observedValueSpecifiedObservationResultCharacteristic**: [`IUneceObservationResultCharacteristic`](IUneceObservationResultCharacteristic.md)[]

An observed value for the characteristic, acquired by observing or measuring according to the specified type of
observation for this sample observation result.

#### See

https://vocabulary.uncefact.org/observedValueSpecifiedObservationResultCharacteristic

***

### outsourcedLaboratoryParty?

> `optional` **outsourcedLaboratoryParty**: [`IUneceLaboratoryObservationParty`](IUneceLaboratoryObservationParty.md)[]

The outsourced laboratory party who performed this sample observation result.

#### See

https://vocabulary.uncefact.org/outsourcedLaboratoryParty

***

### outsourcedObservationIndicator?

> `optional` **outsourcedObservationIndicator**: `boolean`

The indication of whether or not the observation was an outsourced observation (performed by a third party).

#### See

https://vocabulary.uncefact.org/outsourcedObservationIndicator

***

### shareableIndicator?

> `optional` **shareableIndicator**: `boolean`

The indication of whether or not this sample observation result is shareable.

#### See

https://vocabulary.uncefact.org/shareableIndicator

***

### specifiedLaboratoryObservationInstructions?

> `optional` **specifiedLaboratoryObservationInstructions**: [`IUneceLaboratoryObservationInstructions`](IUneceLaboratoryObservationInstructions.md)[]

A set of laboratory observation instructions specified for this sample observation result.

#### See

https://vocabulary.uncefact.org/specifiedLaboratoryObservationInstructions

***

### specifiedLaboratoryObservationReference?

> `optional` **specifiedLaboratoryObservationReference**: [`IUneceLaboratoryObservationReference`](IUneceLaboratoryObservationReference.md)[]

A laboratory observation reference specified for this sample observation result.

#### See

https://vocabulary.uncefact.org/specifiedLaboratoryObservationReference

***

### usedMethod?

> `optional` **usedMethod**: [`IUneceLaboratoryObservationAnalysisMethod`](IUneceLaboratoryObservationAnalysisMethod.md)[]

A laboratory observation analysis method used for this sample observation result.

#### See

https://vocabulary.uncefact.org/usedMethod
