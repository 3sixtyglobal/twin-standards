# Interface: IUneceInspectionResult

Results obtained by performing an inspection.

## See

https://vocabulary.uncefact.org/InspectionResult

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

> **type**: `"InspectionResult"`

JSON-LD Type.

***

### applicableCorrectiveAction?

> `optional` **applicableCorrectiveAction**: [`IUneceCorrectiveAction`](IUneceCorrectiveAction.md)[]

A corrective action applicable to this specified inspection result.

#### See

https://vocabulary.uncefact.org/applicableCorrectiveAction

***

### applicableInspectionResultCharacteristic?

> `optional` **applicableInspectionResultCharacteristic**: [`IUneceInspectionResultCharacteristic`](IUneceInspectionResultCharacteristic.md)[]

A characteristic applicable to this specified inspection result.

#### See

https://vocabulary.uncefact.org/applicableInspectionResultCharacteristic

***

### applicableMethod?

> `optional` **applicableMethod**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A method applicable to this specified inspection result.

#### See

https://vocabulary.uncefact.org/applicableMethod

***

### applicablePreventiveAction?

> `optional` **applicablePreventiveAction**: [`IUnecePreventiveAction`](IUnecePreventiveAction.md)[]

A preventive action applicable to this specified inspection result.

#### See

https://vocabulary.uncefact.org/applicablePreventiveAction

***

### applicableSpecifiedAction?

> `optional` **applicableSpecifiedAction**: [`IUneceSpecifiedAction`](IUneceSpecifiedAction.md)[]

An action applicable to this specified inspection result.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedAction

***

### approvalDateTime?

> `optional` **approvalDateTime**: `string`

The date, time, date time, or other date time value for the approval of this specified inspection result.

#### See

https://vocabulary.uncefact.org/approvalDateTime

***

### attachedBinaryFile?

> `optional` **attachedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file attached to this specified inspection result.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### attachedInspectionNote?

> `optional` **attachedInspectionNote**: [`IUneceInspectionNote`](IUneceInspectionNote.md)[]

A note with additional information and or conclusions attached to this specified inspection result.

#### See

https://vocabulary.uncefact.org/attachedInspectionNote

***

### expectedValueApplicableCharacteristic?

> `optional` **expectedValueApplicableCharacteristic**: [`IUneceInspectionResultCharacteristic`](IUneceInspectionResultCharacteristic.md)[]

An expected value for the inspection characteristic to be acquired by using the type of inspection applicable to this
specified inspection result.

#### See

https://vocabulary.uncefact.org/expectedValueApplicableCharacteristic

***

### generalCharacteristic?

> `optional` **generalCharacteristic**: `string`

A general characteristic, such as length, volume, density, sensitivity, conductivity, expressed as text, of this
specified inspection result.

#### See

https://vocabulary.uncefact.org/generalCharacteristic

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this specified inspection result.

#### See

https://vocabulary.uncefact.org/identifier

***

### inspectionDateTime?

> `optional` **inspectionDateTime**: `string`

The date, time, date time, or other date time value of the inspection for this specified inspection result.

#### See

https://vocabulary.uncefact.org/inspectionDateTime

***

### inspectionParty?

> `optional` **inspectionParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

An inspection party specified for this inspection result.

#### See

https://vocabulary.uncefact.org/inspectionParty

***

### inspectionStandard?

> `optional` **inspectionStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced inspection standard for this specified inspection result.

#### See

https://vocabulary.uncefact.org/inspectionStandard

***

### laboratoryObservationResult?

> `optional` **laboratoryObservationResult**: [`IUneceObservationResult`](IUneceObservationResult.md)[]

A laboratory sample observation result for this specified inspection result.

#### See

https://vocabulary.uncefact.org/laboratoryObservationResult

***

### maximumStandardValueApplicableCharacteristic?

> `optional` **maximumStandardValueApplicableCharacteristic**: [`IUneceInspectionResultCharacteristic`](IUneceInspectionResultCharacteristic.md)[]

A maximum standard value for the inspection characteristic observed or measured by using the type of inspection
applicable to this specified inspection result.

#### See

https://vocabulary.uncefact.org/maximumStandardValueApplicableCharacteristic

***

### minimumStandardValueApplicableCharacteristic?

> `optional` **minimumStandardValueApplicableCharacteristic**: [`IUneceInspectionResultCharacteristic`](IUneceInspectionResultCharacteristic.md)[]

A minimum standard value for the inspection characteristic observed or measured by using the type of inspection
applicable to this specified inspection result.

#### See

https://vocabulary.uncefact.org/minimumStandardValueApplicableCharacteristic

***

### observedValueApplicableCharacteristic?

> `optional` **observedValueApplicableCharacteristic**: [`IUneceInspectionResultCharacteristic`](IUneceInspectionResultCharacteristic.md)[]

An observed value for the inspection characteristic acquired by using the type of inspection applicable to this
specified inspection result.

#### See

https://vocabulary.uncefact.org/observedValueApplicableCharacteristic

***

### obtainedAssertion?

> `optional` **obtainedAssertion**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion obtained by means of this specified inspection result.

#### See

https://vocabulary.uncefact.org/obtainedAssertion

***

### obtainedConformanceCertificate?

> `optional` **obtainedConformanceCertificate**: [`IUneceConformanceCertificate`](IUneceConformanceCertificate.md)[]

A conformance certificate obtained by means of this specified inspection result.

#### See

https://vocabulary.uncefact.org/obtainedConformanceCertificate

***

### obtainedOrganizationalCertificate?

> `optional` **obtainedOrganizationalCertificate**: [`IUneceOrganizationalCertificate`](IUneceOrganizationalCertificate.md)[]

An organizational certificate obtained by means of this specified inspection result.

#### See

https://vocabulary.uncefact.org/obtainedOrganizationalCertificate

***

### obtainedProcessCertificate?

> `optional` **obtainedProcessCertificate**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate obtained by means of this specified inspection result.

#### See

https://vocabulary.uncefact.org/obtainedProcessCertificate

***

### obtainedProductCertificate?

> `optional` **obtainedProductCertificate**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate obtained by means of this specified inspection result.

#### See

https://vocabulary.uncefact.org/obtainedProductCertificate

***

### obtainedSpecifiedCertificate?

> `optional` **obtainedSpecifiedCertificate**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A certificate obtained by means of this specified inspection result.

#### See

https://vocabulary.uncefact.org/obtainedSpecifiedCertificate

***

### outsourcedInspectionParty?

> `optional` **outsourcedInspectionParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

An outsourced inspection party for this specified inspection result.

#### See

https://vocabulary.uncefact.org/outsourcedInspectionParty

***

### relatedAssessment?

> `optional` **relatedAssessment**: [`IUneceAssessment`](IUneceAssessment.md)[]

An assessment related to this specified inspection result.

#### See

https://vocabulary.uncefact.org/relatedAssessment

***

### relatedInstructions?

> `optional` **relatedInstructions**: [`IUneceInspectionInstructions`](IUneceInspectionInstructions.md)[]

Inspection instructions related to this specified inspection result.

#### See

https://vocabulary.uncefact.org/relatedInstructions

***

### relatedMaterialType?

> `optional` **relatedMaterialType**: `string`

A material type, expressed as text, related to this specified inspection result.

#### See

https://vocabulary.uncefact.org/relatedMaterialType

***

### relatedProductType?

> `optional` **relatedProductType**: `string`

A product type, expressed as text, related to this specified inspection result.

#### See

https://vocabulary.uncefact.org/relatedProductType

***

### shareableIndicator?

> `optional` **shareableIndicator**: `boolean`

The indication of whether or not this specified inspection result is shareable.

#### See

https://vocabulary.uncefact.org/shareableIndicator

***

### specifiedInspectionReference?

> `optional` **specifiedInspectionReference**: [`IUneceInspectionReference`](IUneceInspectionReference.md)[]

An inspection reference specified for this inspection result.

#### See

https://vocabulary.uncefact.org/specifiedInspectionReference

***

### statement?

> `optional` **statement**: `string`

A statement, expressed as text, for this specified inspection result.

#### See

https://vocabulary.uncefact.org/statement

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this inspection result.

#### See

https://vocabulary.uncefact.org/statusCode
