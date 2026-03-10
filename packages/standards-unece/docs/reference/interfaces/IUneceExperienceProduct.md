# Interface: IUneceExperienceProduct

Any service that provides an involvement, such as an adventure experience, wellness experience, social or business
activity experience.

## See

https://vocabulary.uncefact.org/ExperienceProduct

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"ExperienceProduct"`

JSON-LD Type.

***

### applicableQuantityUnitTypeCode?

> `optional` **applicableQuantityUnitTypeCode**: `string`

The code specifying the type of quantity unit applicable for this experience product.

#### See

https://vocabulary.uncefact.org/applicableQuantityUnitTypeCode

***

### applicableSpecifiedNote?

> `optional` **applicableSpecifiedNote**: [`IUneceSpecifiedNote`](IUneceSpecifiedNote.md)[]

A note applicable for this experience product.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedNote

***

### brandName?

> `optional` **brandName**: `string`

A brand name, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/brandName

***

### calculatedPrice?

> `optional` **calculatedPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)[]

A calculated price for this experience product.

#### See

https://vocabulary.uncefact.org/calculatedPrice

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category of this experience product.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### certifiedPersonArrangementIndicator?

> `optional` **certifiedPersonArrangementIndicator**: `boolean`

The indication of whether or not a certified person arrangement is made for this experience product.

#### See

https://vocabulary.uncefact.org/certifiedPersonArrangementIndicator

***

### description?

> `optional` **description**: `string`

A textual description of this experience product.

#### See

https://vocabulary.uncefact.org/description

***

### distinctiveFeature?

> `optional` **distinctiveFeature**: [`IUneceSpecifiedFeature`](IUneceSpecifiedFeature.md)[]

A distinctive feature of this experience product.

#### See

https://vocabulary.uncefact.org/distinctiveFeature

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this experience product.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedEvent?

> `optional` **includedEvent**: [`IUneceExperienceEvent`](IUneceExperienceEvent.md)[]

An event included within this experience product.

#### See

https://vocabulary.uncefact.org/includedEvent

***

### indemnityClause?

> `optional` **indemnityClause**: `string`

An indemnity clause, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/indemnityClause

***

### instruction?

> `optional` **instruction**: `string`

An instruction, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/instruction

***

### location?

> `optional` **location**: `string`

A location, expressed as text, specified for this experience product.

#### See

https://vocabulary.uncefact.org/location

***

### maximumUnitQuantity?

> `optional` **maximumUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The maximum number of units of this experience product.

#### See

https://vocabulary.uncefact.org/maximumUnitQuantity

***

### minimumUnitQuantity?

> `optional` **minimumUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The minimum number of units of this experience product.

#### See

https://vocabulary.uncefact.org/minimumUnitQuantity

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/name

***

### objective?

> `optional` **objective**: `string`

An objective, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/objective

***

### operationalPeriod?

> `optional` **operationalPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A operational period for this experience product.

#### See

https://vocabulary.uncefact.org/operationalPeriod

***

### optionalProduct?

> `optional` **optionalProduct**: `IUneceExperienceProduct`[]

An optional product for this experience product.

#### See

https://vocabulary.uncefact.org/optionalProduct

***

### providedCertificate?

> `optional` **providedCertificate**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A certificate provided for this experience product.

#### See

https://vocabulary.uncefact.org/providedCertificate

***

### providedRequirement?

> `optional` **providedRequirement**: [`IUneceRequirement`](IUneceRequirement.md)[]

A requirement provided for this experience product.

#### See

https://vocabulary.uncefact.org/providedRequirement

***

### requiredReservationGuaranteeIndicator?

> `optional` **requiredReservationGuaranteeIndicator**: `boolean`

The indication of whether or not this experience product requires a reservation guarantee.

#### See

https://vocabulary.uncefact.org/requiredReservationGuaranteeIndicator

***

### requiredUsageCondition?

> `optional` **requiredUsageCondition**: [`IUneceUsageCondition`](IUneceUsageCondition.md)[]

A required usage condition for this experience product.

#### See

https://vocabulary.uncefact.org/requiredUsageCondition

***

### reservationGuarantee?

> `optional` **reservationGuarantee**: `string`

A reservation guarantee, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/reservationGuarantee

***

### specifiedTradeParty?

> `optional` **specifiedTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party specified for this experience product.

#### See

https://vocabulary.uncefact.org/specifiedTradeParty

***

### theme?

> `optional` **theme**: `string`

A theme, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/theme

***

### themeTypeCode?

> `optional` **themeTypeCode**: `string`

The code specifying the type of theme for this experience product.

#### See

https://vocabulary.uncefact.org/themeTypeCode
