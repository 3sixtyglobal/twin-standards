# Interface: IUneceObservationResult

A collection of diagnostic data, visual or technical, and processing data, performed on a sample.

## See

https://vocabulary.uncefact.org/ObservationResult

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ObservationResult"`

JSON-LD Type.

***

### actualObservationEndDateTime? {#actualobservationenddatetime}

> `optional` **actualObservationEndDateTime?**: `string`

The date, time, date time, or other date time value for the end of the observation for this sample observation result.

#### See

https://vocabulary.uncefact.org/actualObservationEndDateTime

***

### actualObservationStartDateTime? {#actualobservationstartdatetime}

> `optional` **actualObservationStartDateTime?**: `string`

The date, time, date time, or other date time value for the start of the observation for this sample observation result.

#### See

https://vocabulary.uncefact.org/actualObservationStartDateTime

***

### applicableMethod? {#applicablemethod}

> `optional` **applicableMethod?**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A specified method applicable to this sample observation result.

#### See

https://vocabulary.uncefact.org/applicableMethod

***

### attachedLaboratoryObservationNote? {#attachedlaboratoryobservationnote}

> `optional` **attachedLaboratoryObservationNote?**: [`IUneceLaboratoryObservationNote`](IUneceLaboratoryObservationNote.md)[]

A note attached to the laboratory observation results with additional observations and or conclusions.

#### See

https://vocabulary.uncefact.org/attachedLaboratoryObservationNote

***

### authorizationParty? {#authorizationparty}

> `optional` **authorizationParty?**: [`IUneceLaboratoryObservationParty`](IUneceLaboratoryObservationParty.md)

The laboratory observation party who authorized this sample observation result.

#### See

https://vocabulary.uncefact.org/authorizationParty

***

### emergencyObservationIndicator? {#emergencyobservationindicator}

> `optional` **emergencyObservationIndicator?**: `boolean`

The indication of whether or not the observation was an emergency observation for this sample observation result.

#### See

https://vocabulary.uncefact.org/emergencyObservationIndicator

***

### expectedValueSpecifiedObservationResultCharacteristic? {#expectedvaluespecifiedobservationresultcharacteristic}

> `optional` **expectedValueSpecifiedObservationResultCharacteristic?**: [`IUneceObservationResultCharacteristic`](IUneceObservationResultCharacteristic.md)[]

An expected value for the characteristic, to be observed or measured according to the specified type of observation for
this sample observation result.

#### See

https://vocabulary.uncefact.org/expectedValueSpecifiedObservationResultCharacteristic

***

### generalCharacteristic? {#generalcharacteristic}

> `optional` **generalCharacteristic?**: `string`

The general characteristic, expressed as text, for this sample observation result, such as length, volume, density,
titre, sensitivity, conductivity.

#### See

https://vocabulary.uncefact.org/generalCharacteristic

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this sample observation result.

#### See

https://vocabulary.uncefact.org/identifier

***

### interpretationResultApplicableParameter? {#interpretationresultapplicableparameter}

> `optional` **interpretationResultApplicableParameter?**: [`IUneceObservationObjectiveParameter`](IUneceObservationObjectiveParameter.md)[]

An applicable observation objective parameter of the interpretation result for this sample observation result.

#### See

https://vocabulary.uncefact.org/interpretationResultApplicableParameter

***

### laboratoryAnalysisRequestSpecifiedReference? {#laboratoryanalysisrequestspecifiedreference}

> `optional` **laboratoryAnalysisRequestSpecifiedReference?**: [`IUneceLaboratoryObservationReference`](IUneceLaboratoryObservationReference.md)[]

A laboratory observation analysis request reference specified for this sample observation result.

#### See

https://vocabulary.uncefact.org/laboratoryAnalysisRequestSpecifiedReference

***

### materialType? {#materialtype}

> `optional` **materialType?**: `string`

The context material type of the observed sample, expressed as text, such as animal or blood.

#### See

https://vocabulary.uncefact.org/materialType

***

### materialTypeCode? {#materialtypecode}

> `optional` **materialTypeCode?**: `string`

The code specifying a material type for this sample observation result.

#### See

https://vocabulary.uncefact.org/materialTypeCode

***

### maximumStandardValueSpecifiedObservationResultCharacteristic? {#maximumstandardvaluespecifiedobservationresultcharacteristic}

> `optional` **maximumStandardValueSpecifiedObservationResultCharacteristic?**: [`IUneceObservationResultCharacteristic`](IUneceObservationResultCharacteristic.md)[]

A maximum standard value of the values for the characteristic observed or measured by using the specified type of
observation for this sample observation result.

#### See

https://vocabulary.uncefact.org/maximumStandardValueSpecifiedObservationResultCharacteristic

***

### minimumStandardValueSpecifiedObservationResultCharacteristic? {#minimumstandardvaluespecifiedobservationresultcharacteristic}

> `optional` **minimumStandardValueSpecifiedObservationResultCharacteristic?**: [`IUneceObservationResultCharacteristic`](IUneceObservationResultCharacteristic.md)[]

A minimum standard value of the values for the characteristic observed or measured by using the specified type of
observation for this sample observation result.

#### See

https://vocabulary.uncefact.org/minimumStandardValueSpecifiedObservationResultCharacteristic

***

### observationDiscontinuationReason? {#observationdiscontinuationreason}

> `optional` **observationDiscontinuationReason?**: `string`

The observation discontinuation reason, expressed as text, for this sample observation result.

#### See

https://vocabulary.uncefact.org/observationDiscontinuationReason

***

### observationDiscontinuationReasonCode? {#observationdiscontinuationreasoncode}

> `optional` **observationDiscontinuationReasonCode?**: `string`

The code specifying the observation discontinuation reason for this sample observation result.

#### See

https://vocabulary.uncefact.org/observationDiscontinuationReasonCode

***

### observationTimeFrame? {#observationtimeframe}

> `optional` **observationTimeFrame?**: `string`

The observation time frame, expressed as text, for this sample observation result.

#### See

https://vocabulary.uncefact.org/observationTimeFrame

***

### observedValueSpecifiedObservationResultCharacteristic? {#observedvaluespecifiedobservationresultcharacteristic}

> `optional` **observedValueSpecifiedObservationResultCharacteristic?**: [`IUneceObservationResultCharacteristic`](IUneceObservationResultCharacteristic.md)[]

An observed value for the characteristic, acquired by observing or measuring according to the specified type of
observation for this sample observation result.

#### See

https://vocabulary.uncefact.org/observedValueSpecifiedObservationResultCharacteristic

***

### outsourcedLaboratoryParty? {#outsourcedlaboratoryparty}

> `optional` **outsourcedLaboratoryParty?**: [`IUneceLaboratoryObservationParty`](IUneceLaboratoryObservationParty.md)

The outsourced laboratory party who performed this sample observation result.

#### See

https://vocabulary.uncefact.org/outsourcedLaboratoryParty

***

### outsourcedObservationIndicator? {#outsourcedobservationindicator}

> `optional` **outsourcedObservationIndicator?**: `boolean`

The indication of whether or not the observation was an outsourced observation (performed by a third party).

#### See

https://vocabulary.uncefact.org/outsourcedObservationIndicator

***

### shareableIndicator? {#shareableindicator}

> `optional` **shareableIndicator?**: `boolean`

The indication of whether or not this sample observation result is shareable.

#### See

https://vocabulary.uncefact.org/shareableIndicator

***

### specifiedLaboratoryObservationInstructions? {#specifiedlaboratoryobservationinstructions}

> `optional` **specifiedLaboratoryObservationInstructions?**: [`IUneceLaboratoryObservationInstructions`](IUneceLaboratoryObservationInstructions.md)[]

A set of laboratory observation instructions specified for this sample observation result.

#### See

https://vocabulary.uncefact.org/specifiedLaboratoryObservationInstructions

***

### specifiedLaboratoryObservationReference? {#specifiedlaboratoryobservationreference}

> `optional` **specifiedLaboratoryObservationReference?**: [`IUneceLaboratoryObservationReference`](IUneceLaboratoryObservationReference.md)[]

A laboratory observation reference specified for this sample observation result.

#### See

https://vocabulary.uncefact.org/specifiedLaboratoryObservationReference

***

### usedMethod? {#usedmethod}

> `optional` **usedMethod?**: [`IUneceLaboratoryObservationAnalysisMethod`](IUneceLaboratoryObservationAnalysisMethod.md)[]

A laboratory observation analysis method used for this sample observation result.

#### See

https://vocabulary.uncefact.org/usedMethod
