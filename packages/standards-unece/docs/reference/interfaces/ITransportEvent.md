# Interface: ITransportEvent

A significant occurrence or happening during transport.
A referenced significant occurrence or happening during transport.

## See

https://vocabulary.uncefact.org/TransportEvent

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

> **type**: `"TransportEvent"`

JSON-LD Type.

***

### actualArrivalRelatedDateTime?

> `optional` **actualArrivalRelatedDateTime**: `string`

The date, time, date time or other date time value of the actual arrival related to this transport event.

#### See

https://vocabulary.uncefact.org/actualArrivalRelatedDateTime

***

### actualDepartureRelatedDateTime?

> `optional` **actualDepartureRelatedDateTime**: `string`

The date, time, date time or other date time value of the actual departure related to this transport event.

#### See

https://vocabulary.uncefact.org/actualDepartureRelatedDateTime

***

### actualOccurrenceDateTime?

> `optional` **actualOccurrenceDateTime**: `string`

The actual date, time, date time, or other date time value of the occurrence of this transport event.

#### See

https://vocabulary.uncefact.org/actualOccurrenceDateTime

***

### actualOccurrencePeriod?

> `optional` **actualOccurrencePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

The actual period of time during which this transport event occurred.

#### See

https://vocabulary.uncefact.org/actualOccurrencePeriod

***

### additionalSecurityMeasuresApplicableNote?

> `optional` **additionalSecurityMeasuresApplicableNote**: [`INote`](INote.md)[]

A note providing additional security measures applicable to this transport event.

#### See

https://vocabulary.uncefact.org/additionalSecurityMeasuresApplicableNote

***

### anchorageDescription?

> `optional` **anchorageDescription**: `string`

A textual description of an anchorage for this transport event.

#### See

https://vocabulary.uncefact.org/anchorageDescription

***

### anchorageExpectedIndicator?

> `optional` **anchorageExpectedIndicator**: `boolean`

The indication of whether or not this anchorage transport event is or was expected.

#### See

https://vocabulary.uncefact.org/anchorageExpectedIndicator

***

### applicableNote?

> `optional` **applicableNote**: [`INote`](INote.md)[]

A note providing information applicable to this transport event.

#### See

https://vocabulary.uncefact.org/applicableNote

***

### arrivalRelatedDateTime?

> `optional` **arrivalRelatedDateTime**: `string`

An arrival date, time, date time, or other date time value related to this transport event.

#### See

https://vocabulary.uncefact.org/arrivalRelatedDateTime

***

### associatedGeographicalFeature?

> `optional` **associatedGeographicalFeature**: [`IGeographicalFeature`](IGeographicalFeature.md)[]

A geographical feature associated with this transport event.

#### See

https://vocabulary.uncefact.org/associatedGeographicalFeature

***

### cargoFacilityRelatedLocation?

> `optional` **cargoFacilityRelatedLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

The location of a cargo facility related to this transport event.

#### See

https://vocabulary.uncefact.org/cargoFacilityRelatedLocation

***

### certifyingParty?

> `optional` **certifyingParty**: [`ITradeParty`](ITradeParty.md)[]

A certifying party for this transport event.

#### See

https://vocabulary.uncefact.org/certifyingParty

***

### conveyanceFacilityRelatedLocation?

> `optional` **conveyanceFacilityRelatedLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A location of a conveyance facility related to this transport event.

#### See

https://vocabulary.uncefact.org/conveyanceFacilityRelatedLocation

***

### delayOccurrencePeriod?

> `optional` **delayOccurrencePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

A specified period of time during which this transport event is delayed.

#### See

https://vocabulary.uncefact.org/delayOccurrencePeriod

***

### delaySpecifiedEvent?

> `optional` **delaySpecifiedEvent**: `ITransportEvent`[]

A delay specified for this referenced transport event.

#### See

https://vocabulary.uncefact.org/delaySpecifiedEvent

***

### departureRelatedDateTime?

> `optional` **departureRelatedDateTime**: `string`

A departure date, time, date time, or other date time value related to this transport event.

#### See

https://vocabulary.uncefact.org/departureRelatedDateTime

***

### description?

> `optional` **description**: `string`

A textual description of this transport event.

#### See

https://vocabulary.uncefact.org/description

***

### estimatedOccurrenceDateTime?

> `optional` **estimatedOccurrenceDateTime**: `string`

The estimated date, time, date time, or other date time value of the occurrence of this transport event.

#### See

https://vocabulary.uncefact.org/estimatedOccurrenceDateTime

***

### estimatedTransportMeansArrivalOccurrenceDateTime?

> `optional` **estimatedTransportMeansArrivalOccurrenceDateTime**: `string`

The date, time, date time, or other date time value when the arrival of a means of transport at the location of this
transport event is estimated to occur.

#### See

https://vocabulary.uncefact.org/estimatedTransportMeansArrivalOccurrenceDateTime

***

### expectedIndicator?

> `optional` **expectedIndicator**: `boolean`

The indication of whether or not this transport event is or was expected.

#### See

https://vocabulary.uncefact.org/expectedIndicator

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this transport event.

#### See

https://vocabulary.uncefact.org/identifier

***

### laycanOccurrencePeriod?

> `optional` **laycanOccurrencePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

The specified period of laycan time during which this transport event occurs.

#### See

https://vocabulary.uncefact.org/laycanOccurrencePeriod

***

### maritimeAnchorageIndicator?

> `optional` **maritimeAnchorageIndicator**: `boolean`

The indication of whether or not this transport event is a maritime anchorage.

#### See

https://vocabulary.uncefact.org/maritimeAnchorageIndicator

***

### occurrenceLogisticsLocation?

> `optional` **occurrenceLogisticsLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

The logistics location where this transport event occurs.

#### See

https://vocabulary.uncefact.org/occurrenceLogisticsLocation

***

### occurrencePeriod?

> `optional` **occurrencePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

A specified period of time during which this transport event occurs.

#### See

https://vocabulary.uncefact.org/occurrencePeriod

***

### pilotBoardingPlace?

> `optional` **pilotBoardingPlace**: `string`

A pilot boarding place, expressed as text, for this transport event.

#### See

https://vocabulary.uncefact.org/pilotBoardingPlace

***

### preTranshipmentTransportEquipmentApplicableNote?

> `optional` **preTranshipmentTransportEquipmentApplicableNote**: [`INote`](INote.md)[]

A note providing pre-transhipment transport equipment information applicable to this transport event.

#### See

https://vocabulary.uncefact.org/preTranshipmentTransportEquipmentApplicableNote

***

### previousAssociatedGeographicalFeature?

> `optional` **previousAssociatedGeographicalFeature**: [`IGeographicalFeature`](IGeographicalFeature.md)[]

A geographical feature previously associated with this transport event.

#### See

https://vocabulary.uncefact.org/previousAssociatedGeographicalFeature

***

### reasonTypeCode?

> `optional` **reasonTypeCode**: `string`

The code specifying the reason type for this referenced transport event.

#### See

https://vocabulary.uncefact.org/reasonTypeCode

***

### receivedDateTime?

> `optional` **receivedDateTime**: `string`

The date, time, date time, or other date time value when information related to this transport event was received, from
the perspective of the receiver.

#### See

https://vocabulary.uncefact.org/receivedDateTime

***

### relatedObservation?

> `optional` **relatedObservation**: [`IObservation`](IObservation.md)[]

An observation related to this transport event.

#### See

https://vocabulary.uncefact.org/relatedObservation

***

### relatedRoute?

> `optional` **relatedRoute**: [`ITransportRoute`](ITransportRoute.md)[]

The route related to this transport event.

#### See

https://vocabulary.uncefact.org/relatedRoute

***

### reportedConditionTypeCode?

> `optional` **reportedConditionTypeCode**: [`LogisticsStatusCodeList`](../type-aliases/LogisticsStatusCodeList.md)[]

The code specifying the type of reported condition for this transport event.

#### See

https://vocabulary.uncefact.org/reportedConditionTypeCode

***

### reportingIOTDevice?

> `optional` **reportingIOTDevice**: [`IIOTDevice`](IIOTDevice.md)[]

An IOT device for this transport reporting event.

#### See

https://vocabulary.uncefact.org/reportingIOTDevice

***

### requestedOccurrenceDateTime?

> `optional` **requestedOccurrenceDateTime**: `string`

The requested date, time, date time, or other date time value of the occurrence of this transport event.

#### See

https://vocabulary.uncefact.org/requestedOccurrenceDateTime

***

### requestedRelatedService?

> `optional` **requestedRelatedService**: [`IService`](IService.md)[]

A requested service related to this transport event.

#### See

https://vocabulary.uncefact.org/requestedRelatedService

***

### scheduledArrivalRelatedDateTime?

> `optional` **scheduledArrivalRelatedDateTime**: `string`

The date, time, date time or other date time value of the scheduled arrival related to this referenced transport event.

#### See

https://vocabulary.uncefact.org/scheduledArrivalRelatedDateTime

***

### scheduledDepartureRelatedDateTime?

> `optional` **scheduledDepartureRelatedDateTime**: `string`

The date, time, date time or other date time value of the scheduled departure related to this referenced transport
event.

#### See

https://vocabulary.uncefact.org/scheduledDepartureRelatedDateTime

***

### scheduledOccurrenceDateTime?

> `optional` **scheduledOccurrenceDateTime**: `string`

The scheduled date, time, date time, or other date time value of the occurrence of this transport event.

#### See

https://vocabulary.uncefact.org/scheduledOccurrenceDateTime

***

### scheduledOccurrencePeriod?

> `optional` **scheduledOccurrencePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

The scheduled period of time specified for the occurrence of this transport event.

#### See

https://vocabulary.uncefact.org/scheduledOccurrencePeriod

***

### securityLevelCode?

> `optional` **securityLevelCode**: `string`

A security level code for this transport event.

#### See

https://vocabulary.uncefact.org/securityLevelCode

***

### specifiedTransportInstructions?

> `optional` **specifiedTransportInstructions**: [`ITransportInstructions`](ITransportInstructions.md)[]

An instruction or a set of instructions specified for this transport event.

#### See

https://vocabulary.uncefact.org/specifiedTransportInstructions

***

### staySpecifiedEvent?

> `optional` **staySpecifiedEvent**: `ITransportEvent`[]

A stay specified for this referenced transport event.

#### See

https://vocabulary.uncefact.org/staySpecifiedEvent

***

### transportInformationApplicableNote?

> `optional` **transportInformationApplicableNote**: [`INote`](INote.md)[]

A note providing transport information applicable to this transport event.

#### See

https://vocabulary.uncefact.org/transportInformationApplicableNote

***

### transportMeansStayOccurrencePeriod?

> `optional` **transportMeansStayOccurrencePeriod**: [`ISpecifiedPeriod`](ISpecifiedPeriod.md)[]

The specified period during which the transport means is held at a location.

#### See

https://vocabulary.uncefact.org/transportMeansStayOccurrencePeriod

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of transport event.

#### See

https://vocabulary.uncefact.org/typeCode

***

### unitQuantity?

> `optional` **unitQuantity**: [`IQuantityType`](IQuantityType.md)[]

The number of units for this transport event.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### unitValueMeasure?

> `optional` **unitValueMeasure**: [`IUnitMeasureType`](IUnitMeasureType.md)[]

The measure of a value for this transport event.

#### See

https://vocabulary.uncefact.org/unitValueMeasure
