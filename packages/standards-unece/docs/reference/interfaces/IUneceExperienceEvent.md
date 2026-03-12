# Interface: IUneceExperienceEvent

An involvement in an experience program in which some thing happens, such as a nature watching, woodware manufacturing,
meditation, holiday trip, dinner, theme park visit, could be experienced.

## See

https://vocabulary.uncefact.org/ExperienceEvent

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ExperienceEvent"`

JSON-LD Type.

***

### applicableSpecifiedNote? {#applicablespecifiednote}

> `optional` **applicableSpecifiedNote**: [`IUneceSpecifiedNote`](IUneceSpecifiedNote.md)[]

A specified note applicable for this experience event.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedNote

***

### basicObjective? {#basicobjective}

> `optional` **basicObjective**: `string`

A basic objective, expressed as text, for this experience event.

#### See

https://vocabulary.uncefact.org/basicObjective

***

### breakUpDateTime? {#breakupdatetime}

> `optional` **breakUpDateTime**: `string`

The break up date, time, date time, or other date time value for this experience event.

#### See

https://vocabulary.uncefact.org/breakUpDateTime

***

### calculatedPrice? {#calculatedprice}

> `optional` **calculatedPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)[]

A calculated price for this experience event.

#### See

https://vocabulary.uncefact.org/calculatedPrice

***

### choiceAllowedIndicator? {#choiceallowedindicator}

> `optional` **choiceAllowedIndicator**: `boolean`

The indication of whether or not a choice is allowed for this experience event.

#### See

https://vocabulary.uncefact.org/choiceAllowedIndicator

***

### dateSequenceNumeric? {#datesequencenumeric}

> `optional` **dateSequenceNumeric**: `string`

The date sequence number for this experience event.

#### See

https://vocabulary.uncefact.org/dateSequenceNumeric

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this experience event.

#### See

https://vocabulary.uncefact.org/description

***

### distinctiveFeature? {#distinctivefeature}

> `optional` **distinctiveFeature**: [`IUneceSpecifiedFeature`](IUneceSpecifiedFeature.md)[]

A distinctive feature specified for this experience event.

#### See

https://vocabulary.uncefact.org/distinctiveFeature

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this experience event.

#### See

https://vocabulary.uncefact.org/identifier

***

### indemnityClause? {#indemnityclause}

> `optional` **indemnityClause**: `string`

An indemnity clause, expressed as text, for this experience event.

#### See

https://vocabulary.uncefact.org/indemnityClause

***

### instruction? {#instruction}

> `optional` **instruction**: `string`

An instruction, expressed as text, for this experience event.

#### See

https://vocabulary.uncefact.org/instruction

***

### location? {#location}

> `optional` **location**: `string`

A location, expressed as text, for this experience event.

#### See

https://vocabulary.uncefact.org/location

***

### meetingDateTime? {#meetingdatetime}

> `optional` **meetingDateTime**: `string`

The meeting date, time, date time, or other date time value for this experience event.

#### See

https://vocabulary.uncefact.org/meetingDateTime

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, for this experience event.

#### See

https://vocabulary.uncefact.org/name

***

### operationalPeriod? {#operationalperiod}

> `optional` **operationalPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

An operational period specified for this experience event.

#### See

https://vocabulary.uncefact.org/operationalPeriod

***

### providedCertificate? {#providedcertificate}

> `optional` **providedCertificate**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A specified certificate provided for this experience event.

#### See

https://vocabulary.uncefact.org/providedCertificate

***

### providedRequirement? {#providedrequirement}

> `optional` **providedRequirement**: [`IUneceRequirement`](IUneceRequirement.md)[]

A specified requirement provided for this experience event.

#### See

https://vocabulary.uncefact.org/providedRequirement

***

### requiredUsageCondition? {#requiredusagecondition}

> `optional` **requiredUsageCondition**: [`IUneceUsageCondition`](IUneceUsageCondition.md)

The specified usage condition required for this experience event.

#### See

https://vocabulary.uncefact.org/requiredUsageCondition

***

### reservationGuarantee? {#reservationguarantee}

> `optional` **reservationGuarantee**: `string`

A reservation guarantee, expressed as text, for this experience event.

#### See

https://vocabulary.uncefact.org/reservationGuarantee

***

### reservationRequiredIndicator? {#reservationrequiredindicator}

> `optional` **reservationRequiredIndicator**: `boolean`

The indication of whether or not a reservation is required for this experience event.

#### See

https://vocabulary.uncefact.org/reservationRequiredIndicator

***

### specifiedTradeParty? {#specifiedtradeparty}

> `optional` **specifiedTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party specified for this experience event.

#### See

https://vocabulary.uncefact.org/specifiedTradeParty
