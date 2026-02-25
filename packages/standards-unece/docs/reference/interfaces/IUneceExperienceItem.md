# Interface: IUneceExperienceItem

A collection of information specific to the involvement of a person or persons in a happening, such as a theme park, a
guided tour being used or reported on for trade purposes.

## See

https://vocabulary.uncefact.org/ExperienceItem

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"ExperienceItem"`

JSON-LD Type.

***

### applicablePeriod?

> `optional` **applicablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

An applicable period for this specified experience item.

#### See

https://vocabulary.uncefact.org/applicablePeriod

***

### applicableQuantityUnitTypeCode?

> `optional` **applicableQuantityUnitTypeCode**: `string`

The code specifying the type of quantity unit applicable for this specified experience item.

#### See

https://vocabulary.uncefact.org/applicableQuantityUnitTypeCode

***

### availablePeriod?

> `optional` **availablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

An available period for this specified experience item.

#### See

https://vocabulary.uncefact.org/availablePeriod

***

### availableProduct?

> `optional` **availableProduct**: [`IUneceExperienceProduct`](IUneceExperienceProduct.md)[]

An available product for this specified experience item.

#### See

https://vocabulary.uncefact.org/availableProduct

***

### availableUnitQuantity?

> `optional` **availableUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units available for this specified experience item.

#### See

https://vocabulary.uncefact.org/availableUnitQuantity

***

### brandName?

> `optional` **brandName**: `string`

A brand name, expressed as text, of this specified experience item.

#### See

https://vocabulary.uncefact.org/brandName

***

### calculatedPrice?

> `optional` **calculatedPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)[]

A calculated price for this specified experience item.

#### See

https://vocabulary.uncefact.org/calculatedPrice

***

### capabilityLevel?

> `optional` **capabilityLevel**: `string`

A capability level, expressed as text, for this specified experience item.

#### See

https://vocabulary.uncefact.org/capabilityLevel

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category for this specified experience item.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### description?

> `optional` **description**: `string`

A textual description of this specified experience item.

#### See

https://vocabulary.uncefact.org/description

***

### destination?

> `optional` **destination**: `string`

A destination, expressed as text, for this specified experience item.

#### See

https://vocabulary.uncefact.org/destination

***

### guestSpecialCareIndicator?

> `optional` **guestSpecialCareIndicator**: `boolean`

The indication of whether or not guest special care is applicable for this specified experience item.

#### See

https://vocabulary.uncefact.org/guestSpecialCareIndicator

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this specified experience item.

#### See

https://vocabulary.uncefact.org/identifier

***

### indemnityClause?

> `optional` **indemnityClause**: `string`

An indemnity clause, expressed as text, for this specified experience item.

#### See

https://vocabulary.uncefact.org/indemnityClause

***

### instruction?

> `optional` **instruction**: `string`

An instruction, expressed as text, for this specified experience item.

#### See

https://vocabulary.uncefact.org/instruction

***

### lowerPriceLimitAmount?

> `optional` **lowerPriceLimitAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a lower price limit of this specified experience item.

#### See

https://vocabulary.uncefact.org/lowerPriceLimitAmount

***

### maximumGuestQuantity?

> `optional` **maximumGuestQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The maximum number of guests for this specified experience item.

#### See

https://vocabulary.uncefact.org/maximumGuestQuantity

***

### minimumGuestQuantity?

> `optional` **minimumGuestQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The minimum number of guests for this specified experience item.

#### See

https://vocabulary.uncefact.org/minimumGuestQuantity

***

### name?

> `optional` **name**: `string`

A name, expressed as text, of this specified experience item.

#### See

https://vocabulary.uncefact.org/name

***

### reservationGuarantee?

> `optional` **reservationGuarantee**: `string`

A reservation guarantee, expressed as text, for this specified experience item.

#### See

https://vocabulary.uncefact.org/reservationGuarantee

***

### responseStatusCode?

> `optional` **responseStatusCode**: `string`

The code specifying the response status for this specified experience item.

#### See

https://vocabulary.uncefact.org/responseStatusCode

***

### specifiedExperienceEvent?

> `optional` **specifiedExperienceEvent**: [`IUneceExperienceEvent`](IUneceExperienceEvent.md)[]

An event for this specified experience item.

#### See

https://vocabulary.uncefact.org/specifiedExperienceEvent

***

### specifiedTradeParty?

> `optional` **specifiedTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party specified for this specified experience item.

#### See

https://vocabulary.uncefact.org/specifiedTradeParty

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status for this specified experience item.

#### See

https://vocabulary.uncefact.org/statusCode

***

### theme?

> `optional` **theme**: `string`

A theme, expressed as text, for this specified experience item.

#### See

https://vocabulary.uncefact.org/theme

***

### themeTypeCode?

> `optional` **themeTypeCode**: `string`

The code specifying the type of theme for this specified experience item.

#### See

https://vocabulary.uncefact.org/themeTypeCode

***

### unitQuantity?

> `optional` **unitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units for this specified experience item.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### upperPriceLimitAmount?

> `optional` **upperPriceLimitAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of an upper price limit of this specified experience item.

#### See

https://vocabulary.uncefact.org/upperPriceLimitAmount

***

### visitingPeriod?

> `optional` **visitingPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A visiting period for this specified experience item.

#### See

https://vocabulary.uncefact.org/visitingPeriod
