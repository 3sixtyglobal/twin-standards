# Interface: IFinancialInstitutionAddress

The location at which a financial institution may be found or reached.

## See

https://vocabulary.uncefact.org/FinancialInstitutionAddress

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

> **type**: `"FinancialInstitutionAddress"`

JSON-LD Type.

***

### buildingNumber?

> `optional` **buildingNumber**: `string`

The number, expressed as text, of the building on a street for this financial institution address.

#### See

https://vocabulary.uncefact.org/buildingNumber

***

### cityId?

> `optional` **cityId**: `string`

The unique identifier of the city for this financial institution address, such as United Nations Location Code
(UNLOCODE).

#### See

https://vocabulary.uncefact.org/cityId

***

### cityName?

> `optional` **cityName**: `string`

The name, expressed as text, of the city, town or village of this financial institution address.

#### See

https://vocabulary.uncefact.org/cityName

***

### countryId?

> `optional` **countryId**: [`CountryId`](../type-aliases/CountryId.md)

The unique identifier of a country for this financial institution address (Reference ISO 3166 and UN/ECE Rec 3).

#### See

https://vocabulary.uncefact.org/countryId

***

### countryName?

> `optional` **countryName**: `string`

The name, expressed as text, of the country within this financial institution address.

#### See

https://vocabulary.uncefact.org/countryName

***

### countrySubDivisionId?

> `optional` **countrySubDivisionId**: `string`

The unique identifier of a country sub-division for this financial institution address (Reference ISO 3166 and UN/ECE
Rec 3).

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### countrySubDivisionName?

> `optional` **countrySubDivisionName**: `string`

The name, expressed as text, of a country sub-division within this financial institution address.

#### See

https://vocabulary.uncefact.org/countrySubDivisionName

***

### departmentName?

> `optional` **departmentName**: `string`

The name, expressed as text, of a department within this financial institution address.

#### See

https://vocabulary.uncefact.org/departmentName

***

### financialInstitutionAddressTypeCode?

> `optional` **financialInstitutionAddressTypeCode**: `string`

The code specifying the type of financial institution address.

#### See

https://vocabulary.uncefact.org/financialInstitutionAddressTypeCode

***

### lineFive?

> `optional` **lineFive**: `string`

The fifth free form line, expressed as text, of this financial institution address.

#### See

https://vocabulary.uncefact.org/lineFive

***

### lineFour?

> `optional` **lineFour**: `string`

The fourth free form line, expressed as text, of this financial institution address.

#### See

https://vocabulary.uncefact.org/lineFour

***

### lineOne?

> `optional` **lineOne**: `string`

The first free form line, expressed as text, of this financial institution address.

#### See

https://vocabulary.uncefact.org/lineOne

***

### lineThree?

> `optional` **lineThree**: `string`

The third free form line, expressed as text, of this financial institution address.

#### See

https://vocabulary.uncefact.org/lineThree

***

### lineTwo?

> `optional` **lineTwo**: `string`

The second free form line, expressed as text, of this financial institution address.

#### See

https://vocabulary.uncefact.org/lineTwo

***

### postOfficeBox?

> `optional` **postOfficeBox**: `string`

The post office box, expressed as text, for this financial institution address.

#### See

https://vocabulary.uncefact.org/postOfficeBox

***

### postcodeCode?

> `optional` **postcodeCode**: `string`

The code specifying the postcode for this financial institution address.

#### See

https://vocabulary.uncefact.org/postcodeCode

***

### streetName?

> `optional` **streetName**: `string`

The name, expressed as text, of the street or thoroughfare for this financial institution address.

#### See

https://vocabulary.uncefact.org/streetName
