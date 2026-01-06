# Interface: IUneceTradeAddress

The location at which a particular trade related organization or person may be found or reached.

## See

https://vocabulary.uncefact.org/TradeAddress

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

> **type**: `"TradeAddress"`

JSON-LD Type.

***

### additionalStreetName?

> `optional` **additionalStreetName**: `string`

The additional name of a street, expressed as text, for this trade address.

#### See

https://vocabulary.uncefact.org/additionalStreetName

***

### addressTypeCode?

> `optional` **addressTypeCode**: [`UneceAddressTypeCodeList`](../type-aliases/UneceAddressTypeCodeList.md)[]

A code specifying the type of this trade address, such as business address or home address.

#### See

https://vocabulary.uncefact.org/addressTypeCode

***

### attentionOf?

> `optional` **attentionOf**: `string`

The name, expressed as text, of a person or department in the organization to whom incoming mail is marked with words
such as 'for the attention of' or 'FAO' or 'ATTN' for this trade address.

#### See

https://vocabulary.uncefact.org/attentionOf

***

### buildingName?

> `optional` **buildingName**: `string`

The name, expressed as text, of a building, a house or other structure on a street at this trade address.

#### See

https://vocabulary.uncefact.org/buildingName

***

### buildingNumber?

> `optional` **buildingNumber**: `string`

The building number, expressed as text, in this trade address.

#### See

https://vocabulary.uncefact.org/buildingNumber

***

### careOf?

> `optional` **careOf**: `string`

The name, expressed as text, of a person or organization at this trade address to whom incoming mail is marked with
words such as 'care of' or 'C/O'.

#### See

https://vocabulary.uncefact.org/careOf

***

### cityId?

> `optional` **cityId**: `string`

The identifier of the city for this trade address, such as United Nations Location Code (UNLOCODE).

#### See

https://vocabulary.uncefact.org/cityId

***

### cityName?

> `optional` **cityName**: `string`

A name, expressed as text, of the city, town or village of this trade address.

#### See

https://vocabulary.uncefact.org/cityName

***

### citySubDivisionName?

> `optional` **citySubDivisionName**: `string`

A name, expressed as text, of a sub-division of a city for this trade address, for example a district or borough.

#### See

https://vocabulary.uncefact.org/citySubDivisionName

***

### countryIdentificationCountry?

> `optional` **countryIdentificationCountry**: [`IUneceCountry`](IUneceCountry.md)

The unique identifier of the country for this trade address.

#### See

https://vocabulary.uncefact.org/countryIdentificationCountry

***

### countryName?

> `optional` **countryName**: `string`

A name, expressed as text, of the country for this trade address.

#### See

https://vocabulary.uncefact.org/countryName

***

### countrySubDivisionId?

> `optional` **countrySubDivisionId**: `string`

A unique identifier of the country sub-division for this trade address.

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### countrySubDivisionName?

> `optional` **countrySubDivisionName**: `string`

A name, expressed as text, of the sub-division of a country for this trade address.

#### See

https://vocabulary.uncefact.org/countrySubDivisionName

***

### departmentName?

> `optional` **departmentName**: `string`

The name, expressed as text, of a department for this trade address.

#### See

https://vocabulary.uncefact.org/departmentName

***

### description?

> `optional` **description**: `string`

A textual description of this trade address.

#### See

https://vocabulary.uncefact.org/description

***

### freeForm?

> `optional` **freeForm**: `string`

A free form representation, expressed as text, of this trade address.

#### See

https://vocabulary.uncefact.org/freeForm

***

### geoCoordinateIdentificationGeographicalCoordinate?

> `optional` **geoCoordinateIdentificationGeographicalCoordinate**: [`IUneceGeographicalCoordinate`](IUneceGeographicalCoordinate.md)

An identification of a set of geographical coordinates for this trade address.

#### See

https://vocabulary.uncefact.org/geoCoordinateIdentificationGeographicalCoordinate

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this trade address.

#### See

https://vocabulary.uncefact.org/identifier

***

### invalidIndicator?

> `optional` **invalidIndicator**: `boolean`

The indication of whether or not this trade address is invalid.

#### See

https://vocabulary.uncefact.org/invalidIndicator

***

### lineFive?

> `optional` **lineFive**: `string`

The fifth free form line, expressed as text, of this trade address.

#### See

https://vocabulary.uncefact.org/lineFive

***

### lineFour?

> `optional` **lineFour**: `string`

The fourth free form line, expressed as text, of this trade address.

#### See

https://vocabulary.uncefact.org/lineFour

***

### lineOne?

> `optional` **lineOne**: `string`

The first free form line, expressed as text, of this trade address.

#### See

https://vocabulary.uncefact.org/lineOne

***

### lineThree?

> `optional` **lineThree**: `string`

The third free form line, expressed as text, of this trade address.

#### See

https://vocabulary.uncefact.org/lineThree

***

### lineTwo?

> `optional` **lineTwo**: `string`

The second free form line, expressed as text, of this trade address.

#### See

https://vocabulary.uncefact.org/lineTwo

***

### postOfficeBox?

> `optional` **postOfficeBox**: `string`

The unique identifier, expressed as text, of a container commonly referred to as a box, in a post office or other postal
service location, assigned to a person or organization, where postal items may be kept for this trade address.

#### See

https://vocabulary.uncefact.org/postOfficeBox

***

### postcodeCode?

> `optional` **postcodeCode**: `string`

A code specifying the postcode of this trade address.

#### See

https://vocabulary.uncefact.org/postcodeCode

***

### secondaryPostcodeCode?

> `optional` **secondaryPostcodeCode**: `string`

A code specifying a secondary postcode of this trade address.

#### See

https://vocabulary.uncefact.org/secondaryPostcodeCode

***

### streetName?

> `optional` **streetName**: `string`

A name, expressed as text, of a street or thoroughfare for this trade address.

#### See

https://vocabulary.uncefact.org/streetName

***

### tradeAddressCountryId?

> `optional` **tradeAddressCountryId**: [`UneceCountryId`](../type-aliases/UneceCountryId.md)

The unique identifier of a country for this trade address.

#### See

https://vocabulary.uncefact.org/tradeAddressCountryId
