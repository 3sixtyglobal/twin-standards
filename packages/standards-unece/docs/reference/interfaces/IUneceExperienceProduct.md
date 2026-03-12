# Interface: IUneceExperienceProduct

Any service that provides an involvement, such as an adventure experience, wellness experience, social or business
activity experience.

## See

https://vocabulary.uncefact.org/ExperienceProduct

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ExperienceProduct"`

JSON-LD Type.

***

### applicableQuantityUnitTypeCode? {#applicablequantityunittypecode}

> `optional` **applicableQuantityUnitTypeCode**: `string`

The code specifying the type of quantity unit applicable for this experience product.

#### See

https://vocabulary.uncefact.org/applicableQuantityUnitTypeCode

***

### applicableSpecifiedNote? {#applicablespecifiednote}

> `optional` **applicableSpecifiedNote**: [`IUneceSpecifiedNote`](IUneceSpecifiedNote.md)[]

A note applicable for this experience product.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedNote

***

### brandName? {#brandname}

> `optional` **brandName**: `string`

A brand name, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/brandName

***

### calculatedPrice? {#calculatedprice}

> `optional` **calculatedPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)[]

A calculated price for this experience product.

#### See

https://vocabulary.uncefact.org/calculatedPrice

***

### categoryCode? {#categorycode}

> `optional` **categoryCode**: `string`

The code specifying the category of this experience product.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### certifiedPersonArrangementIndicator? {#certifiedpersonarrangementindicator}

> `optional` **certifiedPersonArrangementIndicator**: `boolean`

The indication of whether or not a certified person arrangement is made for this experience product.

#### See

https://vocabulary.uncefact.org/certifiedPersonArrangementIndicator

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this experience product.

#### See

https://vocabulary.uncefact.org/description

***

### distinctiveFeature? {#distinctivefeature}

> `optional` **distinctiveFeature**: [`IUneceSpecifiedFeature`](IUneceSpecifiedFeature.md)[]

A distinctive feature of this experience product.

#### See

https://vocabulary.uncefact.org/distinctiveFeature

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this experience product.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedEvent? {#includedevent}

> `optional` **includedEvent**: [`IUneceExperienceEvent`](IUneceExperienceEvent.md)[]

An event included within this experience product.

#### See

https://vocabulary.uncefact.org/includedEvent

***

### indemnityClause? {#indemnityclause}

> `optional` **indemnityClause**: `string`

An indemnity clause, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/indemnityClause

***

### instruction? {#instruction}

> `optional` **instruction**: `string`

An instruction, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/instruction

***

### location? {#location}

> `optional` **location**: `string`

A location, expressed as text, specified for this experience product.

#### See

https://vocabulary.uncefact.org/location

***

### maximumUnitQuantity? {#maximumunitquantity}

> `optional` **maximumUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The maximum number of units of this experience product.

#### See

https://vocabulary.uncefact.org/maximumUnitQuantity

***

### minimumUnitQuantity? {#minimumunitquantity}

> `optional` **minimumUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The minimum number of units of this experience product.

#### See

https://vocabulary.uncefact.org/minimumUnitQuantity

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/name

***

### objective? {#objective}

> `optional` **objective**: `string`

An objective, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/objective

***

### operationalPeriod? {#operationalperiod}

> `optional` **operationalPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A operational period for this experience product.

#### See

https://vocabulary.uncefact.org/operationalPeriod

***

### optionalProduct? {#optionalproduct}

> `optional` **optionalProduct**: `IUneceExperienceProduct`[]

An optional product for this experience product.

#### See

https://vocabulary.uncefact.org/optionalProduct

***

### providedCertificate? {#providedcertificate}

> `optional` **providedCertificate**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A certificate provided for this experience product.

#### See

https://vocabulary.uncefact.org/providedCertificate

***

### providedRequirement? {#providedrequirement}

> `optional` **providedRequirement**: [`IUneceRequirement`](IUneceRequirement.md)[]

A requirement provided for this experience product.

#### See

https://vocabulary.uncefact.org/providedRequirement

***

### requiredReservationGuaranteeIndicator? {#requiredreservationguaranteeindicator}

> `optional` **requiredReservationGuaranteeIndicator**: `boolean`

The indication of whether or not this experience product requires a reservation guarantee.

#### See

https://vocabulary.uncefact.org/requiredReservationGuaranteeIndicator

***

### requiredUsageCondition? {#requiredusagecondition}

> `optional` **requiredUsageCondition**: [`IUneceUsageCondition`](IUneceUsageCondition.md)[]

A required usage condition for this experience product.

#### See

https://vocabulary.uncefact.org/requiredUsageCondition

***

### reservationGuarantee? {#reservationguarantee}

> `optional` **reservationGuarantee**: `string`

A reservation guarantee, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/reservationGuarantee

***

### specifiedTradeParty? {#specifiedtradeparty}

> `optional` **specifiedTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party specified for this experience product.

#### See

https://vocabulary.uncefact.org/specifiedTradeParty

***

### theme? {#theme}

> `optional` **theme**: `string`

A theme, expressed as text, for this experience product.

#### See

https://vocabulary.uncefact.org/theme

***

### themeTypeCode? {#themetypecode}

> `optional` **themeTypeCode**: `string`

The code specifying the type of theme for this experience product.

#### See

https://vocabulary.uncefact.org/themeTypeCode
