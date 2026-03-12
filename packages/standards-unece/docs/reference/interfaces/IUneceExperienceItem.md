# Interface: IUneceExperienceItem

A collection of information specific to the involvement of a person or persons in a happening, such as a theme park, a
guided tour being used or reported on for trade purposes.

## See

https://vocabulary.uncefact.org/ExperienceItem

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ExperienceItem"`

JSON-LD Type.

***

### applicablePeriod? {#applicableperiod}

> `optional` **applicablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

An applicable period for this specified experience item.

#### See

https://vocabulary.uncefact.org/applicablePeriod

***

### applicableQuantityUnitTypeCode? {#applicablequantityunittypecode}

> `optional` **applicableQuantityUnitTypeCode**: `string`

The code specifying the type of quantity unit applicable for this specified experience item.

#### See

https://vocabulary.uncefact.org/applicableQuantityUnitTypeCode

***

### availablePeriod? {#availableperiod}

> `optional` **availablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

An available period for this specified experience item.

#### See

https://vocabulary.uncefact.org/availablePeriod

***

### availableProduct? {#availableproduct}

> `optional` **availableProduct**: [`IUneceExperienceProduct`](IUneceExperienceProduct.md)[]

An available product for this specified experience item.

#### See

https://vocabulary.uncefact.org/availableProduct

***

### availableUnitQuantity? {#availableunitquantity}

> `optional` **availableUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units available for this specified experience item.

#### See

https://vocabulary.uncefact.org/availableUnitQuantity

***

### brandName? {#brandname}

> `optional` **brandName**: `string`

A brand name, expressed as text, of this specified experience item.

#### See

https://vocabulary.uncefact.org/brandName

***

### calculatedPrice? {#calculatedprice}

> `optional` **calculatedPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)[]

A calculated price for this specified experience item.

#### See

https://vocabulary.uncefact.org/calculatedPrice

***

### capabilityLevel? {#capabilitylevel}

> `optional` **capabilityLevel**: `string`

A capability level, expressed as text, for this specified experience item.

#### See

https://vocabulary.uncefact.org/capabilityLevel

***

### categoryCode? {#categorycode}

> `optional` **categoryCode**: `string`

The code specifying the category for this specified experience item.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this specified experience item.

#### See

https://vocabulary.uncefact.org/description

***

### destination? {#destination}

> `optional` **destination**: `string`

A destination, expressed as text, for this specified experience item.

#### See

https://vocabulary.uncefact.org/destination

***

### guestSpecialCareIndicator? {#guestspecialcareindicator}

> `optional` **guestSpecialCareIndicator**: `boolean`

The indication of whether or not guest special care is applicable for this specified experience item.

#### See

https://vocabulary.uncefact.org/guestSpecialCareIndicator

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this specified experience item.

#### See

https://vocabulary.uncefact.org/identifier

***

### indemnityClause? {#indemnityclause}

> `optional` **indemnityClause**: `string`

An indemnity clause, expressed as text, for this specified experience item.

#### See

https://vocabulary.uncefact.org/indemnityClause

***

### instruction? {#instruction}

> `optional` **instruction**: `string`

An instruction, expressed as text, for this specified experience item.

#### See

https://vocabulary.uncefact.org/instruction

***

### lowerPriceLimitAmount? {#lowerpricelimitamount}

> `optional` **lowerPriceLimitAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of a lower price limit of this specified experience item.

#### See

https://vocabulary.uncefact.org/lowerPriceLimitAmount

***

### maximumGuestQuantity? {#maximumguestquantity}

> `optional` **maximumGuestQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The maximum number of guests for this specified experience item.

#### See

https://vocabulary.uncefact.org/maximumGuestQuantity

***

### minimumGuestQuantity? {#minimumguestquantity}

> `optional` **minimumGuestQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The minimum number of guests for this specified experience item.

#### See

https://vocabulary.uncefact.org/minimumGuestQuantity

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, of this specified experience item.

#### See

https://vocabulary.uncefact.org/name

***

### reservationGuarantee? {#reservationguarantee}

> `optional` **reservationGuarantee**: `string`

A reservation guarantee, expressed as text, for this specified experience item.

#### See

https://vocabulary.uncefact.org/reservationGuarantee

***

### responseStatusCode? {#responsestatuscode}

> `optional` **responseStatusCode**: `string`

The code specifying the response status for this specified experience item.

#### See

https://vocabulary.uncefact.org/responseStatusCode

***

### specifiedExperienceEvent? {#specifiedexperienceevent}

> `optional` **specifiedExperienceEvent**: [`IUneceExperienceEvent`](IUneceExperienceEvent.md)[]

An event for this specified experience item.

#### See

https://vocabulary.uncefact.org/specifiedExperienceEvent

***

### specifiedTradeParty? {#specifiedtradeparty}

> `optional` **specifiedTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party specified for this specified experience item.

#### See

https://vocabulary.uncefact.org/specifiedTradeParty

***

### statusCode? {#statuscode}

> `optional` **statusCode**: `string`

The code specifying the status for this specified experience item.

#### See

https://vocabulary.uncefact.org/statusCode

***

### theme? {#theme}

> `optional` **theme**: `string`

A theme, expressed as text, for this specified experience item.

#### See

https://vocabulary.uncefact.org/theme

***

### themeTypeCode? {#themetypecode}

> `optional` **themeTypeCode**: `string`

The code specifying the type of theme for this specified experience item.

#### See

https://vocabulary.uncefact.org/themeTypeCode

***

### unitQuantity? {#unitquantity}

> `optional` **unitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of units for this specified experience item.

#### See

https://vocabulary.uncefact.org/unitQuantity

***

### upperPriceLimitAmount? {#upperpricelimitamount}

> `optional` **upperPriceLimitAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value of an upper price limit of this specified experience item.

#### See

https://vocabulary.uncefact.org/upperPriceLimitAmount

***

### visitingPeriod? {#visitingperiod}

> `optional` **visitingPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A visiting period for this specified experience item.

#### See

https://vocabulary.uncefact.org/visitingPeriod
