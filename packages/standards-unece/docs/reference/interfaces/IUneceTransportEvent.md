# Interface: IUneceTransportEvent

A significant occurrence or happening during transport.
A referenced significant occurrence or happening during transport.

## See

https://vocabulary.uncefact.org/TransportEvent

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TransportEvent"`

JSON-LD Type.

***

### actualArrivalRelatedDateTime? {#actualarrivalrelateddatetime}

> `optional` **actualArrivalRelatedDateTime?**: `string`

The date, time, date time or other date time value of the actual arrival related to this transport event.

#### See

https://vocabulary.uncefact.org/actualArrivalRelatedDateTime

***

### actualDepartureRelatedDateTime? {#actualdeparturerelateddatetime}

> `optional` **actualDepartureRelatedDateTime?**: `string`

The date, time, date time or other date time value of the actual departure related to this transport event.

#### See

https://vocabulary.uncefact.org/actualDepartureRelatedDateTime

***

### actualOccurrenceDateTime? {#actualoccurrencedatetime}

> `optional` **actualOccurrenceDateTime?**: `string`

The actual date, time, date time, or other date time value of the occurrence of this transport event.

#### See

https://vocabulary.uncefact.org/actualOccurrenceDateTime

***

### actualOccurrencePeriod? {#actualoccurrenceperiod}

> `optional` **actualOccurrencePeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The actual period of time during which this transport event occurred.

#### See

https://vocabulary.uncefact.org/actualOccurrencePeriod

***

### additionalSecurityMeasuresApplicableNote? {#additionalsecuritymeasuresapplicablenote}

> `optional` **additionalSecurityMeasuresApplicableNote?**: [`IUneceNote`](IUneceNote.md)[]

A note providing additional security measures applicable to this transport event.

#### See

https://vocabulary.uncefact.org/additionalSecurityMeasuresApplicableNote

***

### anchorageDescription? {#anchoragedescription}

> `optional` **anchorageDescription?**: `string`

A textual description of an anchorage for this transport event.

#### See

https://vocabulary.uncefact.org/anchorageDescription

***

### anchorageExpectedIndicator? {#anchorageexpectedindicator}

> `optional` **anchorageExpectedIndicator?**: `boolean`

The indication of whether or not this anchorage transport event is or was expected.

#### See

https://vocabulary.uncefact.org/anchorageExpectedIndicator

***

### applicableNote? {#applicablenote}

> `optional` **applicableNote?**: [`IUneceNote`](IUneceNote.md)[]

A note providing information applicable to this transport event.

#### See

https://vocabulary.uncefact.org/applicableNote

***

### arrivalRelatedDateTime? {#arrivalrelateddatetime}

> `optional` **arrivalRelatedDateTime?**: `string`

An arrival date, time, date time, or other date time value related to this transport event.

#### See

https://vocabulary.uncefact.org/arrivalRelatedDateTime

***

### associatedGeographicalFeature? {#associatedgeographicalfeature}

> `optional` **associatedGeographicalFeature?**: [`IUneceGeographicalFeature`](IUneceGeographicalFeature.md)[]

A geographical feature associated with this transport event.

#### See

https://vocabulary.uncefact.org/associatedGeographicalFeature

***

### cargoFacilityRelatedLocation? {#cargofacilityrelatedlocation}

> `optional` **cargoFacilityRelatedLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location of a cargo facility related to this transport event.

#### See

https://vocabulary.uncefact.org/cargoFacilityRelatedLocation

***

### certifyingParty? {#certifyingparty}

> `optional` **certifyingParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A certifying party for this transport event.

#### See

https://vocabulary.uncefact.org/certifyingParty

***

### conveyanceFacilityRelatedLocation? {#conveyancefacilityrelatedlocation}

> `optional` **conveyanceFacilityRelatedLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A location of a conveyance facility related to this transport event.

#### See

https://vocabulary.uncefact.org/conveyanceFacilityRelatedLocation

***

### delayOccurrencePeriod? {#delayoccurrenceperiod}

> `optional` **delayOccurrencePeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A specified period of time during which this transport event is delayed.

#### See

https://vocabulary.uncefact.org/delayOccurrencePeriod

***

### delaySpecifiedEvent? {#delayspecifiedevent}

> `optional` **delaySpecifiedEvent?**: `IUneceTransportEvent`[]

A delay specified for this referenced transport event.

#### See

https://vocabulary.uncefact.org/delaySpecifiedEvent

***

### departureRelatedDateTime? {#departurerelateddatetime}

> `optional` **departureRelatedDateTime?**: `string`

A departure date, time, date time, or other date time value related to this transport event.

#### See

https://vocabulary.uncefact.org/departureRelatedDateTime

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this transport event.

#### See

https://vocabulary.uncefact.org/description

***

### estimatedOccurrenceDateTime? {#estimatedoccurrencedatetime}

> `optional` **estimatedOccurrenceDateTime?**: `string`

The estimated date, time, date time, or other date time value of the occurrence of this transport event.

#### See

https://vocabulary.uncefact.org/estimatedOccurrenceDateTime

***

### estimatedTransportMeansArrivalOccurrenceDateTime? {#estimatedtransportmeansarrivaloccurrencedatetime}

> `optional` **estimatedTransportMeansArrivalOccurrenceDateTime?**: `string`

The date, time, date time, or other date time value when the arrival of a means of transport at the location of this
transport event is estimated to occur.

#### See

https://vocabulary.uncefact.org/estimatedTransportMeansArrivalOccurrenceDateTime

***

### expectedIndicator? {#expectedindicator}

> `optional` **expectedIndicator?**: `boolean`

The indication of whether or not this transport event is or was expected.

#### See

https://vocabulary.uncefact.org/expectedIndicator

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this transport event.

#### See

https://vocabulary.uncefact.org/identifier

***

### laycanOccurrencePeriod? {#laycanoccurrenceperiod}

> `optional` **laycanOccurrencePeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period of laycan time during which this transport event occurs.

#### See

https://vocabulary.uncefact.org/laycanOccurrencePeriod

***

### maritimeAnchorageIndicator? {#maritimeanchorageindicator}

> `optional` **maritimeAnchorageIndicator?**: `boolean`

The indication of whether or not this transport event is a maritime anchorage.

#### See

https://vocabulary.uncefact.org/maritimeAnchorageIndicator

***

### occurrenceLogisticsLocation? {#occurrencelogisticslocation}

> `optional` **occurrenceLogisticsLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The logistics location where this transport event occurs.

#### See

https://vocabulary.uncefact.org/occurrenceLogisticsLocation

***

### occurrencePeriod? {#occurrenceperiod}

> `optional` **occurrencePeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A specified period of time during which this transport event occurs.

#### See

https://vocabulary.uncefact.org/occurrencePeriod

***

### pilotBoardingPlace? {#pilotboardingplace}

> `optional` **pilotBoardingPlace?**: `string`

A pilot boarding place, expressed as text, for this transport event.

#### See

https://vocabulary.uncefact.org/pilotBoardingPlace

***

### preTranshipmentTransportEquipmentApplicableNote? {#pretranshipmenttransportequipmentapplicablenote}

> `optional` **preTranshipmentTransportEquipmentApplicableNote?**: [`IUneceNote`](IUneceNote.md)[]

A note providing pre-transhipment transport equipment information applicable to this transport event.

#### See

https://vocabulary.uncefact.org/preTranshipmentTransportEquipmentApplicableNote

***

### previousAssociatedGeographicalFeature? {#previousassociatedgeographicalfeature}

> `optional` **previousAssociatedGeographicalFeature?**: [`IUneceGeographicalFeature`](IUneceGeographicalFeature.md)[]

A geographical feature previously associated with this transport event.

#### See

https://vocabulary.uncefact.org/previousAssociatedGeographicalFeature

***

### reasonTypeCode? {#reasontypecode}

> `optional` **reasonTypeCode?**: `string`

The code specifying the reason type for this referenced transport event.

#### See

https://vocabulary.uncefact.org/reasonTypeCode

***

### receivedDateTime? {#receiveddatetime}

> `optional` **receivedDateTime?**: `string`

The date, time, date time, or other date time value when information related to this transport event was received, from
the perspective of the receiver.

#### See

https://vocabulary.uncefact.org/receivedDateTime

***

### relatedObservation? {#relatedobservation}

> `optional` **relatedObservation?**: [`IUneceObservation`](IUneceObservation.md)[]

An observation related to this transport event.

#### See

https://vocabulary.uncefact.org/relatedObservation

***

### relatedRoute? {#relatedroute}

> `optional` **relatedRoute?**: [`IUneceTransportRoute`](IUneceTransportRoute.md)

The route related to this transport event.

#### See

https://vocabulary.uncefact.org/relatedRoute

***

### reportedConditionTypeCode? {#reportedconditiontypecode}

> `optional` **reportedConditionTypeCode?**: [`UneceLogisticsStatusCodeList`](../type-aliases/UneceLogisticsStatusCodeList.md)

The code specifying the type of reported condition for this transport event.

#### See

https://vocabulary.uncefact.org/reportedConditionTypeCode

***

### reportingIOTDevice? {#reportingiotdevice}

> `optional` **reportingIOTDevice?**: [`IUneceIOTDevice`](IUneceIOTDevice.md)[]

An IOT device for this transport reporting event.

#### See

https://vocabulary.uncefact.org/reportingIOTDevice

***

### requestedOccurrenceDateTime? {#requestedoccurrencedatetime}

> `optional` **requestedOccurrenceDateTime?**: `string`

The requested date, time, date time, or other date time value of the occurrence of this transport event.

#### See

https://vocabulary.uncefact.org/requestedOccurrenceDateTime

***

### requestedRelatedService? {#requestedrelatedservice}

> `optional` **requestedRelatedService?**: [`IUneceService`](IUneceService.md)[]

A requested service related to this transport event.

#### See

https://vocabulary.uncefact.org/requestedRelatedService

***

### scheduledArrivalRelatedDateTime? {#scheduledarrivalrelateddatetime}

> `optional` **scheduledArrivalRelatedDateTime?**: `string`

The date, time, date time or other date time value of the scheduled arrival related to this referenced transport event.

#### See

https://vocabulary.uncefact.org/scheduledArrivalRelatedDateTime

***

### scheduledDepartureRelatedDateTime? {#scheduleddeparturerelateddatetime}

> `optional` **scheduledDepartureRelatedDateTime?**: `string`

The date, time, date time or other date time value of the scheduled departure related to this referenced transport
event.

#### See

https://vocabulary.uncefact.org/scheduledDepartureRelatedDateTime

***

### scheduledOccurrenceDateTime? {#scheduledoccurrencedatetime}

> `optional` **scheduledOccurrenceDateTime?**: `string`

The scheduled date, time, date time, or other date time value of the occurrence of this transport event.

#### See

https://vocabulary.uncefact.org/scheduledOccurrenceDateTime

***

### scheduledOccurrencePeriod? {#scheduledoccurrenceperiod}

> `optional` **scheduledOccurrencePeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The scheduled period of time specified for the occurrence of this transport event.

#### See

https://vocabulary.uncefact.org/scheduledOccurrencePeriod

***

### securityLevelCode? {#securitylevelcode}

> `optional` **securityLevelCode?**: `string`

A security level code for this transport event.

#### See

https://vocabulary.uncefact.org/securityLevelCode

***

### specifiedTransportInstructions? {#specifiedtransportinstructions}

> `optional` **specifiedTransportInstructions?**: [`IUneceTransportInstructions`](IUneceTransportInstructions.md)[]

An instruction or a set of instructions specified for this transport event.

#### See

https://vocabulary.uncefact.org/specifiedTransportInstructions

***

### staySpecifiedEvent? {#stayspecifiedevent}

> `optional` **staySpecifiedEvent?**: `IUneceTransportEvent`[]

A stay specified for this referenced transport event.

#### See

https://vocabulary.uncefact.org/staySpecifiedEvent

***

### transportInformationApplicableNote? {#transportinformationapplicablenote}

> `optional` **transportInformationApplicableNote?**: [`IUneceNote`](IUneceNote.md)[]

A note providing transport information applicable to this transport event.

#### See

https://vocabulary.uncefact.org/transportInformationApplicableNote

***

### transportMeansStayOccurrencePeriod? {#transportmeansstayoccurrenceperiod}

> `optional` **transportMeansStayOccurrencePeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period during which the transport means is held at a location.

#### See

https://vocabulary.uncefact.org/transportMeansStayOccurrencePeriod

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of transport event.

#### See

https://vocabulary.uncefact.org/typeCode

***

### unitQuantity? {#unitquantity}

> `optional` **unitQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units for this transport event.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### unitValueMeasure? {#unitvaluemeasure}

> `optional` **unitValueMeasure?**: [`IUneceUnitMeasureType`](IUneceUnitMeasureType.md)

The measure of a value for this transport event.

#### See

https://vocabulary.uncefact.org/unitValueMeasure
