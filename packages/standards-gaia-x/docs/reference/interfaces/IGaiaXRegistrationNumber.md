# Interface: IGaiaXRegistrationNumber

Registration Number as defined by the Gaia-X ontology.

## See

https://docs.gaia-x.eu/ontology/development/classes/RegistrationNumber/

## Properties

### type {#type}

> **type**: `"RegistrationNumber"` \| `"LocalRegistrationNumber"` \| `"EORI"` \| `"VatID"` \| `"EUID"` \| `"LeiCode"` \| `"TaxID"`

JSON-LD Type.

***

### local? {#local}

> `optional` **local?**: `string`

Local Registration.

***

### countryCode? {#countrycode}

> `optional` **countryCode?**: `string`

Country code. See https://docs.gaia-x.eu/ontology/development/enums/CountryNameAlpha2/

***

### subdivisionCountryCode? {#subdivisioncountrycode}

> `optional` **subdivisionCountryCode?**: `string`

Subdivision country code.
See https://docs.gaia-x.eu/ontology/development/enums/RegionCode/

***

### vatID? {#vatid}

> `optional` **vatID?**: `string`

The VAT identification number.

***

### leiCode? {#leicode}

> `optional` **leiCode?**: `string`

Unique LEI number as defined by GLEIF.

***

### eori? {#eori}

> `optional` **eori?**: `string`

The Economic Operators Registration and Identification number (EORI).

***

### country? {#country}

> `optional` **country?**: `string`

The country where the EORI is registered written in plain english

***

### euid? {#euid}

> `optional` **euid?**: `string`

The European Unique Identifier (EUID) for business located in the European Ec.

***

### taxId? {#taxid}

> `optional` **taxId?**: `string`

The company tax ID.
