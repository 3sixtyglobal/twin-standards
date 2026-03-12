# Interface: IUneceTradeAddress

The location at which a particular trade related organization or person may be found or reached.

## See

https://vocabulary.uncefact.org/TradeAddress

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TradeAddress"`

JSON-LD Type.

***

### additionalStreetName? {#additionalstreetname}

> `optional` **additionalStreetName**: `string`

The additional name of a street, expressed as text, for this trade address.

#### See

https://vocabulary.uncefact.org/additionalStreetName

***

### addressTypeCode? {#addresstypecode}

> `optional` **addressTypeCode**: [`UneceAddressTypeCodeList`](../type-aliases/UneceAddressTypeCodeList.md)[]

A code specifying the type of this trade address, such as business address or home address.

#### See

https://vocabulary.uncefact.org/addressTypeCode

***

### attentionOf? {#attentionof}

> `optional` **attentionOf**: `string`

The name, expressed as text, of a person or department in the organization to whom incoming mail is marked with words
such as 'for the attention of' or 'FAO' or 'ATTN' for this trade address.

#### See

https://vocabulary.uncefact.org/attentionOf

***

### buildingName? {#buildingname}

> `optional` **buildingName**: `string`

The name, expressed as text, of a building, a house or other structure on a street at this trade address.

#### See

https://vocabulary.uncefact.org/buildingName

***

### buildingNumber? {#buildingnumber}

> `optional` **buildingNumber**: `string`

The building number, expressed as text, in this trade address.

#### See

https://vocabulary.uncefact.org/buildingNumber

***

### careOf? {#careof}

> `optional` **careOf**: `string`

The name, expressed as text, of a person or organization at this trade address to whom incoming mail is marked with
words such as 'care of' or 'C/O'.

#### See

https://vocabulary.uncefact.org/careOf

***

### cityId? {#cityid}

> `optional` **cityId**: `string` \| `IJsonLdValueObject`

The identifier of the city for this trade address, such as United Nations Location Code (UNLOCODE).

#### See

https://vocabulary.uncefact.org/cityId

***

### cityName? {#cityname}

> `optional` **cityName**: `string`

A name, expressed as text, of the city, town or village of this trade address.

#### See

https://vocabulary.uncefact.org/cityName

***

### citySubDivisionName? {#citysubdivisionname}

> `optional` **citySubDivisionName**: `string`

A name, expressed as text, of a sub-division of a city for this trade address, for example a district or borough.

#### See

https://vocabulary.uncefact.org/citySubDivisionName

***

### countryIdentificationCountry? {#countryidentificationcountry}

> `optional` **countryIdentificationCountry**: [`IUneceCountry`](IUneceCountry.md)

The unique identifier of the country for this trade address.

#### See

https://vocabulary.uncefact.org/countryIdentificationCountry

***

### countryName? {#countryname}

> `optional` **countryName**: `string`

A name, expressed as text, of the country for this trade address.

#### See

https://vocabulary.uncefact.org/countryName

***

### countrySubDivisionId? {#countrysubdivisionid}

> `optional` **countrySubDivisionId**: `string` \| `IJsonLdValueObject`

A unique identifier of the country sub-division for this trade address.

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### countrySubDivisionName? {#countrysubdivisionname}

> `optional` **countrySubDivisionName**: `string`

A name, expressed as text, of the sub-division of a country for this trade address.

#### See

https://vocabulary.uncefact.org/countrySubDivisionName

***

### departmentName? {#departmentname}

> `optional` **departmentName**: `string`

The name, expressed as text, of a department for this trade address.

#### See

https://vocabulary.uncefact.org/departmentName

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this trade address.

#### See

https://vocabulary.uncefact.org/description

***

### freeForm? {#freeform}

> `optional` **freeForm**: `string`

A free form representation, expressed as text, of this trade address.

#### See

https://vocabulary.uncefact.org/freeForm

***

### geoCoordinateIdentificationGeographicalCoordinate? {#geocoordinateidentificationgeographicalcoordinate}

> `optional` **geoCoordinateIdentificationGeographicalCoordinate**: [`IUneceGeographicalCoordinate`](IUneceGeographicalCoordinate.md)[]

An identification of a set of geographical coordinates for this trade address.

#### See

https://vocabulary.uncefact.org/geoCoordinateIdentificationGeographicalCoordinate

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

A unique identifier for this trade address.

#### See

https://vocabulary.uncefact.org/identifier

***

### invalidIndicator? {#invalidindicator}

> `optional` **invalidIndicator**: `boolean`

The indication of whether or not this trade address is invalid.

#### See

https://vocabulary.uncefact.org/invalidIndicator

***

### lineFive? {#linefive}

> `optional` **lineFive**: `string`

The fifth free form line, expressed as text, of this trade address.

#### See

https://vocabulary.uncefact.org/lineFive

***

### lineFour? {#linefour}

> `optional` **lineFour**: `string`

The fourth free form line, expressed as text, of this trade address.

#### See

https://vocabulary.uncefact.org/lineFour

***

### lineOne? {#lineone}

> `optional` **lineOne**: `string`

The first free form line, expressed as text, of this trade address.

#### See

https://vocabulary.uncefact.org/lineOne

***

### lineThree? {#linethree}

> `optional` **lineThree**: `string`

The third free form line, expressed as text, of this trade address.

#### See

https://vocabulary.uncefact.org/lineThree

***

### lineTwo? {#linetwo}

> `optional` **lineTwo**: `string`

The second free form line, expressed as text, of this trade address.

#### See

https://vocabulary.uncefact.org/lineTwo

***

### postOfficeBox? {#postofficebox}

> `optional` **postOfficeBox**: `string`

The unique identifier, expressed as text, of a container commonly referred to as a box, in a post office or other postal
service location, assigned to a person or organization, where postal items may be kept for this trade address.

#### See

https://vocabulary.uncefact.org/postOfficeBox

***

### postcodeCode? {#postcodecode}

> `optional` **postcodeCode**: `string`

A code specifying the postcode of this trade address.

#### See

https://vocabulary.uncefact.org/postcodeCode

***

### secondaryPostcodeCode? {#secondarypostcodecode}

> `optional` **secondaryPostcodeCode**: `string`

A code specifying a secondary postcode of this trade address.

#### See

https://vocabulary.uncefact.org/secondaryPostcodeCode

***

### streetName? {#streetname}

> `optional` **streetName**: `string`

A name, expressed as text, of a street or thoroughfare for this trade address.

#### See

https://vocabulary.uncefact.org/streetName

***

### tradeAddressCountryId? {#tradeaddresscountryid}

> `optional` **tradeAddressCountryId**: `string` \| `IJsonLdValueObject`

The unique identifier of a country for this trade address.

#### See

https://vocabulary.uncefact.org/tradeAddressCountryId
