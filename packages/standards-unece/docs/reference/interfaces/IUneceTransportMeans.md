# Interface: IUneceTransportMeans

Reference to a device or method used to convey people, goods, or other objects from place to place.

## See

https://vocabulary.uncefact.org/TransportMeans

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TransportMeans"`

JSON-LD Type.

***

### driverAccompaniedIndicator? {#driveraccompaniedindicator}

> `optional` **driverAccompaniedIndicator**: `boolean`

The indication of whether or not this referenced means of transport is accompanied by a driver.

#### See

https://vocabulary.uncefact.org/driverAccompaniedIndicator

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this referenced transport means, such as the International Maritime Organization number for a vessel.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, of this referenced transport means, such as the vessel name.

#### See

https://vocabulary.uncefact.org/name

***

### transportMeansType? {#transportmeanstype}

> `optional` **transportMeansType**: `string`

The type, expressed as text, of this referenced transport means.

#### See

https://vocabulary.uncefact.org/transportMeansType

***

### transportMeansTypeCode? {#transportmeanstypecode}

> `optional` **transportMeansTypeCode**: [`UneceTransportMeansTypeCodeList`](../type-aliases/UneceTransportMeansTypeCodeList.md)

The code specifying the type of referenced transport means [Reference UNECE Recommendation 28].

#### See

https://vocabulary.uncefact.org/transportMeansTypeCode
