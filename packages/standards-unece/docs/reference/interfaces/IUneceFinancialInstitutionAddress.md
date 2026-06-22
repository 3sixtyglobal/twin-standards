# Interface: IUneceFinancialInstitutionAddress

The location at which a financial institution may be found or reached.

## See

https://vocabulary.uncefact.org/FinancialInstitutionAddress

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"FinancialInstitutionAddress"`

JSON-LD Type.

***

### buildingNumber? {#buildingnumber}

> `optional` **buildingNumber?**: `string`

The number, expressed as text, of the building on a street for this financial institution address.

#### See

https://vocabulary.uncefact.org/buildingNumber

***

### cityId? {#cityid}

> `optional` **cityId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the city for this financial institution address, such as United Nations Location Code
(UNLOCODE).

#### See

https://vocabulary.uncefact.org/cityId

***

### cityName? {#cityname}

> `optional` **cityName?**: `string`

The name, expressed as text, of the city, town or village of this financial institution address.

#### See

https://vocabulary.uncefact.org/cityName

***

### countryId? {#countryid}

> `optional` **countryId?**: `string` \| `object` & `object` \| `object` & `object` \| `object` & `object`

The unique identifier of a country for this financial institution address (Reference ISO 3166 and UN/ECE Rec 3).

#### See

https://vocabulary.uncefact.org/countryId

***

### countryName? {#countryname}

> `optional` **countryName?**: `string`

The name, expressed as text, of the country within this financial institution address.

#### See

https://vocabulary.uncefact.org/countryName

***

### countrySubDivisionId? {#countrysubdivisionid}

> `optional` **countrySubDivisionId?**: `string` \| `IJsonLdValueObject`

The unique identifier of a country sub-division for this financial institution address (Reference ISO 3166 and UN/ECE
Rec 3).

#### See

https://vocabulary.uncefact.org/countrySubDivisionId

***

### countrySubDivisionName? {#countrysubdivisionname}

> `optional` **countrySubDivisionName?**: `string`

The name, expressed as text, of a country sub-division within this financial institution address.

#### See

https://vocabulary.uncefact.org/countrySubDivisionName

***

### departmentName? {#departmentname}

> `optional` **departmentName?**: `string`

The name, expressed as text, of a department within this financial institution address.

#### See

https://vocabulary.uncefact.org/departmentName

***

### financialInstitutionAddressTypeCode? {#financialinstitutionaddresstypecode}

> `optional` **financialInstitutionAddressTypeCode?**: `string`

The code specifying the type of financial institution address.

#### See

https://vocabulary.uncefact.org/financialInstitutionAddressTypeCode

***

### lineFive? {#linefive}

> `optional` **lineFive?**: `string`

The fifth free form line, expressed as text, of this financial institution address.

#### See

https://vocabulary.uncefact.org/lineFive

***

### lineFour? {#linefour}

> `optional` **lineFour?**: `string`

The fourth free form line, expressed as text, of this financial institution address.

#### See

https://vocabulary.uncefact.org/lineFour

***

### lineOne? {#lineone}

> `optional` **lineOne?**: `string`

The first free form line, expressed as text, of this financial institution address.

#### See

https://vocabulary.uncefact.org/lineOne

***

### lineThree? {#linethree}

> `optional` **lineThree?**: `string`

The third free form line, expressed as text, of this financial institution address.

#### See

https://vocabulary.uncefact.org/lineThree

***

### lineTwo? {#linetwo}

> `optional` **lineTwo?**: `string`

The second free form line, expressed as text, of this financial institution address.

#### See

https://vocabulary.uncefact.org/lineTwo

***

### postOfficeBox? {#postofficebox}

> `optional` **postOfficeBox?**: `string`

The post office box, expressed as text, for this financial institution address.

#### See

https://vocabulary.uncefact.org/postOfficeBox

***

### postcodeCode? {#postcodecode}

> `optional` **postcodeCode?**: `string`

The code specifying the postcode for this financial institution address.

#### See

https://vocabulary.uncefact.org/postcodeCode

***

### streetName? {#streetname}

> `optional` **streetName?**: `string`

The name, expressed as text, of the street or thoroughfare for this financial institution address.

#### See

https://vocabulary.uncefact.org/streetName
