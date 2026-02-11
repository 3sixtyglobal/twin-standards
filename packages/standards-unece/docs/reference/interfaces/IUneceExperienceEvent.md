# Interface: IUneceExperienceEvent

An involvement in an experience program in which some thing happens, such as a nature watching, woodware manufacturing,
meditation, holiday trip, dinner, theme park visit, could be experienced.

## See

https://vocabulary.uncefact.org/ExperienceEvent

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

> **type**: `"ExperienceEvent"`

JSON-LD Type.

***

### applicableSpecifiedNote?

> `optional` **applicableSpecifiedNote**: [`IUneceSpecifiedNote`](IUneceSpecifiedNote.md)[]

A specified note applicable for this experience event.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedNote

***

### basicObjective?

> `optional` **basicObjective**: `string`

A basic objective, expressed as text, for this experience event.

#### See

https://vocabulary.uncefact.org/basicObjective

***

### breakUpDateTime?

> `optional` **breakUpDateTime**: `string`

The break up date, time, date time, or other date time value for this experience event.

#### See

https://vocabulary.uncefact.org/breakUpDateTime

***

### calculatedPrice?

> `optional` **calculatedPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)[]

A calculated price for this experience event.

#### See

https://vocabulary.uncefact.org/calculatedPrice

***

### choiceAllowedIndicator?

> `optional` **choiceAllowedIndicator**: `boolean`

The indication of whether or not a choice is allowed for this experience event.

#### See

https://vocabulary.uncefact.org/choiceAllowedIndicator

***

### dateSequenceNumeric?

> `optional` **dateSequenceNumeric**: `string`

The date sequence number for this experience event.

#### See

https://vocabulary.uncefact.org/dateSequenceNumeric

***

### description?

> `optional` **description**: `string`

A textual description of this experience event.

#### See

https://vocabulary.uncefact.org/description

***

### distinctiveFeature?

> `optional` **distinctiveFeature**: [`IUneceSpecifiedFeature`](IUneceSpecifiedFeature.md)[]

A distinctive feature specified for this experience event.

#### See

https://vocabulary.uncefact.org/distinctiveFeature

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this experience event.

#### See

https://vocabulary.uncefact.org/identifier

***

### indemnityClause?

> `optional` **indemnityClause**: `string`

An indemnity clause, expressed as text, for this experience event.

#### See

https://vocabulary.uncefact.org/indemnityClause

***

### instruction?

> `optional` **instruction**: `string`

An instruction, expressed as text, for this experience event.

#### See

https://vocabulary.uncefact.org/instruction

***

### location?

> `optional` **location**: `string`

A location, expressed as text, for this experience event.

#### See

https://vocabulary.uncefact.org/location

***

### meetingDateTime?

> `optional` **meetingDateTime**: `string`

The meeting date, time, date time, or other date time value for this experience event.

#### See

https://vocabulary.uncefact.org/meetingDateTime

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this experience event.

#### See

https://vocabulary.uncefact.org/name

***

### operationalPeriod?

> `optional` **operationalPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

An operational period specified for this experience event.

#### See

https://vocabulary.uncefact.org/operationalPeriod

***

### providedCertificate?

> `optional` **providedCertificate**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A specified certificate provided for this experience event.

#### See

https://vocabulary.uncefact.org/providedCertificate

***

### providedRequirement?

> `optional` **providedRequirement**: [`IUneceRequirement`](IUneceRequirement.md)[]

A specified requirement provided for this experience event.

#### See

https://vocabulary.uncefact.org/providedRequirement

***

### requiredUsageCondition?

> `optional` **requiredUsageCondition**: [`IUneceUsageCondition`](IUneceUsageCondition.md)

The specified usage condition required for this experience event.

#### See

https://vocabulary.uncefact.org/requiredUsageCondition

***

### reservationGuarantee?

> `optional` **reservationGuarantee**: `string`

A reservation guarantee, expressed as text, for this experience event.

#### See

https://vocabulary.uncefact.org/reservationGuarantee

***

### reservationRequiredIndicator?

> `optional` **reservationRequiredIndicator**: `boolean`

The indication of whether or not a reservation is required for this experience event.

#### See

https://vocabulary.uncefact.org/reservationRequiredIndicator

***

### specifiedTradeParty?

> `optional` **specifiedTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party specified for this experience event.

#### See

https://vocabulary.uncefact.org/specifiedTradeParty
